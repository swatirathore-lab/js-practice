let num=prompt("enter the number")
if (num%10==0){
    console.log("good")
}
else{
    console.log("bad")
}
// question2
name=prompt("please enter your name")
age=prompt("please enter your age")
console.log(alert(`${name} is ${age} years old`))
// question4
string=prompt("please enter your string")
if((string[0]=='a'||'A')&& string.length>5){
    console.log('golden')
}
else{
    console.log('not golden')
}
// question5
num1=(prompt("please enter the first number"))
num2=(prompt("please enter your 2nd number"))
num3=(prompt("please enter your 3rd number"))
if (num1>num2){
    if(num1>num3){
        console.log(`${num1}is greatest`)
    }
    else{
        console.log(`${num3} is greatest`)
    }
}
else{
    if(num2>num3){
        console.log(`${num2} is greatest`)
    }
    else{
        console.log(`${num3} is greatest`)
    }
}
// question6
number1=prompt("enter numer1")
number2=prompt("enter number2")
if(number1%10 == number2%10){
    console.log("same last digit")
}
// question3
let quarter=prompt("please enter the quarter")
switch(quarter){
    case 1:console.log("january,february,march");
    break;
    case 2:console.log("april,may,june");
    break;
    case 3:console.log("july,august,september");
    break;
    case 4:console.log("october,november,december");
    break;
    default: console.log("not a quarter")
}
