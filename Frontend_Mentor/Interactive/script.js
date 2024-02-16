const container = document.querySelector('.container');
const buttonGroup = document.querySelector('.button-group');
const submit = document.querySelector('.submit-btn');

buttonGroup.addEventListener('click', (event) => {

    if (!event.target.closest("button")) return;

    const current = Array.from(buttonGroup.querySelectorAll('.btn'))
        .find(button => button.classList.contains('active'));

    if (current === undefined) {
        event.target.classList.add("active");
        container.dataset.buttonValue = event.target.value;
    }

    else {
        current.classList.remove('active');
        event.target.classList.add("active");
        container.dataset.buttonValue = event.target.value;
    }

})

submit.addEventListener('click', () => {

    if(container.dataset.buttonValue === undefined) container.dataset.buttonValue = 0;

    const voteCard = document.querySelector('#vote-card');
    const answerCard = document.querySelector('#answer-card');
    const changeText = answerCard.querySelector('.change-text');
    changeText.textContent = `You selected ${container.dataset.buttonValue} out of 5`;
    voteCard.style.display = 'none';
    answerCard.setAttribute("style", "display: flex !important");

})
