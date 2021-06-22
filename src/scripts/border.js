class Border {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y = 500
        this.height = 10
        this.width = ctx.canvas.width
    }

    checkCollision(ball) {
        if (ball.y + ball.rad >= this.y) {
            ball.updateVec(ball.vx, -ball.vy * 0.4)
            ball.updatePos(ball.x, this.y - ball.rad)
        }
    }

    draw() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

export default Border