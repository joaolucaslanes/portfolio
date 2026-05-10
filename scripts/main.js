// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = hamburger.nextElementSibling;

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Fecha ao clicar em link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// Copy email
const copyEmailBtn = document.getElementById('copy-email');
const emailText = document.getElementById('email-text');

if (copyEmailBtn && emailText) {
  copyEmailBtn.addEventListener('click', async () => {
    const original = emailText.textContent.trim();
    emailText.textContent = 'E-mail copiado ✓';

    try {
      await navigator.clipboard.writeText(original);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = original;
      textarea.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (e) {}
      document.body.removeChild(textarea);
    }

    setTimeout(() => {
      emailText.textContent = original;
    }, 1800);
  });
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
