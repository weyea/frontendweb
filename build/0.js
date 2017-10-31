webpackJsonp([0],{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    path: '/home',

    getComponents: function getComponents(nextState, callback) {
        __webpack_require__.e/* require.ensure */(4).then((function (require) {
            callback(null, __webpack_require__(513));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var login = __webpack_require__(353);
module.exports = {

  path: 'designer/:type/:appId',
  onEnter: login.checkLoginRouter,
  getComponents: function getComponents(nextState, callback) {
    __webpack_require__.e/* require.ensure */(3).then((function (require) {
      callback(null, __webpack_require__(533));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: 'user',
  getChildRoutes: function getChildRoutes(partialNextState, callback) {
    __webpack_require__.e/* require.ensure */(14).then((function (require) {
      callback(null, [__webpack_require__(857), __webpack_require__(861)]);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: 'template',
  getChildRoutes: function getChildRoutes(partialNextState, callback) {
    __webpack_require__.e/* require.ensure */(15).then((function (require) {
      callback(null, [__webpack_require__(869), __webpack_require__(871)]);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  },

  indexRoute: { onEnter: function onEnter(nextState, replace) {
      return replace('/template/market');
    } }
};

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var login = __webpack_require__(353);

module.exports = {

  path: 'my',
  getChildRoutes: function getChildRoutes(partialNextState, callback) {
    __webpack_require__.e/* require.ensure */(16).then((function (require) {
      callback(null, [__webpack_require__(872),
      //require('./routes/preview'),
      __webpack_require__(877)]
      // require('./routes/templateDetail')
      );
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  },

  onEnter: login.checkLoginRouter,
  indexRoute: { onEnter: function onEnter(nextState, replace) {
      return replace('/my/app');
    } }
  // getIndexRoute(partialNextState, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, {
  //       component: require('./components/SiteListPage'),
  //     })
  //   })
  // }

};

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: 'preview/template/:id',

  getComponents: function getComponents(nextState, callback) {
    __webpack_require__.e/* require.ensure */(10).then((function (require) {
      callback(null, __webpack_require__(882));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  path: '*',

  getComponents: function getComponents(nextState, callback) {
    __webpack_require__.e/* require.ensure */(12).then((function (require) {
      callback(null, __webpack_require__(888));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
};

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var login = {
    isLogin: function isLogin() {
        if (window.debug || location.href.indexOf("localhost:") !== -1) {
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

/***/ })

});