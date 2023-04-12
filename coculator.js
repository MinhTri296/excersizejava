function cong() {
    let number1 = document.getElementById("n1").value;
    let number2 = document.getElementById("n2 ").value;
    let Result ;
    Result   = Number(number1) + Number(number2);
    document.getElementById("Result").innerHTML= Result;
}
function tru(){
    let number1 =document.getElementById("n1").value;
    let number2 =document.getElementById("n2 ").value;
    let Result = number1 - number2;
    document.getElementById("Result").innerHTML= Result;
}
function nhan(){
    let number1 =document.getElementById("n1").value;
    let number2 =document.getElementById("n2 ").value;
    let Result = number1 * number2;
    document.getElementById("Result").innerHTML= Result;
}
function chia(){
    let number1 =document.getElementById("n1").value;
    let number2 =document.getElementById("n2 ").value;
    let Result = number1 / number2;
    document.getElementById("Result").innerHTML= Result;
}