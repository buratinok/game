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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/timer.js":
/*!********************************!*\
  !*** ./src/assets/js/timer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Получаем обекты, переменные счечика, булево значение
var $count = 0;
var $time = document.querySelector('.timer__hr');
var $timeMs = document.querySelector('.timer__mls');
var $timer = document.querySelector('#timer');
var $start = document.querySelector('.start');
var $split = document.querySelector('.split');
var $reset = document.querySelector('.reset');
var $info = document.querySelector('.info');
var $pause = false;
var $in, $hours, $minutes, $seconds, $mlseconds;
var isPause = false; //на поле timer отслеживаем события

$timer.addEventListener('click', function (ev) {
  var $ev = ev.target;
  var $if = $ev == $start ? $start : $ev == $split ? $split : $ev == $reset ? $reset : '';

  switch ($if) {
    case $start:
      $startsTimer();
      $startPause();
      if (isPause == false) $splitTimer();
      break;

    case $split:
      $splitTimer();
      break;

    case $reset:
      $resetTimer();
      break;
  }
}); //функцыя добавления нуля если еньше 10

function plusNull(dt) {
  if (dt < 10) dt = '0' + dt;
  return dt;
} //функцыя паузы таймера блокировка кнопок, изменение стилей


function $startPause() {
  if ($pause == true) {
    $start.innerHTML = 'Start';
    $start.style.backgroundColor = '';
    $reset.style.pointerEvents = '';
    $reset.style.color = '';
    $reset.style.backgroundColor = '';
    $split.style.pointerEvents = 'none';
    $split.style.color = '#505050';
    $split.style.backgroundColor = 'white';
    $pause = false;
    isPause = false;
  } else if ($pause == false) {
    $start.innerHTML = 'Pause';
    $start.style.backgroundColor = 'black';
    $reset.style.pointerEvents = 'none';
    $reset.style.color = '#505050';
    $reset.style.backgroundColor = 'white';
    $split.style.pointerEvents = '';
    $split.style.color = '';
    $split.style.backgroundColor = '';
    isPause = true;
    $pause = true;
  }
} //функцыя запуска таймера setInterval


function $startsTimer() {
  if (isPause == false) {
    $in = setInterval(function () {
      $hours = plusNull(Math.floor(++$count / (1000 * 60 * 60) % 24));
      $minutes = plusNull(Math.floor(++$count / 1000 / 60 % 60));
      $seconds = plusNull(Math.floor(++$count / 1000 % 60));
      $mlseconds = plusNull(Math.floor(++$count % 1000));
      $time.innerHTML = "".concat($hours, ":").concat($minutes, ":").concat($seconds, ".").concat(('' + $mlseconds * 100).substr(0, 1));
      $timeMs.innerHTML = "".concat(('' + $mlseconds).slice(-2));
    }, 1);
  } else if (isPause == true) {
    clearInterval($in);
  }
} //функцыя создание контрольной точки


function $splitTimer() {
  var $infoSplit = $time.innerHTML + $timeMs.innerHTML;
  var $slitElem = document.createElement('div');
  $slitElem.classList = 'info__split mt_1';
  $slitElem.innerHTML = $infoSplit;
  $info.appendChild($slitElem);
} //функцыя очистки таймера и удаление данных контрольной точки


function $resetTimer() {
  var $infoSplit = document.querySelector('.info__split');
  $count = 0;
  $time.innerHTML = '00:00:00.0';
  $timeMs.innerHTML = '00';

  while ($info.firstChild) {
    $info.removeChild($info.firstChild);
  }

  if (isPause == false) {
    $reset.style.pointerEvents = 'none';
    $reset.style.color = '#505050';
    $reset.style.backgroundColor = 'white';
  } else {
    $reset.style.pointerEvents = '';
    $reset.style.color = '';
    $reset.style.backgroundColor = '';
  }
}

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./src/assets/js/timer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\courses\game\src\assets\js\timer.js */"./src/assets/js/timer.js");


/***/ })

/******/ });
//# sourceMappingURL=timer.js.map