let pointX = 0;
let pointO = 0;
let Buttons = document.querySelectorAll(".btn");
let Msg = document.querySelector(".msg");
let reSet = document.querySelector('.reset');
let newGame = document.querySelector(".newGame");
let turn0 = true;
let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    
Buttons.forEach((Btn) => {
    Btn.addEventListener("click",() => {
        if(Btn.disabled) return
        if (turn0) {
        Btn.innerText = "X"
        turn0 = false;
        Btn.disabled = true;
    }
    else {
        Btn.innerText = "O"
        turn0 = true;
        Btn.disabled = true;
    }
    checkWin();
        });
});
const disBtn = () => {
    for (let box of Buttons) {
    box.disabled = true;
}
}
const enableBtn = () => {
    for (let box of Buttons) {
    box.disabled = false;
    box.innerText = ""
}
}

const rstGame = (box) => {
    turn0 = true;
    Msg.style.visibility = "hidden";
    newGame.style.visibility = "hidden";
    enableBtn();
    reSet.style.visibility = "visible";
}
const showWinner = (winner) => {
    Msg.innerText = `Congratulations, Winner is ${winner}!`;
    Msg.style.visibility = "visible";
    newGame.style.visibility = "visible";
    reSet.style.visibility = "hidden";
    disBtn();
    updatePoints(winner);
}
const checkWin = () => {
    for (let winPattern of patterns) {
        let posVal1 = Buttons[winPattern[0]].innerText;
        let posVal2 = Buttons[winPattern[1]].innerText;
        let posVal3 = Buttons[winPattern[2]].innerText;
        if (posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3) {
            showWinner(posVal1);
            return;
        }
    }
    checkDraw();
};
const updatePoints = (winner) => {
    if (winner === "X") {
        pointX++;
    } else if (winner === "O") {
        pointO++;
    }
    displayPoints();
};

const displayPoints = () => {
    document.querySelector('.pointX').innerText = `Player X: ${pointX}`;
    document.querySelector('.pointO').innerText = `Player O: ${pointO}`;
};
const checkDraw = () => {
    let allFilled = true;
    Buttons.forEach((Btn) => {
        if (Btn.innerText === "") {
            allFilled = false;
        }
    });
    
    if (allFilled) {
        Msg.innerText = `Game was Draw!`;
        Msg.style.visibility = "visible";
        newGame.style.visibility = "visible";
        reSet.style.visibility = "hidden";
        disBtn();
    }
};