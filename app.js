const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLogin(event){
  event.preventDefault();
  console.log(event);
  // const userName = loginInput.value;
}

loginForm.addEventListener("submit",onLogin);