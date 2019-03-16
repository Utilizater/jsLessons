let btn_rf = document.querySelectorAll("#RF_Line, #RF"),
    btn_br = document.querySelectorAll("#BR_Line, #BR"),
    wraper = document.getElementsByClassName("popup__call-phoneblock")[0];

 wraper.style.display = "flex";
 wraper.style.flexDirection = "column";

btn_rf.forEach(function(item){
  item.addEventListener('click', function(){
    if(rus.position == "top" && belarus.visible == false ){
      belarus.element.style.visibility = "";
      belarus.visible = true;
      belarus.element.style.cursor = "pointer";
      document.getElementById("RF_Line").classList.add("popup__call-svg-active");
    } else if (rus.position == "top" && belarus.visible == true) {
      belarus.element.style.visibility = "hidden";
      belarus.visible = false;
      belarus.element.style.cursor = "";
      document.getElementById("RF_Line").classList.remove("popup__call-svg-active");
    }
  });
});


btn_br.forEach(function(item){
  item.addEventListener('click', function(){
    if (belarus.position == "top" && rus.visible == false) {
    rus.element.style.visibility = "";
    rus.visible = true;
    rus.element.style.cursor = "pointer";
    document.getElementById("BR_Line").classList.add("popup__call-svg-active");
  } else if (belarus.position == "top" && rus.visible == true) {
    rus.element.style.visibility = "hidden";
    rus.visible = false;
    rus.element.style.cursor = "";
    document.getElementById("BR_Line").classList.remove("popup__call-svg-active");
  }
  });
});


let rus = {
  position: "top",
  element: document.getElementById("Rus"),
  visible: true
}

let belarus = {
  position: "down",
  element: document.getElementById("Belarus"),
  visible: false
}
rus.element.style.borderBottom = "1px solid #000";

rus.element.addEventListener('click', function(e){
  e.preventDefault();
  if(rus.position == "down"){
    toWrap();
  }
});

belarus.element.addEventListener('click', function(e){
  e.preventDefault();
  if(belarus.position == "down"){
    toWrap();
  }
});


function toWrap(){
 
    if(wraper.style.flexDirection == "column"){
    wraper.style.flexDirection = "column-reverse";
    rus.position = "down";
    belarus.position = "top";
    rus.element.style.borderBottom = "";
    belarus.element.style.borderBottom = "1px solid #000";
    belarus.element.classList.remove("popup__call-phone-hidden");
    rus.element.classList.add("popup__call-phone-hidden");
    rus.element.style.cursor = "pointer";
    belarus.element.style.cursor = "";
    rus.element.style.visibility = "hidden";
    document.getElementById("BR_Line").classList.remove("popup__call-svg-active");
    rus.visible = false;
    belarus.visible = true;
  } else {
    wraper.style.flexDirection = "column";
    rus.position = "top";
    belarus.position = "down";
    belarus.element.style.borderBottom = "";
    rus.element.style.borderBottom = "1px solid #000";  
    rus.element.classList.remove("popup__call-phone-hidden");
    belarus.element.classList.add("popup__call-phone-hidden");
    rus.element.style.cursor = "";
    belarus.element.style.cursor = "pointer";
    belarus.element.style.visibility = "hidden";
    document.getElementById("RF_Line").classList.remove("popup__call-svg-active");
    belarus.visible = false;
    rus.visible = true;
  }

// console.log(rus);
// console.log(belarus);

}


//popup__call-svg-active