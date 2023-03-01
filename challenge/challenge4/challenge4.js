const clockTitle = document.querySelector(".js-clock");

function chrismasDday() {
    // 특정 날짜 불러오는 방법
    const chrismas = new Date("2023-12-25");
    const today = new Date();
    // D-day 계산
    const dday = chrismas - today;

    // D-day 결과 가져오기 (ms*minute*hour*day)
    const day = Math.floor(dday / (1000 * 60 * 60 * 24));
    const hour = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2,"0");
    const minutes = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2,"0");
    const second = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");

    clockTitle.innerText = `${day}d ${hour}h ${minutes}m ${second}s`;
}

chrismasDday();
setInterval(chrismasDday, 1000);