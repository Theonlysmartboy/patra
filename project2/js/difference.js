function subtract() {
	var firstNumber = parseInt(document.getElementById("num1").value);
	var secondNumber = parseInt(document.getElementById("num2").value);
	$difference = firstNumber - secondNumber;
	document.getElementById("answer").value = $difference;
}
