const clockTitle = document.querySelector(".js-clock");

function chrismasDday() {
    // 특정 날짜 불러오는 방법
    const chrismas = new Date("2023-12-25");
    const today = new Date();
    // D-day 계산
    const dday = chrismas - today;

    // D-day 결과 가져오기 (ms*minute*hour*day)
    const secondsInMs = Math.floor(dday / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hourInMs = Math.floor(minutesInMs / 60);
    
    const day = Math.floor(hourInMs / 24);
    const hour = String(hourInMs%24).padStart(2,"0");
    const minutes = String(minutesInMs % 60).padStart(2,"0");
    const second = String(secondsInMs % 60).padStart(2, "0");

    clockTitle.innerText = `${day}d ${hour}h ${minutes}m ${second}s`;
}

chrismasDday();
setInterval(chrismasDday, 1000);