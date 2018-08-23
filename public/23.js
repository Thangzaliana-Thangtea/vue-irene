webpackJsonp([23],{

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(806)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(808)
/* template */
var __vue_template__ = __webpack_require__(809)
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
Component.options.__file = "resources/assets/js/views/manager/categories/new_category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d304eea", Component.options)
  } else {
    hotAPI.reload("data-v-3d304eea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(807);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5f700559", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d304eea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_category.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d304eea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./new_category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 808:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        state: function state() {
            return this.category.name.length >= 4 ? true : false;
        },
        invalidFeedback: function invalidFeedback() {
            if (this.category.name.length > 4) {
                return '';
            } else if (this.category.name.length > 0) {
                return 'Enter at least 4 characters';
            } else {
                return 'Category name is required';
            }
        },
        validFeedback: function validFeedback() {
            return this.state === true ? 'Correct Category name' : '';
        }
    },
    data: function data() {
        return {
            category: {
                name: '',
                description: ''
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
            if (this.category.name.length < 2) return;
            var token = localStorage.getItem('access_token');
            axios.post('/api/manager/categories/create?token=' + token + '}', this.category).then(function (res) {
                console.log(res);
                _this.clear();
                _this.showAlert();
            }).catch(function (err) {
                console.log(err.response);
                _this.errors = err.response.data.errors;
                _this.onError(7);
            });
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.reset();
        },
        clear: function clear() {
            this.category.name = '';
            this.category.description = '';
        },
        showAlert: function showAlert() {
            this.dismissCountDown = this.dismissSecs;
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

/***/ 809:
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
                _c("h4", [_vm._v("New Category")]),
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
                      "\n                        New Category is created\n                    "
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
                          state: _vm.state
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: { id: "name", state: _vm.state },
                          model: {
                            value: _vm.category.name,
                            callback: function($$v) {
                              _vm.$set(_vm.category, "name", $$v)
                            },
                            expression: "category.name"
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
                            value: _vm.category.description,
                            callback: function($$v) {
                              _vm.$set(_vm.category, "description", $$v)
                            },
                            expression: "category.description"
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
    require("vue-hot-reload-api")      .rerender("data-v-3d304eea", module.exports)
  }
}

/***/ })

});