const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var score = 0;

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout( function() {
        dino.classList.remove("jump")   
    }, 400);
}
let isAlive = setInterval(function () {
	score++;
	let scoreElement = document.getElementById("score");
	scoreElement.innerHTML = score;
	
    let dinoTop = parseInt(
		window.getComputedStyle(dino).getPropertyValue("top")
	);
    let cactusLeft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue("left")
	);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`Game Over\nYour score: ${score}`);
        score = 0;
    }
}, 10);
