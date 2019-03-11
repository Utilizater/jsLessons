window.addEventListener("load", function(){

  setInterval(() => {
    let date = new Date();
    let seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours();
    
    if ((seconds+"").length == 1)
    document.getElementsByClassName("seconds")[0].textContent = "0" + date.getSeconds();
    else
    document.getElementsByClassName("seconds")[0].textContent = date.getSeconds();

    if ((minutes+"").length == 1)
    document.getElementsByClassName("minutes")[0].textContent = "0" + date.getMinutes();
    else
    document.getElementsByClassName("minutes")[0].textContent = date.getMinutes();

    if ((hours+"").length == 1)
    document.getElementsByClassName("hours")[0].textContent = "0" + date.getHours();
    else
    document.getElementsByClassName("hours")[0].textContent = date.getHours();



  }, 1000);

});
  
  
