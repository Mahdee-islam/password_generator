
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl  = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');



clipboard.addEventListener('click', ()=> {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return; }           /* p */
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password coppied to clipboard');
});

generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber,hasSymbol, length)
});

const generatePassword = (lower,upper,number,symbol,length) =>  {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);

    //Doesn't have a selected type
    if(typesCount === 0) {
        return '';
    }
    //create a loop
    for(let i = 0; i < length; i +=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0,length);

    return finalPassword;
}
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomNumber = () => {
    return  +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});


