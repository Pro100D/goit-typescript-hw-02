/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weeks {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday= "SUNDAY"
}
const isWeekend = (day: string): boolean => {
if (day === Weeks.Saturday || day === Weeks.Sunday) {
  return false;
  }
  return true;
}

isWeekend(Weeks.Sunday)
isWeekend(Weeks.Monday)