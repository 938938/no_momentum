// const btn = document.querySelector("#btn");
// // const body = document.querySelector("body");

// function changeColor(){
//   body.style.backgroundColor="orange";
//   document.title="change?";
// }

// btn.addEventListener("click",changeColor);

// const title = document.querySelector("#title");
// console.log(title.id);

// function changeText(){
//   title.innerHTML="Say! Yaaah!!!";
//   title.style.color="transparent";
// }
// function moreChange(){
//   title.innerHTML="What happen?";
//   title.style.color="black";
// }

// title.addEventListener("mouseenter",changeText);
// title.addEventListener("mouseleave",moreChange);

const h1 = document.querySelector("#title");

function handleTitle(){
  if(h1.style.color==="blue"){
    h1.style.color="tomato";
  } else {
    h1.style.color="blue";
  }
}

h1.addEventListener("click",handleTitle);