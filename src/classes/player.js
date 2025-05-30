class Player {
    constructor(canvasWidth, canvasHeight) {
        // Player properties
        this.width = 100;
        this.height = 100;
        this.speed = 5; // Speed of the player
        // Variables to store the player's position
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.height - 30, // Adjusted to position the player near the bottom
        };
    }
    // Method to draw the player on the canvas
    draw(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    moveLeft() {
        this.position.x -= this.speed; // Move left 
    }
    
        moveRight() {
        this.position.x += this.speed; // Move right
    }

}










// Export to use in other files
export default Player;

