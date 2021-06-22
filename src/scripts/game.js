import Ball from './ball'
import Border from './border'
import TopBorder from './top_border';

class Game {
  constructor(props) {
    this.launched = false
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.lastTime = 0
    this.ctx = this.canvas.getContext("2d");
    this.TopBorder = new TopBorder(this.ctx)
    this.TopBorder.draw()
    this.ball = new Ball(this.ctx, 580, 890, 0, 0)
    // this.border = new Border(this.ctx)
    this.animate = this.animate.bind(this)
    window.requestAnimationFrame(this.animate)
  }


  animate(time) {
    const timeDelta = time - this.lastTime
    this.clearCanvas()
    if (this.launched) {
      this.ball.update(timeDelta)
      this.TopBorder.checkCollision(this.ball)
    }
    this.ball.draw()
    this.TopBorder.draw()
    
    window.requestAnimationFrame(this.animate)
  }

  createCanvas() {
    document.body.append(this.canvas)
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  launch() {
    console.log('lmao')
    if (this.launched) {
      return
    } else {
      this.ball.updateVec(0, -10)
      this.launched = true
    }
  }
}

export default Game;
