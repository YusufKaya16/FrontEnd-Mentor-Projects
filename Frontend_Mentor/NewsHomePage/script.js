const navbar = document.querySelector('.navbar');
const navbarLinkList = navbar.querySelector('.navbar-nav');
const buttons = navbar.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.dataset.type === 'open') {
            navbarLinkList.classList.add('canvaLinks');
        }
        else {
            navbarLinkList.classList.remove('canvaLinks');
        }
    });
});

const linkList = navbarLinkList.querySelectorAll('li .nav-link');
linkList.forEach(element =>{
    element.addEventListener('click', (event) =>{
        let current = navbarLinkList.querySelector('.activeLink');
        if(current === null){
            event.target.classList.add('activeLink');
        }
        else{
            current.classList.remove('activeLink');
            event.target.classList.add('activeLink');
        }
    })
})
