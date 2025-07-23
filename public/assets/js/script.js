// ===== MAIN PORTFOLIO APP =====
function portfolioApp() {
    return {
        // App State
        darkMode: false,
        mobileMenuOpen: false,
        scrolled: false,
        activeSection: 'home',
        formSubmitting: false,
        
        // Contact Form Data
        contactForm: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        // Validation errors for each field
        contactErrors: {
            name: '',
            email: '',
            message: ''
        },
        // Success message
        contactSuccess: '',
        
        // Skills Data
        skills: {
            frontend: [
                { name: 'HTML5', level: 90, icon: 'fab fa-html5', color: 'text-orange-500' },
                { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt', color: 'text-blue-500' },
                { name: 'JavaScript', level: 80, icon: 'fab fa-js-square', color: 'text-yellow-500' },
                { name: 'Bootstrap', level: 75, icon: 'fab fa-bootstrap', color: 'text-purple-500' }
            ],
            backend: [
                { name: 'Node.js', level: 75, icon: 'fab fa-node-js', color: 'text-green-500' },
                { name: 'MySQL', level: 70, icon: 'fas fa-database', color: 'text-blue-600' },
                { name: 'MongoDB', level: 65, icon: 'fas fa-leaf', color: 'text-green-600' },
                { name: 'Python', level: 60, icon: 'fab fa-python', color: 'text-blue-400' }
            ],
            tools: [
                { name: 'Git', level: 85, icon: 'fab fa-git-alt', color: 'text-red-500' },
                { name: 'GitHub', level: 80, icon: 'fab fa-github', color: 'text-gray-700' },
                { name: 'VS Code', level: 70, icon: 'fas fa-code', color: 'text-blue-500' },
                { name: 'Figma', level: 65, icon: 'fab fa-figma', color: 'text-purple-500' }
            ]
        },
        
        // Initialization
        init() {
            this.setupScrollListener();
            this.setupSectionObserver();
            this.initAOS();
            this.animateSkillBars();
            this.setupSmoothScrolling();
            this.setupTypewriter();
            this.setupParticles();
        },
        
        // Dark Mode Toggle
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            document.documentElement.classList.toggle('dark', this.darkMode);
            
            // Add animation
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        },
        
        // Scroll Detection
        setupScrollListener() {
            window.addEventListener('scroll', () => {
                this.scrolled = window.scrollY > 50;
            });
        },
        
        // Section Observer for Active Navigation
        setupSectionObserver() {
            const sections = document.querySelectorAll('section[id]');
            const options = {
                rootMargin: '-50px 0px -50px 0px',
                threshold: 0.3
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                    }
                });
            }, options);
            
            sections.forEach(section => observer.observe(section));
        },
        
        // Initialize AOS Animation Library
        initAOS() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false,
                offset: 100
            });
        },
        
        // Animate Skill Progress Bars
        animateSkillBars() {
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillItems = entry.target.querySelectorAll('.skill-item');
                        skillItems.forEach((item, index) => {
                            setTimeout(() => {
                                const progressBar = item.querySelector('.skill-progress');
                                const level = item.dataset.skill;
                                progressBar.style.width = level + '%';
                            }, index * 200);
                        });
                        skillObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                skillObserver.observe(skillsSection);
            }
        },
        
        // Smooth Scrolling for Links
        setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        this.mobileMenuOpen = false;
                    }
                });
            });
        },
        
        // Typewriter Effect
        setupTypewriter() {
            const texts = [
                "Construyo soluciones digitales que conectan ideas con tecnolog",
                "Desarrollo aplicaciones web modernas y responsivas",
                "Creo experiencias de usuario excepcionales",
                "Transformo ideas en cigo funcional"
            ];
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typeSpeed = 100;
            const deleteSpeed = 50;
            const pauseTime = 2000;
            
            const typewriterElement = document.querySelector('.typewriter-text');
            if (!typewriterElement) return;
            
            function typeWriter() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let speed = isDeleting ? deleteSpeed : typeSpeed;
                
                if (!isDeleting && charIndex === currentText.length) {
                    speed = pauseTime;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
                
                setTimeout(typeWriter, speed);
            }
            
            typeWriter();
        },
        
        // Particle Background Effect
        setupParticles() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const heroSection = document.getElementById('home');
            
            if (!heroSection) return;
            
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '1';
            heroSection.appendChild(canvas);
            
            let particles = [];
            const particleCount = 50;
            
            function resizeCanvas() {
                canvas.width = heroSection.offsetWidth;
                canvas.height = heroSection.offsetHeight;
            }
            
            function createParticle() {
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                };
            }
            
            function initParticles() {
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    particles.push(createParticle());
                }
            }
            
            function updateParticles() {
                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                });
            }
            
            function drawParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
                    ctx.fill();
                });
                
                // Draw connections
                particles.forEach((particle, i) => {
                    particles.slice(i + 1).forEach(other => {
                        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                });
            }
            
            function animate() {
                updateParticles();
                drawParticles();
                requestAnimationFrame(animate);
            }
            
            resizeCanvas();
            initParticles();
            animate();
            
            window.addEventListener('resize', () => {
                resizeCanvas();
                initParticles();
            });
        },
        
        // Contact Form Submission
        async submitForm() {
            if (this.formSubmitting) return;
            // Limpiar errores previos
            this.contactErrors = { name: '', email: '', message: '' };
            this.contactSuccess = '';
            let hasError = false;
            // Validación de campos requeridos
            if (!this.contactForm.name) {
                this.contactErrors.name = 'Por favor ingresa tu nombre.';
                hasError = true;
            }
            if (!this.contactForm.email) {
                this.contactErrors.email = 'Por favor ingresa tu correo.';
                hasError = true;
            }
            if (!this.contactForm.message) {
                this.contactErrors.message = 'Por favor escribe tu mensaje.';
                hasError = true;
            }
            // Validación de correo electrónico personalizada
            const emailValue = this.contactForm.email;
            if (emailValue) {
                if (!emailValue.includes('@') || !emailValue.includes('.') || !PortfolioUtils.validateEmail(emailValue)) {
                    this.contactErrors.email = 'Correo no válido. Ejemplo: usuario@dominio.com';
                    hasError = true;
                }
            }
            if (hasError) return;
            this.formSubmitting = true;
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.contactForm)
                });
                const data = await response.json();
                if (data.success) {
                    this.contactForm = { name: '', email: '', subject: '', message: '' };
                    this.contactSuccess = 'Mensaje enviado!';
                    setTimeout(() => {
                        const successEl = document.getElementById('contact-success-message');
                        if (successEl) {
                            successEl.classList.add('fade-out-slow');
                            setTimeout(() => {
                                this.contactSuccess = '';
                            }, 800); // match fade-out duration
                        } else {
                            this.contactSuccess = '';
                        }
                    }, 3000);
                } else {
                    this.contactSuccess = '';
                    this.contactErrors.message = 'Error al enviar el mensaje.';
                }
            } catch (error) {
                this.contactSuccess = '';
                this.contactErrors.message = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
            } finally {
                this.formSubmitting = false;
            }
        },

        
        // Notification System
        showNotification(message, type = 'info') {
            // Eliminar cualquier toast anterior
            const oldToast = document.getElementById('custom-toast');
            if (oldToast) oldToast.remove();

            // Iconos por tipo (más visuales)
            const icons = {
                success: '<span class="mr-3 text-2xl">🎉</span>',
                error: '<span class="mr-3 text-2xl">😅</span>',
                info: '<span class="mr-3 text-2xl">💡</span>',
                warning: '<span class="mr-3 text-2xl">⚠️</span>'
            };
            // Colores de fondo por tipo
            const bgColors = {
                success: 'bg-gradient-to-r from-green-100 via-white to-green-50 border border-green-400',
                error: 'bg-gradient-to-r from-rose-100 via-white to-rose-50 border border-rose-400',
                info: 'bg-gradient-to-r from-blue-100 via-white to-blue-50 border border-blue-400',
                warning: 'bg-gradient-to-r from-yellow-100 via-white to-yellow-50 border border-yellow-400'
            };

            const notification = document.createElement('div');
            notification.id = 'custom-toast';
            notification.className = `fixed top-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl max-w-sm w-full flex items-start gap-2 transition-all duration-500 opacity-0 translate-y-4 ${bgColors[type]}`;
            notification.innerHTML = `
                ${icons[type] || ''}
                <span class="text-gray-900 font-medium flex-1">${message}</span>
                <button onclick="this.parentElement.remove()" class="ml-4 text-gray-400 hover:text-gray-700 focus:outline-none">
                    <i class="fas fa-times"></i>
                </button>
            `;
            document.body.appendChild(notification);
            // Animar entrada
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);
            // Animar salida y eliminar
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(16px)';
                setTimeout(() => notification.remove(), 400);
            }, 4000);
        },
        
        // Scroll to Top
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        
        // Download CV
        downloadCV() {
            const link = document.createElement('a');
            link.href = 'assets/documents/CV-Edward.pdf';
            link.download = 'CV-Edward.pdf';
            link.click();
            
            this.showNotification('Descargando CV...', 'info');
        },
        
        // Copy to Clipboard
        copyToClipboard(text, type) {
            navigator.clipboard.writeText(text).then(() => {
                this.showNotification(`${type} copiado al portapapeles`, 'success');
            }).catch(() => {
                this.showNotification('Error al copiar al portapapeles', 'error');
            });
        },
        
        // Project Filter (if needed)
        filterProjects(category) {
            const projects = document.querySelectorAll('.project-card');
            projects.forEach(project => {
                if (category === 'all' || project.dataset.category === category) {
                    project.style.display = 'block';
                    project.classList.add('animate-fadeInUp');
                } else {
                    project.style.display = 'none';
                }
            });
        },
        
        // Lazy Loading for Images
        setupLazyLoading() {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('blur-sm');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        },
        
        // Performance Monitoring
        trackPerformance() {
            // Track page load time
            window.addEventListener('load', () => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page loaded in ${loadTime}ms`);
            });
            
            // Track user interactions
            document.addEventListener('click', (e) => {
                if (e.target.matches('a, button')) {
                    console.log(`User clicked: ${e.target.textContent || e.target.alt}`);
                }
            });
        }
    };
}

// ===== UTILITY FUNCTIONS =====
class PortfolioUtils {
    // Debounce function for performance
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for scroll events
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Format date
    static formatDate(date) {
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }
    
    // Validate email
    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Generate unique ID
    static generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    // Check if element is in viewport
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Smooth scroll to element
    static scrollToElement(selector, offset = 80) {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Get random color
    static getRandomColor() {
        const colors = [
            '#8B5CF6', '#F43F5E', '#10B981', '#F59E0B',
            '#7C3AED', '#EC4899', '#06B6D4', '#84CC16'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Setup service worker for PWA (optional)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker registration failed: ', err);
        });
    }
    
    // Setup error handling
    window.addEventListener('error', (e) => {
        console.error('Global error:', e.error);
    });
    
    // Setup performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load performance:', {
                    loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    networkTime: perfData.responseEnd - perfData.requestStart
                });
            }, 0);
        });
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioApp, PortfolioUtils };
}
