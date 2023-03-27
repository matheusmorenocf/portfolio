function init() {
  loader()
  switchTheme();
  formContact();
  scrollHeader();
}

function loader() {
  window.addEventListener("load", showLoader);
  window.addEventListener("load", hideLoader);
  // window.addEventListener("scroll", updateLoaderPosition);

}

function updateLoaderPosition() {
  const loader = document.querySelector("#loader");
  const windowTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const loaderHeight = loader.offsetHeight;
  loader.style.top = (windowTop + (windowHeight / 2) - (loaderHeight / 2)) + "px";
}

function showLoader() {
  document.querySelector("#loader").style.display = "block";
}

function hideLoader() {
  document.querySelector("#loader").style.display = "none";
  document.querySelector("#container").style.display = "block";
}

function switchTheme() {
  const themeButton = document.querySelector('#theme');
  themeButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    document.body.classList.contains('dark') ? document.querySelector('#switcher').classList.add('fa-sun') : document.querySelector('#switcher').classList.add('fa-moon');
    document.body.classList.contains('dark') ? document.querySelector('#switcher').classList.remove('fa-moon') : document.querySelector('#switcher').classList.add('fa-sun');
  });

}
function formContact() {
  const contactBtn = document.querySelector('#contactBtn');
  contactBtn.addEventListener('click', () => {
    document.querySelector('.contact-container').classList.remove('form-hidden');
  });
  const closeBtn = document.querySelector('#close-form');
  closeBtn.addEventListener('click', () => {
    document.querySelector('.contact-container').classList.add('form-hidden');
  })
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

