var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (var i = 0; i < week.length; i++) {
  if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    document.write('<b>' + week[i] + '</b>');
  } else if (week[i] === 'Пятница') {
    document.write('<i>' + week[i] + '</i>');
  } else {
    document.write(week[i]);
  }
  document.write('<br>');
}

arr = [3123123, 4234234, 736346, 5345345, 23424, 42414, 123123123];
for (var i = 0; i < arr.length; i++) {
 var st = arr[i]+""; 
 
  if (st[0] === "7" || st[0] === "3")
  console.log(arr[i]);
}
