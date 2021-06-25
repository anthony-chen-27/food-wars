class Bar {
    constructor(ctx, x, y, l, angle, color='black') {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.l = l
        this.angle = angle
        this.color = color
    }

    draw() {
        const ctx = this.ctx
        const angle = this.angle * Math.PI / 180;


        var x1 = this.x + this.l * Math.cos(angle),
            y1 = this.y + this.l * Math.sin(angle);
    
        
        ctx.beginPath()
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = this.color
        ctx.lineWidth = 10
        ctx.stroke()
    }

    checkCollision(ball) {
        const angle = this.angle * Math.PI / 180
        var x1 = this.x + this.l * Math.cos(angle),
            y1 = this.y + this.l * Math.sin(angle)
        if (ball.x < this.x || ball.x > this.x + x1) {
            return
        }
        const slope = Math.tan(angle)
        const b = this.y - slope * this.x

        var pos = ball.y - slope * ball.x

        if (b - pos < 10) {
            ball.updatePos(ball.x, slope * ball.x + b - ball.rad - 5)
            ball.updateVec(0.85 * ball.vx + slope, ball.vy)
        }

    }
}

export default Bar