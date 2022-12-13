let month = prompt("input month here")
let year = prompt("input year here")
let result;
let year1

switch (month) {
   case "1":
      result="31 Janury";
     break;
   case "2":
      if (year % 4 == 0 ){
         result="29 Febury";
         break;
      }else if(year%4 != 0 ){
         result="28 Febury";
         break;
      }
   case "3":
      result="31 March";
      break;
   case "4":
    result="30 April";
     break;
   case "5":
    result="31 May";
     break;
   case "6":
      result="30 june";
       break;
       case "7":
         result="31 July";
          break;
        case "8":
          result="31 Agust";
           break;
        case "9":
           result="30 September";
           break;
        case "10":
         result="31 October";
          break;
        case "11":
         result="30 November";
          break;
        case "12":
           result="31 December";
            break;
 }
 
 document.write(`<h1>${result} ${year}</h1>`);