const clock=document.querySelector(".clock_po");

function getClock(){ // 시간 가져오는 함수
  const date = new Date(); // 현재 시간 가져오기
  const hours = String(date.getHours()).padStart(2,"0"); // 1시를 01시로 표현하기 위함. padStart(2,"0") : 2글자가 아니면 앞에 0을 붙임.
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${min}:${sec}`
};

getClock();
setInterval(getClock, 1000); // 1초마다 반복