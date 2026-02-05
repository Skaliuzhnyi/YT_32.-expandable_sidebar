const body = document.body;
const aside = document.querySelector('aside');
const resizeBtn = document.querySelector('[data-resize-btn]');
const navLinks = document.querySelectorAll('aside nav ul li a');

// Collapse
resizeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('sb-expanded');
});

// ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && body.classList.contains('sb-expanded')) {
    body.classList.remove('sb-expanded');
  }
});

// Клик вне aside
document.addEventListener('click', (e) => {
  if (
    body.classList.contains('sb-expanded') &&
    !aside.contains(e.target) &&
    !resizeBtn.contains(e.target)
  ) {
    body.classList.remove('sb-expanded');
  }
});

// Активный пункт + закрытие sidebar
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (!link.classList.contains('active')) {
      document.querySelector('aside nav a.active')?.classList.remove('active');
      link.classList.add('active');
    }

    body.classList.remove('sb-expanded');
  });
});