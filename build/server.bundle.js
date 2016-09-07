/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _bodyParser = __webpack_require__(2);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(3);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	// parsers
	app.use(__webpack_require__(4)());
	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({ extended: false }));

	app.get('/', __webpack_require__(5));

	// static file serving
	app.use(__webpack_require__(16)());
	app.use(_express2.default.static(__dirname + '/../.tmp', { maxAge: 31536000000 }));

	app.listen(process.env.PORT || 1337, function () {
	  console.log('server started ➜ http://localhost:' + (process.env.PORT || 1337));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mapper = __webpack_require__(6);

	var _mapper2 = _interopRequireDefault(_mapper);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(8);

	var _server2 = _interopRequireDefault(_server);

	var _home = __webpack_require__(9);

	var _home2 = _interopRequireDefault(_home);

	var _wrapper = __webpack_require__(14);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	var _data = __webpack_require__(15);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (req, res, next) {

	  var schema = {
	    title: true,
	    subtitle: true,
	    image: true,
	    articles: [{
	      title: true,
	      id: true,
	      author: {
	        name: true,
	        lastname: true
	      }
	    }]
	  };

	  var pureData = (0, _mapper2.default)(_data2.default, schema);

	  var component = _react2.default.createElement(_home2.default, pureData);

	  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
	    _wrapper2.default,
	    { className: 'Home', pureData: JSON.stringify(pureData), component: 'Home' },
	    _server2.default.renderToString(component)
	  ));

	  res.send('<!doctype html>' + html);
	};

	//data from finder


	//component

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("mapper.js");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _banner = __webpack_require__(10);

	var _banner2 = _interopRequireDefault(_banner);

	var _articlesList = __webpack_require__(11);

	var _articlesList2 = _interopRequireDefault(_articlesList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//components
	exports.default = _react2.default.createClass({
	  displayName: "home",


	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(_banner2.default, {
	        title: this.props.title,
	        subtitle: this.props.subtitle,
	        image: this.props.image }),
	      _react2.default.createElement(_articlesList2.default, { articles: this.props.articles })
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'banner',


	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        this.props.title
	      ),
	      _react2.default.createElement(
	        'h2',
	        null,
	        this.props.subtitle
	      ),
	      _react2.default.createElement('img', { alt: this.props.image.alt, src: this.props.image.url })
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _article = __webpack_require__(12);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "articlesList",


	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      this.props.articles.map(function (item) {
	        return _react2.default.createElement(_article2.default, { key: item.id, title: item.title, author: item.author });
	      })
	    );
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _article = __webpack_require__(13);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'article',


	  render: function render() {

	    return _react2.default.createElement(
	      'div',
	      { className: _article2.default.article, onClick: function onClick() {
	          return alert('toto');
	        } },
	      _react2.default.createElement(
	        'h3',
	        { className: _article2.default.title },
	        this.props.title
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'author : ',
	        this.props.author.name,
	        ' ',
	        this.props.author.lastname
	      )
	    );
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		"article": "article__article___3uxoa",
		"title": "article__title___IYjK0"
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "wrapper",


	  render: function render() {
	    return _react2.default.createElement(
	      "html",
	      { lang: "fr" },
	      _react2.default.createElement(
	        "head",
	        null,
	        _react2.default.createElement("meta", { charSet: "utf-8" }),
	        _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" }),
	        _react2.default.createElement("meta", { name: "HandheldFriendly", content: "true" }),
	        _react2.default.createElement("meta", { name: "MobileOptimized", content: "320" }),
	        _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }),
	        _react2.default.createElement("link", { href: "/style.bundle.css", rel: "stylesheet", type: "text/css" }),
	        _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: "window.pureData = " + this.props.pureData + ";" } }),
	        _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: "window.pageComponent = '" + this.props.component + "';" } })
	      ),
	      _react2.default.createElement(
	        "body",
	        null,
	        _react2.default.createElement("div", { className: "js-root", dangerouslySetInnerHTML: { __html: this.props.children } }),
	        _react2.default.createElement("script", { src: "/client.bundle.js" })
	      )
	    );
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
		"title": "Home Page",
		"subtitle": "This is a great page",
		"articles": [
			{
				"id": 1,
				"title": "Article 1",
				"subtitle": "First article",
				"author": {
					"name": "John",
					"lastname": "Doe"
				}
			},
			{
				"id": 2,
				"title": "Article 2",
				"subtitle": "Second article",
				"author": {
					"name": "James",
					"lastname": "Foo"
				}
			}
		],
		"image": {
			"url": "https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
			"alt": "my home page cover image"
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);