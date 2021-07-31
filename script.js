/*jshint esversion: 6 */
let money,
income,
addExpenses, 
mission,
period;


money = 1000;
income = "main work";
addExpenses = "food, internet";
mission = 10000;
period = 1;
let deposit = true;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен", period, "месяцев"); 
console.log("Цель заработать", mission, "рублей");
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));
let budgetDay;
budgetDay = 900;
console.log("budgetDay", budgetDay, "рублей"); 
