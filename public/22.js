webpackJsonp([22],{

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(789)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(791)
/* template */
var __vue_template__ = __webpack_require__(792)
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
Component.options.__file = "resources/assets/js/views/manager/change-password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aeac5d3", Component.options)
  } else {
    hotAPI.reload("data-v-4aeac5d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(790);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5b3c899e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aeac5d3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change-password.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aeac5d3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change-password.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 791:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            user: {
                old_password: '',
                new_password: '',
                confirm_password: ''
            },
            errors: [],
            errorCount: 0
        };
    },

    computed: {
        oldState: function oldState() {
            return this.user.old_password >= 6;
        },
        passwordState: function passwordState() {
            return this.user.new_password.length >= 6;
        },
        confirmState: function confirmState() {
            return this.user.new_password == this.user.confirm_password;
        },
        invalidPassword: function invalidPassword() {
            if (this.user.new_password.length > 6) {
                return '';
            } else if (this.user.new_password.length > 0) {
                return 'Enter at least 6 characters';
            } else {
                return 'Please enter your password';
            }
        },
        validPassword: function validPassword() {
            return this.passwordState === true ? 'Correct password' : '';
        },
        invalidOld: function invalidOld() {
            if (this.user.old_password.length > 6) {
                return '';
            } else {
                return 'Please enter your password';
            }
        },
        validOld: function validOld() {
            return this.oldState === true ? 'Correct password' : '';
        },
        invalidConfirm: function invalidConfirm() {
            if (this.user.confirm_password == this.user.new_password) {
                return '';
            } else if (this.user.confirm_password.length > 0) {
                return 'Enter at least 6 characters';
            } else {
                return "Password doesn't match";
            }
        },
        validConfirm: function validConfirm() {
            return this.confirmState === true ? 'Match password' : '';
        }
    },

    methods: {

        onReset: function onReset(evt) {
            evt.preventDefault();
            this.clear();
        },
        clear: function clear() {
            this.user.old_password = '';
            this.user.new_password = '';
            this.user.confirm_password = '';
        },
        onError: function onError(count) {
            this.errorCount = count;
        },
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            console.log('user ', JSON.stringify(this.user));
            //                if (this.passwordState || this.oldState || this.confirmState) {
            //                    return;
            //                }
            console.log('lets go');

            var token = localStorage.getItem('access_token');
            axios.post('api/auth/change-password?token=' + token, this.user).then(function (res) {}).catch(function (err) {
                if (err.response.status === 406) {
                    _this.errors = err.response.data;
                    _this.onError(5);
                }
            });
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app flex-row align-items-center" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-success-card",
                attrs: {
                  header: "Change Password",
                  "header-tag": "h6",
                  "footer-tag": "footer"
                }
              },
              [
                _c(
                  "div",
                  [
                    _c(
                      "div",
                      { staticClass: "center" },
                      [
                        _c(
                          "b-img",
                          {
                            staticClass: "img-avatar centered",
                            attrs: {
                              thumbnail: "",
                              src: "static/img/avatars/6.jpg",
                              alt: "admin"
                            }
                          },
                          [
                            _c("span", { staticClass: "d-md-down-none" }, [
                              _c("strong", [_vm._v("kimi")])
                            ])
                          ]
                        )
                      ],
                      1
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
                          "dismiss-count-down": _vm.onError
                        }
                      },
                      [
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function(err) {
                            return _c("li", [_vm._v(_vm._s(err))])
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
                              id: "oldGroup",
                              description: "Enter your current password.",
                              label: "Old Password",
                              "label-for": "old",
                              "invalid-feedback": _vm.invalidOld,
                              "valid-feedback": _vm.validOld,
                              state: _vm.oldState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "old",
                                type: "password",
                                state: _vm.oldState
                              },
                              model: {
                                value: _vm.user.old_password,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.user,
                                    "old_password",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "user.old_password"
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
                              id: "passwordGroup",
                              description: "Enter your new password.",
                              label: "New Password",
                              "label-for": "new",
                              "invalid-feedback": _vm.invalidPassword,
                              "valid-feedback": _vm.validPassword,
                              state: _vm.passwordState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "new",
                                type: "password",
                                state: _vm.passwordState
                              },
                              model: {
                                value: _vm.user.new_password,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.user,
                                    "new_password",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "user.new_password"
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
                              description: "Please enter password again",
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
                                type: "password",
                                state: _vm.confirmState
                              },
                              model: {
                                value: _vm.user.confirm_password,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.user,
                                    "confirm_password",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "user.confirm_password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "pull-right" },
                          [
                            _c(
                              "b-button",
                              { attrs: { type: "submit", variant: "primary" } },
                              [_vm._v("Update")]
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
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4aeac5d3", module.exports)
  }
}

/***/ })

});