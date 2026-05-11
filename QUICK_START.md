# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📋 Step-by-Step Setup

### Step 1: Update Your Information (2 minutes)

Open `js/data.js` and update:

```javascript
// 1. Update your work experience
const experienceData = [
    {
        company: "YOUR COMPANY",
        position: "YOUR POSITION",
        duration: "2020 - Present",
        responsibilities: [
            "What you did...",
            "Your achievements..."
        ]
    }
];

// 2. Update your skills
const skillsData = [
    { name: "Your Skill", icon: "🎯" }
];

// 3. Update your projects
const projectsData = [
    {
        title: "Your Project",
        description: "What it does...",
        image: "public/images/project1.png",
        technologies: ["HTML", "CSS", "JS"],
        githubLink: "YOUR_GITHUB_LINK",
        liveLink: "YOUR_DEMO_LINK"
    }
];
```

### Step 2: Add Your Images (1 minute)

Place these images in `public/images/`:

- ✅ `hero.png` - Your profile photo
- ✅ `project1.png` - First project screenshot
- ✅ `project2.png` - Second project screenshot
- ✅ `project3.png` - Third project screenshot

### Step 3: Update Contact Info (1 minute)

Open `index.html` and search for:

1. **Email** - Replace `johaeber@example.com`
2. **Phone** - Replace `+1 (555) 123-4567`
3. **Location** - Replace `Your City, Country`

### Step 4: Add Social Media Links (1 minute)

In `index.html`, find the floating social buttons and update:

```html
<!-- Replace # with your actual URLs -->
<a href="https://facebook.com/yourprofile" class="social-btn">
<a href="https://linkedin.com/in/yourprofile" class="social-btn">
<a href="https://instagram.com/yourprofile" class="social-btn">
```

### Step 5: Open and Test! (30 seconds)

1. Double-click `index.html` to open in your browser
2. Check all sections
3. Test on mobile (resize browser window)
4. Click all links to verify they work

## ✅ Checklist

- [ ] Updated `js/data.js` with my information
- [ ] Added my images to `public/images/`
- [ ] Updated contact details in `index.html`
- [ ] Updated social media links
- [ ] Tested in browser
- [ ] Checked mobile responsiveness

## 🎨 Optional Customizations

### Change the Accent Color

Open `css/utilities.css` and change:

```css
--color-primary: #00f0ff;  /* Change this hex code */
```

Popular alternatives:
- Purple: `#a855f7`
- Green: `#10b981`
- Orange: `#f97316`
- Pink: `#ec4899`

### Adjust Font Sizes

In `css/utilities.css`:

```css
--font-size-hero: 4rem;  /* Make bigger or smaller */
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site is live instantly!

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 🐛 Troubleshooting

### Images Not Showing?

- Check file names match exactly (case-sensitive!)
- Verify images are in `public/images/` folder
- Make sure paths in `js/data.js` are correct

### Menu Not Working on Mobile?

- Clear browser cache
- Check browser console (F12) for errors
- Try a different browser

### Animations Not Smooth?

- Check if images are too large (compress them)
- Test in a different browser
- Disable animations in `js/animations.js` if needed

## 📚 Next Steps

1. Read `CUSTOMIZATION_GUIDE.md` for detailed customization
2. Check `README.md` for full documentation
3. Explore the code comments for understanding

## 💬 Need Help?

- Check browser console (F12) for errors
- Review code comments in each file
- Refer to `CUSTOMIZATION_GUIDE.md`

---

**You're all set! 🎉 Your portfolio is ready to impress!**
