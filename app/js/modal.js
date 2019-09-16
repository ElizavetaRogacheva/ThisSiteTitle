var loginBtn = document.querySelector('.login-block__btn');
var modal = document.querySelector('.modal-login');
var modalLoginCloseBtn = document.querySelector('.modal-login__close-btn');
var overlay = document.querySelector('.modal-overlay');
var loginBtnMobile = document.querySelector('.login-block__btn--mobile');

loginBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

modalLoginCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

})

loginBtnMobile.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})