loginInput = document.querySelector("#form input")
loginBnt = document.querySelector("#form button")

function func() {
    console.log(loginInput.value)
}

loginBnt.addEventListener("click", func)