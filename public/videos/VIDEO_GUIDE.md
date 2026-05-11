# 🎥 Work Experience Videos Guide

Add videos to showcase your work in action!

---

## 📋 Required Videos

### Experience 1: Live Stream Production
- **Filename**: `experience1.mp4`
- **Content**: Live streaming setup, production in action, technical operations

### Experience 2: Media Production
- **Filename**: `experience2.mp4`
- **Content**: Media production work, editing process, content creation

### Experience 3: Gaming Content Creation
- **Filename**: `experience3.mp4`
- **Content**: Gaming streams, viewer engagement, content highlights

---

## 🎬 Video Specifications

### Technical Requirements:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 
  - Recommended: 1920x1080 (Full HD)
  - Minimum: 1280x720 (HD)
- **Aspect Ratio**: 16:9 (landscape)
- **Frame Rate**: 30fps or 60fps
- **File Size**: Under 50MB per video
- **Duration**: 30 seconds to 2 minutes

### Quality Guidelines:
- ✅ Clear video quality
- ✅ Good lighting
- ✅ Stable footage (no shaky camera)
- ✅ Clear audio (if applicable)
- ✅ Professional content
- ✅ Relevant to the work experience

---

## 🎨 Content Ideas

### Live Stream Production Video:
- Behind-the-scenes of live stream setup
- Multi-camera switching demonstration
- Control room operations
- Live event coverage
- Technical equipment in action
- Stream quality monitoring

### Media Production Video:
- Video editing workflow
- Content creation process
- Social media content examples
- Production equipment showcase
- Team collaboration
- Before/after editing comparison

### Gaming Content Creation Video:
- Gaming stream highlights
- Viewer interaction moments
- Stream overlay showcase
- Gaming setup tour
- Community engagement
- Content creation process

---

## 🛠️ Video Optimization

### Recommended Tools:

**Free Tools:**
- **HandBrake** - Video compression
- **DaVinci Resolve** - Video editing
- **OBS Studio** - Screen recording
- **Shotcut** - Video editing

**Online Tools:**
- **Clipchamp** - Online video editor
- **CloudConvert** - Format conversion
- **Online Video Compressor** - Size reduction

### Compression Settings:

**HandBrake Settings:**
```
Format: MP4
Video Codec: H.264
Quality: RF 23-25
Frame Rate: Same as source
Resolution: 1920x1080 or 1280x720
Audio: AAC, 128-192 kbps
```

**Target File Sizes:**
- 30 seconds: 5-10 MB
- 1 minute: 10-20 MB
- 2 minutes: 20-40 MB

---

## 📐 Video Editing Tips

### 1. Keep It Concise:
- Focus on key moments
- Remove unnecessary footage
- Maintain viewer interest
- Aim for 30-90 seconds

### 2. Add Context:
- Brief text overlays (optional)
- Show your role clearly
- Highlight technical skills
- Demonstrate expertise

### 3. Professional Quality:
- Stable footage
- Good lighting
- Clear audio
- Smooth transitions
- Consistent branding

### 4. Accessibility:
- Add captions (optional)
- Ensure good contrast
- Clear visuals
- Readable text

---

## 🎯 Video Checklist

Before adding your video:

- [ ] Video is in MP4 format
- [ ] Resolution is 1280x720 or higher
- [ ] File size is under 50MB
- [ ] Duration is 30 seconds to 2 minutes
- [ ] Content is professional and relevant
- [ ] Video quality is clear
- [ ] Audio is clear (if applicable)
- [ ] Named correctly (experience1.mp4, etc.)
- [ ] Placed in `public/videos/` folder
- [ ] Tested in the modal viewer

---

## 🚀 How It Works

### In the Gallery:
1. Click **"View Media"** button on work experience card
2. Navigate through 7 images using arrow buttons
3. **Video appears as the 8th item** in the gallery
4. Video has play/pause controls
5. Navigate back to images or close modal

