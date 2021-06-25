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
    this.loadImages([['subway', 'https://i.imgur.com/sM2VcXA.png'], ['portal', 'https://lh3.googleusercontent.com/proxy/bTXLqxbMcvd9mdyyIBWFOPkUtW6zt2AEKF_LI5YwHYZNFxh1z1pqoqxx2f-zVSQhwknxUPdGG-wbFJAfLg5x737zBMO8fJD9RK_7yetLqq2lIzoeyw'], ['portal1', 'https://lh3.googleusercontent.com/proxy/tBnt4T0eQj2ktAZpqeQ1sP5t5Cj518DQnbplslTQkHjXLCnKZ1gRrVGtdmruYuEGTk7fWQxrWTkhOQqlh1gXVogANO7S2ACQeNkWoNMeM6TaZpZGln-KTLBkYn_qejY3j4rBew'], ['mcd', 'http://assets.stickpng.com/images/5882482de81acb96424ffaac.png'], ['kfc', 'https://pngimg.com/uploads/kfc_food/kfc_food_PNG30.png'], ['pizza', 'https://lh3.googleusercontent.com/proxy/vuJhaOGdJ11fQZvQy4AIuGtc9Hws5PGS_pkwd4aYPkcyaSN67U0voDp0nZ1YVrhueUZ1VAjGb82LhmCj1N_MtsDpL3hYR4F6kKeXZEzycXQbEzJVVnbeEb6HnK5SIubSozwWuk9fIWBWH98rdGuX4Q'], ['chipotle', 'https://www.vippng.com/png/full/267-2673161_burrito-bowl-burrito-bowl-sisig.png']], function () {
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
      this.obstacles = [new _normaldist__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, 300, 300, [this.images['mcd'], this.images['kfc'], this.images['pizza']]), new _portal__WEBPACK_IMPORTED_MODULE_3__.default(this.ctx, 50, 700, 60, 0, [this.images['portal'], this.images['portal1']]), new _portal__WEBPACK_IMPORTED_MODULE_3__.default(this.ctx, 500, 100, 60, 1, [this.images['portal'], this.images['portal1']]), new _platform__WEBPACK_IMPORTED_MODULE_4__.default(this.ctx, 0, 200, 50, 120, this.images['chipotle']), new _platform__WEBPACK_IMPORTED_MODULE_4__.default(this.ctx, 250, 100, 50, 120, this.images['chipotle']), new _platform__WEBPACK_IMPORTED_MODULE_4__.default(this.ctx, 480, 500, 50, 120, this.images['chipotle'])];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9ub3JtYWxkaXN0LmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL3BvcnRhbC5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhbGwiLCJjdHgiLCJ4IiwieSIsInZ4IiwidnkiLCJyYWQiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYWJzIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJCb3JkZXIiLCJpbWciLCJiYWxsIiwidXBkYXRlVmVjIiwidXBkYXRlUG9zIiwiZHJhd0ltYWdlIiwiR2FtZSIsInByb3BzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibW91c2VYIiwiZ2V0Q29udGV4dCIsImFuaW1hdGUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRNb3VzZVBvc2l0aW9uIiwibG9hZEltYWdlcyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImluaXQiLCJyZWN0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJwYXJzZUludCIsImNvbnRyb2wiLCJjaGFuZ2VQb3MiLCJsYXVuY2hlZCIsImFyciIsImNhbGxiYWNrIiwiaW1hZ2VzIiwibG9hZGVkSW1hZ2VDb3VudCIsImkiLCJsZW5ndGgiLCJJbWFnZSIsIm9ubG9hZCIsImltYWdlTG9hZGVkIiwic3JjIiwiY2xlYXJDYW52YXMiLCJ1cGRhdGUiLCJvYnN0YWNsZXMiLCJmb3JFYWNoIiwib2JqIiwib3V0b2ZCb3VuZHMiLCJyZXNldEdhbWUiLCJjaGVja0NvbGxpc2lvbiIsInNjb3JlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJsaWZlIiwiZHJhdyIsImNyZWF0ZU9iamVjdHMiLCJDb250cm9sIiwiTm9ybWFsZGlzdCIsIlBvcnRhbCIsIlBsYXRmb3JtIiwiYXBwZW5kIiwiY2xlYXJSZWN0Iiwibm9ybWFsRGlzdCIsIm9iamVjdHMiLCJzMSIsInJhbmRvbSIsInMyIiwiczMiLCJwdXNoIiwiT2JzdGFjbGUiLCJkaXN0ciIsImRpc3RsIiwiaGl0IiwidkNvbGxpc2lvbiIsImRpc3RhbmNlIiwic3FydCIsInZDb2xsaXNpb25Ob3JtIiwidHlwZSIsInVzZWQiLCJ1c2VQb3J0YWwiLCJzZXRUaW1lb3V0IiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImNvZGUiLCJsYXVuY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixnQkFBWUMsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ssR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7OztXQUVELGdCQUFPO0FBQ0gsV0FBS0osR0FBTCxDQUFTTSxTQUFUO0FBQ0EsV0FBS04sR0FBTCxDQUFTTyxHQUFULENBQWEsS0FBS04sQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsS0FBS0csR0FBbEMsRUFBdUMsQ0FBdkMsRUFBMENHLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXBELEVBQXVELElBQXZEO0FBQ0EsV0FBS1QsR0FBTCxDQUFTVSxTQUFUO0FBQ0EsV0FBS1YsR0FBTCxDQUFTVyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsV0FBS1gsR0FBTCxDQUFTWSxJQUFUO0FBQ0g7OztXQUVELHVCQUFjO0FBQ1YsVUFBSSxLQUFLWCxDQUFMLEdBQVMsS0FBS0ksR0FBbEIsRUFBdUI7QUFDbkIsYUFBS0YsRUFBTCxHQUFVSyxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLVixFQUFkLENBQVY7QUFDQSxhQUFLRixDQUFMLEdBQVMsS0FBS0ksR0FBZDtBQUNIOztBQUNELFVBQUksS0FBS0osQ0FBTCxHQUFTLEtBQUtELEdBQUwsQ0FBU2MsTUFBVCxDQUFnQkMsS0FBaEIsR0FBd0IsS0FBS1YsR0FBMUMsRUFBK0M7QUFDM0MsYUFBS0YsRUFBTCxHQUFVLENBQUNLLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtWLEVBQWQsQ0FBWDtBQUNBLGFBQUtGLENBQUwsR0FBUyxLQUFLRCxHQUFMLENBQVNjLE1BQVQsQ0FBZ0JDLEtBQWhCLEdBQXdCLEtBQUtWLEdBQXRDO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLSCxDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNaLGFBQUtFLEVBQUwsR0FBVUksSUFBSSxDQUFDSyxHQUFMLENBQVMsS0FBS1QsRUFBZCxDQUFWO0FBQ0EsYUFBS0YsQ0FBTCxHQUFTLEtBQUtHLEdBQWQ7QUFDSCxPQVpTLENBYVY7OztBQUNBLFVBQUksS0FBS0gsQ0FBTCxHQUFTLEtBQUtGLEdBQUwsQ0FBU2MsTUFBVCxDQUFnQkUsTUFBaEIsR0FBeUIsS0FBS1gsR0FBM0MsRUFBZ0Q7QUFDNUMsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSUcsSUFBSSxDQUFDSyxHQUFMLENBQVMsS0FBS1QsRUFBZCxJQUFvQixDQUF4QixFQUEyQjtBQUN2QixhQUFLQSxFQUFMLElBQVcsQ0FBWDtBQUNIOztBQUNELFVBQUlJLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtWLEVBQWQsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsYUFBS0EsRUFBTCxJQUFXLENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFFSDs7O1dBRUQsbUJBQVVBLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUNkLFdBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7V0FFRCxtQkFBVUgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ1osV0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsV0FBS0QsQ0FBTCxJQUFVLEtBQUtFLEVBQWY7QUFDQSxXQUFLRCxDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNIOzs7Ozs7QUFHTCxpRUFBZUwsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdETWtCLE07QUFDRixrQkFBWWpCLEdBQVosRUFBaUJrQixHQUFqQixFQUFzQjtBQUFBOztBQUNsQixTQUFLbEIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtjLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0QsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLRyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7OztXQUVELHdCQUFlQyxJQUFmLEVBQXFCO0FBQ2pCLFVBQUlBLElBQUksQ0FBQ2pCLENBQUwsR0FBU2lCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSCxDQUExQixJQUErQmlCLElBQUksQ0FBQ2pCLENBQUwsR0FBU2lCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSCxDQUFMLEdBQVMsS0FBS2MsTUFBbEUsSUFBNEVHLElBQUksQ0FBQ2xCLENBQUwsR0FBU2tCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSixDQUFMLEdBQVMsS0FBS2MsS0FBTCxHQUFhLENBQXZILElBQTRISSxJQUFJLENBQUNsQixDQUFMLEdBQVNrQixJQUFJLENBQUNkLEdBQWQsR0FBbUIsS0FBS0osQ0FBTCxHQUFTLEtBQUtjLEtBQUwsR0FBYSxDQUF6SyxFQUE0SztBQUN4SyxZQUFJSSxJQUFJLENBQUNsQixDQUFMLEdBQVMsS0FBS0EsQ0FBbEIsRUFBcUI7QUFDakJrQixjQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFDLEdBQUQsR0FBT1osSUFBSSxDQUFDSyxHQUFMLENBQVNNLElBQUksQ0FBQ2hCLEVBQWQsQ0FBdEIsRUFBeUMsQ0FBQyxDQUFELEdBQUtnQixJQUFJLENBQUNmLEVBQW5EO0FBQ0gsU0FGRCxNQUVPO0FBQ0hlLGNBQUksQ0FBQ0MsU0FBTCxDQUFlLE1BQU1aLElBQUksQ0FBQ0ssR0FBTCxDQUFTTSxJQUFJLENBQUNoQixFQUFkLENBQXJCLEVBQXdDLENBQUMsQ0FBRCxHQUFLZ0IsSUFBSSxDQUFDZixFQUFsRDtBQUNIOztBQUNEZSxZQUFJLENBQUNFLFNBQUwsQ0FBZUYsSUFBSSxDQUFDbEIsQ0FBcEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTaUIsSUFBSSxDQUFDZCxHQUFyQztBQUNIO0FBQ0o7OztXQUVELG1CQUFVSixDQUFWLEVBQWE7QUFDVCxXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLRCxHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUtKLEdBQXhCLEVBQTZCLEtBQUtqQixDQUFMLEdBQVMsS0FBS2MsS0FBTCxHQUFhLENBQW5ELEVBQXNELEtBQUtiLENBQTNELEVBQThELEtBQUthLEtBQW5FLEVBQTBFLEtBQUtDLE1BQS9FO0FBQ0g7Ozs7OztBQUlMLGlFQUFlQyxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTU0sSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFNBQUtWLE1BQUwsR0FBY1csUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLWixNQUFMLENBQVlDLEtBQVosR0FBb0IsR0FBcEI7QUFDQSxTQUFLRCxNQUFMLENBQVlFLE1BQVosR0FBcUIsR0FBckI7QUFDQSxTQUFLVyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUszQixHQUFMLEdBQVcsS0FBS2MsTUFBTCxDQUFZYyxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLaEIsTUFBTCxDQUFZaUIsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQ0MsQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDQyxnQkFBTCxDQUFzQkQsQ0FBdEIsQ0FBUDtBQUFBLEtBQTFDLEVBQTJFLEtBQTNFO0FBRUEsU0FBS0UsVUFBTCxDQUFnQixDQUNkLENBQUMsUUFBRCxFQUFXLGlDQUFYLENBRGMsRUFFZCxDQUFDLFFBQUQsRUFBVyw0SkFBWCxDQUZjLEVBR2QsQ0FBQyxTQUFELEVBQVksZ0xBQVosQ0FIYyxFQUlkLENBQUMsS0FBRCxFQUFRLGdFQUFSLENBSmMsRUFLZCxDQUFDLEtBQUQsRUFBUSx3REFBUixDQUxjLEVBTWQsQ0FBQyxPQUFELEVBQVUsZ01BQVYsQ0FOYyxFQU9kLENBQUMsVUFBRCxFQUFhLGlGQUFiLENBUGMsQ0FBaEIsRUFRRztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkIsS0FBSSxDQUFDUCxPQUFsQyxDQUFOO0FBQUEsS0FSSDtBQVNBLFNBQUtRLElBQUw7QUFDRDs7OztXQUVELDBCQUFpQkwsQ0FBakIsRUFBb0I7QUFDbEIsVUFBSU0sSUFBSSxHQUFHTixDQUFDLENBQUNPLE1BQUYsQ0FBU0MscUJBQVQsRUFBWDtBQUNBLFVBQUl2QyxDQUFDLEdBQUcrQixDQUFDLENBQUNTLE9BQUYsR0FBWUgsSUFBSSxDQUFDSSxJQUF6QjtBQUNBLFdBQUt6QyxDQUFMLEdBQVMwQyxRQUFRLENBQUMxQyxDQUFELENBQWpCO0FBQ0EsV0FBSzJDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixLQUFLNUMsQ0FBNUI7O0FBQ0EsVUFBSSxDQUFDLEtBQUs2QyxRQUFWLEVBQW9CO0FBQ2xCLGFBQUszQixJQUFMLENBQVVFLFNBQVYsQ0FBb0IsS0FBS3BCLENBQXpCLEVBQTRCLEtBQUtrQixJQUFMLENBQVVqQixDQUF0QztBQUNEO0FBQ0Y7OztXQUVELG9CQUFXNkMsR0FBWCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeEIsV0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QixDQUZ3QixDQUl4Qjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBb0M7QUFDaEMsWUFBSWpDLEdBQUcsR0FBRyxJQUFJbUMsS0FBSixFQUFWO0FBQ0FuQyxXQUFHLENBQUNvQyxNQUFKLEdBQWFDLFdBQWI7QUFDQXJDLFdBQUcsQ0FBQ3NDLEdBQUosR0FBVVQsR0FBRyxDQUFDSSxDQUFELENBQUgsQ0FBTyxDQUFQLENBQVY7QUFDQSxhQUFLRixNQUFMLENBQVlGLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFILENBQU8sQ0FBUCxDQUFaLElBQXlCakMsR0FBekI7QUFDSDs7QUFFRCxlQUFTcUMsV0FBVCxDQUFxQnZCLENBQXJCLEVBQXdCO0FBQ3BCa0Isd0JBQWdCOztBQUNoQixZQUFJQSxnQkFBZ0IsSUFBSUgsR0FBRyxDQUFDSyxNQUE1QixFQUFvQztBQUNoQ0osa0JBQVE7QUFDWDtBQUNKO0FBQ0o7OztXQUVDLG1CQUFVO0FBQUE7O0FBQ1IsV0FBS1MsV0FBTDs7QUFDQSxVQUFJLEtBQUtYLFFBQVQsRUFBbUI7QUFDakIsYUFBSzNCLElBQUwsQ0FBVXVDLE1BQVY7QUFDQSxhQUFLQyxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNILE1BQUosRUFBVDtBQUFBLFNBQXZCOztBQUNBLFlBQUksS0FBS3ZDLElBQUwsQ0FBVTJDLFdBQVYsRUFBSixFQUE2QjtBQUMzQixlQUFLQyxTQUFMO0FBQ0EsaUJBQU81QixNQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtQLE9BQWxDLENBQVA7QUFDRDs7QUFDRCxhQUFLZSxPQUFMLENBQWFvQixjQUFiLENBQTRCLEtBQUs3QyxJQUFqQztBQUNBLGFBQUt3QyxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTLE1BQUksQ0FBQ0ksS0FBTCxJQUFjSixHQUFHLENBQUNHLGNBQUosQ0FBbUIsTUFBSSxDQUFDN0MsSUFBeEIsQ0FBdkI7QUFBQSxTQUF2QjtBQUNEOztBQUNETSxjQUFRLENBQUN5QyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxTQUFqQyxHQUE2QyxLQUFLRixLQUFsRDtBQUNBeEMsY0FBUSxDQUFDeUMsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsU0FBaEMsR0FBNEMsS0FBS0MsSUFBakQ7QUFDQSxXQUFLakQsSUFBTCxDQUFVa0QsSUFBVjtBQUNBLFdBQUt6QixPQUFMLENBQWF5QixJQUFiO0FBQ0EsV0FBS1YsU0FBTCxDQUFlQyxPQUFmLENBQXVCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNRLElBQUosRUFBVDtBQUFBLE9BQXZCO0FBRUFsQyxZQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtQLE9BQWxDO0FBQ0Q7OztXQUVELHFCQUFZO0FBQ1YsV0FBS3lDLGFBQUw7QUFDQSxXQUFLeEIsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFdBQUtzQixJQUFMLElBQWEsQ0FBYjs7QUFDQSxVQUFJLEtBQUtBLElBQUwsR0FBWSxDQUFoQixFQUFtQjtBQUNqQixhQUFLL0IsSUFBTDtBQUNEO0FBQ0Y7OztXQUVELHlCQUFnQjtBQUNkLFdBQUtsQixJQUFMLEdBQVksSUFBSXBCLDBDQUFKLENBQVMsS0FBS0MsR0FBZCxFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxDQUFaO0FBQ0EsV0FBSzRDLE9BQUwsR0FBZSxJQUFJMkIsNkNBQUosQ0FBWSxLQUFLdkUsR0FBakIsRUFBc0IsS0FBS2lELE1BQUwsQ0FBWSxRQUFaLENBQXRCLENBQWY7QUFDQSxXQUFLVSxTQUFMLEdBQWlCLENBQ2YsSUFBSWEsZ0RBQUosQ0FBZSxLQUFLeEUsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBQyxLQUFLaUQsTUFBTCxDQUFZLEtBQVosQ0FBRCxFQUFxQixLQUFLQSxNQUFMLENBQVksS0FBWixDQUFyQixFQUF5QyxLQUFLQSxNQUFMLENBQVksT0FBWixDQUF6QyxDQUFuQyxDQURlLEVBRWYsSUFBSXdCLDRDQUFKLENBQVcsS0FBS3pFLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLEdBQXpCLEVBQThCLEVBQTlCLEVBQWtDLENBQWxDLEVBQXFDLENBQUMsS0FBS2lELE1BQUwsQ0FBWSxRQUFaLENBQUQsRUFBd0IsS0FBS0EsTUFBTCxDQUFZLFNBQVosQ0FBeEIsQ0FBckMsQ0FGZSxFQUdmLElBQUl3Qiw0Q0FBSixDQUFXLEtBQUt6RSxHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixFQUEvQixFQUFtQyxDQUFuQyxFQUFzQyxDQUFDLEtBQUtpRCxNQUFMLENBQVksUUFBWixDQUFELEVBQXdCLEtBQUtBLE1BQUwsQ0FBWSxTQUFaLENBQXhCLENBQXRDLENBSGUsRUFJZixJQUFJeUIsOENBQUosQ0FBYSxLQUFLMUUsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBL0IsRUFBbUMsR0FBbkMsRUFBd0MsS0FBS2lELE1BQUwsQ0FBWSxVQUFaLENBQXhDLENBSmUsRUFLZixJQUFJeUIsOENBQUosQ0FBYSxLQUFLMUUsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBakMsRUFBcUMsR0FBckMsRUFBMEMsS0FBS2lELE1BQUwsQ0FBWSxVQUFaLENBQTFDLENBTGUsRUFNZixJQUFJeUIsOENBQUosQ0FBYSxLQUFLMUUsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBakMsRUFBcUMsR0FBckMsRUFBMEMsS0FBS2lELE1BQUwsQ0FBWSxVQUFaLENBQTFDLENBTmUsQ0FBakI7QUFRRDs7O1dBRUQsZ0JBQU87QUFDTCxXQUFLcUIsYUFBTDtBQUNBLFdBQUtMLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS25CLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLc0IsSUFBTCxHQUFZLENBQVo7QUFDRDs7O1dBRUQsd0JBQWU7QUFDYjNDLGNBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NTLE1BQWhDLENBQXVDLEtBQUs3RCxNQUE1QztBQUNEOzs7V0FFRCx1QkFBYztBQUNaLFdBQUtkLEdBQUwsQ0FBUzRFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzlELE1BQUwsQ0FBWUMsS0FBckMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RDtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLFVBQUksS0FBSzhCLFFBQVQsRUFBbUI7QUFDakI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLM0IsSUFBTCxDQUFVQyxTQUFWLENBQW9CLENBQXBCLEVBQXVCLENBQUMsR0FBeEI7QUFDQSxhQUFLMEIsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0Y7Ozs7OztBQUdILGlFQUFldkIsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7O0lBRU1zRCxVO0FBQ0Ysc0JBQVk3RSxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJnQixHQUF2QixFQUE0QjtBQUFBOztBQUN4QixTQUFLbEIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBSzRFLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSzVELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUttQixJQUFMO0FBQ0g7Ozs7V0FFRCxnQkFBTztBQUNIO0FBQ0EsVUFBTTBDLEVBQUUsR0FBRyxDQUFDdkUsSUFBSSxDQUFDd0UsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUFyQixJQUEwQixFQUFyQztBQUNBLFVBQU1DLEVBQUUsR0FBRyxDQUFDekUsSUFBSSxDQUFDd0UsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUFyQixJQUEwQixFQUFyQztBQUNBLFVBQU1FLEVBQUUsR0FBRyxDQUFDMUUsSUFBSSxDQUFDd0UsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUFyQixJQUEwQixFQUFyQztBQUNBLFdBQUtGLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUtwRixHQUFsQixFQUF1QixLQUFLQyxDQUE1QixFQUErQixLQUFLQyxDQUFMLEdBQVMsRUFBeEMsRUFBNEMsRUFBNUMsRUFBZ0QsS0FBS2dCLEdBQXJELEVBQTBENkQsRUFBMUQsQ0FBbEIsRUFMRyxDQU1IOztBQUNBLFdBQUtELE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUtwRixHQUFsQixFQUF1QixLQUFLQyxDQUFMLEdBQVMsRUFBaEMsRUFBb0MsS0FBS0MsQ0FBekMsRUFBNEMsRUFBNUMsRUFBZ0QsS0FBS2dCLEdBQXJELEVBQTBEK0QsRUFBMUQsQ0FBbEI7QUFDQSxXQUFLSCxPQUFMLENBQWFLLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLcEYsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBNUIsRUFBK0IsS0FBS0MsQ0FBcEMsRUFBdUMsRUFBdkMsRUFBMkMsS0FBS2dCLEdBQWhELEVBQXFEK0QsRUFBckQsQ0FBbEI7QUFDQSxXQUFLSCxPQUFMLENBQWFLLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLcEYsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTLEVBQWhDLEVBQW9DLEtBQUtDLENBQXpDLEVBQTRDLEVBQTVDLEVBQWdELEtBQUtnQixHQUFyRCxFQUEwRCtELEVBQTFELENBQWxCLEVBVEcsQ0FVSDs7QUFDQSxXQUFLSCxPQUFMLENBQWFLLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLcEYsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTLEdBQWhDLEVBQXFDLEtBQUtDLENBQUwsR0FBUyxFQUE5QyxFQUFrRCxFQUFsRCxFQUFzRCxLQUFLZ0IsR0FBM0QsRUFBZ0VnRSxFQUFoRSxDQUFsQjtBQUNBLFdBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUtwRixHQUFsQixFQUF1QixLQUFLQyxDQUFMLEdBQVMsRUFBaEMsRUFBb0MsS0FBS0MsQ0FBTCxHQUFTLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEtBQUtnQixHQUExRCxFQUErRGdFLEVBQS9ELENBQWxCO0FBQ0EsV0FBS0osT0FBTCxDQUFhSyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBS3BGLEdBQWxCLEVBQXVCLEtBQUtDLENBQTVCLEVBQWdDLEtBQUtDLENBQUwsR0FBUyxFQUF6QyxFQUE2QyxFQUE3QyxFQUFpRCxLQUFLZ0IsR0FBdEQsRUFBMkRnRSxFQUEzRCxDQUFsQjtBQUNBLFdBQUtKLE9BQUwsQ0FBYUssSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUtwRixHQUFsQixFQUF1QixLQUFLQyxDQUFMLEdBQVMsRUFBaEMsRUFBb0MsS0FBS0MsQ0FBTCxHQUFTLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEtBQUtnQixHQUExRCxFQUErRGdFLEVBQS9ELENBQWxCO0FBQ0EsV0FBS0osT0FBTCxDQUFhSyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBS3BGLEdBQWxCLEVBQXVCLEtBQUtDLENBQUwsR0FBUyxHQUFoQyxFQUFxQyxLQUFLQyxDQUFMLEdBQVMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsS0FBS2dCLEdBQTNELEVBQWdFZ0UsRUFBaEUsQ0FBbEI7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLSixPQUFMLENBQWFsQixPQUFiLENBQXFCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNRLElBQUosRUFBVDtBQUFBLE9BQXJCO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsV0FBS1MsT0FBTCxDQUFhbEIsT0FBYixDQUFxQixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDSCxNQUFKLEVBQVQ7QUFBQSxPQUFyQjtBQUNIOzs7V0FFRCx3QkFBZXZDLElBQWYsRUFBcUI7QUFDakIsVUFBSThDLEtBQUssR0FBRyxDQUFaO0FBQ0EsV0FBS2EsT0FBTCxDQUFhbEIsT0FBYixDQUFxQixVQUFDQyxHQUFEO0FBQUEsZUFBU0ksS0FBSyxJQUFJSixHQUFHLENBQUNHLGNBQUosQ0FBbUI3QyxJQUFuQixDQUFsQjtBQUFBLE9BQXJCO0FBQ0EsYUFBTzhDLEtBQVA7QUFDSDs7Ozs7O0FBR0wsaUVBQWVZLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3Q01PLFE7QUFDRixvQkFBWXBGLEdBQVosRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkcsR0FBdkIsRUFBNEJhLEdBQTVCLEVBQWlDZixFQUFqQyxFQUFxQztBQUFBOztBQUNqQyxTQUFLSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLbUYsS0FBTCxHQUFhcEYsQ0FBQyxHQUFHLEVBQWpCO0FBQ0EsU0FBS3FGLEtBQUwsR0FBYXJGLENBQUMsR0FBRyxFQUFqQjtBQUNBLFNBQUtFLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtrRixHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtyRSxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7OztXQUVELGdCQUFPO0FBQ0gsV0FBS2xCLEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBS0osR0FBTCxDQUFTLEtBQUtxRSxHQUFMLEdBQVcsQ0FBcEIsQ0FBbkIsRUFBMkMsS0FBS3RGLENBQUwsR0FBUyxLQUFLSSxHQUF6RCxFQUE4RCxLQUFLSCxDQUFMLEdBQVMsS0FBS0csR0FBNUUsRUFBaUYsS0FBS0EsR0FBTCxHQUFXLENBQTVGLEVBQStGLEtBQUtBLEdBQUwsR0FBVyxDQUExRztBQUNIOzs7V0FFRCxrQkFBUztBQUNMLFVBQUksS0FBS0osQ0FBTCxHQUFTLEtBQUtxRixLQUFsQixFQUF5QjtBQUNyQixhQUFLbkYsRUFBTCxHQUFVLENBQUMsQ0FBRCxHQUFLLEtBQUtBLEVBQXBCO0FBQ0EsYUFBS0YsQ0FBTCxJQUFVLEtBQUtFLEVBQWY7QUFDSCxPQUhELE1BR08sSUFBSSxLQUFLRixDQUFMLEdBQVMsS0FBS29GLEtBQWxCLEVBQXlCO0FBQzVCLGFBQUtwRixDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNILE9BRk0sTUFFQTtBQUNILGFBQUtBLEVBQUwsR0FBVSxDQUFDLENBQUQsR0FBSyxLQUFLQSxFQUFwQjtBQUNBLGFBQUtGLENBQUwsSUFBVSxLQUFLRSxFQUFmO0FBQ0g7QUFDSjs7O1dBQ0Qsd0JBQWVnQixJQUFmLEVBQXFCO0FBQ2pCLFVBQUksU0FBQyxLQUFLbEIsQ0FBTCxHQUFTa0IsSUFBSSxDQUFDbEIsQ0FBZixFQUFxQixDQUFyQixhQUEwQixLQUFLQyxDQUFMLEdBQVNpQixJQUFJLENBQUNqQixDQUF4QyxFQUE4QyxDQUE5QyxjQUFvRCxLQUFLRyxHQUFMLEdBQVdjLElBQUksQ0FBQ2QsR0FBcEUsRUFBNEUsQ0FBNUUsQ0FBSixFQUFvRjtBQUNoRixZQUFJbUYsVUFBVSxHQUFHO0FBQUN2RixXQUFDLEVBQUVrQixJQUFJLENBQUNsQixDQUFMLEdBQVMsS0FBS0EsQ0FBbEI7QUFBcUJDLFdBQUMsRUFBRWlCLElBQUksQ0FBQ2pCLENBQUwsR0FBUyxLQUFLQTtBQUF0QyxTQUFqQjtBQUNBLFlBQUl1RixRQUFRLEdBQUdqRixJQUFJLENBQUNrRixJQUFMLENBQVUsU0FBQ3ZFLElBQUksQ0FBQ2xCLENBQUwsR0FBTyxLQUFLQSxDQUFiLEVBQW1CLENBQW5CLGFBQXdCa0IsSUFBSSxDQUFDakIsQ0FBTCxHQUFPLEtBQUtBLENBQXBDLEVBQTBDLENBQTFDLENBQVYsQ0FBZjtBQUNBLFlBQUl5RixjQUFjLEdBQUc7QUFBQzFGLFdBQUMsRUFBRXVGLFVBQVUsQ0FBQ3ZGLENBQVgsR0FBZXdGLFFBQW5CO0FBQTZCdkYsV0FBQyxFQUFFc0YsVUFBVSxDQUFDdEYsQ0FBWCxHQUFldUY7QUFBL0MsU0FBckI7QUFDQXRFLFlBQUksQ0FBQ0MsU0FBTCxDQUFlLElBQUl1RSxjQUFjLENBQUMxRixDQUFsQyxFQUFxQyxLQUFLMEYsY0FBYyxDQUFDekYsQ0FBZixHQUFtQnlGLGNBQWMsQ0FBQ3pGLENBQWxDLEdBQXNDLEdBQTNDLENBQXJDO0FBQ0EsYUFBS3FGLEdBQUwsSUFBWSxDQUFaO0FBQ0EsZUFBTyxLQUFLLEtBQUtBLEdBQUwsR0FBVyxDQUFoQixDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxDQUFQO0FBQ0g7Ozs7S0FHTDtBQUNBOzs7QUFDQSxpRUFBZUgsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNDTVYsUTtBQUNGLG9CQUFZMUUsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCYyxNQUF2QixFQUErQkQsS0FBL0IsRUFBc0NHLEdBQXRDLEVBQTJDO0FBQUE7O0FBQ3ZDLFNBQUtsQixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLYyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7OztXQUVELHdCQUFlQyxJQUFmLEVBQXFCO0FBQ2pCLFVBQUlBLElBQUksQ0FBQ2pCLENBQUwsR0FBU2lCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSCxDQUExQixJQUErQmlCLElBQUksQ0FBQ2pCLENBQUwsR0FBU2lCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSCxDQUFMLEdBQVMsS0FBS2MsTUFBbEUsSUFBNEVHLElBQUksQ0FBQ2xCLENBQUwsR0FBU2tCLElBQUksQ0FBQ2QsR0FBZCxJQUFxQixLQUFLSixDQUF0RyxJQUEyR2tCLElBQUksQ0FBQ2xCLENBQUwsR0FBU2tCLElBQUksQ0FBQ2QsR0FBZCxHQUFtQixLQUFLSixDQUFMLEdBQVMsS0FBS2MsS0FBaEosRUFBdUo7QUFDbkpJLFlBQUksQ0FBQ0MsU0FBTCxDQUFnQkQsSUFBSSxDQUFDaEIsRUFBTCxHQUFVLENBQUMsQ0FBRCxHQUFLZ0IsSUFBSSxDQUFDaEIsRUFBcEIsR0FBeUIsQ0FBQyxDQUExQyxFQUE4QyxDQUFDLENBQUQsR0FBS2dCLElBQUksQ0FBQ2YsRUFBeEQ7QUFDQSxlQUFPLENBQVA7QUFDSDs7QUFDRCxhQUFPLENBQVA7QUFDSDs7O1dBRUQsa0JBQVMsQ0FFUjs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLSixHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUtKLEdBQXhCLEVBQTZCLEtBQUtqQixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxLQUFLYSxLQUFsRCxFQUF5RCxLQUFLQyxNQUE5RDtBQUNIOzs7Ozs7QUFJTCxpRUFBZTBELFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1Qk1ELE07QUFDRjtBQUNBLGtCQUFZekUsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCRyxHQUF2QixFQUE0QnVGLElBQTVCLEVBQWtDMUUsR0FBbEMsRUFBdUM7QUFBQTs7QUFDbkMsU0FBS2xCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtHLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUt1RixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLMUUsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBSzJFLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVoRSxJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0g7Ozs7V0FFRCx3QkFBZVgsSUFBZixFQUFxQjtBQUNqQixVQUFNbEIsQ0FBQyxHQUFHLEtBQUtBLENBQUwsR0FBUyxLQUFLSSxHQUFMLEdBQVcsQ0FBOUI7QUFDQSxVQUFNSCxDQUFDLEdBQUcsS0FBS0EsQ0FBTCxHQUFTLEtBQUtHLEdBQUwsR0FBVyxDQUE5QjtBQUNBLFVBQU1BLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEdBQVcsQ0FBdkI7O0FBQ0EsVUFBSSxTQUFDSixDQUFDLEdBQUdrQixJQUFJLENBQUNsQixDQUFWLEVBQWdCLENBQWhCLGFBQXFCQyxDQUFDLEdBQUdpQixJQUFJLENBQUNqQixDQUE5QixFQUFvQyxDQUFwQyxjQUEwQ0csR0FBRyxHQUFHYyxJQUFJLENBQUNkLEdBQXJELEVBQTZELENBQTdELENBQUosRUFBcUU7QUFDakUsWUFBSSxLQUFLd0YsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLGlCQUFPLENBQVA7QUFDSDs7QUFDRCxZQUFJLEtBQUtELElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQnpFLGNBQUksQ0FBQ0UsU0FBTCxDQUFlLEdBQWYsRUFBb0IsR0FBcEI7QUFDQUYsY0FBSSxDQUFDQyxTQUFMLENBQWVaLElBQUksQ0FBQ3dFLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBbkMsRUFBc0MsR0FBdEM7QUFDSCxTQUhELE1BR087QUFDSDdELGNBQUksQ0FBQ0UsU0FBTCxDQUFlLEdBQWYsRUFBb0IsR0FBcEI7QUFDQUYsY0FBSSxDQUFDQyxTQUFMLENBQWVaLElBQUksQ0FBQ3dFLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBbkMsRUFBc0MsQ0FBQyxHQUF2QztBQUNIOztBQUNELGFBQUtjLFNBQUw7QUFDQSxlQUFPLENBQVA7QUFDSDs7QUFDRCxhQUFPLENBQVA7QUFDSDs7O1dBRUQscUJBQVk7QUFBQTs7QUFDUixXQUFLRCxJQUFMLEdBQVksQ0FBWjtBQUNBRSxnQkFBVSxDQUFDLFlBQU07QUFDYixhQUFJLENBQUNGLElBQUwsR0FBWSxDQUFaO0FBQ0gsT0FGUyxFQUVQLEtBRk8sQ0FBVjtBQUdIOzs7V0FFRCxrQkFBUyxDQUVSOzs7V0FFRCxnQkFBTztBQUNILFdBQUs3RixHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUtKLEdBQUwsQ0FBUyxLQUFLMkUsSUFBZCxDQUFuQixFQUF3QyxLQUFLNUYsQ0FBN0MsRUFBZ0QsS0FBS0MsQ0FBckQsRUFBd0QsS0FBS0csR0FBN0QsRUFBa0UsS0FBS0EsR0FBdkU7QUFDSDs7Ozs7O0FBSUwsaUVBQWVvRSxNQUFmLEU7Ozs7Ozs7Ozs7O0FDbkRBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBaEQsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFNaUUsSUFBSSxHQUFHLElBQUl6RSxrREFBSixFQUFiO0FBQ0F5RSxNQUFJLENBQUNDLFlBQUw7QUFDQXhFLFVBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQUMsUUFBSUEsQ0FBQyxDQUFDa0UsSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFBRUYsVUFBSSxDQUFDRyxNQUFMO0FBQWM7QUFBQyxHQUF2RjtBQUNELENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHZ4LCB2eSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy5yYWQgPSA1XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgb3V0b2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSBNYXRoLmFicyh0aGlzLnZ4KSBcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5yYWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAtIHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtTWF0aC5hYnModGhpcy52eClcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5jdHguY2FudmFzLndpZHRoIC0gdGhpcy5yYWRcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSBNYXRoLmFicyh0aGlzLnZ5KSBcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5yYWRcclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIE91dCBvZiBib3VuZHMgb24gYm90dG9tXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy52eSkgPCAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnkgKj0gMlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy52eCkgPCAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggKj0gMlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVjKHZ4LCB2eSkge1xyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvcyh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggXHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsbCIsImNsYXNzIEJvcmRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0gMzAwXHJcbiAgICAgICAgdGhpcy55ID0gODUwXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMFxyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDBcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoYmFsbC55ICsgYmFsbC5yYWQgPj0gdGhpcy55ICYmIGJhbGwueSAtIGJhbGwucmFkIDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIGJhbGwueCArIGJhbGwucmFkID49IHRoaXMueCAtIHRoaXMud2lkdGggLyAyICYmIGJhbGwueCAtIGJhbGwucmFkPCB0aGlzLnggKyB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoYmFsbC54IDwgdGhpcy54KSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYygtMS4xICogTWF0aC5hYnMoYmFsbC52eCksIC0xICogYmFsbC52eSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKDEuMSAqIE1hdGguYWJzKGJhbGwudngpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoYmFsbC54LCB0aGlzLnkgLSBiYWxsLnJhZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUG9zKHgpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCAtIHRoaXMud2lkdGggLyAyLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9yZGVyIiwiaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJ1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJ1xuaW1wb3J0IE5vcm1hbGRpc3QgZnJvbSAnLi9ub3JtYWxkaXN0J1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL3BvcnRhbCdcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJ1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA2MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gOTAwO1xuICAgIHRoaXMubW91c2VYID0gNTA7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLnNldE1vdXNlUG9zaXRpb24oZSksIGZhbHNlKTtcbiAgICBcbiAgICB0aGlzLmxvYWRJbWFnZXMoW1xuICAgICAgWydzdWJ3YXknLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTTJWY1hBLnBuZyddLFxuICAgICAgWydwb3J0YWwnLCAnaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3Byb3h5L2JUWExxeGJNY3ZkOW1keXlJQldGT1BrVXRXNnp0MkFFS0ZfTEk1WXdIWVpORnhoMXoxcHFvcXh4MmYtelZTUWh3a254VVBkR0ctd2JGSkFmTGc1eDczN3pCTU84ZkpEOVJLXzd5ZXRMcXEybEl6b2V5dyddLFxuICAgICAgWydwb3J0YWwxJywgJ2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS90Qm50NFQwZVFqMmt0QVpwcWVRMXNQNXQ1Q2o1MThEUW5icGxzbFRRa0hqWExDbktaMWdSclZHdGRtcnVZdUVHVGs3ZldReHJXVGtoT1FxbGgxZ1hWb2dBTk83UzJBQ1FlTmtXb05NZU02VGFacFpHbG4tS1RMQmtZbl9xZWpZM2o0ckJldyddLFxuICAgICAgWydtY2QnLCAnaHR0cDovL2Fzc2V0cy5zdGlja3BuZy5jb20vaW1hZ2VzLzU4ODI0ODJkZTgxYWNiOTY0MjRmZmFhYy5wbmcnXSxcbiAgICAgIFsna2ZjJywgJ2h0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL2tmY19mb29kL2tmY19mb29kX1BORzMwLnBuZyddLFxuICAgICAgWydwaXp6YScsICdodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vcHJveHkvdnVKaGFPR2RKMTFmUVp2UXk0QUl1R3RjOUh3czVQR1NfcGt3ZDRhWVBrY3lhU042N1Uwdm9EcDBuWjFZVnJodWVVWjFWQWpHYjgyTGhtQ2oxTl9NdHNEcEwzaFlSNEY2a0tlWFpFenljWFFiRXpKVlZuYmVFYjZIbks1U0l1YlNvendXdWs5ZklXQldIOThyZEd1WDRRJ10sXG4gICAgICBbJ2NoaXBvdGxlJywgJ2h0dHBzOi8vd3d3LnZpcHBuZy5jb20vcG5nL2Z1bGwvMjY3LTI2NzMxNjFfYnVycml0by1ib3dsLWJ1cnJpdG8tYm93bC1zaXNpZy5wbmcnXVxuICAgIF0sICgpID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKSlcbiAgICB0aGlzLmluaXQoKSBcbiAgfVxuXG4gIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgIHZhciByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnRcbiAgICB0aGlzLnggPSBwYXJzZUludCh4KVxuICAgIHRoaXMuY29udHJvbC5jaGFuZ2VQb3ModGhpcy54KVxuICAgIGlmICghdGhpcy5sYXVuY2hlZCkge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZVBvcyh0aGlzLngsIHRoaXMuYmFsbC55KVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZXMoYXJyLCBjYWxsYmFjaykge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdmFyIGxvYWRlZEltYWdlQ291bnQgPSAwO1xuXG4gICAgLy8gTWFrZSBzdXJlIGFyciBpcyBhY3R1YWxseSBhbiBhcnJheSBhbmQgYW55IG90aGVyIGVycm9yIGNoZWNraW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBpbWFnZUxvYWRlZDtcbiAgICAgICAgaW1nLnNyYyA9IGFycltpXVsxXTtcbiAgICAgICAgdGhpcy5pbWFnZXNbYXJyW2ldWzBdXSA9IGltZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltYWdlTG9hZGVkKGUpIHtcbiAgICAgICAgbG9hZGVkSW1hZ2VDb3VudCsrO1xuICAgICAgICBpZiAobG9hZGVkSW1hZ2VDb3VudCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5jbGVhckNhbnZhcygpXG4gICAgaWYgKHRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGUoKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiBvYmoudXBkYXRlKCkpXG4gICAgICBpZiAodGhpcy5iYWxsLm91dG9mQm91bmRzKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKVxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRyb2wuY2hlY2tDb2xsaXNpb24odGhpcy5iYWxsKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiB0aGlzLnNjb3JlICs9IG9iai5jaGVja0NvbGxpc2lvbih0aGlzLmJhbGwpKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUnKS5pbm5lckhUTUwgPSB0aGlzLmxpZmVcbiAgICB0aGlzLmJhbGwuZHJhdygpXG4gICAgdGhpcy5jb250cm9sLmRyYXcoKVxuICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcbiAgICBcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgfVxuXG4gIHJlc2V0R2FtZSgpIHtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdHMoKVxuICAgIHRoaXMubGF1bmNoZWQgPSBmYWxzZVxuICAgIHRoaXMubGlmZSAtPSAxXG4gICAgaWYgKHRoaXMubGlmZSA8IDApIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT2JqZWN0cygpIHtcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmN0eCwgMzAwLCA4MDAsIDAsIDApXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5jdHgsIHRoaXMuaW1hZ2VzWydzdWJ3YXknXSlcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtcbiAgICAgIG5ldyBOb3JtYWxkaXN0KHRoaXMuY3R4LCAzMDAsIDMwMCwgW3RoaXMuaW1hZ2VzWydtY2QnXSwgdGhpcy5pbWFnZXNbJ2tmYyddLCB0aGlzLmltYWdlc1sncGl6emEnXV0pLCBcbiAgICAgIG5ldyBQb3J0YWwodGhpcy5jdHgsIDUwLCA3MDAsIDYwLCAwLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksIFxuICAgICAgbmV3IFBvcnRhbCh0aGlzLmN0eCwgNTAwLCAxMDAsIDYwLCAxLCBbdGhpcy5pbWFnZXNbJ3BvcnRhbCddLCB0aGlzLmltYWdlc1sncG9ydGFsMSddXSksXG4gICAgICBuZXcgUGxhdGZvcm0odGhpcy5jdHgsIDAsIDIwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IFBsYXRmb3JtKHRoaXMuY3R4LCAyNTAsIDEwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pLFxuICAgICAgbmV3IFBsYXRmb3JtKHRoaXMuY3R4LCA0ODAsIDUwMCwgNTAsIDEyMCwgdGhpcy5pbWFnZXNbJ2NoaXBvdGxlJ10pXG4gICAgXVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdHMoKVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5sYXVuY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5saWZlID0gM1xuICB9XG5cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kKHRoaXMuY2FudmFzKVxuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgbGF1bmNoKCkge1xuICAgIGlmICh0aGlzLmxhdW5jaGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZVZlYygwLCAtNC41KVxuICAgICAgdGhpcy5sYXVuY2hlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJ1xyXG5cclxuY2xhc3Mgbm9ybWFsRGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXVxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vVG9wXHJcbiAgICAgICAgY29uc3QgczEgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczIgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgY29uc3QgczMgPSAoTWF0aC5yYW5kb20oKSAqIDQgKyA1KSAvIDEwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSAtIDc1LCAyMCwgdGhpcy5pbWcsIHMxKSlcclxuICAgICAgICAvL01pZFxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gOTAsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgMjAsIHRoaXMuaW1nLCBzMikpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggKyA5MCwgdGhpcy55LCAyMCwgdGhpcy5pbWcsIHMyKSlcclxuICAgICAgICAvL0JvdHRvbVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gMTgwLCB0aGlzLnkgKyA3NSwgMjAsIHRoaXMuaW1nLCBzMykpXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IE9ic3RhY2xlKHRoaXMuY3R4LCB0aGlzLnggLSA5MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgOTAsIHRoaXMueSArIDc1LCAyMCwgdGhpcy5pbWcsIHMzKSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDE4MCwgdGhpcy55ICsgNzUsIDIwLCB0aGlzLmltZywgczMpKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBsZXQgc2NvcmUgPSAwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gc2NvcmUgKz0gb2JqLmNoZWNrQ29sbGlzaW9uKGJhbGwpKVxyXG4gICAgICAgIHJldHVybiBzY29yZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3JtYWxEaXN0IiwiY2xhc3MgT2JzdGFjbGUge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIGltZywgdngpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyA0MFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gNDBcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMuaGl0ID0gMFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWdbdGhpcy5oaXQgJSAzXSwgdGhpcy54IC0gdGhpcy5yYWQsIHRoaXMueSAtIHRoaXMucmFkLCB0aGlzLnJhZCAqIDIsIHRoaXMucmFkICogMilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuZGlzdGwpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgdGhpcy5kaXN0cikge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIHRoaXMudnhcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggLSBiYWxsLngpICoqIDIgKyAodGhpcy55IC0gYmFsbC55KSAqKiAyIDw9ICh0aGlzLnJhZCArIGJhbGwucmFkKSAqKiAyICkge1xyXG4gICAgICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHt4OiBiYWxsLnggLSB0aGlzLngsIHk6IGJhbGwueSAtIHRoaXMueX1cclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChiYWxsLngtdGhpcy54KSAqKiAyICsgKGJhbGwueS10aGlzLnkpICoqIDIpXHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uTm9ybSA9IHt4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2V9IFxyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyg2ICogdkNvbGxpc2lvbk5vcm0ueCwgNiAqICh2Q29sbGlzaW9uTm9ybS55ID8gdkNvbGxpc2lvbk5vcm0ueSA6IDAuMykpXHJcbiAgICAgICAgICAgIHRoaXMuaGl0ICs9IDFcclxuICAgICAgICAgICAgcmV0dXJuIDUgKiAodGhpcy5oaXQgJSAzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGUiLCJjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkgJiYgYmFsbC55IC0gYmFsbC5yYWQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgYmFsbC54ICsgYmFsbC5yYWQgPj0gdGhpcy54ICYmIGJhbGwueCAtIGJhbGwucmFkPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKChiYWxsLnZ4ID8gLTEgKiBiYWxsLnZ4IDogLTMpLCAtMSAqIGJhbGwudnkpXHJcbiAgICAgICAgICAgIHJldHVybiA1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm0iLCJjbGFzcyBQb3J0YWwge1xyXG4gICAgLy9UeXBlID09IDAsIHRvcCBwb3J0YWwsIHR5cGUgPT0gMSwgYm90dG9tIHBvcnRhbFxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQsIHR5cGUsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB0aGlzLmltZyA9IGltZ1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDBcclxuICAgICAgICB0aGlzLnVzZVBvcnRhbCA9IHRoaXMudXNlUG9ydGFsLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCArIHRoaXMucmFkIC8gMlxyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnkgKyB0aGlzLnJhZCAvIDJcclxuICAgICAgICBjb25zdCByYWQgPSB0aGlzLnJhZCAvIDJcclxuICAgICAgICBpZiAoKHggLSBiYWxsLngpICoqIDIgKyAoeSAtIGJhbGwueSkgKiogMiA8PSAocmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKDU2MCwgMTY1KVxyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoTWF0aC5yYW5kb20oKSAqIDYgLSAzLCAzLjUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVBvcygxMTAsIDY5OSlcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKE1hdGgucmFuZG9tKCkgKiA2IC0gMywgLTMuNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVzZVBvcnRhbCgpXHJcbiAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlUG9ydGFsKCkge1xyXG4gICAgICAgIHRoaXMudXNlZCA9IDFcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VkID0gMFxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nW3RoaXMudXNlZF0sIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgdGhpcy5yYWQpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0YWwiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmNyZWF0ZUNhbnZhcygpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYgKGUuY29kZSA9PT0gJ1NwYWNlJykgeyBnYW1lLmxhdW5jaCgpfX0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==