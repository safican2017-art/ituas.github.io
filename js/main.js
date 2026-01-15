// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll efekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Sayı animasyonları
function animateCounters() {
    const counters = [
        { id: 'count1', target: 9 },
        { id: 'count2', target: 4 },
        { id: 'count3', target: 6 },
        { id: 'count4', target: 30 },
        { id: 'count5', target: 4 }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (!element) return;

        let current = 0;
        const increment = counter.target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                element.textContent = counter.target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', () => {
    animateCounters();
});

// Intersection Observer ile animasyonlar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animasyon için elementleri gözlemle
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .vehicle-card, .team-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
