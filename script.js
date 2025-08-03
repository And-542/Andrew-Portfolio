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