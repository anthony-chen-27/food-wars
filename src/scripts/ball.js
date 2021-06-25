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

    outofBounds() {
        if (this.x < this.rad) {
            this.vx = Math.abs(this.vx) 
            this.x = this.rad
        }
        if (this.x > this.ctx.canvas.width - this.rad) {
            this.vx = -Math.abs(this.vx)
            this.x = this.ctx.canvas.width - this.rad
        } 
        if (this.y < 0) {
            this.vy = Math.abs(this.vy) 
            this.y = this.rad
        } 
        // Out of bounds on bottom
        if (this.y > this.ctx.canvas.height - this.rad) {
            return true
        }
        if (Math.abs(this.vy) < 2) {
            this.vy *= 2
        }
        if (Math.abs(this.vx) < 2) {
            this.vx *= 2
        }
        return false

    }

    updateVec(vx, vy) {
        this.vx = vx
        this.vy = vy
    }

    updatePos(x, y) {
        this.x = x
        this.y = y
    }

    update() {
        this.x += this.vx 
        this.y += this.vy
    }
}

export default Ball