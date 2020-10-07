const colors = ["green", "red", "blue", "pink", "yellow", "rgba(133, 122, 200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function(){
  //get a random number between 0- 3 as we have index no 0 to 3 in our array
const randomNumber = getRandomNumber();
console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}