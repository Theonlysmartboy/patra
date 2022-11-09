function divide(){
    var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	$quotient = num1 / num2;
	document.getElementById("answer").value = $quotient;
}