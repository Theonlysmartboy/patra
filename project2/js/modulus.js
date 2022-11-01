function modulus (){

	var firstNumber = parseInt(document.getElementById("num1").value);
	var secondNumber = parseInt(document.getElementById("num2").value);
	$modulus = firstNumber % secondNumber;
	document.getElementById("answer").value = $modulus;
}


