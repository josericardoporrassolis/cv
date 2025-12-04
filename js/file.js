let currentLang = 'es'; 

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    
    const newLang = currentLang === 'en' ? 'es' : 'en';

    elements.forEach(el => {
        const en = el.getAttribute('data-en');
        const es = el.getAttribute('data-es');
        
        if (en && es) {
            el.innerHTML = newLang === 'en' ? en : es;
        }
    });

    const langButton = document.querySelector('.toggle-lang');
    if (langButton) {
        langButton.innerText = newLang === 'en' ? '🌐 English' : '🌐 Español';
    }

    currentLang = newLang;
}

function toggleMenu() {
    const nav = document.getElementById('navbarLinks');
    nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.remove('section-highlight');

                void targetSection.offsetWidth; 

                targetSection.classList.add('section-highlight');

                setTimeout(() => {
                    targetSection.classList.remove('section-highlight');
                }, 7000);
            }
            
            const navLinksContainer = document.getElementById('navbarLinks');
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        });
    });
});

function printByLanguage() {
    if (currentLang === 'es') { 
        printDocumentEs();
    } 
    else if (currentLang === 'en') {
        printDocumentEn();
    } else {
        console.error('Idioma de impresión no reconocido.');
    }
}

function printDocumentEs() {
    window.open('file/cv.pdf', '_blank')
}

function printDocumentEn() {
    window.open('file/resume.pdf', '_blank');
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  
  const isDark = document.body.classList.contains('dark-mode');
  const themeSpan = document.getElementById('theme-text');

  if (isDark) {
    themeSpan.setAttribute('data-en', '☀️ Light');
    themeSpan.setAttribute('data-es', '☀️ Claro');
    themeSpan.innerText = currentLang === 'en' ? '☀️ Light' : '☀️ Claro';
  } else {
    themeSpan.setAttribute('data-en', '🌓 Dark');
    themeSpan.setAttribute('data-es', '🌓 Oscuro');
    themeSpan.innerText = currentLang === 'en' ? '🌓 Dark' : '🌓 Oscuro';
  }
}