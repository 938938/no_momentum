const btn = document.querySelector("#btn");
const body = document.querySelector("body");

function changeColor(){
  body.style.backgroundColor="orange";
  document.title="change?";
}

btn.addEventListener("click",changeColor);

const title = document.querySelector("#title");
console.log(title.id);

function changeText(){
  title.innerHTML="Say! Yaaah!!!";
}
function moreChange(){
  title.innerHTML="What happen?";
}

title.addEventListener("mouseenter",changeText);
title.addEventListener("mouseleave",moreChange);

const test = document.querySelector(".hello h1");
console.log(test);
const secondTest = document.querySelectorAll(".hello h1");
console.log(secondTest);


// const calculator = {
//   plus: function (a,b){
//     console.log("hello?");
//     return a + b;
//   },
//   minus: function (a,b){
//     console.log("why?");
//     return a - b;
//   },
//   times: function (a,b){
//     return a * b;
//   },
//   divide: function (a,b){
//     return a / b;
//   },
//   power: function (a,b){
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(2,1);
// const minusResult = calculator.minus(plusResult,10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(isNaN(age) || age < 0 ){
//   console.log("Please write a real positive number");
// } else if(age<18){
//   console.log("You are too young.");
// } else if(age >=18 && age <= 50){
//   console.log("You can drink");  
// } else if(age > 50 && age <= 80 ) {
//   console.log("I think you should exercise");
// } else if (age>80){
//   console.log("You can do whatever you want.");
// };

// if((a &&b) || (c&&d)){
  
// }