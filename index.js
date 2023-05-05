let saveEl = document.getElementById("previous-el");
let countEl = document.getElementById("count-el");
let count = 0;

function achoo() {
  count += 1;
  countEl.textContent = count;
}

function bless() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
