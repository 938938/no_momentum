// const images=["00.jpg","01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `images/${chosenImage}`;
// document.body.appendChild(bgImage);

const images=["00.jpg","01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimg = `url(images/${chosenImage})`; // chosenImage를 img태그화

document.body.style.backgroundImage=bgimg; // body의 background로 넣기