/*jshint esversion: 6 */
'use sctrict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function(){
    money = prompt('Ваш месячный доход');
    while (!isNumber(money)){
    money = prompt('Ваш месячный доход');
  }
};

start();



  
let appData = {
          income: {},
          addIncome: [],
          expenses: {},
          addExpenses:[],
          deposit: false,
          mission: 50000,
          period: 3,
          asking: function(){
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
                for (let i = 0; i < 2; i++) {
                  expenses[i] = prompt(`Введите обязательную статью расходов`);
                  let sum;
                  do {
                    sum += +prompt('Во сколько это обойдется?');
                  }
                  while (!isNaN(sum));
                  appData.expenses[expenses] = +sum;
                }
            },
          budget: money,
          budgetDay: 0,
          budgetMonth: 0,
          expensesMonth: 0,

          getBudget: function () {
            appData.budgetMonth = appData.budget - appData.expenses;
            appData.budgetDay = Math.floor(+appData.budgetMonth / 30);
          }, 

          getTargetMonth: function(){
            getTargetMonth = appData.mission / appData.getBudget;
            if (getTargetMonth < 0) {return("Цель не будет достигнута");}
            else {return("Цель будет достигнута");}   
          },

          getStatusIncome: function(){
            if (appData.budgetDay > 1200) {return("У вас высокий уровень дохода");}
            else if (appData.budgetDay > 600, appData.budgetDay <= 1200) {return("У вас средний уровень дохода");}
            else if (appData.budgetDay >= 0, appData.budgetDay <= 600) {return("К сожалению у вас уровень дохода ниже среднего");}
            else {return("Что-то пошло не так");}
          },
             
    };

  console.log("Бюджет на день", appData.budgetDay, "рублей"); 
  console.log(appData.getStatusIncome());  
  appData.asking();
    
 
  
  
   

  
  
 
  




 
   

 

  
  


