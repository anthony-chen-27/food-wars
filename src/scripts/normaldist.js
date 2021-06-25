import Obstacle from './obstacle'

class normalDist {
    constructor(ctx, x, y, img) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.objects = []
        this.img = img
        this.init()
    }

    init() {
        //Top
        const s1 = (Math.random() * 4 + 5) / 10
        const s2 = (Math.random() * 4 + 5) / 10
        const s3 = (Math.random() * 4 + 5) / 10
        this.objects.push(new Obstacle(this.ctx, this.x, this.y - 75, 20, this.img, s1))
        //Mid
        this.objects.push(new Obstacle(this.ctx, this.x - 90, this.y, 20, this.img, s2))
        this.objects.push(new Obstacle(this.ctx, this.x, this.y, 20, this.img, s2))
        this.objects.push(new Obstacle(this.ctx, this.x + 90, this.y, 20, this.img, s2))
        //Bottom
        this.objects.push(new Obstacle(this.ctx, this.x - 180, this.y + 75, 20, this.img, s3))
        this.objects.push(new Obstacle(this.ctx, this.x - 90, this.y + 75, 20, this.img, s3))
        this.objects.push(new Obstacle(this.ctx, this.x , this.y + 75, 20, this.img, s3))
        this.objects.push(new Obstacle(this.ctx, this.x + 90, this.y + 75, 20, this.img, s3))
        this.objects.push(new Obstacle(this.ctx, this.x + 180, this.y + 75, 20, this.img, s3))
    }

    draw() {
        this.objects.forEach((obj) => obj.draw())
    }

    update() {
        this.objects.forEach((obj) => obj.update())
    }

    checkCollision(ball) {
        let score = 0
        this.objects.forEach((obj) => score += obj.checkCollision(ball))
        return score
    }
}

export default normalDist