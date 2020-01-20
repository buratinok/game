/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/button */ "./src/assets/js/component/button.js");
/* harmony import */ var _component_playing_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/playing_field */ "./src/assets/js/component/playing_field.js");
/* harmony import */ var _component_play_again__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/play_again */ "./src/assets/js/component/play_again.js");
//module js game



Object(_component_button__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_component_playing_field__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_component_play_again__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/assets/js/component/button.js":
/*!*******************************************!*\
  !*** ./src/assets/js/component/button.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var buttonClick = function buttonClick() {
  /*
  * game
  * */

  /*
  * переменые
   */
  var startBlock = document.querySelector('#startBlock');
  var startBtn = document.querySelector('#startBtn');
  var resetBlock = document.querySelector('#resetBlock');
  var playAgain = document.querySelector('.play__again');
  var startGame = document.querySelector('#startGame');
  var start = false;
  startBtn.addEventListener('click', function (event) {
    if (start == false) {
      startBlock.style.display = 'none';
      startGame.style.display = '';
      start = true;
    } //устанавливаем таймер


    function counTime() {
      var _coun = document.querySelector('#second');

      _coun.innerHTML = '0' + --_coun.innerHTML;

      if (_coun.innerHTML == 0) {
        startGame.style.display = 'none';
        resetBlock.style.display = '';
      } else {
        setTimeout(counTime, 2000);
      }
    } //запускаем таймер через 3с


    setTimeout(counTime, 2000);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (buttonClick);

/***/ }),

/***/ "./src/assets/js/component/play_again.js":
/*!***********************************************!*\
  !*** ./src/assets/js/component/play_again.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// повтор игры
var playAgain = function playAgain() {
  var playAgain = document.querySelectorAll('.play__again');

  for (var i = 0; i < playAgain.length; i++) {
    playAgain[i].onclick = function () {
      location.reload();
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (playAgain);

/***/ }),

/***/ "./src/assets/js/component/playing_field.js":
/*!**************************************************!*\
  !*** ./src/assets/js/component/playing_field.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//module playing field
var playingField = function playingField() {
  //получаем мяч выставляем базовые значения
  var ball = document.querySelector('#ball');
  ball.style.background = 'green';
  ball.style.width = '100px';
  ball.style.height = '100px';
  ball.innerHTML = 'ball';
  ball.style.color = '#fff';
  ball.style.fontSize = '26px';
  ball.style.display = 'flex';
  ball.style.alignItems = 'center';
  ball.style.justifyContent = 'center';
  ball.style.cursor = 'pointer'; //получаем счечик выставляем базовые значения

  var stars = document.querySelector('#stars');
  var _count = 0;
  stars.style.color = '#00FFAB';
  stars.innerHTML = '0';
  stars.style.cursor = 'pointer'; //получаем жизни выставляем базовые значения

  var lifes = document.querySelector('#lifes');
  lifes.innerHTML = '<span></span><span></span><span></span><span></span><span></span>'; //прослушиваем событие click на поле и изменяем соответственно условий

  igra.addEventListener('click', function (event) {
    /*получаем элементы*/
    var _el = event.target,
        min = 15,
        max = 85; //получение случайного числа

    var _numX = Math.floor(Math.random() * (max - min + 1) + min);

    var _numY = Math.floor(Math.random() * (max - min + 1) + min); //мяч


    if (_el === ball) {
      _el.classList.add('igra__ball_bounce_out');

      setTimeout(function () {
        _el.style.width = '';
        _el.style.height = '';
        _el.innerHTML = '';
        _el.style.background = '#ff5600';
        stars.style.color = '#fff';
        stars.innerHTML = ++_count;
        _el.style.top = _numY + '%';
        _el.style.left = _numX + '%';

        _el.classList.remove('igra__ball_bounce_out');
      }, 500);
    } //счечик


    if (_el === stars && _el.innerHTML !== '0' && ball.style.top !== '') {
      _count = 0;
      _el.innerHTML = _count;
      ball.style.top = '50%';
      ball.style.left = '50%';
      ball.style.width = '100px';
      ball.style.height = '100px';
      ball.style.background = 'green';
      ball.innerHTML = 'ball';
      _el.style.color = '#00ffab';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (playingField);

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\courses\game\src\assets\js\app.js */"./src/assets/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map