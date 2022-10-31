var firstNumber = document.querySelector(".firstNumber").value;
var secondNumber = document.querySelector(".secondNumber").value;

function multiplyNumbers() {
  var firstNumber = document.querySelector(".firstNumber").value;
  var secondNumber = document.querySelector(".secondNumber").value;
  var multiplication = firstNumber * secondNumber;
  document.querySelector(".result").innerHTML = multiplication;
}

function divideNumbers() {
  var firstNumber = document.querySelector(".firstNumber").value;
  var secondNumber = document.querySelector(".secondNumber").value;
  var division = firstNumber / secondNumber;
  document.querySelector(".result").innerHTML = division;
}
