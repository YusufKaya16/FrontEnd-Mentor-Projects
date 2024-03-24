const form = document.querySelector('.form');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('.error-message');

form.addEventListener('submit', (event) => {
    const email = emailInput.value;
    if(emailCheck(email)){
        errorMessage.setAttribute('style', 'display: none !important');
    }
    else{
        errorMessage.setAttribute('style', 'display: block !important');
        event.preventDefault();
    }
})

function emailCheck(email){
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(reg)){
        return true;
    }
    return false;
}