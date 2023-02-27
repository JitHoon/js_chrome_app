const numRange = document.querySelector("#range");
const chooseNum = document.querySelector("#choose-num");
const bnt = document.querySelector("button");
const comment = document.querySelector(".hidden");
const result = document.querySelector(".result");

const HIDDEN = "hidden";

function playGame() {
  const range = numRange.value;
  const userNum = chooseNum.value;
  const aiNum = getRandomIntInclusive(0, range);

  if (Number(userNum) === aiNum) {
    showResult(userNum, aiNum, `You won!`);
  } else {
    showResult(userNum, aiNum, `You lost!`);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function showResult(uN, aN, r) {
  comment.classList.remove(HIDDEN);
  comment.innerText = `You chose: ${uN},the machine chose: ${aN}.`;
  result.classList.remove(HIDDEN);
  result.innerText = r;
}

bnt.addEventListener("click", playGame);
