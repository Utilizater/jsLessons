var start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    yearValue = document.getElementsByClassName("year-value")[0],
    monthValue = document.getElementsByClassName("month-value")[0],
    dayValue = document.getElementsByClassName("day-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"), 
    expenssBtn = document.getElementsByTagName("button")[0];
    optionaExpenssBtn = document.getElementsByTagName("button")[1];
    countBtn = document.getElementsByTagName("button")[2];
    incomeItem = document.querySelector(".choose-income");
    checkSavings = document.querySelector(".checksavings");
    sumValue = document.querySelector(".choose-sum");
    percentValue = document.querySelector(".choose-percent");


let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
/*------------*/
let monthMoney, date;


optionalexpensesItem[0].addEventListener('input', function(){
  this.value = this.value.replace(/[^0-9\.]/g, '');
  if((optionalexpensesItem[0].value != "" || optionalexpensesItem[1].value != "" ||
   optionalexpensesItem[2].value != "") && budgetValue.innerHTML != "")
  optionaExpenssBtn.removeAttribute("disabled");
  else
  optionaExpenssBtn.setAttribute("disabled", "disabled");
});

optionalexpensesItem[1].addEventListener('input', function(){
  this.value = this.value.replace(/[^0-9\.]/g, '');
  if((optionalexpensesItem[0].value != "" || optionalexpensesItem[1].value != "" ||
   optionalexpensesItem[2].value != "") && budgetValue.innerHTML != "")
  optionaExpenssBtn.removeAttribute("disabled");
  else
  optionaExpenssBtn.setAttribute("disabled", "disabled");
});

optionalexpensesItem[2].addEventListener('input', function(){
  this.value = this.value.replace(/[^0-9\.]/g, '');
  if((optionalexpensesItem[0].value != "" || optionalexpensesItem[1].value != "" ||
   optionalexpensesItem[2].value != "") && budgetValue.innerHTML != "")
  optionaExpenssBtn.removeAttribute("disabled");
  else
  optionaExpenssBtn.setAttribute("disabled", "disabled");
});

expensesItem[0].addEventListener('input', function(){
  if(expensesItem[1].value != "" && budgetValue.innerHTML != "")
  expenssBtn.removeAttribute("disabled");
});

expensesItem[1].addEventListener('input', function(){
  if(expensesItem[0].value != "" && budgetValue.innerHTML != "")
  expenssBtn.removeAttribute("disabled");
});

expensesItem[2].addEventListener('input', function(){
  if(expensesItem[3].value != "" && budgetValue.innerHTML != "")
  expenssBtn.removeAttribute("disabled");
});

expensesItem[3].addEventListener('input', function(){
  if(expensesItem[2].value != "" && budgetValue.innerHTML != "")
  expenssBtn.removeAttribute("disabled");
});


start.addEventListener('click', function(){
    monthMoney = +prompt("Ваш бюджет на месяц");
    date = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(monthMoney) || monthMoney == "" || monthMoney == ""){
    monthMoney = + prompt("Ваш бюджет на месяц");
  }
  let Ndate = new Date(Date.parse(date));
  yearValue.value = Ndate.getFullYear();
  monthValue.value = Ndate.getMonth()+1;
  dayValue.value = Ndate.getDate();
  appData.budget = monthMoney;
  appData.timeDate = date;
  budgetValue.textContent = monthMoney.toFixed();
  if((expensesItem[0].value != "" && expensesItem[1].value != "") ||(expensesItem[2].value != "" && expensesItem[3].value != ""))
  expenssBtn.removeAttribute("disabled");

  if(optionalexpensesItem[0].value != "" || optionalexpensesItem[1].value != "" || optionalexpensesItem[2].value != "")
  optionaExpenssBtn.removeAttribute("disabled");

  countBtn.removeAttribute("disabled");
});

expenssBtn.addEventListener('click', function(){
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++){
    let expenditureItem = expensesItem[i].value,
        cost = expensesItem[++i].value;
  
    if( typeof(expenditureItem) === 'string' && typeof(expenditureItem) != null 
    && typeof(cost) === 'string' && typeof(cost) != null
    && expenditureItem != '' && cost != '' && expenditureItem.length < 50) {
    appData.mandatoryExpenses[expenditureItem] = cost;
    sum += +cost; 
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionaExpenssBtn.addEventListener('click', function(){
  for(let i = 0; i < optionalexpensesItem.length; i++){
    appData.optionalExpenses[i] = optionalexpensesItem[i].value;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});
////////////////////////////////////////////////////////////////////////////////////
countBtn.addEventListener('click', function(){
  if (appData.budget != undefined){
    appData.moneyPerDay = (appData.budget / 30).toFixed() + (+expensesValue.innerHTML/30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    }
  } else {
    daybudgetValue.textContent = 'Произошла ошибка';
  }
});

incomeItem.addEventListener('input', function(){
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

incomeItem.onkeyup = function(){
  var reg = /[a-zA-Z]/g;
      if (this.value.search(reg) !=  -1) {
          this.value  =  this.value.replace(reg, '');
      }
}

checkSavings.addEventListener('click', function(){
  if (appData.savings == true){
      appData.savings = false;
  } else{
      appData.savings = true;
  }
});

sumValue.addEventListener('input', function(){
  if(appData.savings == true){
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12 * percent;
    appData.yearIncome = sum/100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function(){
  if(appData.savings == true){
    let sum = +sumValue.value,
    percent = +percentValue.value;
    appData.monthIncome = sum/100/12 * percent;
    appData.yearIncome = sum/100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

//percentValue

var appData = {
  budget: monthMoney,
  timeDate: date,
  mandatoryExpenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};




console.log(appData);
