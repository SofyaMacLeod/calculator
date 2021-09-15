/*jshint esversion: 6 */
'use sctrict';

const start = document.getElementById('start');
const buttonPl = document.getElementsByTagName('button');
inplus = buttonPl[0];
explus = buttonPl[1];
const additionalin = document.querySelectorAll('.additional_income-item');
const check = document.querySelector('#deposit-check');
const monthv = document.getElementsByClassName('budget_month-value')[0];
const dayv = document.getElementsByClassName('budget_day-value')[0];
const expensesmonthv = document.getElementsByClassName('expenses_month-value')[0];
const additionalincomev = document.getElementsByClassName('additional_income-value')[0];
const additionalexpensesv = document.getElementsByClassName('additional_expenses-value')[0];
const periodv = document.getElementsByClassName('income_period-value')[0];
const targetmonthvalue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const expensesItems = document.querySelectorAll('.expenses-items');
const select = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const incomeTitle = document.getElementsByClassName('income-title')[0];
const expensesTitle = document.getElementsByClassName('expenses-title')[0];
const additionalExpenses = document.getElementsByClassName('additional_expenses')[0].getElementsByClassName('title')[0];
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const incomeItem = document.querySelectorAll('.income-items');



const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};



const appData = {
      income: {},
      addIncome: [],
      expenses: [],
      addExpenses:[],
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      incomeMonth: 0,
      expensesMonth: 0,

      start: function(){
        if (salaryAmount.value === ''){
          alert('Ошибка, поле нужно заполнить!');
          return; 
      }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.showResult();
    appData.blocked();
    },


    blocked: function(){
      document.querySelectorAll('. data input[type=text]').forEach(function(){
        item.disabled = true;
      });
      start.style.display = 'none';
      cancel.style.display = 'block';
    }, 

    addExpensesBlock: function(){
       let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, explus);
        expensesItems[0] = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
          explus.style.display = 'none';
        }
        cloneExpensesItems.querySelectorAll('input').forEach((item)=>{
          item.value = '';
        });
    }, 
    
    getExpenses: function(){
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== ''){
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },

    showResult: function(){
      monthv.value = appData.budgetMonth; 
      dayv.value = appData.budgetDay; 
      expensesmonthv.value = appData.expensesMonth;
      additionalexpensesv.value = appData.addExpenses.join(', '); 
      additionalincomev.value = appData.addIncome.join(', '); 
      targetmonthvalue.value = Math.ceil(appData.getTargetMonth());
      periodv.value = appData.calcSavedMoney();

      select.addEventListener('change', function(){
        select.value = appData.calcSavedMoney();
      });
    },

    addIncomeBlock: function(){
      let cloneIncomeItems = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItems, inplus);
      incomeItem[0] = document.querySelectorAll('.income-items');

      if(incomeItem.length === 3){
        inplus.style.display = 'none';
      }
      cloneIncomeItems.querySelectorAll('input').forEach((item)=>{
        item.value = '';
      });

    },

    getIncome: function(){
      incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = cashIncome;
        }

      });
    },

    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(','); 
      addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
          appData.addExpenses.push(item);
        }
      }
      );

    },

    getAddIncome: function(){
      additionalin.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
          appData.addIncome.push(itemValue);
        }

      });

    },
      
    getExpensesMonth: function(){  
      let sum = 0; 
      for (let keys in appData.expenses) {
        sum += +appData.expenses[keys];
        }
        appData.expensesMonth = sum;
    },         
      
      getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(+appData.budgetMonth / 30);
      }, 

      
      getTargetMonth: function(){
        getTargetMonth = targetAmount.value / appData.getBudget;
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
        return appData.budgetMonth * select.value;
      }                                       

    };
  
  
  start.addEventListener('click', appData.start);
  explus.addEventListener('click', appData.addExpensesBlock);
  inplus.addEventListener('click', appData.addIncomeBlock);

  select.addEventListener('change', function(){
  periodAmount.innerHTML = select.value;
});
  
  
  
  
  
   

  

  




 
   

 

  
  


