// Typewriter Effect
const typewriterText = "SECURITY RESEARCHER / PENETRATION TESTER";
let i = 0;
function typeWriter() {
    if (i < typewriterText.length) {
        document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}


// Danger Button Functionality
document.getElementById('trap-btn').addEventListener('click', function() {
    const crashScreen = document.getElementById('crash-screen');
    const crashCode = document.querySelector('.crash-code');
    
    // Show crash screen
    crashScreen.style.display = 'flex';
    
    // Terminal-style error messages
    const errorMessages = [
        ">_ FATAL SYSTEM ERROR",
        ">_ UNAUTHORIZED ACCESS DETECTED",
        ">_ INITIATING EMERGENCY SHUTDOWN",
        ">_ [████████████] 100% CORRUPTED"
    ];
    
    crashCode.innerHTML = '';
    let currentLine = 0;
    let currentChar = 0;
    
    function typeError() {
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
    }
    
    typeError();
    
    // Auto-recover after 5 seconds
    setTimeout(() => {
        crashScreen.style.display = 'none';
    }, 5000);
});
// Certificate Modal Functionality
const modal = document.getElementById("cert-modal");
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

// Existing danger button code...
document.getElementById('trap-btn').addEventListener('click', function() {
    // ... (keep existing crash screen code)
});
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles
  if (typeof particlesJS !== 'undefined') {
    particlesJS.load('particles-js', 'particles-config.json', function() {
      console.log('Particles loaded!');
    });
  }
  
  // Your existing code...
});