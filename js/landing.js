// ======================== SMOOTH SCROLL NAVIGATION ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ======================== NAVBAR SCROLL EFFECT ========================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ======================== INTERSECTION OBSERVER PARA ANIMACIONES ========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Animar elementos cuando entren en vista
document.querySelectorAll('.feature-card, .prueba-card, .info-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// ======================== RIPPLE EFFECT EN BOTONES ========================
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = diameter + 'px';
  circle.style.left = (event.clientX - button.offsetLeft - radius) + 'px';
  circle.style.top = (event.clientY - button.offsetTop - radius) + 'px';
  circle.classList.add('ripple');
  
  const ripple = button.querySelector('.ripple');
  if (ripple) {
    ripple.remove();
  }
  
  button.appendChild(circle);
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mousedown', createRipple);
});

// ======================== CONTADOR DE SCROLL PARALLAX ========================
const floatingCards = document.querySelectorAll('.floating-card');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  floatingCards.forEach((card, index) => {
    const offset = scrollY * (0.1 + index * 0.05);
    card.style.transform = `translateY(calc(-20px + ${offset * 0.5}px))`;
  });
});

// ======================== VALIDACIÓN DE FORMULARIOS (SI SE AGREGAN) ========================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ======================== FEEDBACK VISUAL EN SCROLL ========================
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      section.style.opacity = '1';
    }
  });
});

// ======================== MODO OSCURO OPCIONAL ========================
function initDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('darkMode');
  
  if (savedMode === 'true' || (prefersDarkMode && !savedMode)) {
    // Aquí puedes agregar la lógica para modo oscuro
    // document.body.classList.add('dark-mode');
  }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  
  // Añadir clase active al enlace de navegación actual
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});

// ======================== FUNCIONES AUXILIARES ========================
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function trackEvent(eventName, eventData) {
  // Aquí puedes integrar Google Analytics o similar
  console.log(`Event: ${eventName}`, eventData);
}

// Rastrear clics en botones CTA
document.querySelectorAll('.btn-primary, .btn-large').forEach(btn => {
  btn.addEventListener('click', (e) => {
    trackEvent('cta_click', {
      button: btn.textContent,
      timestamp: new Date()
    });
  });
});

// ======================== DETECTAR VISOR DE PÁGINA ========================
window.addEventListener('beforeunload', () => {
  // Guardar estado de la página si es necesario
  sessionStorage.setItem('lastPage', window.location.pathname);
});

// ======================== EFECTOS DE TIPOGRAFÍA ========================
function typeWriter(element, text, speed = 50) {
  let index = 0;
  element.innerHTML = '';
  
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Usar si deseas efecto de escritura en el título
// window.addEventListener('load', () => {
//   const title = document.querySelector('.hero-title');
//   if (title) {
//     const originalText = title.textContent;
//     typeWriter(title, originalText, 30);
//   }
// });

// ======================== FUNCIONES DE PRUEBAS/TESTS ========================

// Desplazarse suavemente a la sección de tests
function scrollToTests() {
  const testsSection = document.getElementById('tests');
  if (testsSection) {
    testsSection.style.display = 'block';
    testsSection.scrollIntoView({ behavior: 'smooth' });
    // Mantener el scroll hacia arriba para ver la sección de inicio
    setTimeout(() => {
      window.scrollTo({ top: testsSection.offsetTop - 100, behavior: 'smooth' });
    }, 100);
  }
}

// Cerrar la sección de tests
function closeTests() {
  const testsSection = document.getElementById('tests');
  if (testsSection) {
    testsSection.style.display = 'none';
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Iniciar un test específico
function startTest(testName) {
  const testsSection = document.getElementById('tests');
  
  // Mostrar la sección de tests
  if (testsSection) {
    testsSection.style.display = 'block';
    
    // Scroll a la sección
    setTimeout(() => {
      testsSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        // Trigger el test a través del evento
        const ageSelector = document.getElementById('ageSelector');
        
        // Determinar la edad basada en el test
        const testAgeMap = {
          'tdah_ninos': 'child',
          'tdah_adultos': 'adult',
          'scq_vida': 'child'  // TEA está disponible para niños y adolescentes
        };
        
        if (ageSelector) {
          ageSelector.value = testAgeMap[testName] || '';
          ageSelector.dispatchEvent(new Event('change'));
          
          // Seleccionar el test después de un pequeño delay
          setTimeout(() => {
            const testSelector = document.getElementById('testSelector');
            if (testSelector) {
              testSelector.value = testName;
              testSelector.dispatchEvent(new Event('change'));
            }
          }, 300);
        }
      }, 300);
    }, 100);
  }
}

// Resetear el test
function resetTest() {
  const ageSelector = document.getElementById('ageSelector');
  const testSelector = document.getElementById('testSelector');
  const testContainer = document.getElementById('testContainer');
  const resultDiv = document.getElementById('result');
  
  if (ageSelector) ageSelector.value = '';
  if (testSelector) testSelector.value = '';
  if (testContainer) testContainer.innerHTML = '';
  if (resultDiv) {
    resultDiv.style.display = 'none';
    resultDiv.classList.remove('show');
  }
  
  // Limpiar canvas
  const canvas = document.getElementById('resultChart');
  if (canvas && window.resultChartInstance) {
    window.resultChartInstance.destroy();
  }
  
  // Scroll hacia arriba en la sección de tests
  const testsSection = document.getElementById('tests');
  if (testsSection) {
    testsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ======================== LAZY LOADING DE IMÁGENES ========================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ======================== PERFORMANCE MONITORING ========================
if ('PerformanceObserver' in window) {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Registrar métricas de rendimiento
        console.log(`${entry.name}: ${entry.duration}ms`);
      }
    });
    
    observer.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (e) {
    // Performance Observer no soportado
  }
}
