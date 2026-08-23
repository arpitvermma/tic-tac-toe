let button = document.querySelectorAll(".btn");
let msg_container = document.querySelector(".msg");
let msg_text = document.querySelector("#msg");
let newbtn = document.querySelector("#newgame");
let reset_btn = document.querySelector(".resetbtn");
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let turn0 = true;
let count = 0;
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText = "O";
            btn.style.color = "red"
            turn0 = false;
        }
        else {
            btn.innerText = "X";
            btn.style.color = "blue";
            turn0 = true;
        }
        btn.disabled = true;
        count++;
        reset_btn.classList.remove("hide");

        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
            gamedraw();
        }



    });
});


const gamedraw = () => {
    msg_text.innerText = "Game was a draw";
    msg_container.classList.remove("hide");
    reset_btn.classList.add("hide");
}

let disableboxes = () => {
    for (let btn of button) {
        btn.disabled = true;
    }

}

let enableboxes = () => {
    for (let btn of button) {
        btn.disabled = false;
        btn.innerText = "";
    }


}
let showWinner = (winner) => {
    msg_text.innerText = `Congratulation  winner is ${winner}`;
    msg_container.classList.remove("hide");
    reset_btn.classList.add("hide");
    disableboxes();


}
let checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = button[pattern[0]].innerText;
        let pos2val = button[pattern[1]].innerText;
        let pos3val = button[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
}

const reset_game = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msg_container.classList.add("hide");
    reset_btn.classList.add("hide");
}
newbtn.addEventListener("click", reset_game);
reset_btn.addEventListener("click", reset_game);