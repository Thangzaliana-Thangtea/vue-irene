webpackJsonp([19],{

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(903)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(905)
/* template */
var __vue_template__ = __webpack_require__(906)
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
Component.options.__file = "resources/assets/js/views/manager/deductions/deductions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdc836ac", Component.options)
  } else {
    hotAPI.reload("data-v-bdc836ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(904);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("c6647dac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdc836ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deductions.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdc836ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deductions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tables_2__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tables_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_tables_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_tables_2__["ClientTable"], {}, false, 'bulma');
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "advanced_tables",

    data: function data() {
        return {
            tableData: [],
            columns: ['id', 'name', 'amount', 'description', 'actions'],
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                skin: "table-hover table-striped table-bordered",
                perPage: 7,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 3,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                }
            }
        };
    },

    methods: {
        edit: function edit(id) {
            this.$router.push('/manager/deductions/' + id + '/edit');
        },
        deleteBranch: function deleteBranch(id) {
            var _this = this;

            var token = localStorage.getItem('access_token');
            axios.delete('/api/manager/deductions/' + id + '/destroy?token=' + token).then(function (res) {
                _this.tableData = _this.tableData.filter(function (item) {
                    return item.id !== res.data.data.id;
                });
                //                            showInfo();
            }).catch(function (err) {
                console.log(err);
            });
        },
        showInfo: function showInfo() {},
        fetchall: function fetchall() {
            var _this2 = this;

            var token = localStorage.getItem('access_token');
            axios.get('/api/manager/deductions?token=' + token).then(function (response) {
                console.log(response.data);
                _this2.tableData = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        }

    },
    mounted: function mounted() {
        this.fetchall();
    }
});

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "bg-info-card", attrs: { "header-tag": "h4" } },
    [
      _c(
        "b-row",
        { staticClass: "top-bar" },
        [
          _c("b-col", [_c("h4", [_vm._v("List of Deductions")])]),
          _vm._v(" "),
          _c("b-col", [
            _c(
              "div",
              { staticClass: "pull-right" },
              [
                _c(
                  "b-button-group",
                  { attrs: { size: "sm" } },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "dark" },
                        on: {
                          click: function($event) {
                            _vm.edit(_vm.props.row.id)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-download" }),
                        _vm._v(" Import")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: {
                          click: function($event) {
                            _vm.deleteBranch(_vm.props.row.id)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-upload" }),
                        _vm._v(" Export")
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("v-client-table", {
        attrs: {
          data: _vm.tableData,
          columns: _vm.columns,
          options: _vm.options
        },
        scopedSlots: _vm._u([
          {
            key: "actions",
            fn: function(props) {
              return _c(
                "div",
                {},
                [
                  _c(
                    "b-button-group",
                    { attrs: { size: "sm" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "success" },
                          on: {
                            click: function($event) {
                              _vm.edit(props.row.id)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-edit" }),
                          _vm._v(" Edit")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              _vm.deleteBranch(props.row.id)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-trash" }),
                          _vm._v(" Delete")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }
          }
        ])
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-bdc836ac", module.exports)
  }
}

/***/ })

});