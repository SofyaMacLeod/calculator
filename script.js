/*jshint esversion: 6 */
'use sctrict';
const 
  income = "main work",
  mission = 100000,
  period = 1;

  let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let money;
  const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  const deposit = confirm('Есть ли у вас депозит в банке?');
  
  let start = function(){
      money = prompt('Ваш месячный доход');

      while (!isNumber(money)){
        money = prompt('Ваш месячный доход');
      }
  };

  start();
  
  let showTypeOf = function(data) {
    console.log(data, typeof(data));
  };
  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);

  let expenses = [];

  console.log(addExpenses.toLocaleLowerCase().split(','));

  let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');
        sum += +prompt('Во сколько это обойдётся?');
        
        while (!isNumber(sum)){
          sum = prompt('Во сколько это обойдётся?');
        }
    }
    console.log(expenses);
    return sum;
  };

  let expensesAmount = getExpensesMonth();
  console.log ('Расходы за месяц:' + expensesAmount);
  
  
  let getAccumulatedMonth = function (money, amount1, amount2) {
    return money - amount2 - amount1;
  };

  let accumulatedMonth = getAccumulatedMonth(money);

  let getTargetMonth = function(mission, accumulatedMonth){
    getTargetMonth = mission / accumulatedMonth;
    if (getTargetMonth < 0) {return("Цель не будет достигнута");}
    else {return("Цель будет достигнута");} 
    return getTargetMonth;   
  };
  
  const budgetDay = accumulatedMonth/30;
  console.log("Бюджет на день", budgetDay, "рублей"); 
  
  
  let getStatusIncome = function(){
    if (budgetDay > 1200) {return("У вас высокий уровень дохода");}
    else if (budgetDay > 600, budgetDay <= 1200) {return("У вас средний уровень дохода");}
    else if (budgetDay >= 0, budgetDay <= 600) {return("К сожалению у вас уровень дохода ниже среднего");}
    else {return("Что-то пошло не так");}
  };
 console.log(getStatusIncome());