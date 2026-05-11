/* ============================================
   PROJECTS.JS - Dynamic Content Rendering
   ============================================ */

// === RENDER EXPERIENCE TIMELINE ===
// Dynamically create experience timeline from data
function renderExperience() {
    const timeline = document.getElementById('timeline');
    
    if (!timeline || !experienceData) return;
    
    timeline.innerHTML = experienceData.map((exp, index) => `
        <div class="timeline-item fade-in stagger-${index + 1}">
            <div class="timeline-content">
                <h3 class="timeline-company">${exp.company}</h3>
                <h4 class="timeline-position">${exp.position}</h4>
                <ul class="timeline-responsibilities">
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
                ${(exp.images && exp.images.length > 0) || exp.video ? `
                    <button class="view-images-btn" onclick="openImageModal(${index})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        View Media (${exp.images ? exp.images.length : 0} ${exp.images && exp.images.length === 1 ? 'photo' : 'photos'}${exp.video ? ' + 1 video' : ''})
                    </button>
                ` : ''}
            </div>
            <div class="timeline-date">
                <span>${exp.duration}</span>
            </div>
            <div class="timeline-dot"></div>
        </div>
    `).join('');
}

// === IMAGE MODAL FUNCTIONALITY ===
function openImageModal(expIndex) {
    const experience = experienceData[expIndex];
    if ((!experience.images || experience.images.length === 0) && !experience.video) return;
    
    // Combine images and video into media array
    const mediaItems = [];
    
    // Add images
    if (experience.images && experience.images.length > 0) {
        experience.images.forEach(img => {
            mediaItems.push({ type: 'image', src: img });
        });
    }
    
    // Add video at the end
    if (experience.video) {
        mediaItems.push({ type: 'video', src: experience.video });
    }
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeImageModal()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="closeImageModal()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
                <h3 class="modal-title">${experience.company} - ${experience.position}</h3>
                <div class="modal-images-grid" id="modalImagesGrid"></div>
                <div class="modal-nav">
                    <button class="modal-nav-btn" onclick="previousImage()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"/>
                        </svg>
                    </button>
                    <span class="modal-counter" id="modalCounter">1 / ${mediaItems.length}</span>
                    <button class="modal-nav-btn" onclick="nextImage()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Update modal content
    const modalTitle = modal.querySelector('.modal-title');
    const imagesGrid = modal.querySelector('#modalImagesGrid');
    const counter = modal.querySelector('#modalCounter');
    
    modalTitle.textContent = `${experience.company} - ${experience.position}`;
    counter.textContent = `1 / ${mediaItems.length}`;
    
    imagesGrid.innerHTML = mediaItems.map((media, idx) => {
        if (media.type === 'image') {
            return `
                <div class="modal-image-container ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    <img src="${media.src}" alt="${experience.company} image ${idx + 1}" 
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect fill=%22%23f8fafc%22 width=%22800%22 height=%22600%22/%3E%3Ctext fill=%22%232563eb%22 font-family=%22Arial%22 font-size=%2224%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EWork Experience Image%3C/text%3E%3C/svg%3E'">
                </div>
            `;
        } else {
            return `
                <div class="modal-image-container modal-video-container ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    <video controls class="modal-video">
                        <source src="${media.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
        }
    }).join('');
    
    // Store current experience index and media items
    modal.dataset.expIndex = expIndex;
    modal.dataset.currentImage = 0;
    modal.dataset.totalMedia = mediaItems.length;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        // Pause all videos
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function nextImage() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    const currentImage = parseInt(modal.dataset.currentImage);
    const totalMedia = parseInt(modal.dataset.totalMedia);
    const nextIndex = (currentImage + 1) % totalMedia;
    
    showImage(nextIndex);
}

function previousImage() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    const currentImage = parseInt(modal.dataset.currentImage);
    const totalMedia = parseInt(modal.dataset.totalMedia);
    const prevIndex = (currentImage - 1 + totalMedia) % totalMedia;
    
    showImage(prevIndex);
}

function showImage(index) {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    const totalMedia = parseInt(modal.dataset.totalMedia);
    const containers = modal.querySelectorAll('.modal-image-container');
    const counter = modal.querySelector('#modalCounter');
    
    // Pause all videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });
    
    containers.forEach((container, idx) => {
        container.classList.toggle('active', idx === index);
    });
    
    counter.textContent = `${index + 1} / ${totalMedia}`;
    modal.dataset.currentImage = index;
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// === RENDER SKILLS GRID ===
// Dynamically create skills grid from data
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    if (!skillsGrid || !skillsData) return;
    
    skillsGrid.innerHTML = skillsData.map((skill, index) => `
        <div class="skill-item fade-in stagger-${(index % 6) + 1}">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
}

// === RENDER SERVICES GRID ===
// Dynamically create services grid from data
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    if (!servicesGrid || !servicesData) return;
    
    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card fade-in stagger-${(index % 5) + 1}">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

// === RENDER PROJECTS GRID ===
// Dynamically create project cards from data
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid || !projectsData) return;
    
    projectsGrid.innerHTML = projectsData.map((project, index) => `
        <div class="project-card fade-in stagger-${(index % 3) + 1}">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%230a0e27%22 width=%22400%22 height=%22200%22/%3E%3Ctext fill=%22%2300f0ff%22 font-family=%22Arial%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EProject Image%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>` : ''}
                    ${project.liveLink ? `<a href="${project.liveLink}" class="project-link" target="_blank">Live Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// === INITIALIZE ALL CONTENT RENDERING ===
function renderAllContent() {
    renderExperience();
    renderSkills();
    renderServices();
    renderProjects();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAllContent);
} else {
    renderAllContent();
}
