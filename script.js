const gameArea = document.querySelector(".game-area");
const button = document.querySelector("button");
const countGuess = document.querySelector(".countGuess");
const rules = document.querySelector(".rules");
const card = document.querySelector(".card");
const restart = document.querySelector(".restart");
let gameStatus = false;
let score = 0;


button.addEventListener("click", startGame);

function startGame() {
    if (!gameStatus) {
        createGame();
    } else {
        gamePlay();
    }
}

function createGame() {
    gameStatus = true;
    inputMaker();
    score = 0;
    innerHtml(button, "Check");
}

function gamePlay() {
    score++;
    let winCondition = 0;
    innerHtml(countGuess, score);
    const numbers = document.querySelectorAll(".number");
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].value == numbers[i].correct) {
            addClass(numbers[i], "bg-success");
            addClass(numbers[i], "text-white");
            winCondition++;
        } else {
            let color = (numbers[i].value < numbers[i].correct) ? "orange" : "red";
            numbers[i].style.background = color;
        }
        if (winCondition == numbers.length) {
            addClass(button, "d-none");
            addClass(restart, "d-none");
            addClass(rules, "bg-success");
            addClass(rules, "text-white");
            innerHtml(rules, "You win!");
            card.style.height = "150px";
            setTimeout(reload, 3000);
        }
        if (score == 30) {
            addClass(button, "d-none");
            addClass(restart, "d-none");
            addClass(rules, "bg-danger");
            addClass(rules, "text-white");
            innerHtml(rules, "You lose!");
            card.style.height = "150px";
            setTimeout(reload, 2000);
        }
    }
}

function inputMaker() {
    for (let x = 0; x < 5; x++) {
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.max = 9;
        input.min = 0;
        input.size = 1;
        addClass(input, "number");
        addClass(input, "form-control");
        input.correct = Math.floor(Math.random() * 10);
        input.value = 0;
        input.order = x;
        gameArea.appendChild(input);
    }
}

function reload() {
    location.reload();
}

function addClass(element, value) {
    element.classList.add(value);
}

function innerHtml(element, text) {
    element.innerHTML = text;
}