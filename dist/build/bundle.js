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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wow = void 0;
var player = {};

player.init = function (_wow) {
	console.log(undefined);
	wow = _wow;
	return player;
};

player.hello = function () {
	console.log(wow);
	return player;
};

module.exports = player;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ui = function ui() {
	var element = void 0;
	var params = {};
	var mouseActions = {
		canDrag: false
	};
	undefined.init = function (p) {
		console.log('initalizing ', p);
		params.container = p.container || null;
		params.width = p.width || DEFAULT_WIDTH;
		params.height = p.height || DEFAULT_WIDTH;
		params.x = p.x || DEFAULT_WIDTH;
		params.y = p.y || DEFAULT_WIDTH;
		params.draggable = p.draggable || false;
		params.name = p.name || '';
		params.background = p.background || 'gray';
		element = draw();
		render(element);
		return element;
	};

	undefined.hello = function () {
		console.log(wow);
		return ui;
	};

	function draw() {
		var el = document.createElement('DIV');

		//defaults
		el.style.setProperty('border-radius', '50%');

		el.style.setProperty('width', params.width + 'px');
		el.style.setProperty('height', params.height + 'px');
		el.style.setProperty('background', params.background);
		el.style.setProperty('transform', 'translate(' + params.x + 'px, ' + params.y + 'px)');
		el.style.position;
		if (params.container) {
			params.container.append(child(el));
		} else {
			document.body.appendChild(el);
		}

		return el;
	}

	function render(e) {
		if (params.draggable) {
			e.addEventListener('mousedown', function () {
				mouseActions.canDrag = true;
			});

			window.addEventListener('mousemove', function (ev) {
				if (mouseActions.canDrag) {
					console.log('moving', params.name);
					e.style.setProperty('transform', 'translate(' + (ev.pageX - params.width / 2) + 'px, ' + (ev.pageY - params.height / 2) + 'px)');
					console.log(e);
				}
			});
			document.addEventListener('mouseup', function () {
				mouseActions.canDrag = false;
			});
			/*e.addEventListener('mouseleave', () => {
   	mouseActions.canDrag = false;
   });*/
		}
	}
};

var DEFAULT_WIDTH = 30;

module.exports = ui;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//strangerer things
var player = __webpack_require__(0);
var ui = __webpack_require__(1);

var elem1 = new ui();

var elem2 = new ui();

elem2.init({
	width: 30,
	height: 30,
	background: '#f07125',
	y: 300,
	draggable: true,
	name: 'two'
});

elem1.init({
	width: 50,
	height: 50,
	background: '#58CAE5',
	x: 100,
	draggable: true,
	name: 'one'
});

var test = 'this';
console.log('testing ' + test, player);
player.init('webpack setup').hello();

/***/ })
/******/ ]);