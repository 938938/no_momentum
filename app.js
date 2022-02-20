// alert("hi");

function change(){
  const but = document.getElementById("btn");
  but.style.color = "red";
  but.innerText = "얍??";
  const bod = document.getElementById("body");
  bod.style.backgroundColor = "blue";
}

document.getElementById("btn").addEventListener("click",change);