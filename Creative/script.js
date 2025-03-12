
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


document.body.style.backgroundColor = "#0066ff";


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
}

navSlide();

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '10px 40px';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        navbar.style.padding = '20px 40px';
    }
});

function createParticles(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        element.appendChild(particle);
        
        gsap.to(particle, {
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50),
            opacity: 0,
            scale: gsap.utils.random(0.5, 1.5),
            duration: gsap.utils.random(0.5, 1),
            onComplete: () => {
                element.removeChild(particle);
            }
        });
    }
}

document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('mouseenter', function(event) {
        gsap.to(this, {
            y: -5,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
            ease: "power2.out"
        });
        

        const emoji = this.querySelector('.emoji');
        gsap.to(emoji, {
            scale: 1.5,
            rotation: gsap.utils.random(-15, 15),
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });

        const moodText = this.querySelector('.mood-text');
        gsap.to(moodText, {
            opacity: 1,
            y: -5,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            scale: 1,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: "power2.inOut"
        });
        
        const emoji = this.querySelector('.emoji');
        gsap.to(emoji, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut"
        });
        
        const moodText = this.querySelector('.mood-text');
        gsap.to(moodText, {
            opacity: 0.8,
            y: 0,
            duration: 0.3
        });
    });
    
    button.addEventListener('click', function(event) {
        // Animation de l'emoji
        const emoji = this.querySelector('.emoji');
        gsap.to(emoji, {
            scale: 1.5,
            rotation: gsap.utils.random(-15, 15),
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
        
        createParticles(this, event);
        
        gsap.timeline()
            .to(this, {
                scale: 0.95,
                duration: 0.1
            })
            .to(this, {
                scale: 1.1,
                duration: 0.3,
                ease: "elastic.out(1.2, 0.3)"
            })
            .to(this, {
                scale: 1,
                duration: 0.2
            });
        
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.background = 'rgba(255, 255, 255, 0.9)';
        message.style.color = '#333';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '30px';
        message.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        message.style.zIndex = '100';
        message.textContent = 'Humeur enregistrée !';
        
        document.body.appendChild(message);
        
        gsap.to(message, {
            opacity: 0,
            y: -20,
            duration: 1,
            delay: 1.5,
            onComplete: () => message.remove()
        });
    });
});

gsap.to("body", {
    backgroundColor: "#ff6600",
    scrollTrigger: {
        trigger: "#section2",
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
    }
});


gsap.to("body", {
    backgroundColor: "#2980b9",
    scrollTrigger: {
        trigger: "#section3",
        end: "top top", 
        scrub: true, 
    }
});

gsap.to("body", {
    backgroundColor: "#000814", 
    scrollTrigger: {
        trigger: "#section4",
        start: "top bottom", 
        end: "top top", 
        scrub: true, 
    }
});

gsap.to("#bird", {
    y: "+=20", 
    repeat: -1, 
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
});

