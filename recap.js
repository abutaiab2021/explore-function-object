//1. variable
var favoriteBook = "4 hour work week";

//2.array
var bookList =  ['Positioning','Hooked','start with hay','shoe dog'];

var shoeIndex = bookList.indexOf('Shoe Dog');
bookList[1] = 'Story Brand';

bookList.push('Small Gaients');
bookList.push();

//3. conditionals
if(bookList[1] == 'hooked'){
    console.log("I am hooked");
}else{
    console.log("I am not hooked");
}

//while loop
var i = 0;//loop variable
while(i < 15){
    console.log(i);
    console.log('While looping looping looping!!');
    i++;
}

//for  loop
for(var i=0;i<15;i++){
    console.log(i);
    console.log('For looping looping looping!!');
}

