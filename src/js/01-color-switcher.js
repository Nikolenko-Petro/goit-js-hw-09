function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

stopBtnEl.disabled = true;
let timerId = null;

function onStartBtnClick() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  stopBtnEl.disabled = true;
  startBtnEl.disabled = false;
  clearInterval(timerId);
}

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);
