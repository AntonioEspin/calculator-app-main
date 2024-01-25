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
      })
      operations.forEach(operation => {
        operation.style.backgroundColor = 'var(--Light-grayish-yellow)';
        operation.style.boxShadow = '0px 3px 0px 0px var(--Dark-grayish-orange)';
      })
      delButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      delButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)'
      resetButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      resetButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)';
      calculateButton.style.backgroundColor = 'var(--Orange)';
      calculateButton.style.boxShadow = '0px 3px 0px 0px var(--Dark-orange)';
      break;
    case '3':
      body.style.backgroundColor = 'var(--Very-dark-violet)';
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
      })
      operations.forEach(operation => {
        operation.style.backgroundColor = 'var(--Light-grayish-yellow)';
        operation.style.boxShadow = '0px 3px 0px 0px var(--Dark-grayish-orange)';
      })
      delButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      delButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)'
      resetButton.style.backgroundColor = 'var(--Dark-moderate-cyan)';
      resetButton.style.boxShadow = '0px 3px 0px 0px var(--Very-dark-cyan)';
      calculateButton.style.backgroundColor = 'var(--Orange)';
      calculateButton.style.boxShadow = '0px 3px 0px 0px var(--Dark-orange)';
      break;
  
    default:
      break;
  }
}