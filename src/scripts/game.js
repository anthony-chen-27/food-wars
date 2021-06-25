import Ball from './ball'
import Control from './control'
import Normaldist from './normaldist'
import Portal from './portal'
import Platform from './platform'
import Obstacle from './obstacle'
import King from './king'

class Game {
  constructor(props) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.mouseX = 50;
    this.ctx = this.canvas.getContext("2d");
    this.animate = this.animate.bind(this)
    this.canvas.addEventListener("mousemove", (e) => this.setMousePosition(e), false);
    
    this.loadImages([
      ['subway', 'https://i.imgur.com/sM2VcXA.png'],
      ['portal', 'https://lh3.googleusercontent.com/proxy/bTXLqxbMcvd9mdyyIBWFOPkUtW6zt2AEKF_LI5YwHYZNFxh1z1pqoqxx2f-zVSQhwknxUPdGG-wbFJAfLg5x737zBMO8fJD9RK_7yetLqq2lIzoeyw'],
      ['portal1', 'https://lh3.googleusercontent.com/proxy/tBnt4T0eQj2ktAZpqeQ1sP5t5Cj518DQnbplslTQkHjXLCnKZ1gRrVGtdmruYuEGTk7fWQxrWTkhOQqlh1gXVogANO7S2ACQeNkWoNMeM6TaZpZGln-KTLBkYn_qejY3j4rBew'],
      ['mcd', 'http://assets.stickpng.com/images/5882482de81acb96424ffaac.png'],
      ['kfc', 'https://pngimg.com/uploads/kfc_food/kfc_food_PNG30.png'],
      ['pizza', 'https://lh3.googleusercontent.com/proxy/vuJhaOGdJ11fQZvQy4AIuGtc9Hws5PGS_pkwd4aYPkcyaSN67U0voDp0nZ1YVrhueUZ1VAjGb82LhmCj1N_MtsDpL3hYR4F6kKeXZEzycXQbEzJVVnbeEb6HnK5SIubSozwWuk9fIWBWH98rdGuX4Q'],
      ['chipotle', 'https://www.vippng.com/png/full/267-2673161_burrito-bowl-burrito-bowl-sisig.png'],
      ['king', 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png']
    ], () => window.requestAnimationFrame(this.animate))
    this.init() 
  }

  setMousePosition(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left
    this.x = parseInt(x)
    this.control.changePos(this.x)
    if (!this.launched) {
      this.ball.updatePos(this.x, this.ball.y)
    }
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
    document.getElementById('life').innerHTML = this.life
    this.ball.draw()
    this.control.draw()
    this.obstacles.forEach((obj) => obj.draw())
    
    window.requestAnimationFrame(this.animate)
  }

  resetGame() {
    this.createObjects()
    this.launched = false
    this.life -= 1
    if (this.life < 0) {
      this.init()
    }
  }

  createObjects() {
    this.ball = new Ball(this.ctx, 300, 800, 0, 0)
    this.control = new Control(this.ctx, this.images['subway'])
    this.obstacles = [
      new Normaldist(this.ctx, 300, 300, [this.images['mcd'], this.images['kfc'], this.images['pizza']]), 
      new Portal(this.ctx, 50, 700, 60, 0, [this.images['portal'], this.images['portal1']]), 
      new Portal(this.ctx, 500, 100, 60, 1, [this.images['portal'], this.images['portal1']]),
      new Platform(this.ctx, 0, 200, 50, 120, this.images['chipotle']),
      new Platform(this.ctx, 250, 100, 50, 120, this.images['chipotle']),
      new King(this.ctx, 550, 60, 20, this.images['king'])
    ]
  }

  init() {
    this.createObjects()
    this.score = 0
    this.launched = false
    this.life = 3
  }

  createCanvas() {
    document.getElementById('game').append(this.canvas)
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  launch() {
    if (this.launched) {
      return
    } else {
      this.ball.updateVec(0, -4.5)
      this.launched = true
    }
  }
}

export default Game;
