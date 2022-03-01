// alert("hi");

// function change(){
//   const but = document.getElementById("btn");
//   but.style.color = "red";
//   but.innerText = "얍??";
//   const bod = document.getElementById("body");
//   bod.style.backgroundColor = "orange";
// }

// document.getElementById("btn").addEventListener("click",change);

const a = 5;
const b = 2;
let myName = "JH";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+myName);

myName = "jihyeon";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+myName);

let week = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(week[4]);

week.push("weekend");
console.log(week);

const player = {
  name:"jh",
  points:1,
  fat:false,
  sayHello: function(){
    console.log("hello!");
  },
};

console.log(player.name);
player.sayHello();

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.points=player.points+2;
// player.gender="female";
// console.log(player);

// function sayHello(name, age){
//   console.log("Hello! my name is "+name, "It is "+age );
// };

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lyn", 5);


function plus(a,b){
  console.log(a+b);
}
function divide(a,b){
  console.log(a/b);
}

plus(1,2);
divide(2,1);