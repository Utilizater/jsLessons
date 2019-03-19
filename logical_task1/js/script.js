function palindrome(st){
let palid = "";

for(let i = 0; i < st.length; i++) {
  for(let j = 1; j < st.length - i + 1; j++) {
    let temp = st.substr(i,j);
    if(isPalindrome(temp) && palid.length < temp.length)
    palid = temp;
  }
}

function isPalindrome(str){
  let rts = "";
  for(let i = str.length - 1; i != -1; i--) {
    rts = rts + str[i];
  }
  return (str == rts);
} 

return palid;
}

console.log(palindrome("абвгоогвфф"));

