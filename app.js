const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#login-form");

const USER_NAME_KEY = "userName"
const CSS_HIDDEN = "hidden"

function func(event) {
    event.preventDefault();
    const userName = loginInput.value;
    // 브라우저에서 제공하는 localStorage를 활용하여 userName 저장
    localStorage.setItem(USER_NAME_KEY,userName)
    loginForm.classList.add(CSS_HIDDEN);
    showGreeting(userName)
};

function showGreeting(name) {
    greeting.classList.remove(CSS_HIDDEN);
    // `${변수}`
    greeting.innerText = `✨ Hello ${name} 📣🐰`;
}

// localStorage에 userName 여부 확인
const savedUsername = localStorage.getItem(USER_NAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(CSS_HIDDEN);
    // form의 submit의 기본 동작은 브라우저를 새로고침한다.
    loginForm.addEventListener("submit", func);
} else {
    showGreeting(savedUsername)
};