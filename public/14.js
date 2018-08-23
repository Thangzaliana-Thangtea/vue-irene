webpackJsonp([14],{

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(879)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(881)
/* template */
var __vue_template__ = __webpack_require__(882)
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
Component.options.__file = "resources/assets/js/views/manager/payscales/edit_payscale.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6da0dff4", Component.options)
  } else {
    hotAPI.reload("data-v-6da0dff4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(880);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("4c52ca60", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da0dff4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_payscale.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6da0dff4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_payscale.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 881:
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
            return this.payscale.name != "";
        },
        startingState: function startingState() {
            return !isNaN(this.payscale.starting);
        },
        incState: function incState() {
            return !isNaN(this.payscale.duration);
        },
        amountState: function amountState() {
            return !isNaN(this.payscale.amount);
        },
        maxState: function maxState() {
            if (isNaN(this.payscale.max)) return false;
            if (this.payscale.max < this.payscale.starting) return false;
            return true;
        },
        invalidName: function invalidName() {
            return this.payscale.name = '' ? 'Name is required' : '';
        },
        validName: function validName() {
            return this.payscale.name != '' ? 'Corrected name' : '';
        },
        invalidStarting: function invalidStarting() {
            if (this.payscale.starting === '') return 'Starting salary is required';
            if (isNaN(this.payscale.starting)) return 'Starting salary must be decimal';
            return '';
        },
        validStarting: function validStarting() {
            return !isNaN(this.payscale.starting) ? 'Corrected starting salary' : '';
        },
        invalidInc: function invalidInc() {
            if (this.payscale.duration == '') return 'Incremental duration is required';
            if (isNaN(this.payscale.duration)) return 'Incremental duration value must be integer';
            return '';
        },
        validInc: function validInc() {
            return !isNaN(this.payscale.duration) ? 'Corrected Incremental duration' : '';
        },
        invalidAmount: function invalidAmount() {
            if (this.payscale.amount === '') return 'Incremental amount is required';
            if (isNaN(this.payscale.amount)) return 'Incremental amount must be Decimal';
            return '';
        },
        validAmount: function validAmount() {
            return !isNaN(this.payscale.amount) ? 'Corrected Incremental Amount' : '';
        },
        invalidMaximum: function invalidMaximum() {
            if (this.payscale.max == '') return 'Maximum Salary is required';
            if (isNaN(this.payscale.max)) return 'Maximum Salary must be Decimal';
            if (this.payscale.max < this.payscale.starting) return 'Maximum Salary must be greater than or equal to starting salary';
            return '';
        },
        validMaximum: function validMaximum() {
            return !isNaN(this.payscale.max) && this.payscale.max > this.payscale.max ? 'Corrected Maximum Salary' : '';
        }
    },
    data: function data() {
        return {
            payscale: {
                id: null,
                name: '',
                duration: 0,
                amount: 0,
                starting: 0,
                max: 0,
                remark: ''
            },
            dismissSecs: 5,
            dismissCountDown: 0,
            errorCount: 0,
            errors: []
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            if (this.nameState === false || this.startingState === false || this.incState === false || this.amountState === false || this.maxState === false) return;
            var token = localStorage.getItem('access_token');
            var id = this.payscale.id;
            axios.put('/api/manager/payscales/' + id + '/update', this.payscale).then(function (res) {
                _this.doClear();
                _this.countDownChanged(4);
            }).catch(function (err) {
                _this.errors = err.response.data.errors;
                _this.onError(7);
            });
        },
        doClear: function doClear() {
            this.payscale.name = '';
            this.payscale.duration = '';
            this.payscale.amount = '';
            this.payscale.starting = '';
            this.payscale.max = '';
            this.payscale.remark = '';
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
        },
        countDownChanged: function countDownChanged(count) {
            this.countDown = count;
        },
        onError: function onError(count) {
            this.errorCount = count;
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        var id = this.$route.params.id;
        var token = localStorage.getItem('access_token');
        axios.get('/api/manager/payscales/' + id + '?token=' + token).then(function (res) {
            console.log(res.data);
            _this2.payscale = res.data.data;
        }).catch(function (err) {
            console.log(err);
        });
    }
});

