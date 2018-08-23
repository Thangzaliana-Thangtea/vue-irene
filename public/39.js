webpackJsonp([39],{

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(845)
/* template */
var __vue_template__ = __webpack_require__(857)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/views/manager/payrolls/payrolls.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f053b2c", Component.options)
  } else {
    hotAPI.reload("data-v-9f053b2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_vue__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__overview_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pays_vue__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pays_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pays_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_vue__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__test_vue__);
//
//
//
//
//
//
//
//
//
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
        return {};
    },
    components: {
        test: __WEBPACK_IMPORTED_MODULE_2__test_vue___default.a,
        pays: __WEBPACK_IMPORTED_MODULE_1__pays_vue___default.a,
        overview: __WEBPACK_IMPORTED_MODULE_0__overview_vue___default.a
    },
    methods: {}
});

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(847)
/* template */
var __vue_template__ = __webpack_require__(848)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/views/manager/payrolls/overview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12e4eb16", Component.options)
  } else {
    hotAPI.reload("data-v-12e4eb16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 847:
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            [
              _c("b-card", [
                _c("h6", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("h2", [_vm._v("2313")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c("b-card", [
                _c("h6", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("h2", [_vm._v("2313")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c("b-card", [
                _c("h6", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("h2", [_vm._v("2313")])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { cols: "8" } }, [
            _c("table", { staticClass: "table" }, [
              _c("thead", [_vm._v("Heading one")]),
              _vm._v(" "),
              _c("th", [_vm._v("One")]),
              _vm._v(" "),
              _c("th", [_vm._v("Two")]),
              _vm._v(" "),
              _c("th", [_vm._v("Three")]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ]),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c("b-card", [
                _c("h3", [_c("i", { staticClass: "fa fa-user" })]),
                _vm._v(" "),
                _c("h3", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("h3", [_vm._v("Amount")])
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12e4eb16", module.exports)
  }
}

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(850)
/* template */
var __vue_template__ = __webpack_require__(851)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/views/manager/payrolls/pays.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48bc1ac7", Component.options)
  } else {
    hotAPI.reload("data-v-48bc1ac7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(moment) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'payroll',
    data: function data() {
        return {
            model: {
                employee: null,
                payscale: null,
                from: new moment(),
                to: moment(new Date(), 'DD/MM/YYYY').add(30)
            },
            employees: [{ value: null, text: 'Choose Employee' }],
            payscales: [{ value: null, text: 'Choose Payscale' }]
        };
    },

    methods: {
        onSubmit: function onSubmit(evt) {
            evt.preventDefault;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h6", [_vm._v("New Payment")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "b-form-row",
        [
          _c(
            "b-form",
            { attrs: { inline: "" }, on: { submit: _vm.onSubmit } },
            [
              _c(
                "b-form-select",
                {
                  staticClass: "mb-2 mr-sm-2 mb-sm-0",
                  attrs: { id: "emp", options: _vm.employees },
                  model: {
                    value: _vm.model.employee,
                    callback: function($$v) {
                      _vm.$set(_vm.model, "employee", $$v)
                    },
                    expression: "model.employee"
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { slot: "fisrt", value: "null" }, slot: "fisrt" },
                    [_vm._v("Choose Employee")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-form-select",
                {
                  staticClass: "mb-2 mr-sm-2 mb-sm-0",
                  attrs: { id: "scale", options: _vm.payscales },
                  model: {
                    value: _vm.model.payscale,
                    callback: function($$v) {
                      _vm.$set(_vm.model, "payscale", $$v)
                    },
                    expression: "model.payscale"
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { slot: "fisrt", value: "null" }, slot: "fisrt" },
                    [_vm._v("Choose Employee")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "mr-sm-2", attrs: { for: "from" } }, [
                _vm._v("From")
              ]),
              _vm._v(" "),
              _c("b-form-input", {
                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                attrs: { type: "date", id: "from", placeholder: "From" },
                model: {
                  value: _vm.model.from,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "from", $$v)
                  },
                  expression: "model.from"
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "mr-sm-2", attrs: { for: "to" } }, [
                _vm._v("To")
              ]),
              _vm._v(" "),
              _c("b-form-input", {
                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                attrs: { type: "date", id: "to", placeholder: "To" },
                model: {
                  value: _vm.model.to,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "to", $$v)
                  },
                  expression: "model.to"
                }
              }),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_c("i", { staticClass: "fa fa-plus-circle" }), _vm._v(" Add")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", [
            _c("h6", [_vm._v("Payment History")]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _c("thead", [_vm._v("Heading one")]),
              _vm._v(" "),
              _c("th", [_vm._v("One")]),
              _vm._v(" "),
              _c("th", [_vm._v("Two")]),
              _vm._v(" "),
              _c("th", [_vm._v("Three")]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ]),
              _c("tr", [
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")]),
                _vm._v(" "),
                _c("td", [_vm._v("yeah")])
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48bc1ac7", module.exports)
  }
}

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(853)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(855)
/* template */
var __vue_template__ = __webpack_require__(856)
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
Component.options.__file = "resources/assets/js/views/manager/payrolls/test.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9caa81e4", Component.options)
  } else {
    hotAPI.reload("data-v-9caa81e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(854);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6903e3c8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9caa81e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9caa81e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.timeline-wrapper{\n    width: 100%;\n    height: 100%;\n    overflow: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n.timeline{\n    cursor: hand;\n    box-shadow: 4px 4px 4px 4px;\n    background-color: white;\n    margin: 16px;\n    padding:10px;\n    display: inline-block;\n    width: 100px;\n    height: 60px;\n}\n.h6{\n    cursor: hand;\n}\n.p-card{\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    background-color: white;\n    box-shadow: 5px 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 855:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            items: []
        };
    },
    methods: {
        descClick: function descClick(item) {
            console.log(item.desc);
        }
    },
    mounted: function mounted() {
        for (var i = 0; i < 365; i++) {
            var item = {
                title: 'title ' + i,
                desc: 'desc ' + i
            };
            this.items.push(item);
        }
    }
});

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("b-row", [
    _c(
      "div",
      { staticClass: "timeline-wrapper" },
      _vm._l(_vm.items, function(item) {
        return _c("div", { staticClass: "timeline" }, [
          _c("h5", [_vm._v(_vm._s(item.title))]),
          _vm._v(" "),
          _c(
            "h6",
            {
              on: {
                click: function($event) {
                  _vm.descClick(item)
                }
              }
            },
            [_vm._v(_vm._s(item.desc))]
          )
        ])
      })
    ),
    _vm._v(" "),
    _c("div", { staticClass: "p-card" }, [
      _c(
        "ul",
        { staticClass: "list-group" },
        _vm._l(_vm.items, function(item) {
          return _c("li", { staticClass: "list-group-item" }, [
            _vm._v(_vm._s(item.desc))
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9caa81e4", module.exports)
  }
}

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-tabs",
        { attrs: { card: "" } },
        [
          _c("b-tab", { attrs: { title: "Overview" } }, [_c("overview")], 1),
          _vm._v(" "),
          _c("b-tab", { attrs: { title: "Payroll" } }, [_c("pays")], 1),
          _vm._v(" "),
          _c("b-tab", { attrs: { title: "Leave" } }, [_c("test")], 1),
          _vm._v(" "),
          _c("b-tab", { attrs: { title: "Delll" } }, [
            _c("p", [_vm._v("Payroll main")])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9f053b2c", module.exports)
  }
}

/***/ })

});