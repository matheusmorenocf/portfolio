const themeButton = document.getElementById('theme');

themeButton.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
})