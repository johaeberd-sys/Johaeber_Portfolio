# 🔧 Troubleshooting Guide

Common issues and how to fix them.

---

## 🖼️ Image Issues

### Problem: Images Not Showing

**Symptoms:**
- Broken image icons
- Alt text displayed instead of image
- Empty image containers

**Solutions:**

1. **Check File Path**
   ```javascript
   // In js/data.js, ensure paths are correct:
   image: "public/images/project1.png"  ✅ Correct
   image: "/images/project1.png"        ❌ Wrong
   image: "C:/Users/me/images/..."      ❌ Wrong
   ```

2. **Check File Names**
   - File names are case-sensitive
   - `Hero.png` ≠ `hero.png`
   - Ensure exact match

3. **Check File Location**
   ```
   portfolio/
   └── public/
       └── images/
           ├── hero.png      ✅ Here
           ├── project1.png  ✅ Here
           └── project2.png  ✅ Here
   ```

4. **Check File Format**
   - Use: `.png`, `.jpg`, `.jpeg`
   - Avoid: `.webp`, `.gif`, `.bmp`

5. **Browser Cache**
   - Hard refresh: `Ctrl + Shift + R` (Windows)
   - Or: `Cmd + Shift + R` (Mac)

---

### Problem: Images Too Large/Slow Loading

**Symptoms:**
- Page loads slowly
- Images take time to appear
- Poor performance

**Solutions:**

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com)
   - Target: < 200KB per image

2. **Resize Images**
   - Hero: 400x400px
   - Projects: 800x400px

3. **Use Correct Format**
   - Photos: JPG
   - Graphics: PNG
   - Transparency: PNG

---

## 🎨 Styling Issues

### Problem: Styles Not Applied

**Symptoms:**
- Site looks unstyled
- Plain HTML appearance
- No colors or layout

**Solutions:**

1. **Check CSS File Links**
   ```html
   <!-- In index.html, verify these exist: -->
   <link rel="stylesheet" href="css/utilities.css">
   <link rel="stylesheet" href="css/animations.css">
   <link rel="stylesheet" href="css/style.css">
   ```

2. **Check File Paths**
   - CSS files must be in `css/` folder
   - Paths are relative to `index.html`

3. **Clear Browser Cache**
   - `Ctrl + Shift + R` (Windows)
   - `Cmd + Shift + R` (Mac)

4. **Check for Typos**
   - Look for missing semicolons
   - Check bracket matching
   - Verify property names

---

### Problem: Colors Not Changing

**Symptoms:**
- Custom colors not showing
- Still seeing default colors

**Solutions:**

1. **Check CSS Variables**
   ```css
   /* In css/utilities.css */
   :root {
       --color-primary: #00f0ff;  /* Your color here */
   }
   ```

2. **Use Correct Variable**
   ```css
   color: var(--color-primary);  ✅ Correct
   color: --color-primary;       ❌ Wrong
   ```

3. **Clear Cache**
   - Hard refresh browser
   - Close and reopen browser

---

## 📱 Mobile/Responsive Issues

### Problem: Mobile Menu Not Working

**Symptoms:**
- Hamburger icon doesn't respond
- Menu doesn't open
- No mobile navigation

**Solutions:**

1. **Check JavaScript Loaded**
   ```html
   <!-- In index.html, verify: -->
   <script src="js/navigation.js"></script>
   ```

2. **Check Element IDs**
   ```html
   <!-- Must match exactly: -->
   <div class="hamburger" id="hamburger">
   <ul class="nav-menu" id="navMenu">
   ```

3. **Check Console for Errors**
   - Press `F12`
   - Look for red errors
   - Fix any JavaScript errors

4. **Test on Actual Device**
   - Browser resize ≠ real mobile
   - Test on actual phone/tablet

---

### Problem: Layout Broken on Mobile

**Symptoms:**
- Content overflows
- Elements overlap
- Horizontal scrolling

**Solutions:**

1. **Check Viewport Meta Tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Check Fixed Widths**
   - Avoid: `width: 1000px;`
   - Use: `max-width: 100%;`

3. **Test Different Sizes**
   - 375px (mobile)
   - 768px (tablet)
   - 1200px (desktop)

---

## ⚡ JavaScript Issues

### Problem: Animations Not Working

**Symptoms:**
- No fade-in effects
- No scroll animations
- Static page

**Solutions:**

1. **Check JavaScript Files**
   ```html
   <!-- Verify all scripts loaded: -->
   <script src="js/data.js"></script>
   <script src="js/navigation.js"></script>
   <script src="js/projects.js"></script>
   <script src="js/animations.js"></script>
   <script src="js/main.js"></script>
   ```

2. **Check Load Order**
   - `data.js` must load first
   - Other scripts depend on it

3. **Check Browser Support**
   - Use modern browser
   - Update to latest version

4. **Check Console**
   - Press `F12`
   - Look for JavaScript errors

---

### Problem: Content Not Displaying

**Symptoms:**
- Empty sections
- No projects showing
- No experience timeline

**Solutions:**

1. **Check data.js**
   ```javascript
   // Ensure arrays are not empty:
   const projectsData = [
       { /* project data */ }  // Must have content
   ];
   ```

2. **Check Element IDs**
   ```javascript
   // In projects.js, IDs must match HTML:
   document.getElementById('projectsGrid')
   ```
   ```html
   <!-- In index.html: -->
   <div id="projectsGrid"></div>
   ```

3. **Check Console**
   - Look for errors
   - Fix any issues found

---

### Problem: Contact Form Not Working

**Symptoms:**
- Form doesn't submit
- No response when clicking submit
- Form just refreshes page

**Solutions:**

