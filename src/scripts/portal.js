class Portal {
    //Type == 0, top portal, type == 1, bottom portal
    constructor(ctx, x, y, rad, type, img) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.rad = rad
        this.type = type
        this.img = img
        this.used = 0
        this.usePortal = this.usePortal.bind(this)
    }

    checkCollision(ball) {
        const x = this.x + this.rad / 2
        const y = this.y + this.rad / 2
        const rad = this.rad / 2
        if ((x - ball.x) ** 2 + (y - ball.y) ** 2 <= (rad + ball.rad) ** 2 ) {
            if (this.used == 1) {
                return 0
            }
            if (this.type == 0) {
                ball.updatePos(560, 165)
                ball.updateVec(Math.random() * 6 - 3, 3.5)
            } else {
                ball.updatePos(110, 699)
                ball.updateVec(Math.random() * 6 - 3, -3.5)
            }
            this.usePortal()
            return 2
        }
        return 0
    }

    usePortal() {
        this.used = 1
        setTimeout(() => {
            this.used = 0
        }, 10000);
    }

    update() {

    }

    draw() {
        this.ctx.drawImage(this.img[this.used], this.x, this.y, this.rad, this.rad)
    }

}

export default Portal