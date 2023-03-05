const toDoForm = document.getElementById("to-do-form");
const toDoInput = document.querySelector("#to-do-form input");
const toDoList = document.getElementById("to-do-list");

const TODOS = "toDos"

const toDos = [];

function toDoSave() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function toDoRemove(event) {
    // console.log(event); event -> target
    // console.dir(event.target); event.target -> parentElement
    toDoTarget = event.target.parentElement;
    toDoTarget.remove();
}

function toDoCreate(newTodo) {
    const toDoLi = document.createElement("li");
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newTodo;
    const toDoBotton = document.createElement("botton");
    toDoBotton.innerText = "𝗫";

    toDoLi.appendChild(toDoSpan);
    toDoLi.appendChild(toDoBotton);
    toDoList.appendChild(toDoLi);

    toDoBotton.addEventListener("click", toDoRemove);
}

function toDoValue(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDos.push(newTodo)
    toDoInput.value = ""
    toDoCreate(newTodo);
    toDoSave();
}

toDoForm.addEventListener("submit", toDoValue);

const toDosLocal = localStorage.getItem(TODOS);

if (toDosLocal) {
    const toDosArray = JSON.parse(toDosLocal);
    // toDosArray.forEach((item) => console.log("hi", item));
    toDosArray.forEach(toDoCreate);
}