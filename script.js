// Плавная навигация.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Небольшое движение декоративных томатов/листьев сохраняется без JS,
// но класс можно отключить одной строкой при необходимости.
document.documentElement.classList.add('decorations-enabled');
