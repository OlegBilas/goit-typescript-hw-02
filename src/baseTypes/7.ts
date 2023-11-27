/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
const enum Day {
  mon = "work",
  tue = "work", 
  wen = "work", 
  thu = "work", 
  fri = "work", 
  san = "weekend", 
  sun = "weekend", 
}


function isWeekend(day:Day):boolean {
  if (day === "work") {
    return false;
  }
   return    true;
}
  
console.log(isWeekend(Day.fri));
