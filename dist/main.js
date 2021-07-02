/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ball = /*#__PURE__*/function () {
  function Ball(ctx, x, y, vx, vy) {
    _classCallCheck(this, Ball);

    this.ctx = ctx;
    this.rad = 5;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fillStyle = 'black';
      this.ctx.fill();
    }
  }, {
    key: "outofBounds",
    value: function outofBounds() {
      if (this.x < this.rad) {
        this.vx = Math.abs(this.vx);
        this.x = this.rad;
      }

      if (this.x > this.ctx.canvas.width - this.rad) {
        this.vx = -Math.abs(this.vx);
        this.x = this.ctx.canvas.width - this.rad;
      }

      if (this.y < 0) {
        this.vy = Math.abs(this.vy);
        this.y = this.rad;
      } // Out of bounds on bottom


      if (this.y > this.ctx.canvas.height - this.rad) {
        return true;
      }

      if (Math.abs(this.vy) < 2) {
        this.vy *= 2;
      }

      if (Math.abs(this.vx) < 2) {
        this.vx *= 2;
      }

      return false;
    }
  }, {
    key: "updateVec",
    value: function updateVec(vx, vy) {
      this.vx = vx;
      this.vy = vy;
    }
  }, {
    key: "updatePos",
    value: function updatePos(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }]);

  return Ball;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);

/***/ }),

/***/ "./src/scripts/control.js":
/*!********************************!*\
  !*** ./src/scripts/control.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Border = /*#__PURE__*/function () {
  function Border(ctx, img) {
    _classCallCheck(this, Border);

    this.ctx = ctx;
    this.x = 300;
    this.y = 850;
    this.height = 20;
    this.width = 100;
    this.img = img;
  }

  _createClass(Border, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (ball.y + ball.rad >= this.y && ball.y - ball.rad <= this.y + this.height && ball.x + ball.rad >= this.x - this.width / 2 && ball.x - ball.rad < this.x + this.width / 2) {
        if (ball.x < this.x) {
          ball.updateVec(-1.1 * Math.abs(ball.vx), -1 * ball.vy);
        } else {
          ball.updateVec(1.1 * Math.abs(ball.vx), -1 * ball.vy);
        }

        ball.updatePos(ball.x, this.y - ball.rad);
      }
    }
  }, {
    key: "changePos",
    value: function changePos(x) {
      this.x = x;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.img, this.x - this.width / 2, this.y, this.width, this.height);
    }
  }]);

  return Border;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Border);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ "./src/scripts/control.js");
