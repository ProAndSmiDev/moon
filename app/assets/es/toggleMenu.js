;
(function() {
    const burger = document.querySelector('.nav__burger');
    const hMenuWrapper = document.querySelector('.nav__wrapper');
    const hMenuBg = document.querySelector('.nav__bg');
    const closeBtn = document.querySelector('.nav__close-btn')

    burger.addEventListener('click', function() {
        hMenuBg.style.right = '0';
        hMenuWrapper.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        hMenuBg.style.right = '-240px';
        hMenuWrapper.classList.remove('active');
    });
})();