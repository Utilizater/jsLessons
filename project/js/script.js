window.addEventListener('DOMContentLoaded', () => {
      'use strict';
      let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");
      let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove("show");
          tabContent[i].classList.add("hide");
        }
      };

      hideTabContent(1);

      let showTabContent = (b) => {
        if (tabContent[b].classList.contains("hide")) {
          tabContent[b].classList.remove("hide");
          tabContent[b].classList.add("show");
        }
      };

      info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
          for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
              hideTabContent(0);
              showTabContent(i);
              break;
            }
          }
        }
      });

      //timer
      let dedline = '2019-05-21';

      let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 60000) % 60),
          hours = Math.floor(t / (1000 * 60 * 60));
        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      };

      let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
          hours = document.querySelector(".hours"),
          minutes = document.querySelector(".minutes"),
          seconds = document.querySelector(".seconds");

        let updateClock = () => {
          let t = getTimeRemaining(endtime);
          if ((t.hours + "").length == 1)
            hours.textContent = "0" + t.hours;
          else
            hours.textContent = t.hours;

          if ((t.minutes + "").length == 1)
            minutes.textContent = "0" + t.minutes;
          else
            minutes.textContent = t.minutes;

          if ((t.seconds + "").length == 1)
            seconds.textContent = "0" + t.seconds;
          else
            seconds.textContent = t.seconds;

          if (t.total <= 0)
            clearInterval(timeInteval);
        };

        let timeInteval = setInterval(updateClock, 1000);
      };

      setClock("timer", dedline);

      //Scrol
      let anchors = [];
      anchors[0] = document.querySelector('a[href="#about"]');
      anchors[1] = document.querySelector('a[href="#photo"]');
      anchors[2] = document.querySelector('a[href="#price"]');
      anchors[3] = document.querySelector('a[href="#contacts"]');



      anchors.forEach((item) => {
        let myStopInterval = () => {
          clearInterval(myInter);
          //  console.log("stop!");
        };

        item.addEventListener('click', (e) => {
          e.preventDefault();

          if (window.myInter != undefined) {
            myStopInterval();
          }

          if (item.href.includes("about"))
            var element = document.getElementById("about");

          else if (item.href.includes("photo"))
            var element = document.getElementById("photo");

          else if (item.href.includes("price"))
            var element = document.getElementById("price");

          else if (item.href.includes("contacts"))
            var element = document.getElementById("contacts");


          let myTimer = () => {
            let coordY = element.getBoundingClientRect().top;
            //  console.log(coordY);
            if (Math.abs(coordY) > 30 && coordY < 0)
              window.scrollBy(0, -30);

            if (Math.abs(coordY) > 30 && coordY > 0)
              window.scrollBy(0, 30);

            if (Math.abs(coordY) < 40) {
              myStopInterval();
              //   console.log("stop!");
            }
          };

          window.myInter = setInterval(myTimer, 10);
        });
      });
      //modal
      let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');



      let browserDetection = () => {

        var sBrowser, sUsrAg = navigator.userAgent;
        if (sUsrAg.indexOf("Firefox") > -1) {
          sBrowser = "Mozilla Firefox";
          // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
          sBrowser = "Opera";
          //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        } else if (sUsrAg.indexOf("Trident") > -1) {
          sBrowser = "Microsoft Internet Explorer";
          // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        } else if (sUsrAg.indexOf("Edge") > -1) {
          sBrowser = "Microsoft Edge";
          // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        } else if (sUsrAg.indexOf("Chrome") > -1) {
          sBrowser = "Google Chrome or Chromium";
          // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        } else if (sUsrAg.indexOf("Safari") > -1) {
          sBrowser = "Apple Safari";
          // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        } else {
          sBrowser = "unknown";
        }

        return sBrowser;
      };



      for (let i = 0; i < more.length; i++) {
        more[i].addEventListener('click', () => {


          if (document.body.clientWidth < 900) {
            console.log("mobile");
            overlay.classList.remove("fade");
            overlay.style.display = 'block';
          } else if (browserDetection() == "Microsoft Internet Explorer") {
            console.log("css animation");
            this.classList.add('more-splash');
            overlay.style.display = 'block';
          } else {
            console.log("Js animation");
            overlay.classList.remove("fade");
            overlay.style.opacity = "0.1";
            overlay.style.display = 'block';

            let modalAnimation = () => {
              if (+overlay.style.opacity != 1)
                overlay.style.opacity = +overlay.style.opacity + 0.1 + "";
              else clearInterval(z);
            };
            let z = setInterval(modalAnimation, 50);
          }



          document.body.style.overflow = 'hidden';
        });
      }

      close.addEventListener('click', () => {
        overlay.style.display = 'none';
        //this.parentNode.classList.remove('more-splash');
        document.body.style.overflow = '';
      });


      //form
      let message = {
        loading: 'Загрузка',
        success: 'img/digital-campaign.svg',
        failure: 'img/unhappy.svg'
      };

      let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMesaage = document.createElement('div');

      statusMesaage.classList.add("status");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMesaage);

        let requesst = new XMLHttpRequest();
        requesst.open('POST', 'server.php');
        requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach((value, key) => {
          obj[key] = value;
        });

        var json = JSON.stringify(obj);

        requesst.send(json);
        requesst.addEventListener('readystatechange', () => {
          if (requesst.readyState < 4) {
            statusMesaage.innerHTML = message.loading;
          } else if (requesst.readyState == 4 && requesst.status == 200) {
            statusMesaage.innerHTML = "";
            statusMesaage.style.height = "80px";
            statusMesaage.style.background =  `url(${message.success}) no-repeat center`;
            statusMesaage.style.marginTop = "10px";
            } else {
              statusMesaage.innerHTML = "";
              statusMesaage.style.height = "80px";
              statusMesaage.style.background =  `url(${message.failure}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
          }
        });

        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }

      });
      //second form
      let secondForm = document.getElementById("form"),
        secondFormInputs = secondForm.getElementsByTagName("input");
      secondForm.addEventListener('submit', (event) => {
          event.preventDefault();


          console.log(phonenumber(secondFormInputs[1].value));
          secondForm.appendChild(statusMesaage);

          let requesst = new XMLHttpRequest();
          requesst.open('POST', 'server.php');
          requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          let formData = new FormData(secondForm);

          let obj = {};
          formData.forEach((value, key) => {
            obj[key] = value;
          });

          var json = JSON.stringify(obj);

          requesst.send(json);
          requesst.addEventListener('readystatechange', () => {
            if (requesst.readyState < 4) {
              statusMesaage.innerHTML = message.loading;
            } else if (requesst.readyState == 4 && requesst.status == 200) {
              statusMesaage.innerHTML = "";
            statusMesaage.style.height = "80px";
            statusMesaage.style.background =  `url(${message.success}) no-repeat center`;
            statusMesaage.style.marginTop = "10px";
            } else {
              statusMesaage.innerHTML = "";
              statusMesaage.style.height = "80px";
              statusMesaage.style.background =  `url(${message.failure}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
            }
          });

          for (let i = 0; i < input.length; i++) {
            input[i].value = "";
          }

          function phonenumber(inputtxt) {
            var phoneno = /^[\+]\d{10}$/;
            if (inputtxt.match(phoneno)) {
                return true;
              } else {
                alert("message");
                return false;
              }
            }
          });


      });