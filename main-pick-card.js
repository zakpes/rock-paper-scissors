
// Rock, Paper, Scissors
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const playerResult = document.getElementsByClassName("player-result");

const playerContainer = document.querySelector(".player-2");
const playerSquare = document.getElementById("player-square");

const resultScore = document.querySelector(".result-announce");

// const playerHand = document.getElementsByClassName("img-rps");

const allPlayers = Array.prototype.slice.apply(document.getElementsByClassName("img-rps"));
const playerHandCpu = Array.prototype.slice.apply(document.getElementsByClassName("player-cpu"));
const playerHand = Array.prototype.slice.apply(document.getElementsByClassName("player-card"));

const btnPlayAgain = document.querySelector(".btn-play-again");

const CARD_ROCK = document.getElementById("card-rock");
const CARD_SCISSORS = document.getElementById("card-scissors");

function changeBackgroundColor(player) {
    player.style.backgroundColor = 'purple';
};

// function clickSquare() {
//     this.on(click, function () {
//         changeBackgroundColor();
//     })
// }
//
// clickSquare();

// function throwHand() {
//
//     this.innerHTML = toString(randomHand);
// };

let player1Random;
let player2Random;
let player2ResultHand;

// playerHand.forEach(function (el) {
//     el.addEventListener('click', startTheGame(event));
// });

function pickHand(event) {

    event.preventDefault();

    if (playerHand.some(function (el) {
        return el.classList.contains("winner-hand");
    }) || btnPlayAgain.classList.contains("game-start")) {
        return;
    } else {

        if (event.target.classList.contains("player-card")) {
            event.target.classList.add("active-card")
        }

        player1Random = Math.floor((Math.random() - 0.01) * 3);
        // player2Random = Math.floor((Math.random() - 0.01) * 3);
        player2Random = playerHand.forEach(el => {
            return el.classList.contains("active-card");
        });

        // Turn chosen hand into an integer for comparison with opponent
        player2ResultHand = () => {
            if (event.target.classList.contains("img-rock")) {
                player2.querySelector('.img-rock').classList.add("winner-hand");
                return 0;
            } else if (event.target.classList.contains("img-paper")) {
                player2.querySelector('.img-paper').classList.add("winner-hand");
                return 1;
            } else if (event.target.classList.contains("img-scissors")) {
                player2.querySelector('.img-scissors').classList.add("winner-hand");
                return 2;
            }
        };

        console.log("Player2ResultHand is " + player2ResultHand());

        // player1.innerHTML = player1Random;
        // player2.innerHTML = player2Random;

        // for (var i = 0; i < playerResult.length; i++) {
        //
        //     let randomHand = Math.floor(Math.random() * 3);
        //
        //     console.log(randomHand);
        //
        //     playerResult[i].innerHTML = randomHand;
        // }


        // Stop CPU animation when you pick a card
        playerHandCpu.some(function (el) {
            el.classList.remove("img-rock-animation", "img-paper-animation");
        });

        // Random CPU card select
        if (player1Random == 0) {
            player1.querySelector('.img-rock').classList.add("winner-hand");
        } else if (player1Random == 1) {
            player1.querySelector('.img-paper').classList.add("winner-hand");
        } else if (player1Random == 2) {
            player1.querySelector('.img-scissors').classList.add("winner-hand");
        }

        // if (player2Random == 0) {
        //     player2.querySelector('.img-rock').classList.add("winner-hand");
        // } else if (player2Random == 1) {
        //     player2.querySelector('.img-paper').classList.add("winner-hand");
        // } else if (player2Random == 2) {
        //     player2.querySelector('.img-scissors').classList.add("winner-hand");
        // }

        player2ResultHand();

        resultAnnounce();

        console.log(resultAnnounce());

        scoreCount();

        btnPlayAgain.textContent = "Play again";
    }
};

// Pick a hand function
// btnPickHand.addEventListener('click', pickHand);
document.querySelectorAll(".player-card").forEach(function (el) {
    el.addEventListener('click', pickHand);
});

function resultAnnounce() {

    if (player1Random == player2ResultHand()) {
       resultScore.innerHTML = "Draw!"
    } else if (player1Random == 0) {
        if (player2ResultHand() == 1) {
            resultScore.innerHTML = "You win!"
        } else if (player2ResultHand() == 2) {
            resultScore.innerHTML = "You lose!"
        }
    } else if (player1Random == 1) {
        if (player2ResultHand() == 0) {
            resultScore.textContent = "You lose!"
        } else if (player2ResultHand() == 2) {
            resultScore.textContent = "You win!"
        }
    } else if (player1Random == 2) {
        if (player2ResultHand() == 0) {
            resultScore.textContent = "You win!"
        } else if (player2ResultHand() == 1) {
            resultScore.textContent = "You lose!"
        }
    }

    return resultScore.textContent;
}

// Start the game function
btnPlayAgain.addEventListener("click", function (event) {

    event.target.classList.remove("game-start");

    for (var i = 0; i < allPlayers.length; i++) {
        allPlayers[i].classList.remove("winner-hand", "active-card");
    }
    document.querySelectorAll(".img-rock-cpu").forEach(function (el) {
        el.classList.add("img-rock-animation");
    });
    document.querySelectorAll(".img-paper-cpu").forEach(function (el) {
        el.classList.add("img-paper-animation");
    });
    CARD_ROCK.classList.add("img-rock-spread");
    CARD_SCISSORS.classList.add("img-scissors-spread");
});

// Count the score
let player1Score = 0;
let player2Score = 0;

function scoreCount() {

    if (resultAnnounce() == "You lose!") {
        player1Score += 1;
    } else if (resultAnnounce() == "You win!") {
        player2Score += 1;
    }

    document.querySelector(".player-1-score").textContent = player1Score;
    document.querySelector(".player-2-score").textContent = player2Score;
}

// Spread the cards on hover
// document.addEventListener('mouseover', (event) => {
//
//     if (event.target === CARD_SCISSORS) {
//         CARD_ROCK.classList.add("img-rock-spread");
//         CARD_SCISSORS.classList.add("img-scissors-spread");
//     }
//
// }, false)
