# Email Setup Instructions

To enable the contact form to send emails to your inbox, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Muhammad Moazzam Hafeez,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Contact.tsx
1. Open `src/components/Contact.tsx`
2. Replace the placeholder values in the `handleSubmit` function:
   - Replace `'service_your_service_id'` with your actual Service ID
   - Replace `'template_your_template_id'` with your actual Template ID
   - Replace `'your_public_key'` with your actual Public Key

## 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Alternative: Direct Email Link
If you prefer not to use EmailJS, the contact form will show an error message with your direct email address (moazzaam21@gmail.com) for users to contact you directly.

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for a personal portfolio website.
