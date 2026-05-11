/* ============================================
   ANIMATIONS.JS - Scroll Animations & Effects
   ============================================ */

// === INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ===
// Trigger animations when elements come into view
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// === PARALLAX EFFECT FOR HERO SECTION ===
// Add subtle parallax scrolling effect
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// === TYPING EFFECT FOR HERO TEXT ===
// Optional typing animation for hero section
function initTypingEffect(element, text, speed = 100) {
    if (!element) return;
    
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// === SMOOTH REVEAL ON SCROLL ===
// Add reveal animation to cards and sections
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.card, .project-card, .service-card, .skill-item');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        revealObserver.observe(element);
    });
}

// === ADD REVEALED CLASS STYLES ===
// Dynamically add styles for revealed elements
function addRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
}

// === FLOATING ANIMATION FOR SOCIAL BUTTONS ===
// Add subtle floating effect to social media buttons
function initFloatingButtons() {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach((button, index) => {
        button.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

// === GLOW EFFECT ON HOVER ===
// Enhanced glow effect for interactive elements
function initGlowEffects() {
    const glowElements = document.querySelectorAll('.btn, .project-card, .skill-item, .service-card');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// === INITIALIZE ALL ANIMATIONS ===
function initAnimations() {
    addRevealStyles();
    initScrollAnimations();
    initRevealAnimations();
    initFloatingButtons();
    initGlowEffects();
    
    // Optional: Uncomment to enable parallax effect
    // initParallaxEffect();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
