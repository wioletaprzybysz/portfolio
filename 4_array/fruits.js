//window.onload ="loadFruits()";
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit;

function loadFruits(){
            document.getElementById("fruits").innerHTML = fruits;
}
var fruit = document.querySelector(".addBtn");
  fruit.addEventListener("click",function myFunction() {
      fruit = prompt("What is your favorite fruit?");
      fruits[fruits.length] = fruit;
      document.getElementById("fruits").innerHTML = fruits;
}), (false);

