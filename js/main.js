/* ============================================
   MAIN.JS - Main Application Logic
   ============================================ */

// === EMAILJS CONFIGURATION ===
// ⭐ IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_CONFIG = {
    serviceID: 'service_1g8b81a',      // Replace with your EmailJS Service ID
    templateID: 'template_sgkp0qr',    // Replace with your EmailJS Template ID
    publicKey: 'BQ9_Q55czIeyvg0J9'       // Replace with your EmailJS Public Key
};

// === CONTACT FORM HANDLING ===
// Handle contact form submission with EmailJS
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        
        // Get form data
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_name: 'Johaeber Dida-Agun' // Your name
        };
        
        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.serviceID === 'YOUR_SERVICE_ID') {
            // EmailJS not configured - show demo message
            console.log('Form Data:', formData);
            
            setTimeout(() => {
                alert('Demo Mode: EmailJS not configured yet.\n\nTo enable email functionality:\n1. Sign up at emailjs.com\n2. Get your Service ID, Template ID, and Public Key\n3. Update EMAILJS_CONFIG in js/main.js\n\nForm data logged to console.');
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.style.opacity = '1';
                
                // Reset form
                contactForm.reset();
            }, 1000);
            
            return;
        }
        
        // Send email using EmailJS
        emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            formData,
            EMAILJS_CONFIG.publicKey
        )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            showFormMessage('success', 'Thank you! Your message has been sent successfully. I will get back to you soon!');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.style.opacity = '1';
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            
            // Show error message
            showFormMessage('error', 'Oops! Something went wrong. Please try again or contact me directly via email.');
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.style.opacity = '1';
        });
    });
}

// Show form message (success or error)
function showFormMessage(type, message) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Insert message after form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// === SCROLL TO TOP BUTTON ===
// Optional: Add scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: var(--color-dark);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === LOADING ANIMATION ===
// Optional: Add page loading animation
function initPageLoader() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}

// === PERFORMANCE OPTIMIZATION ===
// Lazy load images for better performance
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// === THEME TOGGLE (OPTIONAL) ===
// Optional: Add dark/light theme toggle
function initThemeToggle() {
    // This is optional - the site is designed for dark theme
    // Uncomment and customize if you want to add theme switching
    
    /*
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        this.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });
    */
}

// === CONSOLE WELCOME MESSAGE ===
// Fun welcome message in console
function showConsoleMessage() {
    const styles = [
        'color: #00f0ff',
        'font-size: 16px',
        'font-weight: bold',
        'text-shadow: 0 0 10px rgba(0, 240, 255, 0.5)'
    ].join(';');
    
    console.log('%c👋 Welcome to my portfolio!', styles);
    console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #8892b0; font-size: 12px;');
}

// === INITIALIZE ALL MAIN FEATURES ===
function initMain() {
    initContactForm();
    initScrollToTop();
    initLazyLoading();
    showConsoleMessage();
    
    // Optional features (uncomment to enable)
    // initPageLoader();
    // initThemeToggle();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
} else {
    initMain();
}

// === EXPORT FOR TESTING ===
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initContactForm,
        initScrollToTop,
        initLazyLoading
    };
}
