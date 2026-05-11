# 🎨 Visual Design Guide

This guide describes the visual appearance and layout of your portfolio website.

---

## 🎨 Color Palette

### Primary Colors
```
Neon Cyan (Primary Accent)
HEX: #00f0ff
RGB: rgb(0, 240, 255)
Use: Buttons, links, highlights, glow effects

Dark Background
HEX: #050816
RGB: rgb(5, 8, 22)
Use: Main background

Secondary Background
HEX: #0a0e27
RGB: rgb(10, 14, 39)
Use: Cards, sections, navbar
```

### Text Colors
```
White (Primary Text)
HEX: #ffffff
RGB: rgb(255, 255, 255)
Use: Headings, important text

Light Gray (Body Text)
HEX: #ccd6f6
RGB: rgb(204, 214, 246)
Use: Paragraphs, descriptions

Gray (Secondary Text)
HEX: #8892b0
RGB: rgb(136, 146, 176)
Use: Subtitles, less important text
```

---

## 📐 Layout Structure

### Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (Fixed Top)                             │
│  [Logo]  Home About Experience Skills Projects  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  HERO SECTION (Full Screen)                     │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │  Text Content    │  │  Profile Image   │    │
│  │  - Greeting      │  │  [Your Photo]    │    │
│  │  - Name          │  │  with glow       │    │
│  │  - Role          │  │                  │    │
│  │  - Description   │  │                  │    │
│  │  [Buttons]       │  │                  │    │
│  └──────────────────┘  └──────────────────┘    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ABOUT SECTION                                   │
│  ┌───────────────────────────────────────────┐  │
│  │  About Me (Centered)                      │  │
│  │  Professional background text...          │  │
│  │  Career transition story...               │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  EXPERIENCE SECTION (Timeline)                   │
│  ┌────────┐ ● ┌────────┐                        │
│  │ Date   │ │ │ Card   │                        │
│  └────────┘ │ └────────┘                        │
│             │                                    │
│  ┌────────┐ ● ┌────────┐                        │
│  │ Card   │ │ │ Date   │                        │
│  └────────┘ │ └────────┘                        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SKILLS & SERVICES SECTION                       │
│  Skills Grid (4 columns)                         │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │
│  │ 🎬 │ │ 📹 │ │ 🎥 │ │ 📡 │                   │
│  └────┘ └────┘ └────┘ └────┘                   │
│                                                  │
│  Services Grid (3 columns)                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Service  │ │ Service  │ │ Service  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  PROJECTS SECTION                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │        │
│  │ Title    │ │ Title    │ │ Title    │        │
│  │ Desc     │ │ Desc     │ │ Desc     │        │
│  │ [Tags]   │ │ [Tags]   │ │ [Tags]   │        │
│  │ [Links]  │ │ [Links]  │ │ [Links]  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  CONTACT SECTION                                 │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Contact Info │  │ Contact Form │            │
│  │ - Email      │  │ [Name]       │            │
│  │ - Phone      │  │ [Email]      │            │
│  │ - Location   │  │ [Message]    │            │
│  │              │  │ [Submit]     │            │
│  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER                                          │
│  © 2026 Johaeber Dida-Agun                      │
└─────────────────────────────────────────────────┘

[Social Buttons - Fixed Right Side]
┌───┐
│ f │  Facebook
├───┤
│ in│  LinkedIn
├───┤
│ ig│  Instagram
└───┘
```

### Mobile Layout (< 768px)

```
┌─────────────────────┐
│ NAVBAR              │
│ [Logo]    [☰ Menu] │
└─────────────────────┘

┌─────────────────────┐
│ HERO (Stacked)      │
│ ┌─────────────────┐ │
│ │ Text Content    │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Profile Image   │ │
│ └─────────────────┘ │
└─────────────────────┘

┌─────────────────────┐
│ ABOUT (Full Width)  │
│ Text content...     │
└─────────────────────┘

┌─────────────────────┐
│ EXPERIENCE          │
│ (Single Column)     │
│ ┌─────────────────┐ │
│ │ Card 1          │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Card 2          │ │
│ └─────────────────┘ │
└─────────────────────┘

┌─────────────────────┐
│ SKILLS (2 Columns)  │
│ ┌────┐ ┌────┐      │
│ │ 🎬 │ │ 📹 │      │
│ └────┘ └────┘      │
└─────────────────────┘

┌─────────────────────┐
│ PROJECTS (Stacked)  │
│ ┌─────────────────┐ │
│ │ Project 1       │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Project 2       │ │
│ └─────────────────┘ │
└─────────────────────┘

┌─────────────────────┐
│ CONTACT (Stacked)   │
│ ┌─────────────────┐ │
│ │ Contact Info    │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Contact Form    │ │
│ └─────────────────┘ │
└─────────────────────┘

[Social Buttons - Bottom]
[f] [in] [ig]
```

---

## 🎭 Visual Effects

### Glow Effects
- **Primary Glow**: Cyan glow around buttons and cards on hover
- **Image Glow**: Pulsing glow behind profile image
- **Shadow Glow**: Subtle glow on elevated elements

### Animations
- **Fade In**: Elements fade in as you scroll
- **Slide In**: Cards slide in from sides
- **Hover Scale**: Elements slightly grow on hover
- **Smooth Transitions**: All state changes are smooth

### Borders
- **Card Borders**: Thin cyan borders (1px)
- **Hover Borders**: Brighter cyan on hover
- **Rounded Corners**: 8-16px border radius

---

## 📱 Component Styles

### Navigation Bar
```
┌─────────────────────────────────────────────────┐
│ [JDA]    Home  About  Experience  Skills  ...   │
└─────────────────────────────────────────────────┘
- Fixed at top
- Semi-transparent dark background
- Blur effect
- Cyan underline on active link
```

### Buttons
```
┌──────────────────┐
│  View Projects   │  ← Primary (Filled cyan)
└──────────────────┘

