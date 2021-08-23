/*jshint esversion: 6 */
'use sctrict';

const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function(){
    money = prompt('Ваш месячный доход');
    while (!isNumber(money)){
    money = prompt('Ваш месячный доход');
  }
};

start();

  
const appData = {
          income: {},
          addIncome: [],
          expenses: [],
          addExpenses:[],
          deposit: false,
          mission: 50000,
          period: 3,
          budget: money,
          budgetDay: 0,
          budgetMonth: 0,
          expensesMonth: 0,
          sum: 0,
          
          asking: function(){
            
            const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
                for (let i = 0; i < 2; i++) {
                  appData.expenses[i] = prompt(`Введите обязательную статью расходов`);
                  do {
                    appData.expenses[i] = +prompt('Во сколько это обойдется?');
                  }
                  while (isNaN(appData.expenses[i]));
                } 

                for (let key in appData.expenses){
                console.log(key + ':' + appData.expenses[key]);
                }
            },
          
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

  appData.asking();
  console.log(appData.getTargetMonth()); 
  console.log(appData.getStatusIncome()); 
  console.log ('Наша программа включает в себя данные');

  for (let key in appData){
    console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key]);
  } 
  for (let expensesMonth in expenses[i]){
    console.log('Расходы за месяц', appData.expensesMonth(expenses[i]).lenght);    
  }    

  

  
  
  
   

  
  
 
  




 
   

 

  
  


