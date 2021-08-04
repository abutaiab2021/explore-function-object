//function for Summation by two number.
function addTwoNumbers(number1,numeber2){
    console.log(number1,numeber2);
    var total = number1 + numeber2;
    return total;
}

var firstNumber = 45;
var secondNumber = 50;
var result =  addTwoNumbers(firstNumber,secondNumber);
console.log("Result value is :",result);

//function for multiplication by two number.
function multiplyTwoNumbers(num1,num2){
    var result = num1 * num2;
    return result;
}

var noteOfFiveTake = 5;
var noteOfHundedTaka = 100;
var totalMoney = multiplyTwoNumbers(noteOfFiveTake,noteOfHundedTaka);
console.log("Apnar total taka holo :",totalMoney);