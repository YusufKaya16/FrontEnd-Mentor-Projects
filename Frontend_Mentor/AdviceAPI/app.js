const dice = document.querySelector('.dice');
const title = document.querySelector('#advice-id');
const adviceText = document.querySelector('.advice-text');
const card = document.querySelector('.card');

// API Object
const adv = new Advice();

allEvents();
function allEvents() {
    dice.addEventListener('click', changeAdvice);
    window.addEventListener("load", dice.click());
}

function changeAdvice(event) {

    adv.get()
        .then(result => result.slip)
        .then(result => {
            const { id, advice } = result;
            title.textContent = id;
            adviceText.textContent = advice;
        })
}

gsap.from(".title", {
    opacity: 0,
    x: -200,
    duration: .5
});

gsap.from(".advice-text", {
    y: -500,
    duration: 1
});

gsap.from(".dice", {
    y: 300,
    duration: 1
});




