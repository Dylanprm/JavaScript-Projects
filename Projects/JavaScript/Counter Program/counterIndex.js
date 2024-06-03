// COUNTER PROGRAM

const countLabel = document.getElementById("countLabel");

let count = 0;

const decreaseBtn = document.
getElementById("decreaseBtn");

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}


const resetBtn = document.getElementById("resetBtn");

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

const increaseBtn = document.getElementById("increaseBtn");

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
