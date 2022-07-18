const body = document.querySelector('body');
const switchBtn = document.querySelector('.switch__btn');
const switchCircle = document.querySelector('.switch__circle');

function changeTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    switchCircle.classList.remove('light-mode-on');
    switchBtn.setAttribute('aria-pressed', false);
  } else {
    body.classList.add('light-theme');
    switchCircle.classList.add('light-mode-on');
    switchBtn.setAttribute('aria-pressed', true);
  }
}

switchBtn.addEventListener('click', changeTheme);
