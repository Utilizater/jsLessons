result = {};

function main(element) {
  let set = element.querySelectorAll("*");
  for(let i = 0; i < set.length; i++) {
    if(result[set[i].tagName] == undefined) {
      result[set[i].tagName] = 1;
    } else {
      result[set[i].tagName]++;
    }
//    console.log(result[set[i].tagName]);
  }
}

main(document);

console.log(result);

