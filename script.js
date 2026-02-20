// ============================
// DATA
// ============================
const projects = [
    {
        id: 1,
        emoji: '🔐',
        gradient: 'linear-gradient(135deg, #0F766E 0%, #7C3AED 100%)',
        title: 'Hybrid Security for Medical Imaging Using Blockchain',
        short: 'Multi-layer security framework using AES-256 + IPFS for tamper-proof medical data.',
        tech: ['Python', 'AES-256', 'DWT', 'JPEG-2000', 'IPFS', 'Blockchain'],
        highlights: [
            'Designed multi-layer security using AES-256 encryption and DWT-based watermarking',
            'Protected medical and biometric images against unauthorized access',
            'Integrated IPFS for decentralized, tamper-proof data storage',
            'Implemented secure access control mechanisms',
            'Automated encryption, compression, and retrieval pipeline',
            'Reduced security risks by 90%'
        ],
        slides: ['🔐', '🏥', '⛓️', '🛡️', '📊']
    },
    {
        id: 2,
        emoji: '📅',
        gradient: 'linear-gradient(135deg, #22D3EE 0%, #F97316 100%)',
        title: 'Online Appointment System (MERN Stack)',
        short: 'Full-stack scheduling system supporting 100+ concurrent users with role-based access.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        highlights: [
            'Developed full-stack appointment scheduling system',
            'Supports 100+ concurrent users seamlessly',
            'Implemented RESTful APIs for robust data interchange',
            'Built secure authentication with role-based access control',
            'Optimized database queries reducing booking time by 40%',
            'Improved overall system performance significantly'
        ],
        slides: ['📅', '⚛️', '🛠️', '🔑', '📈']
    },
    {
        id: 3,
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
        title: 'Eligibility Check Web Application',
        short: 'Responsive web app for automated eligibility validation using SQL backend logic.',
        tech: ['HTML', 'CSS', 'SQL'],
        highlights: [
            'Developed responsive web application for user eligibility validation',
            'Built SQL-based backend logic for accurate verification',
            'Automated verification workflow end-to-end',
            'Reduced manual processing effort by 60%',
            'Optimized database queries for faster response times',
            'Enhanced overall user experience significantly'
        ],
        slides: ['🌐', '🗄️', '✅', '⚡', '🎯']
    },
    {
        id: 4,
        emoji: '😊',
        gradient: 'linear-gradient(135deg, #F97316 0%, #A78BFA 100%)',
        title: 'Emotion Detection System',
        short: 'Real-time CNN-based facial emotion classifier with 85–90% prediction accuracy.',
        tech: ['Python', 'OpenCV', 'CNN', 'Deep Learning'],
        highlights: [
            'Built CNN-based deep learning model for facial emotion classification',
            'Processes real-time video streams from webcam feed',
            'Achieved 85–90% prediction accuracy',
            'Implemented optimized preprocessing for better performance',
            'Integrated Haar Cascade face detection',
            'Achieved low-latency real-time inference'
        ],
        slides: ['😊', '📷', '🧠', '📊', '⚡']
    }
];

const experiences = [
    {
        role: 'Software Trainee',
        company: 'Cybervault Innovations and Technologies Pvt. Ltd.',
        period: 'Internship',
        desc: 'Worked on AI-based resume screening systems and conducted cybersecurity awareness sessions for college students.'
    },
    {
        role: 'SQL Intern',
        company: 'Gabriel Technology Solution',
        period: 'Internship',
        desc: 'Gained hands-on experience in SQL database management — writing and optimizing queries to support efficient data handling in real-time projects.'
    },
    {
        role: 'UI/UX Intern',
        company: 'Powersoft Techno Solution Pvt Ltd',
        period: 'Internship',
        desc: 'Completed training in UI/UX design principles and applied user-centered design strategies on live company projects.'
    }
];

const certifications = [
    { name: 'Full-Stack Development', issuer: 'Simplilearn', icon: '🏆' },
    { name: 'Introduction to Selenium', issuer: 'Simplilearn', icon: '🤖' },
    { name: 'Competitive Programming & Coding Interviews', issuer: 'Udemy', icon: '💡' },
    { name: 'SQL (Basic)', issuer: 'HackerRank — Apr 2023', icon: '🗄️' },
    { name: 'Basics of Computer Networking', issuer: 'Great Learning', icon: '🌐' },
    { name: 'Big Data Analytics Course', issuer: 'Great Learning', icon: '📊' }
];

// ============================
// RENDER PROJECTS
// ============================
const grid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal delay-' + (i + 1);
    card.innerHTML = `
    <div class="project-thumb" style="background:${p.gradient}">
      <span style="font-size:3.5rem;z-index:1;position:relative;">${p.emoji}</span>
      <div class="project-overlay">👁 View Details</div>
    </div>
    <div class="project-body">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.short}</div>
      <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
    </div>
  `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
});

