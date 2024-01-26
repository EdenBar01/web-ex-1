// Variable to store the current input
let currentInput = "";

// Function to append a value to the display
function appendToDisplay(value) {
 currentInput += value;
 document.getElementById("display").value = currentInput;
}

// Function to insert the value of π into the display
function pi(){
 currentInput += Math.PI;
 document.getElementById("display").value = currentInput;
}

// Function to insert the value of e into the display
function e(){
 currentInput += Math.E;
 document.getElementById("display").value = currentInput;
}

// Function to clear the display
function clearDisplay(){
 currentInput = "";
 document.getElementById("display").value = "";
}

// Function to delete the last character from the display
function deleteLastFromDisplay(){
 currentInput = currentInput.slice(0, -1);
 document.getElementById("display").value = currentInput;
}

// Function to calculate the result of the expression
function calculateResult() {
 try {
    currentInput = eval(currentInput);
    document.getElementById("display").value = currentInput;
 } catch (error) {
    document.getElementById("display").value = "Error";
 }
}

function calculateSquare(){
 currentInput = Math.pow(eval(currentInput), 2);
 document.getElementById("display").value = currentInput;
}

// Function to calculate the reciprocal of a number
function calculateReciprocal(){
 const num = eval(currentInput);

 if(num == 0){
  document.getElementById("display").value = "ERROR";
 }
 else{
  currentInput = 1/num;
  document.getElementById("display").value = currentInput;
 }
}

// Function to calculate the absolute value of a number
function absolute(){
 currentInput = Math.abs(eval(currentInput));
 document.getElementById("display").value = currentInput;
}

// Function to calculate the exponential (e^x)
function exponential(){
 currentInput = Math.exp(eval(currentInput));
 document.getElementById("display").value = currentInput;
}

// Function to calculate the modulus (remainder)
function calculateMod(){
 const operands = currentInput.split('%');

 if (operands.length === 2) {
  const dividend = parseFloat(operands[0]);
  const divisor = parseFloat(operands[1]);

  if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
   currentInput = dividend % divisor;
   document.getElementById("display").value = currentInput;
  } else {
    document.getElementById("display").value = "Error";
  }
 } else {
   document.getElementById("display").value = "Error";
 }
}

// Function to calculate the square root
function calculateSquareRoot() {
 currentInput = Math.sqrt(eval(currentInput));
 document.getElementById("display").value = currentInput;
}

function addParenthesis2(){
 document.getElementById("display").value += '(';
}

function addParenthesis1(){
 document.getElementById("display").value += ')';
}

function calculateFactorial(num){
 const number = parseInt(eval(currentInput));

 if (!isNaN(number) && number >= 0) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
   result *= i;
  }

  currentInput = result;
  document.getElementById("display").value = currentInput;
 } else {
   document.getElementById("display").value = "Error";
 }
}

// Function to calculate the power of x raised to y
function powxy(){
  // Assuming the input is in the form "base^exponent"
  const indexOfCaret = currentInput.indexOf('^');

  if (indexOfCaret !== -1) {
      const base = parseFloat(currentInput.substring(0, indexOfCaret));
      const exponent = parseFloat(currentInput.substring(indexOfCaret + 1));

      if (!isNaN(base) && !isNaN(exponent)) {
          currentInput = base ** exponent;
          document.getElementById("display").value = currentInput;
      } else {
          document.getElementById("display").value = "Error";
      }
  } else {
      document.getElementById("display").value = "Error";
  }
}

function log(){
 const number = parseFloat(eval(currentInput));

 if (!isNaN(number) && number > 0) {
     currentInput = Math.log10(number);
     document.getElementById("display").value = currentInput;
 } else {
     document.getElementById("display").value = "Error";
 }
}

function ln(){
 const number = parseFloat(eval(currentInput));

 if (!isNaN(number) && number > 0) {
     currentInput = Math.log(number);
     document.getElementById("display").value = currentInput;
 } else {
     document.getElementById("display").value = "Error";
 }
}

function plusMinus(){
 if (currentInput !== "") {
  currentInput = -parseFloat(currentInput);
  document.getElementById("display").value = currentInput;
}
}

function dot(){
 if (currentInput.indexOf('.') === -1) {
  currentInput += '.';
  document.getElementById("display").value = currentInput;
}
}