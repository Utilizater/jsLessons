let monthMoney, date;

function start(){
  monthMoney = + prompt("Ваш бюджет на месяц");
  date = prompt("Введите дату в формате YYYY-MM-DD");

  while(isNaN(monthMoney) || monthMoney == "" || monthMoney == ""){
    monthMoney = + prompt("Ваш бюджет на месяц");
  }
}

start();


var appData = {
  budget: monthMoney,
  timeDate: date,
  mandatoryExpenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses(){
  for (var i = 0; i < 2; i++){
  
    var expenditureItem = prompt("Введите обязательную статью расходов в этом месяце");
    var cost = prompt("Во сколько вам это обойдется");
  
    if( typeof(expenditureItem) === 'string' && typeof(expenditureItem) != null 
    && typeof(cost) === 'string' && typeof(cost) != null
    && expenditureItem != '' && cost != '' && expenditureItem.length < 50) {
    appData.mandatoryExpenses[expenditureItem] = cost;
    } else {
      i--;
    }
  }
 }

chooseExpenses();

  
function checkSavings(){
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений"),
        percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();

function detectDayBudget(){
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){  
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  }
}

detectLevel();

function chooseOptExpenses(){
  for(let i = 1; i < 4; i++){
    appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
  }
}
chooseOptExpenses()


console.log(appData);
