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
    this.canvas.width = 600;
    this.canvas.height = 900;
    this.lastTime = 0;
    this.ctx = this.canvas.getContext("2d");
    this.TopBorder = new _top_border__WEBPACK_IMPORTED_MODULE_2__.default(this.ctx);
    this.TopBorder.draw();
    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, 580, 890, 0, 0); // this.border = new Border(this.ctx)

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
    this.x = ctx.canvas.width / 2;
    this.y = 250;
    this.radX = 300;
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
            ball.updateVec(ball.vx + 1, ball.vy);
          } else {
            ball.updatePos(ball.x, ball.y + ball.rad / 2);
            ball.updateVec(ball.vx - 1, ball.vy * 0.9);
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
      ctx.lineTo(600, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9iYWxsLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL2JvcmRlci5qcyIsIndlYnBhY2s6Ly9mb29kLXdhcnMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9zY3JpcHRzL3RvcF9ib3JkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vZC13YXJzLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kLXdhcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2Qtd2Fycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2Qtd2Fycy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWxsIiwiY3R4IiwieCIsInkiLCJ2eCIsInZ5IiwicmFkIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInRpbWVEZWx0YSIsIkJvcmRlciIsImhlaWdodCIsIndpZHRoIiwiY2FudmFzIiwiYmFsbCIsInVwZGF0ZVZlYyIsInVwZGF0ZVBvcyIsImZpbGxSZWN0IiwiR2FtZSIsInByb3BzIiwibGF1bmNoZWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYXN0VGltZSIsImdldENvbnRleHQiLCJUb3BCb3JkZXIiLCJkcmF3IiwiYW5pbWF0ZSIsImJpbmQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwiY2xlYXJDYW52YXMiLCJ1cGRhdGUiLCJjaGVja0NvbGxpc2lvbiIsImJvZHkiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb25zb2xlIiwibG9nIiwicmFkWCIsInJhZFkiLCJkaXN0WCIsImFicyIsImRpc3RZIiwiZGlzdCIsIm1vdmVUbyIsImxpbmVUbyIsImVsbGlwc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImNyZWF0ZUNhbnZhcyIsImUiLCJsYXVuY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixnQkFBWUMsR0FBWixFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ssR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7OztXQUVELGdCQUFPO0FBQ0gsV0FBS0osR0FBTCxDQUFTTSxTQUFUO0FBQ0EsV0FBS04sR0FBTCxDQUFTTyxHQUFULENBQWEsS0FBS04sQ0FBbEIsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsS0FBS0csR0FBbEMsRUFBdUMsQ0FBdkMsRUFBMENHLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXBELEVBQXVELElBQXZEO0FBQ0EsV0FBS1QsR0FBTCxDQUFTVSxTQUFUO0FBQ0EsV0FBS1YsR0FBTCxDQUFTVyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsV0FBS1gsR0FBTCxDQUFTWSxJQUFUO0FBQ0g7OztXQUVELG1CQUFVVCxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDZCxXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O1dBRUQsbUJBQVVILENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNaLFdBQUtELENBQUwsR0FBU0EsQ0FBVDtB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QixLQUFLQyxDQUF6QixFQUE0QixLQUFLMEMsSUFBakMsRUFBdUMsS0FBS0MsSUFBNUMsRUFBa0QsQ0FBbEQsRUFBcURyQyxJQUFJLENBQUNDLEVBQTFELEVBQThELENBQTlEO0FBQ0FULFNBQUcsQ0FBQ21ELE1BQUosQ0FBVyxHQUFYLEVBQWdCLENBQWhCO0FBQ0FuRCxTQUFHLENBQUNVLFNBQUo7QUFDQVYsU0FBRyxDQUFDVyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FYLFNBQUcsQ0FBQ1ksSUFBSjtBQUNIOzs7Ozs7QUFJTCxpRUFBZWlCLFNBQWYsRTs7Ozs7Ozs7Ozs7QUMxQ0E7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUFKLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLElBQUksR0FBRyxJQUFJaEMsa0RBQUosRUFBYjtBQUNBZ0MsTUFBSSxDQUFDQyxZQUFMO0FBQ0E5QixVQUFRLENBQUM0QixnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDRyxDQUFELEVBQU87QUFBQyxRQUFJQSxDQUFDLEtBQUssT0FBVixFQUFrQjtBQUFFRixRQUFJLENBQUNHLE1BQUw7QUFBYyxHQUFoRjtBQUNELENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHZ4LCB2eSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy5yYWQgPSA1XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVjKHZ4LCB2eSkge1xyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvcyh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZURlbHRhKSB7XHJcbiAgICAgICAgdGhpcy52eSArPSAwLjA1XHJcblxyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4IFxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGwiLCJjbGFzcyBCb3JkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSAwXHJcbiAgICAgICAgdGhpcy55ID0gNTAwXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMFxyXG4gICAgICAgIHRoaXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgKyBiYWxsLnJhZCA+PSB0aGlzLnkpIHtcclxuICAgICAgICAgICAgYmFsbC51cGRhdGVWZWMoYmFsbC52eCwgLWJhbGwudnkgKiAwLjQpXHJcbiAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgdGhpcy55IC0gYmFsbC5yYWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJ1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvcmRlciIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCdcbmltcG9ydCBCb3JkZXIgZnJvbSAnLi9ib3JkZXInXG5pbXBvcnQgVG9wQm9yZGVyIGZyb20gJy4vdG9wX2JvcmRlcic7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMubGF1bmNoZWQgPSBmYWxzZVxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDYwMDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA5MDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IDBcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLlRvcEJvcmRlciA9IG5ldyBUb3BCb3JkZXIodGhpcy5jdHgpXG4gICAgdGhpcy5Ub3BCb3JkZXIuZHJhdygpXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jdHgsIDU4MCwgODkwLCAwLCAwKVxuICAgIC8vIHRoaXMuYm9yZGVyID0gbmV3IEJvcmRlcih0aGlzLmN0eClcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICB9XG5cblxuICBhbmltYXRlKHRpbWUpIHtcbiAgICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lIC0gdGhpcy5sYXN0VGltZVxuICAgIHRoaXMuY2xlYXJDYW52YXMoKVxuICAgIGlmICh0aGlzLmxhdW5jaGVkKSB7XG4gICAgICB0aGlzLmJhbGwudXBkYXRlKHRpbWVEZWx0YSlcbiAgICAgIHRoaXMuVG9wQm9yZGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuYmFsbClcbiAgICB9XG4gICAgdGhpcy5iYWxsLmRyYXcoKVxuICAgIHRoaXMuVG9wQm9yZGVyLmRyYXcoKVxuICAgIFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICB9XG5cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKVxuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgbGF1bmNoKCkge1xuICAgIGNvbnNvbGUubG9nKCdsbWFvJylcbiAgICBpZiAodGhpcy5sYXVuY2hlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFsbC51cGRhdGVWZWMoMCwgLTEwKVxuICAgICAgdGhpcy5sYXVuY2hlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIFRvcEJvcmRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG4gICAgICAgIHRoaXMueCA9IGN0eC5jYW52YXMud2lkdGggLyAyXHJcbiAgICAgICAgdGhpcy55ID0gMjUwXHJcbiAgICAgICAgdGhpcy5yYWRYID0gMzAwXHJcbiAgICAgICAgdGhpcy5yYWRZID0gMjAwXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oYmFsbCkge1xyXG4gICAgICAgIGlmIChiYWxsLnkgPiB0aGlzLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnMoYmFsbC54IC0gdGhpcy54KSBcclxuICAgICAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyhiYWxsLnkgLSB0aGlzLnkpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSAoZGlzdFggKiogMikgLyAodGhpcy5yYWRYKSAqKiAyICsgKGRpc3RZICoqIDIpIC8gKHRoaXMucmFkWSkgKiogMlxyXG4gICAgICAgICAgICBpZiAoZGlzdCA+PSAwLjk4ICYmIGRpc3QgPD0gMS4wMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhbGwueCA8IHRoaXMueCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgYmFsbC55ICsgYmFsbC5yYWQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKGJhbGwudnggKyAxLCBiYWxsLnZ5KSAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlUG9zKGJhbGwueCwgYmFsbC55ICsgYmFsbC5yYWQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGwudXBkYXRlVmVjKGJhbGwudnggLSAxLCBiYWxsLnZ5ICogMC45KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHhcclxuICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICBjdHgubW92ZVRvKDAsIDApXHJcbiAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLnkpXHJcbiAgICAgICAgY3R4LmVsbGlwc2UodGhpcy54LCB0aGlzLnksIHRoaXMucmFkWCwgdGhpcy5yYWRZLCAwLCBNYXRoLlBJLCAwKTtcclxuICAgICAgICBjdHgubGluZVRvKDYwMCwgMClcclxuICAgICAgICBjdHguY2xvc2VQYXRoKClcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJ1xyXG4gICAgICAgIGN0eC5maWxsKClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJvcmRlciIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUuY3JlYXRlQ2FudmFzKCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtpZiAoZSA9PT0gJ3NwYWNlJyk7IGdhbWUubGF1bmNoKCl9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=