/* harmony import */ var _normaldist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normaldist */ "./src/scripts/normaldist.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal */ "./src/scripts/portal.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform */ "./src/scripts/platform.js");
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./obstacle */ "./src/scripts/obstacle.js");
/* harmony import */ var _king__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./king */ "./src/scripts/king.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Game = /*#__PURE__*/function () {
  function Game(props) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.mouseX = 50;
    this.ctx = this.canvas.getContext("2d");
    this.animate = this.animate.bind(this);
    this.canvas.addEventListener("mousemove", function (e) {
      return _this.setMousePosition(e);
    }, false);
    this.loadImages([['subway', 'https://i.imgur.com/sM2VcXA.png'], ['portal', 'https://i.imgur.com/nLSPRwB.png'], ['portal1', 'https://i.imgur.com/0cwZhYo.png'], ['mcd', 'http://assets.stickpng.com/images/5882482de81acb96424ffaac.png'], ['kfc', 'https://pngimg.com/uploads/kfc_food/kfc_food_PNG30.png'], ['pizza', 'https://i.imgur.com/fDzRkSq.png'], ['chipotle', 'https://www.vippng.com/png/full/267-2673161_burrito-bowl-burrito-bowl-sisig.png'], ['king', 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png']], function () {
      return window.requestAnimationFrame(_this.animate);
    });
    this.init();
  }

  _createClass(Game, [{
    key: "setMousePosition",
    value: function setMousePosition(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      this.x = parseInt(x);
      this.control.changePos(this.x);

      if (!this.launched) {
        this.ball.updatePos(this.x, this.ball.y);
      }
    }
  }, {
    key: "loadImages",
    value: function loadImages(arr, callback) {
      this.images = {};
      var loadedImageCount = 0; // Make sure arr is actually an array and any other error checking

      for (var i = 0; i < arr.length; i++) {
        var img = new Image();
        img.onload = imageLoaded;
        img.src = arr[i][1];
        this.images[arr[i][0]] = img;
      }

      function imageLoaded(e) {
        loadedImageCount++;

        if (loadedImageCount >= arr.length) {
          callback();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      this.clearCanvas();

      if (this.launched) {
        this.ball.update();
        this.obstacles.forEach(function (obj) {
          return obj.update();
        });

        if (this.ball.outofBounds()) {
          this.resetGame();
          return window.requestAnimationFrame(this.animate);
        }

        this.control.checkCollision(this.ball);
        this.obstacles.forEach(function (obj) {
          return _this2.score += obj.checkCollision(_this2.ball);
        });
      }

      document.getElementById('score').innerHTML = this.score;
      document.getElementById('life').innerHTML = this.life;
      this.ball.draw();
      this.control.draw();
      this.obstacles.forEach(function (obj) {
        return obj.draw();
      });
      window.requestAnimationFrame(this.animate);
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      this.createObjects();
      this.launched = false;
      this.life -= 1;

      if (this.life < 0) {
        this.init();
      }
    }
  }, {
    key: "createObjects",
    value: function createObjects() {
      this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, 300, 800, 0, 0);
      this.control = new _control__WEBPACK_IMPORTED_MODULE_1__.default(this.ctx, this.images['subway']);
      this.obstacles = [new _normaldist__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, 300, 300, [this.images['mcd'], this.images['kfc'], this.images['pizza']]), new _portal__WEBPACK_IMPORTED_MODULE_3__.default(this.ctx, 50, 700, 60, 0, [this.images['portal'], this.images['portal1']]), new _portal__WEBPACK_IMPORTED_MODULE_3__.default(this.ctx, 500, 100, 60, 1, [this.images['portal'], this.images['portal1']]), new _platform__WEBPACK_IMPORTED_MODULE_4__.default(this.ctx, 0, 200, 50, 120, this.images['chipotle']), new _platform__WEBPACK_IMPORTED_MODULE_4__.default(this.ctx, 250, 100, 50, 120, this.images['chipotle']), new _king__WEBPACK_IMPORTED_MODULE_6__.default(this.ctx, 550, 60, 20, this.images['king'])];
    }
  }, {
    key: "init",
    value: function init() {
      this.createObjects();
      this.score = 0;
      this.launched = false;
      this.life = 3;
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      document.getElementById('game').append(this.canvas);
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "launch",
    value: function launch() {
      if (this.launched) {
        return;
      } else {
        this.ball.updateVec(0, -4.5);
        this.launched = true;
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/scripts/king.js":
/*!*****************************!*\
  !*** ./src/scripts/king.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var King = /*#__PURE__*/function () {
  function King(ctx, x, y, rad, img) {
    _classCallCheck(this, King);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.distr = x + 20;
    this.distl = x - 20;
    this.vx = 0.5;
    this.rad = rad;
    this.img = img;
  }

  _createClass(King, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.img, this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x < this.distl) {
        this.vx = -1 * this.vx;
        this.x += this.vx;
      } else if (this.x < this.distr) {
        this.x += this.vx;
      } else {
        this.vx = -1 * this.vx;
        this.x += this.vx;
      }
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2) <= Math.pow(this.rad + ball.rad, 2)) {
        var vCollision = {
          x: ball.x - this.x,
          y: ball.y - this.y
        };
        var distance = Math.sqrt(Math.pow(ball.x - this.x, 2) + Math.pow(ball.y - this.y, 2));
        var vCollisionNorm = {
          x: vCollision.x / distance,
          y: vCollision.y / distance
        };
        ball.updateVec(6 * vCollisionNorm.x, 6 * (vCollisionNorm.y ? vCollisionNorm.y : 0.3));
        return 100;
      }

      return 0;
    }
  }]);

  return King;
}(); // Point d = closestpointonline(circle1.x, circle1.y, 
// circle1.x + circle1.vx, circle1.y + circle1.vy, circle2.x, circle2.y); 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (King);

