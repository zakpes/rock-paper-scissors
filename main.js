
// Rock, Paper, Scissors
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const playerResult = document.getElementsByClassName("player-result");

const playerContainer = document.querySelector(".player-2");
const playerSquare = document.getElementById("player-square");

const resultScore = document.querySelector(".result-announce");

// const playerHand = document.getElementsByClassName("img-rps");

const playerHand = Array.prototype.slice.apply(document.getElementsByClassName("img-rps"));

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

// playerHand.forEach(function (el) {
//     el.addEventListener('click', startTheGame(event));
// });

function pickHand(event) {

    event.preventDefault();

    if (btnPlayAgain.classList.contains("game-start")
    ) {
        return;
    } else {
        player1Random = Math.floor((Math.random() - 0.01) * 3);
        player2Random = Math.floor((Math.random() - 0.01) * 3);

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

        console.log(player1Random);

        playerHand.some(function (el) {
            el.classList.remove("img-rock-animation", "img-paper-animation");
        });

        if (player1Random == 0) {
            player1.querySelector('.img-rock').classList.add("winner-hand");
        } else if (player1Random == 1) {
            player1.querySelector('.img-paper').classList.add("winner-hand");
        } else if (player1Random == 2) {
            player1.querySelector('.img-scissors').classList.add("winner-hand");
        }

        if (player2Random == 0) {
            player2.querySelector('.img-rock').classList.add("winner-hand");
        } else if (player2Random == 1) {
            player2.querySelector('.img-paper').classList.add("winner-hand");
        } else if (player2Random == 2) {
            player2.querySelector('.img-scissors').classList.add("winner-hand");
        }

        resultAnnounce();
    }
};

// Pick a hand function
// btnPickHand.addEventListener('click', pickHand);

function resultAnnounce() {

    if (player1Random == player2Random) {
       resultScore.innerHTML = "Draw!"
    } else if (player1Random == 0) {
        if (player2Random == 1) {
            resultScore.innerHTML = "Player 2 Wins!"
        } else if (player2Random == 2) {
            resultScore.innerHTML = "Player 1 Wins!"
        }
    } else if (player1Random == 1) {
        if (player2Random == 0) {
            resultScore.textContent = "Player 1 wins!"
        } else if (player2Random == 2) {
            resultScore.textContent = "Player 2 wins!"
        }
    } else if (player1Random == 2) {
        if (player2Random == 0) {
            resultScore.textContent = "Player 2 wins!"
        } else if (player2Random == 1) {
            resultScore.textContent = "Player 1 wins!"
        }
    }
}

// Start the game function
btnPlayAgain.addEventListener("click", function (event) {
    // playerHand.classList.remove("winner-hand");

    // playerHand.forEach(function (img) {
    //     img.classList.remove("winner-hand");
    // })
    event.target.classList.remove("game-start");

    for (var i = 0; i < playerHand.length; i++) {
        playerHand[i].classList.remove("winner-hand");
    }
    Array.from(document.querySelectorAll(".img-rock")).forEach(function (el) {
        el.classList.add("img-rock-animation");
    });
    Array.from(document.querySelectorAll(".img-paper")).forEach(function (el) {
        el.classList.add("img-paper-animation");
    });
});

// Spread the cards function
document.addEventListener('mouseover', (event) => {

    if (event.target === CARD_SCISSORS) {
        CARD_ROCK.classList.add("img-rock-spread");
        CARD_SCISSORS.classList.add("img-scissors-spread");
    }

}, false)

// changeBackgroundColor(playerContainer);
