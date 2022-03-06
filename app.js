const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";

function onLogin(event){
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem("username",userName);
  console.log(userName);
  greeting.innerText = `Hello! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit",onLogin);

const savedUserName = localStorage.getItem("username");