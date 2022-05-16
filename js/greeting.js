const loginForm = document.querySelector(".login_form");
const loginInfut = document.querySelector(".login_form input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 하는 관습.
// 자바스크립트는 오탈자를 체크해주지 않기 때문에, 자주 사용하는 단어는 변수화(변수이름은 체크해주기 때문에)
const USERNAME_KEY = "username";

function onloginSubmit(event) { // 로그인 기능(input에 submit이 일어났을 경우 실행)
  event.preventDefault(); // submit 이벤트(새로고침) 발생을 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm 클래스에 hidden 클래스 추가(로그인 하면 로그인 폼은 보이지 않게 함)
  const username=loginInfut.value; // input에 들어온 유저의 이름 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 저장할 값의 이름(username_key)과 저장할 값(username)을 저장
  paintGreetings(username); // 유저 네임 표시 함수 실행
}

function paintGreetings(username){ // 유저네임 표시 함수(onloginSubmit 함수와 아래 if문에 두번 반복되므로 따로 설정)
  greeting.innerText = `Welcome to your universe, ${username} !`; // greeting부분에 인삿말 삽입
  greeting.classList.remove(HIDDEN_CLASSNAME); // greeting에 있는 hidden 클래스 제거
}

const saveUsername = localStorage.getItem(USERNAME_KEY); // localstorage에 저장된 username_key의 값을 변수로 저장

if(saveUsername === null){ // 저장된 유저네임이 존재하지 않을 때
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼에 hidden 클래스 제거
  loginForm.addEventListener("submit",onloginSubmit); // loginform에 submit 이벤트 설정
} else { // 저장된 유저네임이 존재할 때
  paintGreetings(saveUsername); // 유저네임을 표시하는 함수 실행
}