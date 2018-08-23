webpackJsonp([34],{

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(873)
/* template */
var __vue_template__ = __webpack_require__(874)
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
Component.options.__file = "resources/assets/js/views/manager/customers/customer_appointments.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d353914", Component.options)
  } else {
    hotAPI.reload("data-v-4d353914", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 873:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            appointments: [],
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
    methods: {
        getDate: function getDate(data) {
            return moment(data).format('DD-MMM-YYYY hh:mm:ss a');
        },

        onSubmit: function onSubmit() {},
        onReset: function onReset() {}
    },
    mounted: function mounted() {
        var _this = this;

        var id = this.$route.params.id;
        var token = localStorage.getItem('access_token');
        axios.get('api/manager/customers/' + id + '?token=' + token).then(function (res) {
            _this.model = res.data.data;
        }).catch(function (err) {
            console.log(err.response);
        });

        axios.get('api/manager/customers/' + id + '/appointments?token=' + token).then(function (res) {
            _this.appointments = res.data.data;
        }).catch(function (err) {
            console.log(err.response);
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "4" } },
        [
          _c("b-card", [
            _c(
              "div",
              [
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
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("b-col", { attrs: { cols: "8" } }, [
        _c(
          "ul",
          { staticClass: "list-group" },
          [
            _c("li", { staticClass: "list-group-item active" }, [
              _c("h4", [_vm._v("Appointment History")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.appointments, function(app) {
              return _c(
                "li",
                { staticClass: "list-group-item" },
                [
                  _c("strong", [_vm._v(_vm._s(app.title))]),
                  _vm._v(" appointment is scheduled on\n                "),
                  _c("strong", [_vm._v(_vm._s(_vm.getDate(app.date)))]),
                  _vm._v("\n                    \n                    "),
                  app.status == 0
                    ? _c("b-badge", { attrs: { variant: "dark" } }, [
                        _vm._v("Booked")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  app.status == 1
                    ? _c("b-badge", { attrs: { variant: "primary" } }, [
                        _vm._v("Finished")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-btn",
                    {
                      staticClass: "pull-right",
                      attrs: { size: "sm", variant: "danger" }
                    },
                    [_c("i", { staticClass: "fa fa-close" })]
                  )
                ],
                1
              )
            })
          ],
          2
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4d353914", module.exports)
  }
}

/***/ })

});