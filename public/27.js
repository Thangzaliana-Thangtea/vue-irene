webpackJsonp([27],{

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(771)
/* template */
var __vue_template__ = __webpack_require__(772)
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
Component.options.__file = "resources/assets/js/views/pages/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c39353be", Component.options)
  } else {
    hotAPI.reload("data-v-c39353be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 771:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register'
});

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app flex-row align-items-center" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card mx-4" }, [
              _c("div", { staticClass: "card-body p-4" }, [
                _c("h1", [_vm._v("Register")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v("Create your account")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("span", { staticClass: "input-group-addon" }, [
                    _c("i", { staticClass: "icon-user" })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Username" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("span", { staticClass: "input-group-addon" }, [
                    _vm._v("@")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Email" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("span", { staticClass: "input-group-addon" }, [
                    _c("i", { staticClass: "icon-lock" })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "password", placeholder: "Password" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-4" }, [
                  _c("span", { staticClass: "input-group-addon" }, [
                    _c("i", { staticClass: "icon-lock" })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "password", placeholder: "Repeat password" }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-success",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Create Account")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer p-4" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-block btn-facebook",
                        attrs: { type: "button" }
                      },
                      [_c("span", [_vm._v("facebook")])]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-block btn-twitter",
                        attrs: { type: "button" }
                      },
                      [_c("span", [_vm._v("twitter")])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c39353be", module.exports)
  }
}

/***/ })

});