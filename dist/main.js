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
    value: function update(timeDelta) {
      this.vy += 0.05;
      this.x += this.vx;
      this.y += this.vy;
    }
  }]);

  return Ball;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);

/***/ }),

/***/ "./src/scripts/border.js":
/*!*******************************!*\
  !*** ./src/scripts/border.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Border = /*#__PURE__*/function () {
  function Border(ctx) {
    _classCallCheck(this, Border);

    this.ctx = ctx;
    this.x = 0;
    this.y = 500;
    this.height = 10;
    this.width = ctx.canvas.width;
  }

  _createClass(Border, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (ball.y + ball.rad >= this.y) {
        ball.updateVec(ball.vx, -ball.vy * 0.4);
        ball.updatePos(ball.x, this.y - ball.rad);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border */ "./src/scripts/border.js");
/* harmony import */ var _top_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_border */ "./src/scripts/top_border.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(props) {
    _classCallCheck(this, Game);

    this.launched = false;
    this.canvas = document.createElement("canvas");
    this.canvas.width = 500;
    this.canvas.height = 900;
    this.lastTime = 0;
    this.ctx = this.canvas.getContext("2d");
    this.TopBorder = new _top_border__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx);
    this.TopBorder.draw();
    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, 490, 890, 0, -10); // this.border = new Border(this.ctx)

    this.animate = this.animate.bind(this);
    window.requestAnimationFrame(this.animate);
  }

  _createClass(Game, [{
    key: "animate",
    value: function animate(time) {
      var timeDelta = time - this.lastTime;
      this.clearCanvas();

      if (this.launched) {
        this.ball.update(timeDelta);
        this.TopBorder.checkCollision(this.ball);
      }

      this.ball.draw();
      this.TopBorder.draw();
      window.requestAnimationFrame(this.animate);
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
      console.log('lmao');

      if (this.launched) {
        return;
      } else {
        this.ball.updateVec(0, -10);
        this.launched = true;
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/scripts/top_border.js":
/*!***********************************!*\
  !*** ./src/scripts/top_border.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TopBorder = /*#__PURE__*/function () {
  function TopBorder(ctx) {
    _classCallCheck(this, TopBorder);

    this.ctx = ctx;
    this.x = 250;
    this.y = 250;
    this.radX = 250;
    this.radY = 200;
  }

  _createClass(TopBorder, [{
    key: "checkCollision",
    value: function checkCollision(ball) {
      if (ball.y > this.y) {
        return;
      } else {
        var distX = Math.abs(ball.x - this.x);
        var distY = Math.abs(ball.y - this.y);
        var dist = Math.pow(distX, 2) / Math.pow(this.radX, 2) + Math.pow(distY, 2) / Math.pow(this.radY, 2);

        if (dist >= 0.98 && dist <= 1.02) {
          if (ball.x < this.x) {
            ball.updatePos(ball.x, ball.y + ball.rad / 2);
            ball.updateVec(ball.vx + 0.85, ball.vy);
          } else {
            ball.updatePos(ball.x, ball.y + ball.rad / 2);
            ball.updateVec(ball.vx - 0.85, ball.vy * 0.9);
          }
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, this.y);
      ctx.ellipse(this.x, this.y, this.radX, this.radY, 0, Math.PI, 0);
      ctx.lineTo(500, 0);
      ctx.closePath();
      ctx.fillStyle = 'black';
      ctx.fill();
    }
  }]);

  return TopBorder;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBorder);

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
    if (e === 'space') ;
    game.launch();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2JvcmRlci5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL3RvcF9ib3JkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWxsIiwiY3R4IiwieCIsInkiLCJ2eCIsInZ5IiwicmFkIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInRpbWVEZWx0YSIsIkJvcmRlciIsImhlaWdodCIsIndpZHRoIiwiY2FudmFzIiwiYmFsbCIsInVwZGF0ZVZlYyIsInVwZGF0ZVBvcyIsImZpbGxSZWN0IiwiR2FtZSIsInByb3BzIiwibGF1bmNoZWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYXN0VGltZSIsImdldENvbnRleHQiLCJUb3BCb3JkZXIiLCJkcmF3IiwiYW5pbWF0ZSIsImJpbmQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwiY2xlYXJDYW52YXMiLCJ1cGRhdGUiLCJjaGVja0NvbGxpc2lvbiIsImJvZHkiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb25zb2xlIiwibG9nIiwicmFkWCIsInJhZFkiLCJkaXN0WCIsImFicyIsImRpc3RZIiwiZGlzdCIsIm1vdmVUbyIsImxpbmVUbyIsImVsbGlwc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImUiLCJsYXVuY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixnQkFBWUMsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ssR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7OztXQUVELGdCQUFPO0FBQ0gsV0FBS0osR0FBTCxDQUFTTSxTQUFUO0FBQ0EsV0FBS04sR0FBTCxDQUFTTyxHQUFULENBQWEsS0FBS04sQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsS0FBS0csR0FBbEMsRUFBdUMsQ0FBdkMsRUFBMENHLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXBELEVBQXVELElBQXZEO0FBQ0EsV0FBS1QsR0FBTCxDQUFTVSxTQUFUO0FBQ0EsV0FBS1YsR0FBTCxDQUFTVyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsV0FBS1gsR0FBTCxDQUFTWSxJQUFUO0FBQ0g7OztXQUVELG1CQUFVVCxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDZCxXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O1dBRUQsbUJBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNaLFdBQUtELENBQUwsR0FBU0EsQ0FBVDtB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QyxFQUF1QyxLQUFLQyxJQUE1QyxFQUFrRCxDQUFsRCxFQUFxRHJDLElBQUksQ0FBQ0MsRUFBMUQsRUFBOEQsQ0FBOUQ7QUFDQVQsU0FBRyxDQUFDbUQsTUFBSixDQUFXLEdBQVgsRUFBZ0IsQ0FBaEI7QUFDQW5ELFNBQUcsQ0FBQ1UsU0FBSjtBQUNBVixTQUFHLENBQUNXLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVgsU0FBRyxDQUFDWSxJQUFKO0FBQ0g7Ozs7OztBQUlMLGlFQUFlaUIsU0FBZixFOzs7Ozs7Ozs7OztBQzFDQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQUosUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsSUFBSSxHQUFHLElBQUloQyxrREFBSixFQUFiO0FBQ0FnQyxNQUFJLENBQUNDLFlBQUw7QUFDQTlCLFVBQVEsQ0FBQzRCLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUNHLENBQUQsRUFBTztBQUFDLFFBQUlBLENBQUMsS0FBSyxPQUFWLEVBQWtCO0FBQUVGLFFBQUksQ0FBQ0csTUFBTDtBQUFjLEdBQWhGO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgdngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnJhZCA9IDVcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSlcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZWModngsIHZ5KSB7XHJcbiAgICAgICAgdGhpcy52eCA9IHZ4XHJcbiAgICAgICAgdGhpcy52eSA9IHZ5XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lRGVsdGEpIHtcclxuICAgICAgICB0aGlzLnZ5ICs9IDAuMDVcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnggXHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsbCIsImNsYXNzIEJvcmRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IDBcclxuICAgICAgICB0aGlzLnkgPSA1MDBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGN0eC5jYW52YXMud2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkID49IHRoaXMueSkge1xyXG4gICAgICAgICAgICBiYWxsLnVwZGF0ZVZlYyhiYWxsLnZ4LCAtYmFsbC52eSAqIDAuNClcclxuICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoYmFsbC54LCB0aGlzLnkgLSBiYWxsLnJhZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9yZGVyIiwiaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJ1xuaW1wb3J0IEJvcmRlciBmcm9tICcuL2JvcmRlcidcbmltcG9ydCBUb3BCb3JkZXIgZnJvbSAnLi90b3BfYm9yZGVyJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5sYXVuY2hlZCA9IGZhbHNlXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gNTAwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDkwMDtcbiAgICB0aGlzLmxhc3RUaW1lID0gMFxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuVG9wQm9yZGVyID0gbmV3IFRvcEJvcmRlcih0aGlzLmN0eClcbiAgICB0aGlzLlRvcEJvcmRlci5kcmF3KClcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmN0eCwgNDkwLCA4OTAsIDAsIC0xMClcbiAgICAvLyB0aGlzLmJvcmRlciA9IG5ldyBCb3JkZXIodGhpcy5jdHgpXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgfVxuXG5cbiAgYW5pbWF0ZSh0aW1lKSB7XG4gICAgY29uc3QgdGltZURlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWVcbiAgICB0aGlzLmNsZWFyQ2FudmFzKClcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgdGhpcy5iYWxsLnVwZGF0ZSh0aW1lRGVsdGEpXG4gICAgICB0aGlzLlRvcEJvcmRlci5jaGVja0NvbGxpc2lvbih0aGlzLmJhbGwpXG4gICAgfVxuICAgIHRoaXMuYmFsbC5kcmF3KClcbiAgICB0aGlzLlRvcEJvcmRlci5kcmF3KClcbiAgICBcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcylcbiAgfVxuXG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxhdW5jaCgpIHtcbiAgICBjb25zb2xlLmxvZygnbG1hbycpXG4gICAgaWYgKHRoaXMubGF1bmNoZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlVmVjKDAsIC0xMClcbiAgICAgIHRoaXMubGF1bmNoZWQgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBUb3BCb3JkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSAyNTBcclxuICAgICAgICB0aGlzLnkgPSAyNTBcclxuICAgICAgICB0aGlzLnJhZFggPSAyNTBcclxuICAgICAgICB0aGlzLnJhZFkgPSAyMDBcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbGxpc2lvbihiYWxsKSB7XHJcbiAgICAgICAgaWYgKGJhbGwueSA+IHRoaXMueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyhiYWxsLnggLSB0aGlzLngpIFxyXG4gICAgICAgICAgICBjb25zdCBkaXN0WSA9IE1hdGguYWJzKGJhbGwueSAtIHRoaXMueSlcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IChkaXN0WCAqKiAyKSAvICh0aGlzLnJhZFgpICoqIDIgKyAoZGlzdFkgKiogMikgLyAodGhpcy5yYWRZKSAqKiAyXHJcbiAgICAgICAgICAgIGlmIChkaXN0ID49IDAuOTggJiYgZGlzdCA8PSAxLjAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFsbC54IDwgdGhpcy54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoYmFsbC54LCBiYWxsLnkgKyBiYWxsLnJhZCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoYmFsbC52eCArIDAuODUsIGJhbGwudnkpICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbC51cGRhdGVQb3MoYmFsbC54LCBiYWxsLnkgKyBiYWxsLnJhZCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoYmFsbC52eCAtIDAuODUsIGJhbGwudnkgKiAwLjkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eFxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgMClcclxuICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMueSlcclxuICAgICAgICBjdHguZWxsaXBzZSh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRYLCB0aGlzLnJhZFksIDAsIE1hdGguUEksIDApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oNTAwLCAwKVxyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snXHJcbiAgICAgICAgY3R4LmZpbGwoKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQm9yZGVyIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5jcmVhdGVDYW52YXMoKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge2lmIChlID09PSAnc3BhY2UnKTsgZ2FtZS5sYXVuY2goKX0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==