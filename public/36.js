webpackJsonp([36],{

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(846)
/* template */
var __vue_template__ = __webpack_require__(847)
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
Component.options.__file = "resources/assets/js/views/manager/attendances/employee_attendance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13214f70", Component.options)
  } else {
    hotAPI.reload("data-v-13214f70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullcalendar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_fullcalendar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'EmployeeAttendance',
    components: {
        fullCalendar: __WEBPACK_IMPORTED_MODULE_0_vue_fullcalendar___default.a
    },
    data: function data() {
        return {
            attendances: [],
            employee: {
                name: '',
                contact: '',
                address: '',
                description: ''
            },
            token: ''
        };
    },
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
    methods: {
        dayClick: function dayClick() {},
        onSubmit: function onSubmit() {},
        onReset: function onReset() {}
    },
    mounted: function mounted() {
        var _this = this;

        var id = this.$route.params.id;
        console.log(id);
        this.token = localStorage.getItem('access_token');

        axios.get('api/manager/employees/' + id + '/attendances?token=' + this.token).then(function (res) {
            _this.attendances = res.data.data;
        }).catch(function (err) {
            console.log(err);
        });
        axios.get('api/manager/employees/' + id).then(function (res) {
            _this.employee = res.data.data;
        }).catch(function (err) {
            console.log(err.response);
        });
    }
});

/***/ }),

/***/ 847:
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
            { attrs: { cols: "4" } },
            [
              _c(
                "b-card",
                [
                  _c("h2", [_vm._v("Persona")]),
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "8" } },
            [
              _c(
                "full-calendar",
                {
                  attrs: { events: _vm.attendances, lang: "en" },
                  on: { dayClick: _vm.dayClick }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "pull-right",
                      attrs: { slot: "fc-header-right" },
                      slot: "fc-header-right"
                    },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "success" } },
                        [
                          _c("i", {
                            staticClass: "fa fa-filter",
                            on: {
                              click: function($event) {
                                _vm.console.log(_vm.e)
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "primary" } },
                        [
                          _c("i", {
                            staticClass: "fa fa-list",
                            on: {
                              click: function($event) {
                                _vm.console.log(_vm.e)
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "fc-body-card" }, slot: "fc-body-card" },
                    [_c("hr")]
                  )
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-13214f70", module.exports)
  }
}

/***/ })

});