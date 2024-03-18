const display = document.querySelector(".display");
const startBtn = document.querySelector(".btn1");
const resetBtn = document.querySelector(".btn2");
const area = document.querySelector(".weigh_area");

let status_weight = 0; // 0 means the weighing scale is off, 1 means it is on

function weigh(weight) {
  display.innerHTML = `${weight}`;
}

startBtn.addEventListener("click", () => {
  if (status_weight) {
    display.classList.add("display_off");
    display.innerHTML = "0.000";
    status_weight = 0;
  } else {
    display.classList.remove("display_off");
    status_weight = 1;
  }
});

resetBtn.addEventListener("click", () => {
  display.innerHTML = "0.000";
});

area.addEventListener("click", () => {
  weigh(0.345);
});
