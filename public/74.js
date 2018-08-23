webpackJsonp([74],{

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(888)
/* template */
var __vue_template__ = __webpack_require__(889)
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
Component.options.__file = "resources/assets/js/views/manager/allowances/allowances.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1789f68a", Component.options)
  } else {
    hotAPI.reload("data-v-1789f68a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 888:
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



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_tables_2__["ClientTable"], {}, false);
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
            this.$router.push('/manager/allowances/' + id + '/edit');
        },
        deleteBranch: function deleteBranch(id) {
            var _this = this;

            var token = localStorage.getItem('access_token');
            axios.delete('/api/manager/allowances/' + id + '/destroy?token=' + token).then(function (res) {
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
            axios.get('/api/manager/allowances?token=' + token).then(function (response) {
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

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "bg-info-card", attrs: { "header-tag": "h4" } },
    [
      _c("h4", [_vm._v("List of Allowances")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-1789f68a", module.exports)
  }
}

/***/ })

});