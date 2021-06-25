import Obstacle from './obstacle'

class normalDist {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.objects = []
        this.init()
    }

    init() {
        this.objects.push(new Obstacle(this.ctx, this.x, this.y - 75, 15))
        this.objects.push(new Obstacle(this.ctx, this.x - 90, this.y, 15))
        this.objects.push(new Obstacle(this.ctx, this.x, this.y, 15))
        this.objects.push(new Obstacle(this.ctx, this.x + 90, this.y, 15))
        this.objects.push(new Obstacle(this.ctx, this.x - 180, this.y + 75, 15))
        this.objects.push(new Obstacle(this.ctx, this.x - 90, this.y + 75, 15))
        this.objects.push(new Obstacle(this.ctx, this.x , this.y + 75, 15))
        this.objects.push(new Obstacle(this.ctx, this.x + 90, this.y + 75, 15))
        this.objects.push(new Obstacle(this.ctx, this.x + 180, this.y + 75, 15))
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