// Configuration pour un ciel étoilé avec particles.js
// Cette configuration crée des étoiles qui scintillent sans changer le background
// Paramètres configurables pour personnaliser l'effet
export const particlesConfig = {
  "particles": {
    "number": {
      "value": 120,  // Nombre d'étoiles (réduit pour meilleure performance)
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"  // Couleur blanche pour les étoiles
    },
    "shape": {
      "type": "circle",  // Forme ronde pour les étoiles
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6,  // Opacité de base
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.3,  // Vitesse de scintillement plus lente
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1.5,  // Taille moyenne plus petite
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.5,  // Animation de taille plus subtile
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false  // Pas de lignes entre les particules
    },
    "move": {
      "enable": true,
      "speed": 0.15,  // Mouvement plus lent pour un effet naturel
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"  // Effet de bulle au survol
      },
      "onclick": {
        "enable": false  // Pas d'effet au clic
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 80,  // Distance réduite pour un effet plus précis
        "size": 4,       // Taille de bulle plus petite
        "duration": 1.5, // Durée plus courte
        "opacity": 0.7,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

// Points d'amélioration pour une future version configurable :
// 1. Rendre le nombre d'étoiles configurable via les paramètres du site
// 2. Ajouter des options pour changer la couleur des étoiles
// 3. Permettre de désactiver l'animation pour les performances
// 4. Ajouter un mode "étoiles filantes" occasionnelles
// 5. Configurer la densité en fonction de la taille de l'écran