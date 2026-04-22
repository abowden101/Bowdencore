/**
 * BowdenCore - Main JavaScript
 * Network Grid Animation | Scroll Effects | Lazy Loading
 */

// ============================================
// NETWORK GRID CANVAS ANIMATION
// ============================================

class NetworkGrid {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        
        this.setCanvasDimensions();
        this.initializeParticles();
        this.animate();
        
        // Responsive canvas
        window.addEventListener('resize', () => this.setCanvasDimensions());
    }

    setCanvasDimensions() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initializeParticles() {
        this.particles = [];
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 50));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius: Math.random() * 1.5 + 0.5,
            });
        }
    }

    drawParticles() {
        this.ctx.fillStyle = 'rgba(0, 217, 255, 0.6)';
        
        for (let particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    updateParticles() {
        for (let particle of this.particles) {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            }
            
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            }
        }
    }

    drawConnections() {
        this.ctx.strokeStyle = 'rgba(0, 217, 255, 0.3)';
        this.ctx.lineWidth = 1;
        const maxDistance = 200;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    this.ctx.globalAlpha = 1 - distance / maxDistance;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;
                }
            }
        }
    }

    animate = () => {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();

        requestAnimationFrame(this.animate);
    }
}

// Initialize network grid
document.addEventListener('DOMContentLoaded', () => {
    new NetworkGrid('networkGrid');
});

// ============================================
// SCROLL TRIGGERED ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Optional: stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-scroll attribute
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-scroll]').forEach((el) => {
        observer.observe(el);
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CTA BUTTON HANDLERS
// ============================================

document.querySelectorAll('[data-section]').forEach((button) => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        const target = document.getElementById(section);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollPosition = 0;
const navbar = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add subtle background effect on scroll
    if (currentScroll > 50) {
        navbar.style.borderBottomColor = 'rgba(0, 217, 255, 0.2)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
    
    lastScrollPosition = currentScroll;
}, { passive: true });

// ============================================
// CURSOR INTERACTION EFFECTS
// ============================================

// Track mouse for interactive effects
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}, { passive: true });

// Hover effects on interactive elements
const interactiveElements = document.querySelectorAll(
    '.service-card, .button, .nav-link, .footer-section a, .platform-feature'
);

interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform || 'none';
    });
});

// ============================================
// FORM SUBMISSION (Contact CTA)
// ============================================

const handleContactClick = () => {
    // Placeholder for contact form/modal
    console.log('Contact form triggered');
    
    // Example: You could open a modal or redirect to contact form
    // window.open('https://calendly.com/your-link', '_blank');
    
    // Or scroll to contact section if it exists
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Schedule a free assessment: contact@bowdencore.com');
    }
};

document.querySelectorAll('.button-primary[data-section="contact"]').forEach((btn) => {
    btn.addEventListener('click', handleContactClick);
});

// ============================================
// PERFORMANCE & LAZY LOADING
// ============================================

// Lazy load images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
    });
}

// ============================================
// ANALYTICS & TRACKING (Optional)
// ============================================

// Track page interactions for analytics
const trackEvent = (category, action, label) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
};

// Track button clicks
document.querySelectorAll('.button').forEach((btn) => {
    btn.addEventListener('click', () => {
        trackEvent('engagement', 'button_click', btn.textContent);
    });
});

// Track scroll depth
let maxScrollPercentage = 0;

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > maxScrollPercentage) {
        maxScrollPercentage = scrollPercentage;
        
        // Track milestone scrolls
        if (maxScrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
            trackEvent('engagement', 'scroll_depth', '25%');
            sessionStorage.setItem('scroll_25', 'true');
        }
        if (maxScrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
            trackEvent('engagement', 'scroll_depth', '50%');
            sessionStorage.setItem('scroll_50', 'true');
        }
        if (maxScrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
            trackEvent('engagement', 'scroll_depth', '75%');
            sessionStorage.setItem('scroll_75', 'true');
        }
    }
}, { passive: true });

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function for performance optimization
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('load', () => {
    // Remove loading state if you have one
    console.log('BowdenCore website fully loaded');
    
    // Optional: Trigger initial animations
    document.body.style.opacity = '1';
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // You could send this to an error tracking service
});