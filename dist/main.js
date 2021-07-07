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
  document.addEventListener('keypress', function (e) {
    if (e.code === 'Space') {
      game.launch();
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9raW5nLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL25vcm1hbGRpc3QuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcG9ydGFsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8xZjliIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWxsIiwiY3R4IiwieCIsInkiLCJ2eCIsInZ5IiwicmFkIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImFicyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiQm9yZGVyIiwiaW1nIiwiYmFsbCIsInVwZGF0ZVZlYyIsInVwZGF0ZVBvcyIsImRyYXdJbWFnZSIsIkdhbWUiLCJwcm9wcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1vdXNlWCIsImdldENvbnRleHQiLCJhbmltYXRlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0TW91c2VQb3NpdGlvbiIsImxvYWRJbWFnZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0IiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwicGFyc2VJbnQiLCJjb250cm9sIiwiY2hhbmdlUG9zIiwibGF1bmNoZWQiLCJhcnIiLCJjYWxsYmFjayIsImltYWdlcyIsImxvYWRlZEltYWdlQ291bnQiLCJpIiwibGVuZ3RoIiwiSW1hZ2UiLCJvbmxvYWQiLCJpbWFnZUxvYWRlZCIsInNyYyIsImNsZWFyQ2FudmFzIiwidXBkYXRlIiwib2JzdGFjbGVzIiwiZm9yRWFjaCIsIm9iaiIsIm91dG9mQm91bmRzIiwicmVzZXRHYW1lIiwiY2hlY2tDb2xsaXNpb24iLCJzY29yZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGlmZSIsImRyYXciLCJjcmVhdGVPYmplY3RzIiwiQ29udHJvbCIsIk5vcm1hbGRpc3QiLCJQb3J0YWwiLCJQbGF0Zm9ybSIsIktpbmciLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJkaXN0ciIsImRpc3RsIiwidkNvbGxpc2lvbiIsImRpc3RhbmNlIiwic3FydCIsInZDb2xsaXNpb25Ob3JtIiwibm9ybWFsRGlzdCIsIm9iamVjdHMiLCJzMSIsInJhbmRvbSIsInMyIiwiczMiLCJwdXNoIiwiT2JzdGFjbGUiLCJoaXQiLCJ0eXBlIiwidXNlZCIsInVzZVBvcnRhbCIsInNldFRpbWVvdXQiLCJnYW1lIiwiY3JlYXRlQ2FudmFzIiwiY29kZSIsImxhdW5jaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNGLGdCQUFZQyxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMs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RSxVQUFRLENBQUNNLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztBQUFDLFFBQUlBLENBQUMsQ0FBQ21FLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQUVGLFVBQUksQ0FBQ0csTUFBTDtBQUFjO0FBQUMsR0FBdkY7QUFDRCxDQUpELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhbGwge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCB2eCwgdnkpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMucmFkID0gNVxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy52eSA9IHZ5XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWQsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJ1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIG91dG9mQm91bmRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gTWF0aC5hYnModGhpcy52eCkgXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucmFkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmN0eC5jYW52YXMud2lkdGggLSB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLU1hdGguYWJzKHRoaXMudngpXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAtIHRoaXMucmFkXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gTWF0aC5hYnModGhpcy52eSkgXHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMucmFkXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBPdXQgb2YgYm91bmRzIG9uIGJvdHRvbVxyXG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudnkpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZ5ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudngpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlYyh2eCwgdnkpIHtcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3MoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4IFxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGwiLCJjbGFzcyBCb3JkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IDMwMFxyXG4gICAgICAgIHRoaXMueSA9IDg1MFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjBcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkID49IHRoaXMueSAmJiBiYWxsLnkgLSBiYWxsLnJhZCA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBiYWxsLnggKyBiYWxsLnJhZCA+PSB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiAmJiBiYWxsLnggLSBiYWxsLnJhZDwgdGhpcy54ICsgdGhpcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgaWYgKGJhbGwueCA8IHRoaXMueCkge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoLTEuMSAqIE1hdGguYWJzKGJhbGwudngpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYygxLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgdGhpcy55IC0gYmFsbC5yYWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBvcyh4KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvcmRlciIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCdcbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29udHJvbCdcbmltcG9ydCBOb3JtYWxkaXN0IGZyb20gJy4vbm9ybWFsZGlzdCdcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9wb3J0YWwnXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSdcbmltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJ1xuaW1wb3J0IEtpbmcgZnJvbSAnLi9raW5nJ1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA2MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gOTAwO1xuICAgIHRoaXMubW91c2VYID0gNTA7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLnNldE1vdXNlUG9zaXRpb24oZSksIGZhbHNlKTtcbiAgICBcbiAgICB0aGlzLmxvYWRJbWFnZXMoW1xuICAgICAgWydzdWJ3YXknLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTTJWY1hBLnBuZyddLFxuICAgICAgWydwb3J0YWwnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9uTFNQUndCLnBuZyddLFxuICAgICAgWydwb3J0YWwxJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vMGN3WmhZby5wbmcnXSxcbiAgICAgIFsnbWNkJywgJ2h0dHA6Ly9hc3NldHMuc3RpY2twbmcuY29tL2ltYWdlcy81ODgyNDgyZGU4MWFjYjk2NDI0ZmZhYWMucG5nJ10sXG4gICAgICBbJ2tmYycsICdodHRwczovL3BuZ2ltZy5jb20vdXBsb2Fkcy9rZmNfZm9vZC9rZmNfZm9vZF9QTkczMC5wbmcnXSxcbiAgICAgIFsncGl6emEnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9mRHpSa1NxLnBuZyddLFxuICAgICAgWydjaGlwb3RsZScsICdodHRwczovL3d3dy52aXBwbmcuY29tL3BuZy9mdWxsLzI2Ny0yNjczMTYxX2J1cnJpdG8tYm93bC1idXJyaXRvLWJvd2wtc2lzaWcucG5nJ10sXG4gICAgICBbJ2tpbmcnLCAnaHR0cDovL2Fzc2V0cy5zdGlja3BuZy5jb20vaW1hZ2VzLzU4NDI5OTZmYTY1MTViMWUwYWQ3NWFkZC5wbmcnXVxuICAgIF0sICgpID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKSlcbiAgICB0aGlzLmluaXQoKSBcbiAgfVxuXG4gIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnRcbiAgICB0aGlzLnggPSBwYXJzZUludCh4KVxuICAgIHRoaXMuY29udHJvbC5jaGFuZ2VQb3ModGhpcy54KVxuICAgIGlmICghdGhpcy5sYXVuY2hlZCkge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZVBvcyh0aGlzLngsIHRoaXMuYmFsbC55KVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZXMoYXJyLCBjYWxsYmFjaykge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdmFyIGxvYWRlZEltYWdlQ291bnQgPSAwO1xuXG4gICAgLy8gTWFrZSBzdXJlIGFyciBpcyBhY3R1YWxseSBhbiBhcnJheSBhbmQgYW55IG90aGVyIGVycm9yIGNoZWNraW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBpbWFnZUxvYWRlZDtcbiAgICAgICAgaW1nLnNyYyA9IGFycltpXVsxXTtcbiAgICAgICAgdGhpcy5pbWFnZXNbYXJyW2ldWzBdXSA9IGltZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltYWdlTG9hZGVkKGUpIHtcbiAgICAgICAgbG9hZGVkSW1hZ2VDb3VudCsrO1xuICAgICAgICBpZiAobG9hZGVkSW1hZ2VDb3VudCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5jbGVhckNhbnZhcygpXG4gICAgaWYgKHRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGUoKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiBvYmoudXBkYXRlKCkpXG4gICAgICBpZiAodGhpcy5iYWxsLm91dG9mQm91bmRzKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKVxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRyb2wuY2hlY2tDb2xsaXNpb24odGhpcy5iYWxsKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiB0aGlzLnNjb3JlICs9IG9iai5jaGVja0NvbGxpc2lvbih0aGlzLmJhbGwpKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUnKS5pbm5lckhUTUwgPSB0aGlzLmxpZmVcbiAgICB0aGlzLmJhbGwuZHJhdygpXG4gICAgdGhpcy5jb250cm9sLmRyYXcoKVxuICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcbiAgICBcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgfVxuXG4gIHJlc2V0R2FtZSgpIHtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdHMoKVxuICAgIHRoaXMubGF1bmNoZWQgPSBmYWxzZVxuICAgIHRoaXMubGlmZSAtPSAxXG4gICAgaWYgKHRoaXMubGlmZSA8IDApIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT2JqZWN0cygpIHtcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmN0eCwgMzAwLCA4MDAsIDAsIDApXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5jdHgsIHRoaXMuaW1hZ2VzWydzdWJ3YXknXSlcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtcbiAgICAgIG5ldyBOb3JtYWxkaXN0KHRoaXMuY3R4LCAzMDAsIDMwMCwgW3RoaXMuaW1hZ2VzWydtY2QnXSwgdGhpcy5pbWFnZXNbJ2tmYyddLCB0aGlzLmltYWdlc1sncGl6emEnXV0pLCBcbiAgICAgIG5ldyBQb3J0YWwodGhpcy5jdHgsIDUwLCA3MDAsIDYwLCAwLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksIFxuICAgICAgbmV3IFBvcnRhbCh0aGlzLmN0eCwgNTAwLCAxMDAsIDYwLCAxLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksXG4gICAgICBuZXcgUGxhdGZvcm0odGhpcy5jdHgsIDAsIDIwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IFBsYXRmb3JtKHRoaXMuY3R4LCAyNTAsIDEwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IEtpbmcodGhpcy5jdHgsIDU1MCwgNjAsIDIwLCB0aGlzLmltYWdlc1sna2luZyddKVxuICAgIF1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVPYmplY3RzKClcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMubGF1bmNoZWQgPSBmYWxzZVxuICAgIHRoaXMubGlmZSA9IDNcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmFwcGVuZCh0aGlzLmNhbnZhcylcbiAgfVxuXG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxhdW5jaCgpIHtcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVWZWMoMCwgLTQuNSlcbiAgICAgIHRoaXMubGF1bmNoZWQgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBLaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkLCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyAyMFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gMjBcclxuICAgICAgICB0aGlzLnZ4ID0gMC41XHJcbiAgICAgICAgdGhpcy5yYWQgPSByYWRcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnggLSB0aGlzLnJhZCwgdGhpcy55IC0gdGhpcy5yYWQsIHRoaXMucmFkICogMiwgdGhpcy5yYWQgKiAyKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5kaXN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCB0aGlzLmRpc3RyKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoKHRoaXMueCAtIGJhbGwueCkgKiogMiArICh0aGlzLnkgLSBiYWxsLnkpICoqIDIgPD0gKHRoaXMucmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uID0ge3g6IGJhbGwueCAtIHRoaXMueCwgeTogYmFsbC55IC0gdGhpcy55fVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGJhbGwueC10aGlzLngpICoqIDIgKyAoYmFsbC55LXRoaXMueSkgKiogMilcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0ge3g6IHZDb2xsaXNpb24ueCAvIGRpc3RhbmNlLCB5OiB2Q29sbGlzaW9uLnkgLyBkaXN0YW5jZX0gXHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKDYgKiB2Q29sbGlzaW9uTm9ybS54LCA2ICogKHZDb2xsaXNpb25Ob3JtLnkgPyB2Q29sbGlzaW9uTm9ybS55IDogMC4zKSlcclxuICAgICAgICAgICAgcmV0dXJuIDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgS2luZyIsImltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJ1xyXG5cclxuY2xhc3Mgbm9ybWFsRGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXVxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vVG9wXHJcbiAgICAgICAgY29uc3QgczEgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczIgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczMgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSAtIDc1LCAyMCwgdGhpcy5pbWcsIHMxKSlcclxuICAgICAgICAvL01pZFxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gOTAsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggKyA5MCwgdGhpcy55LCAyMCwgdGhpcy5pbWcsIHMyKSlcclxuICAgICAgICAvL0JvdHRvbVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gMTgwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLSA5MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgOTAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDE4MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBsZXQgc2NvcmUgPSAwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gc2NvcmUgKz0gb2JqLmNoZWNrQ29sbGlzaW9uKGJhbGwpKVxyXG4gICAgICAgIHJldHVybiBzY29yZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3JtYWxEaXN0IiwiY2xhc3MgT2JzdGFjbGUge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIGltZywgdngpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyA0MFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gNDBcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMuaGl0ID0gMFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWdbdGhpcy5oaXQgJSAzXSwgdGhpcy54IC0gdGhpcy5yYWQsIHRoaXMueSAtIHRoaXMucmFkLCB0aGlzLnJhZCAqIDIsIHRoaXMucmFkICogMilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuZGlzdGwpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgdGhpcy5kaXN0cikge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggLSBiYWxsLngpICoqIDIgKyAodGhpcy55IC0gYmFsbC55KSAqKiAyIDw9ICh0aGlzLnJhZCArIGJhbGwucmFkKSAqKiAyICkge1xyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHt4OiBiYWxsLnggLSB0aGlzLngsIHk6IGJhbGwueSAtIHRoaXMueX1cclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChiYWxsLngtdGhpcy54KSAqKiAyICsgKGJhbGwueS10aGlzLnkpICoqIDIpXHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uTm9ybSA9IHt4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2V9IFxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyg2ICogdkNvbGxpc2lvbk5vcm0ueCwgNiAqICh2Q29sbGlzaW9uTm9ybS55ID8gdkNvbGxpc2lvbk5vcm0ueSA6IDAuMykpXHJcbiAgICAgICAgICAgIHRoaXMuaGl0ICs9IDFcclxuICAgICAgICAgICAgcmV0dXJuIDUgKiAodGhpcy5oaXQgJSAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGUiLCJjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkgJiYgYmFsbC55IC0gYmFsbC5yYWQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgYmFsbC54ICsgYmFsbC5yYWQgPj0gdGhpcy54ICYmIGJhbGwueCAtIGJhbGwucmFkPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKChiYWxsLnZ4ID8gLTEgKiBiYWxsLnZ4IDogLTMpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIHJldHVybiA1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm0iLCJjbGFzcyBQb3J0YWwge1xyXG4gICAgLy9UeXBlID09IDAsIHRvcCBwb3J0YWwsIHR5cGUgPT0gMSwgYm90dG9tIHBvcnRhbFxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIHR5cGUsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDBcclxuICAgICAgICB0aGlzLnVzZVBvcnRhbCA9IHRoaXMudXNlUG9ydGFsLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCArIHRoaXMucmFkIC8gMlxyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnkgKyB0aGlzLnJhZCAvIDJcclxuICAgICAgICBjb25zdCByYWQgPSB0aGlzLnJhZCAvIDJcclxuICAgICAgICBpZiAoKHggLSBiYWxsLngpICoqIDIgKyAoeSAtIGJhbGwueSkgKiogMiA8PSAocmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKDU2MCwgMTY1KVxyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoTWF0aC5yYW5kb20oKSAqIDYgLSAzLCAzLjUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcygxMTAsIDY5OSlcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKE1hdGgucmFuZG9tKCkgKiA2IC0gMywgLTMuNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVzZVBvcnRhbCgpXHJcbiAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlUG9ydGFsKCkge1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDFcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VkID0gMFxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nW3RoaXMudXNlZF0sIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgdGhpcy5yYWQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0YWwiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmNyZWF0ZUNhbnZhcygpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYgKGUuY29kZSA9PT0gJ1NwYWNlJykgeyBnYW1lLmxhdW5jaCgpfX0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==