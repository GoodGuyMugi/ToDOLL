let arr = [], domlai,i=0;
let ranD = Math.floor(Math.random()*10)+1;
do{
 domlai = prompt('Enter number')
 arr[i]=domlai;
 i++
}while(domlai > 0)
i=i-1;   
for (let e=0;e<i;e++){
document.write(arr[e]+' '+ "<br>"); 
}
function ror(arr){
    return arr==ranD;
}

let see = arr.find(ror);

if (ranD == see){
    document.write(`Lucky Number is ${ranD}`+"<br>");
    document.write(`You win The Lottery jackpot of 10 millions dollars!!!!!!`);
    
}
else{
    document.write(`Lucky Number is ${ranD}`+"<br>");
    document.write(`Try Again next Time :(`);
}