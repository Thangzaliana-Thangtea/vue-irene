webpackJsonp([38],{

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(782)
  __webpack_require__(784)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(786)
/* template */
var __vue_template__ = __webpack_require__(787)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42c8b14d"
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
Component.options.__file = "resources/assets/js/views/manager/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42c8b14d", Component.options)
  } else {
    hotAPI.reload("data-v-42c8b14d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(783);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("207bf955", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c8b14d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c8b14d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.swiper-pagination[data-v-42c8b14d] {\n    position: relative;\n}\n.swiper-pagination-fraction[data-v-42c8b14d],\n.swiper-pagination-custom[data-v-42c8b14d],\n.swiper-container-horizontal>.swiper-pagination-bullets[data-v-42c8b14d] {\n    top: 5px;\n}\n.swiper-container[data-v-42c8b14d] {\n    margin-top: 0px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(785);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("9f6f2256", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c8b14d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42c8b14d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.index2_table .table-responsive .card {\n  border: none;\n  box-shadow: none;\n  margin-bottom: 0;\n}\n.index2_swiper .swiper-pagination-bullet-active {\n  background: #08aa80;\n}\n\n/*===============================notes========*/\n.notes {\n  line-height: 22px;\n  font-size: 13px;\n  padding: 0 15px 0 36px;\n  position: relative;\n  outline: none;\n  background: #fff;\n  background-size: 100% 30px;\n}\n.notes p {\n  border-bottom: 1px solid #dfe8ec;\n}\n.notes::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  top: 0;\n  left: 25px;\n  bottom: 0;\n  border-left: 1px solid #0fd1c1;\n}\n.social .bg-default-card .info {\n  font-size: 12px;\n}\n.social .bg-default-card span {\n  display: block;\n  text-transform: uppercase;\n}\n.social .bg-default-card .value {\n  font-size: 40px;\n  line-height: normal;\n}\n.social_cuntdata {\n  font-weight: bold;\n  font-size: 18px;\n}\n.subscribe_btn {\n  background-color: transparent;\n  border: 0;\n  outline: none;\n}\n.widget_social_icons {\n  background-color: #fff;\n}\n.fb_text {\n  color: #215fe2;\n  font-size: 28px;\n}\n.box_shadow {\n  box-shadow: 2px 2px 15px 0px #ccc;\n}\n.head_color {\n  color: #686868;\n}\n.text_size {\n  font-size: 25px;\n  color: #797f82;\n}\n.text-ash {\n  color: #575f65;\n}\n.text_color {\n  color: #646161 !important;\n}\n.swiper-pagination {\n  margin: 0 !important;\n}\n.text-blue {\n  color: #215fe2;\n}\n.progress_color2 .progress-bar {\n  background-color: #7FAFF7;\n}\n.icon_color {\n  font-size: 27px;\n  color: #828686;\n}\n.icon_color1 {\n  font-size: 25px;\n  color: #6e8dce;\n}\n.line {\n  border-top: 1px solid #ccc;\n}\n.text_head_Color {\n  color: #707373;\n}\n.below_text {\n  color: #a2a1a1;\n}\n.index2_table th {\n  color: #686868;\n}\n.index2_table td {\n  color: #686868;\n}\n.user_color {\n  color: #8e8c8e;\n}\n.count1 {\n  font-size: 18px;\n  color: #686868;\n}\n.ti_color {\n  color: #215fe2;\n}\n.fb_color {\n  font-size: 18px;\n  color: #3B5998;\n}\n.twi_color {\n  color: #00aced;\n  font-size: 18px;\n}\n.gi_color {\n  color: red;\n  font-size: 18px;\n}\n.pin_color {\n  color: red;\n}\n.cam_color {\n  color: green;\n}\n.events1 {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-top: 15px;\n  margin-right: -20px;\n  font-size: 18px;\n  color: #555;\n}\n.online_dot img {\n  position: relative;\n}\n.online_dot::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -28px;\n  height: 11px;\n  width: 11px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  background-color: green;\n  margin-left: -13px;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  padding-top: 3px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap p {\n  margin: 0;\n  /*padding-top: 3px;*/\n}\n.ctext-wrap p {\n  margin-bottom: 10px;\n}\n.conversation-list .odd .conversation-text {\n  float: right;\n  margin-right: 25px;\n  text-align: right;\n  width: 95%;\n}\n.conversation-list .ctext-wrap i {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  font-style: normal;\n  position: relative;\n}\n.conversation-list .conversers1 .ctext-wrap {\n  background: #D8F1E4;\n}\n.conversation-list .ctext-wrap {\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 10px;\n  position: relative;\n  box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.text-field {\n  padding: 6px 10px;\n}\n.conversation-list .odd .ctext-wrap:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap:after {\n  right: 100%;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  margin-left: -1px;\n  border-top: 0 solid #fff;\n  border-right: 12px solid #e9f9ff;\n  border-bottom: 14px solid transparent;\n}\n.clearfix:after {\n  clear: both;\n}\n.back_color1 {\n  width: auto;\n  height: 274px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.conversation-list .conversation-text {\n  float: left;\n  font-size: 13px;\n  width: 70%;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.conversation-list .conversers2 .ctext-wrap {\n  background: #e9f9ff;\n}\n.m-t-10 {\n  margin-top: 10px !important;\n}\n.conversation-list {\n  width: auto;\n  height: 340px;\n  padding-left: 27px;\n}\n.profile-img {\n  background-color: #fff;\n}\n.chat-conversation {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 786:
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 787:
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
    return _c("div", [
      _c("div", { staticClass: "row mb-4" }, [
        _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
          _c(
            "div",
            { staticClass: "text-center p-3 widget_social_icons box_shadow" },
            [
              _c("div", { staticClass: "widget_social_inner1" }, [
                _c("i", { staticClass: "fa fa-user-o fb_text" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mt-2 text_size" }, [_vm._v("7465+")]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Users")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
          _c(
            "div",
            { staticClass: "text-center p-3 widget_social_icons box_shadow " },
            [
              _c("div", { staticClass: "widget_social_inner1" }, [
                _c("i", { staticClass: "fa fa-link fb_text" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v("1245+")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Products")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-6 mb-3" }, [
          _c(
            "div",
            { staticClass: "text-center p-3 widget_social_icons box_shadow" },
            [
              _c("div", { staticClass: " widget_social_inner1" }, [
                _c("i", { staticClass: "fa fa-comments-o fb_text" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v("742+")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Employees")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3  col-md-6 mb-3" }, [
          _c(
            "div",
            { staticClass: "text-center p-3 widget_social_icons box_shadow" },
            [
              _c("div", { staticClass: " widget_social_inner1" }, [
                _c("i", { staticClass: "fa fa-clone fb_text" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v("465+")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0 mt-2" }, [_vm._v("Services")])
              ])
            ]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-42c8b14d", module.exports)
  }
}

/***/ })

});