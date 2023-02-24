const body = document.body;

function changeColor() {
    const width = window.innerWidth;
    const backGC = ['aquaColor','body','goldColor']
    if (width < 600) {
        body.classList.remove(backGC[1], backGC[2]);
        body.classList.add(backGC[0]);
    } else if (width > 900) {
        body.classList.remove(backGC[1], backGC[0]);
        body.classList.add(backGC[2]);
    } else {
        body.classList.remove(backGC[0], backGC[2]);
        body.classList.add(backGC[1]);
    }
    
}

window.addEventListener("resize", changeColor);
