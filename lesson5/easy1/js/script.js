var menu = document.getElementsByClassName("menu-item");
var menu2 = menu[2]; 
document.getElementsByClassName("menu")[0].removeChild(menu2);
document.getElementsByClassName("menu")[0].insertBefore(menu2, menu[1]);
var menu5 = menu[0].cloneNode(true);
menu5.innerHTML = "Пятый пункт";
document.getElementsByClassName("menu")[0].appendChild(menu5);
/////////////////////
document.getElementsByTagName("body")[0].style.background = "url(img/apple_true.jpg) center no-repeat";
/////////////////////
document.getElementById("title").innerHTML = "Мы продаем только подлинную технику Apple";
/////////////////////
var adv = document.getElementsByClassName("adv")[0];
adv.parentNode.removeChild(adv);
/////////////////////
var st = prompt("Ваше отношение к технике apple");
document.getElementById("prompt").innerHTML = st;