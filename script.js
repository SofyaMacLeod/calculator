/*jshint esversion: 6 */
'use sctrict';
const 
  income = "main work",
  mission = 100000,
  period = 1;

  const money = prompt('Ваш месячный доход');
  const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  const deposit = confirm('Есть ли у вас депозит в банке?');
  const expenses1 = prompt('Введите обязательную статью расходов?');
  const amount1 = prompt('Во сколько это обойдется?');
  const expenses2 = prompt('Введите обязательную статью расходов?');
  const amount2 = prompt('Во сколько это обойдется?');
  const budgetMonth = money - amount1 - amount2;
  const budgetDay = (money - amount1 - amount2)/30;
  
  console.log(typeof money, typeof income, typeof deposit); 
  console.log(addExpenses.length);
  console.log("Период равен", period, "месяцев"); 
  console.log("Цель заработать", mission, "рублей");
  console.log(addExpenses.toLocaleLowerCase().split(', '));
  console.log("Бюджет месяц", budgetMonth, "рублей"); 
  console.log("Бюджет на день", budgetDay, "рублей"); 
  if (budgetDay > 1200) {console.log("У вас высокий уровень дохода");}
    else if (budgetDay > 600, budgetDay <= 1200) {console.log("У вас средний уровень дохода");}
    else if (budgetDay >= 0, budgetDay <= 600) {console.log("К сожалению у вас уровень дохода ниже среднего");}
    else {console.log("Что-то пошло не так");}