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
            },
          budget: money,
          budgetDay: 0,
          budgetMonth: 0,
          expensesMonth: 0,

          getExpensesMonth: function  () {
            let sum = 0;
            for (let i = 0; i < 2; i++) {
              expenses[i] = prompt('Введите обязательную статью расходов?');
              sum += +prompt('Во сколько это обойдется?');
            }
            return sum;
          },

          getBudget: function () {
            return appData.budget - sum;
          }, 

          getTargetMonth: function(){
            getTargetMonth = appData.mission / appData.getBudget;
            if (getTargetMonth < 0) {return("Цель не будет достигнута");}
            else {return("Цель будет достигнута");}   
          },

          getStatusIncome: function(){
            if (budgetDay > 1200) {return("У вас высокий уровень дохода");}
            else if (budgetDay > 600, budgetDay <= 1200) {return("У вас средний уровень дохода");}
            else if (budgetDay >= 0, budgetDay <= 600) {return("К сожалению у вас уровень дохода ниже среднего");}
            else {return("Что-то пошло не так");}
          },
             
    };

  
  const budgetDay = appData.getBudget/30;
  console.log("Бюджет на день", budgetDay, "рублей"); 
  console.log(appData.getStatusIncome());  
  appData.asking();
    
 
  
  
   

  
  
 
  




 
   

 

  
  


