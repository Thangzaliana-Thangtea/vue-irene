webpackJsonp([6],{

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(777)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(779)
/* template */
var __vue_template__ = __webpack_require__(780)
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
Component.options.__file = "resources/assets/js/views/pages/reset-password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75c8e537", Component.options)
  } else {
    hotAPI.reload("data-v-75c8e537", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(778);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("e1665594", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c8e537\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reset-password.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c8e537\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reset-password.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 779:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        pwdState: function pwdState() {
            return this.model.password.length > 6;
        },
        confirmState: function confirmState() {
            return this.model.password == this.model.confirm_password;
        },
        invalidPassword: function invalidPassword() {
            if (this.model.password.length > 6) {
                return '';
            } else if (this.model.password.length > 0) {
                return 'Enter at least 6 characters';
            } else {
                return 'Name is required';
            }
        },
        validPassword: function validPassword() {
            return this.state === true ? 'Valid password' : '';
        },
        invalidConfirm: function invalidConfirm() {
            if (this.model.confirm_password.length > 6) {
                return '';
            } else if (this.model.confirm_password.length > 0) {
                return 'Enter at least 6 characters';
            } else if (this.model.password != this.model.confirm_password) {
                return 'Password not match';
            } else {
                return 'Name is required';
            }
        },
        validConfirm: function validConfirm() {
            return this.state === true ? 'Matched password' : '';
        }
    },
    data: function data() {
        return {
            model: {
                password: '',
                confirm_password: ''
            },
            countDown: 0,
            errorCount: 0,
            errors: []
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            evt.preventDefault();
            if (this.pwdState === false || this.confirmState === false) return;
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
        },
        reset: function reset() {
            this.model.password = '';
            this.model.confirm_password = '';
        },
        countDownChanged: function countDownChanged(count) {
            this.countDown = count;
        },
        errorChanged: function errorChanged(count) {
            this.errorCount = count;
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 780:
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
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h4", [_vm._v("New Password")]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: {
                        show: _vm.countDown,
                        dismissible: "",
                        variant: "success"
                      },
                      on: {
                        dismissed: function($event) {
                          _vm.countDown = 0
                        },
                        "dismiss-count-down": _vm.countDownChanged
                      }
                    },
                    [
                      _vm._v(
                        "\n                                New Branch is created\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: {
                        show: _vm.errorCount,
                        dismissible: "",
                        variant: "danger"
                      },
                      on: {
                        dismissed: function($event) {
                          _vm.errorCount = 0
                        },
                        "dismiss-count-down": _vm.errorChanged
                      }
                    },
                    [
                      _c(
                        "ul",
                        _vm._l(_vm.errors, function(err) {
                          return _c(
                            "li",
                            _vm._l(err, function(e) {
                              return _c("p", [_vm._v(_vm._s(e))])
                            })
                          )
                        })
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "newGrp",
                            label: "New password",
                            "label-for": "newPwd",
                            "invalid-feedback": _vm.invalidPassword,
                            "valid-feedback": _vm.validPassword,
                            state: _vm.pwdState
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "newPwd",
                              state: _vm.pwdState,
                              placeholder: "New password"
                            },
                            model: {
                              value: _vm.model.password,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.model,
                                  "password",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "model.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "confirmGroup",
                            description: "Confirm Password",
                            label: "Confirm Password",
                            "label-for": "confirm",
                            "invalid-feedback": _vm.invalidConfirm,
                            "valid-feedback": _vm.validConfirm,
                            state: _vm.confirmState
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "confirm",
                              placeholder: "Confirm password",
                              state: _vm.confirmState
                            },
                            model: {
                              value: _vm.model.confirm_password,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "confirm_password", $$v)
                              },
                              expression: "model.confirm_password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { type: "submit", variant: "primary" } },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { type: "reset", variant: "danger" } },
                        [_vm._v("Reset")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75c8e537", module.exports)
  }
}

/***/ })

});