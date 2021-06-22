class Ball {
    constructor(ctx, x, y, vx, vy) {
        this.ctx = ctx
        this.rad = 5
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true)
        this.ctx.closePath()
        this.ctx.fillStyle = 'black'
        this.ctx.fill()
    }

    updateVec(vx, vy) {
        this.vx = vx
        this.vy = vy
    }

    updatePos(x, y) {
        this.x = x
        this.y = y
    }

    update(timeDelta) {
        this.vy += 0.05

        this.x += this.vx 
        this.y += this.vy
    }
}

export default Ball