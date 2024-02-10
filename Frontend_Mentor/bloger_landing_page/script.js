const collapseContent = document.querySelector('#navbarSupportedContent');
const collapseBtn = document.querySelector('.navbar-toggler');

const win = window.matchMedia('(max-width: 990px)');
win.addEventListener('change', () => {
    if (win.matches) {
        collapseContent.classList.add('changeClass');
    }
    else {
        collapseContent.classList.remove('changeClass');
    }
})

collapseBtn.addEventListener('click', (event) => {

    if (collapseContent.clientHeight) {
        event.target.innerHTML = '<img class="collapseBtn" style="pointer-events: none;" unselectable="on" src="images/icon-hamburger.svg" alt="hamburger"></img>'
    }
    else {
        event.target.innerHTML = '<img class="collapseBtn" style="pointer-events: none;" unselectable="on" src="images/icon-close.svg" alt="hamburger"></img>'
    }


})

