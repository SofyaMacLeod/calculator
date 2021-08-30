/*jshint esversion: 6 */
'use sctrict';

const calculate = document.getElementById('start');
console.log(calculate);
const button1 = document.getElementsByTagName('button')[0];
console.log(button1);
const button2 = document.getElementsByTagName('button')[1];
console.log(button2);
const check = document.querySelector('.checkbox');
console.log(check);
const additional = document.querySelectorAll('.additional_income-item');
console.log(additional);
const cancel = document.querySelector('#cancel');
console.log(cancel);
const range = document.querySelector('.range');
console.log(range);
const input = document.querySelector('.text');
console.log(input);
const value = document.getElementsByName('-value');
console.log(value);












/*
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
      percentDeposit: 0,
      moneyDeposit: 0,
      mission: 50000,
      period: 3,
      budget: money,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,

      asking: function(){

            if( confirm('Есть ли у вас дополнительный источник заработка?')){
              let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
              while (!isNaN(itemIncome)){
                itemIncome = prompt('Какой у вас дополнительный заработок?');
              }
              let cashIncome = prompt('Сколько приносит дополнительный доход?', 10000);
              while (!isNumber(cashIncome)){
                cashIncome = prompt('Сколько приносит дополнительный доход?');
              }
              appData.income[itemIncome] = cashIncome;
            }

           let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase();
            while (!isNaN(addExpenses)){
              addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            }
            appData.addExpenses = addExpenses.toString().split(',');
            let space = '';
            for (let item of appData.addExpenses){
              let space2 = item.charAt(0).toUpperCase() + item.slice(1);
              space += ',' + space2;
            }
            console.log(space.slice(3));

            appData.deposit = confirm('Есть ли у вас депозит в банке?');
                let keys;
                for (let i = 0; i < 2; i++) {
                keys = prompt('Введите обязательную статью расходов?');
                while (!isNaN(keys)){
                  keys = prompt('Введите обязательную статью расходов?');
                }
                appData.expenses[keys] = +prompt('Во сколько это обойдется');
                while (!isNumber(appData.expenses[keys])) {
                appData.expenses[keys] = +prompt('Во сколько это обойдется');
                }
                }
                for (let keys in appData.expenses){
                  console.log(keys + ':' + appData.expenses[keys]);
                 }
                },
      
    getExpensesMonth: function(){  
      let sum = 0; 
      for (let keys in appData.expenses) {
        sum += +appData.expenses[keys];
        }
        appData.expensesMonth = sum;
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

      getInfoDeposit: function(){
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
        while (!isNumber(appData.percentDeposit)){
          appData.percentDeposit = prompt('Ваш месячный доход');
        }
        appData.moneyDeposit = prompt('Какой годовой процент?', 10000);
        while (!isNumber(appData.moneyDeposit)){
          appData.moneyDeposit = prompt('Какая сумма заложена?');
        }
      }, 
      calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
      }                                       

    };
  
  appData.asking();


  console.log (appData.expensesMonth);
  console.log(appData.getTargetMonth()); 
  console.log(appData.getStatusIncome());


 
  
  console.log ('Наша программа включает в себя данные');
  for (let key in appData){
    console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key]);
  } 
  
*/
  
  
  
   

  
  
 
  




 
   

 

  
  


