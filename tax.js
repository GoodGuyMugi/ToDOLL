let strsalary = prompt("Enter Salary");
var salary = parseInt(strsalary);
var strtax1 = 0;
var strtax2 = 0;
var strtax3 = 0;
var strtax4 = 0;

if(salary>12500000){
    strtax1 += (salary-12500000)*0.2;
    salary = parseInt(12500000);
    console.log(salary+"    Sal1");
}
if (salary>8500000 && salary<=12500000){
    strtax2 += (salary-8500000)*0.15;
    salary = parseInt(8500000);
    console.log(salary+"    Sal2");
}
if (salary>2000000 && salary<=8500000){
    strtax3 += (salary-2000000)*0.1;
    salary = parseInt(2000000);
    console.log(salary+"    Sal3");
}
if (salary>1300000 && salary<=2000000){
    strtax4 += (salary-1300000)*0.05;
    salary = parseInt(1300000);
    console.log(salary+"    Sal4");
}

let tax = (Number(strtax1)+Number(strtax2)+Number(strtax3)+Number(strtax4));
console.log(strtax1+"   tax1");
console.log(strtax2+"   tax2");
console.log(strtax3+"   tax3");
console.log(strtax4+"   tax4");
console.log(tax);
document.write(`Tax = ${tax} Riel`)
;