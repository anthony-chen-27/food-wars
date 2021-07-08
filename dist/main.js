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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9raW5nLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL25vcm1hbGRpc3QuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvcG9ydGFsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFsbCIsImN0eCIsIngiLCJ5IiwidngiLCJ2eSIsInJhZCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJhYnMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIkJvcmRlciIsImltZyIsImJhbGwiLCJ1cGRhdGVWZWMiLCJ1cGRhdGVQb3MiLCJkcmF3SW1hZ2UiLCJHYW1lIiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtb3VzZVgiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldE1vdXNlUG9zaXRpb24iLCJsb2FkSW1hZ2VzIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5pdCIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsInBhcnNlSW50IiwiY29udHJvbCIsImNoYW5nZVBvcyIsImxhdW5jaGVkIiwiYXJyIiwiY2FsbGJhY2siLCJpbWFnZXMiLCJsb2FkZWRJbWFnZUNvdW50IiwiaSIsImxlbmd0aCIsIkltYWdlIiwib25sb2FkIiwiaW1hZ2VMb2FkZWQiLCJzcmMiLCJjbGVhckNhbnZhcyIsInVwZGF0ZSIsIm9ic3RhY2xlcyIsImZvckVhY2giLCJvYmoiLCJvdXRvZkJvdW5kcyIsInJlc2V0R2FtZSIsImNoZWNrQ29sbGlzaW9uIiwic2NvcmUiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImxpZmUiLCJkcmF3IiwiY3JlYXRlT2JqZWN0cyIsIkNvbnRyb2wiLCJOb3JtYWxkaXN0IiwiUG9ydGFsIiwiUGxhdGZvcm0iLCJLaW5nIiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiZGlzdHIiLCJkaXN0bCIsInZDb2xsaXNpb24iLCJkaXN0YW5jZSIsInNxcnQiLCJ2Q29sbGlzaW9uTm9ybSIsIm5vcm1hbERpc3QiLCJvYmplY3RzIiwiczEiLCJyYW5kb20iLCJzMiIsInMzIiwicHVzaCIsIk9ic3RhY2xlIiwiaGl0IiwidHlwZSIsInVzZWQiLCJ1c2VQb3J0YWwiLCJzZXRUaW1lb3V0IiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImNvZGUiLCJsYXVuY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixnQkFBWUMsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBC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USxDQUFDTSxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDQyxDQUFELEVBQU87QUFBQyxRQUFJQSxDQUFDLENBQUNtRSxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUFFRixVQUFJLENBQUNHLE1BQUw7QUFBYztBQUFDLEdBQXZGO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgdngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnJhZCA9IDVcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxuXHJcbiAgICBvdXRvZkJvdW5kcygpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IE1hdGguYWJzKHRoaXMudngpIFxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnJhZFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5jdHguY2FudmFzLndpZHRoIC0gdGhpcy5yYWQpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC1NYXRoLmFicyh0aGlzLnZ4KVxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmN0eC5jYW52YXMud2lkdGggLSB0aGlzLnJhZFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy52eSA9IE1hdGguYWJzKHRoaXMudnkpIFxyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnJhZFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLy8gT3V0IG9mIGJvdW5kcyBvbiBib3R0b21cclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jdHguY2FudmFzLmhlaWdodCAtIHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZ5KSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy52eSAqPSAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnZ4KSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy52eCAqPSAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWModngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy52eSA9IHZ5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eCBcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxsIiwiY2xhc3MgQm9yZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgaW1nKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSAzMDBcclxuICAgICAgICB0aGlzLnkgPSA4NTBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIwXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkgJiYgYmFsbC55IC0gYmFsbC5yYWQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgYmFsbC54ICsgYmFsbC5yYWQgPj0gdGhpcy54IC0gdGhpcy53aWR0aCAvIDIgJiYgYmFsbC54IC0gYmFsbC5yYWQ8IHRoaXMueCArIHRoaXMud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWxsLnggPCB0aGlzLngpIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKC0xLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoMS4xICogTWF0aC5hYnMoYmFsbC52eCksIC0xICogYmFsbC52eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcyhiYWxsLngsIHRoaXMueSAtIGJhbGwucmFkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQb3MoeCkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54IC0gdGhpcy53aWR0aCAvIDIsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3JkZXIiLCJpbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbnRyb2wnXG5pbXBvcnQgTm9ybWFsZGlzdCBmcm9tICcuL25vcm1hbGRpc3QnXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vcG9ydGFsJ1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSdcbmltcG9ydCBLaW5nIGZyb20gJy4va2luZydcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gNjAwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDkwMDtcbiAgICB0aGlzLm1vdXNlWCA9IDUwO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4gdGhpcy5zZXRNb3VzZVBvc2l0aW9uKGUpLCBmYWxzZSk7XG4gICAgXG4gICAgdGhpcy5sb2FkSW1hZ2VzKFtcbiAgICAgIFsnc3Vid2F5JywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vc00yVmNYQS5wbmcnXSxcbiAgICAgIFsncG9ydGFsJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vbkxTUFJ3Qi5wbmcnXSxcbiAgICAgIFsncG9ydGFsMScsICdodHRwczovL2kuaW1ndXIuY29tLzBjd1poWW8ucG5nJ10sXG4gICAgICBbJ21jZCcsICdodHRwczovL2kuaW1ndXIuY29tL010c2pKR3QucG5nJ10sXG4gICAgICBbJ2tmYycsICdodHRwczovL3BuZ2ltZy5jb20vdXBsb2Fkcy9rZmNfZm9vZC9rZmNfZm9vZF9QTkczMC5wbmcnXSxcbiAgICAgIFsncGl6emEnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9mRHpSa1NxLnBuZyddLFxuICAgICAgWydjaGlwb3RsZScsICdodHRwczovL3d3dy52aXBwbmcuY29tL3BuZy9mdWxsLzI2Ny0yNjczMTYxX2J1cnJpdG8tYm93bC1idXJyaXRvLWJvd2wtc2lzaWcucG5nJ10sXG4gICAgICBbJ2tpbmcnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9ZRDlzbTMxLnBuZyddXG4gICAgXSwgKCkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpKVxuICAgIHRoaXMuaW5pdCgpIFxuICB9XG5cbiAgc2V0TW91c2VQb3NpdGlvbihlKSB7XG4gICAgdmFyIHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdFxuICAgIHRoaXMueCA9IHBhcnNlSW50KHgpXG4gICAgdGhpcy5jb250cm9sLmNoYW5nZVBvcyh0aGlzLngpXG4gICAgaWYgKCF0aGlzLmxhdW5jaGVkKSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlUG9zKHRoaXMueCwgdGhpcy5iYWxsLnkpXG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlcyhhcnIsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgICB2YXIgbG9hZGVkSW1hZ2VDb3VudCA9IDA7XG5cbiAgICAvLyBNYWtlIHN1cmUgYXJyIGlzIGFjdHVhbGx5IGFuIGFycmF5IGFuZCBhbnkgb3RoZXIgZXJyb3IgY2hlY2tpbmdcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGltYWdlTG9hZGVkO1xuICAgICAgICBpbWcuc3JjID0gYXJyW2ldWzFdO1xuICAgICAgICB0aGlzLmltYWdlc1thcnJbaV1bMF1dID0gaW1nXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW1hZ2VMb2FkZWQoZSkge1xuICAgICAgICBsb2FkZWRJbWFnZUNvdW50Kys7XG4gICAgICAgIGlmIChsb2FkZWRJbWFnZUNvdW50ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmNsZWFyQ2FudmFzKClcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZSgpXG4gICAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKChvYmopID0+IG9iai51cGRhdGUoKSlcbiAgICAgIGlmICh0aGlzLmJhbGwub3V0b2ZCb3VuZHMoKSkge1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpXG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udHJvbC5jaGVja0NvbGxpc2lvbih0aGlzLmJhbGwpXG4gICAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKChvYmopID0+IHRoaXMuc2NvcmUgKz0gb2JqLmNoZWNrQ29sbGlzaW9uKHRoaXMuYmFsbCkpXG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLmlubmVySFRNTCA9IHRoaXMuc2NvcmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZScpLmlubmVySFRNTCA9IHRoaXMubGlmZVxuICAgIHRoaXMuYmFsbC5kcmF3KClcbiAgICB0aGlzLmNvbnRyb2wuZHJhdygpXG4gICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiBvYmouZHJhdygpKVxuICAgIFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICB9XG5cbiAgcmVzZXRHYW1lKCkge1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpXG4gICAgdGhpcy5sYXVuY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5saWZlIC09IDFcbiAgICBpZiAodGhpcy5saWZlID09IDApIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT2JqZWN0cygpIHtcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmN0eCwgMzAwLCA4MDAsIDAsIDApXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5jdHgsIHRoaXMuaW1hZ2VzWydzdWJ3YXknXSlcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtcbiAgICAgIG5ldyBOb3JtYWxkaXN0KHRoaXMuY3R4LCAzMDAsIDMwMCwgW3RoaXMuaW1hZ2VzWydtY2QnXSwgdGhpcy5pbWFnZXNbJ2tmYyddLCB0aGlzLmltYWdlc1sncGl6emEnXV0pLCBcbiAgICAgIG5ldyBQb3J0YWwodGhpcy5jdHgsIDUwLCA3MDAsIDYwLCAwLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksIFxuICAgICAgbmV3IFBvcnRhbCh0aGlzLmN0eCwgNTAwLCAxMDAsIDYwLCAxLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksXG4gICAgICBuZXcgUGxhdGZvcm0odGhpcy5jdHgsIDAsIDIwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IFBsYXRmb3JtKHRoaXMuY3R4LCAyNTAsIDEwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IEtpbmcodGhpcy5jdHgsIDU1MCwgNjAsIDIwLCB0aGlzLmltYWdlc1sna2luZyddKVxuICAgIF1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVPYmplY3RzKClcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMubGF1bmNoZWQgPSBmYWxzZVxuICAgIHRoaXMubGlmZSA9IDNcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmFwcGVuZCh0aGlzLmNhbnZhcylcbiAgfVxuXG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxhdW5jaCgpIHtcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVWZWMoMCwgLTQuNSlcbiAgICAgIHRoaXMubGF1bmNoZWQgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBLaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkLCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyAyMFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gMjBcclxuICAgICAgICB0aGlzLnZ4ID0gMC41XHJcbiAgICAgICAgdGhpcy5yYWQgPSByYWRcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnggLSB0aGlzLnJhZCwgdGhpcy55IC0gdGhpcy5yYWQsIHRoaXMucmFkICogMiwgdGhpcy5yYWQgKiAyKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5kaXN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCB0aGlzLmRpc3RyKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoKHRoaXMueCAtIGJhbGwueCkgKiogMiArICh0aGlzLnkgLSBiYWxsLnkpICoqIDIgPD0gKHRoaXMucmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uID0ge3g6IGJhbGwueCAtIHRoaXMueCwgeTogYmFsbC55IC0gdGhpcy55fVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGJhbGwueC10aGlzLngpICoqIDIgKyAoYmFsbC55LXRoaXMueSkgKiogMilcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0ge3g6IHZDb2xsaXNpb24ueCAvIGRpc3RhbmNlLCB5OiB2Q29sbGlzaW9uLnkgLyBkaXN0YW5jZX0gXHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKDYgKiB2Q29sbGlzaW9uTm9ybS54LCA2ICogKHZDb2xsaXNpb25Ob3JtLnkgPyB2Q29sbGlzaW9uTm9ybS55IDogMC4zKSlcclxuICAgICAgICAgICAgcmV0dXJuIDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgS2luZyIsImltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJ1xyXG5cclxuY2xhc3Mgbm9ybWFsRGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXVxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vVG9wXHJcbiAgICAgICAgY29uc3QgczEgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczIgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczMgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSAtIDc1LCAyMCwgdGhpcy5pbWcsIHMxKSlcclxuICAgICAgICAvL01pZFxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gOTAsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggKyA5MCwgdGhpcy55LCAyMCwgdGhpcy5pbWcsIHMyKSlcclxuICAgICAgICAvL0JvdHRvbVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gMTgwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLSA5MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgOTAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDE4MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBsZXQgc2NvcmUgPSAwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gc2NvcmUgKz0gb2JqLmNoZWNrQ29sbGlzaW9uKGJhbGwpKVxyXG4gICAgICAgIHJldHVybiBzY29yZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3JtYWxEaXN0IiwiY2xhc3MgT2JzdGFjbGUge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIGltZywgdngpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyA0MFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gNDBcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMuaGl0ID0gMFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWdbdGhpcy5oaXQgJSAzXSwgdGhpcy54IC0gdGhpcy5yYWQsIHRoaXMueSAtIHRoaXMucmFkLCB0aGlzLnJhZCAqIDIsIHRoaXMucmFkICogMilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuZGlzdGwpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgdGhpcy5kaXN0cikge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggLSBiYWxsLngpICoqIDIgKyAodGhpcy55IC0gYmFsbC55KSAqKiAyIDw9ICh0aGlzLnJhZCArIGJhbGwucmFkKSAqKiAyICkge1xyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHt4OiBiYWxsLnggLSB0aGlzLngsIHk6IGJhbGwueSAtIHRoaXMueX1cclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChiYWxsLngtdGhpcy54KSAqKiAyICsgKGJhbGwueS10aGlzLnkpICoqIDIpXHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uTm9ybSA9IHt4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2V9IFxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyg2ICogdkNvbGxpc2lvbk5vcm0ueCwgNiAqICh2Q29sbGlzaW9uTm9ybS55ID8gdkNvbGxpc2lvbk5vcm0ueSA6IDAuMykpXHJcbiAgICAgICAgICAgIHRoaXMuaGl0ICs9IDFcclxuICAgICAgICAgICAgcmV0dXJuIDUgKiAodGhpcy5oaXQgJSAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGUiLCJjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkgJiYgYmFsbC55IC0gYmFsbC5yYWQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgYmFsbC54ICsgYmFsbC5yYWQgPj0gdGhpcy54ICYmIGJhbGwueCAtIGJhbGwucmFkPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKChiYWxsLnZ4ID8gLTEgKiBiYWxsLnZ4IDogLTMpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIHJldHVybiA1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm0iLCJjbGFzcyBQb3J0YWwge1xyXG4gICAgLy9UeXBlID09IDAsIHRvcCBwb3J0YWwsIHR5cGUgPT0gMSwgYm90dG9tIHBvcnRhbFxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIHR5cGUsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDBcclxuICAgICAgICB0aGlzLnVzZVBvcnRhbCA9IHRoaXMudXNlUG9ydGFsLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCArIHRoaXMucmFkIC8gMlxyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnkgKyB0aGlzLnJhZCAvIDJcclxuICAgICAgICBjb25zdCByYWQgPSB0aGlzLnJhZCAvIDJcclxuICAgICAgICBpZiAoKHggLSBiYWxsLngpICoqIDIgKyAoeSAtIGJhbGwueSkgKiogMiA8PSAocmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKDU2MCwgMTY1KVxyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoTWF0aC5yYW5kb20oKSAqIDYgLSAzLCAzLjUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcygxMTAsIDY5OSlcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKE1hdGgucmFuZG9tKCkgKiA2IC0gMywgLTMuNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVzZVBvcnRhbCgpXHJcbiAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlUG9ydGFsKCkge1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDFcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VkID0gMFxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nW3RoaXMudXNlZF0sIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgdGhpcy5yYWQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0YWwiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmNyZWF0ZUNhbnZhcygpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYgKGUuY29kZSA9PT0gJ1NwYWNlJykgeyBnYW1lLmxhdW5jaCgpfX0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==