const images = ["0.jpeg", "1.jpeg"];

const image = images[Math.floor(Math.random()*images.length)];

const todayBg = document.createElement("img");

todayBg.src = `img/${image}`;

document.body.appendChild(todayBg);
