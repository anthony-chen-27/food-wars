class TopBorder {
    constructor(ctx) {
        this.ctx = ctx
        this.x = ctx.canvas.width / 2
        this.y = 250
        this.radX = 300
        this.radY = 200
    }

    checkCollision(ball) {
        if (ball.y > this.y) {
            return 
        } else {
            const distX = Math.abs(ball.x - this.x) 
            const distY = Math.abs(ball.y - this.y)
            const dist = (distX ** 2) / (this.radX) ** 2 + (distY ** 2) / (this.radY) ** 2
            if (dist >= 0.98 && dist <= 1.02) {
                if (ball.x < this.x) {
                    ball.updatePos(ball.x, ball.y + ball.rad / 2)
                    ball.updateVec(ball.vx + 1, ball.vy)  
                } else {
                    ball.updatePos(ball.x, ball.y + ball.rad / 2)
                    ball.updateVec(ball.vx - 1, ball.vy * 0.9)
                }
            }
        }
    }

    draw() {
        const ctx = this.ctx
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, this.y)
        ctx.ellipse(this.x, this.y, this.radX, this.radY, 0, Math.PI, 0);
        ctx.lineTo(600, 0)
        ctx.closePath()
        ctx.fillStyle = 'black'
        ctx.fill()
    }

}

export default TopBorder