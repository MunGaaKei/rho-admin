var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { j as defineComponent, u as useStore, n as useRouter, q as useI18n_1, r as ref, o as openBlock, t as createElementBlock, C as createBaseVNode, D as toDisplayString, F as Fragment, y as createCommentVNode, a2 as createTextVNode } from "./vendor.4c868317.js";
import { _ as _export_sfc, m as mapState } from "./index.e9affbac.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "User",
  setup() {
    const Store = useStore();
    const Router = useRouter();
    const { t } = useI18n_1();
    let cancelable = ref(false);
    function handleLogOut() {
      if (cancelable.value) {
        Store.commit("user/USER_LOGOUT");
        Router.push("/login");
      } else {
        cancelable.value = true;
      }
    }
    function cancleLogOut() {
      cancelable.value = false;
    }
    return __spreadProps(__spreadValues({
      cancelable
    }, mapState(Store.state.user, ["name"])), {
      handleLogOut,
      cancleLogOut,
      t
    });
  }
});
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" , ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h3", null, toDisplayString(_ctx.t("common.hi")) + ", " + toDisplayString(_ctx.name), 1)
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleLogOut && _ctx.handleLogOut(...args))
      }, toDisplayString(_ctx.cancelable ? _ctx.t("common.confirm") : _ctx.t("common.sign_out")), 1),
      _ctx.cancelable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _hoisted_3,
        createBaseVNode("a", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.cancleLogOut && _ctx.cancleLogOut(...args)),
          style: { "opacity": "0.6" }
        }, toDisplayString(_ctx.t("common.cancel")), 1)
      ], 64)) : createCommentVNode("", true)
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4393364d"]]);
export { index as default };
//# sourceMappingURL=index.1aa4e6f3.js.map