┌──────────────────┐
│  Contact Me      │  ← Secondary (Outlined cyan)
└──────────────────┘

Hover: Glow effect + slight lift
```

### Cards
```
┌─────────────────────────────────┐
│  Card Title                     │
│  ─────────────                  │
│  Card content goes here...      │
│  More content...                │
└─────────────────────────────────┘
- Dark background (#0a0e27)
- Cyan border
- Rounded corners
- Hover: Lift + glow
```

### Project Cards
```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │   Project Image           │  │
│  └───────────────────────────┘  │
│  Project Title                  │
│  Description text...            │
│  [HTML] [CSS] [JavaScript]      │
│  [GitHub] [Live Demo]           │
└─────────────────────────────────┘
- Image at top
- Content below
- Tech tags
- Action buttons
```

### Timeline
```
Date    ●────────┐
        │  Card  │
        │        │
        └────────┘
        │
┌────────┐  ●    Date
│  Card  │  │
│        │  │
└────────┘  │
        │
```

### Social Buttons
```
┌───┐
│ f │  ← Circular
├───┤     Dark background
│ in│     Cyan border
├───┤     Hover: Cyan fill + glow
│ ig│
└───┘
```

### Form Elements
```
┌─────────────────────────────────┐
│ Name                            │
│ ┌─────────────────────────────┐ │
│ │ Input field                 │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
- Dark background
- Cyan border
- Focus: Brighter border + glow
```

---

## 🎯 Typography

### Headings
```
Hero Title (64px)
JOHAEBER DIDA-AGUN

Section Title (48px)
About Me

Subsection Title (32px)
Technical Skills

Card Title (24px)
Project Name
```

### Body Text
```
Large (18px) - Hero description
Medium (16px) - Body paragraphs
Small (14px) - Tags, labels
```

### Font Weights
- **Bold (700)**: Headings, names
- **Semi-bold (600)**: Subheadings
- **Medium (500)**: Navigation
- **Regular (400)**: Body text

---

## 🌈 Visual Hierarchy

### Primary Focus
1. Hero name (largest, gradient)
2. Section titles (large, white)
3. Call-to-action buttons (cyan, glowing)

### Secondary Focus
1. Card titles
2. Project images
3. Skill icons

### Tertiary Focus
1. Body text
2. Descriptions
3. Tags

---

## 💫 Interactive States

### Hover States
- **Links**: Color change to cyan
- **Buttons**: Glow + lift
- **Cards**: Lift + border glow
- **Images**: Slight zoom
- **Social buttons**: Fill + glow

### Active States
- **Nav links**: Cyan background
- **Buttons**: Pressed effect
- **Form inputs**: Cyan border

### Focus States
- **Form inputs**: Cyan glow
- **Buttons**: Outline
- **Links**: Underline

---

## 📏 Spacing System

### Section Spacing
- Between sections: 96px (6rem)
- Within sections: 48px (3rem)

### Component Spacing
- Between cards: 32px (2rem)
- Card padding: 32px (2rem)
- Button padding: 16px 32px

### Text Spacing
- Paragraph margin: 16px
- Heading margin: 24px
- Line height: 1.6-1.8

---

## 🎨 Design Principles

### Consistency
- Same border radius throughout
- Consistent spacing scale
- Uniform color usage
- Matching animation speeds

### Contrast
- Dark backgrounds
- Light text
- Bright accents
- Clear hierarchy

### Balance
- Centered layouts
- Even spacing
- Symmetrical grids
- Aligned elements

### Simplicity
- Clean lines
- Minimal decoration
- Clear typography
- Focused content

---

## 🖼️ Image Guidelines

### Profile Image
- **Size**: 400x400px
- **Format**: PNG (transparent) or JPG
- **Style**: Professional, clear face
- **Background**: Solid or transparent

### Project Images
- **Size**: 800x400px (2:1 ratio)
- **Format**: PNG or JPG
- **Style**: Clean screenshots
- **Quality**: High resolution

### Optimization
- **Max file size**: 200KB per image
- **Compression**: Use TinyPNG
- **Format**: WebP for best performance

---

## 🎬 Animation Timing

### Scroll Animations
- **Fade in**: 0.6s ease
- **Slide in**: 0.6s ease
- **Stagger delay**: 0.1s between items

### Hover Animations
- **Fast**: 0.2s (color changes)
- **Normal**: 0.3s (transforms)
- **Slow**: 0.5s (complex effects)

### Page Transitions
- **Smooth scroll**: 0.5s ease
- **Menu toggle**: 0.3s ease

---

## 🌟 Special Effects

### Gradient Text
- Hero name uses gradient
- White to cyan
- Smooth transition

### Glow Effects
- Cyan glow on hover
- Pulsing glow on image
- Shadow glow on cards

### Backdrop Blur
- Navbar has blur effect
- Semi-transparent backgrounds
- Modern glass effect

---

## 📱 Responsive Behavior

### Desktop (1200px+)
- Multi-column layouts
- Side-by-side content
- Large images
- Spacious padding

### Tablet (768-1199px)
- 2-column grids
- Reduced spacing
- Medium images
- Adjusted padding

### Mobile (< 768px)
- Single column
- Stacked content
- Full-width elements
- Compact spacing

---

## ✨ Pro Tips

1. **Consistency is key** - Use the same styles throughout
2. **White space matters** - Don't crowd elements
3. **Contrast for readability** - Ensure text is readable
4. **Smooth animations** - Keep them subtle
5. **Mobile-first** - Design for mobile, enhance for desktop

---

**This design creates a modern, professional, tech-inspired portfolio that stands out!**
