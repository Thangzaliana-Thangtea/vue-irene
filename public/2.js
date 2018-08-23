webpackJsonp([2],{

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(799)
/* template */
var __vue_template__ = __webpack_require__(805)
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
Component.options.__file = "resources/assets/js/views/manager/attendances/parent_attendances.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-251ec22f", Component.options)
  } else {
    hotAPI.reload("data-v-251ec22f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_vue__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__overview_vue__);
//
//
//
//
//
//
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
        overview: __WEBPACK_IMPORTED_MODULE_0__overview_vue___default.a
    },
    methods: {}
});

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(801)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(803)
/* template */
var __vue_template__ = __webpack_require__(804)
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
Component.options.__file = "resources/assets/js/views/manager/attendances/overview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65308593", Component.options)
  } else {
    hotAPI.reload("data-v-65308593", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(802);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("18dc6951", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65308593\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./overview.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65308593\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./overview.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.attendance-item{\n    width: auto;\n    height: auto;\n    border-radius: 6px;\n    background-color: white;\n    box-shadow: 5px 5px 5px #456;\n    color: #345;\n    padding: 8px;\n    margin: 10px;\n}\n.attendance-title{\n    display: inline;\n}\n", ""]);

// exports


/***/ }),

/***/ 803:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'overview',
    data: function data() {
        return {
            attendances: [],
            model: {
                date: new Date(),
                employee: null,
                remark: ''
            },
            employees: [{ value: null, text: 'Select employee' }]
        };
    },
    computed: {},
    methods: {
        getDate: function getDate(date) {
            return moment(date).format('DD/MM/YYYY');
        },

        onDayChanged: function onDayChanged(data) {
            var dateArr = data.date.split(' ');
            this.model.date = new Date(dateArr);
            this.$modal.show('dialog');
        },
        onMonthChanged: function onMonthChanged(data) {},
        resetForm: function resetForm() {
            this.model.employee = null;
            this.model.date = new Date();
            this.model.remark = '';

            this.$modal.hide('dialog');
        },
        newAttendance: function newAttendance() {
            var _this = this;

            if (this.model.employee == null) return;
            var d = moment(this.model.date).format('DD/MM/YYYY');
            this.model.date = d;
            var token = localStorage.getItem('access_token');
            axios.post('api/manager/attendances/create?token=' + token, this.model).then(function (res) {

                _this.attendances.push(res.data.data);
                _this.countDownChanged(3);
                _this.resetForm();
            }).catch(function (err) {
                console.log(err);
            });
            this.$modal.hide('dialog');
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.token = localStorage.getItem('access_token');
        axios.get('api/manager/attendances?token=' + this.token).then(function (res) {
            _this2.attendances = res.data.data;
        }).catch(function (err) {
            if (err.response.status == 401) _this2.$router.push('/login');
        });
        axios.get('api/manager/employees?token=' + this.token).then(function (res) {
            res.data.data.forEach(function (c) {
                var cust = {
                    value: c.id, text: c.name
                };
                _this2.employees.push(cust);
            });
        }).catch(function (err) {
            if (err.response.status == 401) _this2.$router.push('/login');
        });
        var today = moment(new Date()).format('YYYY/MM/DD');
        this.$EventCalendar.toDate(today);
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-btn", { attrs: { size: "sm", variant: "primary" } }, [
        _c("i", { staticClass: "fa fa-plus-circle" }),
        _vm._v(" New Attendance ")
      ]),
      _vm._v(" "),
      _c(
        "b-button-group",
        { staticClass: "pull-right", attrs: { size: "sm" } },
        [
          _c("b-button", { attrs: { variant: "success" } }, [
            _c("i", { staticClass: "fa fa-download" }),
            _vm._v(" Import ")
          ]),
          _vm._v(" "),
          _c("b-button", { attrs: { variant: "dark" } }, [
            _c("i", { staticClass: "fa fa-upload" }, [_vm._v(" Export")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("vue-event-calendar", {
        attrs: { events: _vm.attendances },
        on: {
          "day-changed": _vm.onDayChanged,
          "month-changed": _vm.onMonthChanged
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return _vm._l(props.showEvents, function(event, i) {
                return _c("div", { staticClass: "attendance-item" }, [
                  _c("div", { staticClass: "attendance-title" }, [
                    _c("span", [
                      _vm._v(_vm._s(i + 1) + ". " + _vm._s(event.title))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pull-right" }, [
                      _vm._v(_vm._s(_vm.getDate(event.date)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { align: "right" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(event.desc) +
                          "    \n                    "
                      ),
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "danger" } },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ],
                    1
                  )
                ])
              })
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "dialog", height: 400 } },
        [
          _c(
            "b-card",
            { attrs: { "header-tag": "h4" } },
            [
              _c("h3", [_vm._v("New Attendance")]),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-form",
                { on: { submit: _vm.newAttendance, reset: _vm.resetForm } },
                [
                  _c("div", { staticClass: "form-control" }, [
                    _c("h4", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.getDate(_vm.model.date)) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "empGroup",
                        breakpoint: "sm",
                        label: "Employee",
                        "label-for": "emp"
                      }
                    },
                    [
                      _c("b-form-select", {
                        staticClass: "mb-3",
                        attrs: {
                          id: "emp",
                          required: true,
                          options: _vm.employees
                        },
                        model: {
                          value: _vm.model.employee,
                          callback: function($$v) {
                            _vm.$set(_vm.model, "employee", $$v)
                          },
                          expression: "model.employee"
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
                        id: "remGroup",
                        breakpoint: "sm",
                        label: "Remark",
                        "label-for": "rem"
                      }
                    },
                    [
                      _c("b-input", {
                        staticClass: "mb-3",
                        attrs: {
                          id: "rem",
                          type: "text",
                          placeholder: "Remark"
                        },
                        model: {
                          value: _vm.model.remark,
                          callback: function($$v) {
                            _vm.$set(_vm.model, "remark", $$v)
                          },
                          expression: "model.remark "
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pull-right" },
                    [
                      _c(
                        "b-button",
                        { attrs: { type: "submit", variant: "primary" } },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { type: "reset", variant: "danger" } },
                        [_vm._v("Cancel")]
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
    require("vue-hot-reload-api")      .rerender("data-v-65308593", module.exports)
  }
}

/***/ }),

/***/ 805:
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
          _c("b-tab", { attrs: { title: "Payroll" } }),
          _vm._v(" "),
          _c("b-tab", { attrs: { title: "Leave" } }),
          _vm._v(" "),
          _c("b-tab", { attrs: { title: "Delll" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-251ec22f", module.exports)
  }
}

/***/ })

});