gsap.to("#bird", {
    x: "70vw",
    scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to("#sun", {
    y: "50vh",
    scale: 1.5,
    scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to('.waves', {
    backgroundPosition: '-1000px 0px',
    ease: "none",
    repeat: -1,
    duration: 15
});

gsap.to('.boat', {
    y: '+=10',
    rotation: 5,
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to('.anxiety-text', {
    opacity: 1,
    y: -20,
    duration: 1,
    scrollTrigger: {
        trigger: "#section3",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});

gsap.fromTo(".flashlight-overlay", {
    backgroundColor: "rgba(0, 0, 0, 0.7)"
}, {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    scrollTrigger: {
        trigger: "#section4",
        start: "top top",
        end: "center top",
        scrub: true
    }
});

gsap.to(".particles", {
    opacity: 0.6,
    scrollTrigger: {
        trigger: "#section4",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

function animateAnglerFish() {
    const anglerFish = document.querySelector('.angler-fish');
    if (anglerFish) {
        gsap.to(anglerFish, {
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-30, 30),
            rotation: gsap.utils.random(-5, 5),
            duration: gsap.utils.random(2, 4),
            ease: "power1.inOut",
            onComplete: animateAnglerFish
        });
    }
}

animateAnglerFish();

ScrollTrigger.create({
    trigger: "#section4",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
        const fearText = document.querySelector('.fear-text');
        if (fearText && self.isActive) {
            gsap.to(fearText, {
                x: gsap.utils.random(-3, 3),
                y: gsap.utils.random(-2, 2),
                duration: 0.1,
                overwrite: true
            });
        }
    }
});

document.querySelectorAll('.section').forEach((section, index) => {
    gsap.from(section.querySelector('.text-container'), {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.from(section.querySelector('.emotion-badge'), {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.from(section.querySelector('.mood-buttons'), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});


function createBubble() {
    const deepOcean = document.querySelector('.deep-ocean');
    if (deepOcean) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 15 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = '-20px';
        
        deepOcean.appendChild(bubble);
        
        gsap.to(bubble, {
            y: -Math.random() * 500 - 200,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: Math.random() * 10 + 5,
            ease: "power1.inOut",
            onComplete: function() {
                bubble.remove();
                if (document.querySelector('#section4').getBoundingClientRect().top < window.innerHeight) {
                    createBubble();
                }
            }
        });
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < 15; i++) {
                setTimeout(createBubble, Math.random() * 3000);
            }
        }
    });
}, {threshold: 0.1});

const section4Elem = document.querySelector('#section4');
if (section4Elem) {
    observer.observe(section4Elem);
}

function createLightFlash() {
    if (document.querySelector('#section4').getBoundingClientRect().top < window.innerHeight) {
        const flashlightOverlay = document.querySelector('.flashlight-overlay');
        if (flashlightOverlay) {
            const originalBg = flashlightOverlay.style.background;
         
            flashlightOverlay.style.background = 'rgba(255, 255, 255, 0.3)';
            
       
            setTimeout(() => {
                flashlightOverlay.style.background = originalBg;
                

                setTimeout(() => {
                    flashlightOverlay.style.background = 'rgba(255, 255, 255, 0.2)';
                    
                    setTimeout(() => {
                        flashlightOverlay.style.background = originalBg;
                    }, 50);
                    
                }, 100);
                
            }, 50);
        }
        
        
        setTimeout(createLightFlash, gsap.utils.random(5000, 10000));
    }
}


setTimeout(createLightFlash, 3000);



const section4 = document.querySelector('#section4');
if (section4) {

    const flashlight = document.createElement('div');
    flashlight.className = 'flashlight';
    flashlight.style.position = 'absolute';
    flashlight.style.width = '150px';
    flashlight.style.height = '150px';
    flashlight.style.borderRadius = '50%';
    flashlight.style.background = 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)';
    flashlight.style.transform = 'translate(-50%, -50%)';
    flashlight.style.pointerEvents = 'none';
    flashlight.style.zIndex = '15';
    flashlight.style.opacity = '0';
    section4.appendChild(flashlight);


    section4.addEventListener('mousemove', (e) => {
     
        const rect = section4.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            
            flashlight.style.opacity = '1';
            flashlight.style.left = `${e.clientX - rect.left}px`;
            flashlight.style.top = `${e.clientY - rect.top}px`;
            

            document.querySelectorAll('#section4 .deep-element').forEach(element => {
                const elemRect = element.getBoundingClientRect();
                const elemCenterX = elemRect.left + elemRect.width/2;
                const elemCenterY = elemRect.top + elemRect.height/2;
             
                const distance = Math.sqrt(
                    Math.pow(e.clientX - elemCenterX, 2) + 
                    Math.pow(e.clientY - elemCenterY, 2)
                );
                
        
                if (distance < 150) {
                    const opacity = Math.max(0.05, Math.min(0.7, (1 - distance/150) * 0.7));
                    gsap.to(element, {
                        opacity: opacity,
                        duration: 0.3
                    });
                } else {
                    gsap.to(element, {
                        opacity: 0.05,
                        duration: 0.5
                    });
                }
            });
            

            const fearText = document.querySelector('.fear-text');
            if (fearText) {
                const textRect = fearText.getBoundingClientRect();
                const textCenterX = textRect.left + textRect.width/2;
                const textCenterY = textRect.top + textRect.height/2;
                
                const textDistance = Math.sqrt(
                    Math.pow(e.clientX - textCenterX, 2) + 
                    Math.pow(e.clientY - textCenterY, 2)
                );
                
                if (textDistance < 200) {
                    const textOpacity = Math.max(0, Math.min(1, (1 - textDistance/200)));
                    gsap.to(fearText, {
                        opacity: textOpacity,
                        textShadow: `0 0 ${textOpacity * 10}px rgba(255, 255, 255, 0.8)`,
                        duration: 0.3
                    });
                } else {
                    gsap.to(fearText, {
                        opacity: 0,
                        textShadow: '0 0 0px rgba(255, 255, 255, 0)',
                        duration: 0.5
                    });
                }
            }
        }
    });
    
    section4.addEventListener('mouseleave', () => {
        // Désactiver la lampe torche
        flashlight.style.opacity = '0';
        
    
        document.querySelectorAll('#section4 .deep-element').forEach(element => {
            gsap.to(element, {
                opacity: 0.05,
                duration: 0.5
            });
        });
        
    
        const fearText = document.querySelector('.fear-text');
        if (fearText) {
            gsap.to(fearText, {
                opacity: 0,
                textShadow: '0 0 0px rgba(255, 255, 255, 0)',
                duration: 0.5
            });
        }
    });
    
    gsap.to('.fear-text', {
        opacity: 0.7,
        duration: 2,
        delay: 0.5,
        onComplete: () => {
            gsap.to('.fear-text', {
                opacity: 0,
                duration: 1.5,
            });
        }
    });
}
