// Initialize Lucide Icons
lucide.createIcons();

// Update Copyright Year
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
    copyrightEl.innerHTML = `© ${new Date().getFullYear()} I-Byte OtM, Lda. Todos os direitos reservados.`;
}

// Navbar Scroll Logic
const navbar = document.getElementById('navbar');
const logoBox = document.getElementById('logo-box');
const logoImg = document.querySelector('a[href="#inicio"] img');
const navLinks = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-white', 'shadow-lg', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
        logoBox.classList.add('bg-[#0e1c3a]');
        logoBox.classList.remove('bg-white/10', 'backdrop-blur');
        if (logoImg) {
            logoImg.src = 'images/logo 1.png';
        }
        menuIcon.classList.add('text-[#0e1c3a]');
        menuIcon.classList.remove('text-white');
        navLinks.forEach(link => {
            link.classList.remove('text-white/90');
            link.classList.add('text-slate-700');
            link.removeAttribute('style');
        });
    } else {
        navbar.classList.remove('bg-white', 'shadow-lg', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
        logoBox.classList.remove('bg-[#0e1c3a]');
        logoBox.classList.add('bg-white/10', 'backdrop-blur');
        if (logoImg) {
            logoImg.src = 'images/logo.png';
        }
        menuIcon.classList.remove('text-[#0e1c3a]');
        menuIcon.classList.add('text-white');
        navLinks.forEach(link => {
            link.classList.add('text-white/90');
            link.classList.remove('text-slate-700');
            link.removeAttribute('style');
        });
    }
});

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const isMenuOpen = mobileMenu.classList.contains('active');
    
    // Change menu icon between hamburger and X
    if(isMenuOpen) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Simple Form Submission (Prevent Default)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado! A sua mensagem foi enviada. Entraremos em contacto em breve.');
        e.target.reset();
    });
}