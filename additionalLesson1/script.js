for(let i = 1; i <=100; i++){
  if(!checkNumber(i)){
    console.log(i + " - Делители этого числа: 1 и " + i);
  }
}


function checkNumber(num){
  for(let i = 2; i <=num/2; i++){
    if(num%i == 0)
    return true; 
  }
 return false;
}