// ============================
// RENDER EXPERIENCE FLIP CARDS
// ============================
const expIcons = ['🚀', '🗄️', '🎨'];
const expCardsGrid = document.getElementById('expCardsGrid');
experiences.forEach((exp, i) => {
    const card = document.createElement('div');
    card.className = 'exp-flip-card';
    card.style.transitionDelay = (i * 0.15) + 's';
    card.innerHTML = `
    <div class="exp-flip-inner">
      <div class="exp-front">
        <div>
          <div class="exp-icon">${expIcons[i]}</div>
          <div class="exp-role">${exp.role}</div>
          <div class="exp-company">${exp.company}</div>
          <div class="exp-period">${exp.period}</div>
        </div>
        <div style="font-size:0.73rem;color:var(--muted);font-family:'Space Mono',monospace;">Hover to read more →</div>
      </div>
      <div class="exp-back">
        <div>
          <div class="exp-back-label">What I did</div>
          <div class="exp-desc">${exp.desc}</div>
        </div>
      </div>
    </div>
  `;
    expCardsGrid.appendChild(card);
});

// Animate flip-cards in on scroll
const flipCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            flipCardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.exp-flip-card').forEach(c => flipCardObserver.observe(c));


// ============================
// RENDER CERTS
// ============================
const certGrid = document.getElementById('certGrid');
certifications.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'cert-item reveal delay-' + ((i % 6) + 1);
    el.innerHTML = `
    <div class="cert-icon">${c.icon}</div>
    <div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
    </div>
  `;
    certGrid.appendChild(el);
});

// ============================
// MODAL
// ============================
let currentSlide = 0;
let totalSlides = 0;

function openModal(project) {
    currentSlide = 0;
    totalSlides = project.slides.length;
    const modal = document.getElementById('modal');
    const carousel = document.getElementById('modalCarousel');
    const content = document.getElementById('modalContent');

    carousel.style.background = project.gradient;
    carousel.innerHTML = project.slides.map((s, i) => `
    <div class="carousel-slide ${i === 0 ? 'active' : ''}" style="background:${project.gradient}; font-size:5rem;">
      ${s}
    </div>
  `).join('') + `
    <button class="carousel-nav carousel-prev" onclick="prevSlide(event)">‹</button>
    <button class="carousel-nav carousel-next" onclick="nextSlide(event)">›</button>
    <div class="carousel-counter" id="slideCounter">1 / ${totalSlides}</div>
  `;

    content.innerHTML = `
    <div style="margin-bottom:0.5rem;">
      <div class="tech-tags" style="margin-bottom:1rem;">${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-title">${project.title}</div>
    <div class="modal-desc">${project.short}</div>
    <ul class="modal-highlights">
      ${project.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>
    <div class="modal-links">
      <a href="#" class="btn-primary" style="font-size:0.85rem;padding:0.65rem 1.5rem;">🔗 Live Demo</a>
      <a href="#" class="btn-outline" style="font-size:0.85rem;padding:0.65rem 1.5rem;">⭐ GitHub</a>
    </div>
  `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').focus();
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
}

function updateSlide(dir) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add(dir > 0 ? 'prev' : '');
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    slides.forEach((s, i) => { s.className = 'carousel-slide' + (i === currentSlide ? ' active' : ''); });
    document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${totalSlides}`;
}
function nextSlide(e) { e.stopPropagation(); updateSlide(1); }
function prevSlide(e) { e.stopPropagation(); updateSlide(-1); }

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
document.addEventListener('keydown', function (e) {
    if (!document.getElementById('modal').classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') updateSlide(1);
    if (e.key === 'ArrowLeft') updateSlide(-1);
});

// Touch swipe
let touchStart = 0;
document.getElementById('modalCarousel').addEventListener('touchstart', e => touchStart = e.touches[0].clientX);
document.getElementById('modalCarousel').addEventListener('touchend', e => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) updateSlide(diff > 0 ? 1 : -1);
});

// ============================
// NAVBAR
// ============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Active link
    const sections = document.querySelectorAll('section[id]');
    let curr = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) curr = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + curr);
    });
});

// ============================
// THEME TOGGLE
// ============================
const themeBtn = document.getElementById('themeToggle');
const html = document.documentElement;
themeBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.textContent = isDark ? '🌙' : '☀️';
});

// ============================
// MOBILE MENU
// ============================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// ============================
// SCROLL REVEAL
// ============================
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => observer.observe(el));

// ============================
// CONTACT FORM
// ============================
function submitForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const msg = document.getElementById('message');
    let valid = true;

    const nameErr = document.getElementById('nameErr');
    const emailErr = document.getElementById('emailErr');
    const msgErr = document.getElementById('msgErr');

    nameErr.classList.remove('visible');
    emailErr.classList.remove('visible');
    msgErr.classList.remove('visible');

    if (!name.value.trim()) { nameErr.classList.add('visible'); valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { emailErr.classList.add('visible'); valid = false; }
    if (!msg.value.trim()) { msgErr.classList.add('visible'); valid = false; }

    if (valid) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('formSuccess').classList.add('visible');
    }
}
