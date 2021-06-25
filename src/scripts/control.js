class Border {
    constructor(ctx, img) {
        this.ctx = ctx
        this.x = 250
        this.y = 850
        this.height = 20
        this.width = 100
        this.img = img
    }

    checkCollision(ball) {
        if (ball.y + ball.rad >= this.y && ball.y - ball.rad <= this.y + this.height && ball.x > this.x - this.width / 2 && ball.x < this.x + this.width / 2) {
            if (ball.x < this.x - this.width / 4) {
                ball.updateVec(-1.1 * Math.abs(ball.vx), -1 * ball.vy)
            } else if (ball.x > this.x + this.width / 4) {
                ball.updateVec(1.1 * Math.abs(ball.vx), -1 * ball.vy)
            } else {
                ball.updateVec(ball.vx, -1 * ball.vy)
            }
            ball.updatePos(ball.x, this.y - ball.rad)
        }
    }

    changePos(x) {
        this.x = x
    }

    draw() {
        this.ctx.drawImage(this.img, this.x - this.width / 2, this.y, this.width, this.height)
    }

}

export default Border