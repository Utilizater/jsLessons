window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  let tab = document.querySelectorAll(".info-header-tab"),
      info = document.querySelector(".info-header"),
      tabContent = document.querySelectorAll(".info-tabcontent");
  function hideTabContent(a){
    for(let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove("show");         
      tabContent[i].classList.add("hide");         
    }
  }

  hideTabContent(1);

  function showTabContent(b){
    if (tabContent[b].classList.contains("hide")){
      tabContent[b].classList.remove("hide");         
      tabContent[b].classList.add("show");         
    }
  }
    
    info.addEventListener('click', function(event){
      let target = event.target;
      if(target && target.classList.contains("info-header-tab")){
        for(let i = 0; i < tab.length; i++){
          if(target == tab[i]){
            hideTabContent(0);
            showTabContent(i);
            break; 
          }
        }
      }
    });

//timer
let dedline = '2019-05-21';

function getTimeRemaining(endtime){
  let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t/1000) % 60),
      minutes = Math.floor((t/60000) % 60),
      hours = Math.floor(t/(1000*60*60));
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
}

  function setClock(id, endtime){
    let timer = document.getElementById(id),
        hours = document.querySelector(".hours"),
        minutes = document.querySelector(".minutes"),
        seconds = document.querySelector(".seconds"),
        timeInteval = setInterval(updateClock, 1000);
    function updateClock(){
      let t = getTimeRemaining(endtime);
      if ((t.hours+"").length == 1)
      hours.textContent = "0"+ t.hours;
      else
      hours.textContent = t.hours;

      if ((t.minutes+"").length == 1)
      minutes.textContent = "0" + t.minutes;
      else
      minutes.textContent = t.minutes;

      if ((t.seconds+"").length == 1)
      seconds.textContent = "0" + t.seconds;
      else
      seconds.textContent = t.seconds;

      if (t.total <= 0)
      clearInterval(timeInteval);
    }
  }

  setClock("timer", dedline);

//Scrol
let anchors = [];
    anchors[0] = document.querySelector('a[href="#about"]');
    anchors[1] = document.querySelector('a[href="#photo"]');
    anchors[2] = document.querySelector('a[href="#price"]');
    anchors[3] = document.querySelector('a[href="#contacts"]');



    anchors.forEach(function(item){
      item.addEventListener('click', function(e){
          e.preventDefault();
        
          if(item.href.includes("about"))
          var element = document.getElementById("about"); 

          if(item.href.includes("photo"))
          var element = document.getElementById("photo"); 

          if(item.href.includes("price"))
          var element = document.getElementById("price"); 

          if(item.href.includes("contacts"))
          var element = document.getElementById("contacts"); 

          let myInter = setInterval(myTimer, 10);

          function myStopInterval(){
            clearInterval(myInter);
          }
          
          function myTimer(){
            let coordY = element.getBoundingClientRect().top;
            console.log(coordY);
            if (Math.abs(coordY) > 30 && coordY < 0)
            window.scrollBy(0, -30);
        
            if (Math.abs(coordY) > 30 && coordY > 0)
            window.scrollBy(0, 30);
        
            if(Math.abs(coordY) < 40) {
              myStopInterval();
              console.log("stop!");
            }
          }

      });
    });



});

