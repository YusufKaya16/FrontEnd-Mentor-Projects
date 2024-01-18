const emailInput = document.querySelector('#emailInput');
const subscribeBtn = document.querySelector('#subscribe-btn');
const requiredText = document.querySelector('.required-text');
requiredText.style.display = 'none';

emailInput.addEventListener('input', controlInput);
subscribeBtn.addEventListener('click', subscribe);

function controlInput(event) {

    const email = event.target.value;
    const valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const substrs = email.split('@');

    if (email.match(valid) && substrs[1] === 'company.com') {
        emailInput.classList.remove('invalidStyle');
        requiredText.style.display = 'none';
    }

    else {
        emailInput.classList.add('invalidStyle');
        requiredText.style.display = 'block';
    }
}

function subscribe(event) {
    sessionStorage.setItem('email1', emailInput.value);

}
