# 📝 Customization Guide

This guide will help you customize your portfolio website step by step.

## 🎯 Quick Start Checklist

- [ ] Update personal information in `js/data.js`
- [ ] Replace images in `public/images/`
- [ ] Update contact details in `index.html`
- [ ] Customize social media links
- [ ] Test on different devices

---

## 1️⃣ Updating Your Content

### Edit Work Experience

Open `js/data.js` and find the `experienceData` array:

```javascript
const experienceData = [
    {
        company: "Your Company Name",
        position: "Your Position",
        duration: "2020 - Present",
        responsibilities: [
            "Your responsibility 1",
            "Your responsibility 2",
            "Your responsibility 3"
        ]
    }
    // Add more experiences...
];
```

**Tips:**
- List experiences in reverse chronological order (newest first)
- Keep responsibilities concise and impactful
- Use action verbs (Led, Managed, Developed, etc.)

### Edit Skills

Find the `skillsData` array in `js/data.js`:

```javascript
const skillsData = [
    { name: "Your Skill", icon: "🎯" }
    // Add more skills...
];
```

**Icon Options:**
- Use emoji icons (🎬 📹 💻 ⚡ 🔧)
- Or replace with text like "HTML" or "CSS"

### Edit Services

Find the `servicesData` array in `js/data.js`:

```javascript
const servicesData = [
    {
        title: "Service Name",
        description: "Service description here",
        icon: "💼"
    }
    // Add more services...
];
```

### Edit Projects

Find the `projectsData` array in `js/data.js`:

```javascript
const projectsData = [
    {
        title: "Project Name",
        description: "Brief project description",
        image: "public/images/project1.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/yourusername/project",
        liveLink: "https://your-project-demo.com"
    }
    // Add more projects...
];
```

**Important:**
- Use relative paths for images
- Add actual GitHub and live demo links
- List relevant technologies used

---

## 2️⃣ Replacing Images

### Hero Image (Your Photo)

1. Prepare your image:
   - Recommended size: 400x400px (square)
   - Format: PNG with transparent background (preferred) or JPG
   - File name: `hero.png`

2. Place in: `public/images/hero.png`

### Project Images

1. Prepare project screenshots:
   - Recommended size: 800x400px (2:1 ratio)
   - Format: PNG or JPG
   - File names: `project1.png`, `project2.png`, `project3.png`

2. Place in: `public/images/`

3. Update paths in `js/data.js` if using different names

**Image Tips:**
- Use high-quality images
- Optimize file sizes (use tools like TinyPNG)
- Keep consistent aspect ratios
- Use descriptive file names

---

## 3️⃣ Updating Contact Information

Open `index.html` and find the Contact Section (around line 200):

### Email

```html
<p>johaeber@example.com</p>
```
Replace with your actual email.

### Phone

```html
<p>+1 (555) 123-4567</p>
```
Replace with your actual phone number.

### Location

```html
<p>Your City, Country</p>
```
Replace with your location.

---

## 4️⃣ Updating Social Media Links

### Floating Social Buttons

Find the social buttons section in `index.html` (around line 40):

```html
<a href="#" class="social-btn" aria-label="Facebook" target="_blank">
```

Replace `href="#"` with your actual social media URLs:

```html
<a href="https://facebook.com/yourprofile" class="social-btn" aria-label="Facebook" target="_blank">
<a href="https://linkedin.com/in/yourprofile" class="social-btn" aria-label="LinkedIn" target="_blank">
<a href="https://instagram.com/yourprofile" class="social-btn" aria-label="Instagram" target="_blank">
```

---

## 5️⃣ Customizing Colors

Open `css/utilities.css` and find the `:root` section:

```css
:root {
    /* Primary accent color (cyan/neon blue) */
    --color-primary: #00f0ff;
    
    /* Background colors */
    --color-dark: #050816;
    --color-secondary: #0a0e27;
    
    /* Text colors */
    --color-light: #ffffff;
    --color-gray: #8892b0;
}
```

**Color Scheme Ideas:**
- **Purple Theme**: `--color-primary: #a855f7;`
- **Green Theme**: `--color-primary: #10b981;`
- **Orange Theme**: `--color-primary: #f97316;`
- **Pink Theme**: `--color-primary: #ec4899;`

---

## 6️⃣ Customizing Typography

In `css/utilities.css`, adjust font sizes:

```css
:root {
    --font-size-hero: 4rem;      /* Main hero title */
    --font-size-xxl: 3rem;       /* Section titles */
    --font-size-xl: 2rem;        /* Subsection titles */
    --font-size-lg: 1.5rem;      /* Large text */
    --font-size-md: 1.125rem;    /* Body text */
    --font-size-sm: 1rem;        /* Small text */
}
```

**Font Family:**

Replace the default font:

```css
--font-primary: 'Your Font', sans-serif;
```

Don't forget to import the font in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

---

## 7️⃣ Adjusting Spacing

In `css/utilities.css`:

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    --spacing-xxl: 6rem;
}
```

Increase or decrease values to adjust spacing throughout the site.

---

## 8️⃣ Modifying Animations

### Disable Animations

In `js/animations.js`, comment out the initialization:

```javascript
// initScrollAnimations();
// initRevealAnimations();
```

### Adjust Animation Speed

In `css/animations.css`, modify duration:

```css
@keyframes fadeIn {
    /* Change from 0.6s to your preferred speed */
}
```

In `css/utilities.css`, adjust transition speeds:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

---

## 9️⃣ Adding More Sections

### Step 1: Add HTML

In `index.html`, add a new section:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <div class="content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### Step 2: Add Navigation Link

In the navbar:

```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Step 3: Add Styles

In `css/style.css`:

```css
.new-section {
    background-color: var(--color-dark);
}
```

---

## 🔟 Testing Your Changes

### Browser Testing

1. Open `index.html` in different browsers:
   - Chrome
   - Firefox
   - Safari
   - Edge

### Responsive Testing

1. Use browser DevTools (F12)
2. Toggle device toolbar
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1200px)

### Performance Testing

1. Check image file sizes
2. Test loading speed
3. Verify animations are smooth

---

## 🐛 Common Issues & Solutions

### Images Not Showing

**Problem:** Images display as broken links

**Solution:**
- Check file paths in `js/data.js`
- Ensure images are in `public/images/`
- Verify file names match exactly (case-sensitive)

### Mobile Menu Not Working

**Problem:** Hamburger menu doesn't open

**Solution:**
- Check that `js/navigation.js` is loaded
- Verify element IDs match in HTML and JavaScript
- Check browser console for errors

### Animations Not Working

**Problem:** Scroll animations don't trigger

**Solution:**
- Ensure `js/animations.js` is loaded
- Check that elements have correct classes
- Verify Intersection Observer is supported

### Contact Form Not Submitting

**Problem:** Form doesn't do anything

**Solution:**
- The form currently shows an alert (demo mode)
- To make it functional, integrate with:
  - Email service (EmailJS, Formspree)
  - Backend API
  - Contact form service

---

## 📚 Additional Resources

### Learning Resources

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **Responsive Design**: [CSS-Tricks](https://css-tricks.com/)

### Tools

- **Image Optimization**: [TinyPNG](https://tinypng.com/)
- **Color Picker**: [Coolors](https://coolors.co/)
- **Icon Library**: [Emojipedia](https://emojipedia.org/)
- **Font Pairing**: [Google Fonts](https://fonts.google.com/)

---

## 💬 Need Help?

If you encounter issues:

1. Check the browser console (F12) for errors
2. Review the code comments
3. Verify all file paths are correct
4. Test in a different browser

---

**Happy Customizing! 🎉**
