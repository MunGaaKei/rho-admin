import { j as defineComponent, q as useI18n_1, u as useStore, r as ref, Z as reactive, L as onMounted, a5 as onUnmounted, _ as NForm, $ as NFormItem, a6 as NInputNumber, a7 as NSwitch, a8 as NRadio, a9 as NRadioGroup, a1 as NButton, a3 as NSpace, aa as NPopconfirm, f as resolveComponent, o as openBlock, t as createElementBlock, C as createBaseVNode, g as createVNode, a as withCtx, E as normalizeClass, a2 as createTextVNode, D as toDisplayString, F as Fragment, v as renderList, c as createBlock } from "./vendor.4c868317.js";
import { _ as _export_sfc, l as langs } from "./index.e9affbac.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "Settings",
  setup() {
    const { t } = useI18n_1();
    const Store = useStore();
    const form$ = ref(null);
    const container$ = ref(null);
    const options = reactive({
      theme: [
        { value: "", label: "settings.theme_light" },
        { value: "theme-dark", label: "settings.theme_dark" },
        { value: "auto", label: "settings.auto", disabled: true }
      ]
    });
    const changed = ref(false);
    const loading = ref(false);
    const labelPlacement = ref("left");
    const FormData = getRawFormData();
    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    function handleResize() {
      if (container$.value.offsetWidth < 720) {
        labelPlacement.value = "top";
      } else {
        labelPlacement.value = "left";
      }
    }
    function getRawFormData() {
      return reactive(Object.assign({}, Store.state.settings));
    }
    function handleFormChange() {
      changed.value = true;
    }
    function handleCancle() {
      changed.value = false;
      Object.assign(FormData, getRawFormData());
      form$.value.restoreValidation();
    }
    function handleSubmit() {
      loading.value = true;
      changed.value = false;
      Store.commit("settings/UPDATE_SETTINGS", FormData);
      form$.value.restoreValidation();
      loading.value = false;
    }
    function handleManualChange(value) {
      changed.value = true;
    }
    function handleRestore() {
      Store.commit("settings/RESTORE_SETTINGS");
    }
    return {
      FormData,
      options,
      langs,
      changed,
      loading,
      labelPlacement,
      t,
      handleFormChange,
      handleCancle,
      handleSubmit,
      handleManualChange,
      handleRestore,
      form$,
      container$
    };
  },
  components: {
    NForm,
    NFormItem,
    NInputNumber,
    NSwitch,
    NRadio,
    NRadioGroup,
    NButton,
    NSpace,
    NPopconfirm
  }
});
const _hoisted_1 = {
  class: "i-content",
  ref: "container$"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_button = resolveComponent("n-button");
  const _component_n_radio = resolveComponent("n-radio");
  const _component_n_space = resolveComponent("n-space");
  const _component_n_radio_group = resolveComponent("n-radio-group");
  const _component_n_form_item = resolveComponent("n-form-item");
  const _component_n_switch = resolveComponent("n-switch");
  const _component_n_popconfirm = resolveComponent("n-popconfirm");
  const _component_n_form = resolveComponent("n-form");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["i-settings-header", { "i-form-changed": _ctx.changed }])
    }, [
      createVNode(_component_n_button, {
        bordered: false,
        quaternary: "",
        round: "",
        size: "small",
        onClick: _ctx.handleCancle
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("settings.cancle")), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_n_button, {
        type: "primary",
        round: "",
        strong: "",
        loading: _ctx.loading,
        onClick: _ctx.handleSubmit
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.t("settings.save")), 1)
        ]),
        _: 1
      }, 8, ["loading", "onClick"])
    ], 2),
    createVNode(_component_n_form, {
      ref: "form$",
      "label-placement": _ctx.labelPlacement,
      "label-width": "200",
      class: "i-settings-form",
      onChange: _ctx.handleFormChange
    }, {
      default: withCtx(() => [
        createVNode(_component_n_form_item, {
          label: _ctx.t("settings.theme_setting")
        }, {
          default: withCtx(() => [
            createVNode(_component_n_radio_group, {
              value: _ctx.FormData.theme,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.FormData.theme = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options.theme, (o) => {
                      return openBlock(), createBlock(_component_n_radio, {
                        key: o.value,
                        value: o.value,
                        disabled: o.disabled
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.t(o.label)), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label"]),
        createVNode(_component_n_form_item, {
          label: _ctx.t("settings.sidebar_reverse")
        }, {
          default: withCtx(() => [
            createVNode(_component_n_switch, {
              value: _ctx.FormData.sidebar_reverse,
              "onUpdate:value": [
                _cache[1] || (_cache[1] = ($event) => _ctx.FormData.sidebar_reverse = $event),
                _ctx.handleManualChange
              ]
            }, null, 8, ["value", "onUpdate:value"])
          ]),
          _: 1
        }, 8, ["label"]),
        createVNode(_component_n_form_item, {
          label: _ctx.t("settings.locale_setting")
        }, {
          default: withCtx(() => [
            createVNode(_component_n_radio_group, {
              value: _ctx.FormData.locale,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.FormData.locale = $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_n_space, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.langs, (o) => {
                      return openBlock(), createBlock(_component_n_radio, {
                        key: o.value,
                        value: o.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(o.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label"]),
        createVNode(_component_n_form_item, { label: " " }, {
          default: withCtx(() => [
            createVNode(_component_n_popconfirm, {
              onPositiveClick: _ctx.handleRestore,
              "negative-text": _ctx.t("common.cancel"),
              "positive-text": _ctx.t("common.confirm"),
              "show-icon": false
            }, {
              trigger: withCtx(() => [
                createVNode(_component_n_button, {
                  type: "error",
                  secondary: "",
                  strong: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.t("settings.restore")), 1)
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(_ctx.t("settings.need_reload")), 1)
              ]),
              _: 1
            }, 8, ["onPositiveClick", "negative-text", "positive-text"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["label-placement", "onChange"])
  ], 512);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d28997c"]]);
export { index as default };
//# sourceMappingURL=index.d7636510.js.map