1. **Expected Behavior**
   - Form shows alert (demo mode)
   - This is normal!
   - To make functional, integrate backend

2. **Check Form Handler**
   ```javascript
   // In js/main.js, verify:
   function initContactForm() {
       // Form handling code
   }
   ```

3. **Integrate Backend** (Optional)
   - Use EmailJS
   - Use Formspree
   - Use custom backend

---

## 🌐 Deployment Issues

### Problem: Site Not Loading After Deploy

**Symptoms:**
- 404 error
- Page not found
- Blank page

**Solutions:**

1. **Check File Name**
   - Must be: `index.html` (lowercase)
   - Not: `Index.html` or `home.html`

2. **Check File Location**
   - `index.html` in root folder
   - Not in subfolder

3. **Wait for Deployment**
   - GitHub Pages: 2-5 minutes
   - Netlify: 30 seconds
   - Vercel: 30 seconds

4. **Check Build Logs**
   - Look for deployment errors
   - Fix any issues reported

---

### Problem: Images Not Loading Online

**Symptoms:**
- Images work locally
- Broken online

**Solutions:**

1. **Check Paths**
   ```javascript
   // Use relative paths:
   image: "public/images/hero.png"  ✅
   
   // Not absolute:
   image: "C:/Users/me/..."         ❌
   ```

2. **Check File Upload**
   - Ensure images uploaded
   - Check `public/images/` folder exists

3. **Check Case Sensitivity**
   - Online servers are case-sensitive
   - `Hero.png` ≠ `hero.png`

---

### Problem: CSS Not Loading Online

**Symptoms:**
- Styled locally
- Unstyled online

**Solutions:**

1. **Check File Paths**
   ```html
   <!-- Use relative paths: -->
   <link rel="stylesheet" href="css/style.css">
   
   <!-- Not absolute: -->
   <link rel="stylesheet" href="/Users/me/css/style.css">
   ```

2. **Check File Upload**
   - Ensure all CSS files uploaded
   - Check `css/` folder exists

3. **Clear CDN Cache**
   - Wait a few minutes
   - Hard refresh browser

---

## 🔍 Browser Issues

### Problem: Works in Chrome, Not in Safari

**Solutions:**

1. **Check CSS Prefixes**
   ```css
   /* Add vendor prefixes: */
   -webkit-transform: translateY(0);
   transform: translateY(0);
   ```

2. **Check JavaScript Features**
   - Use standard features
   - Avoid experimental APIs

3. **Test in Multiple Browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

---

### Problem: Console Errors

**Common Errors:**

1. **"Cannot read property of undefined"**
   - Check element exists
   - Check ID matches

2. **"Failed to load resource"**
   - Check file path
   - Check file exists

3. **"Unexpected token"**
   - Check for syntax errors
   - Check for missing brackets

**How to Fix:**
- Read error message carefully
- Check line number mentioned
- Fix the specific issue

---

## 🎯 Performance Issues

### Problem: Slow Loading

**Solutions:**

1. **Optimize Images**
   - Compress all images
   - Use appropriate sizes

2. **Minimize Files**
   - Remove unused code
   - Combine CSS files (optional)

3. **Check File Sizes**
   - Images: < 200KB each
   - CSS: < 100KB total
   - JS: < 100KB total

---

### Problem: Laggy Animations

**Solutions:**

1. **Reduce Animation Complexity**
   ```css
   /* Simpler animations: */
   transition: opacity 0.3s ease;
   ```

2. **Use Transform Instead of Position**
   ```css
   /* Better performance: */
   transform: translateY(10px);  ✅
   
   /* Worse performance: */
   top: 10px;                    ❌
   ```

3. **Disable on Mobile** (Optional)
   ```css
   @media (max-width: 768px) {
       * {
           animation: none !important;
       }
   }
   ```

---

## 🛠️ General Debugging Steps

### Step 1: Check Browser Console
```
1. Press F12
2. Click "Console" tab
3. Look for red errors
4. Read error messages
5. Fix issues one by one
```

### Step 2: Verify File Structure
```
portfolio/
├── index.html          ✅ Root level
├── css/
│   ├── utilities.css   ✅ All CSS files
│   ├── animations.css
│   └── style.css
├── js/
│   ├── data.js         ✅ All JS files
│   ├── navigation.js
│   ├── projects.js
│   ├── animations.js
│   └── main.js
└── public/
    └── images/         ✅ All images
```

### Step 3: Test in Incognito Mode
```
1. Open incognito/private window
2. Test your site
3. Eliminates cache issues
4. Shows fresh version
```

### Step 4: Validate Code
```
HTML: https://validator.w3.org/
CSS: https://jigsaw.w3.org/css-validator/
```

### Step 5: Compare with Original
```
1. Check original files
2. Compare your changes
3. Identify differences
4. Revert if needed
```

---

## 📞 Still Having Issues?

### Checklist:
- [ ] Checked browser console
- [ ] Verified file paths
- [ ] Cleared browser cache
- [ ] Tested in different browser
- [ ] Checked file structure
- [ ] Reviewed code comments
- [ ] Compared with original

### Resources:
- MDN Web Docs: https://developer.mozilla.org/
- Stack Overflow: https://stackoverflow.com/
- Browser DevTools: Press F12

---

## 💡 Prevention Tips

1. **Make Backups**
   - Save original files
   - Use version control (Git)

2. **Test Frequently**
   - Test after each change
   - Don't make many changes at once

3. **Use Comments**
   - Comment your changes
   - Document modifications

4. **Keep It Simple**
   - Start with small changes
   - Test before moving on

---

**Most issues are simple fixes - don't panic! Check the basics first.**
