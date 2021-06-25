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
        console.log('low');
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
    this.x = 250;
    this.y = 850;
    this.height = 20;
    this.width = 100;
    this.img = img;
  }

  _createClass(Border, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (ball.y + ball.rad >= this.y && ball.y - ball.rad <= this.y + this.height && ball.x > this.x - this.width / 2 && ball.x < this.x + this.width / 2) {
        if (ball.x < this.x - this.width / 4) {
          ball.updateVec(-1.1 * Math.abs(ball.vx), -1 * ball.vy);
        } else if (ball.x > this.x + this.width / 4) {
          ball.updateVec(1.1 * Math.abs(ball.vx), -1 * ball.vy);
        } else {
          ball.updateVec(ball.vx, -1 * ball.vy);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(props) {
    var _this = this;

    _classCallCheck(this, Game);

    this.launched = false;
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.mouseX = 50;
    this.score = 0;
    this.ctx = this.canvas.getContext("2d");
    this.animate = this.animate.bind(this);
    this.canvas.addEventListener("mousemove", function (e) {
      return _this.setMousePosition(e);
    }, false);
    this.loadImages([['subway', 'https://img.favpng.com/8/24/20/submarine-sandwich-subway-5-footlong-promotion-restaurant-png-favpng-r8PKFVtUxz2uT110KJVCVfE6C.jpg']], function () {
      return window.requestAnimationFrame(_this.animate);
    });
    this.init();
  }

  _createClass(Game, [{
    key: "setMousePosition",
    value: function setMousePosition(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      this.control.changePos(parseInt(x));
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
      this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, 300, 100, 0, 0);
      this.obstacles = [new _normaldist__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, 300, 300)];
      this.score = 0;
      this.launched = false;
    }
  }, {
    key: "init",
    value: function init() {
      this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, 300, 100, 0, 0);
      this.control = new _control__WEBPACK_IMPORTED_MODULE_1__.default(this.ctx, this.images['subway']);
      this.obstacles = [new _normaldist__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx, 300, 300)];
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
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
        this.ball.updateVec(0, 3);
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
  function normalDist(ctx, x, y) {
    _classCallCheck(this, normalDist);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.objects = [];
    this.init();
  }

  _createClass(normalDist, [{
    key: "init",
    value: function init() {
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y - 75, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 90, this.y, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 90, this.y, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 180, this.y + 75, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x - 90, this.y + 75, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x, this.y + 75, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 90, this.y + 75, 15));
      this.objects.push(new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.x + 180, this.y + 75, 15));
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
  function Obstacle(ctx, x, y, rad) {
    _classCallCheck(this, Obstacle);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.distr = x + 40;
    this.distl = x - 40;
    this.vx = 0.5;
    this.vy = 0;
    this.rad = rad;
    this.colors = ['green', 'red', 'blue'];
    this.hit = 0;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fillStyle = this.colors[this.hit % 3];
      this.ctx.fill();
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
        ball.updateVec(6 * vCollisionNorm.x, 6 * vCollisionNorm.y);
        this.hit += 1;
        return 5;
      }

      return 0;
    }
  }]);

  return Obstacle;
}(); // Point d = closestpointonline(circle1.x, circle1.y, 
// circle1.x + circle1.vx, circle1.y + circle1.vy, circle2.x, circle2.y); 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Obstacle);

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
  document.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowLeft') {
      game.moveLeft(true);
    }
  });
  document.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowLeft') {
      game.moveLeft(false);
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9ub3JtYWxkaXN0LmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFsbCIsImN0eCIsIngiLCJ5IiwidngiLCJ2eSIsInJhZCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJhYnMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJCb3JkZXIiLCJpbWciLCJiYWxsIiwidXBkYXRlVmVjIiwidXBkYXRlUG9zIiwiZHJhd0ltYWdlIiwiR2FtZSIsInByb3BzIiwibGF1bmNoZWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtb3VzZVgiLCJzY29yZSIsImdldENvbnRleHQiLCJhbmltYXRlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0TW91c2VQb3NpdGlvbiIsImxvYWRJbWFnZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0IiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY29udHJvbCIsImNoYW5nZVBvcyIsInBhcnNlSW50IiwiYXJyIiwiY2FsbGJhY2siLCJpbWFnZXMiLCJsb2FkZWRJbWFnZUNvdW50IiwiaSIsImxlbmd0aCIsIkltYWdlIiwib25sb2FkIiwiaW1hZ2VMb2FkZWQiLCJzcmMiLCJjbGVhckNhbnZhcyIsInVwZGF0ZSIsIm9ic3RhY2xlcyIsImZvckVhY2giLCJvYmoiLCJvdXRvZkJvdW5kcyIsInJlc2V0R2FtZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJkcmF3IiwiTm9ybWFsZGlzdCIsIkNvbnRyb2wiLCJib2R5IiwiYXBwZW5kIiwiY2xlYXJSZWN0Iiwibm9ybWFsRGlzdCIsIm9iamVjdHMiLCJwdXNoIiwiT2JzdGFjbGUiLCJkaXN0ciIsImRpc3RsIiwiY29sb3JzIiwiaGl0IiwidkNvbGxpc2lvbiIsImRpc3RhbmNlIiwic3FydCIsInZDb2xsaXNpb25Ob3JtIiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImNvZGUiLCJsYXVuY2giLCJtb3ZlTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNGLGdCQUFZQyxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQjtBQUFBOztBQUMzQixTQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtKLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLSixHQUFMLENBQVNNLFNBQVQ7QUFDQSxXQUFLTixHQUFMLENBQVNPLEdBQVQsQ0FBYSxLQUFLTixDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLRyxHQUFsQyxFQUF1QyxDQUF2QyxFQUEwQ0csSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBcEQsRUFBdUQsSUFBdkQ7QUFDQSxXQUFLVCxHQUFMLENBQVNVLFNBQVQ7QUFDQSxXQUFLVixHQUFMLENBQVNXLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxXQUFLWCxHQUFMLENBQVNZLElBQVQ7QUFDSDs7O1dBRUQsdUJBQWM7QUFDVixVQUFJLEtBQUtYLENBQUwsR0FBUyxLQUFLSSxHQUFsQixFQUF1QjtBQUNuQixhQUFLRixFQUFMLEdBQVVLLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtWLEVBQWQsQ0FBVjtBQUNBLGFBQUtGLENBQUwsR0FBUyxLQUFLSSxHQUFkO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLSixDQUFMLEdBQVMsS0FBS0QsR0FBTCxDQUFTYyxNQUFULENBQWdCQyxLQUFoQixHQUF3QixLQUFLVixHQUExQyxFQUErQztBQUMzQyxhQUFLRixFQUFMLEdBQVUsQ0FBQ0ssSUFBSSxDQUFDSyxHQUFMLENBQVMsS0FBS1YsRUFBZCxDQUFYO0FBQ0EsYUFBS0YsQ0FBTCxHQUFTLEtBQUtELEdBQUwsQ0FBU2MsTUFBVCxDQUFnQkMsS0FBaEIsR0FBd0IsS0FBS1YsR0FBdEM7QUFDSDs7QUFDRCxVQUFJLEtBQUtILENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ1osYUFBS0UsRUFBTCxHQUFVSSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLVCxFQUFkLENBQVY7QUFDQSxhQUFLRixDQUFMLEdBQVMsS0FBS0csR0FBZDtBQUNILE9BWlMsQ0FhVjs7O0FBQ0EsVUFBSSxLQUFLSCxDQUFMLEdBQVMsS0FBS0YsR0FBTCxDQUFTYyxNQUFULENBQWdCRSxNQUFoQixHQUF5QixLQUFLWCxHQUEzQyxFQUFnRDtBQUM1QyxlQUFPLElBQVA7QUFDSDs7QUFDRCxVQUFJRyxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLVCxFQUFkLElBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCYSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsYUFBS2QsRUFBTCxJQUFXLENBQVg7QUFDSDs7QUFDRCxVQUFJSSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLVixFQUFkLElBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGFBQUtBLEVBQUwsSUFBVyxDQUFYO0FBQ0g7O0FBQ0QsYUFBTyxLQUFQO0FBRUg7OztXQUVELG1CQUFVQSxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDZCxXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O1dBRUQsbUJBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNaLFdBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLFdBQUtELENBQUwsSUFBVSxLQUFLRSxFQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtFLEVBQWY7QUFDSDs7Ozs7O0FBR0wsaUVBQWVMLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5RE1vQixNO0FBQ0Ysa0JBQVluQixHQUFaLEVBQWlCb0IsR0FBakIsRUFBc0I7QUFBQTs7QUFDbEIsU0FBS3BCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLYyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0ssR0FBTCxHQUFXQSxHQUFYO0FBQ0g7Ozs7V0FFRCx3QkFBZUMsSUFBZixFQUFxQjtBQUNqQixVQUFJQSxJQUFJLENBQUNuQixDQUFMLEdBQVNtQixJQUFJLENBQUNoQixHQUFkLElBQXFCLEtBQUtILENBQTFCLElBQStCbUIsSUFBSSxDQUFDbkIsQ0FBTCxHQUFTbUIsSUFBSSxDQUFDaEIsR0FBZCxJQUFxQixLQUFLSCxDQUFMLEdBQVMsS0FBS2MsTUFBbEUsSUFBNEVLLElBQUksQ0FBQ3BCLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS2MsS0FBTCxHQUFhLENBQTNHLElBQWdITSxJQUFJLENBQUNwQixDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtjLEtBQUwsR0FBYSxDQUFuSixFQUFzSjtBQUNsSixZQUFJTSxJQUFJLENBQUNwQixDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtjLEtBQUwsR0FBYSxDQUFuQyxFQUFzQztBQUNsQ00sY0FBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQyxHQUFELEdBQU9kLElBQUksQ0FBQ0ssR0FBTCxDQUFTUSxJQUFJLENBQUNsQixFQUFkLENBQXRCLEVBQXlDLENBQUMsQ0FBRCxHQUFLa0IsSUFBSSxDQUFDakIsRUFBbkQ7QUFDSCxTQUZELE1BRU8sSUFBSWlCLElBQUksQ0FBQ3BCLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS2MsS0FBTCxHQUFhLENBQW5DLEVBQXNDO0FBQ3pDTSxjQUFJLENBQUNDLFNBQUwsQ0FBZSxNQUFNZCxJQUFJLENBQUNLLEdBQUwsQ0FBU1EsSUFBSSxDQUFDbEIsRUFBZCxDQUFyQixFQUF3QyxDQUFDLENBQUQsR0FBS2tCLElBQUksQ0FBQ2pCLEVBQWxEO0FBQ0gsU0FGTSxNQUVBO0FBQ0hpQixjQUFJLENBQUNDLFNBQUwsQ0FBZUQsSUFBSSxDQUFDbEIsRUFBcEIsRUFBd0IsQ0FBQyxDQUFELEdBQUtrQixJQUFJLENBQUNqQixFQUFsQztBQUNIOztBQUNEaUIsWUFBSSxDQUFDRSxTQUFMLENBQWVGLElBQUksQ0FBQ3BCLENBQXBCLEVBQXVCLEtBQUtDLENBQUwsR0FBU21CLElBQUksQ0FBQ2hCLEdBQXJDO0FBQ0g7QUFDSjs7O1dBRUQsbUJBQVVKLENBQVYsRUFBYTtBQUNULFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNIOzs7V0FFRCxnQkFBTztBQUNILFdBQUtELEdBQUwsQ0FBU3dCLFNBQVQsQ0FBbUIsS0FBS0osR0FBeEIsRUFBNkIsS0FBS25CLENBQUwsR0FBUyxLQUFLYyxLQUFMLEdBQWEsQ0FBbkQsRUFBc0QsS0FBS2IsQ0FBM0QsRUFBOEQsS0FBS2EsS0FBbkUsRUFBMEUsS0FBS0MsTUFBL0U7QUFDSDs7Ozs7O0FBSUwsaUVBQWVHLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBOztJQUVNTSxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtiLE1BQUwsR0FBY2MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLZixNQUFMLENBQVlDLEtBQVosR0FBb0IsR0FBcEI7QUFDQSxTQUFLRCxNQUFMLENBQVlFLE1BQVosR0FBcUIsR0FBckI7QUFDQSxTQUFLYyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBSy9CLEdBQUwsR0FBVyxLQUFLYyxNQUFMLENBQVlrQixVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLcEIsTUFBTCxDQUFZcUIsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQ0MsQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDQyxnQkFBTCxDQUFzQkQsQ0FBdEIsQ0FBUDtBQUFBLEtBQTFDLEVBQTJFLEtBQTNFO0FBRUEsU0FBS0UsVUFBTCxDQUFnQixDQUFDLENBQUMsUUFBRCxFQUFXLG1JQUFYLENBQUQsQ0FBaEIsRUFBbUs7QUFBQSxhQUFNQyxNQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUksQ0FBQ1AsT0FBbEMsQ0FBTjtBQUFBLEtBQW5LO0FBQ0EsU0FBS1EsSUFBTDtBQUNEOzs7O1dBRUQsMEJBQWlCTCxDQUFqQixFQUFvQjtBQUNsQixVQUFJTSxJQUFJLEdBQUdOLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxxQkFBVCxFQUFYO0FBQ0EsVUFBSTNDLENBQUMsR0FBR21DLENBQUMsQ0FBQ1MsT0FBRixHQUFZSCxJQUFJLENBQUNJLElBQXpCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxTQUFiLENBQXVCQyxRQUFRLENBQUNoRCxDQUFELENBQS9CO0FBQ0Q7OztXQUVELG9CQUFXaUQsR0FBWCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeEIsV0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QixDQUZ3QixDQUl4Qjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBb0M7QUFDaEMsWUFBSWxDLEdBQUcsR0FBRyxJQUFJb0MsS0FBSixFQUFWO0FBQ0FwQyxXQUFHLENBQUNxQyxNQUFKLEdBQWFDLFdBQWI7QUFDQXRDLFdBQUcsQ0FBQ3VDLEdBQUosR0FBVVQsR0FBRyxDQUFDSSxDQUFELENBQUgsQ0FBTyxDQUFQLENBQVY7QUFDQSxhQUFLRixNQUFMLENBQVlGLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFILENBQU8sQ0FBUCxDQUFaLElBQXlCbEMsR0FBekI7QUFDSDs7QUFFRCxlQUFTc0MsV0FBVCxDQUFxQnRCLENBQXJCLEVBQXdCO0FBQ3BCaUIsd0JBQWdCOztBQUNoQixZQUFJQSxnQkFBZ0IsSUFBSUgsR0FBRyxDQUFDSyxNQUE1QixFQUFvQztBQUNoQ0osa0JBQVE7QUFDWDtBQUNKO0FBQ0o7OztXQUVDLG1CQUFVO0FBQUE7O0FBQ1IsV0FBS1MsV0FBTDs7QUFDQSxVQUFJLEtBQUtqQyxRQUFULEVBQW1CO0FBQ2pCLGFBQUtOLElBQUwsQ0FBVXdDLE1BQVY7QUFDQSxhQUFLQyxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNILE1BQUosRUFBVDtBQUFBLFNBQXZCOztBQUNBLFlBQUksS0FBS3hDLElBQUwsQ0FBVTRDLFdBQVYsRUFBSixFQUE2QjtBQUMzQixlQUFLQyxTQUFMO0FBQ0EsaUJBQU8zQixNQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtQLE9BQWxDLENBQVA7QUFDRDs7QUFDRCxhQUFLYyxPQUFMLENBQWFvQixjQUFiLENBQTRCLEtBQUs5QyxJQUFqQztBQUNBLGFBQUt5QyxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTLE1BQUksQ0FBQ2pDLEtBQUwsSUFBY2lDLEdBQUcsQ0FBQ0csY0FBSixDQUFtQixNQUFJLENBQUM5QyxJQUF4QixDQUF2QjtBQUFBLFNBQXZCO0FBQ0Q7O0FBQ0RPLGNBQVEsQ0FBQ3dDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLFNBQWpDLEdBQTZDLEtBQUt0QyxLQUFsRDtBQUNBLFdBQUtWLElBQUwsQ0FBVWlELElBQVY7QUFDQSxXQUFLdkIsT0FBTCxDQUFhdUIsSUFBYjtBQUNBLFdBQUtSLFNBQUwsQ0FBZUMsT0FBZixDQUF1QixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDTSxJQUFKLEVBQVQ7QUFBQSxPQUF2QjtBQUVBL0IsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLUCxPQUFsQztBQUNEOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtaLElBQUwsR0FBWSxJQUFJdEIsMENBQUosQ0FBUyxLQUFLQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLENBQVo7QUFDQSxXQUFLOEQsU0FBTCxHQUFpQixDQUFDLElBQUlTLGdEQUFKLENBQWUsS0FBS3ZFLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQUQsQ0FBakI7QUFDQSxXQUFLK0IsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7OztXQUVELGdCQUFPO0FBQ0wsV0FBS04sSUFBTCxHQUFZLElBQUl0QiwwQ0FBSixDQUFTLEtBQUtDLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBWjtBQUNBLFdBQUsrQyxPQUFMLEdBQWUsSUFBSXlCLDZDQUFKLENBQVksS0FBS3hFLEdBQWpCLEVBQXNCLEtBQUtvRCxNQUFMLENBQVksUUFBWixDQUF0QixDQUFmO0FBQ0EsV0FBS1UsU0FBTCxHQUFpQixDQUFDLElBQUlTLGdEQUFKLENBQWUsS0FBS3ZFLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQUQsQ0FBakI7QUFDRDs7O1dBRUQsd0JBQWU7QUFDYjRCLGNBQVEsQ0FBQzZDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixLQUFLNUQsTUFBMUI7QUFDRDs7O1dBRUQsdUJBQWM7QUFDWixXQUFLZCxHQUFMLENBQVMyRSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUs3RCxNQUFMLENBQVlDLEtBQXJDLEVBQTRDLEtBQUtELE1BQUwsQ0FBWUUsTUFBeEQ7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJLEtBQUtXLFFBQVQsRUFBbUI7QUFDakI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLTixJQUFMLENBQVVDLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFDQSxhQUFLSyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsaUVBQWVGLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBOztJQUVNbUQsVTtBQUNGLHNCQUFZNUUsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUsyRSxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtwQyxJQUFMO0FBQ0g7Ozs7V0FFRCxnQkFBTztBQUNILFdBQUtvQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLL0UsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBNUIsRUFBK0IsS0FBS0MsQ0FBTCxHQUFTLEVBQXhDLEVBQTRDLEVBQTVDLENBQWxCO0FBQ0EsV0FBSzJFLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUsvRSxHQUFsQixFQUF1QixLQUFLQyxDQUFMLEdBQVMsRUFBaEMsRUFBb0MsS0FBS0MsQ0FBekMsRUFBNEMsRUFBNUMsQ0FBbEI7QUFDQSxXQUFLMkUsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBSy9FLEdBQWxCLEVBQXVCLEtBQUtDLENBQTVCLEVBQStCLEtBQUtDLENBQXBDLEVBQXVDLEVBQXZDLENBQWxCO0FBQ0EsV0FBSzJFLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFJQyw4Q0FBSixDQUFhLEtBQUsvRSxHQUFsQixFQUF1QixLQUFLQyxDQUFMLEdBQVMsRUFBaEMsRUFBb0MsS0FBS0MsQ0FBekMsRUFBNEMsRUFBNUMsQ0FBbEI7QUFDQSxXQUFLMkUsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBSy9FLEdBQWxCLEVBQXVCLEtBQUtDLENBQUwsR0FBUyxHQUFoQyxFQUFxQyxLQUFLQyxDQUFMLEdBQVMsRUFBOUMsRUFBa0QsRUFBbEQsQ0FBbEI7QUFDQSxXQUFLMkUsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBSy9FLEdBQWxCLEVBQXVCLEtBQUtDLENBQUwsR0FBUyxFQUFoQyxFQUFvQyxLQUFLQyxDQUFMLEdBQVMsRUFBN0MsRUFBaUQsRUFBakQsQ0FBbEI7QUFDQSxXQUFLMkUsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQUlDLDhDQUFKLENBQWEsS0FBSy9FLEdBQWxCLEVBQXVCLEtBQUtDLENBQTVCLEVBQWdDLEtBQUtDLENBQUwsR0FBUyxFQUF6QyxFQUE2QyxFQUE3QyxDQUFsQjtBQUNBLFdBQUsyRSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLL0UsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTLEVBQWhDLEVBQW9DLEtBQUtDLENBQUwsR0FBUyxFQUE3QyxFQUFpRCxFQUFqRCxDQUFsQjtBQUNBLFdBQUsyRSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBSUMsOENBQUosQ0FBYSxLQUFLL0UsR0FBbEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTLEdBQWhDLEVBQXFDLEtBQUtDLENBQUwsR0FBUyxFQUE5QyxFQUFrRCxFQUFsRCxDQUFsQjtBQUNIOzs7V0FFRCxnQkFBTztBQUNILFdBQUsyRSxPQUFMLENBQWFkLE9BQWIsQ0FBcUIsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ00sSUFBSixFQUFUO0FBQUEsT0FBckI7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLTyxPQUFMLENBQWFkLE9BQWIsQ0FBcUIsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0gsTUFBSixFQUFUO0FBQUEsT0FBckI7QUFDSDs7O1dBRUQsd0JBQWV4QyxJQUFmLEVBQXFCO0FBQ2pCLFVBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0EsV0FBSzhDLE9BQUwsQ0FBYWQsT0FBYixDQUFxQixVQUFDQyxHQUFEO0FBQUEsZUFBU2pDLEtBQUssSUFBSWlDLEdBQUcsQ0FBQ0csY0FBSixDQUFtQjlDLElBQW5CLENBQWxCO0FBQUEsT0FBckI7QUFDQSxhQUFPVSxLQUFQO0FBQ0g7Ozs7OztBQUdMLGlFQUFlNkMsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RDTUcsUTtBQUNGLG9CQUFZL0UsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCRyxHQUF2QixFQUE0QjtBQUFBOztBQUN4QixTQUFLTCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLOEUsS0FBTCxHQUFhL0UsQ0FBQyxHQUFHLEVBQWpCO0FBQ0EsU0FBS2dGLEtBQUwsR0FBYWhGLENBQUMsR0FBRyxFQUFqQjtBQUNBLFNBQUtFLEVBQUwsR0FBVSxHQUFWO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLNkUsTUFBTCxHQUFjLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsTUFBakIsQ0FBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0g7Ozs7V0FFRCxnQkFBTztBQUNILFdBQUtuRixHQUFMLENBQVNNLFNBQVQ7QUFDQSxXQUFLTixHQUFMLENBQVNPLEdBQVQsQ0FBYSxLQUFLTixDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLRyxHQUFsQyxFQUF1QyxDQUF2QyxFQUEwQ0csSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBcEQsRUFBdUQsSUFBdkQ7QUFDQSxXQUFLVCxHQUFMLENBQVNVLFNBQVQ7QUFDQSxXQUFLVixHQUFMLENBQVNXLFNBQVQsR0FBcUIsS0FBS3VFLE1BQUwsQ0FBWSxLQUFLQyxHQUFMLEdBQVcsQ0FBdkIsQ0FBckI7QUFDQSxXQUFLbkYsR0FBTCxDQUFTWSxJQUFUO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsVUFBSSxLQUFLWCxDQUFMLEdBQVMsS0FBS2dGLEtBQWxCLEVBQXlCO0FBQ3JCLGFBQUs5RSxFQUFMLEdBQVUsQ0FBQyxDQUFELEdBQUssS0FBS0EsRUFBcEI7QUFDQSxhQUFLRixDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNILE9BSEQsTUFHTyxJQUFJLEtBQUtGLENBQUwsR0FBUyxLQUFLK0UsS0FBbEIsRUFBeUI7QUFDNUIsYUFBSy9FLENBQUwsSUFBVSxLQUFLRSxFQUFmO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsYUFBS0EsRUFBTCxHQUFVLENBQUMsQ0FBRCxHQUFLLEtBQUtBLEVBQXBCO0FBQ0EsYUFBS0YsQ0FBTCxJQUFVLEtBQUtFLEVBQWY7QUFDSDtBQUNKOzs7V0FDRCx3QkFBZWtCLElBQWYsRUFBcUI7QUFDakIsVUFBSSxTQUFDLEtBQUtwQixDQUFMLEdBQVNvQixJQUFJLENBQUNwQixDQUFmLEVBQXFCLENBQXJCLGFBQTBCLEtBQUtDLENBQUwsR0FBU21CLElBQUksQ0FBQ25CLENBQXhDLEVBQThDLENBQTlDLGNBQW9ELEtBQUtHLEdBQUwsR0FBV2dCLElBQUksQ0FBQ2hCLEdBQXBFLEVBQTRFLENBQTVFLENBQUosRUFBb0Y7QUFDaEYsWUFBSStFLFVBQVUsR0FBRztBQUFDbkYsV0FBQyxFQUFFb0IsSUFBSSxDQUFDcEIsQ0FBTCxHQUFTLEtBQUtBLENBQWxCO0FBQXFCQyxXQUFDLEVBQUVtQixJQUFJLENBQUNuQixDQUFMLEdBQVMsS0FBS0E7QUFBdEMsU0FBakI7QUFDQSxZQUFJbUYsUUFBUSxHQUFHN0UsSUFBSSxDQUFDOEUsSUFBTCxDQUFVLFNBQUNqRSxJQUFJLENBQUNwQixDQUFMLEdBQU8sS0FBS0EsQ0FBYixFQUFtQixDQUFuQixhQUF3Qm9CLElBQUksQ0FBQ25CLENBQUwsR0FBTyxLQUFLQSxDQUFwQyxFQUEwQyxDQUExQyxDQUFWLENBQWY7QUFDQSxZQUFJcUYsY0FBYyxHQUFHO0FBQUN0RixXQUFDLEVBQUVtRixVQUFVLENBQUNuRixDQUFYLEdBQWVvRixRQUFuQjtBQUE2Qm5GLFdBQUMsRUFBRWtGLFVBQVUsQ0FBQ2xGLENBQVgsR0FBZW1GO0FBQS9DLFNBQXJCO0FBQ0FoRSxZQUFJLENBQUNDLFNBQUwsQ0FBZSxJQUFJaUUsY0FBYyxDQUFDdEYsQ0FBbEMsRUFBcUMsSUFBSXNGLGNBQWMsQ0FBQ3JGLENBQXhEO0FBQ0EsYUFBS2lGLEdBQUwsSUFBWSxDQUFaO0FBQ0EsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxDQUFQO0FBQ0g7Ozs7S0FHTDtBQUNBOzs7QUFDQSxpRUFBZUosUUFBZixFOzs7Ozs7Ozs7OztBQ2hEQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQW5ELFFBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTXFELElBQUksR0FBRyxJQUFJL0Qsa0RBQUosRUFBYjtBQUNBK0QsTUFBSSxDQUFDQyxZQUFMO0FBQ0E3RCxVQUFRLENBQUNPLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztBQUFDLFFBQUlBLENBQUMsQ0FBQ3NELElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQUVGLFVBQUksQ0FBQ0csTUFBTDtBQUFjO0FBQUMsR0FBdkY7QUFDQS9ELFVBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQUMsUUFBSUEsQ0FBQyxDQUFDc0QsSUFBRixLQUFXLFdBQWYsRUFBNEI7QUFBRUYsVUFBSSxDQUFDSSxRQUFMLENBQWMsSUFBZDtBQUFvQjtBQUFDLEdBQWhHO0FBQ0FoRSxVQUFRLENBQUNPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUFDLFFBQUlBLENBQUMsQ0FBQ3NELElBQUYsS0FBVyxXQUFmLEVBQTRCO0FBQUVGLFVBQUksQ0FBQ0ksUUFBTCxDQUFjLEtBQWQ7QUFBcUI7QUFBQyxHQUEvRjtBQUNELENBTkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHZ4LCB2eSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy5yYWQgPSA1XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgb3V0b2ZCb3VuZHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSBNYXRoLmFicyh0aGlzLnZ4KSBcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5yYWRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAtIHRoaXMucmFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtTWF0aC5hYnModGhpcy52eClcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5jdHguY2FudmFzLndpZHRoIC0gdGhpcy5yYWRcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSBNYXRoLmFicyh0aGlzLnZ5KSBcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5yYWRcclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIE91dCBvZiBib3VuZHMgb24gYm90dG9tXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy52eSkgPCAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb3cnKVxyXG4gICAgICAgICAgICB0aGlzLnZ5ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudngpIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ICo9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlYyh2eCwgdnkpIHtcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3MoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4IFxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGwiLCJjbGFzcyBCb3JkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IDI1MFxyXG4gICAgICAgIHRoaXMueSA9IDg1MFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjBcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwXHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWdcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkID49IHRoaXMueSAmJiBiYWxsLnkgLSBiYWxsLnJhZCA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBiYWxsLnggPiB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiAmJiBiYWxsLnggPCB0aGlzLnggKyB0aGlzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoYmFsbC54IDwgdGhpcy54IC0gdGhpcy53aWR0aCAvIDQpIHtcclxuICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKC0xLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhbGwueCA+IHRoaXMueCArIHRoaXMud2lkdGggLyA0KSB7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYygxLjEgKiBNYXRoLmFicyhiYWxsLnZ4KSwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoYmFsbC52eCwgLTEgKiBiYWxsLnZ5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgdGhpcy55IC0gYmFsbC5yYWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBvcyh4KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnggLSB0aGlzLndpZHRoIC8gMiwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvcmRlciIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCdcbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29udHJvbCdcbmltcG9ydCBOb3JtYWxkaXN0IGZyb20gJy4vbm9ybWFsZGlzdCdcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5sYXVuY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gNjAwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDkwMDtcbiAgICB0aGlzLm1vdXNlWCA9IDUwO1xuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLnNldE1vdXNlUG9zaXRpb24oZSksIGZhbHNlKTtcbiAgICBcbiAgICB0aGlzLmxvYWRJbWFnZXMoW1snc3Vid2F5JywgJ2h0dHBzOi8vaW1nLmZhdnBuZy5jb20vOC8yNC8yMC9zdWJtYXJpbmUtc2FuZHdpY2gtc3Vid2F5LTUtZm9vdGxvbmctcHJvbW90aW9uLXJlc3RhdXJhbnQtcG5nLWZhdnBuZy1yOFBLRlZ0VXh6MnVUMTEwS0pWQ1ZmRTZDLmpwZyddXSwgKCkgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRNb3VzZVBvc2l0aW9uKGUpIHtcbiAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgdGhpcy5jb250cm9sLmNoYW5nZVBvcyhwYXJzZUludCh4KSlcbiAgfVxuXG4gIGxvYWRJbWFnZXMoYXJyLCBjYWxsYmFjaykge1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgdmFyIGxvYWRlZEltYWdlQ291bnQgPSAwO1xuXG4gICAgLy8gTWFrZSBzdXJlIGFyciBpcyBhY3R1YWxseSBhbiBhcnJheSBhbmQgYW55IG90aGVyIGVycm9yIGNoZWNraW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBpbWFnZUxvYWRlZDtcbiAgICAgICAgaW1nLnNyYyA9IGFycltpXVsxXTtcbiAgICAgICAgdGhpcy5pbWFnZXNbYXJyW2ldWzBdXSA9IGltZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltYWdlTG9hZGVkKGUpIHtcbiAgICAgICAgbG9hZGVkSW1hZ2VDb3VudCsrO1xuICAgICAgICBpZiAobG9hZGVkSW1hZ2VDb3VudCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5jbGVhckNhbnZhcygpXG4gICAgaWYgKHRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGUoKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiBvYmoudXBkYXRlKCkpXG4gICAgICBpZiAodGhpcy5iYWxsLm91dG9mQm91bmRzKCkpIHtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKVxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRyb2wuY2hlY2tDb2xsaXNpb24odGhpcy5iYWxsKVxuICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaCgob2JqKSA9PiB0aGlzLnNjb3JlICs9IG9iai5jaGVja0NvbGxpc2lvbih0aGlzLmJhbGwpKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlXG4gICAgdGhpcy5iYWxsLmRyYXcoKVxuICAgIHRoaXMuY29udHJvbC5kcmF3KClcbiAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKChvYmopID0+IG9iai5kcmF3KCkpXG4gICAgXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jdHgsIDMwMCwgMTAwLCAwLCAwKVxuICAgIHRoaXMub2JzdGFjbGVzID0gW25ldyBOb3JtYWxkaXN0KHRoaXMuY3R4LCAzMDAsIDMwMCldXG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLmxhdW5jaGVkID0gZmFsc2VcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jdHgsIDMwMCwgMTAwLCAwLCAwKVxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMuY3R4LCB0aGlzLmltYWdlc1snc3Vid2F5J10pXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbbmV3IE5vcm1hbGRpc3QodGhpcy5jdHgsIDMwMCwgMzAwKV1cbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcylcbiAgfVxuXG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxhdW5jaCgpIHtcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVWZWMoMCwgMylcbiAgICAgIHRoaXMubGF1bmNoZWQgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSdcclxuXHJcbmNsYXNzIG5vcm1hbERpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnkgLSA3NSwgMTUpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54IC0gOTAsIHRoaXMueSwgMTUpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIDE1KSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDkwLCB0aGlzLnksIDE1KSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAtIDE4MCwgdGhpcy55ICsgNzUsIDE1KSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCAtIDkwLCB0aGlzLnkgKyA3NSwgMTUpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICwgdGhpcy55ICsgNzUsIDE1KSlcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgT2JzdGFjbGUodGhpcy5jdHgsIHRoaXMueCArIDkwLCB0aGlzLnkgKyA3NSwgMTUpKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYnN0YWNsZSh0aGlzLmN0eCwgdGhpcy54ICsgMTgwLCB0aGlzLnkgKyA3NSwgMTUpKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLmRyYXcoKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gb2JqLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBsZXQgc2NvcmUgPSAwXHJcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iaikgPT4gc2NvcmUgKz0gb2JqLmNoZWNrQ29sbGlzaW9uKGJhbGwpKVxyXG4gICAgICAgIHJldHVybiBzY29yZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3JtYWxEaXN0IiwiY2xhc3MgT2JzdGFjbGUge1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy5kaXN0ciA9IHggKyA0MFxyXG4gICAgICAgIHRoaXMuZGlzdGwgPSB4IC0gNDBcclxuICAgICAgICB0aGlzLnZ4ID0gMC41XHJcbiAgICAgICAgdGhpcy52eSA9IDBcclxuICAgICAgICB0aGlzLnJhZCA9IHJhZFxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gWydncmVlbicsICdyZWQnLCAnYmx1ZSddXHJcbiAgICAgICAgdGhpcy5oaXQgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWQsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcnNbdGhpcy5oaXQgJSAzXVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5kaXN0bCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiB0aGlzLnZ4XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCB0aGlzLmRpc3RyKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC0xICogdGhpcy52eFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uKGJhbGwpIHtcclxuICAgICAgICBpZiAoKHRoaXMueCAtIGJhbGwueCkgKiogMiArICh0aGlzLnkgLSBiYWxsLnkpICoqIDIgPD0gKHRoaXMucmFkICsgYmFsbC5yYWQpICoqIDIgKSB7XHJcbiAgICAgICAgICAgIGxldCB2Q29sbGlzaW9uID0ge3g6IGJhbGwueCAtIHRoaXMueCwgeTogYmFsbC55IC0gdGhpcy55fVxyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGJhbGwueC10aGlzLngpICoqIDIgKyAoYmFsbC55LXRoaXMueSkgKiogMilcclxuICAgICAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0ge3g6IHZDb2xsaXNpb24ueCAvIGRpc3RhbmNlLCB5OiB2Q29sbGlzaW9uLnkgLyBkaXN0YW5jZX0gXHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKDYgKiB2Q29sbGlzaW9uTm9ybS54LCA2ICogdkNvbGxpc2lvbk5vcm0ueSlcclxuICAgICAgICAgICAgdGhpcy5oaXQgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4gNVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQb2ludCBkID0gY2xvc2VzdHBvaW50b25saW5lKGNpcmNsZTEueCwgY2lyY2xlMS55LCBcclxuLy8gY2lyY2xlMS54ICsgY2lyY2xlMS52eCwgY2lyY2xlMS55ICsgY2lyY2xlMS52eSwgY2lyY2xlMi54LCBjaXJjbGUyLnkpOyBcclxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGUiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmNyZWF0ZUNhbnZhcygpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYgKGUuY29kZSA9PT0gJ1NwYWNlJykgeyBnYW1lLmxhdW5jaCgpfX0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0JykgeyBnYW1lLm1vdmVMZWZ0KHRydWUpfX0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7aWYgKGUuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHsgZ2FtZS5tb3ZlTGVmdChmYWxzZSl9fSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9