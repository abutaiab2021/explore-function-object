var color = "yellow";

if(color == "black"){
    console.log("color is black");
}else if(color == "white"){
    console.log("color is white");
}else if(color == "red"){
    console.log("color is red");
}else if(color == "green"){
    console.log("color is green");
}else if(color == "blue"){
    console.log("color is blue");
}else if(color == "skyblue"){
    console.log("color is skyblue");
}else{
    console.log("this is no color");
}

// alter native way for if condition
var color = "black";
switch(color){
    case "blue" :
        console.log("color is blue");
        break;
    case "red" :
        console.log("color is red");
        break;
    case "green" :
        console.log("color is green");
        break;
    case "yellow" :
        console.log("color is yellow");
        break;
    case "megenta" :
        console.log("color is megenta");
        break;
    case "black" :
        console.log("color is black");
        break;
    default :
    console.log("there is no color");
}