/***/ }),

/***/ "./src/scripts/normaldist.js":
/*!***********************************!*\
  !*** ./src/scripts/normaldist.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle */ "./src/scripts/obstacle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var normalDist = /*#__PURE__*/function () {
  function normalDist(ctx, x, y, img) {
    _classCallCheck(this, normalDist);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.objects = [];
    this.img = img;
    this.init();
  }

  _createClass(normalDist, [{
    key: "init",
    value: function init() {
      //Top
      var s1 = (Math.random() * 4 + 5) / 10;
      var s2 = (Math.random() * 4 + 5) / 10;
      var s3 = (Math.random() * 4 + 5) / 10;
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y - 75, 20, this.img, s1)); //Mid

      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 90, this.y, 20, this.img, s2));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y, 20, this.img, s2));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 90, this.y, 20, this.img, s2)); //Bottom

      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 180, this.y + 75, 20, this.img, s3));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 90, this.y + 75, 20, this.img, s3));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y + 75, 20, this.img, s3));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 90, this.y + 75, 20, this.img, s3));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 180, this.y + 75, 20, this.img, s3));
    }
  }, {
    key: "draw",
    value: function draw() {
      this.objects.forEach(function (obj) {
        return obj.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.objects.forEach(function (obj) {
        return obj.update();
      });
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(ball) {
      var score = 0;
      this.objects.forEach(function (obj) {
        return score += obj.checkCollision(ball);
      });
      return score;
    }
  }]);

  return normalDist;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalDist);

/***/ }),

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Obstacle = /*#__PURE__*/function () {
  function Obstacle(ctx, x, y, rad, img, vx) {
    _classCallCheck(this, Obstacle);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.distr = x + 40;
    this.distl = x - 40;
    this.vx = vx;
    this.rad = rad;
    this.hit = 0;
    this.img = img;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.img[this.hit % 3], this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x < this.distl) {
        this.vx = -1 * this.vx;
        this.x += this.vx;
      } else if (this.x < this.distr) {
        this.x += this.vx;
      } else {
        this.vx = -1 * this.vx;
        this.x += this.vx;
      }
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2) <= Math.pow(this.rad + ball.rad, 2)) {
        var vCollision = {
          x: ball.x - this.x,
          y: ball.y - this.y
        };
        var distance = Math.sqrt(Math.pow(ball.x - this.x, 2) + Math.pow(ball.y - this.y, 2));
        var vCollisionNorm = {
          x: vCollision.x / distance,
          y: vCollision.y / distance
        };
        ball.updateVec(6 * vCollisionNorm.x, 6 * (vCollisionNorm.y ? vCollisionNorm.y : 0.3));
        this.hit += 1;
        return 5 * (this.hit % 3);
      }

      return 0;
    }
  }]);

  return Obstacle;
}(); // Point d = closestpointonline(circle1.x, circle1.y, 
// circle1.x + circle1.vx, circle1.y + circle1.vy, circle2.x, circle2.y); 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Obstacle);

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform = /*#__PURE__*/function () {
  function Platform(ctx, x, y, height, width, img) {
    _classCallCheck(this, Platform);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.img = img;
  }

  _createClass(Platform, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (ball.y + ball.rad >= this.y && ball.y - ball.rad <= this.y + this.height && ball.x + ball.rad >= this.x && ball.x - ball.rad < this.x + this.width) {
        ball.updateVec(ball.vx ? -1 * ball.vx : -3, -1 * ball.vy);
        return 5;
      }

      return 0;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }]);

  return Platform;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platform);

/***/ }),

