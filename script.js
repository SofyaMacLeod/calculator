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
const periodAmount = document.querySelector('.period-amount');
const incomeTitle = document.getElementsByClassName('income-title')[0];
const expensesTitle = document.getElementsByClassName('expenses-title')[0];
const additionalExpenses = document.getElementsByClassName('additional_expenses')[0].getElementsByClassName('title')[0];
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');




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

      check: function(){
        if (salaryAmount.value !== ''){
          start.removeAttribute('disabled');
      }
      },

      start: function(){
        if (salaryAmount.value === ''){
          alert('Ошибка, поле нужно заполнить!');
          return; 
      }

      let allInput = document.querySelectorAll('.data input[type = text]');
      allInput.forEach(function(item){
          item.setAttribute('disabled', 'disabled');    
      });
      explus.setAttribute('disabled', 'disabled'); 
      inplus.setAttribute('disabled', 'disabled'); 

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

    
    },


    blocked: function(){
      document.querySelectorAll('. data input[type=text]').forEach(function(){
        item.disabled = true;
      });
      start.style.display = 'none';
      cancel.style.display = 'block';
    }, 

    showResult: function(){
      monthv.value = this.budgetMonth; 
      dayv.value = this.budgetDay; 
      expensesmonthv.value = this.expensesMonth;
      additionalexpensesv.value = this.addExpenses.join(', '); 
      additionalincomev.value = this.addIncome.join(', '); 
      targetmonthvalue.value = Math.ceil(this.getTargetMonth());
      periodv.value = this.calcSavedMoney();

      select.addEventListener('change', function(){
        select.value = this.calcSavedMoney();
      });
    },

    addExpensesBlock: function(){
       let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, explus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
          explus.style.display = 'none';
        }
        cloneExpensesItem.querySelectorAll('input').forEach((item)=>{
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

    addIncomeBlock: function(){
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, inplus);
      incomeItems = document.querySelectorAll('.income-items');

      if(incomeItems.length === 3){
        inplus.style.display = 'none';
      }
      cloneIncomeItem.querySelectorAll('input').forEach((item)=>{
        item.value = '';
      });

    },

    getIncome: function(){
      incomeItems.array.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = cashIncome;
        }
      }, this);

      for (let key in this.income)
        {
         this.incomeMonth += +this.income[key];   
        }    
},

    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(','); 
      addExpenses.array.forEach(function(item){
        item = item.trim();
        if (item !== ''){
          appData.addExpenses.push(item);
        }
      }, this
      );

    },

    getAddIncome: function(){
      additionalin.array.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
          appData.addIncome.push(itemValue);
        }

      }, this);

    },
      
    getExpensesMonth: function(){  
      let sum = 0; 
      for (let keys in this.expenses) {
        sum += +this.expenses[keys];
        }
        this.expensesMonth = sum;
    },         
      
      getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(+this.budgetMonth / 30);
      }, 

      
      getTargetMonth: function(){
        return targetAmount.value / this.getBudget;
      },

      getStatusIncome: function(){
        if (this.budgetDay > 800) {return("У вас высокий уровень дохода");}
        else if (this.budgetDay > 300, this.budgetDay <= 800) {return("У вас средний уровень дохода");}
        else if (this.budgetDay >= 0, this.budgetDay <= 300) {return("К сожалению у вас уровень дохода ниже среднего");}
        else if (this.budgetDay < 0) {return("Что-то пошло не так");}
      },  

      getInfoDeposit: function(){
        if (this.deposit){
          do{
            this.percentDeposit = prompt('Какой годовой процент?', '10');
           } while (!isNumber(this.percentDeposit));
          do 
          {
            this.moneyDeposit = prompt('Какая сумма заложена', '10000');
          }  while (!isNumber(this.moneyDeposit));   
        }
      }, 
      
      
      calcSavedMoney: function(){
        return this.budgetMonth * select.value;
      },
      
      reset: function(){

        let inputTextData = document.querySelectorAll('.data input [type = text]');
        let resultInputAll = document.querySelectorAll('.result input [type = text]');

        inputTextData.array.forEach(function(elem){
          elem.value = '';
          elem.removeAttribute('disabled');
          select.value = '0';
          periodAmount.innerHTML = select.value;
        }, this);

        resultInputAll.array.forEach(function(elem)
        {
          elem.value = '';
        }, this);

        for (let i = 1; i < incomeItems.length; i ++){
          incomeItems[i].parentNode.removeChild(incomeItems[i]);
          inplus.style.display = 'block';
        }

      }

    };
  
  
  start.addEventListener('click', appData.start.bind(appData));
  explus.addEventListener('click', appData.addExpensesBlock);
  inplus.addEventListener('click', appData.addIncomeBlock);
  salaryAmount.addEventListener('keyup', appData.check);
  cancel.addEventListener('click', appData.reset.bind(appData));

  select.addEventListener('change', function(){
  periodAmount.innerHTML = select.value;
});
  
  
  
  
  
   

  

  




 
   

 

  
  


