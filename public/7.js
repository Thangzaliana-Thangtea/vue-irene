webpackJsonp([7],{

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(773)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(775)
/* template */
var __vue_template__ = __webpack_require__(776)
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
Component.options.__file = "resources/assets/js/views/pages/forgot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15f25001", Component.options)
  } else {
    hotAPI.reload("data-v-15f25001", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(774);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("4157705b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15f25001\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgot.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15f25001\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgot.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.error {\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 775:
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

        doReset: function doReset() {
            var _this = this;

            axios.post('/password/reset', this.login).then(function (res) {
                //                            const token=res.data.token;
                console.log(res.data);
            }).catch(function (err) {
                console.log(err.response);
                _this.err = true;
            });
            //                axios.post('/api/pages/reset', this.login)
            //                        .then(res=> {
            //                            const token=res.data.token;
            //                            this.sendResetLink(token);
            //                        })
            //                        .catch(err=> {
            //                            console.log(err.response)
            //                            this.err=true;
            //                        })
        },
        sendResetLink: function sendResetLink(tokens) {
            var _this2 = this;

            console.log('my token ' + tokens);
            axios.get('/api/pages/token', { token: tokens }).then(function (res) {
                _this2.err = false;
                console.log(res);
            }).catch(function (err) {
                console.log(err.response);
            });
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 776:
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
                _c("h1", [_vm._v("Reset password")]),
                _vm._v(" "),
                _vm.err
                  ? _c("p", { staticClass: "error" }, [_vm._v("Invalid Email")])
                  : _vm._e(),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Enter your email address")
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary px-4",
                        attrs: { type: "button" },
                        on: { click: _vm.doReset }
                      },
                      [_vm._v("Reset\n                                    ")]
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15f25001", module.exports)
  }
}

/***/ })

});