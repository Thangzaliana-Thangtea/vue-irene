webpackJsonp([16],{

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(840)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(842)
/* template */
var __vue_template__ = __webpack_require__(843)
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
Component.options.__file = "resources/assets/js/views/manager/employees/edit_employee.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c196674", Component.options)
  } else {
    hotAPI.reload("data-v-0c196674", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(841);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("dc15547e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c196674\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_employee.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c196674\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_employee.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 842:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        state: function state() {
            return this.employee.name.length >= 4 ? true : false;
        },
        invalidFeedback: function invalidFeedback() {
            if (this.employee.name.length > 4) {
                return '';
            } else if (this.employee.name.length > 0) {
                return 'Enter at least 4 characters';
            } else {
                return 'Please enter something';
            }
        },
        validFeedback: function validFeedback() {
            return this.state === true ? 'Thank you' : '';
        }
    },
    data: function data() {
        return {
            branches: [{ id: null, text: 'Select branch' }],
            employee: {
                branch_id: null,
                name: '',
                contact: '',
                address: '',
                description: ''
            },
            countDown: 0,
            errorCount: 0,
            errors: []
        };
    },

    methods: {

        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
        },
        reset: function reset() {
            this.employee.id = this.$route.params.id;
            this.employee.branch_id = null, this.employee.name = '';
            this.employee.contact = '';
            this.employee.address = '';
            this.employee.description = '';
        },
        countDownChanged: function countDownChanged() {
            this.countDown = 5;
        },
        onError: function onError(count) {
            this.errorCount = count;
        },
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            if (this.state === false) {
                return;
            }
            var token = localStorage.getItem('access_token');
            var id = this.$route.params.id;
            axios.put('/api/manager/employees/' + id + '/update?token=' + token, this.employee).then(function (res) {
                _this.$router.push('/employees');
            }).catch(function (err) {
                this.errors = err.response.data.errors;
                this.onError(7);
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        var id = this.$route.params.id;
        this.employee.id = this.$route.params.id;
        var token = localStorage.getItem('access_token');

        axios.get('/api/manager/branches?token=' + token).then(function (res) {
            res.data.data.forEach(function (cat) {
                var branch = {
                    id: cat.id,
                    text: cat.name
                };
                _this2.branches.push(branch);
            });
        }).catch(function (err) {
            console.log(err);
        });
        axios.get('/api/manager/employees/' + id + '?token=' + token).then(function (res) {
            _this2.employee = res.data.data;
        }).catch(function (err) {
            return console.log(err);
        });
    }
});

/***/ }),

/***/ 843:
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
              { attrs: { "header-tag": "h4", "footer-tag": "footer" } },
              [
                _c(
                  "div",
                  [
                    _c("h4", [_vm._v("Edit Employee")]),
                    _vm._v(" "),
                    _c("hr"),
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
                              description: "Please enter the name of employee.",
                              label: "Name",
                              "label-for": "name",
                              "invalid-feedback": _vm.invalidFeedback,
                              "valid-feedback": _vm.validFeedback,
                              state: _vm.state
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "name",
                                type: "text",
                                state: _vm.state
                              },
                              model: {
                                value: _vm.employee.name,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.employee,
                                    "name",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "employee.name"
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
                              breakpoint: "md",
                              description: "Branch where employees belongs",
                              label: "Branch",
                              "label-for": "branch"
                            }
                          },
                          [
                            _c("b-form-select", {
                              staticClass: "mb-3",
                              attrs: { id: "branch", options: _vm.branches },
                              model: {
                                value: _vm.employee.branch_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.employee, "branch_id", $$v)
                                },
                                expression: "employee.branch_id"
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
                              id: "contactGroup",
                              description:
                                "Please enter employee contact (Mobile or landline)",
                              label: "Contact",
                              "label-for": "contact"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "contact",
                                type: "text",
                                placeholder: "Employee contact"
                              },
                              model: {
                                value: _vm.employee.contact,
                                callback: function($$v) {
                                  _vm.$set(_vm.employee, "contact", $$v)
                                },
                                expression: "employee.contact"
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
                              id: "addressGroup",
                              description: "Customer address",
                              label: "Address",
                              "label-for": "address"
                            }
                          },
                          [
                            _c("b-form-textarea", {
                              attrs: {
                                id: "address",
                                placeholder: "Employee Address",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.employee.address,
                                callback: function($$v) {
                                  _vm.$set(_vm.employee, "address", $$v)
                                },
                                expression: "employee.address"
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
                              id: "descGroup",
                              description: "Description",
                              label: "Description",
                              "label-for": "description"
                            }
                          },
                          [
                            _c("b-form-textarea", {
                              attrs: {
                                id: "description",
                                placeholder: "Description of Employee",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.employee.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.employee, "description", $$v)
                                },
                                expression: "employee.description"
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
    require("vue-hot-reload-api")      .rerender("data-v-0c196674", module.exports)
  }
}

/***/ })

});