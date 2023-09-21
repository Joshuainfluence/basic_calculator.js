var x = Number(window.prompt("Enter your first number"));
var opp = window.prompt("Enter operator");
var y = Number(window.prompt('Enter another number'));

function addition(x, y){
    var ans = x + y;
    alert("The sum of both numbers is " + ans);
    document.write(ans);
}

function subtraction(x, y){
    var ans = x - y;
    alert("The difference of both number is " + ans);
    document.write(ans);
}
function division(x, y){
    var ans = x / y;
    document.write(ans);
}
function multiplication(x, y){
    var ans = x * y;
    alert("The product of both numbers is " + ans)
    document.write(ans);
}
function invalid(){
    document.write("Invalid Input");
}
// if (opp == "+"){
//     addition(x, y);
//  }else if(opp == "-"){
//     subtraction(x, y);
//  }else if(opp == "/"){
//     division(x, y);
//  }else if(opp == "*"){
//     multiplication(x, y);
//  }else{
//     invalid();
//  }

 switch (opp) {
    case "+":
        addition(x, y)
        break;
        
    case "-":
        subtraction(x, y)
        break;

    case "/":
        division(x, y)
        break;
    
    case "*":
        multiplication(x, y)
        break;
 
    default:
        invalid();
        break;
 }