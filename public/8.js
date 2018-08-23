webpackJsonp([8],{

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(767)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(769)
/* template */
var __vue_template__ = __webpack_require__(770)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/pages/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-91475e4a", Component.options)
  } else {
    hotAPI.reload("data-v-91475e4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(768);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("158667a5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-91475e4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-91475e4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.error {\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var token = localStorage.getItem('access_token');

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Login',
    data: function data() {
        return {
            currentUser: null,
            login: {
                email: '',
                password: ''
            },
            err: false

        };
    },

    methods: {
        gotoDashboard: function gotoDashboard() {
            var _this = this;

            var token = localStorage.getItem('access_token');
            if (!token) return;
            axios.get('/api/auth/me' + '?token=' + token).then(function (res) {
                _this.currentUser = res.data;
                if (res.data.role == 0) _this.$router.replace('/admin');else {
                    _this.$router.replace('/manager');
                }
            }).catch(function (err) {
                console.log(err.response);
            });
        },
        showReset: function showReset() {
            this.$router.replace('forgot-password');
        },
        doLogin: function doLogin() {
            var _this2 = this;

            axios.post('/api/auth/login', this.login).then(function (res) {
                if (res.data.access_token) {
                    localStorage.setItem('access_token', res.data.access_token);
                    _this2.currentUser = res.data.user;

                    if (_this2.currentUser.role == 0) _this2.$router.replace('/admin');
                    if (_this2.currentUser.role == 1) _this2.$router.replace('/manager');
                } else {
                    console.log(res);
                }
            }).catch(function (err) {
                _this2.err = true;
            });
        }
    },
    mounted: function mounted() {
        this.gotoDashboard();
    }
});

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app flex-row align-items-center" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card-group mb-0" }, [
            _c("div", { staticClass: "card p-4" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h1", [_vm._v("Login")]),
                _vm._v(" "),
                _vm.err
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Invalid Credential")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Sign In to your account")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.login.email,
                        expression: "login.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "Email",
                      required: ""
                    },
                    domProps: { value: _vm.login.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.login, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-4" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.login.password,
                        expression: "login.password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      placeholder: "Password",
                      required: ""
                    },
                    domProps: { value: _vm.login.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.login, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary px-4",
                        attrs: { type: "button" },
                        on: { click: _vm.doLogin }
                      },
                      [_vm._v("Login\n                                    ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link px-0",
                        attrs: { type: "button" },
                        on: { click: _vm.showReset }
                      },
                      [_vm._v("Forgot password?")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "icon-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "icon-lock" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-91475e4a", module.exports)
  }
}

/***/ })

});