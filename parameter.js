function bringSingara(taka){
    console.log('singara ante taka dise',taka);
    console.log("mama singara den.");
    var perPiceSingara = 10;
    var singaraQuantity = taka / perPiceSingara;
    return singaraQuantity;
}

var money = 500;
// bringSingara(100); 
var singara = bringSingara(money);//variable er maddomeo value assign kora jay.
console.log("ai lon apnar singara = ",singara);
