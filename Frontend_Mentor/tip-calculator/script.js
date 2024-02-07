const bill = document.querySelector('#bill-input');
const selectTip = document.querySelector('.select-tip-group');
const customTip = document.querySelector('#custom');
const people = document.querySelector('#people-input');
const tipAmount = document.querySelector('#tip-amount');
const total = document.querySelector('#total');
const customLabel = document.querySelector('#custom-label');
const warningText = document.querySelector('#warning-text');
const resetBtn = document.querySelector('#reset-btn');


const fatura = {
    tutar: 0,
    tip: 0,
    p_count: 0
};

// events function
const allEvents = () => {
    bill.addEventListener('change', readBill);
    selectTip.addEventListener('click', readTip);
    customTip.addEventListener('change', readCustomTip);
    customTip.addEventListener('focus', focusCustomTip);
    customTip.addEventListener('blur', blurCustomTip);
    people.addEventListener('input', readPeople);
    resetBtn.addEventListener('click', resetBtnValues);
}

allEvents();


function readBill(event) {
    const billValue = event.target.value;
    fatura.tutar = billValue;
}

function resetValues(){
    people.value = "";
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
}

function readTip(event) {
    if (!event.target.closest("button")) return;

    const buttonList = Array.from(selectTip.querySelectorAll('button'));
    buttonList.forEach(button => {
        if (button.classList.contains('buttonClicked')) {
            button.classList.remove('buttonClicked');
        }
    });
    event.target.classList.toggle('buttonClicked');
    const tipValue = event.target.value;
    fatura.tip = tipValue;
    
    resetValues();
}

function readCustomTip(event) {

    (this.value !== "") ? customLabel.style.display = "none" : customLabel.style.display = "block";
    const customTipValue = this.value;
    fatura.tip = customTipValue;

}

function focusCustomTip(event) {

    customLabel.style.display = "none";

    const buttonList = Array.from(selectTip.querySelectorAll('button'));
    buttonList.forEach(button => {
        if (button.classList.contains('buttonClicked')) {
            button.classList.remove('buttonClicked');
        }
    });

    customTip.value = "";
    resetValues();
}

function blurCustomTip(event) {
    (this.value !== "") ? customLabel.style.display = "none" : customLabel.style.display = "block";
}


function readPeople(event) {

    if (this.value === "") {
        tipAmount.textContent = "0.00";
        total.textContent = "0.00";
        resetBtn.classList.remove('resetChanged');
        event.target.classList.remove('peopleChanged');

    }

    else if(this.value === "0"){
        warningText.setAttribute('style', 'display: block !important');
        event.target.classList.add('peopleChanged');
        resetBtn.classList.remove('resetChanged');
    }

    else {
        warningText.setAttribute('style', 'display: none !important');
        event.target.classList.remove('peopleChanged');
        resetBtn.classList.add('resetChanged');
        fatura.p_count = this.value;
        tipAmount.textContent = (((fatura.tutar) / (fatura.p_count)) * (fatura.tip / 100)).toPrecision(3);
        total.textContent = (parseFloat(tipAmount.textContent) + ((fatura.tutar) / (fatura.p_count))).toPrecision(3);
    }
}

function resetBtnValues(event){

    bill.value = "";
    customTip.value = "";
    people.value = "";
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";

    const buttonList = Array.from(selectTip.querySelectorAll('button'));
    buttonList.forEach(button => {
        if (button.classList.contains('buttonClicked')) {
            button.classList.remove('buttonClicked');
        }
    });
}