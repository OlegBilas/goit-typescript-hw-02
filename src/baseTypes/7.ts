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
  san = "free", 
  sun = "free", 
}


function isWeekend(day:Day):boolean {
  if (day === "work") {
    return true;
  }
   return false;
}
  
console.log(isWeekend(Day.fri));
