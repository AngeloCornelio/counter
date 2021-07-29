let count = 0;
const display = document.getElementById("num");
const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const reset = document.getElementById("reset");

function changeNumColor() {
  if(count > 0) {
    display.className = "pos";
  } else if(count < 0) {
    display.className = "neg";
  } else {
    display.className = "";
  }
}

inc.addEventListener('click', () => {
  count++;
  display.innerText = count;
  changeNumColor();
});

dec.addEventListener('click', () => {
  count--;
  display.innerText = count;
  changeNumColor();
});

reset.addEventListener('click', () => {
  count = 0;
  display.innerText = count;
  changeNumColor();
});
