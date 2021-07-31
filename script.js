/*jshint esversion: 6 */
const 
  money = 1000,
  income = "main work",
  addExpenses = "food, internet",
  mission = 10000,
  period = 1,
  deposit = true,
  budgetDay = 900;

console.log(typeof money, typeof income, typeof deposit); 
console.log(addExpenses.length);
console.log("Период равен", period, "месяцев"); 
console.log("Цель заработать", mission, "рублей");
console.log(addExpenses.toLocaleLowerCase(), addExpenses.split(', '));
console.log("budgetDay", budgetDay, "рублей"); 
