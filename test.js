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
  // const currentColor = h1.style.color;
  // let newColor;
  // if(currentColor==="blue"){
  //   newColor="tomato";
  // } else {
  //   newColor="blue";
  // };
  // h1.style.color = newColor;

  // const clickClass = "active";
  // if(h1.classList.contains(clickClass)){
  //   h1.classList.remove(clickClass);
  // } else {
  //   h1.classList.add(clickClass);
  // }

  // const clickClass = "active";
  h1.classList.toggle("active");
}

h1.addEventListener("click",handleTitle);



//html
{/* <button id="btn">얍</button>
<h1 id="title">Grab me!</h1>
<div class="hello">
  <h2>하하하</h2>
</div>
<div class="hello">
  <h2>호호호</h2>
</div>
<div class="hello">
  <h2>후후후</h2>
</div> */}