/***/ "./src/scripts/portal.js":
/*!*******************************!*\
  !*** ./src/scripts/portal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Portal = /*#__PURE__*/function () {
  //Type == 0, top portal, type == 1, bottom portal
  function Portal(ctx, x, y, rad, type, img) {
    _classCallCheck(this, Portal);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.type = type;
    this.img = img;
    this.used = 0;
    this.usePortal = this.usePortal.bind(this);
  }

  _createClass(Portal, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      var x = this.x + this.rad / 2;
      var y = this.y + this.rad / 2;
      var rad = this.rad / 2;

      if (Math.pow(x - ball.x, 2) + Math.pow(y - ball.y, 2) <= Math.pow(rad + ball.rad, 2)) {
        if (this.used == 1) {
          return 0;
        }

        if (this.type == 0) {
          ball.updatePos(560, 165);
          ball.updateVec(Math.random() * 6 - 3, 3.5);
        } else {
          ball.updatePos(110, 699);
          ball.updateVec(Math.random() * 6 - 3, -3.5);
        }

        this.usePortal();
        return 2;
      }

      return 0;
    }
  }, {
    key: "usePortal",
    value: function usePortal() {
      var _this = this;

      this.used = 1;
      setTimeout(function () {
        _this.used = 0;
      }, 10000);
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.img[this.used], this.x, this.y, this.rad, this.rad);
    }
  }]);

  return Portal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");


