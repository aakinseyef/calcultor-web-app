let currentOperation = '';
let previousOperand = '';
let currentOperand = '';


function appendNumber(number){
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function setOperation(operation){
  if(currentOperand === '') return;
  if(previousOperand !== '') calculate();
  currentOperation = operation;
  previousOperand =currentOperand;
  currentOperand = '';
}

function calculate(){
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if(isNaN(prev) || isNaN(current)) return;
  switch(currentOperation){
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
  }
  currentOperand = computation;
  previousOperand = '';
  currentOperation = undefined;
  updateDisplay();
}

function updateDisplay(){
  document.getElementById('display').value = currentOperand;
}