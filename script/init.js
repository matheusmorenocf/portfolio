function init() {
  switchTheme();
  formContact();
  scrollHeader();
}

function switchTheme() {
  const themeButton = document.getElementById('theme');
  themeButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    document.body.classList.contains('dark') ? document.getElementById('switcher').classList.add('bi-brightness-high-fill') : document.getElementById('switcher').classList.add('bi-moon-fill');
    document.body.classList.contains('dark') ? document.getElementById('switcher').classList.remove('bi-moon-fill') : document.getElementById('switcher').classList.add('bi-brightness-high-fill');
  });

}
function formContact() {
  const contactBtn = document.getElementById('contactBtn');
  contactBtn.addEventListener('click', () => {
    document.querySelector('.form-contact-container').classList.remove('form-hidden');
  });

}
function scrollHeader() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0 || prevScrollpos > currentScrollPos) {
      document.querySelector('header').classList.add('visible');
    } else {
      document.querySelector('header').classList.remove('visible');
    }
    prevScrollpos = currentScrollPos;
  };
}

export { init };  

