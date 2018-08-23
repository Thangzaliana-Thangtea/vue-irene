webpackJsonp([12],{

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(820)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(822)
/* template */
var __vue_template__ = __webpack_require__(823)
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
Component.options.__file = "resources/assets/js/views/manager/products/edit_product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1716900", Component.options)
  } else {
    hotAPI.reload("data-v-d1716900", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(821);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("2ee172ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1716900\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_product.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1716900\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit_product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label::after {\n    content: '*';\n    color: red;\n    margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 822:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        nameState: function nameState() {
            return this.product.name.length >= 4;
        },
        priceState: function priceState() {
            return !isNaN(this.product.price);
        },
        invalidName: function invalidName() {
            if (this.product.name.length > 4) {
                return '';
            } else if (this.product.name.length > 0) {
                return 'Enter at least 4 characters';
            } else {
                return 'Product name is required';
            }
        },
        validName: function validName() {
            return this.state === true ? 'Correct name' : '';
        },
        invalidPrice: function invalidPrice() {
            if (isNaN(this.product.price)) {
                return '';
            } else if (this.product.price == 0) {
                return 'Please enter decimal number greater than 0';
            } else {
                return 'Product Price is required';
            }
        },
        validPrice: function validPrice() {
            return this.priceState === true ? 'Valid price' : '';
        }
    },
    data: function data() {
        return {
            id: -1,
            product: {
                name: '',
                category_id: null,
                description: '',
                price: 0,
                unit: 'Pcs'
            },
            errorCount: 0,
            errors: [],
            dismissSecs: 5,
            dismissCountDown: 0,
            categories: [{ value: null, text: 'Select category' }]
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            var valid = this.product.name && this.product.price && this.product.unit;
            if (!valid) {
                return;
            }
            var token = localStorage.getItem('access_token');
            axios.put('/api/manager/products/' + this.id + '/update?token=' + token, this.product).then(function (res) {
                _this.clear();
                _this.showAlert();
                _this.$router.replace('/manager/products');
            }).catch(function (err) {
                _this.errors = err.response.data.errors;
            });
        },
        onReset: function onReset(evt) {
            evt.preventDefault();
            this.clear();
        },
        clear: function clear() {
            this.product.name = '';
            this.product.price = 0;
            this.product.unit = 'Pcs';
            this.product.description = '';
        },

        showAlert: function showAlert() {
            this.dismissCountDown = this.dismissSecs;
        },
        onError: function onError(count) {
            this.errorCount = count;
        },
        countDownChanged: function countDownChanged(count) {
            this.countDown = count;
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        var id = this.$route.params.id;
        this.id = id;
        var token = localStorage.getItem('access_token');
        axios.get('/api/manager/categories?token=' + token).then(function (res) {
            res.data.data.forEach(function (cat) {
                var category = {
                    value: cat.id,
                    text: cat.name
                };
                _this2.categories.push(category);
            });
        }).catch(function (err) {
            console.log(err);
        });
        axios.get('/api/manager/products/' + id + '?token=' + token).then(function (res) {
            _this2.product = res.data.data;
        }).catch(function (err) {
            console.log(err);
        });
    }
});

/***/ }),

/***/ 823:
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
              { staticClass: "bg-success-card", attrs: { "header-tag": "h4" } },
              [
                _c(
                  "div",
                  [
                    _c("h4", [_vm._v("Edit Product")]),
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
                          "dissmiss-count-down": _vm.onError
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
                              breakpoint: "md",
                              description: "The name of your product",
                              label: " Name",
                              "label-for": "name",
                              "invalid-feedback": _vm.invalidName,
                              "valid-feedback": _vm.validName,
                              state: _vm.nameState
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                state: _vm.nameState,
                                id: "name",
                                type: "text",
                                placeholder: "Product Name"
                              },
                              model: {
                                value: _vm.product.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "name", $$v)
                                },
                                expression: "product.name"
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
                              description: "Category of product",
                              label: "Category",
                              "label-for": "category"
                            }
                          },
                          [
                            _c("b-form-select", {
                              staticClass: "mb-3",
                              attrs: {
                                id: "category",
                                options: _vm.categories
                              },
                              model: {
                                value: _vm.product.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "category_id", $$v)
                                },
                                expression: "product.category_id"
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
                              description: "The selling price of product.",
                              label: "Price",
                              "label-for": "price",
                              "invalid-feedback": _vm.invalidPrice,
                              "valid-feedback": _vm.validPrice
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                state: "priceState",
                                id: "price",
                                type: "number",
                                placeholder: "Enter Product Price"
                              },
                              model: {
                                value: _vm.product.price,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "price", $$v)
                                },
                                expression: "product.price"
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
                              description: "Units",
                              label: "Units",
                              "label-for": "unit"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "unit",
                                type: "text",
                                placeholder: "An unit of product"
                              },
                              model: {
                                value: _vm.product.unit,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "unit", $$v)
                                },
                                expression: "product.unit"
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
                              description: "Description of the products",
                              label: "Description",
                              "label-for": "desc"
                            }
                          },
                          [
                            _c("b-form-textarea", {
                              attrs: {
                                id: "desc",
                                placeholder: "Description",
                                rows: 3,
                                "max-rows": 6
                              },
                              model: {
                                value: _vm.product.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "description", $$v)
                                },
                                expression: "product.description"
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
                          { attrs: { variant: "primary", type: "submit" } },
                          [_vm._v("Update")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          { attrs: { variant: "danger", type: "reset" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-d1716900", module.exports)
  }
}

/***/ })

});