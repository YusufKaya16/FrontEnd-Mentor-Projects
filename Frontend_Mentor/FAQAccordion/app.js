const content = document.querySelector('.content');

content.addEventListener('click', (event) => {
    
    if (!event.target.closest('img')) return;
    const information = event.target.parentElement.nextSibling.nextSibling;
    const parag = information.getElementsByTagName('p')[0];

    if(parag.clientHeight){
        parag.style.height = 0;
        parag.style.opacity = 0;
        event.target.attributes[1].nodeValue = "img/icon-plus.svg";

    }
    else{
        parag.style.height = parag.scrollHeight + 'px';
        parag.style.opacity = '0.7';
        event.target.attributes[1].nodeValue = "img/icon-minus.svg";
    }

});