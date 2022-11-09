function compare(){
$first = parseInt(document.getElementById("num1").value);
$second = parseInt(document.getElementById("num2").value);
$answer = document.getElementById("answer");
if($first < $second){
    $answer.value = "First Number is less than the second number";
}else if($first > $second){
    $answer.value = "First Number is greater than the second number ";
}else{
    $answer.value ="The two numbers are equal";
}
}