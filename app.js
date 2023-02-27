loginForm = document.querySelector("#login-form")
loginInput = document.querySelector("#login-form input")

function func() {
    const value = loginInput.value
    console.log(value)
}

loginForm.addEventListener("submit", func)