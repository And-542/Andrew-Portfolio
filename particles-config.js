particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 45,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#00f7ff" // Neon cyan nodes to match your text
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#9d00ff", // Neon purple connections
      "opacity": 0.4,
      "width": 1.2,
      "blink": true // New: Makes connections pulse
    },
    "move": {
      "enable": true,
      "speed": 3.5, // Faster movement
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce", // Changed from "out" to make particles bounce
      "bounce": true,
      "attract": {
        "enable": true, // New: Creates swirling motion
        "rotateX": 800,
        "rotateY": 1000
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Changed from "grab" for better effect
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // Creates explosion effect
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 120,
        "duration": 0.8
      },
      "bubble": {
        "distance": 200,
        "size": 6,
        "duration": 0.5,
        "opacity": 0.8,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});