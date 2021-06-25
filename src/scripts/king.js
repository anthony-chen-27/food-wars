class King {
    constructor(ctx, x, y, rad, img) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.distr = x + 20
        this.distl = x - 20
        this.vx = 0.5
        this.rad = rad
        this.img = img
    }

    draw() {
        this.ctx.drawImage(this.img, this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2)
    }

    update() {
        if (this.x < this.distl) {
            this.vx = -1 * this.vx
            this.x += this.vx
        } else if (this.x < this.distr) {
            this.x += this.vx
        } else {
            this.vx = -1 * this.vx
            this.x += this.vx
        }
    }
    checkCollision(ball) {
        if ((this.x - ball.x) ** 2 + (this.y - ball.y) ** 2 <= (this.rad + ball.rad) ** 2 ) {
            let vCollision = {x: ball.x - this.x, y: ball.y - this.y}
            let distance = Math.sqrt((ball.x-this.x) ** 2 + (ball.y-this.y) ** 2)
            let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance} 
            ball.updateVec(6 * vCollisionNorm.x, 6 * (vCollisionNorm.y ? vCollisionNorm.y : 0.3))
            return 100
        }
        return 0
    }
}

// Point d = closestpointonline(circle1.x, circle1.y, 
// circle1.x + circle1.vx, circle1.y + circle1.vy, circle2.x, circle2.y); 
export default King