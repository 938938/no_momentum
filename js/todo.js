const todoForm = document.querySelector(".todo-form"); // 전체 html에서 .todo-form 찾기
const todoInput = todoForm.querySelector("input"); // todoForm 안에서 input 찾기
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos=[]; // newTodo를 저장하는 배열

function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // toDos를 string화해서 localStorage에 저장
}

function deleteTodo(event){ // todo를 삭제하는 함수
  const li = event.target.parentElement; // 클릭된(이벤트가 발생한) 버튼의 부모 li를 찾아서 저장
  li.remove(); // 해당 li를 제거
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  // 삭제한 li의 id를 가진 아이템을 제외하고(filter하고) 새롭게 배열을 만들기 = 해당 id값을 가진 아이템 제거
  // li.id는 string 타입이고 toDo.id는 number 타입이므로 li.id를 number 타입으로 변경
  saveTodos();
}

function paintTodo(newTodo){ // todo 리스트 그리는 함수
  const li = document.createElement("li"); // li 태그를 생성하는 변수
  li.id=newTodo.id; // 위에서 생성한 li의 id값 지정
  const span =document.createElement("span"); // span 태그 생성
  span.innerText = newTodo.text; // span에 input에 입력된 값(할 일)을 삽입
  const button = document.createElement("button"); // button 태그 생성
  button.innerText = "√"; // button에 체크 텍스트 삽입
  button.addEventListener("click",deleteTodo); // button에 click 이벤트 지정
  li.appendChild(span); // 위에서 생성한 span과 button을 li 태그 안에 추가
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event){ // 서브밋(할일 입력) 관리 함수
  event.preventDefault();
  const newTodo=todoInput.value; // 입력값 변수에 저장
  todoInput.value=""; // 저장 후 입력칸 비우기
  const newTodoObj = { // newTodoObj에 입력값(+입력값의 id) 저장 - id 저장 : 중복값이 있을 경우 삭제, 수정 등을 하게 될 때 어떤 부분인지 확인하기 위해 개별적으로 필요.
    text:newTodo,
    id:Date.now()
  };
  toDos.push(newTodoObj); // toDos 함수에 newTodoObj 삽입
  paintTodo(newTodoObj); // paintTodo(입력값 html에 나타내는 함수) 실행
  saveTodos(); // localStorage에 저장하는 함수 실행
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); // localStorage에 저장된 할일 리스트를 가져와 저장

if(savedTodos !== null){ // 저장된 할일 리스트가 있는 경우
  const parsedTodos = JSON.parse(savedTodos); // 할일 리스트를 다시 배열화해서 저장
  toDos = parsedTodos; // toDos 배열에 해당 할일 리스트(기존에 저장된 값)를 저장(그렇지 않으면 항상 빈배열로 시작되기 때문에.)
  parsedTodos.forEach(paintTodo); // 해당 배열의 요소 각각에 paintTodo 함수(할일 리스트를 만드는 함수) 실행
}