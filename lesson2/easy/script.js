
var monthMoney = + prompt("Ваш бюджет на месяц");
var date = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
  budget: monthMoney,
  timeDate: date,
  mandatoryExpenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


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

/*
var i = 0;
while(i < 2) {
  i++;
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

var i = 0;
 do {
  i++;
  var expenditureItem = prompt("Введите обязательную статью расходов в этом месяце");
  var cost = prompt("Во сколько вам это обойдется");

  if( typeof(expenditureItem) === 'string' && typeof(expenditureItem) != null 
  && typeof(cost) === 'string' && typeof(cost) != null
  && expenditureItem != '' && cost != '' && expenditureItem.length < 50) {
  appData.mandatoryExpenses[expenditureItem] = cost;
  } else {
    i--;
  }
} while(i < 2)
*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
}
  


console.log(appData);
