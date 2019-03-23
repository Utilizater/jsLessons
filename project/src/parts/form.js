function form() {
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

    let formData = new FormData(form);
    
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    var json = JSON.stringify(obj);


    function postData(data) {
      return new Promise(function(resolve, reject){
        let requesst = new XMLHttpRequest();
        requesst.open('POST', 'server.php');
        requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        
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
        requesst.send(data);
      });
    }

    postData(formData)
          .then(() => {
            statusMesaage.innerHTML = message.loading;
          })
          .then(() => {
            statusMesaage.innerHTML = "";
            statusMesaage.style.height = "80px";
            statusMesaage.style.background =  `url(${message.success}) no-repeat center`;
            statusMesaage.style.marginTop = "10px";
          })
          .catch(() => {
          statusMesaage.innerHTML = "";
          statusMesaage.style.height = "80px";
          statusMesaage.style.background =  `url(${message.failure}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";})
          .then(() => {
            for (let i = 0; i < input.length; i++) {
              input[i].value = "";
            }})
    
  });
  //second form
  let secondForm = document.getElementById("form"),
      secondFormInputs = secondForm.getElementsByTagName("input");
      secondForm.addEventListener('submit', (event) => {
      event.preventDefault();

      secondForm.appendChild(statusMesaage);

      let formData = new FormData(secondForm);
      let obj = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      
      function postData(data) {
        return new Promise(function(resolve, reject){
          let requesst = new XMLHttpRequest();
          requesst.open('POST', 'server.php');
          requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          requesst.addEventListener('readystatechange', () => {
            if (requesst.readyState < 4) {
              statusMesaage.innerHTML = message.loading;
            } else if (requesst.readyState == 4 && requesst.status == 200) {
            resolve();
            } else {
              reject();
            }
            
          });
          requesst.send(data); 
        });
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

        postData(formData)
          .then(() => {
            statusMesaage.innerHTML = message.loading;
          })
          .then(() => {
            statusMesaage.innerHTML = "";
            statusMesaage.style.height = "80px";
            statusMesaage.style.background =  `url(${message.success}) no-repeat center`;
            statusMesaage.style.marginTop = "10px";
          })
          .catch(() => {
          statusMesaage.innerHTML = "";
          statusMesaage.style.height = "80px";
          statusMesaage.style.background =  `url(${message.failure}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";})
          .then(() => {
            for (let i = 0; i < secondFormInputs.length; i++) {
              secondFormInputs[i].value = "";
            }})
      });
};

module.exports = form;