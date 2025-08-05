// Typewriter Effect
const typeWriter = () => {
    const typewriterText = "SECURITY RESEARCHER / PENETRATION TESTER";
    const element = document.getElementById("typewriter");
    if (!element) return;
    
    let i = 0;
    const type = () => {
        if (i < typewriterText.length) {
            element.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    type();
};

// Crash Screen Functionality
const setupCrashButton = () => {
    const trapBtn = document.getElementById('trap-btn');
    if (!trapBtn) return;

    trapBtn.addEventListener('click', () => {
        const crashScreen = document.getElementById('crash-screen');
        const crashCode = document.querySelector('.crash-code');
        
        crashScreen.style.display = 'flex';
        crashCode.innerHTML = '';
        
        const errorMessages = [
            ">_ FATAL SYSTEM ERROR",
            ">_ UNAUTHORIZED ACCESS DETECTED",
            ">_ INITIATING EMERGENCY SHUTDOWN",
            ">_ [████████████] 100% CORRUPTED"
        ];
        
        let currentLine = 0;
        let currentChar = 0;
        
        const typeError = () => {
            if (currentLine < errorMessages.length) {
                if (currentChar < errorMessages[currentLine].length) {
                    crashCode.innerHTML += errorMessages[currentLine].charAt(currentChar);
                    currentChar++;
                    setTimeout(typeError, 50);
                } else {
                    crashCode.innerHTML += '<br>';
                    currentLine++;
                    currentChar = 0;
                    setTimeout(typeError, 200);
                }
            }
        };
        
        typeError();
        
        setTimeout(() => {
            crashScreen.style.display = 'none';
        }, 5000);
    });
};

// Certificate Modal Functionality
const setupCertModals = () => {
    const modal = document.getElementById("cert-modal");
    if (!modal) return;

    const modalImg = document.getElementById("modal-cert-image");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll(".btn-view").forEach(btn => {
        btn.addEventListener("click", function() {
            const certImage = this.closest(".cert-item").querySelector(".cert-image img");
            modal.style.display = "block";
            modalImg.src = certImage.src;
            modalImg.alt = certImage.alt;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Particle.js Initialization
const initParticles = () => {
    if (!document.getElementById('particles-js') || typeof particlesJS === 'undefined') return;
    
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 45,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#00f7ff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.2
                }
            },
            "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 130,
                "color": "#9d00ff",
                "opacity": 0.4,
                "width": 1.2
            },
            "move": {
                "enable": true,
                "speed": 3.5,
                "direction": "none",
                "bounce": true,
                "attract": {
                    "enable": true,
                    "rotateX": 800,
                    "rotateY": 1000
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble"
                }
            }
        }
    });
};

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    setupCrashButton();
    setupCertModals();
    initParticles();
});

// Fallback for particles if window loaded before DOM ready
window.addEventListener('load', initParticles);