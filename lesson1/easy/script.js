
var monthMoney = prompt("Ваш бюджет на месяц");
var date = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
  budget: monthMoney,
  timeDate: date,
  mandatoryExpenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

var expenditureItem = prompt("Введите обязательную статью расходов в этом месяце");
var cost = prompt("Во сколько вам это обойдется");
appData.mandatoryExpenses[expenditureItem] = cost;
console.log(appData);

alert ("Бюджет на один день - "+monthMoney/30);