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
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.points=player.points+2;
player.gender="female";
console.log(player);