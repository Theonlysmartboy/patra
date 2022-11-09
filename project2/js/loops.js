function start() {
    $first= parseInt(document.getElementById("num1").value);
    for($i = $first; $i >= 1; $i--){

        console.log($first+ " * "+ $i + " = "+ $first*$i)
    }
}