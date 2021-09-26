/*jshint esversion: 6 */
'use sctrict';

const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
const buttonPl = document.getElementsByTagName('button');
inplus = buttonPl[0];
explus = buttonPl[1];
const additionalin = document.querySelectorAll('.additional_income-item');
const checkd = document.querySelector('#deposit-check');
const monthv = document.getElementsByClassName('budget_month-value')[0];
const dayv = document.getElementsByClassName('budget_day-value')[0];
const expensesmonthv = document.getElementsByClassName('expenses_month-value')[0];
const additionalincomev = document.getElementsByClassName('additional_income-value')[0];
const additionalexpensesv = document.getElementsByClassName('additional_expenses-value')[0];
const periodv = document.getElementsByClassName('income_period-value')[0];
const targetmonthvalue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
const select = document.querySelector('.period-select');
const incPeriodValue = document.querySelector('.result-income_period input');
const periodAmount = document.querySelector('.period-amount');
const incomeTitle = document.getElementsByClassName('income-title')[0];
const expensesTitle = document.getElementsByClassName('expenses-title')[0];
const additionalExpenses = document.getElementsByClassName('additional_expenses')[0].getElementsByClassName('title')[0];
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');


const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const AppData = function(){
  this.income = {};
  this.addIncome = [];
  this.expenses = [];
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.incomeMonth = 0;
  this.expensesMonth = 0;

};

AppData.prototype.check = function(){
  if (salaryAmount.value !== ''){
    start.removeAttribute('disabled');
}
};

AppData.prototype.start = function(){
    if (salaryAmount.value === ''){
      cancel.style.display = 'block';
      return; 
    }

    let allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach(function(item){
        item.setAttribute('disabled', 'true');    
    });
    explus.setAttribute('disabled', 'true'); 
    inplus.setAttribute('disabled', 'true'); 

    start.style.display = 'none';
    cancel.style.display = 'none';
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getStatusIncome();
    this.showResult();

   
  };


  AppData.prototype.blocked = function(){
    document.querySelectorAll('. data input[type=text]').forEach(function(){
      item.disabled = true;
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
  }; 


  AppData.prototype.showResult = function(){
    monthv.value = this.budgetMonth; 
    dayv.value = this.budgetDay; 
    expensesmonthv.value = this.expensesMonth;
    additionalexpensesv.value = this.addExpenses.join(', '); 
    additionalincomev.value = this.addIncome.join(', '); 
    targetmonthvalue.value = Math.ceil(this.getTargetMonth());
    periodv.value = this.calcSavedMoney();

    select.addEventListener('change', function(){
      incPeriodValue.value = this.calcSavedMoney();
    });
  };

  
  AppData.prototype.addExpensesBlock = function(){
     let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, explus);
      expensesItems = document.querySelectorAll('.expenses-items');

      if(expensesItems.length === 3){
        explus.style.display = 'none';
      }
      cloneExpensesItem.querySelectorAll('input').forEach((item)=>{
        item.value = '';
      });
  };
  
  
  
  AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== ''){
        this.expenses[itemExpenses] = cashExpenses;
      } 
    },this);
  };

  AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, inplus);
    incomeItems = document.querySelectorAll('.income-items');

    if(incomeItems.length === 3){
      inplus.style.display = 'none';
    }
    cloneIncomeItem.querySelectorAll('input').forEach((item)=>{
      item.value = '';
    });

  };

  AppData.prototype.getIncome = function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if (itemIncome !== '' && cashIncome !== ''){
        this.income[itemIncome] = cashIncome;
      }
    }, this);

    for (let key in this.income)
      {
       this.incomeMonth += +this.income[key];   
      }    
};

AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== ''){
        this.addExpenses.push(item);
      }
    }, this
    );

  };

  AppData.prototype.getAddIncome = function(){
    additionalin.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        this.addIncome.push(itemValue);
      }

    }, this);

  };
    
  AppData.prototype.getExpensesMonth = function(){  
    let sum = 0; 
    for (let keys in this.expenses) {
      sum += +this.expenses[keys];
      }
      this.expensesMonth = sum;
  };         
    
  AppData.prototype.getBudget = function () {
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(+this.budgetMonth / 30);
    }; 

    
    AppData.prototype.getTargetMonth = function(){
      return targetAmount.value / this.budgetMonth;
    };

    AppData.prototype.getStatusIncome = function(){
      if (this.budgetDay > 800) {return("У вас высокий уровень дохода");}
      else if (this.budgetDay > 300, this.budgetDay <= 800) {return("У вас средний уровень дохода");}
      else if (this.budgetDay >= 0, this.budgetDay <= 300) {return("К сожалению у вас уровень дохода ниже среднего");}
      else if (this.budgetDay < 0) {return("Что-то пошло не так");}
    };  

    AppData.prototype.getInfoDeposit = function(){
      if (this.deposit){
        do{
          this.percentDeposit = prompt('Какой годовой процент?', '10');
         } while (!isNumber(this.percentDeposit));
        do 
        {
          this.moneyDeposit = prompt('Какая сумма заложена', '10000');
        }  while (!isNumber(this.moneyDeposit));   
      }
    }; 
    
    
    AppData.prototype.calcSavedMoney = function(){
      return this.budgetMonth * select.value;
    };
    
    AppData.prototype.reset = function(){

      let inputTextData = document.querySelectorAll('.data input [type = text]');
      let resultInputAll = document.querySelectorAll('.result input [type = text]');

      inputTextData.forEach(function(elem){
        elem.value = '';
        elem.removeAttribute('disabled');
        select.value = '0';
        periodAmount.innerHTML = select.value;
      }, this);

      resultInputAll.forEach(function(elem)
      {
        elem.value = '';
      }, this);

      for (let i = 1; i < incomeItems.length; i ++){
        incomeItems[i].parentNode.removeChild(incomeItems[i]);
        inplus.style.display = 'block';
      }

    };


    AppData.prototype.eventsListeners = function(){
        start.addEventListener('click', this.start);
        explus.addEventListener('click', this.addExpensesBlock);
        inplus.addEventListener('click', this.addIncomeBlock);
        salaryAmount.addEventListener('keyup', this.check);
        cancel.addEventListener('click', this.reset.bind(AppData));

        
      select.addEventListener('change', function(){
      periodAmount.innerHTML = select.value;
  });
        
           };

const appData = new AppData();
AppData.prototype.eventsListeners();




