class Platform {
    constructor(ctx, x, y, height, width, img) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.img = img
    }

    checkCollision(ball) {
        if (ball.y + ball.rad >= this.y && ball.y - ball.rad <= this.y + this.height && ball.x + ball.rad >= this.x && ball.x - ball.rad< this.x + this.width) {
            ball.updateVec((ball.vx ? -1 * ball.vx : -3), -1 * ball.vy)
            return 5
        }
        return 0
    }

    update() {

    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}

export default Platform