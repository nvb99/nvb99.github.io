document.querySelector('#player').innerHTML = prompt('What is your name?');

const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const score = document.querySelector("#score");

// sound effects
const jumpSound = document.querySelector('#jumpSound');
const gameOverSound = document.querySelector('#gameOverSound');

let cr_score = 0;
const jump = () => {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        jumpSound.play();
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300)
    }
}

isAlive = setInterval(() => {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
        );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
        );

    if (cactusLeft <= 35 && cactusLeft > 0 && dinoTop >= 120) {
        gameOverSound.play();
        alert("Game Over! Your score: " + ((cr_score > 0) ? cr_score -1 : "0"));
        cr_score = 0;
    } else {
        score.innerHTML = cr_score++;
    }
}, 100);

document.addEventListener("keydown", function(event) {
    jump();
})

document.addEventListener("mousedown", function(event) {
    jump();
})