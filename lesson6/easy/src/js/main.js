let start = document.getElementById("start"),
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


  expenssBtn.style.backgroundColor = "blue";
  expenssBtn.removeAttribute("disabled");

let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
/*------------*/
let monthMoney, date;

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
////////////////////////////////////////////////////////////////////////////////////////////////////

  if((expenses-item[0].value != "" && expenses-item[1].value != "") 
  || (expenses-item[3].value != "" && expenses-item[4].value != "" )){
    expenssBtn.style = "Red";
  }

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

countBtn.addEventListener('click', function(){
  if (appData.budget != undefined){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
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
