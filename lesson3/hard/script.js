var str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substr(1);

///////////////////////////////////////////////////////
let num = (str.match(/-/g) || []).length
for (let i = 0; i < num; i++) {
  str = str.replace("-", " ");
}

console.log(str);
/////////////////////////////////////////////////////
let subst = "легким";
subst = subst.substring(0, subst.length - 2) + "oo";
str = str.replace("легким", subst);

alert(str);

//////////////////////////////////////////////////////
arr = [20, 33, 1, "Человек", 2, 3];
let count = 0;
for (let i = 0; i < arr.length; i++){
  if (typeof(arr[i])==="number") {
    count = count + Math.pow(arr[i], 3);
  }
}
count = Math.sqrt(count);
console.log(count);
/////////////////////////////////////$Recycle.Bin

function func(st){
  if (!isNaN(st) || st == "") {
    alert("Не строка");
    return false;
  }

  let bol = true 

  while(bol) {
    bol = false;
    if (st[0] == " "){
      st = st.substring(1);
      bol = true;
    }
    if (st[st.length-1] == " "){
      st = st.substring(0, st.length-1);
      bol = true;
    }
  }  

  if (st.length > 50) {
    st = st.substring(0, 50) + "...";
  }

    return st;
} 

