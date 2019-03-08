var start = document.getElementById("start");
/*------------*/
var budgetValue = document.getElementById("budget-value");
var daybudgetValue = document.getElementById("daybudget-value");
var levelValue = document.getElementById("level-value");
var expensesValue = document.getElementById("expenses-value");
var optionalexpensesValue = document.getElementById("optionalexpenses-value");
var incomeValue = document.getElementById("income-value");
var monthsavingsValue = document.getElementById("monthsavings-value");
var yearsavingsValue = document.getElementById("yearsavings-value");
var yearValue = document.getElementById("year-value");
var monthValue = document.getElementById("month-value");
var dayValue = document.getElementById("day-value");
/*------------*/
var expensesItem = document.getElementsByClassName("expenses-item"); 
/*------------*/
var btn = document.getElementsByTagName("button");
for(let i = 0; i < btn.length; i++){
  if(btn[i].innerHTML == "Утвердить")
  var approve = btn[i];
  
  if(task4[i].innerHTML == "Рассчитать")
  var count = btn[i];
}
/*------------*/
var optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
/*------------*/
var remaining = document.querySelector(".choose-income-label .checksavings label[for='sum'] label[for='percent'] .year .month .day");