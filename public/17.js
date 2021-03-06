webpackJsonp([17],{

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(895)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(897)
/* template */
var __vue_template__ = __webpack_require__(898)
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
Component.options.__file = "resources/assets/js/views/manager/deductions/new_deduction.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fc2e53a", Component.options)
  } else {
    hotAPI.reload("data-v-4fc2e53a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(896);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("63193351", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fc2e53a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_deduction.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fc2e53a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_deduction.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 897:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        nameState: function nameState() {
            return this.model.name.length >= 3;
        },
        amountState: function amountState() {
            return !isNaN(this.model.amount);
        },
        invalidFeedback: function invalidFeedback() {
            if (this.model.name.length > 3) {
                return '';
            } else if (this.model.name.length > 0) {
                return 'Enter at least 3 characters';
            } else {
                return 'Deduction name is required';
            }
        },
        validFeedback: function validFeedback() {
            return this.nameState === true ? 'Correct name' : '';
        },
        invalidAmount: function invalidAmount() {
            if (isNaN(this.model.amount)) {
                return 'Amount must be decimal';
            }
            return '';
        },
        validAmount: function validAmount() {
            return this.amountState === true ? 'Corrected amount' : '';
        }
    },
    data: function data() {
        return {
            model: {
                name: '',
                amount: 0,
                description: ''
            },
            countDown: 0,
            errorCount: 0,
            errors: []
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            if (this.nameSate === false || this.amountState === false) return;

            var token = localStorage.getItem('access_token');
            axios.post('/api/manager/deductions/create?token=' + token + '}', this.model).then(function (res) {
                console.log(res);
                _this.clear();
                _this.countDownChanged(4);
            }).catch(function (err) {
                console.log(err);
                if (err.response.status === 406) {
                    _this.errors = err.response.data.errors;
                    _this.onError(7);
                }
            });
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
        },
        clear: function clear() {
            this.model.name = '';
            this.model.amount = 0;
            this.model.description = '';
        },

        countDownChanged: function countDownChanged(count) {
            this.countDown = count;
        },
        onError: function onError(count) {
            this.errorCount = count;
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 898:
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
                attrs: {
                  variant: "primary",
                  "header-tag": "h4",
                  "footer-tag": "footer"
                }
              },
              [
                _c("h4", [_vm._v("New Deduction")]),
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
                      "\n                        New Deduction is created\n                    "
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
                      dissmissed: function($event) {
                        _vm.errorCount = 0
                      },
                      "dismiss-count-down": _vm.onError
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
                          id: "nameGroup",
                          description: "The name of category",
                          label: "Name",
                          "label-for": "name",
                          "invalid-feedback": _vm.invalidFeedback,
                          "valid-feedback": _vm.validFeedback,
                          state: _vm.nameState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: { id: "name", state: _vm.nameState },
                          model: {
                            value: _vm.model.name,
                            callback: function($$v) {
                              _vm.$set(_vm.model, "name", $$v)
                            },
                            expression: "model.name"
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
                          id: "amount",
                          description: "An Amount to be credit",
                          label: "Amount",
                          "label-for": "amount",
                          "invalid-feedback": _vm.invalidAmount,
                          "valid-feedback": _vm.validAmount,
                          state: _vm.amountState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "number",
                            id: "amount",
                            state: _vm.amountState
                          },
                          model: {
                            value: _vm.model.amount,
                            callback: function($$v) {
                              _vm.$set(_vm.model, "amount", $$v)
                            },
                            expression: "model.amount"
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
                          id: "desc",
                          description: "Description",
                          label: "Description",
                          "label-for": "desc"
                        }
                      },
                      [
                        _c("b-form-textarea", {
                          attrs: {
                            id: "desc",
                            placeholder: "Enter description",
                            rows: 3,
                            "max-rows": 6
                          },
                          model: {
                            value: _vm.model.description,
                            callback: function($$v) {
                              _vm.$set(_vm.model, "description", $$v)
                            },
                            expression: "model.description"
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
    require("vue-hot-reload-api")      .rerender("data-v-4fc2e53a", module.exports)
  }
}

/***/ })

});