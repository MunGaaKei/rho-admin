import { j as defineComponent, K as NSkeleton, a3 as NSpace, u as useStore, r as ref, q as useI18n_1, f as resolveComponent, o as openBlock, t as createElementBlock, c as createBlock, a as withCtx, D as toDisplayString, g as createVNode } from "./vendor.4c868317.js";
import { _ as _export_sfc } from "./index.e9affbac.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "Dashboard",
  components: {
    NSkeleton,
    NSpace
  },
  setup() {
    const Store = useStore();
    const loading = ref(true);
    const { t } = useI18n_1();
    const username = Store.state.user.name;
    setTimeout(() => {
      loading.value = false;
    }, 600);
    return {
      loading,
      username,
      t
    };
  }
});
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_skeleton = resolveComponent("n-skeleton");
  const _component_n_space = resolveComponent("n-space");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.loading ? (openBlock(), createBlock(_component_n_space, {
      key: 0,
      vertical: ""
    }, {
      default: withCtx(() => [
        createVNode(_component_n_skeleton, {
          text: "",
          style: { "width": "200px" }
        }),
        createVNode(_component_n_skeleton, {
          text: "",
          style: { "width": "100px" }
        })
      ]),
      _: 1
    })) : (openBlock(), createElementBlock("h3", _hoisted_2, toDisplayString(_ctx.t("common.welcome")) + "! " + toDisplayString(_ctx.username) + " : )", 1))
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3b362224"]]);
export { index as default };
//# sourceMappingURL=index.c47e4d8c.js.map
