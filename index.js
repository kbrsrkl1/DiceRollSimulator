const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");


function rollDice(){
    const rollResult = Math.floor(Math.random() * 6)+ 1;
    console.log(rollResult);
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {diceEl.classList.remove("roll-animation");
        rollDice()
    }, 1000);
})

