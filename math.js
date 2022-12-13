let Name=prompt("What is your Name?")
var Khmer = prompt("What is your Khmer Score?");
var Math = prompt("What is your Math Score?");
var Bio=prompt("What is your  Biology Score?");
var Chemistry = prompt("What is your Chemistry Score?");
var English = prompt("What is your English Score?");

var num1=parseInt(Khmer);
var num2=parseInt(Math);
var num3=parseInt(Bio);
var num4=parseInt(Chemistry);
var num5=parseInt(English);
var full= num1+num2+num3+num4+num5;
var avg=full/5;

if (num1<=100 && num2<=100 && num3<=100 && num4<=100 && num5<=100){

document.write(`Name : ${Name}`+"<br>" );
document.write(`Khmer : ${num1}`+"<br>" );
document.write(`Math : ${num2}`+"<br>" );
document.write(`KBio : ${num3}`+"<br>" );
document.write(`Chemistry : ${num4}`+"<br>" );
document.write(`English : ${num5}`+"<br>" );
document.write(`Your Full Score is ${full}`+"<br>" );
document.write(`Your Average Score is ${avg}`+"<br>");

if (avg>=90){
    document.write(`Your Grade is A`);
}
else if(avg>=80){
    document.write(`Your Grade is B`);
}
else if(avg>=70){
    document.write(`Your Grade is C`);
}
else if(avg>=60){
    document.write(`Your Grade is D`);
}
else if(avg>=50){
    document.write(`Your Grade is E`);
}
else {
    document.write(`Your Grade is F`);
}

}
else{
 if(num1>100){
     document.write(`Your Khmer Score is Invalid`+"<br>");
 }
 if(num2>100){
    document.write(`Your Math Score is Invalid`+"<br>");
}
if(num3>100){
    document.write(`Your Biology Score is Invalid`+"<br>");
}
if(num4>100){
    document.write(`Your Chemistry Score is Invalid`+"<br>");
}
if(num5>100){
    document.write(`Your English Score is Invalid`);
}
}
