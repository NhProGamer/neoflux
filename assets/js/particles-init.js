// Initialisation de particles.js pour le ciel étoilé
import { particlesConfig } from './particles-config.js';

document.addEventListener('DOMContentLoaded', function() {
  // Vérifier si particles.js est chargé
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
    
    // S'assurer que le canvas des particules est transparent et ne change pas le background
    const canvas = document.getElementById('particles-js');
    if (canvas) {
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '-1';
      canvas.style.pointerEvents = 'none';
      
      // Debug: Log pour vérifier que l'initialisation a fonctionné
      console.log('✨ Particles.js initialized - Starry sky animation active');
    } else {
      console.warn('⚠️ Particles container not found');
    }
  } else {
    console.error('❌ particlesJS is not defined - Make sure particles.js is loaded');
  }
});