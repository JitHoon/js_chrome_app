loginForm = document.querySelector("#login-form")
loginInput = document.querySelector("#login-form input")

function func(event) {
    // 브라우저의 기본 HTML 동작을 하지 않도록 막는 method
    event.preventDefault()
    // submit한 input의 value를 console에 계속 띄울 수 있게됨.
    console.log(loginInput.value)
}

// form의 submit의 기본 동작은 브라우저를 새로고침한다.
loginForm.addEventListener("submit", func)