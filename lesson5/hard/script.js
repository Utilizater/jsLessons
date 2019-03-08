date = new Date();

function formatDate(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let months = +date.getMonth() +1 + "";
  let days = date.getDate() + "";
  let years = date.getFullYear();
  
  if (days.length == 1)
    days = "0" + days;

  if (months.length == 1)
    months = "0" + months;

  return hours+":"+minutes+":"+seconds+" "+days+":"+months+":"+years;
}
document.write(formatDate(date) + "<br>");

///////////////
switch (date.getDay()){
  case 1: document.write("Понедельник"); break;
  case 2: document.write("Вторник"); break;
  case 3: document.write("Среда"); break;
  case 4: document.write("Четверг"); break;
  case 5: document.write("Пятница"); break;
  case 6: document.write("Суббота"); break;
  case 0: document.write("Воскресенье"); break;
}
//////////////////////
document.getElementById("button").addEventListener('click', function(){
  var date1 = document.getElementById("date1").value;
  var date2 = document.getElementById("date2").value;
  date1 = date1.split("-");
  date2 = date2.split("-");
  FirstDate = new Date(+date1[2], +date1[1] - 1, +date1[0]);
  SecondDate = new Date(+date2[2], +date2[1] - 1, +date2[0]);
  alert((SecondDate - FirstDate)/(1000 * 60 * 60 * 24));
});

