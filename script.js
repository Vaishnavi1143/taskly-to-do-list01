const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formStatus.classList.remove('error');
  if (!name || !email || !message) {
    formStatus.textContent = 'Please complete all three fields.';
    formStatus.classList.add('error');
  } else if (!emailPattern.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.classList.add('error');
  } else {
    formStatus.textContent = `Thanks, ${name}! Your form has passed validation. (Demo only — no message was sent.)`;
    contactForm.reset();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
