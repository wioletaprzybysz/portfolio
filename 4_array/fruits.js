//window.onload ="loadFruits()";
window.onload = function loadFruits(){
     document.getElementById("fruits").innerHTML = fruits;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit;


var fruit = document.querySelector(".addBtn");
  fruit.addEventListener("click",function myFunction() {
      fruit = prompt("What is your favorite fruit?");
      fruits[fruits.length] = fruit;
      document.getElementById("fruits").innerHTML = fruits;
}), (false);

