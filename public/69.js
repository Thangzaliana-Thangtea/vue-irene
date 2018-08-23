webpackJsonp([69],{

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(839)
/* template */
var __vue_template__ = __webpack_require__(840)
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
Component.options.__file = "resources/assets/js/views/manager/employees/employees.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2a0f794", Component.options)
  } else {
    hotAPI.reload("data-v-e2a0f794", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_js_modal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_js_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_js_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_tables_2__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_tables_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_tables_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_tables_2__["ClientTable"], {}, false);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_js_modal___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            id: 0,
            columns: ['id', 'name', 'contact', 'address', 'actions'],

            tableData: [],
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
            this.id = id;
            this.$router.push('/manager/employees/' + id + '/edit');
        },
        confirmDelete: function confirmDelete() {
            console.log(this.id);
        },

        deleteEmployee: function deleteEmployee(id) {
            var _this = this;

            axios.delete('/api/manager/employees/' + id + '/destroy').then(function (res) {
                _this.tableData = _this.tableData.filter(function (item) {
                    return item.id != res.data.data.id;
                });
            }).catch(function (err) {
                console.log(err);
            });
        },
        viewAttendance: function viewAttendance(id) {
            this.$router.push('/manager/employees/' + id + '/attendances');
        },
        viewAppointments: function viewAppointments(id) {
            this.$router.push('/manager/employees/' + id + '/appointments');
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$modal.show('loading-dialog');

        this.token = localStorage.getItem('access_token');
        axios.get('/api/manager/employees?token=' + this.token).then(function (res) {
            _this2.tableData = res.data.data;
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });
        this.$modal.hide('loading-dialog');
    }
});

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        { staticClass: "bg-success-card", attrs: { "header-tag": "h4" } },
        [
          _c("h4", [_vm._v("List of Employees")]),
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
                        "b-dropdown",
                        {
                          attrs: {
                            size: "sm",
                            variant: "success",
                            text: "Actions"
                          }
                        },
                        [
                          _c(
                            "b-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.viewAppointments(props.row.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-calendar" }),
                              _vm._v(
                                "\n                        Appointments\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.viewAttendance(props.row.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-bookmark" }),
                              _vm._v(" Attendance\n                    ")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.edit(props.row.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit" }),
                              _vm._v("Edit")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              on: {
                                Click: function($event) {
                                  _vm.deleteEmployee(props.row.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v("Delete\n                    ")
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
      ),
      _vm._v(" "),
      _c("modal", { attrs: { name: "loading-dialog", height: "200" } }, [
        _c("p", [_vm._v("Loading")])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-e2a0f794", module.exports)
  }
}

/***/ })

});