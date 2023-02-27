loginInput = document.querySelector("#login-form input")
loginBnt = document.querySelector("#login-form button")

function func() {
    console.log(loginInput.value)
}

loginBnt.addEventListener("click", func)