$(document).ready(function(){
$(".main_btna").click(function (e) {
  e.preventDefault(); 
  task();
});


$(".main_btn").click(function (e) {
  e.preventDefault(); 
  task();
});

$("a[href*='#sheldure']").click(function (e) {
  e.preventDefault(); 
  task();
});


function task(){
 $(".modal").slideDown();
 $(".overlay").show("slow");
}

$(".close").click(function () {
  $(".modal").slideUp();
  $(".overlay").hide("slow");
});


});