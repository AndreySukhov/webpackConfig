webpackJsonp([1,2],{

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b95efa32e0e7094e86e432ab5c755630.jpg";

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d092c82aa337f99b24826ef2d93839d.png";

/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.jpg": 1423,
	"./test.png": 1424
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1425;


/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(168);

var _test = __webpack_require__(167);

var _test2 = _interopRequireDefault(_test);

var _impotImages = __webpack_require__(166);

var _impotImages2 = _interopRequireDefault(_impotImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('its ok');
console.log((0, _test2.default)(10, 5));

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var allFiles = exports.allFiles = function (ctx) {
  var keys = ctx.keys();
  var values = keys.map(ctx);
  return keys.reduce(function (o, k, i) {
    o[k] = values[i];return o;
  }, {});
}(__webpack_require__(1425));

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var summ = function summ(a, b) {
  return a + b;
};

exports.default = summ;

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1426]);