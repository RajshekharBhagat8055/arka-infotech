import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phoneNumber, 
      companyName, 
      requirement,
      serviceName,
      serviceCategory,
      pageUrl,
      timestamp 
    } = body;

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

    // Format date and time
    const submissionDate = timestamp 
      ? new Date(timestamp).toLocaleString('en-IN', { 
          dateStyle: 'full', 
          timeStyle: 'long',
          timeZone: 'Asia/Kolkata' 
        })
      : new Date().toLocaleString('en-IN', { 
          dateStyle: 'full', 
          timeStyle: 'long',
          timeZone: 'Asia/Kolkata' 
        });

    // Create email content
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    
    // More descriptive subject line with service information
    const emailSubject = serviceName && serviceName !== 'General Inquiry'
      ? `🎯 New ${serviceName} Inquiry from ${fullName}`
      : `📧 New Contact Form Submission from ${fullName}`;
    
    sendSmtpEmail.subject = emailSubject;
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              max-width: 650px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            .service-badge {
              display: inline-block;
              background-color: rgba(255,255,255,0.2);
              padding: 8px 20px;
              border-radius: 20px;
              margin-top: 15px;
              font-size: 14px;
              font-weight: 600;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255,255,255,0.3);
            }
            .content {
              padding: 40px 30px;
            }
            .section {
              margin-bottom: 35px;
            }
            .section-title {
              color: #f97316;
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 2px solid #f97316;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f9fafb;
              border-radius: 8px;
              border-left: 4px solid #f97316;
            }
            .label {
              font-weight: 700;
              color: #1f2937;
              display: block;
              margin-bottom: 8px;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #4b5563;
              font-size: 15px;
              word-wrap: break-word;
            }
            .value a {
              color: #f97316;
              text-decoration: none;
              font-weight: 600;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .requirement-box {
              background-color: #fffbf5;
              border: 2px solid #fed7aa;
              border-radius: 8px;
              padding: 20px;
              margin-top: 10px;
            }
            .requirement-text {
              color: #92400e;
              font-size: 15px;
              line-height: 1.8;
              white-space: pre-wrap;
            }
            .metadata {
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              padding: 25px 30px;
              color: #9ca3af;
              font-size: 13px;
            }
            .metadata-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
              padding: 8px 0;
              border-bottom: 1px solid #374151;
            }
            .metadata-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
            .metadata-label {
              font-weight: 600;
              color: #f97316;
            }
            .cta-button {
              display: inline-block;
              background-color: #f97316;
              color: white;
              padding: 14px 32px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 700;
              margin-top: 20px;
              transition: background-color 0.3s;
              text-align: center;
            }
            .footer {
              text-align: center;
              padding: 25px 30px;
              background-color: #f9fafb;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 13px;
            }
            .footer-logo {
              font-size: 16px;
              font-weight: 700;
              color: #1f2937;
              margin-bottom: 8px;
            }
            .priority-tag {
              display: inline-block;
              background-color: #dc2626;
              color: white;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            @media only screen and (max-width: 600px) {
              .container {
                margin: 0;
                border-radius: 0;
              }
              .content {
                padding: 30px 20px;
              }
              .header {
                padding: 30px 20px;
              }
              .metadata {
                padding: 20px 15px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <h1>🎯 New Lead Inquiry</h1>
              ${serviceName && serviceName !== 'General Inquiry' ? `
                <div class="service-badge">
                  ${serviceCategory || 'Service'}: ${serviceName}
                </div>
              ` : ''}
            </div>

            <!-- Main Content -->
            <div class="content">
              <!-- Customer Information Section -->
              <div class="section">
                <div class="section-title">👤 Customer Information</div>
                
                <div class="field">
                  <span class="label">Full Name</span>
                  <span class="value">${fullName}</span>
                </div>

                <div class="field">
                  <span class="label">Email Address</span>
                  <span class="value">
                    <a href="mailto:${email}">${email}</a>
                  </span>
                </div>

                <div class="field">
                  <span class="label">Phone Number</span>
                  <span class="value">
                    <a href="tel:${phoneNumber}">${phoneNumber}</a>
                  </span>
                </div>

                ${companyName ? `
                  <div class="field">
                    <span class="label">Company Name</span>
                    <span class="value">${companyName}</span>
                  </div>
                ` : ''}
              </div>

              <!-- Service Details Section -->
              ${serviceName && serviceName !== 'General Inquiry' ? `
                <div class="section">
                  <div class="section-title">🎯 Service Interest</div>
                  
                  <div class="field">
                    <span class="label">Interested Service</span>
                    <span class="value">${serviceName}</span>
                  </div>

                  ${serviceCategory ? `
                    <div class="field">
                      <span class="label">Service Category</span>
                      <span class="value">${serviceCategory}</span>
                    </div>
                  ` : ''}

                  ${pageUrl ? `
                    <div class="field">
                      <span class="label">Inquiry Source Page</span>
                      <span class="value">
                        <a href="${pageUrl}" target="_blank">${pageUrl}</a>
                      </span>
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              <!-- Requirements Section -->
              <div class="section">
                <div class="section-title">📋 Customer Requirements</div>
                <div class="requirement-box">
                  <div class="requirement-text">${requirement}</div>
                </div>
              </div>

              <!-- Call to Action -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="cta-button">
                  📧 Reply to Customer
                </a>
              </div>
            </div>

            <!-- Metadata Footer -->
            <div class="metadata">
              <div class="metadata-row">
                <span class="metadata-label">Submission Time:</span>
                <span>${submissionDate}</span>
              </div>
              <div class="metadata-row">
                <span class="metadata-label">Lead Priority:</span>
                <span><span class="priority-tag">High Priority</span></span>
              </div>
              ${pageUrl ? `
                <div class="metadata-row">
                  <span class="metadata-label">Form Location:</span>
                  <span>${serviceName || 'Website Contact Form'}</span>
                </div>
              ` : ''}
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="footer-logo">Arka Infotech Software Solutions LLP</div>
              <p style="margin: 5px 0;">Automated Lead Notification System</p>
              <p style="margin: 5px 0; font-size: 11px;">
                This is an automated email from your website contact form.<br>
                Please respond to the customer within 24 hours for best conversion rates.
              </p>
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

