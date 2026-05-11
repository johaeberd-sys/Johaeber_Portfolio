/* ============================================
   DATA.JS - Editable Content Data
   ============================================ */

// === WORK EXPERIENCE DATA ===
// Edit this array to update your work experience
const experienceData = [
    {
        company: "Live Stream Production",
        position: "Technical Director",
        duration: "Present",
        responsibilities: [
            "Manage live stream production operations for online platforms and gaming-related broadcasts",
            "Handle camera switching, lighting setup, audio management, DJ controls, and sound effects during live productions",
            "Ensure smooth technical execution during live broadcasts in fast-paced environments",
            "Collaborate with production teams and broadcasters to maintain stream quality and audience engagement",
            "Currently transitioning into Junior Web Development, building websites, landing pages, and sales funnels"
        ],
        images: [
            "public/images/experience1-1.png",
            "public/images/experience1-2.png",
            "public/images/experience1-3.png",
            "public/images/experience1-4.png",
            "public/images/experience1-5.png",
            "public/images/experience1-6.png",
            "public/images/experience1-7.png"
        ],
        video: "public/videos/experience1.mp4"  // Video file
    },
    {
        company: "Media Production",
        position: "Technical Director",
        duration: "2022 - 2024",
        responsibilities: [
            "Managed technical operations for live and recorded media productions",
            "Operated camera switching, lighting, sound systems, DJ controls, and live production equipment",
            "Edited content for TikTok, Facebook, and YouTube platforms",
            "Assisted and accommodated broadcasters and content creators during live sessions",
            "Worked as an all-around production support handling both technical and creative tasks"
        ],
        images: [
            "public/images/experience2-1.png",
            "public/images/experience2-2.png",
            "public/images/experience2-3.png",
            "public/images/experience2-4.png",
            "public/images/experience2-5.png",
            "public/images/experience2-6.png",
            "public/images/experience2-7.png"
        ],
        video: "public/videos/experience2.mp4"  // Video file
    },
    {
        company: "Gaming Content Creation",
        position: "Gaming Content Creator / Live Streamer",
        duration: "2020 - 2021",
        responsibilities: [
            "Created gaming-related live stream content for online audiences",
            "Engaged with viewers through interactive live broadcasts",
            "Managed basic stream setup, overlays, and audience interaction",
            "Developed communication and audience engagement skills through content creation"
        ],
        images: [
            "public/images/experience3-1.png",
            "public/images/experience3-2.png",
            "public/images/experience3-3.png",
            "public/images/experience3-4.png",
            "public/images/experience3-5.png",
            "public/images/experience3-6.png",
            "public/images/experience3-7.png"
        ],
        video: "public/videos/experience3.mp4"  // Video file
    }
];

// === SKILLS DATA ===
// Edit this array to update your skills
const skillsData = [
    { name: "Technical Direction", icon: "🎬" },
    { name: "OBS Studio", icon: "📹" },
    { name: "vMix", icon: "🎥" },
    { name: "Live Streaming", icon: "📡" },
    { name: "Camera Switching", icon: "🎞️" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Troubleshooting", icon: "🔧" }
];

// === SERVICES DATA ===
// Edit this array to update your services
const servicesData = [
    {
        title: "Livestream Setup",
        description: "Professional setup and configuration of live streaming systems for events, broadcasts, and online content creation.",
        icon: "📡"
    },
    {
        title: "Technical Direction",
        description: "Expert technical direction for live productions, ensuring smooth operations and high-quality output.",
        icon: "🎬"
    },
    {
        title: "Broadcast Support",
        description: "Comprehensive technical support for broadcast operations, including troubleshooting and system optimization.",
        icon: "🛠️"
    },
    {
        title: "Frontend Development",
        description: "Modern, responsive web development using HTML, CSS, and JavaScript to create engaging user experiences.",
        icon: "💻"
    },
    {
        title: "Portfolio Website Development",
        description: "Custom portfolio websites designed to showcase your work and professional brand effectively.",
        icon: "🌟"
    }
];

// === PROJECTS DATA ===
// Edit this array to update your projects
// IMPORTANT: Replace image paths with your actual project images
const projectsData = [
    {
        title: "Live Event Streaming Platform",
        description: "Developed a custom streaming solution for corporate events with real-time chat integration and multi-camera switching capabilities.",
        image: "public/images/project1.png",
        technologies: ["OBS Studio", "vMix", "WebRTC", "JavaScript"],
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Broadcast Control Dashboard",
        description: "Created a web-based control panel for managing multiple live streams, monitoring system health, and controlling broadcast equipment remotely.",
        image: "public/images/project2.png",
        technologies: ["HTML", "CSS", "JavaScript", "WebSockets"],
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Portfolio Website Template",
        description: "Designed and developed a modern, responsive portfolio website template for creative professionals and developers.",
        image: "public/images/project3.png",
        technologies: ["HTML5", "CSS3", "Vanilla JS", "Responsive Design"],
        githubLink: "#",
        liveLink: "#"
    }
];

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { experienceData, skillsData, servicesData, projectsData };
}
