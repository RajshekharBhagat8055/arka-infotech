# Brevo Email Integration Setup Guide

This guide will help you set up Brevo (formerly Sendinblue) to send contact form submissions via email.

## Prerequisites

✅ Node.js and npm installed
✅ Brevo package installed (`@getbrevo/brevo`)
✅ API route created (`/api/send-email/route.ts`)
✅ Contact form updated to use the API

---

## Step 1: Create Brevo Account

1. Go to [https://www.brevo.com/](https://www.brevo.com/)
2. Click **Sign up for free**
3. Fill in your details:
   - Email address
   - Password
   - Company name (Arka Infotech Software Solutions LLP)
4. Verify your email address
5. Complete the onboarding questionnaire

**Free Tier Includes:**
- 300 emails per day
- Unlimited contacts
- Email templates
- Real-time statistics

---

## Step 2: Get Your API Key

1. Login to your Brevo dashboard
2. Navigate to: **Settings** (top right) → **SMTP & API**
3. Click on the **API Keys** tab
4. Click **Generate a new API key**
5. Give it a name: `Contact Form API`
6. **IMPORTANT:** Copy the API key immediately (you won't see it again!)
7. Store it safely - you'll need it in Step 4

**Example API Key format:**
```
xkeysib-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz-ABCDEF123456
```

---

## Step 3: Verify Sender Email

For Brevo to send emails, you need to verify your sender email address:

1. Go to **Senders, Domains & Dedicated IPs** → **Senders**
2. Click **Add a new sender**
3. Enter your details:
   - **Email:** `info@arkainfotech.com` (or your preferred email)
   - **Name:** `Arka Infotech`
4. Click **Add**
5. Check your email inbox for verification email from Brevo
6. Click the verification link
7. Once verified, you'll see a green checkmark ✓

**Important:** You can only send emails FROM verified email addresses in Brevo.

---

## Step 4: Configure Environment Variables

1. Create a file named `.env.local` in your project root (if it doesn't exist)
2. Add the following configuration:

```env
# Brevo API Configuration
BREVO_API_KEY=xkeysib-your-actual-api-key-here
BREVO_SENDER_EMAIL=info@arkainfotech.com
BREVO_SENDER_NAME=Arka Infotech
BREVO_RECIPIENT_EMAIL=recipient@example.com
```

3. **Replace the values:**
   - `BREVO_API_KEY`: Paste your API key from Step 2
   - `BREVO_SENDER_EMAIL`: Your verified sender email from Step 3
   - `BREVO_SENDER_NAME`: Your company/sender name
   - `BREVO_RECIPIENT_EMAIL`: Email where you want to receive form submissions

**Example:**
```env
BREVO_API_KEY=xkeysib-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz-ABCDEF123456
BREVO_SENDER_EMAIL=info@arkainfotech.com
BREVO_SENDER_NAME=Arka Infotech
BREVO_RECIPIENT_EMAIL=admin@arkainfotech.com
```

---

## Step 5: Restart Development Server

After creating/updating `.env.local`, you MUST restart your development server:

```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

**Why?** Next.js only loads environment variables when the server starts.

---

## Step 6: Test the Contact Form

1. Go to your website: `http://localhost:3000`
2. Scroll to the Contact Form section
3. Fill in all required fields:
   - Full Name
   - Email Address
   - Phone Number
   - Company Name (optional)
   - Requirement
4. Click **Submit Inquiry**
5. You should see:
   - Button changes to "Sending..."
   - Success message appears (green with checkmark)
   - Form resets automatically
6. Check your recipient email inbox - you should receive the form data!

---

## Email Template Preview

The email you receive will look like this:

**Subject:** New Contact Form Submission from [Customer Name]

**Body:**
```
┌──────────────────────────────────────┐
│   New Contact Form Submission        │
└──────────────────────────────────────┘

Full Name:     John Doe
Email:         john.doe@example.com
Phone Number:  +91 98765 43210
Company Name:  Tech Solutions Pvt. Ltd.
Requirement:   We need a custom e-commerce website...

──────────────────────────────────────
This email was sent from your website contact form.
Arka Infotech Software Solutions LLP
```

---

## Troubleshooting

### Issue: "Failed to send email"

**Possible Causes:**
1. ❌ Invalid API key
   - **Solution:** Double-check your API key in `.env.local`
   
2. ❌ Sender email not verified
   - **Solution:** Verify your sender email in Brevo dashboard
   
3. ❌ Environment variables not loaded
   - **Solution:** Restart your development server
   
4. ❌ API key has insufficient permissions
   - **Solution:** Regenerate API key with full permissions

### Issue: "Email not received"

**Check:**
1. ✓ Spam/Junk folder
2. ✓ Recipient email is correct in `.env.local`
3. ✓ Brevo dashboard → **Statistics** to see if email was sent
4. ✓ Sender email is verified

### Issue: "BREVO_API_KEY is undefined"

**Solution:**
1. Ensure `.env.local` exists in project root
2. Restart the development server
3. Check for typos in variable names

---

## Production Deployment (Vercel/Other Platforms)

When deploying to production:

1. **Add Environment Variables** to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - AWS/Others: Follow their environment variable setup

2. **Add these variables:**
   ```
   BREVO_API_KEY=your_api_key
   BREVO_SENDER_EMAIL=info@arkainfotech.com
   BREVO_SENDER_NAME=Arka Infotech
   BREVO_RECIPIENT_EMAIL=admin@arkainfotech.com
   ```

3. **Redeploy** your application after adding variables

---

## Brevo Dashboard Features

After setting up, explore Brevo dashboard:

1. **Statistics** - Track sent emails, opens, clicks
2. **Email Templates** - Create reusable email templates
3. **Contacts** - Manage your contact list
4. **Campaigns** - Send marketing emails
5. **Automation** - Set up email automation workflows

---

## Advanced Configuration (Optional)

### Add Auto-Reply Email to Customer

Update `/api/send-email/route.ts` to send a confirmation email to the customer:

```typescript
// Send auto-reply to customer
const autoReply = new brevo.SendSmtpEmail();
autoReply.subject = 'Thank you for contacting Arka Infotech';
autoReply.htmlContent = `
  <h2>Thank you, ${fullName}!</h2>
  <p>We've received your inquiry and will get back to you within 24 hours.</p>
  <p>In the meantime, feel free to explore our services at www.arkainfotech.com</p>
`;
autoReply.sender = {
  name: process.env.BREVO_SENDER_NAME,
  email: process.env.BREVO_SENDER_EMAIL,
};
autoReply.to = [{ email: email, name: fullName }];

await apiInstance.sendTransacEmail(autoReply);
```

### Increase Email Quota

If you need to send more than 300 emails/day:
- Go to Brevo dashboard → **Plans & Pricing**
- Choose a paid plan (starts at $25/month for 20,000 emails)

---

## Security Best Practices

✅ **Never commit `.env.local`** to git (already in .gitignore)
✅ **Use different API keys** for development and production
✅ **Rotate API keys** periodically (every 3-6 months)
✅ **Monitor usage** in Brevo dashboard to detect unusual activity
✅ **Enable rate limiting** if you get high traffic

---

## Support & Resources

- **Brevo Documentation:** https://developers.brevo.com/
- **API Reference:** https://developers.brevo.com/reference/sendtransacemail
- **Support:** https://help.brevo.com/
- **Status Page:** https://status.brevo.com/

---

## Quick Checklist

Before going live, ensure:

- [ ] Brevo account created
- [ ] API key generated and saved
- [ ] Sender email verified in Brevo
- [ ] `.env.local` file created with all 4 variables
- [ ] Environment variables added to production hosting
- [ ] Development server restarted after env changes
- [ ] Test form submission works
- [ ] Email received in recipient inbox
- [ ] Success/error messages display correctly

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Check server logs in terminal
3. Verify API key and sender email in Brevo dashboard
4. Ensure all environment variables are set correctly
5. Restart your development server

**Email sending typically fails due to:**
- Invalid or missing API key (90%)
- Unverified sender email (8%)
- Environment variables not loaded (2%)

Good luck! 🚀

