
const toggleNav = document.querySelector('.toggleNav');


toggleNav.addEventListener('click', function () {
    const toggleIcon = document.querySelector('.toggleNav img');
    const navBar = document.querySelector('nav');
    const computed = window.getComputedStyle(navBar);
    if (computed.display === 'none') {
        navBar.style.display = 'block';
        toggleIcon.setAttribute('src', 'images/icon-close.svg');
    } else if (computed.display === 'block') {
        navBar.style.display = 'none';
        toggleIcon.setAttribute('src', 'images/icon-hamburger.svg');
    }
})