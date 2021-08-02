/*jshint esversion: 6 */
'use sctrict';
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
  console.log(addExpenses.toLocaleLowerCase().split(', '));
  console.log("budgetDay", budgetDay, "рублей"); 

  let question = prompt('Ваш месячный доход');
  let question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  let question3 = prompt('Есть ли у вас депозит в банке?');
  let question4 = prompt('Введите обязательную статью расходов?');
  let question5 = prompt('Во сколько это обойдется?');
  let question6 = prompt('Введите обязательную статью расходов?');
  let question7 = prompt('Во сколько это обойдется?');
