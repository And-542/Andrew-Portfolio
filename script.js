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

// Certificate Modal Functionality
const setupCertModals = () => {
    const modal = document.getElementById("cert-modal");
    if (!modal) return;

    const modalImg = document.getElementById("modal-cert-image");
    const closeBtn = document.querySelector(".close-modal");

    // Open modal when any VIEW button is clicked
    document.querySelectorAll(".btn-view").forEach(btn => {
        btn.addEventListener("click", function() {
            const certImage = this.closest(".cert-card").querySelector(".cert-thumbnail img");
            modal.style.display = "block";
            modalImg.src = certImage.src;
            modalImg.alt = certImage.alt;
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close when clicking outside image
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
};

// Download certificate function
function downloadCertificate() {
    const imgSrc = document.getElementById("modal-cert-image").src;
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = "certificate_" + Date.now();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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
    setupCertModals();
    initParticles();
});

// Fallback for particles if window loaded before DOM ready
window.addEventListener('load', initParticles);