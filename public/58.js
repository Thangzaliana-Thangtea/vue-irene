webpackJsonp([58],{

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(858)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(860)
/* template */
var __vue_template__ = __webpack_require__(861)
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
Component.options.__file = "resources/assets/js/views/manager/customers/new_customer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6d3f4a8", Component.options)
  } else {
    hotAPI.reload("data-v-e6d3f4a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(859);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("860d6e98", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6d3f4a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_customer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6d3f4a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_customer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 860:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        nameState: function nameState() {
            return this.model.name.length >= 4;
        },
        emailState: function emailState() {
            return this.model.email.length >= 4;
        },
        invalidName: function invalidName() {
            if (this.model.name.length > 4) {
                return '';
            } else if (this.model.name.length > 0) {
                return 'Enter at least 4 characters';
            } else {
                return 'Customer name is required';
            }
        },
        validName: function validName() {
            return this.nameState === true ? 'Correct customer name' : '';
        },
        invalidEmail: function invalidEmail() {
            if (this.model.email.length > 4) {
                return '';
            } else if (this.model.email.length > 0) {
                return 'Enter at least 4 characters';
            } else {
                return 'Email is required';
            }
        },
        validEmail: function validEmail() {
            return this.emailState === true ? 'Correct Email' : '';
        }
    },
    data: function data() {
        return {
            model: {
                name: '',
                email: '',
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
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            if (this.nameState === false || this.emailState === false) {
                return;
            }
            var token = localStorage.getItem('access_token');
            axios.post('/api/manager/customers/create?token=' + token, this.model).then(function (res) {
                console.log(res);
                _this.reset();
                _this.countDownChanged();
            }).catch(function (err) {
                if (err.response.status == 406) _this.errors = err.response.data;
            });
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
        },
        reset: function reset() {
            this.model.email = '';
            this.model.contact = '';
            this.model.name = '';
            this.model.address = '';
            this.model.description = '';
        },
        countDownChanged: function countDownChanged() {
            this.countDown = 4;
        },
        errorCountChanged: function errorCountChanged() {
            this.errorCount = 7;
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 861:
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
                    _c("h4", [_vm._v("New Customer")]),
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
                          "\n                            Nw Customer is created\n                        "
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
                          "dismiss-count-down": _vm.errorCountChanged
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
                              id: "nameGroup",
                              description: "Please enter customer name.",
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
                                placeholder: "Name",
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
                              id: "emailGroup",
                              description: "Enter an Email of Customer",
                              label: "Email",
                              "label-for": "email",
                              "invalid-feedback": _vm.invalidEmail,
                              "valid-feedback": _vm.validEmail,
                              state: _vm.emailState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "email",
                                type: "email",
                                placeholder: " Email"
                              },
                              model: {
                                value: _vm.model.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "email", $$v)
                                },
                                expression: "model.email"
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
                              description: "Please Enter Customer contact ",
                              label: "Contact",
                              "label-for": "contact"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "contact",
                                type: "text",
                                placeholder: "Contact"
                              },
                              model: {
                                value: _vm.model.contact,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "contact", $$v)
                                },
                                expression: "model.contact"
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
                                placeholder: " Address",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.model.address,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "address", $$v)
                                },
                                expression: "model.address"
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
                                placeholder: "Description ",
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
    require("vue-hot-reload-api")      .rerender("data-v-e6d3f4a8", module.exports)
  }
}

/***/ })

});