### Video Controls:
- ✅ Play/Pause button
- ✅ Volume control
- ✅ Fullscreen option
- ✅ Progress bar
- ✅ Auto-pause when switching items

---

## 📂 File Structure

```
public/
├── images/
│   ├── experience1-1.png through experience1-7.png
│   ├── experience2-1.png through experience2-7.png
│   └── experience3-1.png through experience3-7.png
└── videos/
    ├── experience1.mp4  ← Add here
    ├── experience2.mp4  ← Add here
    └── experience3.mp4  ← Add here
```

---

## 🎬 Recording Your Videos

### Screen Recording:
**For technical work, stream setups:**
- Use OBS Studio (free)
- Record at 1920x1080
- 30-60 fps
- Include audio if explaining

### Camera Recording:
**For behind-the-scenes, workspace:**
- Use smartphone or camera
- Landscape orientation (16:9)
- Good lighting
- Stable footage (use tripod)

### Editing:
1. Trim to best moments
2. Add intro/outro (optional)
3. Adjust audio levels
4. Export in MP4 format
5. Compress if over 50MB

---

## 💡 Pro Tips

### Content Tips:
1. **Show, Don't Tell**: Let the video demonstrate your skills
2. **Action Shots**: Show yourself working, not just equipment
3. **Variety**: Mix wide shots and close-ups
4. **Context**: Include brief context of what's happening
5. **Quality Over Length**: 30 seconds of great content beats 2 minutes of filler

### Technical Tips:
1. **Test First**: Always test video playback before finalizing
2. **Backup**: Keep original high-quality versions
3. **Optimize**: Compress for web without losing quality
4. **Format**: Stick to MP4 for best compatibility
5. **Mobile**: Test on mobile devices too

### Privacy Tips:
1. **Blur Sensitive Info**: Remove any private information
2. **Get Permission**: If showing others, get their consent
3. **Client Work**: Ensure you have rights to show the content
4. **Watermark**: Add your logo if desired

---

## 🐛 Troubleshooting

### Video Won't Play:
- Check file format (must be MP4)
- Verify file path is correct
- Ensure file isn't corrupted
- Try different browser
- Check file size (under 50MB)

### Video Quality Poor:
- Use higher resolution source
- Adjust compression settings
- Increase bitrate
- Use better codec (H.264)

### File Too Large:
- Compress using HandBrake
- Reduce resolution to 720p
- Lower bitrate
- Trim unnecessary footage
- Reduce frame rate to 30fps

### Video Not Showing in Gallery:
- Check filename matches exactly
- Verify file is in `public/videos/` folder
- Check `js/data.js` has video path
- Clear browser cache
- Check browser console for errors

---

## 🎨 Optional: YouTube Integration

Instead of hosting large video files, you can link to YouTube:

### Update `js/data.js`:
```javascript
{
    company: "Live Stream Production",
    // ... other fields
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
}
```

### Benefits:
- ✅ No file size limits
- ✅ Better streaming performance
- ✅ YouTube player controls
- ✅ Analytics available

### Note:
You'll need to update the video player code to support YouTube embeds.

---

## ✅ Quick Start

1. **Record** your work experience videos
2. **Edit** to 30-90 seconds
3. **Compress** to under 50MB
4. **Name** as experience1.mp4, experience2.mp4, experience3.mp4
5. **Place** in `public/videos/` folder
6. **Test** by clicking "View Media" buttons

---

## 📊 What You Get

### Each Work Experience Shows:
- 7 professional images
- 1 video demonstration
- Total: 8 media items per experience
- Smooth navigation between all items
- Professional presentation

### Gallery Features:
- ✅ Image and video in one gallery
- ✅ Video appears as 8th item
- ✅ Full video controls
- ✅ Keyboard navigation
- ✅ Mobile-friendly
- ✅ Auto-pause when switching

---

**Ready to showcase your work in motion? Add your videos now! 🎥**
