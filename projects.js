document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      details.classList.toggle('hidden');
      btn.textContent = details.classList.contains('hidden') ? '[ read more ]' : '[ collapse ]';
    });
  });
});
