import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { fullName, email, phoneNumber, companyName, requirement } = body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !requirement) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY || ''
    );

    // Create email content
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.subject = `New Contact Form Submission from ${fullName}`;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #f97316;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #eee;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #f97316;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #555;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              color: #888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value"><a href="tel:${phoneNumber}">${phoneNumber}</a></span>
              </div>
              <div class="field">
                <span class="label">Company Name:</span>
                <span class="value">${companyName || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="label">Requirement:</span>
                <span class="value">${requirement}</span>
              </div>
              <div class="footer">
                <p>This email was sent from your website contact form.</p>
                <p>Arka Infotech Software Solutions LLP</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME || 'Arka Infotech',
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@arkainfotech.com',
    };

    sendSmtpEmail.to = [
      {
        email: process.env.BREVO_RECIPIENT_EMAIL || 'info@arkainfotech.com',
        name: 'Arka Infotech Team',
      },
    ];

    // Optional: Send a copy to the person who submitted the form
    sendSmtpEmail.replyTo = {
      email: email,
      name: fullName,
    };

    // Send the email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

