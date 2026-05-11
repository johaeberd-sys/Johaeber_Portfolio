# 📧 EmailJS Setup Guide

Complete guide to set up EmailJS for your contact form.

---

## 🎯 What is EmailJS?

EmailJS allows you to send emails directly from your website without a backend server. It's:
- ✅ **Free** for up to 200 emails/month
- ✅ **Easy** to set up (5 minutes)
- ✅ **Secure** - no backend needed
- ✅ **Reliable** - handles email delivery

---

## 📝 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Choose **"Sign up with Google"** or use email
4. Verify your email address
5. Log in to your dashboard

---

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Click **"Connect Account"**
5. Follow the authorization steps
6. **Copy your Service ID** (e.g., `service_abc123`)
7. Click **"Create Service"**

---

### Step 3: Create Email Template

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. **Template Name**: "Portfolio Contact Form"
4. **Edit the template content**:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

5. **Template Variables** (make sure these match):
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (optional)

6. **Copy your Template ID** (e.g., `template_xyz789`)
7. Click **"Save"**

---

### Step 4: Get Your Public Key

1. Click **"Account"** (left sidebar)
2. Scroll to **"API Keys"** section
3. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

---

### Step 5: Update Your Website

Open `js/main.js` and find this section:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',      // Replace this
    templateID: 'YOUR_TEMPLATE_ID',    // Replace this
    publicKey: 'YOUR_PUBLIC_KEY'       // Replace this
};
```

**Replace with your actual values:**

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc123',       // Your Service ID
    templateID: 'template_xyz789',     // Your Template ID
    publicKey: 'abcdefghijklmnop'      // Your Public Key
};
```

---

### Step 6: Test Your Form

1. Open your website (`index.html`)
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click **"Send Message"**
5. Check your email inbox for the message!

---

## 🎨 Customizing Email Template

### Professional Template Example:

```
Subject: 📬 New Message from {{from_name}} - Portfolio Contact

Hello Johaeber,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent from: Portfolio Website
Time: {{sent_at}}

---
To reply, simply respond to this email or contact {{from_email}} directly.
```

### Adding Auto-Reply:

1. Create a **second template** for auto-reply
2. Template Name: "Contact Form Auto Reply"
3. Content:

```
Subject: Thank you for contacting me!

Hi {{from_name}},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your message:
{{message}}

Best regards,
Johaeber Dida-Agun
Technical Director & Junior Developer

---
This is an automated response. Please do not reply to this email.
```

4. Update `js/main.js` to send both emails (see advanced section below)

---

## 🔧 Advanced Configuration

### Send Auto-Reply to User:

Update the EmailJS send function in `js/main.js`:

```javascript
// Send email to yourself
emailjs.send(
    EMAILJS_CONFIG.serviceID,
    EMAILJS_CONFIG.templateID,
    formData,
    EMAILJS_CONFIG.publicKey
)
.then(function(response) {
    // Send auto-reply to user
    return emailjs.send(
        EMAILJS_CONFIG.serviceID,
        'template_autoreply',  // Your auto-reply template ID
        {
            to_email: formData.from_email,
            to_name: formData.from_name,
            message: formData.message
        },
        EMAILJS_CONFIG.publicKey
    );
})
.then(function(response) {
    showFormMessage('success', 'Thank you! Your message has been sent successfully.');
    contactForm.reset();
})
.catch(function(error) {
    showFormMessage('error', 'Oops! Something went wrong. Please try again.');
});
```

### Add Email Notifications:

In EmailJS dashboard:
1. Go to **Email Services**
2. Click your service
3. Enable **"Email Notifications"**
4. Add your email to receive notifications

---

## 🐛 Troubleshooting

### Issue: "Failed to send email"

**Solutions:**
1. Check your Service ID, Template ID, and Public Key are correct
2. Verify your email service is connected
3. Check browser console for error messages
4. Make sure EmailJS SDK is loaded (check Network tab)

### Issue: "Template variables not working"

**Solutions:**
1. Ensure variable names match exactly: `{{from_name}}` not `{{name}}`
2. Check template in EmailJS dashboard
3. Verify formData object has correct property names

### Issue: "Emails going to spam"

**Solutions:**
1. Add your domain to SPF records (advanced)
2. Use a professional email service (Gmail, Outlook)
3. Ask recipients to whitelist your email
4. Avoid spam trigger words in subject/content

### Issue: "Rate limit exceeded"

**Solutions:**
1. Free plan: 200 emails/month
2. Upgrade to paid plan for more
3. Add rate limiting to your form (prevent spam)

---

## 💰 Pricing

### Free Plan:
- ✅ 200 emails/month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic support

### Paid Plans:
- **Personal**: $7/month - 1,000 emails
- **Professional**: $15/month - 5,000 emails
- **Enterprise**: Custom pricing

Most portfolios work fine with the **free plan**!

---

## 🔒 Security Best Practices

### 1. Protect Your Keys:
- ✅ Public Key is safe to expose (it's meant to be public)
- ❌ Never share your Private Key
- ✅ Use environment variables for sensitive data (if using build tools)

### 2. Add Rate Limiting:
```javascript
let lastSubmitTime = 0;
const RATE_LIMIT = 60000; // 1 minute

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT) {
        showFormMessage('error', 'Please wait before sending another message.');
        return;
    }
    
    lastSubmitTime = now;
    // ... rest of form submission code
});
```

### 3. Add Validation:
- Validate email format
- Check for empty fields
- Limit message length
- Add CAPTCHA (optional)

---

## 📊 Monitoring

### Check Email Stats:
1. Go to EmailJS dashboard
2. Click **"Statistics"**
3. View:
   - Emails sent
   - Success rate
   - Failed emails
   - Usage limits

### Email Logs:
1. Click **"Logs"** (left sidebar)
2. See all sent emails
3. Check delivery status
4. Debug failed sends

---

## ✅ Checklist

Before going live:

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created
- [ ] Service ID, Template ID, and Public Key copied
- [ ] `js/main.js` updated with credentials
- [ ] Form tested successfully
- [ ] Emails received in inbox
- [ ] Auto-reply working (optional)
- [ ] Error handling tested
- [ ] Mobile form tested

---

## 🎯 Quick Reference

### Your Credentials Location:
```
File: js/main.js
Lines: 8-12

const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',
    templateID: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
};
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name

### Form Field IDs:
- `name` - Name input
- `email` - Email input
- `message` - Message textarea

---

## 📚 Additional Resources

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **API Reference**: https://www.emailjs.com/docs/rest-api/send/
- **Support**: https://www.emailjs.com/support/
- **Community**: https://github.com/emailjs-com

---

## 🎉 You're Done!

Your contact form is now fully functional with EmailJS!

**Test it thoroughly before sharing your portfolio.**

---

**Need help? Check the troubleshooting section or visit EmailJS documentation.**
