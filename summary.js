var skyColor = 'white';

var phones = ['iphone','shaomi','samsung','lg','htc'];
phones[3] = 'walton';

//check oppo is not exits in an array

// if(phones.indexOf('oppo') == -1){
//     console.log('oppo!! amir khan oppo is missing')
// }

// if lg is avaiable in a array
// if(phones.indexOf('samsung') != -1){
//     console.log('samsung is avaiable now');
// }

// //loop
// var num = 0;
// while(num <10){
//     console.log(num);
//     num++;
// }

// for(var i=0;i<phones.length;i++){
//     console.log(i);
// }

// function
function addThreeNumbers(num1,num2,num3){
    var total = num1 + num2 + num3;
    return total;
}

var sum = addThreeNumbers(101,201,301);
console.log(sum);

var microphone = {
    brand : 'hp',
    price : 100,
    color :black,
}