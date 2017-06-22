// Code goes here
var forinterval;
var backinterval;
function forText() {
 clearInterval(backinterval);
 clearInterval(forinterval);
  
  var firstbox = document.getElementById("firstbox").value;


 forinterval =  setInterval(function(){ 
   
   var firstbox1 = document.getElementById("firstbox").value;

    var passchar = firstbox1.charAt(0);

    var secondbox = document.getElementById('secondbox').value;
    var full = secondbox + passchar;
    
     document.getElementById('secondbox').value = full;
      var res = firstbox1.slice(1);
      document.getElementById('firstbox').value = res;

}, 1000);




}


function stopText() {
 clearInterval(forinterval);
 clearInterval(backinterval);

}


function backText() {
clearInterval(backinterval);
 clearInterval(forinterval);
  var secondbox = document.getElementById("secondbox").value;

backinterval =  setInterval(function(){ 
 
   var secondbox1 = document.getElementById("secondbox").value;

    var passchar = secondbox1.charAt(secondbox1.length-1);

    var firstbox = document.getElementById('firstbox').value;
    var full = passchar + firstbox;
    
     document.getElementById('firstbox').value = full;
      var res = secondbox1.slice(0,-1);
      document.getElementById('secondbox').value = res;

}, 1000);



}