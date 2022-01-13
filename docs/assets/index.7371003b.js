import { j as defineComponent, u as useStore, n as useRouter, Y as useMessage, q as useI18n_1, Z as reactive, r as ref, _ as NForm, $ as NFormItem, a0 as NInput, a1 as NButton, f as resolveComponent, o as openBlock, t as createElementBlock, g as createVNode, a as withCtx, C as createBaseVNode, D as toDisplayString, c as createBlock, a2 as createTextVNode, y as createCommentVNode, A as pushScopeId, B as popScopeId } from "./vendor.4c868317.js";
import { _ as _export_sfc, A as APP_NAME, O as ON_PERMISSION } from "./index.e9affbac.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  setup() {
    const Store = useStore();
    const Router = useRouter();
    const Message = useMessage();
    const { t } = useI18n_1();
    const formState = reactive({
      username: "",
      password: ""
    });
    const rules = {
      username: {
        required: true,
        trigger: "blur",
        message: ""
      },
      password: {
        required: true,
        trigger: "blur",
        message: ""
      }
    };
    let loading = ref(false);
    async function handleSubmit() {
      loading.value = true;
      const { code, msg } = await Store.dispatch("user/LOGIN", formState);
      switch (code) {
        case 200:
          Router.push("/");
          break;
        case 1:
        case 2:
          formState.password = "";
          Message.error(msg);
          break;
      }
      loading.value = false;
    }
    function invalidForm() {
      let { username, password } = formState;
      return username === "" || password === "";
    }
    function handleCancel() {
      Router.push("/");
    }
    return {
      APP_NAME,
      ON_PERMISSION,
      loading,
      formState,
      rules,
      handleSubmit,
      handleCancel,
      invalidForm,
      t
    };
  },
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f4eb972a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "i-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "i-form-msg" }, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_input = resolveComponent("n-input");
  const _component_n_form_item = resolveComponent("n-form-item");
  const _component_n_button = resolveComponent("n-button");
  const _component_n_form = resolveComponent("n-form");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_n_form, {
      model: _ctx.formState,
      rules: _ctx.rules,
      class: "i-form",
      "label-placement": "left"
    }, {
      default: withCtx(() => [
        createBaseVNode("h1", null, toDisplayString(_ctx.APP_NAME), 1),
        createVNode(_component_n_form_item, { path: "username" }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.formState.username,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.formState.username = $event),
              placeholder: _ctx.t("common.username"),
              "input-props": { autocomplete: "off" }
            }, null, 8, ["value", "placeholder"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, { path: "password" }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.formState.password,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.formState.password = $event),
              type: "password",
              placeholder: _ctx.t("common.password"),
              "input-props": { autocomplete: "off" }
            }, null, 8, ["value", "placeholder"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, null, {
          default: withCtx(() => [
            _hoisted_2,
            !_ctx.ON_PERMISSION ? (openBlock(), createBlock(_component_n_button, {
              key: 0,
              quaternary: "",
              style: { "margin": "0 12px 0 0" },
              onClick: _ctx.handleCancel
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("common.cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true),
            createVNode(_component_n_button, {
              type: "primary",
              "attr-type": "submit",
              loading: _ctx.loading,
              onClick: _ctx.handleSubmit,
              disabled: _ctx.invalidForm(),
              style: { "width": "120px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("common.sign_in")), 1)
              ]),
              _: 1
            }, 8, ["loading", "onClick", "disabled"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model", "rules"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f4eb972a"]]);
export { index as default };
//# sourceMappingURL=index.7371003b.js.map
