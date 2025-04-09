import Player from "./classes/player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Player(canvas.width, canvas.height);

// Motion variables
const keys = {
    left: false,
    right: false,
};

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    if (keys.left && player.position.x >= 0) { // Check if player is not at the left edge
        player.moveLeft(); // Move left
    }
    if (keys.right && player.position.x <= canvas.width - player.width) { // Check if player is not at the right edge
        player.moveRight(); // Move right
    }

    player.draw(ctx); // Draw the player

    requestAnimationFrame(gameLoop); // Call the game loop again
};

gameLoop(); // Start the game loop

// Walk and stop
addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "a") {
        keys.left = true; // Move left
    }
    if (key === "d") {
        keys.right = true; // Move right
    }
});

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    if (key === "a") {
        keys.left = false; // Stop moving left
    }
    if (key === "d") {
        keys.right = false; // Stop moving right
    }
});