function add() {
	var firstNumber = parseInt(document.getElementById("num1").value);
	var secondNumber = parseInt(document.getElementById("num2").value);
	var sum = firstNumber + secondNumber;
	document.getElementById("answer").value = sum;
}
