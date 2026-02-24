// ============================
// ICONS (SVGs)
// ============================
const icons = {
    security: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    hospital: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M12 11v4"/><path d="M10 13h4"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    react: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 5c6.627 0 12 1.567 12 3.5S18.627 12 12 12 0 10.433 0 8.5 5.373 5 12 5z"/><path d="M12 12c6.627 0 12 1.567 12 3.5S18.627 19 12 19 0 17.433 0 15.5 5.373 12 12 12z"/><path d="M5.314 5.234c4.686-4.687 12.284-4.687 16.97 0s4.687 12.284 0 16.97-12.284 4.687-16.97 0-4.687-12.284 0-16.97z"/></svg>`,
    tool: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    key: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3L15.5 7.5z"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    target: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    smile: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    camera: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.97-3.06 2.5 2.5 0 0 1-2.51-2.32 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 2.51-2.32 2.5 2.5 0 0 1 2.97-3.06A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.97-3.06 2.5 2.5 0 0 0 2.51-2.32 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0-2.51-2.32 2.5 2.5 0 0 0-2.97-3.06A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.04 4.39 2.67 5.79l1.33 3.21h6l1.33-3.21A6.98 6.98 0 0 0 19 9a7 7 0 0 0-7-7Z"/></svg>`,
    rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-3.09s-1.89-1.35-3.09-.91Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="m9 12 2.5 2.5"/><path d="m14 14.5.5.5"/></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
};

const projects = [
    {
        id: 1,
        title: 'Hybrid Security for Medical Imaging Using Blockchain',
        short: 'Multi-layer security framework using AES-256 + IPFS for tamper-proof medical data.',
        image: 'https://coingeek.com/wp-content/uploads/2019/02/new-blockchain-based-platform-bitfury-longenesis-mdw.jpg',
        tech: ['Python', 'AES-256', 'DWT', 'JPEG-2000', 'IPFS', 'Blockchain'],
        highlights: [
            'Designed multi-layer security using AES-256 encryption and DWT-based watermarking',
            'Protected medical and biometric images against unauthorized access',
            'Integrated IPFS for decentralized, tamper-proof data storage',
            'Implemented secure access control mechanisms',
            'Automated encryption, compression, and retrieval pipeline',
            'Reduced security risks by 90%'
        ]
    },
    {
        id: 2,
        title: 'Online Appointment System (MERN Stack)',
        short: 'Full-stack scheduling system supporting 100+ concurrent users with role-based access.',
        image: 'https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E=',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        highlights: [
            'Developed full-stack appointment scheduling system',
            'Supports 100+ concurrent users seamlessly',
            'Implemented RESTful APIs for robust data interchange',
            'Built secure authentication with role-based access control',
            'Optimized database queries reducing booking time by 40%',
            'Improved overall system performance significantly'
        ]
    },
    {
        id: 3,
        title: 'Eligibility Check Web Application',
        short: 'Responsive web app for automated eligibility validation using SQL backend logic.',
        image: 'https://ispe-events.eu/images/why-is-quality-assurance-important.jpg',
        tech: ['HTML', 'CSS', 'SQL'],
        highlights: [
            'Developed responsive web application for user eligibility validation',
            'Built SQL-based backend logic for accurate verification',
            'Automated verification workflow end-to-end',
            'Reduced manual processing effort by 60%',
            'Optimized database queries for faster response times',
            'Enhanced overall user experience significantly'
        ]
    },
    {
        id: 4,
        title: 'Emotion Detection System',
        short: 'Real-time CNN-based facial emotion classifier with 85–90% prediction accuracy.',
        image: 'https://www.softwebsolutions.com/wp-content/uploads/2022/05/Facial-Recognition.jpg',
        tech: ['Python', 'OpenCV', 'CNN', 'Deep Learning'],
        highlights: [
            'Built CNN-based deep learning model for facial emotion classification',
            'Processes real-time video streams from webcam feed',
            'Achieved 85–90% prediction accuracy',
            'Implemented optimized preprocessing for better performance',
            'Integrated Haar Cascade face detection',
            'Achieved low-latency real-time inference'
        ]
    }
];

const experiences = [
    {
        role: 'Software Trainee',
        company: 'Cybervault Innovations and Technologies Pvt. Ltd.',
        period: 'Internship',
        desc: 'Worked on AI-based resume screening systems and conducted cybersecurity awareness sessions for college students.',
        icon: icons.rocket
    },
    {
        role: 'SQL Intern',
        company: 'Gabriel Technology Solution',
        period: 'Internship',
        desc: 'Gained hands-on experience in SQL database management — writing and optimizing queries to support efficient data handling in real-time projects.',
        icon: icons.database
    },
    {
        role: 'UI/UX Intern',
        company: 'Powersoft Techno Solution Pvt Ltd',
        period: 'Internship',
        desc: 'Completed training in UI/UX design principles and applied user-centered design strategies on live company projects.',
        icon: icons.tool
    }
];

const certifications = [
    { name: 'Full-Stack Development', issuer: 'Simplilearn', icon: icons.trophy },
    { name: 'Introduction to Selenium', issuer: 'Simplilearn', icon: icons.brain },
    { name: 'Competitive Programming & Coding Interviews', issuer: 'Udemy', icon: icons.lightbulb },
    { name: 'SQL (Basic)', issuer: 'HackerRank — Apr 2023', icon: icons.database },
    { name: 'Basics of Computer Networking', issuer: 'Great Learning', icon: icons.globe },
    { name: 'Big Data Analytics Course', issuer: 'Great Learning', icon: icons.chart }
];

// ============================
// RENDER PROJECTS
// ============================
const grid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal delay-' + (i + 1);
    card.innerHTML = `
    <div class="project-thumb" style="background-image: url('${p.image}')">
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
const expCardsGrid = document.getElementById('expCardsGrid');
experiences.forEach((exp, i) => {
    const card = document.createElement('div');
    card.className = 'exp-flip-card';
    card.style.transitionDelay = (i * 0.15) + 's';
    card.innerHTML = `
    <div class="exp-flip-inner">
      <div class="exp-front">
        <div>
          <div class="exp-icon">${exp.icon}</div>
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
    const modal = document.getElementById('modal');
    const carousel = document.getElementById('modalCarousel');
    const content = document.getElementById('modalContent');

    carousel.style.background = 'var(--surface2)';
    carousel.innerHTML = `
    <div class="carousel-slide active" style="background-image: url('${project.image}'); background-size: cover; background-position: center; height: 100%;">
    </div>
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
    themeBtn.innerHTML = isDark ?
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>` :
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
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

// ============================
// RESUME DOWNLOAD (Forced Blob Method)
// ============================
function downloadResume() {
    const resumeUrl = "Manimehalai_resume.pdf";

    fetch(resumeUrl)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = "Manimehalai_resume.pdf"; // This forces the "Save As" behavior
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error("Error downloading resume:", error);
            // Fallback to standard method if fetch fails
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.download = "Manimehalai_resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}
