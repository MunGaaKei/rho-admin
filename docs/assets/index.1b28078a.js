import { n as useRouter, q as useI18n_1, o as openBlock, t as createElementBlock, g as createVNode, a as withCtx, e as unref, a3 as NSpace, a1 as NButton, a2 as createTextVNode, D as toDisplayString, a4 as NResult, j as defineComponent, f as resolveComponent, c as createBlock } from "./vendor.4c868317.js";
import { _ as _export_sfc } from "./index.e9affbac.js";
const _hoisted_1 = { class: "i-container" };
const _sfc_main$1 = {
  setup(__props) {
    const Router = useRouter();
    const { t } = useI18n_1();
    function returnBack() {
      Router.go(-1);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NResult), {
          status: "404",
          title: "404",
          style: { "margin": "auto" }
        }, {
          footer: withCtx(() => [
            createVNode(unref(NSpace), null, {
              default: withCtx(() => [
                createVNode(unref(NButton), {
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(Router).push("/")),
                  secondary: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("routes.home")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(NButton), {
                  onClick: returnBack,
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("common.back")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _sfc_main = defineComponent({
  name: "404",
  setup() {
  },
  components: {
    Page404: _sfc_main$1
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Page404 = resolveComponent("Page404");
  return openBlock(), createBlock(_component_Page404);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
//# sourceMappingURL=index.1b28078a.js.map
