const resixeBtn = document.querySelector('[data-resize-btn]');

resixeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('sb-expanded');
});