document.addEventListener("DOMContentLoaded", function () {
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.default();
  game.createCanvas();
  console.log('hello123234');
  document.addEventListener('keypress', function (e) {
    if (e.code === 'Space') {
      game.launch();
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9raW5nLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL25vcm1hbGRpc3QuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcG9ydGFsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFsbCIsImN0eCIsIngiLCJ5IiwidngiLCJ2eSIsInJhZCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJhYnMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIkJvcmRlciIsImltZyIsImJhbGwiLCJ1cGRhdGVWZWMiLCJ1cGRhdGVQb3MiLCJkcmF3SW1hZ2UiLCJHYW1lIiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtb3VzZVgiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldE1vdXNlUG9zaXRpb24iLCJsb2FkSW1hZ2VzIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5pdCIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsInBhcnNlSW50IiwiY29udHJvbCIsImNoYW5nZVBvcyIsImxhdW5jaGVkIiwiYXJyIiwiY2FsbGJhY2siLCJpbWFnZXMiLCJsb2FkZWRJbWFnZUNvdW50IiwiaSIsImxlbmd0aCIsIkltYWdlIiwib25sb2FkIiwiaW1hZ2VMb2FkZWQiLCJzcmMiLCJjbGVhckNhbnZhcyIsInVwZGF0ZSIsIm9ic3RhY2xlcyIsImZvckVhY2giLCJvYmoiLCJvdXRvZkJvdW5kcyIsInJlc2V0R2FtZSIsImNoZWNrQ29sbGlzaW9uIiwic2NvcmUiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImxpZmUiLCJkcmF3IiwiY3JlYXRlT2JqZWN0cyIsIkNvbnRyb2wiLCJOb3JtYWxkaXN0IiwiUG9ydGFsIiwiUGxhdGZvcm0iLCJLaW5nIiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiZGlzdHIiLCJkaXN0bCIsInZDb2xsaXNpb24iLCJkaXN0YW5jZSIsInNxcnQiLCJ2Q29sbGlzaW9uTm9ybSIsIm5vcm1hbERpc3QiLCJvYmplY3RzIiwiczEiLCJyYW5kb20iLCJzMiIsInMzIiwicHVzaCIsIk9ic3RhY2xlIiwiaGl0IiwidHlwZSIsInVzZWQiLCJ1c2VQb3J0YWwiLCJzZXRUaW1lb3V0IiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibGF1bmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxJO0FBQ0YsZ0JBQVlDLEdBQVosRUFBaUJDLENB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LFlBQUw7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBM0UsVUFBUSxDQUFDTSxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDQyxDQUFELEVBQU87QUFBQyxRQUFJQSxDQUFDLENBQUNxRSxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUFFSixVQUFJLENBQUNLLE1BQUw7QUFBYztBQUFDLEdBQXZGO0FBQ0QsQ0FMRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgdngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnJhZCA9IDVcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxuXHJcbiAgICBvdXRvZkJvdW5kcygpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IE1hdGguYWJzKHRoaXMudngpIFxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnJhZFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5jdHguY2FudmFzLndpZHRoIC0gdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC1NYXRoLmFicyh0aGlzLnZ4KVxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmN0eC5jYW52YXMud2lkdGggLSB0aGlzLnJhZFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy52eSA9IE1hdGguYWJzKHRoaXMudnkpIFxyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnJhZFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLy8gT3V0IG9mIGJvdW5kcyBvbiBib3R0b21cclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jdHguY2FudmFzLmhlaWdodCAtIHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZ5KSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy52eSAqPSAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZ4KSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy52eCAqPSAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWModngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy52eSA9IHZ5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCBcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxsIiwiY2xhc3MgQm9yZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSAzMDBcclxuICAgICAgICB0aGlzLnkgPSA4NTBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIwXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkgJiYgYmFsbC55IC0gYmFsbC5yYWQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgYmFsbC54ICsgYmFsbC5yYWQgPj0gdGhpcy54IC0gdGhpcy53aWR0aCAvIDIgJiYgYmFsbC54IC0gYmFsbC5yYWQ8IHRoaXMueCArIHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWxsLnggPCB0aGlzLngpIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKC0xLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoMS4xICogTWF0aC5hYnMoYmFsbC52eCksIC0xICogYmFsbC52eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcyhiYWxsLngsIHRoaXMueSAtIGJhbGwucmFkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQb3MoeCkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54IC0gdGhpcy53aWR0aCAvIDIsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3JkZXIiLCJpbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbnRyb2wnXG5pbXBvcnQgTm9ybWFsZGlzdCBmcm9tICcuL25vcm1hbGRpc3QnXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vcG9ydGFsJ1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSdcbmltcG9ydCBLaW5nIGZyb20gJy4va2luZydcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gNjAwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDkwMDtcbiAgICB0aGlzLm1vdXNlWCA9IDUwO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4gdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGUpLCBmYWxzZSk7XG4gICAgXG4gICAgdGhpcy5sb2FkSW1hZ2VzKFtcbiAgICAgIFsnc3Vid2F5JywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vc00yVmNYQS5wbmcnXSxcbiAgICAgIFsncG9ydGFsJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vbkxTUFJ3Qi5wbmcnXSxcbiAgICAgIFsncG9ydGFsMScsICdodHRwczovL2kuaW1ndXIuY29tLzBjd1poWW8ucG5nJ10sXG4gICAgICBbJ21jZCcsICdodHRwOi8vYXNzZXRzLnN0aWNrcG5nLmNvbS9pbWFnZXMvNTg4MjQ4MmRlODFhY2I5NjQyNGZmYWFjLnBuZyddLFxuICAgICAgWydrZmMnLCAnaHR0cHM6Ly9wbmdpbWcuY29tL3VwbG9hZHMva2ZjX2Zvb2Qva2ZjX2Zvb2RfUE5HMzAucG5nJ10sXG4gICAgICBbJ3BpenphJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vZkR6UmtTcS5wbmcnXSxcbiAgICAgIFsnY2hpcG90bGUnLCAnaHR0cHM6Ly93d3cudmlwcG5nLmNvbS9wbmcvZnVsbC8yNjctMjY3MzE2MV9idXJyaXRvLWJvd2wtYnVycml0by1ib3dsLXNpc2lnLnBuZyddLFxuICAgICAgWydraW5nJywgJ2h0dHA6Ly9hc3NldHMuc3RpY2twbmcuY29tL2ltYWdlcy81ODQyOTk2ZmE2NTE1YjFlMGFkNzVhZGQucG5nJ11cbiAgICBdLCAoKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSkpXG4gICAgdGhpcy5pbml0KCkgXG4gIH1cblxuICBzZXRNb3VzZVBvc2l0aW9uKGUpIHtcbiAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgdGhpcy54ID0gcGFyc2VJbnQoeClcbiAgICB0aGlzLmNvbnRyb2wuY2hhbmdlUG9zKHRoaXMueClcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVQb3ModGhpcy54LCB0aGlzLmJhbGwueSlcbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2VzKGFyciwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHZhciBsb2FkZWRJbWFnZUNvdW50ID0gMDtcblxuICAgIC8vIE1ha2Ugc3VyZSBhcnIgaXMgYWN0dWFsbHkgYW4gYXJyYXkgYW5kIGFueSBvdGhlciBlcnJvciBjaGVja2luZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gaW1hZ2VMb2FkZWQ7XG4gICAgICAgIGltZy5zcmMgPSBhcnJbaV1bMV07XG4gICAgICAgIHRoaXMuaW1hZ2VzW2FycltpXVswXV0gPSBpbWdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbWFnZUxvYWRlZChlKSB7XG4gICAgICAgIGxvYWRlZEltYWdlQ291bnQrKztcbiAgICAgICAgaWYgKGxvYWRlZEltYWdlQ291bnQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuY2xlYXJDYW52YXMoKVxuICAgIGlmICh0aGlzLmxhdW5jaGVkKSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlKClcbiAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxuICAgICAgaWYgKHRoaXMuYmFsbC5vdXRvZkJvdW5kcygpKSB7XG4gICAgICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgICAgfVxuICAgICAgdGhpcy5jb250cm9sLmNoZWNrQ29sbGlzaW9uKHRoaXMuYmFsbClcbiAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gdGhpcy5zY29yZSArPSBvYmouY2hlY2tDb2xsaXNpb24odGhpcy5iYWxsKSlcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykuaW5uZXJIVE1MID0gdGhpcy5zY29yZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWZlJykuaW5uZXJIVE1MID0gdGhpcy5saWZlXG4gICAgdGhpcy5iYWxsLmRyYXcoKVxuICAgIHRoaXMuY29udHJvbC5kcmF3KClcbiAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKChvYmopID0+IG9iai5kcmF3KCkpXG4gICAgXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgdGhpcy5jcmVhdGVPYmplY3RzKClcbiAgICB0aGlzLmxhdW5jaGVkID0gZmFsc2VcbiAgICB0aGlzLmxpZmUgLT0gMVxuICAgIGlmICh0aGlzLmxpZmUgPCAwKSB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9iamVjdHMoKSB7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jdHgsIDMwMCwgODAwLCAwLCAwKVxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMuY3R4LCB0aGlzLmltYWdlc1snc3Vid2F5J10pXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXG4gICAgICBuZXcgTm9ybWFsZGlzdCh0aGlzLmN0eCwgMzAwLCAzMDAsIFt0aGlzLmltYWdlc1snbWNkJ10sIHRoaXMuaW1hZ2VzWydrZmMnXSwgdGhpcy5pbWFnZXNbJ3BpenphJ11dKSwgXG4gICAgICBuZXcgUG9ydGFsKHRoaXMuY3R4LCA1MCwgNzAwLCA2MCwgMCwgW3RoaXMuaW1hZ2VzWydwb3J0YWwnXSwgdGhpcy5pbWFnZXNbJ3BvcnRhbDEnXV0pLCBcbiAgICAgIG5ldyBQb3J0YWwodGhpcy5jdHgsIDUwMCwgMTAwLCA2MCwgMSwgW3RoaXMuaW1hZ2VzWydwb3J0YWwnXSwgdGhpcy5pbWFnZXNbJ3BvcnRhbDEnXV0pLFxuICAgICAgbmV3IFBsYXRmb3JtKHRoaXMuY3R4LCAwLCAyMDAsIDUwLCAxMjAsIHRoaXMuaW1hZ2VzWydjaGlwb3RsZSddKSxcbiAgICAgIG5ldyBQbGF0Zm9ybSh0aGlzLmN0eCwgMjUwLCAxMDAsIDUwLCAxMjAsIHRoaXMuaW1hZ2VzWydjaGlwb3RsZSddKSxcbiAgICAgIG5ldyBLaW5nKHRoaXMuY3R4LCA1NTAsIDYwLCAyMCwgdGhpcy5pbWFnZXNbJ2tpbmcnXSlcbiAgICBdXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpXG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLmxhdW5jaGVkID0gZmFsc2VcbiAgICB0aGlzLmxpZmUgPSAzXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5hcHBlbmQodGhpcy5jYW52YXMpXG4gIH1cblxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBsYXVuY2goKSB7XG4gICAgaWYgKHRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlVmVjKDAsIC00LjUpXG4gICAgICB0aGlzLmxhdW5jaGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY2xhc3MgS2luZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZCwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuZGlzdHIgPSB4ICsgMjBcclxuICAgICAgICB0aGlzLmRpc3RsID0geCAtIDIwXHJcbiAgICAgICAgdGhpcy52eCA9IDAuNVxyXG4gICAgICAgIHRoaXMucmFkID0gcmFkXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54IC0gdGhpcy5yYWQsIHRoaXMueSAtIHRoaXMucmFkLCB0aGlzLnJhZCAqIDIsIHRoaXMucmFkICogMilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuZGlzdGwpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgdGhpcy5kaXN0cikge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggLSBiYWxsLngpICoqIDIgKyAodGhpcy55IC0gYmFsbC55KSAqKiAyIDw9ICh0aGlzLnJhZCArIGJhbGwucmFkKSAqKiAyICkge1xyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHt4OiBiYWxsLnggLSB0aGlzLngsIHk6IGJhbGwueSAtIHRoaXMueX1cclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChiYWxsLngtdGhpcy54KSAqKiAyICsgKGJhbGwueS10aGlzLnkpICoqIDIpXHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uTm9ybSA9IHt4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2V9IFxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyg2ICogdkNvbGxpc2lvbk5vcm0ueCwgNiAqICh2Q29sbGlzaW9uTm9ybS55ID8gdkNvbGxpc2lvbk5vcm0ueSA6IDAuMykpXHJcbiAgICAgICAgICAgIHJldHVybiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxufVxyXG5cclxuLy8gUG9pbnQgZCA9IGNsb3Nlc3Rwb2ludG9ubGluZShjaXJjbGUxLngsIGNpcmNsZTEueSwgXHJcbi8vIGNpcmNsZTEueCArIGNpcmNsZTEudngsIGNpcmNsZTEueSArIGNpcmNsZTEudnksIGNpcmNsZTIueCwgY2lyY2xlMi55KTsgXHJcbmV4cG9ydCBkZWZhdWx0IEtpbmciLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSdcclxuXHJcbmNsYXNzIG5vcm1hbERpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW11cclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvL1RvcFxyXG4gICAgICAgIGNvbnN0IHMxID0gKE1hdGgucmFuZG9tKCkgKiA0ICsgNSkgLyAxMFxyXG4gICAgICAgIGNvbnN0IHMyID0gKE1hdGgucmFuZG9tKCkgKiA0ICsgNSkgLyAxMFxyXG4gICAgICAgIGNvbnN0IHMzID0gKE1hdGgucmFuZG9tKCkgKiA0ICsgNSkgLyAxMFxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnkgLSA3NSwgMjAsIHRoaXMuaW1nLCBzMSkpXHJcbiAgICAgICAgLy9NaWRcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAtIDkwLCB0aGlzLnksIDIwLCB0aGlzLmltZywgczIpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIDIwLCB0aGlzLmltZywgczIpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgOTAsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgLy9Cb3R0b21cclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAtIDE4MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gOTAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDkwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggKyAxODAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmopID0+IG9iai5kcmF3KCkpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmopID0+IG9iai51cGRhdGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgbGV0IHNjb3JlID0gMFxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmopID0+IHNjb3JlICs9IG9iai5jaGVja0NvbGxpc2lvbihiYWxsKSlcclxuICAgICAgICByZXR1cm4gc2NvcmVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm9ybWFsRGlzdCIsImNsYXNzIE9ic3RhY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkLCBpbWcsIHZ4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuZGlzdHIgPSB4ICsgNDBcclxuICAgICAgICB0aGlzLmRpc3RsID0geCAtIDQwXHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy5yYWQgPSByYWRcclxuICAgICAgICB0aGlzLmhpdCA9IDBcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nW3RoaXMuaGl0ICUgM10sIHRoaXMueCAtIHRoaXMucmFkLCB0aGlzLnkgLSB0aGlzLnJhZCwgdGhpcy5yYWQgKiAyLCB0aGlzLnJhZCAqIDIpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCB0aGlzLmRpc3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IHRoaXMuZGlzdHIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmICgodGhpcy54IC0gYmFsbC54KSAqKiAyICsgKHRoaXMueSAtIGJhbGwueSkgKiogMiA8PSAodGhpcy5yYWQgKyBiYWxsLnJhZCkgKiogMiApIHtcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb24gPSB7eDogYmFsbC54IC0gdGhpcy54LCB5OiBiYWxsLnkgLSB0aGlzLnl9XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoYmFsbC54LXRoaXMueCkgKiogMiArIChiYWxsLnktdGhpcy55KSAqKiAyKVxyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbk5vcm0gPSB7eDogdkNvbGxpc2lvbi54IC8gZGlzdGFuY2UsIHk6IHZDb2xsaXNpb24ueSAvIGRpc3RhbmNlfSBcclxuICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoNiAqIHZDb2xsaXNpb25Ob3JtLngsIDYgKiAodkNvbGxpc2lvbk5vcm0ueSA/IHZDb2xsaXNpb25Ob3JtLnkgOiAwLjMpKVxyXG4gICAgICAgICAgICB0aGlzLmhpdCArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiA1ICogKHRoaXMuaGl0ICUgMylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxufVxyXG5cclxuLy8gUG9pbnQgZCA9IGNsb3Nlc3Rwb2ludG9ubGluZShjaXJjbGUxLngsIGNpcmNsZTEueSwgXHJcbi8vIGNpcmNsZTEueCArIGNpcmNsZTEudngsIGNpcmNsZTEueSArIGNpcmNsZTEudnksIGNpcmNsZTIueCwgY2lyY2xlMi55KTsgXHJcbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlIiwiY2xhc3MgUGxhdGZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoYmFsbC55ICsgYmFsbC5yYWQgPj0gdGhpcy55ICYmIGJhbGwueSAtIGJhbGwucmFkIDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIGJhbGwueCArIGJhbGwucmFkID49IHRoaXMueCAmJiBiYWxsLnggLSBiYWxsLnJhZDwgdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYygoYmFsbC52eCA/IC0xICogYmFsbC52eCA6IC0zKSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICByZXR1cm4gNVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtIiwiY2xhc3MgUG9ydGFsIHtcclxuICAgIC8vVHlwZSA9PSAwLCB0b3AgcG9ydGFsLCB0eXBlID09IDEsIGJvdHRvbSBwb3J0YWxcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkLCB0eXBlLCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5yYWQgPSByYWRcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgICAgICB0aGlzLnVzZWQgPSAwXHJcbiAgICAgICAgdGhpcy51c2VQb3J0YWwgPSB0aGlzLnVzZVBvcnRhbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnggKyB0aGlzLnJhZCAvIDJcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy55ICsgdGhpcy5yYWQgLyAyXHJcbiAgICAgICAgY29uc3QgcmFkID0gdGhpcy5yYWQgLyAyXHJcbiAgICAgICAgaWYgKCh4IC0gYmFsbC54KSAqKiAyICsgKHkgLSBiYWxsLnkpICoqIDIgPD0gKHJhZCArIGJhbGwucmFkKSAqKiAyICkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VkID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcyg1NjAsIDE2NSlcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKE1hdGgucmFuZG9tKCkgKiA2IC0gMywgMy41KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoMTEwLCA2OTkpXHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyhNYXRoLnJhbmRvbSgpICogNiAtIDMsIC0zLjUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51c2VQb3J0YWwoKVxyXG4gICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZVBvcnRhbCgpIHtcclxuICAgICAgICB0aGlzLnVzZWQgPSAxXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlZCA9IDBcclxuICAgICAgICB9LCAxMDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZ1t0aGlzLnVzZWRdLCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWQsIHRoaXMucmFkKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5jcmVhdGVDYW52YXMoKTtcbiAgY29uc29sZS5sb2coJ2hlbGxvMTIzMjM0JylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge2lmIChlLmNvZGUgPT09ICdTcGFjZScpIHsgZ2FtZS5sYXVuY2goKX19KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=