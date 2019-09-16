var helpBtn = document.querySelector('.help-block__btn');
var headerMenu = document.querySelector('.main-header__menu-block');

helpBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    helpBtn.classList.toggle('help-block__btn--close');
    headerMenu.classList.toggle('menu-hidden');
})
