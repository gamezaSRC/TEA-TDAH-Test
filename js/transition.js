// ======================== PAGE ENTRANCE ANIMATION ========================
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('transitionOverlay');
  
  // Animar la entrada solo si venimos del landing (session storage)
  const fromLanding = sessionStorage.getItem('fromLanding');
  
  if (fromLanding) {
    if (overlay) {
      // Mostrar overlay al entrar
      overlay.classList.add('active');
      
      // Desaparecer después de 0.5 segundos
      setTimeout(() => {
        overlay.classList.remove('active');
      }, 500);
    }
    
    // Limpiar el flag
    sessionStorage.removeItem('fromLanding');
  }
});

// ======================== PAGE EXIT ANIMATION ========================
document.querySelectorAll('a[href*="index.html"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const overlay = document.getElementById('transitionOverlay');
    
    if (overlay) {
      overlay.classList.add('active');
    }
    
    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});
