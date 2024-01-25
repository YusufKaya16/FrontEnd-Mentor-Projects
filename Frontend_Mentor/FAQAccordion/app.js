const content = document.querySelector('.content');
const infoDivs = document.querySelectorAll('info');


content.addEventListener('click', (event) => {

    if (!event.target.closest('img')) return;
    const information = event.target.parentElement.nextSibling.nextSibling;
    const parag = information.getElementsByTagName('p')[0];

    if(parag.clientHeight){
        parag.style.height = 0;
        parag.style.opacity = 0;
    }
    else{
        parag.style.height = parag.scrollHeight + 'px';
        parag.style.opacity = '0.7';
    }

});