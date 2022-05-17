const city = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:last-child");
const API_KEY = "251d7389c51322971da347c975ef7afb";

function onGeoOk(position) { // 위치 정보를 정상적으로 가져왔을 때 실행될 함수
  const lat = position.coords.latitude; // 위도 저장 변수
  const lon = position.coords.longitude; // 경도 저장 변수
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 해당 위도와 경도의 날짜 데이터가 있는 api 링크
  fetch(url) // url을 부름(url - promise)
    .then((response) => response.json()) // 위에서 부른 url의 response를 받아 json을 얻음
    .then((data) => { // json의 내용을 추출해 data를 얻음
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() { // 위치 정보를 가져오지 못했을 때(오류가 발생했을 때) 실행될 함수
  alert("Can't find you. No weather for you."); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);