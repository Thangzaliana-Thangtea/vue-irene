webpackJsonp([9],{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(826)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(828)
/* template */
var __vue_template__ = __webpack_require__(829)
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
Component.options.__file = "resources/assets/js/views/manager/services/new_services.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5182aae", Component.options)
  } else {
    hotAPI.reload("data-v-a5182aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(827);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0306720a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a5182aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_services.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a5182aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_services.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 828:
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
            return this.model.name.length >= 4;
        },
        commissionState: function commissionState() {
            return !isNaN(this.model.commission) && this.model.commission <= 100;
        },
        costState: function costState() {
            return !isNaN(this.model.cost);
        },
        invalidName: function invalidName() {
            if (this.model.name.length > 3) {
                return '';
            } else if (this.model.name.length > 0) {
                return 'Enter at least 3 characters';
            } else {
                return 'Service name is required';
            }
        },
        validName: function validName() {
            return this.nameState === true ? 'Correct service name' : '';
        },
        invalidCommission: function invalidCommission() {
            if (isNaN(this.model.commission)) return 'Please enter a decimal number';else if (this.model.commission > 100) return 'Commission is a percent it can\'t be greater than 100';else return 'Service name is required';
        },
        validCommission: function validCommission() {
            return this.commissionState === true ? 'Correct commission' : '';
        },
        invalidCost: function invalidCost() {
            if (isNaN(this.model.cost)) return 'Please enter a decimal number';else return 'Service name is required';
        },
        validCost: function validCost() {
            return this.costState === true ? 'Correct cost' : '';
        }
    },
    data: function data() {
        return {
            model: {
                name: '',
                remark: '',
                complimentary: '',
                commission: 0,
                cost: 0,
                duration: ''
            },
            errs: [],
            error: 0,
            countDown: 0
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            console.log(this.model);
            if (this.nameState === false || this.commissionState === false || this.costState === false) {
                return;
            }
            var token = localStorage.getItem('access_token');
            axios.post('api/manager/services/create?token=' + token, this.model).then(function (res) {
                _this.reset();
                _this.countDownChanged(3);
            }).catch(function (error) {
                console.log("error happens " + error.response.data);
                if (error.response.status == 406) _this.errs = error.response.data.errors;
                console.log(_this.errs);
                _this.errorCount(7);
            });
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
            this.countDownChanged();
        },
        reset: function reset() {
            this.model.name = '';
            this.model.duration = '';
            this.model.commission = 0;
            this.model.cost = 0;
            this.model.complimentary = '';
            this.model.remark = '';
        },
        countDownChanged: function countDownChanged(count) {
            this.countDown = count;
        },
        errorCount: function errorCount(count) {
            this.error = count;
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 829:
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
                staticClass: "primary",
                attrs: { "header-tag": "h4", "footer-tag": "footer" }
              },
              [
                _c(
                  "div",
                  [
                    _c("h4", [_vm._v("New Service")]),
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
                          "\n                New Service is created\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-alert",
                      {
                        attrs: {
                          show: _vm.error,
                          dismissible: "",
                          variant: "danger"
                        },
                        on: {
                          dismissed: function($event) {
                            _vm.error = 0
                          },
                          "dismiss-count-down": _vm.errorCount
                        }
                      },
                      [
                        _c(
                          "ul",
                          _vm._l(_vm.errs, function(err) {
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
                              description: "Please enter service name.",
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
                                id: "name",
                                type: "text",
                                state: _vm.nameState
                              },
                              model: {
                                value: _vm.model.name,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.model,
                                    "name",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
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
                              id: "durationGroup",
                              description: "Duration of a service",
                              label: "Duration",
                              "label-for": "duration"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "duration", type: "text" },
                              model: {
                                value: _vm.model.duration,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.model,
                                    "duration",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "model.duration"
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
                              id: "commissionGroup",
                              description:
                                "Percent of commission taken by manager.",
                              label: "Commission",
                              "label-for": "commission",
                              "invalid-feedback": _vm.invalidCommission,
                              "valid-feedback": _vm.validCommission,
                              state: _vm.commissionState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "commissionGroup",
                                type: "number",
                                state: _vm.commissionState
                              },
                              model: {
                                value: _vm.model.commission,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.model,
                                    "commission",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "model.commission"
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
                              id: "costGroup",
                              description: "Cost of a service",
                              label: "Cost",
                              "label-for": "cost",
                              "invalid-feedback": _vm.invalidCost,
                              "valid-feedback": _vm.validCost,
                              state: _vm.costState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "price",
                                type: "number",
                                state: _vm.costState
                              },
                              model: {
                                value: _vm.model.cost,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.model,
                                    "cost",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "model.cost"
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
                              id: "ComplimentaryGroup",
                              label: "Complimentary",
                              "label-for": "complimentary"
                            }
                          },
                          [
                            _c("b-form-textarea", {
                              attrs: {
                                id: "complimentary",
                                placeholder: "Service Complimentary",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.model.complimentary,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "complimentary", $$v)
                                },
                                expression: "model.complimentary"
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
                              id: "RemarkGroup",
                              label: "Remark",
                              "label-for": "remark"
                            }
                          },
                          [
                            _c("b-form-textarea", {
                              attrs: {
                                id: "remark",
                                placeholder: "Service Remark",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.model.remark,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "remark", $$v)
                                },
                                expression: "model.remark"
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
    require("vue-hot-reload-api")      .rerender("data-v-a5182aae", module.exports)
  }
}

/***/ })

});