const toDoForm = document.getElementById("to-do-form");
const toDoInput = document.querySelector("#to-do-form input");
const toDoList = document.getElementById("to-do-list");

function toDoCreate(newTodo) {
    const toDoLi = document.createElement("li");
    const toDoSpan = document.createElement("span");
    toDoLi.appendChild(toDoSpan);
    toDoSpan.innerText = newTodo;
    toDoList.appendChild(toDoLi);
}

function toDoValue(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    toDoCreate(newTodo);
}

toDoForm.addEventListener("submit", toDoValue);