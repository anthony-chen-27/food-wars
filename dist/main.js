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
    this.loadImages([['subway', 'https://i.imgur.com/sM2VcXA.png'], ['portal', 'https://i.imgur.com/nLSPRwB.png'], ['portal1', 'https://i.imgur.com/0cwZhYo.png'], ['mcd', 'https://i.imgur.com/MtsjJGt.png'], ['kfc', 'https://pngimg.com/uploads/kfc_food/kfc_food_PNG30.png'], ['pizza', 'https://i.imgur.com/fDzRkSq.png'], ['chipotle', 'https://www.vippng.com/png/full/267-2673161_burrito-bowl-burrito-bowl-sisig.png'], ['king', 'https://i.imgur.com/YD9sm31.png']], function () {
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

      if (this.life == 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9raW5nLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL25vcm1hbGRpc3QuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcG9ydGFsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8xZjliIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWxsIiwiY3R4IiwieCIsInkiLCJ2eCIsInZ5IiwicmFkIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImFicyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiQm9yZGVyIiwiaW1nIiwiYmFsbCIsInVwZGF0ZVZlYyIsInVwZGF0ZVBvcyIsImRyYXdJbWFnZSIsIkdhbWUiLCJwcm9wcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1vdXNlWCIsImdldENvbnRleHQiLCJhbmltYXRlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0TW91c2VQb3NpdGlvbiIsImxvYWRJbWFnZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0IiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwicGFyc2VJbnQiLCJjb250cm9sIiwiY2hhbmdlUG9zIiwibGF1bmNoZWQiLCJhcnIiLCJjYWxsYmFjayIsImltYWdlcyIsImxvYWRlZEltYWdlQ291bnQiLCJpIiwibGVuZ3RoIiwiSW1hZ2UiLCJvbmxvYWQiLCJpbWFnZUxvYWRlZCIsInNyYyIsImNsZWFyQ2FudmFzIiwidXBkYXRlIiwib2JzdGFjbGVzIiwiZm9yRWFjaCIsIm9iaiIsIm91dG9mQm91bmRzIiwicmVzZXRHYW1lIiwiY2hlY2tDb2xsaXNpb24iLCJzY29yZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGlmZSIsImRyYXciLCJjcmVhdGVPYmplY3RzIiwiQ29udHJvbCIsIk5vcm1hbGRpc3QiLCJQb3J0YWwiLCJQbGF0Zm9ybSIsIktpbmciLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJkaXN0ciIsImRpc3RsIiwidkNvbGxpc2lvbiIsImRpc3RhbmNlIiwic3FydCIsInZDb2xsaXNpb25Ob3JtIiwibm9ybWFsRGlzdCIsIm9iamVjdHMiLCJzMSIsInJhbmRvbSIsInMyIiwiczMiLCJwdXNoIiwiT2JzdGFjbGUiLCJoaXQiLCJ0eXBlIiwidXNlZCIsInVzZVBvcnRhbCIsInNldFRpbWVvdXQiLCJnYW1lIiwiY3JlYXRlQ2FudmFzIiwiY29kZSIsImxhdW5jaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNGLGdCQUFZQyxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMs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RSxVQUFRLENBQUNNLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztBQUFDLFFBQUlBLENBQUMsQ0FBQ21FLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQUVGLFVBQUksQ0FBQ0csTUFBTDtBQUFjO0FBQUMsR0FBdkY7QUFDRCxDQUpELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhbGwge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCB2eCwgdnkpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMucmFkID0gNVxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy52eSA9IHZ5XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWQsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJ1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIG91dG9mQm91bmRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gTWF0aC5hYnModGhpcy52eCkgXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucmFkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmN0eC5jYW52YXMud2lkdGggLSB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLU1hdGguYWJzKHRoaXMudngpXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAtIHRoaXMucmFkXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gTWF0aC5hYnModGhpcy52eSkgXHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMucmFkXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBPdXQgb2YgYm91bmRzIG9uIGJvdHRvbVxyXG4gICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudnkpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZ5ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudngpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlYyh2eCwgdnkpIHtcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3MoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4IFxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGwiLCJjbGFzcyBCb3JkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IDMwMFxyXG4gICAgICAgIHRoaXMueSA9IDg1MFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjBcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkID49IHRoaXMueSAmJiBiYWxsLnkgLSBiYWxsLnJhZCA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBiYWxsLnggKyBiYWxsLnJhZCA+PSB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiAmJiBiYWxsLnggLSBiYWxsLnJhZDwgdGhpcy54ICsgdGhpcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgaWYgKGJhbGwueCA8IHRoaXMueCkge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoLTEuMSAqIE1hdGguYWJzKGJhbGwudngpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYygxLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgdGhpcy55IC0gYmFsbC5yYWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBvcyh4KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvcmRlciIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCdcbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29udHJvbCdcbmltcG9ydCBOb3JtYWxkaXN0IGZyb20gJy4vbm9ybWFsZGlzdCdcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9wb3J0YWwnXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSdcbmltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJ1xuaW1wb3J0IEtpbmcgZnJvbSAnLi9raW5nJ1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA2MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gOTAwO1xuICAgIHRoaXMubW91c2VYID0gNTA7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLnNldE1vdXNlUG9zaXRpb24oZSksIGZhbHNlKTtcbiAgICBcbiAgICB0aGlzLmxvYWRJbWFnZXMoW1xuICAgICAgWydzdWJ3YXknLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTTJWY1hBLnBuZyddLFxuICAgICAgWydwb3J0YWwnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9uTFNQUndCLnBuZyddLFxuICAgICAgWydwb3J0YWwxJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vMGN3WmhZby5wbmcnXSxcbiAgICAgIFsnbWNkJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vTXRzakpHdC5wbmcnXSxcbiAgICAgIFsna2ZjJywgJ2h0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL2tmY19mb29kL2tmY19mb29kX1BORzMwLnBuZyddLFxuICAgICAgWydwaXp6YScsICdodHRwczovL2kuaW1ndXIuY29tL2ZEelJrU3EucG5nJ10sXG4gICAgICBbJ2NoaXBvdGxlJywgJ2h0dHBzOi8vd3d3LnZpcHBuZy5jb20vcG5nL2Z1bGwvMjY3LTI2NzMxNjFfYnVycml0by1ib3dsLWJ1cnJpdG8tYm93bC1zaXNpZy5wbmcnXSxcbiAgICAgIFsna2luZycsICdodHRwczovL2kuaW1ndXIuY29tL1lEOXNtMzEucG5nJ11cbiAgICBdLCAoKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSkpXG4gICAgdGhpcy5pbml0KCkgXG4gIH1cblxuICBzZXRNb3VzZVBvc2l0aW9uKGUpIHtcbiAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgdGhpcy54ID0gcGFyc2VJbnQoeClcbiAgICB0aGlzLmNvbnRyb2wuY2hhbmdlUG9zKHRoaXMueClcbiAgICBpZiAoIXRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVQb3ModGhpcy54LCB0aGlzLmJhbGwueSlcbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2VzKGFyciwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHZhciBsb2FkZWRJbWFnZUNvdW50ID0gMDtcblxuICAgIC8vIE1ha2Ugc3VyZSBhcnIgaXMgYWN0dWFsbHkgYW4gYXJyYXkgYW5kIGFueSBvdGhlciBlcnJvciBjaGVja2luZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gaW1hZ2VMb2FkZWQ7XG4gICAgICAgIGltZy5zcmMgPSBhcnJbaV1bMV07XG4gICAgICAgIHRoaXMuaW1hZ2VzW2FycltpXVswXV0gPSBpbWdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbWFnZUxvYWRlZChlKSB7XG4gICAgICAgIGxvYWRlZEltYWdlQ291bnQrKztcbiAgICAgICAgaWYgKGxvYWRlZEltYWdlQ291bnQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuY2xlYXJDYW52YXMoKVxuICAgIGlmICh0aGlzLmxhdW5jaGVkKSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlKClcbiAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxuICAgICAgaWYgKHRoaXMuYmFsbC5vdXRvZkJvdW5kcygpKSB7XG4gICAgICAgIHRoaXMucmVzZXRHYW1lKClcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgICAgfVxuICAgICAgdGhpcy5jb250cm9sLmNoZWNrQ29sbGlzaW9uKHRoaXMuYmFsbClcbiAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gdGhpcy5zY29yZSArPSBvYmouY2hlY2tDb2xsaXNpb24odGhpcy5iYWxsKSlcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykuaW5uZXJIVE1MID0gdGhpcy5zY29yZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWZlJykuaW5uZXJIVE1MID0gdGhpcy5saWZlXG4gICAgdGhpcy5iYWxsLmRyYXcoKVxuICAgIHRoaXMuY29udHJvbC5kcmF3KClcbiAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKChvYmopID0+IG9iai5kcmF3KCkpXG4gICAgXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgdGhpcy5jcmVhdGVPYmplY3RzKClcbiAgICB0aGlzLmxhdW5jaGVkID0gZmFsc2VcbiAgICB0aGlzLmxpZmUgLT0gMVxuICAgIGlmICh0aGlzLmxpZmUgPT0gMCkge1xuICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVPYmplY3RzKCkge1xuICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuY3R4LCAzMDAsIDgwMCwgMCwgMClcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLmN0eCwgdGhpcy5pbWFnZXNbJ3N1YndheSddKVxuICAgIHRoaXMub2JzdGFjbGVzID0gW1xuICAgICAgbmV3IE5vcm1hbGRpc3QodGhpcy5jdHgsIDMwMCwgMzAwLCBbdGhpcy5pbWFnZXNbJ21jZCddLCB0aGlzLmltYWdlc1sna2ZjJ10sIHRoaXMuaW1hZ2VzWydwaXp6YSddXSksIFxuICAgICAgbmV3IFBvcnRhbCh0aGlzLmN0eCwgNTAsIDcwMCwgNjAsIDAsIFt0aGlzLmltYWdlc1sncG9ydGFsJ10sIHRoaXMuaW1hZ2VzWydwb3J0YWwxJ11dKSwgXG4gICAgICBuZXcgUG9ydGFsKHRoaXMuY3R4LCA1MDAsIDEwMCwgNjAsIDEsIFt0aGlzLmltYWdlc1sncG9ydGFsJ10sIHRoaXMuaW1hZ2VzWydwb3J0YWwxJ11dKSxcbiAgICAgIG5ldyBQbGF0Zm9ybSh0aGlzLmN0eCwgMCwgMjAwLCA1MCwgMTIwLCB0aGlzLmltYWdlc1snY2hpcG90bGUnXSksXG4gICAgICBuZXcgUGxhdGZvcm0odGhpcy5jdHgsIDI1MCwgMTAwLCA1MCwgMTIwLCB0aGlzLmltYWdlc1snY2hpcG90bGUnXSksXG4gICAgICBuZXcgS2luZyh0aGlzLmN0eCwgNTUwLCA2MCwgMjAsIHRoaXMuaW1hZ2VzWydraW5nJ10pXG4gICAgXVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdHMoKVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5sYXVuY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5saWZlID0gM1xuICB9XG5cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kKHRoaXMuY2FudmFzKVxuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgbGF1bmNoKCkge1xuICAgIGlmICh0aGlzLmxhdW5jaGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZVZlYygwLCAtNC41KVxuICAgICAgdGhpcy5sYXVuY2hlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIEtpbmcge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmRpc3RyID0geCArIDIwXHJcbiAgICAgICAgdGhpcy5kaXN0bCA9IHggLSAyMFxyXG4gICAgICAgIHRoaXMudnggPSAwLjVcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCAtIHRoaXMucmFkLCB0aGlzLnkgLSB0aGlzLnJhZCwgdGhpcy5yYWQgKiAyLCB0aGlzLnJhZCAqIDIpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCB0aGlzLmRpc3RsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IHRoaXMuZGlzdHIpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmICgodGhpcy54IC0gYmFsbC54KSAqKiAyICsgKHRoaXMueSAtIGJhbGwueSkgKiogMiA8PSAodGhpcy5yYWQgKyBiYWxsLnJhZCkgKiogMiApIHtcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb24gPSB7eDogYmFsbC54IC0gdGhpcy54LCB5OiBiYWxsLnkgLSB0aGlzLnl9XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoYmFsbC54LXRoaXMueCkgKiogMiArIChiYWxsLnktdGhpcy55KSAqKiAyKVxyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbk5vcm0gPSB7eDogdkNvbGxpc2lvbi54IC8gZGlzdGFuY2UsIHk6IHZDb2xsaXNpb24ueSAvIGRpc3RhbmNlfSBcclxuICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoNiAqIHZDb2xsaXNpb25Ob3JtLngsIDYgKiAodkNvbGxpc2lvbk5vcm0ueSA/IHZDb2xsaXNpb25Ob3JtLnkgOiAwLjMpKVxyXG4gICAgICAgICAgICByZXR1cm4gMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBvaW50IGQgPSBjbG9zZXN0cG9pbnRvbmxpbmUoY2lyY2xlMS54LCBjaXJjbGUxLnksIFxyXG4vLyBjaXJjbGUxLnggKyBjaXJjbGUxLnZ4LCBjaXJjbGUxLnkgKyBjaXJjbGUxLnZ5LCBjaXJjbGUyLngsIGNpcmNsZTIueSk7IFxyXG5leHBvcnQgZGVmYXVsdCBLaW5nIiwiaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnXHJcblxyXG5jbGFzcyBub3JtYWxEaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy9Ub3BcclxuICAgICAgICBjb25zdCBzMSA9IChNYXRoLnJhbmRvbSgpICogNCArIDUpIC8gMTBcclxuICAgICAgICBjb25zdCBzMiA9IChNYXRoLnJhbmRvbSgpICogNCArIDUpIC8gMTBcclxuICAgICAgICBjb25zdCBzMyA9IChNYXRoLnJhbmRvbSgpICogNCArIDUpIC8gMTBcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55IC0gNzUsIDIwLCB0aGlzLmltZywgczEpKVxyXG4gICAgICAgIC8vTWlkXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLSA5MCwgdGhpcy55LCAyMCwgdGhpcy5pbWcsIHMyKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCAyMCwgdGhpcy5pbWcsIHMyKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDkwLCB0aGlzLnksIDIwLCB0aGlzLmltZywgczIpKVxyXG4gICAgICAgIC8vQm90dG9tXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLSAxODAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAtIDkwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggKyA5MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgMTgwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiBvYmouZHJhdygpKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiBvYmoudXBkYXRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGxldCBzY29yZSA9IDBcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiBzY29yZSArPSBvYmouY2hlY2tDb2xsaXNpb24oYmFsbCkpXHJcbiAgICAgICAgcmV0dXJuIHNjb3JlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vcm1hbERpc3QiLCJjbGFzcyBPYnN0YWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZCwgaW1nLCB2eCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmRpc3RyID0geCArIDQwXHJcbiAgICAgICAgdGhpcy5kaXN0bCA9IHggLSA0MFxyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMucmFkID0gcmFkXHJcbiAgICAgICAgdGhpcy5oaXQgPSAwXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZ1t0aGlzLmhpdCAlIDNdLCB0aGlzLnggLSB0aGlzLnJhZCwgdGhpcy55IC0gdGhpcy5yYWQsIHRoaXMucmFkICogMiwgdGhpcy5yYWQgKiAyKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5kaXN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCB0aGlzLmRpc3RyKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoKHRoaXMueCAtIGJhbGwueCkgKiogMiArICh0aGlzLnkgLSBiYWxsLnkpICoqIDIgPD0gKHRoaXMucmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uID0ge3g6IGJhbGwueCAtIHRoaXMueCwgeTogYmFsbC55IC0gdGhpcy55fVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGJhbGwueC10aGlzLngpICoqIDIgKyAoYmFsbC55LXRoaXMueSkgKiogMilcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0ge3g6IHZDb2xsaXNpb24ueCAvIGRpc3RhbmNlLCB5OiB2Q29sbGlzaW9uLnkgLyBkaXN0YW5jZX0gXHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKDYgKiB2Q29sbGlzaW9uTm9ybS54LCA2ICogKHZDb2xsaXNpb25Ob3JtLnkgPyB2Q29sbGlzaW9uTm9ybS55IDogMC4zKSlcclxuICAgICAgICAgICAgdGhpcy5oaXQgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4gNSAqICh0aGlzLmhpdCAlIDMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBvaW50IGQgPSBjbG9zZXN0cG9pbnRvbmxpbmUoY2lyY2xlMS54LCBjaXJjbGUxLnksIFxyXG4vLyBjaXJjbGUxLnggKyBjaXJjbGUxLnZ4LCBjaXJjbGUxLnkgKyBjaXJjbGUxLnZ5LCBjaXJjbGUyLngsIGNpcmNsZTIueSk7IFxyXG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZSIsImNsYXNzIFBsYXRmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkID49IHRoaXMueSAmJiBiYWxsLnkgLSBiYWxsLnJhZCA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBiYWxsLnggKyBiYWxsLnJhZCA+PSB0aGlzLnggJiYgYmFsbC54IC0gYmFsbC5yYWQ8IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoKGJhbGwudnggPyAtMSAqIGJhbGwudnggOiAtMyksIC0xICogYmFsbC52eSlcclxuICAgICAgICAgICAgcmV0dXJuIDVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybSIsImNsYXNzIFBvcnRhbCB7XHJcbiAgICAvL1R5cGUgPT0gMCwgdG9wIHBvcnRhbCwgdHlwZSA9PSAxLCBib3R0b20gcG9ydGFsXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZCwgdHlwZSwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMucmFkID0gcmFkXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICAgICAgdGhpcy51c2VkID0gMFxyXG4gICAgICAgIHRoaXMudXNlUG9ydGFsID0gdGhpcy51c2VQb3J0YWwuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54ICsgdGhpcy5yYWQgLyAyXHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSArIHRoaXMucmFkIC8gMlxyXG4gICAgICAgIGNvbnN0IHJhZCA9IHRoaXMucmFkIC8gMlxyXG4gICAgICAgIGlmICgoeCAtIGJhbGwueCkgKiogMiArICh5IC0gYmFsbC55KSAqKiAyIDw9IChyYWQgKyBiYWxsLnJhZCkgKiogMiApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoNTYwLCAxNjUpXHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyhNYXRoLnJhbmRvbSgpICogNiAtIDMsIDMuNSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKDExMCwgNjk5KVxyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoTWF0aC5yYW5kb20oKSAqIDYgLSAzLCAtMy41KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXNlUG9ydGFsKClcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICB1c2VQb3J0YWwoKSB7XHJcbiAgICAgICAgdGhpcy51c2VkID0gMVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZWQgPSAwXHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWdbdGhpcy51c2VkXSwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkLCB0aGlzLnJhZClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRhbCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUuY3JlYXRlQ2FudmFzKCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7IGdhbWUubGF1bmNoKCl9fSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9