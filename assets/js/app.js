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
/* harmony import */ var _traffic_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traffic_ball */ "./src/assets/js/component/traffic_ball.js");
/**
 *  Функцыя button отвечает за начало игры
 */


var buttonClick = function buttonClick() {
  // получаем обєкты на поле кешируем их
  var startBlock = document.querySelector('#startBlock');
  var startBtn = document.querySelector('#startBtn');
  var resetBlock = document.querySelector('#resetBlock');
  var playAgain = document.querySelector('.play__again');
  var startGame = document.querySelector('#startGame'); //начальное состояние игры

  var start = false; //устанавлеваем событие на кнопку start

  startBtn.addEventListener('click', function (event) {
    //запускаем мячик по колу
    Object(_traffic_ball__WEBPACK_IMPORTED_MODULE_0__["default"])(); //Проверяем начальное состояние если все в порядке переключаемся

    if (start == false) {
      startBlock.style.display = 'none';
      startGame.style.display = '';
      start = true;
    } //устанавливаем таймер отсчета времени минуты и секкунды


    var _timer = function counTime() {
      //получаем и устанавливаем минуты
      var _minutes = document.querySelector('#minutes');

      _minutes.innerHTML = _minutes.innerHTML; //получаем и устанавливаем секунды

      var _seconds = document.querySelector('#seconds');

      _seconds.innerHTML = '0' + --_seconds.innerHTML; //проверяем окончание времени

      if (_minutes.innerHTML == 0 && _seconds.innerHTML == 0) {
        startGame.style.display = 'none';
        resetBlock.style.display = '';
        clearTimeout(_timer);
      } else {
        //обнуляем таймер
        setTimeout(counTime, 1000);
      }
    }; //запускаем таймер через 2с после загрузки игры


    setTimeout(_timer, 2000);
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
/**
 *  Функцыя play_again
 *  отвечает за перезапучск окна игры в мяч
 *
 */
var playAgain = function playAgain() {
  //получаем все кнопки
  var playAgain = document.querySelectorAll('.play__again'); //перебираем все кнопки play__again и устанавливаем событие при котором перезагружается игра

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
/*
*  module playing field
*
*  Отвечает за базовые значения счечика, мяча, жизни
*  Следит за событиями на поле игры
*
*/
var playingField = function playingField() {
  //получаем и проверяем наличие мяч на поле выставляем базовые значения
  var ourBall = false;
  var ball = document.querySelector('#ball');

  if (ball) {
    ball.style.background = 'green';
    ball.style.display = 'flex';
    ball.style.alignItems = 'center';
    ball.style.justifyContent = 'center';
    ball.style.cursor = 'pointer';
    var ourBall = true;
  }

  console.log("\u043C\u044F\u0447 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 ".concat(ourBall)); //выставляем базовые значения stars

  var stars = document.querySelector('#stars');
  stars.style.color = '#00FFAB';
  stars.innerHTML = stars.dataset.count;
  stars.style.cursor = 'pointer'; //устанавливаем счечик в 0

  var _count = stars.dataset.count;
  console.log("\u0441\u0447\u0435\u0442 \u0438\u0433\u0440\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D ".concat(_count)); //получаем жизни выставляем базовые значения

  var lifes = document.querySelector('#lifes');
  lifes.innerHTML = '<span></span><span></span><span></span><span></span><span></span>'; //прослушиваем событие click на поле и изменяем соответственно условий обєкты на поле и их значения

  igra.addEventListener('click', function (event) {
    //получаем элементы
    var _el = event.target,
        min = 15,
        max = 85; //получение случайного числа ₴₴₴пересмотрель ф-к случайное число

    var _numX = Math.floor(Math.random() * (max - min + 1) + min);

    var _numY = Math.floor(Math.random() * (max - min + 1) + min);

    console.log("\u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B\u0435 X = ".concat(_numX, " Y = ").concat(_numY)); //уменьшаем мяч

    var minWidh = setInterval(function () {
      //уменьшаем мяч, перемещаем при щелчке
      if (_el === ball && _el.style.width !== '0') {
        _el.style.width = _el.clientWidth - 1 + "px";
        _el.style.height = _el.clientHeight - 1 + "px";
        console.log("\u043C\u044F\u0447 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D");
      }
    }, 1); //получаем мяч

    if (_el === ball && ourBall != false) {
      //устанавливаем условия при щелчке на мячик
      setTimeout(function () {
        _el.style.background = '#ff5600';
        stars.style.color = '#fff';
        stars.innerHTML = ++_count;
        _el.style.top = _numY + '%';
        _el.style.left = _numX + '%';
        clearInterval(minWidh);
        _el.style.width = '';
        _el.style.height = '';
        console.log("\u0441\u0447\u0435\u0442 \u0443\u0436\u0435 ".concat(_count));
      }, 500);
    } //обнуление счечика выставление базовых значений


    if (_el === stars && _el.innerHTML !== '0' && ball.style.top !== '') {
      _count = '0';
      _el.innerHTML = _count;
      ball.style.top = '50%';
      ball.style.left = '50%';
      ball.style.background = 'green';
      _el.style.color = '#00ffab';
      console.log("\u0441\u0447\u0435\u0447\u0438\u043A \u0441\u0442\u043E\u0438\u0442 \u0432 ".concat(_el.innerHTML, " \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043C\u044F\u0447\u0430 \u0432 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438"));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (playingField);

/***/ }),

/***/ "./src/assets/js/component/traffic_ball.js":
/*!*************************************************!*\
  !*** ./src/assets/js/component/traffic_ball.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Функцыя traffic ball отвечает за движение мячика
 * */
var trafficBall = function trafficBall() {
  //кешируем мячик
  var ballXY = document.querySelector('.ball');
  console.log("\u0437\u0430\u043F\u0443\u0441\u043A \u043C\u044F\u0447 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443"); //задаем параматров для анимацыи

  var keyfBall = [{
    top: '0',
    left: '0',
    marginTop: '4.1%',
    marginLeft: '4.1%'
  }, {
    top: 0,
    left: '100%',
    marginTop: '4.1%',
    marginLeft: '-4.1%'
  }, {
    top: '100%',
    left: '100%',
    marginTop: '-4.1%',
    marginLeft: '-4.1%'
  }, {
    top: '100%',
    left: '0',
    marginTop: '-4.1%',
    marginLeft: '4.1%'
  }, {
    top: '0',
    left: '0',
    marginTop: '4.1%',
    marginLeft: '4.1%'
  }]; //задаем время анимацыи и вид

  var keyfTiming = {
    duration: 5000,
    iterations: Infinity
  }; //запуск анимацыи

  ballXY.animate(keyfBall, keyfTiming);
};

/* harmony default export */ __webpack_exports__["default"] = (trafficBall);

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