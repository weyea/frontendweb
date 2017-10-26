webpackJsonp([1,18],{

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var login = __webpack_require__(105);
	module.exports = {

	  path: 'designer/:type/:appId',
	  onEnter: login.checkLoginRouter,
	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      callback(null, __webpack_require__(106));
	    });
	  }
	};

/***/ },

/***/ 105:
/***/ function(module, exports) {

	"use strict";

	var login = {
		isLogin: function isLogin() {
			if (window.debug) {
				return true;
			}
			return $.cookie("islogin");
		},
		getUser: function getUser() {
			var username = $.cookie("username");
			var email = $.cookie("email");
			return {
				username: username,
				email: email
			};
		},
		logout: function logout() {
			$.cookie("islogin", "false");
			var username = $.cookie("username", "");
			var email = $.cookie("email", "");
		},
		checkLoginRouter: function checkLoginRouter(nextState, replace, callback) {
			if (!login.isLogin()) {
				if (sessionStorage) {
					console.log(nextState);
					sessionStorage.setItem("redirect", nextState.location.pathname || "/");
				}
				replace("/user/login");
			}
			callback();
		}
	};

	(function ($) {

		var pluses = /\+/g;

		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}

		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}

		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}

		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}

			try {
				// Replace server-side written pluses with spaces.
				// If we can't decode the cookie, ignore it, it's unusable.
				// If we can't parse the cookie, ignore it, it's unusable.
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch (e) {}
		}

		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}

		var config = $.cookie = function (key, value, options) {

			// Write

			if (arguments.length > 1 && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);

				if (typeof options.expires === 'number') {
					var days = options.expires,
					    t = options.expires = new Date();
					t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
				}

				return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
			}

			// Read

			var result = key ? undefined : {},

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			    i = 0,
			    l = cookies.length;

			for (; i < l; i++) {
				var parts = cookies[i].split('='),
				    name = decode(parts.shift()),
				    cookie = parts.join('=');

				if (key === name) {
					// If second argument (value) is a function it's a converter...
					result = read(cookie, value);
					break;
				}

				// Prevent storing a cookie that we couldn't decode.
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}

			return result;
		};

		config.defaults = {};

		$.removeCookie = function (key, options) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};
	})(jQuery);

	module.exports = login;

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'user',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      callback(null, [__webpack_require__(585), __webpack_require__(591)]);
	    });
	  }
	};

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'template',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      callback(null, [__webpack_require__(600), __webpack_require__(602)]);
	    });
	  },

	  indexRoute: { onEnter: function onEnter(nextState, replace) {
	      return replace('/template/market');
	    } }
	};

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var login = __webpack_require__(105);

	module.exports = {

	  path: 'my',
	  getChildRoutes: function getChildRoutes(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      callback(null, [__webpack_require__(610),
	      //require('./routes/preview'),
	      __webpack_require__(619), __webpack_require__(620)]);
	    });
	  },

	  onEnter: login.checkLoginRouter,
	  getIndexRoute: function getIndexRoute(partialNextState, callback) {
	    __webpack_require__.e/* nsure */(13, function (require) {
	      callback(null, {
	        component: __webpack_require__(628)
	      });
	    });
	  }
	};

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: 'preview/template/:id',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(14, function (require) {
	      callback(null, __webpack_require__(631));
	    });
	  }
	};

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	  path: '*',

	  getComponents: function getComponents(nextState, callback) {
	    __webpack_require__.e/* nsure */(15, function (require) {
	      callback(null, __webpack_require__(638));
	    });
	  }
	};

/***/ }

});