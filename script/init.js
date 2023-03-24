function init() {
  loader()
  switchTheme();
  formContact();
  scrollHeader();
}

function loader() {
  window.addEventListener("load", showLoader);
  window.addEventListener("load", hideLoader);
  window.addEventListener("scroll", updateLoaderPosition);

}

function updateLoaderPosition() {
  const loader = document.getElementById("loader");
  const windowTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const loaderHeight = loader.offsetHeight;
  loader.style.top = (windowTop + (windowHeight / 2) - (loaderHeight / 2)) + "px";
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

function switchTheme() {
  const themeButton = document.getElementById('theme');
  themeButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    document.body.classList.contains('dark') ? document.getElementById('switcher').classList.add('fa-sun') : document.getElementById('switcher').classList.add('fa-moon');
    document.body.classList.contains('dark') ? document.getElementById('switcher').classList.remove('fa-moon') : document.getElementById('switcher').classList.add('fa-sun');
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

