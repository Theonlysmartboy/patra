function product(){
	var firstNumber = parseInt(document.getElementById("num1").value);
	var secondNumber = parseInt(document.getElementById("num2").value);
	$product = firstNumber * secondNumber;
	document.getElementById("answer").value = $product;
}