/***/ }),

/***/ 882:
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
                _c("h4", [_vm._v("Edit Payscale")]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "b-alert",
                  {
                    attrs: {
                      show: _vm.dismissCountDown,
                      dismissible: "",
                      variant: "success"
                    },
                    on: {
                      dismissed: function($event) {
                        _vm.dismissCountDown = 0
                      },
                      "dismiss-count-down": _vm.countDownChanged
                    }
                  },
                  [
                    _vm._v(
                      "\n                        New Payscale is created\n                    "
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
                          description: "Name of payscale",
                          label: "Name",
                          "label-for": "name",
                          "invalid-feedback": _vm.invalidName,
                          "valid-feedback": _vm.validName,
                          state: _vm.nameState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "text",
                            id: "name",
                            state: _vm.nameState
                          },
                          model: {
                            value: _vm.payscale.name,
                            callback: function($$v) {
                              _vm.$set(_vm.payscale, "name", $$v)
                            },
                            expression: "payscale.name"
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
                          id: "starting",
                          description: "Starting salary",
                          label: "Starting Salary",
                          "label-for": "starting",
                          "invalid-feedback": _vm.invalidStarting,
                          "valid-feedback": _vm.validStarting,
                          state: _vm.startingState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "number",
                            id: "starting",
                            state: _vm.startingState
                          },
                          model: {
                            value: _vm.payscale.starting,
                            callback: function($$v) {
                              _vm.$set(_vm.payscale, "starting", $$v)
                            },
                            expression: "payscale.starting"
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
                          id: "duration",
                          description: "Salary incremental duration by date",
                          label: "Incremental duration",
                          "label-for": "incremental",
                          "invalid-feedback": _vm.invalidInc,
                          "valid-feedback": _vm.validInc,
                          state: _vm.incState
                        }
                      },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "md", append: "Days" } },
                          [
                            _c("b-form-input", {
                              attrs: {
                                type: "number",
                                id: "incremental",
                                state: _vm.incState
                              },
                              model: {
                                value: _vm.payscale.duration,
                                callback: function($$v) {
                                  _vm.$set(_vm.payscale, "duration", $$v)
                                },
                                expression: "payscale.duration"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          id: "amount",
                          description:
                            "An amount Incremented after duration has been met",
                          label: "Incremental Amount",
                          "label-for": "am",
                          "invalid-feedback": _vm.invalidAmount,
                          "valid-feedback": _vm.validAmount,
                          state: _vm.amountState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "number",
                            id: "am",
                            state: _vm.amountState
                          },
                          model: {
                            value: _vm.payscale.amount,
                            callback: function($$v) {
                              _vm.$set(_vm.payscale, "amount", $$v)
                            },
                            expression: "payscale.amount"
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
                          id: "maximum",
                          description: "Maximum salary",
                          label: "Maximum Salary",
                          "label-for": "max",
                          "invalid-feedback": _vm.invalidMaximum,
                          "valid-feedback": _vm.validMaximum,
                          state: _vm.maxState
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "number",
                            id: "maximum",
                            state: _vm.maxState
                          },
                          model: {
                            value: _vm.payscale.max,
                            callback: function($$v) {
                              _vm.$set(_vm.payscale, "max", $$v)
                            },
                            expression: "payscale.max"
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
                            value: _vm.payscale.remark,
                            callback: function($$v) {
                              _vm.$set(_vm.payscale, "remark", $$v)
                            },
                            expression: "payscale.remark"
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
    require("vue-hot-reload-api")      .rerender("data-v-6da0dff4", module.exports)
  }
}

/***/ })

});