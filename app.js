loginForm = document.querySelector("#login-form");
loginInput = document.querySelector("#login-form input");
greeting = document.querySelector("#login-form");

function func(event) {
    event.preventDefault();
    const userName = loginInput.value;
    // 브라우저에서 제공하는 localStorage를 활용하여 userName 저장
    localStorage.setItem("userName",userName)
    // css display: none 과 
    // element.classList.add, remove를 활용한 Interation
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    // `${변수}`
    greeting.innerText = `✨ Hello ${userName} 📣🐰`;
};

// form의 submit의 기본 동작은 브라우저를 새로고침한다.
loginForm.addEventListener("submit", func);