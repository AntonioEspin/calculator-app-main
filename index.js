const numbers = document.querySelectorAll('.valueButton');
const operations = document.querySelectorAll('.operation');
const delButton = document.querySelector('.delButton');
const resetButton = document.querySelector('.resetButton');
const calculateButton = document.querySelector('.calculateButton');
const toggle = document.querySelector('#toggle-range');

// Elementos para el toggle
const body = document.querySelector('body');
const display = document.querySelector('.display span');
const displayBackground = document.querySelector('.display');
const keypad = document.querySelector('.container-keypad');
const colorFont = document.querySelectorAll('.header span');
console.log(colorFont)

let displayValue = '';

numbers.forEach(number => number.addEventListener('click', displayNumber));
operations.forEach(operation => operation.addEventListener('click', addOperation));

delButton.addEventListener('click', removeCharacter);
resetButton.addEventListener('click', removeAll);
calculateButton.addEventListener('click', calculate);
toggle.addEventListener('input', handleToggle);


function displayNumber () {
  displayValue += this.textContent
  updateDisplay()
}

function addOperation () {
  if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
    this.textContent === 'x' ? displayValue += '*' : displayValue += this.textContent
    updateDisplay()
  }
}

function calculate () {
  if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
    displayValue = eval(displayValue).toString();
    updateDisplay()
  }
  displayValue = eval(displayValue).toString();
  updateDisplay()
}

function removeCharacter () {
  displayValue = displayValue.slice(0, -1);
  updateDisplay()
}

function removeAll () {
  displayValue = ''
  updateDisplay()
}

function updateDisplay () {
  display.textContent = displayValue;
}

// Funcion del toggle
function handleToggle () {
  const currentValue = toggle.value
  switch (currentValue) {
    case '2':
      body.style.backgroundColor = 'var(--Light-gray)';
      colorFont.forEach(font => {
        font.style.color = 'var(--Very-dark-grayish-yellow)';
      })
      toggle.style.backgroundColor = 'var(--Grayish-red)';
      display.style.color = 'var(--Very-dark-grayish-yellow)'
      displayBackground.style.backgroundColor = 'var(--Very-light-gray)';
      keypad.style.backgroundColor = 'var(--Grayish-red)';
      numbers.forEach(number => {
        number.style.backgroundColor = 'var(--Light-grayish-yellow)';
        number.style.boxShadow = '0px 3px 0px 0px var(--Dark-grayish-orange)';
        number.style.color = 'var(--Very-dark-grayish-yellow)';
      })
      operations.forEach(operation => {
        operation.style.backgroundColor = 'var(--Light-grayish-yellow)';
        operation.style.boxShadow = '0px 3px 0px 0px var(--Dark-grayish-orange)';
        operation.style.color = 'var(--Very-dark-grayish-yellow)';
      })
      delButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      delButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)'
      resetButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      resetButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)';
      calculateButton.style.backgroundColor = 'var(--Orange)';
      calculateButton.style.boxShadow = '0px 3px 0px 0px var(--Dark-orange)';
      calculateButton.style.color = 'var(--White)';
      break;
    case '3':
      body.style.backgroundColor = 'var(--Very-dark-violet-main)';
      colorFont.forEach(font => {
        font.style.color = 'var(--Light-yellow)';
      })
      toggle.style.backgroundColor = 'var(--Very-dark-violet)';
      display.style.color = 'var(--Light-yellow)'
      displayBackground.style.backgroundColor = 'var(--Very-dark-violet)';
      keypad.style.backgroundColor = 'var(--Very-dark-violet)';
      numbers.forEach(number => {
        number.style.backgroundColor = 'var(--Very-dark-violet-key)';
        number.style.boxShadow = '0px 3px 0px 0px var(--Dark-magenta)';
        number.style.color = 'var(--Light-yellow)';
      })
      operations.forEach(operation => {
        operation.style.backgroundColor = 'var(--Very-dark-violet-key)';
        operation.style.boxShadow = '0px 3px 0px 0px var(--Dark-magenta)';
        operation.style.color = 'var(--Light-yellow)';
      })
      delButton.style.backgroundColor = 'var(--Dark-violet)';
      delButton.style.boxShadow = '0px 3px 0px 0px var(--Vivid-magenta)'
      resetButton.style.backgroundColor = 'var(--Dark-violet)';
      resetButton.style.boxShadow = '0px 3px 0px 0px var(--Vivid-magenta)';
      calculateButton.style.backgroundColor = 'var(--Pure-cyan)';
      calculateButton.style.boxShadow = '0px 3px 0px 0px var(--Soft-cyan)';
      calculateButton.style.color = 'var(--Very-dark-blue)'
      break;
  
    default:
      body.style.backgroundColor = 'var(--Very-dark-desaturated-blue-main)';
      colorFont.forEach(font => {
        font.style.color = 'var(--White)';
      })
      toggle.style.backgroundColor = 'var(--Very-dark-desaturated-blue)';
      display.style.color = 'var(--White)'
      displayBackground.style.backgroundColor = 'var(--Very-dark-desaturated-blue-screen)';
      keypad.style.backgroundColor = 'var(--Very-dark-desaturated-blue)';
      numbers.forEach(number => {
        number.style.backgroundColor = 'var(--Light-grayish-orange)';
        number.style.boxShadow = '0px 3px 0px 0px var(--Grayish-orange)';
        number.style.color = 'var(--Very-dark-grayish-blue)';
      })
      operations.forEach(operation => {
        operation.style.backgroundColor = 'var(--Light-grayish-orange)';
        operation.style.boxShadow = '0px 3px 0px 0px var(--Grayish-orange)';
        operation.style.color = 'var(--Very-dark-grayish-blue)';
      })
      delButton.style.backgroundColor = 'var(--Desaturated-dark-blue-background)';
      delButton.style.boxShadow = '0px 3px 0px 0px var(--Desaturated-dark-blue-key)'
      resetButton.style.backgroundColor = 'var(--Desaturated-dark-blue-background)';
      resetButton.style.boxShadow = '0px 3px 0px 0px var(--Desaturated-dark-blue-key)';
      calculateButton.style.backgroundColor = 'var(--Red';
      calculateButton.style.boxShadow = '0px 3px 0px 0px var(--Dark-red)';
      calculateButton.style.color = 'var(--White)'
      break;
  }
}