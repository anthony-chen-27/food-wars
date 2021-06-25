import Ball from './ball'
import Control from './control'
import Normaldist from './normaldist'

class Game {
  constructor(props) {
    this.launched = false
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.mouseX = 50;
    this.score = 0
    this.ctx = this.canvas.getContext("2d");
    this.animate = this.animate.bind(this)
    this.canvas.addEventListener("mousemove", (e) => this.setMousePosition(e), false);
    
    this.loadImages([['subway', 'https://img.favpng.com/8/24/20/submarine-sandwich-subway-5-footlong-promotion-restaurant-png-favpng-r8PKFVtUxz2uT110KJVCVfE6C.jpg']], () => window.requestAnimationFrame(this.animate))
    this.init()
  }

  setMousePosition(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left
    this.control.changePos(parseInt(x))
  }

  loadImages(arr, callback) {
    this.images = {};
    var loadedImageCount = 0;

    // Make sure arr is actually an array and any other error checking
    for (var i = 0; i < arr.length; i++){
        var img = new Image();
        img.onload = imageLoaded;
        img.src = arr[i][1];
        this.images[arr[i][0]] = img
    }

    function imageLoaded(e) {
        loadedImageCount++;
        if (loadedImageCount >= arr.length) {
            callback();
        }
    }
}

  animate() {
    this.clearCanvas()
    if (this.launched) {
      this.ball.update()
      this.obstacles.forEach((obj) => obj.update())
      if (this.ball.outofBounds()) {
        this.resetGame()
        return window.requestAnimationFrame(this.animate)
      }
      this.control.checkCollision(this.ball)
      this.obstacles.forEach((obj) => this.score += obj.checkCollision(this.ball))
    }
    document.getElementById('score').innerHTML = this.score
    this.ball.draw()
    this.control.draw()
    this.obstacles.forEach((obj) => obj.draw())
    
    window.requestAnimationFrame(this.animate)
  }

  resetGame() {
    this.ball = new Ball(this.ctx, 300, 100, 0, 0)
    this.obstacles = [new Normaldist(this.ctx, 300, 300)]
    this.score = 0
    this.launched = false
  }

  init() {
    this.ball = new Ball(this.ctx, 300, 100, 0, 0)
    this.control = new Control(this.ctx, this.images['subway'])
    this.obstacles = [new Normaldist(this.ctx, 300, 300)]
  }

  createCanvas() {
    document.body.append(this.canvas)
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  launch() {
    if (this.launched) {
      return
    } else {
      this.ball.updateVec(0, 3)
      this.launched = true
    }
  }
}

export default Game;
