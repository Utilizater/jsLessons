var task1 = document.getElementById("start");
/*------------*/
var task2_1 = document.getElementById("budget-value");
var task2_2 = document.getElementById("daybudget-value");
var task2_3 = document.getElementById("level-value");
var task2_4 = document.getElementById("expenses-value");
var task2_5 = document.getElementById("optionalexpenses-value");
var task2_6 = document.getElementById("income-value");
var task2_7 = document.getElementById("monthsavings-value");
var task2_8 = document.getElementById("yearsavings-value");
var task2_9 = document.getElementById("year-value");
var task2_10 = document.getElementById("month-value");
var task2_11 = document.getElementById("day-value");
/*------------*/
var task3 = document.getElementsByClassName("expenses-item");
/*------------*/
var task4 = document.getElementsByTagName("button");
for(let i = 0; i < task4.length; i++){
  if(task4[i].innerHTML == "Утвердить")
  var task4_1 = task4[i];
  
  if(task4[i].innerHTML == "Рассчитать")
  var task4_2 = task4[i];
}
/*------------*/
var task5 = document.querySelectorAll(".optionalexpenses-item");
/*------------*/
var task6 = document.querySelector(".choose-income-label .checksavings label[for='sum'] label[for='percent'] .year .month .day");