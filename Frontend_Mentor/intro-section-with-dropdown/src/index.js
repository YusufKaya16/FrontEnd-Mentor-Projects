const dropdownButtons = Array.from(document.querySelectorAll('.dropdown-button'));
const dropdownDivs = document.querySelectorAll('.dropdown');
const arrowAll = Array.from(document.querySelectorAll('.arrow-icon'));
const body = document.querySelector('body');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const shadow = document.querySelector('.shadow');

body.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target);
    }
    else {
        dropdownDivs.forEach((dropdown, index) => {
            if (dropdown.classList.contains('toggleDropdown')) {
                dropdown.classList.remove('toggleDropdown');
                dropdownDivs[index].style.height = 0;
                arrowAll[index].classList.remove('iconTransform');
            }
        })
    }
})

dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        if (dropdownDivs[index].classList.contains('toggleDropdown')) {
            dropdownDivs[index].classList.remove('toggleDropdown');
            dropdownDivs[index].style.height = 0;
            arrowAll[index].classList.remove('iconTransform');
        }
        else {
            dropdownDivs[index].classList.add('toggleDropdown');
            dropdownDivs[index].style.height = (dropdownDivs[index].scrollHeight + dropdownDivs[index].offsetHeight) + 'px';
            arrowAll[index].classList.add('iconTransform');
        }
    })
});

openBtn.addEventListener('click', (event) => {
    shadow.classList.add('yanNavbar');
});
closeBtn.addEventListener('click', (event) => {
    shadow.classList.remove('yanNavbar');
});

const win = window.matchMedia('(max-width: 900px)');
win.addEventListener('change', () => {
    if(!win.matches){
        shadow.classList.remove('yanNavbar');
    }
})