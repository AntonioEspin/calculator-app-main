const numbers = document.querySelectorAll('.valueButton');
const operations = document.querySelectorAll('.operation');
const delButton = document.querySelector('.delButton');
const resetButton = document.querySelector('.resetButton');
const calculateButton = document.querySelector('.calculateButton');
let displayValue = '';

numbers.forEach(number => number.addEventListener('click', displayNumber));
operations.forEach(operation => operation.addEventListener('click', addOperation));

delButton.addEventListener('click', removeCharacter);
resetButton.addEventListener('click', removeAll);
calculateButton.addEventListener('click', calculate);


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
  const display = document.querySelector('.display span');
  display.textContent = displayValue;
}