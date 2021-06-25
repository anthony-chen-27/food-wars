class Obstacle {
    constructor(ctx, x, y, rad, img, vx) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.distr = x + 40
        this.distl = x - 40
        this.vx = vx
        this.rad = rad
        this.hit = 0
        this.img = img
    }

    draw() {
        this.ctx.drawImage(this.img[this.hit % 3], this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2)
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
            this.hit += 1
            return 5 * (this.hit % 3)
        }
        return 0
    }
}

// Point d = closestpointonline(circle1.x, circle1.y, 
// circle1.x + circle1.vx, circle1.y + circle1.vy, circle2.x, circle2.y); 
export default Obstacle