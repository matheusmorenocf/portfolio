switchTheme();

function switchTheme() {
  const themeButton = document.getElementById('theme');

  themeButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  });

  const contactBtn = document.getElementById('contactBtn');

  contactBtn.addEventListener('click', () => {
    document.querySelector('.form-contact-container').classList.remove('form-hidden');
  });
}
