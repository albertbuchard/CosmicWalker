(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("experiment-js"), require("experiment-babylon-js"), require("lodash"), require("experiment-boxes"), require("experiment-mathjs"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("walker", ["experiment-js", "experiment-babylon-js", "lodash", "experiment-boxes", "experiment-mathjs", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["walker"] = factory(require("experiment-js"), require("experiment-babylon-js"), require("lodash"), require("experiment-boxes"), require("experiment-mathjs"), require("jQuery"));
	else
		root["walker"] = factory(root["experiment"], root["BABYLON"], root["_"], root["experimentBoxes"], root["math"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTextLoaderValue = exports.showLoader = exports.hideLoader = exports.setLoaderValue = exports.explode = exports.hideCross = exports.showCross = exports.setViewForDirection = exports.hidePointSpheres = exports.showPointSpheres = exports.updatePoints = exports.placePoints = exports.checkIdleAndConnection = exports.setBlackScreen = exports.setMargins = exports.highlightPosition = exports.addButton = undefined;

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

var _experimentJs = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (_experimentJs.Array.isArray(arr)) { for (var i = 0, arr2 = (0, _experimentJs.Array)(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return _experimentJs.Array.from(arr); } }

var placePoints = function placePoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (points.length === 0) return;

  var stateManager = this.stateManager;

  var pointSpheres = stateManager.get('pointSpheres', []);

  var redraw = false;
  if (points.length !== pointSpheres.length) {
    redraw = true;
  }

  var tempPointSpheres = [];
  for (var i = 0; i < points.length; i++) {
    var point = points[i];

    if ((0, _experimentJs.hasConstructor)(_experimentJs.Array, point)) {
      var pointSphere = void 0;
      if (redraw || pointSpheres.length < i) {
        // draw a sphere at point and store it in the array
        pointSphere = _experimentBabylonJs2.default.Mesh.CreateSphere('sphere' + i, 32, 0.5, this.scene);
      } else {
        pointSphere = pointSpheres[i];
      }

      pointSphere.position = new (Function.prototype.bind.apply(_experimentBabylonJs2.default.Vector3, [null].concat(_toConsumableArray(point))))();

      tempPointSpheres.push(pointSphere);
    }
  }
  // set the data into the stateManager
  stateManager.set('pointSpheres', tempPointSpheres);
};

var updatePoints = function updatePoints(points) {
  if (points.length === 0) return;

  var stateManager = this.stateManager;

  var pointSpheres = stateManager.get('pointSpheres', []);

  if (pointSpheres.length !== points.length) {
    stateManager.call('placePoints', points);
  } else {
    for (var i = 0; i < pointSpheres.length; i++) {
      var point = points[i];
      if ((0, _experimentJs.hasConstructor)(_experimentJs.Array, point)) {
        pointSpheres[i].position = new (Function.prototype.bind.apply(_experimentBabylonJs2.default.Vector3, [null].concat(_toConsumableArray(point))))();
      }
    }
  }
};

var hidePointSpheres = function hidePointSpheres() {
  var stateManager = this.stateManager;
  var pointSpheres = stateManager.get('pointSpheres', []);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pointSpheres[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pointSphere = _step.value;

      if ((0, _experimentJs.hasConstructor)(_experimentBabylonJs2.default.Mesh, pointSphere)) {
        pointSphere.visibility = false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var showPointSpheres = function showPointSpheres() {
  var stateManager = this.stateManager;
  var pointSpheres = stateManager.get('pointSpheres', []);

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = pointSpheres[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var pointSphere = _step2.value;

      if ((0, _experimentJs.hasConstructor)(_experimentBabylonJs2.default.Mesh, pointSphere)) {
        pointSphere.visibility = true;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var setLoaderValue = function setLoaderValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var loader = this.stateManager.get('loader', null);

  if (loader === null) {
    this.stateManager.call('showLoader', value);
  } else {
    loader.value = value;
  }
};

var setTextLoaderValue = function setTextLoaderValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';

  var textLoader = this.stateManager.get('textLoader', null);

  if (textLoader === null) {
    textLoader = new _experimentBabylonJs2.default.Text2D((0, _experimentJs.String)(value), {
      parent: this.stateManager.get('GUI'),
      fontName: '20px Arial',
      marginAlignment: 'v: bottom, h: center',
      fontSignedDistanceField: true
    });
    _lodash2.default.extend(textLoader.margin, { leftPixels: 0, rightPixels: 0, topPixels: 0, bottomPixels: 51 });

    this.stateManager.set('textLoader', textLoader);
  } else {
    textLoader.text = (0, _experimentJs.String)(value);
  }
};

var hideLoader = function hideLoader() {
  var textLoader = this.stateManager.get('textLoader', null);
  if (textLoader !== null) {
    textLoader.levelVisible = false;
  }
  var loader = this.stateManager.get('loader', null);
  if (textLoader !== null) {
    loader.levelVisible = false;
  }
};

var showLoader = function showLoader() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var guiCanvas = this.stateManager.get('GUI');
  var loader = this.stateManager.get('loader', null);
  if (loader !== null) {
    loader.levelVisible = true;
  } else {
    loader = new _experimentJs.Loader({ parent: guiCanvas,
      size: new _experimentBabylonJs2.default.Size(69, 23),
      border: _experimentBabylonJs2.default.Canvas2D.GetSolidColorBrush(new _experimentBabylonJs2.default.Color4(0.7, 0.7, 0.7, 1)),
      marginAlignment: 'v:bottom, h:center',
      borderThickness: 1 });
    loader.value = value;
    loader.opacity = 1;
    _lodash2.default.extend(loader.margin, { leftPixels: 0.5, rightPixels: 0, topPixels: 0, bottomPixels: 53 });

    this.stateManager.set('loader', loader);
  }

  var textLoader = this.stateManager.get('textLoader', null);
  if (textLoader !== null) {
    textLoader.levelVisible = true;
  } else {
    this.stateManager.call('setLoaderValue', value);
  }
};

var setViewForDirection = function setViewForDirection(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? null : _ref$direction;

  var scene = this.scene;
  var camera = scene.activeCamera;

  if (direction === null) {
    return 'GlobalFunctions.setViewForDirection: direction is null';
  }

  var xPos = direction === 'LEFT' ? -50 : 50;
  camera.position = new _experimentBabylonJs2.default.Vector3(xPos, 0, 0);
  camera.setTarget(new _experimentBabylonJs2.default.Vector3.Zero());
  return 'View changed';
};

var addButton = function addButton() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (typeof this.taskObject === 'undefined') {
    throw new Error('stateManager.addButton: this.taskObject is undefined');
  }

  var stateManager = this.stateManager;
  var canvas = stateManager.get('elements2D').canvas;

  var baseOptions = {
    id: 'button' + stateManager.timeInMs,
    text: 'text',
    x: 50,
    y: 50,
    width: 100,
    height: 50,
    fill: _experimentBabylonJs2.default.Canvas2D.GetSolidColorBrush(new _experimentBabylonJs2.default.Color4(0.8, 0.8, 0.8, 1)),
    clickEventData: null,
    fontName: '30pt Arial',
    baseOpacity: 0.8,
    hoverOpacity: 1,
    zOrder: -0.5,
    marginAlignment: null,
    fontSignedDistanceField: true,
    margin: {},
    padding: {},
    parent: canvas
  };

  baseOptions.margin.leftPixels = 0;
  baseOptions.margin.rightPixels = 0;
  baseOptions.margin.topPixels = 0;
  baseOptions.margin.bottomPixels = 0;
  baseOptions.padding.leftPixels = 0;
  baseOptions.padding.rightPixels = 0;
  baseOptions.padding.topPixels = 0;
  baseOptions.padding.bottomPixels = 0;
  baseOptions.margin = _lodash2.default.extend(baseOptions.margin, options.margin);
  baseOptions.padding = _lodash2.default.extend(baseOptions.padding, options.padding);
  options.margin = baseOptions.margin;
  options.padding = baseOptions.padding;

  // extend options
  options = _lodash2.default.extend(baseOptions, options);

  var buttonOptions = {};
  var margin = {};
  var padding = {};
  if (options.marginAlignment === null) {
    buttonOptions = {
      parent: options.parent,
      id: options.id,
      x: options.x,
      y: options.y,
      width: options.width,
      height: options.height,
      fill: options.fill,
      zOrder: options.zOrder,
      roundRadius: 0,
      children: [new _experimentBabylonJs2.default.Text2D(options.text, {
        fontName: options.fontName,
        marginVAlignment: 'v: center',
        fontSignedDistanceField: options.fontSignedDistanceField,
        marginHAlignment: 3
      })]
    };
  } else {
    buttonOptions = {
      parent: options.parent,
      id: options.id,
      width: options.width,
      height: options.height,
      fill: options.fill,
      zOrder: options.zOrder,
      marginAlignment: options.marginAlignment,
      roundRadius: 0,
      children: [new _experimentBabylonJs2.default.Text2D(options.text, {
        fontName: options.fontName,
        marginVAlignment: 'v: center',
        fontSignedDistanceField: options.fontSignedDistanceField,
        marginHAlignment: 3
      })]
    };
    margin = options.margin;
    padding = options.padding;
  }

  // create button and add to canvas
  var buttonRect = new _experimentBabylonJs2.default.Rectangle2D(buttonOptions);

  buttonRect.opacity = options.baseOpacity;

  if (margin !== null) {
    buttonRect.margin.rightPixels = options.margin.rightPixels; // TODO make that a specific function in the framework
    buttonRect.margin.leftPixels = options.margin.leftPixels;
    buttonRect.margin.topPixels = options.margin.topPixels;
    buttonRect.margin.bottomPixels = options.margin.bottomPixels;
  }

  if (padding !== null) {
    buttonRect.padding.rightPixels = padding.rightPixels;
    buttonRect.padding.leftPixels = padding.leftPixels;
    buttonRect.padding.topPixels = padding.topPixels;
    buttonRect.padding.bottomPixels = padding.bottomPixels;
  }

  // Add an observable for hovering
  buttonRect.pointerEventObservable.add(function () {
    buttonRect.opacity = options.hoverOpacity;
  }, _experimentBabylonJs2.default.PrimitivePointerInfo.PointerOver);

  buttonRect.pointerEventObservable.add(function () {
    buttonRect.opacity = options.baseOpacity;
  }, _experimentBabylonJs2.default.PrimitivePointerInfo.PointerOut);

  // Add an observable for clicking
  if (options.clickEventData !== null && options.clickEventData.constructor === _experimentJs.EventData) {
    buttonRect.pointerEventObservable.add(function () {
      options.clickEventData.happenedAt = stateManager.timeInMs;
      options.clickEventData.data.button = buttonRect.id;

      stateManager.addEvent(options.clickEventData);
    }, _experimentBabylonJs2.default.PrimitivePointerInfo.PointerUp);
  }

  return buttonRect;
};

var setMargins = function setMargins(prim, margin) {
  prim.margin.rightPixels = margin.rightPixels; // TODO make that a specific function in the framework
  prim.margin.leftPixels = margin.leftPixels;
  prim.margin.topPixels = margin.topPixels;
  prim.margin.bottomPixels = margin.bottomPixels;
};

var showCross = function showCross() {
  var crossSheet = this.taskObject.cloneAssetIntoScene(this.R.get.crossSheet, this.scene);
  crossSheet.hasAlpha = true;

  var guiCanvas = this.stateManager.get('GUI');

  var cross = this.stateManager.get('cross', null);
  if ((0, _experimentJs.hasConstructor)(_experimentBabylonJs2.default.Sprite2D, cross)) {
    cross.dispose();
  }

  cross = new _experimentBabylonJs2.default.Sprite2D(crossSheet, {
    parent: guiCanvas,
    id: 'cross',
    marginAlignment: 'v: center, h: center',
    spriteSize: new _experimentBabylonJs2.default.Size(20, 20),
    spriteLocation: new _experimentBabylonJs2.default.Vector2(0, 0)
  });

  cross.spriteFrame = 0;
  cross.levelVisible = true;

  this.stateManager.set('cross', cross);
};

var hideCross = function hideCross() {
  var cross = this.stateManager.get('cross', null);

  if (cross !== null) {
    cross.levelVisible = false;
  }
};

var highlightPosition = function highlightPosition() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (typeof this.stateManager === 'undefined') {
    throw new Error('stateManager.highlightPosition: this.stateManager is undefined');
  }

  if (typeof options.position === 'undefined') {
    throw new Error('stateManager.highlightPosition: options.position is undefined');
  }

  return this.stateManager.promise('drawTiles', {
    hightlight: options.position,
    type: typeof options.type !== 'undefined' ? options.type : 'prediction'
  });
};

var explode = function explode(_ref2) {
  var _ref2$meshes = _ref2.meshes,
      meshes = _ref2$meshes === undefined ? null : _ref2$meshes;

  if (meshes === null) {
    return 'No mesh given';
  }
  /* --- Get parameters --- */
  var parameters = this.R.get.parameters.explosion;

  var explosionTexture = this.taskObject.cloneAssetIntoScene(this.R.get.explosionTexture, this.scene);
  explosionTexture.hasAlpha = true;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = meshes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var mesh = _step3.value;

      var particleSystem = new _experimentBabylonJs2.default.ParticleSystem('particles', 1000, this.scene);
      particleSystem.particleTexture = explosionTexture;
      particleSystem.emitter = mesh;
      particleSystem.minEmitBox = new _experimentBabylonJs2.default.Vector3(0, 0, 0);
      particleSystem.maxEmitBox = new _experimentBabylonJs2.default.Vector3(0, 0, 0);
      particleSystem.color1 = new _experimentBabylonJs2.default.Color4(0.7, 0.8, 1.0, 0.8);
      particleSystem.color2 = new _experimentBabylonJs2.default.Color4(0.2, 0.5, 1.0, 0.7);
      particleSystem.colorDead = new _experimentBabylonJs2.default.Color4(0, 0, 0.2, 0.0);
      particleSystem.minSize = parameters.minSize;
      particleSystem.maxSize = parameters.maxSize;
      particleSystem.minLifeTime = parameters.minLifeTime;
      particleSystem.maxLifeTime = parameters.maxLifeTime;
      particleSystem.emitRate = parameters.emitRate;
      particleSystem.blendMode = _experimentBabylonJs2.default.ParticleSystem.BLENDMODE_ONEONE;
      particleSystem.gravity = new _experimentBabylonJs2.default.Vector3(0, 0, 0);
      particleSystem.direction1 = new _experimentBabylonJs2.default.Vector3(-5, 5, 5);
      particleSystem.direction2 = new _experimentBabylonJs2.default.Vector3(5, -5, -5);
      particleSystem.minAngularSpeed = 0;
      particleSystem.maxAngularSpeed = Math.PI;
      particleSystem.minEmitPower = parameters.minEmitPower;
      particleSystem.maxEmitPower = parameters.maxEmitPower;
      particleSystem.updateSpeed = 0.025;

      particleSystem.targetStopDuration = 0.5;
      particleSystem.disposeOnStop = true;

      particleSystem.start();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return 'Exploded';
};

var setBlackScreen = function setBlackScreen() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var baseOptions = { // TODO create a defaultOptions()
    on: true
  };

  options = _lodash2.default.extend(baseOptions, options);
  var elements2D = this.stateManager.getGlobal('elements2D');
  var canvas = elements2D.canvas;

  if (!_lodash2.default.has(elements2D, 'blackScreen')) {
    var blackScreen = new _experimentBabylonJs2.default.Rectangle2D({
      parent: canvas,
      id: 'blackScreen',
      position: new _experimentBabylonJs2.default.Vector2(0, 0),
      width: canvas.size.width,
      height: canvas.size.height,
      zOrder: 0
    });

    elements2D.blackScreen = blackScreen;
  }

  if (options.on) {
    elements2D.blackScreen.opacity = 1;
  } else {
    elements2D.blackScreen.opacity = 0;
  }
};

var checkIdleAndConnection = function checkIdleAndConnection() {
  var _this = this;

  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { deferred: new _experimentJs.Deferred(), returnToState: null },
      _ref3$deferred = _ref3.deferred,
      deferred = _ref3$deferred === undefined ? new _experimentJs.Deferred() : _ref3$deferred,
      _ref3$returnToState = _ref3.returnToState,
      returnToState = _ref3$returnToState === undefined ? null : _ref3$returnToState;

  var stateManager = this.stateManager;
  var R = this.R;
  var dataManager = this.dataManager;
  var connection = this.connection;

  var shouldCheckTime = stateManager.get('shouldCheckTime', false);

  if (shouldCheckTime) {
    return dataManager.query('getLastInteraction', null, connection, deferred).then(function (r) {
      var delay = stateManager.timeInMs - r.lastInteraction;
      var delayMin = delay / 60000;
      if (delay > 20 * 60 * 1000) {
        (0, _experimentJs.debugWarn)('running.goToNextPosition: idle for too long');
        stateManager.set('endReason', 'You were idle for more than 20 min: ' + delayMin + ' min');
        stateManager.goToState(R.get.states_end);
      } else if (returnToState !== null && stateManager.currentStateKey !== returnToState) {
        stateManager.goToState(returnToState);
      }
    }).catch(function () {
      (0, _experimentJs.debugWarn)('running.goToNextPosition: lost connection');
      returnToState = returnToState || stateManager.currentStateKey;

      if (stateManager.currentStateKey !== R.get.states_idle) {
        stateManager.call('hideAll');
        stateManager.onNext(_this.R.get.events_unfrozen, function () {
          stateManager.call('showAll');
        });
        _this.state.freeze();
        stateManager.goToState(R.get.states_idle);
      }

      _this.taskObject.modal({ type: 'centralLarge', title: R.get.lostConnectionTitle, content: R.get.lostConnectionContent }).then(function () {
        return (0, _experimentJs.delay)(50);
      }).then(function () {
        stateManager.call('checkIdleAndConnection', { returnToState: returnToState });
      });
    });
  }
  return Promise.resolve();
};

exports.addButton = addButton;
exports.highlightPosition = highlightPosition;
exports.setMargins = setMargins;
exports.setBlackScreen = setBlackScreen;
exports.checkIdleAndConnection = checkIdleAndConnection;
exports.placePoints = placePoints;
exports.updatePoints = updatePoints;
exports.showPointSpheres = showPointSpheres;
exports.hidePointSpheres = hidePointSpheres;
exports.setViewForDirection = setViewForDirection;
exports.showCross = showCross;
exports.hideCross = hideCross;
exports.explode = explode;
exports.setLoaderValue = setLoaderValue;
exports.hideLoader = hideLoader;
exports.showLoader = showLoader;
exports.setTextLoaderValue = setTextLoaderValue;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(17);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentJs = __webpack_require__(0);

var _experimentBoxes = __webpack_require__(3);

var _config = __webpack_require__(7);

var _MainScene = __webpack_require__(8);

var _MainScene2 = _interopRequireDefault(_MainScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * startUp.js
 *
 * This file holds the code that should run on your HTML page after all the framework and page is loaded.
 *
 * Here you should :
 * - create the taskObject
 * - set up the parameters of the task
 * - register loading promise
 * - register the scenes generators
 * - start the task
 * - bind the task paramBox with relevant parameters
 *
 * Do not pollute the global space with too much variables.
 * Here two global variables are created : taskObject and calibrator.
 */
window.taskObject = null;

// import LoadingScene from './scenes/LoadingScene' Using default loading

window.calibrator = null;

// When page is loaded, initiate the task
var defferedDomLoaded = new _experimentJs.Deferred();
document.addEventListener('DOMContentLoaded', function () {
  defferedDomLoaded.resolve();
});

if (typeof window !== 'undefined') {
  /* === Get the absolute path of the library === */
  var scripts = document.getElementsByTagName('script');
  if (scripts.length) {
    var assetsFolderFullpath = scripts[scripts.length - 1].src;
    var delimiterIndices = assetsFolderFullpath.indicesOf('/');
    window.assetsFolderFullpath = assetsFolderFullpath.substr(0, delimiterIndices[delimiterIndices.length - 2]);
  } else {
    window.assetsFolderFullpath = './';
  }
}

var R = new _experimentJs.RessourceManager();
window.p1 = defferedDomLoaded.promise;
window.p2 = R.addFiles(window.assetsFolderFullpath + '/assets/yaml/ressources.yaml', window.assetsFolderFullpath + '/assets/json/trials_json_EM_perturbed.json');

window.loadingPromise = Promise.all([window.p1, window.p2]);

window.loadingPromise.then(function () {
  window.DEBUG_MODE_ON = _config.DEBUG_MODE_ON;

  var taskObject = new _experimentJs.TaskObject((0, _jquery2.default)('.task-canvas'));
  taskObject.R.mergeWith(R);

  /* --- Register scene generators --- */
  var options = {
    level: null
  };

  taskObject.registerSceneGenerator(_MainScene2.default, options);

  var sceneNames = ['loading', 'main'];

  taskObject.R.add({
    parameters: {
      rate: 60, // frame rate in hertz
      framePerPosition: 1,
      numberOfPoints: 5,
      maxObservationTime: 5000,
      fixationTime: 500,
      ITI: 500,
      trialsBeforePause: 200,
      pauseTime: 10 * 60 * 1000,
      shouldRandomize: 'yes',
      feedback: 'no',
      explosion: {
        explosionTime: 500,
        minSize: 0.2,
        maxSize: 1.3,
        minLifeTime: 0.150,
        maxLifeTime: 0.150,
        emitRate: 30,
        minEmitPower: 1,
        maxEmitPower: 2 }
    }
  });

  /* --- Register loading scene generator --- */
  // taskObject.registerLoadingFunction(LoadingScene)
  taskObject.assetsToLoad = {
    crossSheet: {
      path: '/assets/sprites/cross/squareSheetMargin.svg',
      type: 'texture'
    },
    explosionTexture: {
      path: '/assets/sprites/explosion/particle_explosion.png',
      type: 'texture'
    }

    /* list of tweakable variables from the paramBox */

  };var parametersNames = ['parameters.rate', 'parameters.framePerPosition', 'parameters.numberOfPoints', 'parameters.maxObservationTime', 'parameters.fixationTime', 'parameters.ITI', 'parameters.trialsBeforePause', 'parameters.pauseTime', 'parameters.shouldRandomize', 'parameters.feedback', 'parameters.explosion.explosionTime', 'parameters.explosion.minSize', 'parameters.explosion.maxSize', 'parameters.explosion.minLifeTime', 'parameters.explosion.maxLifeTime', 'parameters.explosion.emitRate', 'parameters.explosion.minEmitPower', 'parameters.explosion.maxEmitPower'];

  var parametersConstraints = {
    'parameters.feedback': ['yes', 'no'],
    'parameters.shouldRandomize': ['yes', 'no']

    // const parametersConstraints = {}

    // const rParams = ['agent.scale', 'agent.predictionOpacity', 'tile.scale', 'tile.offset', 'cross.opacity']


    // taskObject.paramBox.bind(taskObject, parametersNames, parametersConstraints)
  };taskObject.paramBox.bind(taskObject.R.data, parametersNames, parametersConstraints);

  /* --- Login --- */
  window.taskObject = taskObject;
  var tempMaxNumberOfRetry = taskObject.dataManager.MAX_NUMBER_OF_RETRY;
  var endpoint = window.assetsFolderFullpath + '/api/php/mysql/index.php';

  /**
   * This function in a form generator that is called automatically by the DataManager when the user needs to login
   * @method loginForm
   * @return {SmartForm}  a SmartForm
   */
  function loginForm() {
    var fields = {
      userId: {
        type: 'input',
        constraints: 'length:3,300', // list of constraints that will be automatically verified: mandatory; alpha; numeric; length:XX; contains:a,b,@,.;
        authorizedValues: null, // athorized values
        parent: null,
        title: 'User Id:'
      },
      password: {
        type: 'password', // field type: input, select, textaera, slider, radio, password
        constraints: 'length:3,300; score: 20', // list of constraints that will be automatically verified: mandatory; alpha; numeric; length:XX; contains:a,b,@,.;
        authorizedValues: null, // athorized values
        parent: null,
        title: 'Enter your password, if you are new here you are free to pick one !' // you can control auto-create account in the php api config
      }
    };
    var options = { fields: fields, title: 'Login Form', format: 'topCentralSmall', callback: function callback(fields) {
        (0, _experimentJs.debuglog)({ endpoint: endpoint, credentials: { userId: fields.userId.value, password: fields.password.value } });
      }
    };
    var form = new _experimentBoxes.SmartForm(options);
    form.buttonText = 'OK';

    var R = taskObject.context.R;
    var stateManager = taskObject.context.stateManager;

    if (stateManager) {
      stateManager.goToState(R.get.states_active);
    }

    return form;
  }

  taskObject.dataManager.authorize_manual_login = true;

  //  If you do not want to store the credentials for the connections localy set this variable to false (the password is not stored in any case, only a logging key)
  // taskObject.dataManager.useLocalStorageCredentials = false
  taskObject.setConnection({ endpoint: endpoint, signInForm: loginForm }) // credentials: { userId: 'John', password: 'wrong' } })
  .then(function (connection) {
    if (connection.loggedIn) {
      return true;
    }
    return taskObject.dataManager.login(connection);
  }).then(function () {
    // reset the retry limit to its original value
    taskObject.dataManager.MAX_NUMBER_OF_RETRY = tempMaxNumberOfRetry;

    /* --- Start task --- */
    return taskObject.startTask();
  }).then(function (message) {
    (0, _experimentJs.debuglog)(message);
    // taskObject.paramBox.bind(taskObject, 'currentScene', parametersConstraints)
    if (sceneNames.length === 1 || typeof taskObject.paramBox.queryString.currentScene === 'undefined') {
      taskObject.currentScene = 'main';
    }
  }).catch(function (e) {
    (0, _experimentJs.debugError)(e);
    taskObject.modal({ type: 'centralLarge', title: R.get.loginError.title.en, content: R.get.loginError.content.en }).then(function () {
      window.open('', '_self').close();
    });
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Experiment.js
 * Created. 2016
 *
 * Experiment.js toolbox.
 *
 * Authors. Albert Buchard
 *
 * Requires: lodash, BABYLON.js, mathjs, jQuery
 *
 * LICENSE Apache-2
 */

if (typeof window !== 'undefined') {
  __webpack_require__(5);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEBUG_MODE_ON = true;

exports.DEBUG_MODE_ON = DEBUG_MODE_ON;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (_experimentJs.Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = MainScene;

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

var _experimentJs = __webpack_require__(0);

var _experimentBoxes = __webpack_require__(3);

var _globalFunctions = __webpack_require__(4);

var _active = __webpack_require__(9);

var _tutorial = __webpack_require__(14);

var _tryout = __webpack_require__(13);

var _running = __webpack_require__(12);

var _pause = __webpack_require__(11);

var _end = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* =============== Main scene =============== */
function MainScene() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // option base
  var optionsBase = {
    sceneKey: 'main',
    canvasBackground: new _experimentBabylonJs2.default.Color4(0, 0, 0, 1),
    backgroundRoundRadius: 0,
    clearColor: new _experimentBabylonJs2.default.Color4(0, 0, 0, 1),
    canvasPercentWidth: 1,
    canvasPercentHeight: 1,
    mode: 'central',
    level: null
  };

  options = _lodash2.default.extend(optionsBase, options);

  /* --- Get taskObject from context --- */
  var taskObject = this.taskObject;

  /* --- Create a basic 3D scene--- */
  var scene = taskObject.create3DScene(options);

  /* --- Add a strong ambient light --- */
  var light0 = new _experimentBabylonJs2.default.HemisphericLight('Hemi0', new _experimentBabylonJs2.default.Vector3(0, 1, 0), scene);
  light0.diffuse = new _experimentBabylonJs2.default.Color3(1, 1, 1);
  light0.specular = new _experimentBabylonJs2.default.Color3(1, 1, 1);
  light0.groundColor = new _experimentBabylonJs2.default.Color3(1, 1, 1);

  /* --- Get stateManager --- */
  var stateManager = scene.stateManager;

  /* --- Get canvas --- */
  // const canvas = scene.initialCanvas

  // const camera = scene.initialCamera
  // // // camera.detachControl(taskObject.canvas)
  // camera.radius = 50
  // camera.alpha = 0
  // camera.beta = Math.PI / 2

  var camera = new _experimentBabylonJs2.default.FreeCamera('OrthoCamera', new _experimentBabylonJs2.default.Vector3(-50, 0, 0), scene);
  camera.mode = _experimentBabylonJs2.default.Camera.ORTHOGRAPHIC_CAMERA;

  var side = 17;
  camera.orthoTop = side;
  camera.orthoBottom = -side;
  camera.orthoLeft = -side * taskObject.renderSize.width / taskObject.renderSize.height;
  camera.orthoRight = side * taskObject.renderSize.width / taskObject.renderSize.height;
  //
  //   // This targets the camera to scene origin
  camera.setTarget(new _experimentBabylonJs2.default.Vector3.Zero());
  //
  scene.activeCamera = camera;
  // camera.setPosition(new BABYLON.Vector3(50, 0, 0))

  var R = taskObject.R;

  // const box = BABYLON.Mesh.CreateBox('', 1, scene)

  /* --- Load assets --- */

  scene.onResize = [];

  stateManager.register(_globalFunctions.addButton, _globalFunctions.highlightPosition, _globalFunctions.setBlackScreen, _globalFunctions.checkIdleAndConnection, _globalFunctions.updatePoints, _globalFunctions.placePoints, _globalFunctions.hidePointSpheres, _globalFunctions.showPointSpheres, _globalFunctions.setViewForDirection, _globalFunctions.showCross, _globalFunctions.hideCross, _globalFunctions.explode, _globalFunctions.setLoaderValue, _globalFunctions.hideLoader, _globalFunctions.showLoader, _globalFunctions.setTextLoaderValue);

  stateManager.call('redrawAssets');

  /* --- Setup data --- */
  var dataManager = this.dataManager;

  /* --- Add cwData table that will hold a summary of the data --- */
  var cwDataFields = ['subject_id', 'trial', 'data_index', 'direction', 'position', 'observation_duration', 'subject_choice', // NA for NOGO
  'correct', 'feedback', 'response_time', // NA for NOGO or no response
  'key_hits', // ['key', 'time'], [k,t], ...
  'clicks', 'has_paused', 'start_observation', 'end_observation', 'responded_at'];

  dataManager.addTable('walkerData', cwDataFields);
  dataManager.addTable('tryoutData', cwDataFields);

  var userId = 'unknown' + this.timeInMs;
  try {
    userId = dataManager.connections[0].credentials.userId;
  } catch (e) {
    (0, _experimentJs.debugError)(e);
  }

  stateManager.set('subject_id', userId);

  /* --- Add the surveyData table --- */
  var surveyDataFields = ['level', 'similarTask', 'taskDifficulty', 'movementWolf', 'boredom', 'dependance', 'repeatsSequence', 'comments'];

  dataManager.addTable('surveyData', surveyDataFields);

  /* --- Add the logs for each level --- */
  var eventFields = ['id', 'flag', 'happenedAt', 'handledAt', 'data'];
  dataManager.addTable('stateRunningEvents', eventFields);
  dataManager.addTable('stateActiveEvents', eventFields);

  /* --- Store scene level inside the stateManager --- */
  stateManager.setGlobal('positionData', {
    indexOnTransitionSequence: -1,
    indexOnPredictionSequence: -1,
    fullSequenceIndex: -1
  });

  stateManager.setGlobal('hasSeenLearningInfo', false);
  stateManager.setGlobal('hasSeenPredictionInfo', false);

  /* --- Setup states --- */

  /* --- Set state key and store them in the stateManager --- */
  R.add({
    states: {
      running: 'running',
      tutorial: 'tutorial',
      tryout: 'tryout',
      tryoutFMRI: 'tryoutFMRI',
      end: 'end'
    },
    checkpoint: {
      tutorialDone: ['tutorialOneDone', 'tutorialTwoDone'],
      levelDone: ['levelOneDone', 'levelTwoDone', 'levelThreeDone', 'levelFourDone'],
      taskDone: 'taskDone',
      taskEndNoComeback: 'taskEndNoComeback'
    },
    flags: {
      levelDefined: 'levelDefined'
    },
    events: {
      sequenceGenerated: 'sequenceGenerated',
      nextTrial: 'nextTrial',
      goNextPosition: 'goNextPosition',
      endObservation: 'endObservation',
      startPrediction: 'startPrediction',
      responseTimeEnded: 'responseTimeEnded',
      isiAfterLearningEnded: 'isiAfterLearningEnded',
      feedbackEnded: 'feedbackEnded',
      isiAfterFeedbackEnded: 'isiAfterFeedbackEnded',
      pauseTransition: 'pauseTransition',
      forcePause: 'forcePause',
      predictionStartBlackout: 'predictionStartBlackout',
      blackoutEnds: 'blackoutEnds',
      predictionEndsBlackout: 'predictionEndsBlackout',
      isiAfterPredictionEndsBlackout: 'isiAfterPredictionEndsBlackout',
      screenWentBlack: 'screenWentBlack',
      playPredictionSound: 'playPredictionSound',
      playObservationSound: 'playObservationSound',
      showModal: 'showModal',
      goToTutorial: 'goToTutorial',
      hasResponded: 'hasResponded',
      restartTutorial: 'restartTutorial',
      goToLevel1: 'goToLevel1',
      goToLevel2: 'goToLevel2',
      goToLevel3: 'goToLevel3',
      goToLevel4: 'goToLevel4',
      tic: 'tic',
      moreThanFiveNA: 'moreThanFiveNA',
      aknowledgedEnding: 'aknowledgedEnding',
      tutorialNext: 'tutorialNext'
    }
  });

  // eslint-disable-next-line

  var _stateManager$addStat = stateManager.addState(R.get.states_tutorial, R.get.states_running, R.get.states_tryout, R.get.states_end),
      _stateManager$addStat2 = _slicedToArray(_stateManager$addStat, 4),
      tutorialState = _stateManager$addStat2[0],
      runningState = _stateManager$addStat2[1],
      tryoutState = _stateManager$addStat2[2],
      endState = _stateManager$addStat2[3];

  var pauseState = stateManager.states.pause;

  /* ======== State Active ======== */
  if (options.level !== null) {
    var eventData = new _experimentJs.EventData(R.get.flags_levelDefined, scene.stateManager.timeInMs, {
      belongsTo: ['globalLog', 'stateActiveEvents'],
      handledAt: null,
      storedAt: null,
      level: options.level
    });
    stateManager.addEvent(eventData);
  } else {
    stateManager.states.active.addAwakeningFunctions(_active.selectLevel);
  }

  stateManager.states.active.addEndingFunctions(_active.endActive);

  stateManager.states.active.addEventFunctions(R.get.flags_levelDefined, _active.startLevel);
  stateManager.states.active.addEventFunctions(R.get.events_goToTutorial, function (_ref) {
    var tutorial = _ref.data.tutorial;

    stateManager.setGlobal('currentTutorial', tutorial);
    stateManager.goToState(R.get.states_tutorial);
  });

  /* ======== State RUNNING ======== */
  var goToPause = function goToPause() {
    if (this.state.shouldPause) {
      this.state.freeze();
      if ((0, _experimentJs.hasConstructor)(Object, this.taskObject.currentModal) && (0, _experimentJs.hasConstructor)(_experimentBoxes.SmartModal, this.taskObject.currentModal.modalBox)) {
        this.taskObject.currentModal.modalBox.hide();
      }
      this.stateManager.goToState(this.R.get.states_pause);
    }
  };

  /* --- Register functions --- */
  runningState.addAwakeningFunctions(_running.startRunning);

  runningState.addEventFunctions(R.get.events_nextTrial, _running.nextTrial);
  runningState.addEventFunctions(R.get.events_goNextPosition, _running.goToNextPosition);
  runningState.addEventFunctions(R.get.events_endObservation, _running.endObservation);

  runningState.addEventFunctions(R.get.events_startPrediction, _running.startPrediction);

  runningState.addEventFunctions(R.get.events_pauseTransition, _running.pauseTransition);

  runningState.addEventFunctions(R.get.events_unfrozen, _running.stateUnfrozen);
  runningState.addEventFunctions(R.get.events_forcePause, goToPause);
  runningState.addEventFunctions(R.get.events_windowBlur, goToPause);
  runningState.addEventFunctions(R.get.events_moreThanFiveNA, goToPause);

  runningState.addEventFunctions(R.get.events_click, _running.checkForClickPrediction);
  runningState.addEventFunctions(R.get.events_keydown, _running.checkKeyStrokeForPrediction);

  runningState.addEventFunctions(R.get.events_playPredictionSound, _running.playSound);
  runningState.addEventFunctions(R.get.events_playObservationSound, _running.playSound);

  /* ======= State Running ======= */

  // Center cross
  // Observe movement
  // Respond at any time
  // ITI
  // Center cross


  /* ======= State Tutorial ======= */
  tutorialState.addAwakeningFunctions(_tutorial.awakeTutorial);

  tutorialState.addEventFunctions(R.get.events_tutorialNext, _tutorial.showNextPage);
  tutorialState.addEventFunctions(R.get.events_showModal, _tutorial.showModal);

  tutorialState.addEventFunctions(R.get.events_windowBlur, goToPause);
  tutorialState.addEventFunctions(R.get.events_unfrozen, _tutorial.tutorialUnfrozen);

  tutorialState.addEventFunctions(R.get.events_playPredictionSound, _running.playSound);
  tutorialState.addEventFunctions(R.get.events_playObservationSound, _running.playSound);

  /* ======= State Tryout ======= */
  dataManager.addTable('stateTryout1', eventFields);
  dataManager.addTable('stateTryout2', eventFields);

  tryoutState.addAwakeningFunctions(_tryout.awakeTryout);
  tryoutState.addEndingFunctions(_tryout.tryoutEnd);

  tryoutState.addEventFunctions(R.get.events_goNextPosition, _tryout.tryoutGoToNextPosition);
  tryoutState.addEventFunctions(R.get.events_endObservation, _running.endObservation);

  tryoutState.addEventFunctions(R.get.events_windowBlur, goToPause);
  tryoutState.addEventFunctions(R.get.events_unfrozen, _tutorial.tutorialUnfrozen);

  tryoutState.addEventFunctions(R.get.events_startPrediction, _tryout.tryoutStartPrediction);
  tryoutState.addEventFunctions(R.get.events_responseTimeEnded, _tryout.tryoutEndPrediction);
  tryoutState.addEventFunctions(R.get.flags_levelDefined, _active.startLevel);
  tryoutState.addEventFunctions(R.get.events_restartTutorial, function () {
    stateManager.goToState(R.get.states_tutorial);
  });

  tryoutState.addEventFunctions(R.get.events_keydown, _tryout.tryoutCheckKeyStrokeForPrediction);
  tryoutState.addEventFunctions(R.get.events_click, _running.checkForClickPrediction);

  /* ======== State Pause ======== */
  // stateManager.setPauseKeyStroke()
  pauseState.addAwakeningFunctions(_pause.awakenPause);
  pauseState.addEndingFunctions(_pause.endPause);
  pauseState.addEventFunctions(R.get.events_keydown, _pause.pauseKeyDown);
  pauseState.addEventFunctions(R.get.events_windowFocus, _pause.pauseKeyDown);
  // pauseState.addEventFunctions(R.get.flags_levelDefined, startLevel)
  // pauseState.addEndingFunctions(function () { this.stateManager.promise('disposeOfButtons') })

  /* ======= prematureEnd State ======= */
  endState.addAwakeningFunctions(_end.awakenEnd);

  return scene;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endActive = exports.selectLevel = exports.startLevel = undefined;

var _experimentJs = __webpack_require__(0);

var selectLevel = function selectLevel() {
  var _this = this;

  if (typeof this.state === 'undefined') {
    throw new Error('state.selectLevel: state is undefined');
  }

  var stateManager = this.stateManager;
  var dataManager = this.dataManager;
  var elements2D = stateManager.get('elements2D');
  // const GUI = stateManager.get('GUI')
  var R = this.R;

  var checkTaskDone = dataManager.query('hasCheckpoint', { checkpoint: R.get.checkpoint_taskDone }, this.connection);
  var checkTaskEndNoComeback = dataManager.query('hasCheckpoint', { checkpoint: R.get.checkpoint_taskEndNoComeback }, this.connection);
  var checkTutorialOne = dataManager.query('hasCheckpoint', { checkpoint: R.get.checkpoint_tutorialDone[0] }, this.connection);

  stateManager.call('hideAll');
  stateManager.set('shouldCheckTime', false);

  var taskEnded = false;
  var deferred = new _experimentJs.Deferred();

  Promise.all([checkTaskDone, checkTaskEndNoComeback, checkTutorialOne]).then(function (results) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var result = _step.value;

        if (typeof result.code === 'undefined') {
          if (stateManager.currentStateKey !== R.get.states_idle) {
            stateManager.goToState(R.get.states_idle);
          }

          _this.taskObject.modal({ type: 'centralLarge', title: R.get.lostConnectionTitle, content: R.get.lostConnectionContent }).then(function () {
            return (0, _experimentJs.delay)(50);
          }).then(function () {
            stateManager.call('checkIdleAndConnection', { returnToState: 'active' });
          });
        } else if (result.code === R.get.checkpoint_taskDone || result.code === R.get.checkpoint_taskEndNoComeback) {
          taskEnded = true;
          stateManager.set('endReason', result.message);
          stateManager.goToState(R.get.states_end);

          deferred.resolve('active.selectLevel: end of task');
          return false;
        } else if (result.code === R.get.checkpoint_tutorialDone[0] && !taskEnded) {
          stateManager.set('shouldCheckTime', true);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return _this.dataManager.query('getCheckpoint', null, _this.connection);
  }).then(function (result) {
    if (result !== false) {
      if (typeof result.code === 'undefined') {
        if (stateManager.currentStateKey !== R.get.states_active) {
          stateManager.goToState(R.get.states_idle);
        }

        _this.taskObject.modal({ type: 'centralLarge', title: R.get.lostConnectionTitle, content: R.get.lostConnectionContent }).then(function () {
          return (0, _experimentJs.delay)(50);
        }).then(function () {
          stateManager.call('checkIdleAndConnection', { returnToState: 'active' });
        });
      }

      var eventLevel = void 0;
      switch (result.code) {
        case R.get.checkpoint_tutorialDone[0]:
          eventLevel = new _experimentJs.EventData(R.get.flags_levelDefined, stateManager.timeInMs, { level: 1 });
          elements2D.wolfFaceSprite.spriteFrame = 0;
          break;
        case R.get.checkpoint_tutorialDone[1]:
          eventLevel = new _experimentJs.EventData(R.get.flags_levelDefined, stateManager.timeInMs, { level: 4 });
          elements2D.wolfFaceSprite.spriteFrame = 3;
          break;
        case R.get.checkpoint_levelDone[0]:
          eventLevel = new _experimentJs.EventData(R.get.flags_levelDefined, stateManager.timeInMs, { level: 2 });
          elements2D.wolfFaceSprite.spriteFrame = 1;
          break;
        case R.get.checkpoint_levelDone[1]:
          eventLevel = new _experimentJs.EventData(R.get.flags_levelDefined, stateManager.timeInMs, { level: 3 });
          elements2D.wolfFaceSprite.spriteFrame = 2;
          break;
        case R.get.checkpoint_levelDone[2]:
          eventLevel = new _experimentJs.EventData(R.get.events_goToTutorial, stateManager.timeInMs, { tutorial: 2 });
          elements2D.wolfFaceSprite.spriteFrame = 3;
          break;
        case R.get.checkpoint_levelDone[3]:
          stateManager.set('endReason', 'You finished the task finished');
          stateManager.goToState(R.get.states_end);
          break;
        case R.get.checkpoint_taskDone:
          stateManager.set('endReason', result.message);
          stateManager.goToState(R.get.states_end);
          break;
        case R.get.checkpoint_taskEndNoComeback:
          stateManager.set('endReason', result.message);
          stateManager.goToState(R.get.states_end);
          break;
        default:
          // Start tutorial
          // eventLevel = new EventData(R.get.flags_levelDefined, stateManager.timeInMs, { level: 3 }) // TODO TAKE THAT BACk
          eventLevel = new _experimentJs.EventData(R.get.events_goToTutorial, stateManager.timeInMs, { tutorial: 1 });

      }

      (0, _experimentJs.delay)(150).then(function () {
        stateManager.addEvent(eventLevel);
      });
      deferred.resolve('active.selectLevel: level selected - resolved');
    }
  }).catch(function () {
    if (stateManager.currentStateKey !== R.get.states_active) {
      stateManager.goToState(R.get.states_idle);
    }

    _this.taskObject.modal({ type: 'centralLarge', title: R.get.lostConnectionTitle, content: R.get.lostConnectionContent }).then(function () {
      return (0, _experimentJs.delay)(50);
    }).then(function () {
      stateManager.call('checkIdleAndConnection', { returnToState: 'active' });
    });
  });

  // GUI.levelVisible = true
  // /* --- Delete buttons --- */
  // stateManager.promise('disposeOfButtons')
  //
  // const eventButtonOne = new EventData(R.get.flags_levelDefined, stateManager.timeInMs, {
  //   level: 1,
  // })
  // const eventButtonTwo = new EventData(R.get.flags_levelDefined, stateManager.timeInMs, {
  //   level: 2,
  // })
  // const eventButtonThree = new EventData(R.get.flags_levelDefined, stateManager.timeInMs, {
  //   level: 3,
  // })
  // const eventButtonFour = new EventData(R.get.flags_levelDefined, stateManager.timeInMs, {
  //   level: 4,
  // })
  //
  // const eventButtonTutorialOne = new EventData(R.get.events_goToTutorial, stateManager.timeInMs, {
  //   tutorial: 1,
  // })
  // const eventButtonTutorialFour = new EventData(R.get.events_goToTutorial, stateManager.timeInMs, {
  //   tutorial: 2,
  // })
  //
  // const width = 220
  // const height = 40
  // const widthOffset = width / 2
  //
  // const buttonOptionLevelOne = {
  //   id: 'levelOne',
  //   parent: GUI,
  //   text: 'Level 1',
  //   marginAlignment: 'h: center, v: bottom',
  //   margin: {
  //     rightPixels: (width) + widthOffset,
  //     topPixels: 0,
  //   },
  //   width,
  //   height,
  //   fill: BABYLON.Canvas2D.GetSolidColorBrush(new BABYLON.Color4(0.8, 0.8, 0.8, 1)),
  //   clickEventData: eventButtonOne,
  //   callbackFunction: null,
  //   fontName: '20pt Arial',
  //   baseOpacity: 0.8,
  //   hoverOpacity: 1,
  // }
  //
  // const buttonOptionTutorialOne = _.extend(_.clone(buttonOptionLevelOne), {
  //   id: 'buttonTutorialLevelFour',
  //   text: 'Tutorial 1',
  //   margin: {
  //     rightPixels: (width) + widthOffset,
  //     bottomPixels: height,
  //   },
  //   clickEventData: eventButtonTutorialOne,
  // })
  //
  //
  // const buttonOptionLevelTwo = _.extend(_.clone(buttonOptionLevelOne), {
  //   id: 'buttonLevelTwo',
  //   text: 'Level 2',
  //   margin: {
  //     rightPixels: widthOffset,
  //     topPixels: 0,
  //   },
  //   clickEventData: eventButtonTwo,
  // })
  //
  // const buttonOptionLevelThree = _.extend(_.clone(buttonOptionLevelOne), {
  //   id: 'buttonLevelThree',
  //   text: 'Level 3',
  //   margin: {
  //     leftPixels: widthOffset,
  //     topPixels: 0,
  //   },
  //   clickEventData: eventButtonThree,
  // })
  //
  // const buttonOptionLevelFour = _.extend(_.clone(buttonOptionLevelOne), {
  //   id: 'buttonLevelFour',
  //   text: 'Level 4',
  //   margin: {
  //     leftPixels: (width) + widthOffset,
  //     topPixels: 0,
  //   },
  //   clickEventData: eventButtonFour,
  // })
  //
  // const buttonOptionTutorialFour = _.extend(_.clone(buttonOptionLevelOne), {
  //   id: 'buttonTutorialLevelFour',
  //   text: 'Tutorial 4',
  //   margin: {
  //     leftPixels: (width) + widthOffset,
  //     bottomPixels: height,
  //   },
  //   clickEventData: eventButtonTutorialFour,
  // })
  //
  // Promise.all([stateManager.promise('addButton', buttonOptionLevelOne),
  //   stateManager.promise('addButton', buttonOptionLevelTwo),
  //   stateManager.promise('addButton', buttonOptionLevelThree),
  //   stateManager.promise('addButton', buttonOptionLevelFour),
  //   stateManager.promise('addButton', buttonOptionTutorialOne),
  //   stateManager.promise('addButton', buttonOptionTutorialFour),
  // ])
  //   .then((buttons) => {
  //     elements2D.levelButtons = buttons
  //     for (const button of buttons) {
  //       button.levelVisible = true
  //     }
  //     deferred.resolve('stateManager.selectLevel: resolved')
  //   })

  return deferred.promise;
};

var startLevel = function startLevel() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (typeof this.taskObject === 'undefined') {
    throw new Error('state.startLevel: this.taskObject is undefined');
  }

  if (typeof options.data.level === 'undefined') {
    throw new Error('state.startLevel: options.level is undefined');
  }

  /* --- Get context --- */
  var taskObject = this.taskObject;
  var stateManager = this.stateManager;
  var R = this.R;
  var elements2D = stateManager.get('elements2D');
  stateManager.emptyTimeTriggerEvents();
  elements2D.agent.opacity = 0;
  elements2D.cross.spriteFrame = R.get.cross_base;

  /* --- Delete buttons --- */
  stateManager.promise('disposeOfButtons');

  stateManager.setGlobal('level', options.data.level);
  stateManager.setGlobal('levelObject', taskObject.parameters.levels[options.data.level - 1]);

  stateManager.set('positionData', {
    indexOnTransitionSequence: -1,
    indexOnPredictionSequence: -1,
    fullSequenceIndex: taskObject.parameters.levels[options.data.level - 1].sequenceObject.fullSequence.length - 3 // TODO PUT IT BACK -1,
  });

  if (stateManager.currentStateKey !== R.get.states_running) {
    stateManager.goToState(R.get.states_running);
  }

  return 'state.startLevel: resolved';
};

var endActive = function endActive() {
  // this.stateManager.promise('disposeOfButtons')
};
exports.startLevel = startLevel;
exports.selectLevel = selectLevel;
exports.endActive = endActive;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.awakenEnd = undefined;

var _experimentJs = __webpack_require__(0);

var awakenEnd = function awakenEnd() {
  var _this = this;

  var R = this.R;
  var scene = this.scene;
  this.stateManager.call('hideAll');
  scene.initialGui.levelVisible = false;
  this.dataManager.authorize_manual_login = false;
  this.dataManager.query('hasCheckpoint', { checkpoint: R.get.checkpoint_taskDone }, this.connection).then(function (r) {
    var event = new _experimentJs.EventData(_this.R.get.events_aknowledgedEnding);
    _this.stateManager.onNext(_this.R.get.events_aknowledgedEnding, function () {
      window.open('', '_self').close();
    });
    var reason = 'You completed the task !';
    var title = R.get.taskFinishedTitle;
    var content = R.get.taskFinishedContent;

    if (r.code !== R.get.checkpoint_taskDone) {
      reason = _this.stateManager.get('endReason', '');
      title = R.get.taskStoppedTitle;
      content = R.get.taskStoppedMessage;
      if (reason !== '') {
        content += R.get.taskStoppedReason.replace('{t}', reason);
      }
      _this.taskObject.setCheckpoint(R.get.checkpoint_taskEndNoComeback, reason);

      _this.taskObject.modal({ type: 'centralLarge', title: title, content: content, event: event });
    } else {
      // this.dataManager.query('getFinalCode', null, this.connection)
      // .then((r) => {
      //   content = content.replace('{c}', r.code)
      _this.taskObject.modal({ type: 'centralLarge', title: title, content: content, event: event });
      // })
    }
  });
};

exports.awakenEnd = awakenEnd; //eslint-disable-line

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pauseKeyDown = exports.endPause = exports.awakenPause = undefined;

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

var _experimentJs = __webpack_require__(0);

var _globalFunctions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var awakenPause = function awakenPause() {
  var stateManager = this.stateManager;
  var levelObject = stateManager.get('levelObject');
  var GUI = stateManager.get('GUI');
  var R = this.R;
  var state = this.state;
  var pauseTime = stateManager.timeInMs;
  var threshold = R.get.thresholdIdle;

  state.hitKeyTime = null;
  state.initialGuiVisible = GUI.levelVisible;

  GUI.backgroundFill = _experimentBabylonJs2.default.Canvas2D.GetSolidColorBrush(new _experimentBabylonJs2.default.Color4(0, 0, 0, 1));
  GUI.levelVisible = true;

  var lastPauseInfo = stateManager.get('lastPauseInfo', { level: levelObject.level, time: pauseTime });
  if (lastPauseInfo.level !== levelObject.level) {
    stateManager.set('pauseTimeLeft', threshold);
  }

  var currentTimeLeft = stateManager.get('pauseTimeLeft', threshold);
  stateManager.set('lastPauseInfo', { level: levelObject.level, time: pauseTime });

  // datamanager get pause left
  var options = { id: 'pauseText',
    parent: GUI,
    marginAlignment: 'h: center, v: center',
    fontName: '30pt Arial',
    fontSignedDistanceField: true
  };

  state.timerText = function () {
    var timeLeft = parseInt((currentTimeLeft - stateManager.timeInMs + pauseTime) / 1000, 10);
    if (timeLeft < 0) {
      return false;
    }
    return R.get.timeLimitText.replace('{n}', (0, _experimentJs.String)(timeLeft));
  };

  var t = 0;
  var delayInMs = 200;
  state.tic = function () {
    state.centerText.levelVisible = true;
    var text = state.timerText();
    if (text === false) {
      stateManager.set('endReason', R.get.endReasonIdle.replace('{t}', threshold / 1000).replace('{l}', levelObject.level));
      stateManager.goToState(R.get.states_end);
    } else {
      state.centerText.text = text;
      (0, _experimentJs.delay)(delayInMs).then(function () {
        if (stateManager.currentStateKey === R.get.states_pause) {
          state.tic();
        }
      });
      t += delayInMs;
      if (t >= 3000) {
        stateManager.get('sounds').prediction.play();
        t = 0;
      }
    }
  };

  if (!(0, _experimentJs.hasConstructor)(_experimentBabylonJs2.default.Text2D, state.centerText)) {
    state.topText = new _experimentBabylonJs2.default.Text2D(R.get.pauseText, options);
    (0, _globalFunctions.setMargins)(state.topText, { topPixels: 0, bottomPixels: 40, leftPixels: 0, rightPixels: 0 });
    state.centerText = new _experimentBabylonJs2.default.Text2D(state.timerText(), options);
  } else {
    state.topText.levelVisible = true;
    state.centerText.levelVisible = true;
    state.centerText.text = state.timerText;
  }

  (0, _experimentJs.delay)(200).then(function () {
    if (stateManager.currentStateKey === R.get.states_pause) {
      state.tic();
    }
  });
};

var pauseKeyDown = function pauseKeyDown() {
  var state = this.state;
  var stateManager = this.stateManager;
  var levelObject = { level: 0 // stateManager.get('levelObject')
  };var R = this.R;
  var context = this;
  var threshold = R.get.thresholdIdle;

  if (state.hitKeyTime === null) {
    state.hitKeyTime = stateManager.timeInMs;
  }

  state.timerText = function () {
    var timeLeft = Math.ceil((3000 - stateManager.timeInMs + state.hitKeyTime) / 1000, 10);
    if (timeLeft < 0) {
      return false;
    }
    return R.get.pauseRestart.replace('{n}', (0, _experimentJs.String)(timeLeft));
  };

  state.tic = function () {
    var text = state.timerText();
    if (text !== false) {
      state.centerText.text = text;
      (0, _experimentJs.delay)(200).then(function () {
        if (!document.hasFocus()) {
          var lastPauseInfo = stateManager.get('lastPauseInfo', { level: levelObject.level, time: stateManager.timeInMs });
          var previousTimeLeft = stateManager.get('pauseTimeLeft', threshold);
          var currentTimeLeft = previousTimeLeft - stateManager.timeInMs + lastPauseInfo.time;

          stateManager.set('pauseTimeLeft', currentTimeLeft);
          awakenPause.bind(context)();
        } else if (stateManager.currentStateKey === R.get.states_pause) {
          state.tic();
        }
      });
    } else if (stateManager.frozenState) {
      stateManager.goToState(stateManager.frozenState);
    }
  };

  (0, _experimentJs.delay)(200).then(function () {
    if (!document.hasFocus()) {
      awakenPause.bind(context)();
    } else if (stateManager.currentStateKey === R.get.states_pause) {
      state.tic();
    }
  });
};

var endPause = function endPause() {
  var stateManager = this.stateManager;
  var state = this.state;
  var levelObject = { level: 0 // stateManager.get('levelObject')
  };var GUI = stateManager.get('GUI');
  var R = this.R;
  var threshold = R.get.thresholdIdle;

  GUI.backgroundFill = _experimentBabylonJs2.default.Canvas2D.GetSolidColorBrush(new _experimentBabylonJs2.default.Color4(1, 1, 1, 0));
  GUI.levelVisible = state.initialGuiVisible;

  state.hitKeyTime = null;
  state.topText.levelVisible = false;
  state.centerText.levelVisible = false;

  var lastPauseInfo = stateManager.get('lastPauseInfo', { level: levelObject.level, time: stateManager.timeInMs });
  var previousTimeLeft = stateManager.get('pauseTimeLeft', threshold);
  var currentTimeLeft = previousTimeLeft - stateManager.timeInMs + lastPauseInfo.time;

  if (currentTimeLeft < -3) {
    stateManager.call('prematureEnd', { reason: R.get.prematureEndPauseAboveThreshold });
  } else {
    stateManager.set('pauseTimeLeft', currentTimeLeft);
  }
};

exports.awakenPause = awakenPause;
exports.endPause = endPause;
exports.pauseKeyDown = pauseKeyDown;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pauseTransition = exports.endObservation = exports.playSound = exports.checkKeyStrokeForPrediction = exports.checkForClickPrediction = exports.startPrediction = exports.goToNextPosition = exports.nextTrial = exports.startRunning = exports.stateUnfrozen = undefined;

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

var _experimentJs = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- State function --- */

var stateUnfrozen = function stateUnfrozen() {
  if (_lodash2.default.has(this.state, 'currentTrialData.hasPaused')) {
    this.state.currentTrialData.hasPaused = true;
  }
};

var pauseTransition = function pauseTransition() {
  var stateManager = this.stateManager;
  var state = this.state;
  var R = this.R;

  /* --- Get parameters --- */
  var parameters = this.R.get.parameters;

  /* --- Get the trial data --- */
  var trials = this.R.get.trials;

  var index = stateManager.get('currentTrial', 0);
  var pausesDone = stateManager.get('pausesDone', 0);

  try {
    if (index + 1 >= trials.length) {
      return this.taskObject.setCheckpoint(R.get.checkpoint_taskDone).promise.then(function () {
        stateManager.goToState(R.get.states_end);
      });
    }
    var maxTransitionTime = parameters.pauseTime + stateManager.timeInMs;
    var promise = stateManager.resolveOnKey({ except: null });
    var shouldtic = true;
    var text2d = void 0;

    var transitionText = function transitionText() {
      var timeLeft = Math.ceil((maxTransitionTime - stateManager.timeInMs) / 1000, 10);
      if (timeLeft < 0) {
        return false;
      }
      return R.get.finishedLevelTransition.replace('{n}', (0, _experimentJs.String)(timeLeft)).replace('{l}', (0, _experimentJs.String)(pausesDone.length));
    };

    state.tic = function () {
      if (!shouldtic) {
        return;
      }
      var text = transitionText();
      if (text !== false) {
        text2d.text = text;
        state.tooltipPause.box.levelVisible = true;
        (0, _experimentJs.delay)(200).then(function () {
          state.tooltipPause.box.levelVisible = false;
          state.tic();
        });
      } else {
        stateManager.set('endReason', 'You were idle for more than 15 min');
        stateManager.goToState(R.get.states_end);
      }
    };

    var centerPosition = (0, _experimentJs.sizeToVec)(this.taskObject.renderSize).scale(0.5);

    state.tooltipPause = stateManager.tooltip({ position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, this.taskObject.renderSize.height / 2 - 100)), text: transitionText(), duration: promise });
    text2d = state.tooltipPause.text;
    this.state.shouldPause = false;
    state.tic();

    return promise.then(function () {
      shouldtic = false;
      stateManager.newEvent(R.get.events_nextTrial, null, null, ['stateRunningEvents']);
      // stateManager.newEvent(R.get.flags_levelDefined, null, { level: level + 1 }, ['globalLog', `stateRunningEventsLvl${level}`])
    });
  } catch (e) {
    (0, _experimentJs.debugError)('running.pauseTransition: error with the level data.');
    stateManager.set('endReason', 'There was an error with the task. We are sorry.');
    stateManager.goToState(R.get.states_end);
    return 'Running.pauseTransition: Error';
  }
};

var startRunning = function startRunning() {
  var _this = this;

  if (typeof this.taskObject === 'undefined') {
    throw new Error('state.startRunning: this.taskObject is undefined');
  }

  var stateManager = this.stateManager;
  var state = this.state;
  var R = stateManager.R;
  var parameters = R.get.parameters;

  R.get.trials = R.get.trials.slice(1, 20);

  if (!document.hasFocus()) {
    stateManager.newEvent(R.get.forcePause);
  }

  state.shouldPause = false;
  state.pausedBetween = [];
  stateManager.call('showAll');
  stateManager.call('setLoaderValue', 0);

  if (stateManager.get('trialIndices') === null) {
    if (parameters.shouldRandomize) {
      stateManager.set('trialIndices', (0, _experimentJs.samplePermutation)((0, _experimentJs.rep)(0, R.get.trials.length).map(function (o, i) {
        return i;
      })));
    } else {
      stateManager.set('trialIndices', (0, _experimentJs.rep)(0, R.get.trials.length).map(function (o, i) {
        return i;
      }));
    }
  }

  /* --- Setup state variables --- */
  if (typeof state.data === 'undefined') {
    state.data = [];
  }
  state.numberOfMissed = 0;
  state.isPredicting = false;

  /* --- Store the data --- */
  var centerPosition = (0, _experimentJs.sizeToVec)(this.taskObject.renderSize).scale(0.5);
  var promise = stateManager.resolveOnKey({ except: null });
  stateManager.tooltip({ position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, this.taskObject.renderSize.height / 2 - 100)), text: 'You are about to start the task\nHit a key to when ready', duration: promise });

  promise.then(function () {
    // show the first position
    var nextTransitionTime = _this.stateManager.timeInMs + 100;
    var nextTransitionEvent = new _experimentJs.EventData(R.get.events_nextTrial, nextTransitionTime, {
      belongsTo: ['globalLog', 'stateRunningEvents'],
      handledAt: null,
      storedAt: null
    });
    stateManager.addTimeTriggerEvent(nextTransitionEvent);
  });

  return 'state.startRunning: resolved';
};

var storeData = function storeData() {
  var state = this.state;
  var stateManager = this.stateManager;

  /* --- If currentTrialData is already set, send it to the dataManager to be stored before handling new position --- */
  var dataToStore = state.currentTrialData;
  try {
    if ((0, _experimentJs.hasConstructor)(Object, state.currentTrialData) && stateManager.get('subject_id')) {
      var _state$currentTrialDa = state.currentTrialData,
          trial = _state$currentTrialDa.trial,
          dataIndex = _state$currentTrialDa.dataIndex,
          direction = _state$currentTrialDa.direction,
          choice = _state$currentTrialDa.choice,
          feedback = _state$currentTrialDa.feedback,
          responseTime = _state$currentTrialDa.responseTime,
          startObservation = _state$currentTrialDa.startObservation,
          _endObservation = _state$currentTrialDa.endObservation,
          respondedAt = _state$currentTrialDa.respondedAt,
          keysHits = _state$currentTrialDa.keysHits,
          hasPaused = _state$currentTrialDa.hasPaused,
          clicks = _state$currentTrialDa.clicks;

      // check if next position is not end of sequence

      var correct = direction === choice;

      /* --- Store the data --- */
      dataToStore = {
        subject_id: stateManager.get('subject_id'),
        trial: trial,
        data_index: dataIndex,
        direction: direction,
        observation_duration: _endObservation - startObservation,
        subject_choice: choice, // NA for NOGO
        response_time: responseTime, // NA for NOGO or no response
        correct: correct,
        feedback: feedback,
        key_hits: JSON.stringify(keysHits), // ['key', 'time'], [k,t], ...
        clicks: JSON.stringify(clicks),
        has_paused: hasPaused,
        start_observation: startObservation,
        end_observation: _endObservation,
        responded_at: respondedAt,
        belongsTo: ['walkerData']
      };

      stateManager.storeData(dataToStore);
      state.currentTrialData = null;
    }
  } catch (e) {
    var message = 'runningState.goToNextPosition: could not store cwData.';
    (0, _experimentJs.debugError)(message);
    stateManager.storeInErrorLog({ message: message, timestamp: stateManager.timeInMs, data: dataToStore });
    // TODO check that the stateManager will store it in the DB
  }
};

var nextTrial = function nextTrial() {
  var _this2 = this;

  /* --- Get parameters --- */
  var parameters = this.R.get.parameters;

  // explode spheres
  if (parameters.feedback === 'yes' && (0, _experimentJs.hasConstructor)(Object, this.state.currentTrialData) && this.state.currentTrialData.direction === this.state.currentTrialData.choice) {
    this.stateManager.call('explode', { meshes: this.stateManager.get('pointSpheres', []) });
  }
  // start from a new position - set the prediction phase to false
  this.state.isPredicting = false;

  // hide the spheres
  this.stateManager.call('hidePointSpheres');

  /* --- Store Data --- */
  storeData.bind(this)();

  /* --- Get the trial data --- */
  var trials = this.R.get.trials;
  var trialIndices = this.stateManager.get('trialIndices', (0, _experimentJs.rep)(0, this.R.get.trials.length).map(function (o, i) {
    return i;
  }));
  var pausesDone = this.stateManager.get('pausesDone', []);
  var trialIndex = this.stateManager.get('currentTrial', -1) + 1;

  if (trialIndex >= trials.length || Math.floor(trialIndex / parameters.trialsBeforePause) > pausesDone.length) {
    this.stateManager.set('pausesDone', pausesDone.concat(pausesDone.length));
    this.stateManager.newEvent(this.R.get.events_pauseTransition, null, null, ['globalLog', 'stateRunningEvents']);
    return 'End trials';
  }

  this.stateManager.call('setLoaderValue', Math.floor(100 * trialIndex / trials.length));
  this.stateManager.call('setTextLoaderValue', trialIndex);

  // const trialIndex = _.random(0, trials.length - 1)
  this.stateManager.set('currentTrial', trialIndex);
  this.stateManager.set('currentDataTrialIndex', trialIndices[trialIndex]);
  var trialData = trials[trialIndices[trialIndex]]; // NOTE used for randomization

  /* --- Set up the stored data --- */
  // setup the trialData for this specific trial
  var data = {
    trial: trialIndex, // sequenceObject.trial[index],
    dataIndex: trialIndices[trialIndex],
    direction: trialData.direction, // sequenceObject.trialType[index],
    positions: trialData.positions,
    feedback: parameters.feedback,
    currentIndex: -1,
    state: this.state.stateKey,
    choice: null,
    responseTime: null,
    startObservation: null,
    endObservation: null,
    respondedAt: null,
    keysHits: [],
    clicks: [],
    hasPaused: false
  };

  this.state.data.push(data);

  // Change the currentTrialData to match new index
  // keep the currentTrialData reference directly in the state
  this.state.currentTrialData = data;

  // wait for explosion to finish
  (0, _experimentJs.delay)(parameters.explosion.explosionTime).then(function () {
    // change the camera based on the future direction
    _this2.stateManager.call('setViewForDirection', data);

    // show the center cross
    _this2.stateManager.call('showCross');
  });

  // wait fixation time then start looping
  this.stateManager.newEvent(this.R.get.events_goNextPosition, parameters.ITI + parameters.explosion.explosionTime, null, ['stateRunningEvents']);

  return 'End nextTrial';
};

var goToNextPosition = function goToNextPosition() {
  if (this.state.currentTrialData === 'undefined') {
    return 'State.Running.goToNextPosition: undefined current trial data';
  }

  var stateManager = this.stateManager;
  var state = this.state;
  var R = stateManager.R;
  var parameters = R.get.parameters;

  // hide the cross
  stateManager.call('hideCross');

  // get the trial data
  var trialData = state.currentTrialData;

  /* --- Check the participant is doing the task and has valid connection --- */
  if (!document.hasFocus()) {
    stateManager.newEvent(R.get.events_windowBlur, null, null, ['stateRunningEvents']);
  }

  var checkConnection = false;
  if ((0, _experimentJs.hasConstructor)(_experimentJs.Deferred, this.state.checkLastInteraction)) {
    if (!this.state.checkLastInteraction.pending) {
      this.state.checkLastInteraction = new _experimentJs.Deferred();
      checkConnection = true;
    }
  } else {
    this.state.checkLastInteraction = new _experimentJs.Deferred();
    checkConnection = true;
  }

  if (checkConnection) {
    stateManager.call('checkIdleAndConnection', { deferred: this.state.checkLastInteraction });
  }

  /* --- Check if observation has started or set it up --- */
  if (trialData.startObservation === null) {
    trialData.startObservation = stateManager.timeInMs;
  }

  /* --- Check if observation-prediction is finished --- */
  if (stateManager.timeInMs - trialData.startObservation > parameters.maxObservationTime || trialData.choice !== null) {
    trialData.endObservation = stateManager.timeInMs;
    stateManager.newEvent(R.get.events_nextTrial, null, null, ['stateRunningEvents']);
    return 'End observation';
  }

  // make sure the spheres are showing
  this.stateManager.call('showPointSpheres');

  // accept prediction
  state.isPredicting = true;

  /* --- Setup next position --- */
  var positions = trialData.positions;

  /* --- Set index --- */
  if (trialData.currentIndex + parameters.framePerPosition >= positions.length) {
    trialData.currentIndex = -1;
  }
  trialData.currentIndex += parameters.framePerPosition;

  var index = trialData.currentIndex;

  /* --- Check if end of level --- */
  if (index >= positions.length) {
    // positionData.fullSequenceIndex -= 1
    // go to endBlock -> pause - wait for next level to start
    var nextTransitionEvent = new _experimentJs.EventData(R.get.events_pauseTransition, stateManager.timeInMs, {
      belongsTo: ['globalLog', 'stateRunningEvents'],
      handledAt: null,
      storedAt: null
    });
    stateManager.addTimeTriggerEvent(nextTransitionEvent);
    return 'goToNextPosition: resolved. End of sequence.';
  }

  // set up a deferred object to return and catch promises resolution
  var deferred = new _experimentJs.Deferred();

  // Redraw tiles and move to next position
  var points = positions[index];
  var rate = parameters.rate;
  stateManager.promise('updatePoints', points).then(function () {
    // delay(1000 / rate).then(() => {
    stateManager.newEvent(R.get.events_goNextPosition, 1000 / rate, null, ['stateRunningEvents']);
    // })

    if (state.numberOfMissed >= 5) {
      stateManager.newEvent(R.get.events_moreThanFiveNA, null, null, ['stateRunningEvents']);
      deferred.resolve('goToNextPosition: resolved. Too many NA.');
    }

    deferred.resolve('stateManager.goToNextPosition: resolved');
  });
  /* --- Check if data is set and if subject had not been idle  --- */

  return deferred.promise;
};

var endObservation = function endObservation() {
  this.state.currentTrialData.endObservation = this.stateManager.timeInMs;
  this.stateManager.call('setAgentOpacity', { opacity: 0 });
  return 'endObservation resolved';
};

var startPrediction = function startPrediction() {
  if (typeof this.state.currentTrialData === 'undefined') {
    throw new Error('state.startPrediction: state.currentTrialData is undefined');
  }

  var state = this.state;
  var stateManager = this.stateManager;
  var R = stateManager.R;

  state.numberOfMissed += 1;

  var levelObject = stateManager.get('levelObject');
  stateManager.promise('setAgentOpacity', { opacity: R.get.agent_predictionOpacity });

  stateManager.call('drawPredictionTiles');

  var cross = this.stateManager.get('elements2D').cross;
  cross.spriteFrame = R.get.cross_predict;
  if (levelObject.sound === true) {
    this.stateManager.get('sounds').prediction.play();
  }

  state.isPredicting = true;
  state.currentTrialData.startPrediction = stateManager.timeInMs;
  var endResponse = levelObject.predictionDuration;

  this.stateManager.newEvent(R.get.events_responseTimeEnded, endResponse, null, ['stateRunningEvents']);
};

var checkForClickPrediction = function checkForClickPrediction() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _experimentJs.mandatory)();

  try {
    if (typeof this.taskObject === 'undefined') {
      throw new Error('state.checkForClickPrediction: this.taskObject is undefined');
    }

    // todo with click detection Canvas2D
    if (typeof event.data.clientY === 'undefined') {
      throw new Error('state.checkForClickPrediction: event.data.clientY is undefined.');
    }

    if (typeof this.state.currentTrialData === 'undefined') {
      throw new Error('state.checkForClickPrediction: options.trialData is undefined');
    }

    var stateManager = this.stateManager;
    var state = this.state;

    state.currentTrialData.clicks.push([event.data.engineX, event.data.engineY, stateManager.timeInMs]);
  } catch (e) {
    (0, _experimentJs.debugError)(e);
  }
  return 'checkForClickPrediction resolved';
};

var checkKeyStrokeForPrediction = function checkKeyStrokeForPrediction() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _experimentJs.mandatory)();

  try {
    if (typeof this.taskObject === 'undefined') {
      throw new Error('state.checkKeyStrokeForPrediction: this.taskObject is undefined');
    }

    if (typeof event.data.keyCode === 'undefined') {
      throw new Error('state.startPrediction: event.data.keyCode is undefined');
    }

    if (typeof this.state.currentTrialData === 'undefined') {
      throw new Error('state.startPrediction: state.currentTrialData is undefined');
    }

    var stateManager = this.stateManager;
    var state = this.state;
    var R = this.R;

    var keyCode = event.data.keyCode;

    var keyValue = event.data.key;

    if (_lodash2.default.has(state, 'currentTrialData.keysHits')) {
      if (!(0, _experimentJs.hasConstructor)(_experimentJs.Array, state.currentTrialData.keysHits)) {
        state.currentTrialData.keysHits = [];
      }

      state.currentTrialData.keysHits.push([keyValue, keyCode, stateManager.timeInMs]);
    }

    var keys = {
      ArrowLeft: [39, 'LEFT', R.get.cross_bottomRight],
      ArrowRight: [37, 'RIGHT', R.get.cross_topLeft]
    };

    var direction = null;
    for (var key in keys) {
      if (keys.hasOwnProperty(key)) {
        var keyPosition = keys[key];
        if (keyValue === key) {
          direction = keyPosition[1];
        }
      }
    }

    if (direction !== null) {
      /* --- Check if the subjects click was during the prediction phase and that he did not already chose  --- */

      if (state.isPredicting === true && state.currentTrialData.choice === null) {
        /* --- If the key was one of the specified store the corresponding direction, responseTime and choice --- */

        // Store the choice of the subject and responseTime
        state.currentTrialData.choice = direction;
        state.currentTrialData.responseTime = stateManager.timeInMs - state.currentTrialData.startObservation;
        state.currentTrialData.respondedAt = stateManager.timeInMs;

        // stateManager.call('highlightPosition', { direction })

        // reset the number of missed trials
        state.numberOfMissed = 0;

        (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: has chosen direction ' + direction + '.');
        return direction;
      }
      (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: already chosen');
      return false;
    }
    (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: key did not correspond to state selection keys.');
    return false;
  } catch (e) {
    (0, _experimentJs.debugError)(e);
    return false;
  }
};

var playSound = function playSound(event) {
  var sounds = this.stateManager.getGlobal('sounds');
  sounds[event.data.name].play();
};

exports.stateUnfrozen = stateUnfrozen;
exports.startRunning = startRunning;
exports.nextTrial = nextTrial;
exports.goToNextPosition = goToNextPosition;
exports.startPrediction = startPrediction;
exports.checkForClickPrediction = checkForClickPrediction;
exports.checkKeyStrokeForPrediction = checkKeyStrokeForPrediction;
exports.playSound = playSound;
exports.endObservation = endObservation;
exports.pauseTransition = pauseTransition;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryoutEnd = exports.tryoutStartPrediction = exports.tryoutGoToNextPosition = exports.tryoutCheckKeyStrokeForPrediction = exports.tryoutEndPrediction = exports.awakeTryout = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

var _experimentJs = __webpack_require__(0);

var _taskUtilities = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var awakeTryout = function awakeTryout() {
  var taskObject = this.taskObject;
  var state = this.state;
  var currentTutorial = this.stateManager.get('currentTutorial', 1);
  var stateManager = this.stateManager;
  var elements2D = stateManager.get('elements2D');
  var R = this.R;

  elements2D.loader.value = 0;
  stateManager.call('showAll');

  state.data = state.data || [];
  state.isPredicting = false;
  state.shouldPause = currentTutorial !== 1;
  state.index = -1;
  stateManager.setGlobal('level', 'tryout-' + currentTutorial);

  if (currentTutorial === 1) {
    // set classic sequence object with 10 transition
    state.sequenceObject = (0, _taskUtilities.getFullSequenceObjectForClassicLevels)([1, 3, 4, 2, 1, 3, 4, 2, 1, 3, 2, 4, 2, 1, 3]);
    stateManager.setGlobal('levelObject', this.taskObject.parameters.levels[0]);
  } else {
    // set fMRI sequence object with 5 transition wolf and 5 transition rabbit
    state.sequenceObject = {
      fullSequence: [1, 2, 1, 3, 4, 2, 1, 3, 4, 3],
      trial: _lodash2.default.range(1, 10),
      trialType: (0, _experimentJs.rep)(['observation_prediction', 'blackout'], 5),
      block: (0, _experimentJs.rep)(1, 5).concat((0, _experimentJs.rep)(2, 5)),
      blockType: (0, _experimentJs.rep)('random', 5).concat((0, _experimentJs.rep)('normal', 5))
    };
    stateManager.setGlobal('levelObject', taskObject.parameters.levels[3]);
  }

  this.stateManager.newEvent(this.R.get.events_goNextPosition, null, null, ['stateTryout' + currentTutorial]);
};

var tryoutGoToNextPosition = function tryoutGoToNextPosition() {
  var _this = this;

  // TODO experiment-boxes penser a faire dans un tooltip tool qui permet de focus sur un element et fait un modal en dessous pour expliquer

  var stateManager = this.stateManager;
  var state = this.state;
  state.index += 1;

  var elements2D = stateManager.get('elements2D');
  var levelObject = stateManager.get('levelObject');
  var cross = elements2D.cross;
  var R = this.R;
  var tutorials = R.get.tutorials;

  var currentTutorial = stateManager.get('currentTutorial', 1);
  var index = state.index;
  var sequenceObject = state.sequenceObject;

  stateManager.hideTooltip();
  state.isWaitingToPredict = new _experimentJs.Deferred();
  state.isWaitingToPredict.resolve();

  var ntransition = sequenceObject.fullSequence.length;
  // Check if finished
  if (index > ntransition - 1) {
    // show finished tryout
    stateManager.call('hideAll');

    if (currentTutorial === 1) {
      var event = new _experimentJs.EventData(this.R.get.flags_levelDefined, stateManager.timeInMs, { level: 1 });
      this.taskObject.modal({ title: tutorials.askContinue.title.en, content: tutorials.askContinue.content.en, event: event });
    } else {
      var _event = new _experimentJs.EventData(this.R.get.flags_levelDefined, stateManager.timeInMs, { level: 4 });
      this.taskObject.modal({ title: tutorials.askfMRIContinue.title.en, content: tutorials.askfMRIContinue.content.en, event: _event });
    }

    this.taskObject.currentModal.modalBox.buttonText = 'Go !';

    return 'state.tryoutGoToNextPosition: finished tryout';
  }

  elements2D.loader.value = 100 * index / ntransition;

  var lastChoice = null;
  if (_typeof(state.currentTrialData) === 'object' && typeof state.currentTrialData.choice === 'number') {
    lastChoice = parseInt(state.currentTrialData.choice, 10);
  }

  // setup the trialData for this specific trial
  var trialData = {
    level: levelObject.level,
    fullSequenceIndex: index,
    block: sequenceObject.block[index],
    blockType: sequenceObject.blockType[index],
    trial: sequenceObject.trial[index],
    trialType: sequenceObject.trialType[index],
    state: state.stateKey,
    position: sequenceObject.fullSequence[index],
    choice: null,
    responseTime: null,
    startObservation: null,
    endObservation: null,
    respondedAt: null,
    startPrediction: null,
    endPrediction: null,
    nextPosition: null,
    observedTransitionWasDominant: null,
    keysHits: [],
    clicks: [],
    hasPaused: null
  };
  state.data.push(trialData);

  /* --- If currentTrialData is already set, send it to the dataManager to be stored before handling new position --- */
  var dataToStore = state.currentTrialData;
  try {
    if (typeof state.currentTrialData !== 'undefined' && stateManager.get('subject_id')) {
      var _state$currentTrialDa = state.currentTrialData,
          block = _state$currentTrialDa.block,
          blockType = _state$currentTrialDa.blockType,
          trial = _state$currentTrialDa.trial,
          trialType = _state$currentTrialDa.trialType,
          position = _state$currentTrialDa.position,
          choice = _state$currentTrialDa.choice,
          responseTime = _state$currentTrialDa.responseTime,
          startObservation = _state$currentTrialDa.startObservation,
          startPrediction = _state$currentTrialDa.startPrediction,
          respondedAt = _state$currentTrialDa.respondedAt,
          endPrediction = _state$currentTrialDa.endPrediction,
          keysHits = _state$currentTrialDa.keysHits,
          hasPaused = _state$currentTrialDa.hasPaused,
          clicks = _state$currentTrialDa.clicks,
          endObservation = _state$currentTrialDa.endObservation;

      /* --- Check if the transition observed was dominant --- */

      var dominant = null;

      /* --- Store the data --- */
      dataToStore = {
        subject_id: stateManager.get('subject_id'),
        level: currentTutorial,
        block: block,
        block_type: blockType,
        dominant_structure: levelObject.dominantStructure,
        dominant_transition_probability: levelObject.dominantProbability,
        trial: trial,
        trial_type: trialType,
        position: position,
        observation_duration: startPrediction ? startPrediction - startObservation : this.timeInMs - startObservation,
        observed_transition_was_dominant: dominant, // NA for first transition in a sublevel and after prediction
        transition_to: sequenceObject.fullSequence[index], // NA for GO trials (non blackouts)
        subject_choice: choice, // NA for NOGO
        response_time: responseTime, // NA for NOGO or no response
        correct: parseInt(sequenceObject.fullSequence[index], 10) === parseInt(choice, 10),
        key_hits: JSON.stringify(keysHits), // ['key', 'time'], [k,t], ...
        clicks: JSON.stringify(clicks),
        has_paused: hasPaused,
        start_observation: startObservation,
        end_observation: endObservation,
        start_prediction: startPrediction,
        responded_at: respondedAt,
        end_prediction: endPrediction,
        belongsTo: ['tryoutData']
      };
      stateManager.storeData(dataToStore);
    }
  } catch (e) {
    var message = 'runningState.goToNextPosition: could not store cwData.';
    (0, _experimentJs.debugError)(message);
    stateManager.storeInErrorLog({ message: message, timestamp: stateManager.timeInMs, data: dataToStore });
    // TODO check that the stateManager will store it in the DB
  }

  // keep the currentTrialData reference directly in the state
  state.currentTrialData = trialData;

  // start from a new position - set the prediction phase to false
  state.isPredicting = false;

  // set up a deferred object to return and catch promises resolution
  // const deferred = new Deferred()

  var agentType = 'wolf';
  if (sequenceObject.blockType[index] === 'random') {
    agentType = 'rabbit';
  }
  if (elements2D.agentType !== agentType) {
    stateManager.call('setAgent', { agent: agentType });
  }

  cross.spriteFrame = this.R.get.cross_base;
  stateManager.call('drawTiles', { withKeys: false });
  stateManager.call('moveAgentToTile', { tile: trialData.position - 1, opacity: 1 });
  var promise = Promise.resolve();
  if (currentTutorial === 1 && !R.get.wolfFirstAppears.passed) {
    promise = this.taskObject.modal({ title: R.get.wolfFirstAppears_title, content: R.get.wolfFirstAppears_message });
    R.get.wolfFirstAppears.passed = true;
  } else if (currentTutorial === 2 && !R.get.rabbitFirstAppear.passed) {
    promise = this.taskObject.modal({ title: R.get.rabbitFirstAppear_title, content: R.get.rabbitFirstAppear_message });
    R.get.rabbitFirstAppear.passed = true;
  } else if (currentTutorial === 2 && sequenceObject.trialType[index - 1] === 'blackout' && !R.get.blackoutFirstAppear.passed) {
    promise = this.taskObject.modal({ title: R.get.blackoutFirstAppear_title, content: R.get.blackoutFirstAppear_message });
    R.get.blackoutFirstAppear.passed = true;
  } else if (currentTutorial === 2 && sequenceObject.blockType[index] === 'normal' && !R.get.wolfFmriFirstAppear.passed) {
    promise = this.taskObject.modal({ title: R.get.wolfFmriFirstAppear_title, content: R.get.wolfFmriFirstAppear_message });
    R.get.wolfFmriFirstAppear.passed = true;
  }

  promise.then(function () {
    trialData.startObservation = stateManager.timeInMs;

    var promise = Promise.resolve();

    var centerPosition = (0, _experimentJs.sizeToVec)(_this.taskObject.renderSize).scale(0.5);

    if (index !== 0 && sequenceObject.trialType[index - 1] !== 'blackout' && sequenceObject.blockType[index - 1] === sequenceObject.blockType[index]) {
      if (lastChoice === sequenceObject.fullSequence[index]) {
        // Correct
        var background = new _experimentBabylonJs2.default.Color4(0.1, 0.7, 0.1, 0.9);
        var text = 'Correct!';
        var duration = 2000;
        if (currentTutorial === 1 && !R.get.predictionTest.passed) {
          text += '\nHit a key to continue';
          promise = stateManager.resolveOnKey({ except: null });
          duration = promise;
        }

        var _position = centerPosition;
        var tilePosition = stateManager.call('getTilePositions')[lastChoice - 1];
        _position = tilePosition;
        stateManager.tooltip({ position: _position, background: background, text: text, duration: duration });
      } else {
        // Incorrect
        var _background = new _experimentBabylonJs2.default.Color4(0.7, 0.1, 0.1, 0.9);

        var _position2 = centerPosition; // TODO this.taskObject.center
        if ((0, _experimentJs.hasConstructor)(Number, lastChoice)) {
          var _tilePosition = stateManager.call('getTilePositions')[lastChoice - 1];
          // const sign = Math.sign(position.subtract(tilePosition).x)
          _position2 = _tilePosition;
        }

        var _text = 'Incorrect!';
        var _duration = 2000;
        if (currentTutorial === 1 && !R.get.predictionTest.passed) {
          _text += '\nHit a key to continue';
          promise = stateManager.resolveOnKey({ except: null });
          _duration = promise;
        }

        stateManager.tooltip({ position: _position2, background: _background, text: _text, duration: _duration });
      }
    }

    if (currentTutorial === 1 && !R.get.predictionTest.passed && R.get.predictionTest.numberOfPrediction >= 3) {
      R.get.predictionTest.passed = true;
      promise = stateManager.resolveOnKey({ except: null });
      stateManager.tooltip({ position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, centerPosition.y - 100)), text: R.get.realTimeTest_message + '\nHit a key to continue', duration: promise });
    } else if (R.get.predictionTest.passed) {
      (0, _experimentJs.delay)(1000).then(function () {
        state.isWaitingToPredict = new _experimentJs.Deferred();
      });
    }

    return promise;
  }).then(function () {
    trialData.startObservation = stateManager.timeInMs;
    stateManager.newEvent(R.get.events_endObservation, levelObject.observationDuration, null, ['stateRunningEventsLvl' + levelObject.level]);

    if (currentTutorial === 1) {
      var nextTransitionTime = trialData.startObservation + levelObject.observationDuration + _lodash2.default.random(levelObject.minISIAfterLearning, levelObject.maxISIAfterLearning);
      stateManager.newEvent(_this.R.get.events_startPrediction, nextTransitionTime, null, ['stateTryout' + currentTutorial]);
    } else if (sequenceObject.trialType[index] === 'blackout') {
      var observationTime = levelObject.observationDuration + levelObject.fixedISIAfterObservation + (0, _taskUtilities.sampleExponential)(levelObject.sampleMeanISIAfterObservation, 0, levelObject.maxSampleAfterObservation, levelObject.maxSampleAfterObservation);

      // add a blackout delay
      (0, _experimentJs.delay)(observationTime).then(function () {
        stateManager.newEvent(R.get.events_screenWentBlack, null, ['stateRunningEventsLvl' + levelObject.level]);
        stateManager.call('setAgentOpacity', { opacity: 0 });
      });

      var blackoutTime = observationTime + levelObject.fixedBlackScreenDuration + (0, _taskUtilities.sampleExponential)(levelObject.sampleMeanBlackScreen, 0, levelObject.maxSampleBlackScreen, levelObject.maxSampleBlackScreen);

      // create prediction event
      stateManager.newEvent(R.get.events_goNextPosition, blackoutTime, null, ['stateRunningEventsLvl' + levelObject.level]);
    } else if (sequenceObject.trialType[index] === 'observation_prediction') {
      var _observationTime = stateManager.timeInMs + levelObject.observationDuration + levelObject.fixedISIAfterObservation;
      _observationTime += (0, _taskUtilities.sampleExponential)(levelObject.sampleMeanISIAfterObservation, 0, levelObject.maxSampleAfterObservation, levelObject.maxSampleAfterObservation);

      (0, _experimentJs.debugWarn)('Observation Time', (_observationTime - stateManager.timeInMs) / 1000);
      // create prediction event
      stateManager.newEvent(R.get.events_startPrediction, _observationTime, ['stateRunningEventsLvl' + levelObject.level]);
    } else {
      (0, _experimentJs.debugError)('Error in sequence', sequenceObject);
    }
  });

  return 'tryoutGoToNextPosition: finish sync call';
};

var tryoutStartPrediction = function tryoutStartPrediction() {
  var _this2 = this;

  var state = this.state;
  var stateManager = this.stateManager;
  var R = stateManager.R;

  var currentTutorial = stateManager.get('currentTutorial', 1);

  var levelObject = stateManager.get('levelObject');
  stateManager.promise('setAgentOpacity', { opacity: R.get.agent_predictionOpacity });

  var cross = stateManager.get('elements2D').cross;
  cross.spriteFrame = R.get.cross_predict;

  var centerPosition = (0, _experimentJs.sizeToVec)(this.taskObject.renderSize).scale(0.5);

  var promise = Promise.resolve();
  if (currentTutorial === 1 && !R.get.predictionTest.passed) {
    stateManager.call('drawPredictionTiles', { withKeys: 'dkmc' });
    promise = stateManager.resolveOnKey({ except: null });
    stateManager.tooltip({
      position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, centerPosition.y - 100)),
      text: R.get.predictionTest_message + '\n' + R.get.hitAKeyToContinue,
      duration: promise,
      event: new _experimentJs.EventData('predictionTextDismissed')
    });

    var text = R.get.changeCenterSquare;
    stateManager.tooltip({ position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, -50)), text: text, duration: promise });
  } else {
    stateManager.call('drawPredictionTiles');
  }

  promise.then(function () {
    state.isPredicting = true;
    state.isWaitingToPredict = new _experimentJs.Deferred();
    state.isWaitingToPredict.resolve();
    state.currentTrialData.startPrediction = stateManager.timeInMs;

    if (currentTutorial === 1 && !R.get.predictionTest.passed) {
      var background = null; // new BABYLON.Color4(0.6, 100 / 255, 0, 0.9)
      var choiceDeferred = new _experimentJs.Deferred();
      state.choiceDeferred = choiceDeferred;

      var _text2 = R.get.chooseNextPosition;
      stateManager.tooltip({ position: centerPosition, background: background, text: _text2, duration: choiceDeferred.promise });
      choiceDeferred.promise.then(function () {
        stateManager.newEvent(R.get.events_responseTimeEnded, stateManager.timeInMs + levelObject.predictionDuration, null, ['stateTryout' + currentTutorial]);
      });
    } else if (currentTutorial === 1) {
      stateManager.newEvent(R.get.events_responseTimeEnded, stateManager.timeInMs + levelObject.predictionDuration, null, ['stateTryout' + currentTutorial]);
    } else {
      stateManager.call('setAgentOpacity', { opacity: 0 });
      var endResponse = levelObject.predictionDuration;
      (0, _experimentJs.delay)(endResponse).then(function () {
        _this2.state.isPredicting = false;
        if (_this2.state.currentTrialData.choice !== null) {
          cross.spriteFrame = R.get.crossLockByPosition[_this2.state.currentTrialData.choice - 1];
        } else {
          cross.spriteFrame = R.get.cross_base;
        }
      });
      var endPrediction = endResponse + levelObject.fixedISIAfterPrediction + (0, _taskUtilities.sampleExponential)(levelObject.sampleMeanISIAfterPrediction, null, levelObject.maxSampleAfterPrediction, levelObject.maxSampleAfterPrediction);

      _this2.stateManager.newEvent(R.get.events_goNextPosition, endPrediction, null, ['stateTryout' + currentTutorial]);
    }
  });
};

var tryoutCheckKeyStrokeForPrediction = function tryoutCheckKeyStrokeForPrediction() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _experimentJs.mandatory)();

  if (typeof event.data.keyCode === 'undefined') {
    throw new Error('state.checkKeyStrokeForPrediction: event.data.keyCode is undefined');
  }

  var stateManager = this.stateManager;
  var state = this.state;
  var R = this.R;

  var currentTutorial = stateManager.get('currentTutorial', 1);

  var keyCode = event.data.keyCode;
  var keyValue = event.data.key;
  var keys = {
    m: [77, 3, R.get.cross_bottomRight],
    d: [68, 1, R.get.cross_topLeft],
    c: [67, 4, R.get.cross_bottomLeft],
    k: [75, 2, R.get.cross_topRight]
  };

  if (_lodash2.default.has(state, 'currentTrialData.keysHits')) {
    if (!(0, _experimentJs.hasConstructor)(_experimentJs.Array, state.currentTrialData.keysHits)) {
      state.currentTrialData.keysHits = [];
    }

    state.currentTrialData.keysHits.push([keyValue, keyCode, stateManager.timeInMs]);
  }

  var position = null;
  var cross = 1;
  var chosenKey = null;
  for (var key in keys) {
    if (keys.hasOwnProperty(key)) {
      var keyPosition = keys[key];
      if (keyValue === key) {
        //  if (keyCode === keyPosition[0]) {
        position = keyPosition[1];
        cross = keyPosition[2];
        chosenKey = key;
      }
    }
  }

  if (position !== null) {
    /* --- Check if the subjects hit was during the prediction phase and that he did not already chose  --- */

    if (state.isPredicting === true && state.currentTrialData.startPrediction !== null && state.currentTrialData.choice === null) {
      /* --- If the key was one of the specified store the corresponding position, responseTime and choice --- */

      // Store the choice of the subject and responseTime
      if ((0, _experimentJs.hasConstructor)(_experimentJs.Deferred, state.choiceDeferred)) {
        state.choiceDeferred.resolve();
        state.choiceDeferred = null;
      }

      state.currentTrialData.choice = position;
      state.currentTrialData.responseTime = stateManager.timeInMs - state.currentTrialData.startPrediction;
      state.currentTrialData.respondedAt = stateManager.timeInMs;

      this.stateManager.get('elements2D').cross.spriteFrame = cross;
      if (!R.get.predictionTest.passed) {
        R.get.predictionTest.numberOfPrediction += 1;

        var centerPosition = (0, _experimentJs.sizeToVec)(this.taskObject.renderSize).scale(0.5);
        var tilePosition = stateManager.call('getTilePositions')[position - 1];
        var sign = Math.sign(centerPosition.subtract(tilePosition).x);
        tilePosition = tilePosition.add(new _experimentBabylonJs2.default.Vector2(sign * 50, sign * 50));
        stateManager.tooltip({ position: tilePosition, text: R.get.youSelectedThisTile + ' (' + chosenKey + ')', duration: (0, _experimentJs.delay)(2000) });
        var text = R.get.aLittleSquareShowsYourChoice;
        stateManager.tooltip({ position: centerPosition.add(new _experimentBabylonJs2.default.Vector2(0, -50)), text: text, duration: 2000 });
      }

      // reset the number of missed trials
      state.numberOfMissed = 0;

      stateManager.newEvent(R.get.events_hasResponded, null, null, ['stateTryout' + currentTutorial]);
      (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: has chosen position ' + position + '.');
      return position;
    } else if ((0, _experimentJs.hasConstructor)(_experimentJs.Deferred, state.isWaitingToPredict) && state.isWaitingToPredict.pending) {
      var background = new _experimentBabylonJs2.default.Color4(0.7, 0.1, 0.1, 0.9);
      stateManager.tooltip({ position: new _experimentBabylonJs2.default.Vector2(this.taskObject.renderSize.width / 2, this.taskObject.renderSize.height / 2 - 100), text: R.get.tooEarly, background: background, duration: state.isWaitingToPredict });
      state.isWaitingToPredict.resolve();
      (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: too early');
      return false;
    }
    (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: already chosen');
    return false;
  }
  (0, _experimentJs.debuglog)('state.checkKeyStrokeForPrediction: not a valid time to choose or already chosen');
  return false;
};

var tryoutEndPrediction = function tryoutEndPrediction() {
  var stateManager = this.stateManager;
  var state = this.state;
  var R = this.R;

  var currentTutorial = stateManager.get('currentTutorial', 1);

  /* --- End prediction - store data --- */
  state.isPredicting = false;
  state.currentTrialData.endPrediction = stateManager.timeInMs;

  stateManager.newEvent(R.get.events_goNextPosition, null, null, ['stateTryout' + currentTutorial]);
  return 'state.endPrediction: resolved';
};

var tryoutEnd = function tryoutEnd() {
  var stateManager = this.stateManager;
  var R = this.R;

  var currentTutorial = stateManager.get('currentTutorial', 1);
  this.taskObject.setCheckpoint(R.get.checkpoint_tutorialDone[currentTutorial - 1]);
};

exports.awakeTryout = awakeTryout;
exports.tryoutEndPrediction = tryoutEndPrediction;
exports.tryoutCheckKeyStrokeForPrediction = tryoutCheckKeyStrokeForPrediction;
exports.tryoutGoToNextPosition = tryoutGoToNextPosition;
exports.tryoutStartPrediction = tryoutStartPrediction;
exports.tryoutEnd = tryoutEnd;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tutorialUnfrozen = exports.awakeTutorial = exports.showModal = exports.showNextPage = undefined;

var _experimentJs = __webpack_require__(0);

var _experimentBoxes = __webpack_require__(3);

var pageOrderTutorialOne = ['intro', 'disclaimer', 'trialInstruction', 'arrowKeyboard', 'progressInstruction'];

var awakeTutorial = function awakeTutorial() {
  var currentTutorial = this.stateManager.get('currentTutorial', 1);

  var pageOrder = pageOrderTutorialOne;

  this.stateManager.set('currentPage', pageOrder[0]);

  var showIntro = new _experimentJs.EventData(this.R.get.events_showModal, { page: pageOrder[0] });
  this.stateManager.addEvent(showIntro);

  this.stateManager.set('levelObject', { level: 'tutorial-' + currentTutorial });
  this.state.shouldPause = currentTutorial !== 1;
};

var showModal = function showModal(_ref) {
  var _this = this;

  var _ref$data$page = _ref.data.page,
      page = _ref$data$page === undefined ? 'intro' : _ref$data$page;

  var tutorials = this.R.get.tutorials;
  (0, _experimentJs.delay)(50).then(function () {
    // TODO Check why you have to do that ...
    if (tutorials.hasOwnProperty(page)) {
      var tutorial = tutorials[page];
      var event = new _experimentJs.EventData(_this.R.get.events_tutorialNext, { page: page });
      _this.taskObject.modal({ type: 'centralLarge', title: tutorial.title.en, content: tutorial.content.en, event: event });
      _this.taskObject.currentModal.modalBox.buttonText = 'Next';
    }
  });
};

var tutorialUnfrozen = function tutorialUnfrozen() {
  if ((0, _experimentJs.hasConstructor)(Object, this.taskObject.currentModal) && (0, _experimentJs.hasConstructor)(_experimentBoxes.SmartModal, this.taskObject.currentModal.modalBox)) {
    this.taskObject.currentModal.modalBox.show();
  }
};

var showNextPage = function showNextPage(_ref2) {
  var _ref2$data$page = _ref2.data.page,
      currentPage = _ref2$data$page === undefined ? this.stateManager.get('currentPage', 'intro') : _ref2$data$page;

  var pageOrder = pageOrderTutorialOne;
  var R = this.R;

  var currentIndex = pageOrder.indexOf(currentPage);
  if (currentIndex !== -1) {
    if (currentIndex !== pageOrder.length - 1) {
      var showEvent = new _experimentJs.EventData(R.get.events_showModal, { page: pageOrder[currentIndex + 1] });
      this.stateManager.addEvent(showEvent);
    } else {
      (0, _experimentJs.debuglog)('state.showNextPage: end of tutorial.');
      this.stateManager.goToState(R.get.states_running, true); // TODO make it able to use the state object as well
    }
  } else {
    throw new Error('state.showNextPage: invalid currentPage.');
  }
};

exports.showNextPage = showNextPage;
exports.showModal = showModal;
exports.awakeTutorial = awakeTutorial;
exports.tutorialUnfrozen = tutorialUnfrozen;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAspectRatio = exports.getDensity = exports.randomColor = exports.computeDurationEstimate = undefined;

var _experimentMathjs = __webpack_require__(16);

var _experimentMathjs2 = _interopRequireDefault(_experimentMathjs);

var _lodash = __webpack_require__(2);

var _lodash2 = _interopRequireDefault(_lodash);

var _experimentJs = __webpack_require__(0);

var _experimentBabylonJs = __webpack_require__(1);

var _experimentBabylonJs2 = _interopRequireDefault(_experimentBabylonJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ======= Texture Functions ======= */
/** @module taskUtilities */
var getAspectRatio = function getAspectRatio() {
  var surfaceObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _experimentJs.mandatory)();

  if (surfaceObject.constructor === _experimentBabylonJs2.default.Texture) {
    var _surfaceObject$getBas = surfaceObject.getBaseSize(),
        w = _surfaceObject$getBas.width,
        h = _surfaceObject$getBas.height;

    return w / h;
  }

  throw new Error('getAspectRatio: object type not valid.');
};

/* =============== Task specific functions =============== */
/**
 * Returns an array of the four possible main transition matrices
 * @return {Array} Each of the four entry is a 16*16 matrix with either 0 or 1
 */

var getDensity = function getDensity(elements) {
  var nsteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var windowSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  // eslint-disable-line
  if (elements.some(isNaN)) {
    throw new Error('TaskObject.getDensity: elements are not all numeric.');
  }

  var range = [_experimentMathjs2.default.min(elements), _experimentMathjs2.default.max(elements)];

  var stepSize = (range[1] - range[0]) / nsteps;
  // const windowLenght = stepSize * windowSize

  var elementsInWindow = [];
  var windowPosition = [];
  var density = [];
  var points = [];

  var _loop = function _loop(i) {
    var subset = _lodash2.default.filter(elements, function (e) {
      var centered = e - range[0] - i * stepSize;
      return centered >= 0 && centered < stepSize;
    });

    windowPosition[i] = (i + 0.5) * stepSize;
    elementsInWindow[i] = subset.length;
    density[i] = elementsInWindow[i] / elements.length;
    points[i] = {
      x: windowPosition[i],
      y: density[i]
    };
  };

  for (var i = 0; i < nsteps; i++) {
    _loop(i);
  }

  return {
    windows: {
      position: windowPosition,
      numberOfElements: elementsInWindow,
      density: density
    },
    points: points,
    chartOptions: {
      type: 'line',
      data: {
        datasets: [{
          label: 'Density',
          data: points
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    }
  };
};

var randomColor = function randomColor(opacity) {
  return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
};

var computeDurationEstimate = function computeDurationEstimate() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var parametersBase = {
    dominantProbability: 0.76,
    minNumberOfObservationsPerLearning: 3,
    maxNumberOfObservationsPerLearning: 7,
    observationDuration: 500,
    interObservationDuration: 50, // to add ?
    minTimeToPredict: 2000,
    maxTimeToPredict: 5000,
    feedbackDuration: 500,
    minISIAfterLearning: 1000,
    maxISIAfterLearning: 1500,
    minISIAfterFeedback: 3000,
    maxISIAfterFeedback: 5000,
    rabbitAutoTransition: false,
    rabbitDominantProbability: 0.6,
    observationSegmentSizes: [3, 4, 5],
    observationSegmentRepetitionPerBlock: 2,
    numberOfBlocks: 6,
    numberOfRandomBlocks: 2,
    feedbackType: 'transition'
  };

  options = _lodash2.default.extend(parametersBase, options);

  // number of observation = sum(segment sizes) * segment repetition per block
  var numberOfObservationPerLevel = _experimentMathjs2.default.sum(options.observationSegmentSizes) * options.observationSegmentRepetitionPerBlock;

  // duration of one observation = observationDuration (add inter observation duration ?)
  var oneObservationDuration = options.observationDuration;

  // observation duration for one block
  var observationsDurationPerBlock = numberOfObservationPerLevel * oneObservationDuration;

  // number of prediction per block
  var numberOfPredictionEventsPerBlock = options.observationSegmentSizes.length * options.observationSegmentRepetitionPerBlock;

  // min max and mean duration of one prediction event stored in a matrix
  // timeDurationMatrix 4*2 min, max
  var timeDurationMatrix = _experimentMathjs2.default.matrix([[options.minISIAfterLearning, options.maxISIAfterLearning], [options.minTimeToPredict, options.maxTimeToPredict], [options.feedbackDuration, options.feedbackDuration], [options.maxISIAfterFeedback, options.maxISIAfterFeedback]]);

  // factorMatrix 2*3 min max mean
  var factorMatrix = _experimentMathjs2.default.matrix([[1, 0, 1 / 2], [0, 1, 1 / 2]]);

  // predictionDurationMatrix 4*3
  var predictionDurationMatrix = _experimentMathjs2.default.multiply(timeDurationMatrix, factorMatrix);

  // sumPredictionDurationVector 1*3
  var sumPredictionDurationVector = _experimentMathjs2.default.multiply(_experimentMathjs2.default.matrix([1, 1, 1, 1]), predictionDurationMatrix);

  var predictionsDurationPerBlock = _experimentMathjs2.default.multiply(sumPredictionDurationVector, numberOfPredictionEventsPerBlock);

  // duration of one block
  var observationDurationMatrix = _experimentMathjs2.default.matrix((0, _experimentJs.rep)(observationsDurationPerBlock, 3));

  var durationPerBlock = _experimentMathjs2.default.add(observationDurationMatrix, predictionsDurationPerBlock);

  // let total duration for one level min max mean in miliseconds
  var totalDuration = _experimentMathjs2.default.multiply(durationPerBlock, options.numberOfBlocks + options.numberOfRandomBlocks).toArray();

  return {
    min: totalDuration[0],
    max: totalDuration[1],
    mean: totalDuration[2]
  };
};

exports.computeDurationEstimate = computeDurationEstimate;
exports.randomColor = randomColor;
exports.getDensity = getDensity;
exports.getAspectRatio = getAspectRatio;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=walker.max.js.map