let monthMoney, date;
  function start(){
    monthMoney = +prompt("Ваш бюджет на месяц");
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
  savings: true, 
  chooseExpenses: function(){
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
  }, 
  detectDayBudget: function(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  checkSavings: function(){
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений"),
          percent = +prompt("Под какой процент");
  
          appData.monthIncome = save/100/12 * percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }  
  }, 
  detectLevel: function(){    
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    }
  },
  chooseOptExpenses: function(){
    for(let i = 1; i < 4; i++){
      appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
  },
  chooseIncome: function(){
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      while(true) {
      if (!isNaN(items) || items == "") {
        items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      } else 
      break;
    }


    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?', ''));
    appData.income.sort();
  }
};

appData.chooseIncome();
appData.income.forEach(function(item, i, arr){
  i++;
  console.log("Способы доп. заработка: №" + i + ": " + item);
});

for(key in appData) {
  console.log("Наша программа включает в себя данные: " + appData[key]);
} 


console.log(appData);
