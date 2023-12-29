const text = document.querySelector('.question');
const info = document.querySelectorAll('.info p');
const icon = document.querySelector('.question').querySelector('svg');



Array.from(info).forEach((element)=>{
    element.style.display = 'none';
})

text.addEventListener('click', ()=>{
    if(info[0].style.display === 'none'){
        info[0].style.display = 'block';
    }
    else{
        info[0].style.display = 'none';
    }
})






