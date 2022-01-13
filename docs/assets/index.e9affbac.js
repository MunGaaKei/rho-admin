import { u as useStore, r as ref, w as watchEffect, d as darkTheme, o as openBlock, c as createBlock, a as withCtx, b as renderSlot, e as unref, N as NConfigProvider, f as resolveComponent, g as createVNode, h as NMessageProvider, i as NDialogProvider, j as defineComponent, k as NScrollbar, l as NDropdown, m as useRoute, n as useRouter, p as computed, q as useI18n_1, s as h, t as createElementBlock, F as Fragment, v as renderList, x as withModifiers, y as createCommentVNode, z as nextTick, A as pushScopeId, B as popScopeId, C as createBaseVNode, D as toDisplayString, E as normalizeClass, G as NAvatar, H as NTooltip, I as NAutoComplete, J as NModal, K as NSkeleton, L as onMounted, M as onBeforeUnmount, O as normalizeStyle, P as KeepAlive, Q as resolveDynamicComponent, R as api, S as createI18n_1, T as axios, U as createStore, V as createRouter, W as createWebHistory, X as createApp } from "./vendor.4c868317.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations2) => {
    for (const mutation of mutations2) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var Global_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  setup(__props) {
    const Store = useStore();
    const theme = ref(null);
    const styleDefault = {
      common: {
        borderRadius: "4px"
      },
      Form: {
        feedbackTextColorError: "#EF4668"
      },
      Input: {
        border: "none",
        borderHover: "none",
        borderFocus: "none",
        paddingMedium: "20px",
        errorColorHover: "#FC536E",
        borderError: "1px solid #FC536E",
        borderFocusError: "1px solid #FC536E",
        borderHoverError: "1px solid #FC536E"
      }
    };
    const styleLight = {
      common: {
        primaryColor: "#3a3a3aFF",
        primaryColorHover: "#2a2a2aFF",
        primaryColorPressed: "#000000FF",
        primaryColorSuppl: "#3f3f3fFF"
      }
    };
    const styleDark = {
      common: {
        primaryColor: "#fafafa",
        primaryColorHover: "#fff",
        primaryColorPressed: "#fafafa99",
        primaryColorSuppl: "#f3f3f3"
      }
    };
    const globalStyle = ref(Object.assign(Store.state.settings.theme === "theme-dark" ? styleDark : styleLight));
    watchEffect(() => {
      let isDark = Store.state.settings.theme === "theme-dark";
      theme.value = isDark ? darkTheme : null;
      globalStyle.value = Object.assign(styleDefault, isDark ? styleDark : styleLight);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NConfigProvider), {
        theme: theme.value,
        "theme-overrides": globalStyle.value
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme", "theme-overrides"]);
    };
  }
};
const _sfc_main$6 = {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_sfc_main$7, null, {
        default: withCtx(() => [
          createVNode(unref(NDialogProvider), null, {
            default: withCtx(() => [
              createVNode(unref(NMessageProvider), null, {
                default: withCtx(() => [
                  createVNode(_component_router_view)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const scriptRel = "modulepreload";
const seen = {};
const base = "/rho-admin/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var NavTabs_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = defineComponent({
  components: {
    NScrollbar,
    NDropdown
  },
  setup(props, {}) {
    const Store = useStore();
    const Route = useRoute();
    const Router2 = useRouter();
    const tabs2 = computed(() => Store.state.tabs);
    const scrollbar$ = ref(null);
    const { t } = useI18n_1();
    const showContextMenu = ref(false);
    const CoordX = ref(0);
    const CoordY = ref(0);
    const ContextMenuOptions = generateContextMenu();
    let handledTab = null;
    if (Route.path !== "/") {
      createTab(Route);
    }
    Router2.afterEach(createTab);
    function createTab(route) {
      if (route.path === "/" || route.path === "/login")
        return;
      let {
        name,
        path,
        fullPath,
        query,
        meta: { title, noCached, i18n: i18n2, titleFormat }
      } = route;
      Store.commit("tabs/TABS_ADD", {
        title,
        titleFormat,
        name,
        path,
        noCached,
        i18n: i18n2,
        query,
        fullPath
      });
    }
    function handleClose(tab) {
      Store.commit("tabs/TABS_CLOSE", tab);
    }
    function handleScroll(e) {
      const $ = scrollbar$.value;
      const delta = e.wheelDelta || -e.deltaY * 40;
      const container$ = $.scrollbarInstRef.containerRef;
      let left = container$.scrollLeft + delta / 4;
      $.scrollTo(left);
    }
    function handleContextMenuSelect(key) {
      switch (key) {
        case "close-all":
          Store.commit("tabs/TABS_CLOSE_ALL");
          break;
        case "close-left":
        case "close-others":
          Store.commit("tabs/TABS_CLOSE_MULTI", {
            tab: handledTab,
            key
          });
          break;
        case "refresh":
          Store.commit("tabs/TABS_REFRESH", handledTab);
          break;
      }
      hideContextMenu();
    }
    function generateContextMenu() {
      return [
        {
          label: t("common.close_all"),
          key: "close-all",
          icon: renderContextMenuIcon("ri-delete-bin-line")
        },
        {
          label: t("common.close_left"),
          key: "close-left",
          icon: renderContextMenuIcon("ri-menu-fold-fill")
        },
        {
          label: t("common.close_others"),
          key: "close-others",
          icon: renderContextMenuIcon("ri-arrow-left-right-fill")
        },
        {
          label: t("common.refresh"),
          key: "refresh",
          icon: renderContextMenuIcon("ri-refresh-line")
        }
      ];
    }
    function handleContextMenu(tab, e) {
      showContextMenu.value = false;
      handledTab = tab;
      nextTick(() => {
        showContextMenu.value = true;
        CoordX.value = e.pageX;
        CoordY.value = e.pageY;
      });
    }
    function hideContextMenu() {
      showContextMenu.value = false;
      handledTab = null;
    }
    function renderContextMenuIcon(icon) {
      return () => {
        return h("i", { class: icon });
      };
    }
    function titleFormatter(title, i18n2, formatter) {
      if (i18n2) {
        return formatter ? formatter(t(title)) : t(title);
      } else {
        return title;
      }
    }
    return {
      scrollbar$,
      tabs: tabs2,
      showContextMenu,
      CoordX,
      CoordY,
      ContextMenuOptions,
      handleClose,
      handleScroll,
      handleContextMenu,
      hideContextMenu,
      handleContextMenuSelect,
      generateContextMenu,
      titleFormatter
    };
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-8751871e"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  key: 0,
  class: "i-nav-tabs"
};
const _hoisted_2$4 = ["onClick"];
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("template", null, null, -1));
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_n_scrollbar = resolveComponent("n-scrollbar");
  const _component_n_dropdown = resolveComponent("n-dropdown");
  return _ctx.tabs.tabs.length ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createVNode(_component_n_scrollbar, {
      "x-scrollable": "",
      onWheel: withModifiers(_ctx.handleScroll, ["prevent"]),
      ref: "scrollbar$"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs.tabs, (tab) => {
          return openBlock(), createBlock(_component_router_link, {
            to: tab.fullPath,
            key: tab.name,
            class: normalizeClass(["i-nav-tab", { "tab-active": _ctx.tabs.active === tab.name }]),
            onContextmenu: withModifiers(($event) => _ctx.handleContextMenu(tab, $event), ["prevent"])
          }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(_ctx.titleFormatter(tab.title, tab.i18n, tab.titleFormat)), 1),
              createBaseVNode("i", {
                class: "ri-close-line",
                onClick: withModifiers(($event) => _ctx.handleClose(tab), ["prevent"])
              }, null, 8, _hoisted_2$4)
            ]),
            _: 2
          }, 1032, ["to", "class", "onContextmenu"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["onWheel"]),
    createVNode(_component_n_dropdown, {
      show: _ctx.showContextMenu,
      options: _ctx.generateContextMenu(),
      x: _ctx.CoordX,
      y: _ctx.CoordY,
      "on-clickoutside": _ctx.hideContextMenu,
      onSelect: _ctx.handleContextMenuSelect,
      trigger: "manual",
      placement: "bottom-start"
    }, {
      default: withCtx(() => [
        _hoisted_3$4
      ]),
      _: 1
    }, 8, ["show", "options", "x", "y", "on-clickoutside", "onSelect"])
  ])) : createCommentVNode("", true);
}
var NavTabs = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__scopeId", "data-v-8751871e"]]);
const LS_KEY = "RHO-SETTINGS";
const APP_NAME = "Daphne Odera";
const APP_TITLE = "RHO";
const APP_LOGO = "/src/assets/logo.png";
const ON_PERMISSION = false;
const CONFIGS = {
  theme: "",
  locale: "cn"
};
function initConfigs() {
  const LocalConfigs = localStorage.getItem(LS_KEY);
  const configs = LocalConfigs ? Object.assign({}, CONFIGS, JSON.parse(LocalConfigs)) : CONFIGS;
  if (configs.theme) {
    document.body.classList.add(configs.theme);
  }
  return configs;
}
const DEFAULT_CONFIGS = initConfigs();
function filterMenus(menus, role) {
  var _a;
  menus = (_a = menus.find((menu) => {
    return menu.name === "Main";
  })) == null ? void 0 : _a.children;
  return filterMenusItems(menus);
}
function filterMenusItems(menus, role) {
  return menus.filter((menu) => {
    let {
      meta: { auth = [], hide },
      children = []
    } = menu;
    if (hide) {
      return false;
    }
    if (children.length) {
      menu.children = filterMenusItems(children);
    }
    return true;
  });
}
function fullscreen(target) {
  target = target || document.documentElement;
  let $current = document.fullscreenElement || document.webkitFullscreenElement;
  if ($current) {
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  } else {
    (target.requestFullscreen || target.webkitRequestFullScreen).call(target);
  }
}
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
  name: "Header",
  components: {
    NAvatar,
    NTooltip,
    NavTabs
  },
  setup(props, { attrs }) {
    const Store = useStore();
    const user2 = Store.state.user;
    const { t } = useI18n_1();
    function changeLocale2() {
      Store.commit("settings/CHANGE_LOCALE");
    }
    function changeTheme2() {
      Store.commit("settings/CHANGE_THEME");
    }
    function firstLetter(name) {
      return name.substr(0, 1).toUpperCase();
    }
    return {
      user: user2,
      attrs,
      fullscreen,
      changeTheme: changeTheme2,
      changeLocale: changeLocale2,
      firstLetter,
      t
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-2d7c7b60"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "i-header" };
const _hoisted_2$3 = { class: "i-header-items" };
const _hoisted_3$3 = { class: "i-dropdown" };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", { class: "ri-more-fill i-btn" }, null, -1));
const _hoisted_5$2 = { class: "i-dropmenu" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", { class: "ri-settings-3-fill" }, null, -1));
const _hoisted_7 = { class: "i-avatar" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nav_tabs = resolveComponent("nav-tabs");
  const _component_router_link = resolveComponent("router-link");
  const _component_n_tooltip = resolveComponent("n-tooltip");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_nav_tabs),
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        _hoisted_4$3,
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("a", {
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeLocale && _ctx.changeLocale(...args)),
            class: "ri-translate i-btn"
          }),
          createVNode(_component_router_link, {
            to: "/settings",
            class: "i-btn"
          }, {
            default: withCtx(() => [
              _hoisted_6$1
            ]),
            _: 1
          }),
          createBaseVNode("a", {
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.changeTheme && _ctx.changeTheme(...args)),
            class: "ri-moon-clear-fill i-btn"
          }),
          createBaseVNode("a", {
            class: "ri-fullscreen-line i-btn",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.fullscreen())
          })
        ])
      ]),
      createVNode(_component_n_tooltip, null, {
        trigger: withCtx(() => [
          _ctx.user.name ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: "/user",
            class: "i-btn i-user"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_7, toDisplayString(_ctx.firstLetter(_ctx.user.name)), 1)
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_router_link, {
            key: 1,
            to: "/login",
            class: "ri-ghost-fill i-btn"
          }))
        ]),
        default: withCtx(() => [
          _ctx.user.name ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(_ctx.user.name), 1)) : (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(_ctx.t("common.sign_in")), 1))
        ]),
        _: 1
      })
    ])
  ]);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-2d7c7b60"]]);
var SidebarMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  name: "SidebarMenu",
  props: {
    menus: {
      type: Array,
      default: []
    },
    active: {
      type: String,
      default: ""
    },
    root: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const Router2 = useRouter();
    const Route = useRoute();
    const { t } = useI18n_1();
    const active = ref(props.active);
    let root = props.root;
    active.value = Route.path;
    Router2.afterEach((to) => {
      active.value = to.fullPath;
    });
    function handleToggle(path) {
      active.value = active.value ? "" : path;
    }
    function titleFormatter({ i18n: i18n2, title, titleFormat }) {
      if (i18n2) {
        title = t(title);
        return titleFormat ? titleFormat(title) : title;
      } else {
        return title;
      }
    }
    return {
      active,
      root,
      handleToggle,
      titleFormatter
    };
  }
});
const _hoisted_1$2 = { class: "i-menu-item" };
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = {
  key: 0,
  class: "i-sub-menu"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_SidebarMenu = resolveComponent("SidebarMenu", true);
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu) => {
    var _a, _b;
    return openBlock(), createElementBlock("li", {
      key: menu.fullPath,
      class: normalizeClass(["i-menu-li", { "i-active": _ctx.active.startsWith(menu.path) }])
    }, [
      createBaseVNode("div", _hoisted_1$2, [
        createVNode(_component_router_link, {
          to: menu.path,
          class: "i-menu-label"
        }, {
          default: withCtx(() => {
            var _a2;
            return [
              ((_a2 = menu.meta) == null ? void 0 : _a2.icon) ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: menu.meta.icon,
                class: "i-menu-icon"
              }, null, 8, _hoisted_2$2)) : createCommentVNode("", true),
              createBaseVNode("span", {
                class: normalizeClass(["i-menu-title", { "i-hide-on-mini": _ctx.root }])
              }, toDisplayString(_ctx.titleFormatter(menu.meta)), 3)
            ];
          }),
          _: 2
        }, 1032, ["to"]),
        ((_a = menu.children) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["ri-arrow-down-s-line i-menu-toggle", { "i-hide-on-mini": _ctx.root }]),
          onClick: ($event) => _ctx.handleToggle(menu.path)
        }, null, 10, _hoisted_3$2)) : createCommentVNode("", true)
      ]),
      ((_b = menu.children) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("ul", _hoisted_4$2, [
        createVNode(_component_SidebarMenu, {
          menus: menu.children,
          root: false
        }, null, 8, ["menus"])
      ])) : createCommentVNode("", true)
    ], 2);
  }), 128);
}
var SidebarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-3fba4c6c"]]);
var Sidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = defineComponent({
  name: "Sidebar",
  components: {
    NScrollbar,
    NAutoComplete,
    SidebarMenu,
    NModal,
    NSkeleton
  },
  setup() {
    const Store = useStore();
    const MINI_WIDTH = 50;
    const menus = filterMenus(routes, Store.state.user.role);
    const { t } = useI18n_1();
    const width = ref(MINI_WIDTH);
    const resizing = ref(false);
    const cssSidebar = computed(() => {
      let text = `width: ${width.value}px;`;
      if (resizing.value) {
        text += "transition: none !important;";
      }
      return text;
    });
    const mini = computed(() => {
      return width.value < 120;
    });
    const modalSearch = ref(false);
    const valueSearch = ref("");
    const optionsSearch = ref([]);
    const loading = ref(true);
    const sidebarReverse = computed(() => {
      return Store.state.settings.sidebar_reverse && Store.state.settings.theme !== "theme-dark";
    });
    let ox = 0;
    let ow = width.value;
    let cacheWidth = ow;
    onMounted(() => {
      if (window.innerWidth > 720) {
        width.value = cacheWidth = Store.state.settings.sidebar_width;
      }
      document.addEventListener("mouseup", handleMouseup);
      document.addEventListener("mousemove", handleMousemove);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("mouseup", handleMouseup);
      document.removeEventListener("mousemove", handleMousemove);
    });
    function handleMousemove(e) {
      if (resizing.value) {
        e.preventDefault();
        let w = ow + (e.pageX - ox);
        if (w < 120) {
          w = MINI_WIDTH;
        }
        width.value = w;
      }
    }
    function handleSidebarToggle() {
      width.value = width.value === MINI_WIDTH ? cacheWidth : MINI_WIDTH;
    }
    function handleMouseup() {
      if (resizing.value) {
        resizing.value = false;
        if (width.value !== 50) {
          cacheWidth = width.value;
        }
      }
    }
    function startResizeSidebar(e) {
      resizing.value = true;
      ox = e.pageX;
      ow = width.value;
    }
    function toggleModalSearch() {
      modalSearch.value = !modalSearch.value;
    }
    return {
      Store,
      sidebarReverse,
      APP_LOGO,
      APP_TITLE,
      loading,
      menus,
      cssSidebar,
      mini,
      valueSearch,
      modalSearch,
      optionsSearch,
      toggleModalSearch,
      startResizeSidebar,
      handleSidebarToggle,
      t
    };
  }
});
const _hoisted_1$1 = { class: "i-sidebar-header" };
const _hoisted_2$1 = { class: "i-logo" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = {
  key: 1,
  class: "i-app-title"
};
const _hoisted_5$1 = {
  key: 0,
  class: "i-menus"
};
const _hoisted_6 = { class: "i-menus" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_skeleton = resolveComponent("n-skeleton");
  const _component_SidebarMenu = resolveComponent("SidebarMenu");
  const _component_n_scrollbar = resolveComponent("n-scrollbar");
  const _component_n_auto_complete = resolveComponent("n-auto-complete");
  const _component_n_modal = resolveComponent("n-modal");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      style: normalizeStyle(_ctx.cssSidebar),
      class: normalizeClass([{
        "i-sidebar-mini": _ctx.mini,
        "theme-dark": _ctx.sidebarReverse,
        "theme-light": _ctx.Store.state.settings.theme === "theme-dark" && _ctx.Store.state.settings.sidebar_reverse === true
      }, "i-sidebar"])
    }, [
      createBaseVNode("div", _hoisted_1$1, [
        _ctx.loading ? (openBlock(), createBlock(_component_n_skeleton, {
          key: 0,
          width: 40,
          height: 24,
          sharp: false
        })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("img", {
            src: _ctx.APP_LOGO,
            onLoad: _cache[0] || (_cache[0] = ($event) => _ctx.loading = false)
          }, null, 40, _hoisted_3$1)
        ]),
        !_ctx.mini ? (openBlock(), createElementBlock("h1", _hoisted_4$1, toDisplayString(_ctx.APP_TITLE), 1)) : createCommentVNode("", true),
        createBaseVNode("a", {
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleModalSearch && _ctx.toggleModalSearch(...args)),
          class: "ri-search-line i-sidebar-search i-btn"
        }),
        createBaseVNode("a", {
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleSidebarToggle && _ctx.handleSidebarToggle(...args)),
          class: "ri-menu-4-line i-sidebar-toggle i-btn"
        })
      ]),
      _ctx.mini ? (openBlock(), createElementBlock("ul", _hoisted_5$1, [
        createVNode(_component_SidebarMenu, { menus: _ctx.menus }, null, 8, ["menus"])
      ])) : (openBlock(), createBlock(_component_n_scrollbar, { key: 1 }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_6, [
            createVNode(_component_SidebarMenu, { menus: _ctx.menus }, null, 8, ["menus"])
          ])
        ]),
        _: 1
      })),
      createBaseVNode("div", {
        onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.startResizeSidebar && _ctx.startResizeSidebar(...args)),
        class: "i-sidebar-toggle-line"
      }, null, 32)
    ], 6),
    createVNode(_component_n_modal, {
      show: _ctx.modalSearch,
      "onUpdate:show": _cache[5] || (_cache[5] = ($event) => _ctx.modalSearch = $event),
      bordered: false
    }, {
      default: withCtx(() => [
        createVNode(_component_n_auto_complete, {
          value: _ctx.valueSearch,
          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => _ctx.valueSearch = $event),
          options: _ctx.optionsSearch,
          placeholder: _ctx.t("common.search"),
          class: "i-search",
          clearable: "",
          size: "large"
        }, null, 8, ["value", "options", "placeholder"])
      ]),
      _: 1
    }, 8, ["show"])
  ], 64);
}
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-1b044646"]]);
const _sfc_main$1 = {
  setup(__props) {
    const Store = useStore();
    const cacheViews = computed(() => Store.state.tabs.cacheViews);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_component_router_view, null, {
        default: withCtx(({ Component }) => [
          (openBlock(), createBlock(KeepAlive, { include: unref(cacheViews) }, [
            (openBlock(), createBlock(resolveDynamicComponent(Component), {
              key: _ctx.$route.fullPath
            }))
          ], 1032, ["include"]))
        ]),
        _: 1
      });
    };
  }
};
function mapState(store2, states) {
  return Object.fromEntries(states.map((key) => {
    if (typeof key === "string") {
      return [key, computed(() => store2[key])];
    } else {
      return [key[1], computed(() => store2[key[0]])];
    }
  }));
}
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-65c976b1"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "i-container" };
const _hoisted_2 = { class: "i-main" };
const _hoisted_3 = {
  key: 1,
  class: "i-empty"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "ri-layout-masonry-line" }, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _sfc_main = {
  setup(__props) {
    const Store = useStore();
    filterMenus(routes, Store.state.user.role);
    const { tabs: tabs2 } = mapState(Store.state.tabs, ["tabs"]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Sidebar),
        createBaseVNode("div", _hoisted_2, [
          createVNode(Header),
          unref(tabs2).length ? (openBlock(), createBlock(unref(NScrollbar), {
            key: 0,
            class: "i-content"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5))
        ])
      ]);
    };
  }
};
var Main = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65c976b1"]]);
const BASE$3 = "/dashboard";
var Dashboard = [
  {
    name: "Dashboard",
    path: BASE$3,
    component: () => __vitePreload(() => import("./index.c47e4d8c.js"), true ? ["assets/index.c47e4d8c.js","assets/index.5bc9a6db.css","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "routes.dashboard",
      i18n: true,
      noCached: true,
      icon: '<i class="ri-dashboard-fill"></i>'
    }
  }
];
const BASE$2 = "/menu";
var Menus = [
  {
    name: "Menu",
    path: BASE$2,
    redirect: `${BASE$2}/1`,
    component: () => __vitePreload(() => import("./index.c3535c1a.js"), true ? ["assets/index.c3535c1a.js","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "routes.menu",
      icon: '<i class="ri-folder-3-line"></i>',
      i18n: true
    },
    children: [
      {
        name: "Menu-1",
        path: `${BASE$2}/1`,
        component: () => __vitePreload(() => import("./menu-1.92b3f817.js"), true ? ["assets/menu-1.92b3f817.js","assets/menu-1.5421cf0f.css","assets/vendor.4c868317.js"] : void 0),
        meta: {
          title: "routes.menu",
          titleFormat: (title) => `${title} I`,
          auth: [],
          i18n: true
        }
      },
      {
        name: "Menu-2",
        path: `${BASE$2}/2`,
        component: () => __vitePreload(() => import("./menu-2.8fe8c4e1.js"), true ? ["assets/menu-2.8fe8c4e1.js","assets/menu-2.43e5cf19.css","assets/vendor.4c868317.js"] : void 0),
        meta: {
          title: "routes.menu",
          titleFormat: (title) => `${title} II`,
          auth: [],
          i18n: true
        }
      }
    ]
  }
];
const BASE$1 = "/user";
var User = [
  {
    name: "User",
    path: BASE$1,
    component: () => __vitePreload(() => import("./index.1aa4e6f3.js"), true ? ["assets/index.1aa4e6f3.js","assets/index.3c371faa.css","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "routes.user",
      i18n: true,
      hide: true
    }
  }
];
const BASE = "/settings";
var Setting = [
  {
    name: "Settings",
    path: BASE,
    component: () => __vitePreload(() => import("./index.d7636510.js"), true ? ["assets/index.d7636510.js","assets/index.52c29ffc.css","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "routes.setting",
      hide: true
    }
  }
];
var routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
    meta: {
      title: "routes.dashboard",
      i18n: true
    },
    children: [...Dashboard, ...Menus, ...User, ...Setting]
  },
  {
    name: "Login",
    path: "/login",
    component: () => __vitePreload(() => import("./index.7371003b.js"), true ? ["assets/index.7371003b.js","assets/index.02f13412.css","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "common.sign_in",
      i18n: true
    }
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => __vitePreload(() => import("./index.1b28078a.js"), true ? ["assets/index.1b28078a.js","assets/vendor.4c868317.js"] : void 0),
    meta: {
      title: "404"
    }
  }
];
const TOKEN_ID = "user-id";
const TOKEN_ROLE = "user-role";
function getUserToken() {
  const Token = api.get(TOKEN_ID);
  if (Token) {
    return JSON.parse(Token);
  } else {
    return false;
  }
}
function setUserToken(user2) {
  api.set(TOKEN_ID, JSON.stringify(user2));
}
function deleteUserToken() {
  api.remove(TOKEN_ID);
  api.remove(TOKEN_ROLE);
}
var cn = {
  common: {
    hi: "\u4F60\u597D",
    welcome: "\u6B22\u8FCE",
    sign_in: "\u767B\u5F55",
    sign_out: "\u6CE8\u9500",
    sign_up: "\u6CE8\u518C",
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88",
    close: "\u5173\u95ED",
    search: "\u641C\u7D22",
    username: "\u7528\u6237\u540D",
    password: "\u5BC6\u7801",
    back: "\u8FD4\u56DE",
    close_left: "\u5173\u95ED\u5DE6\u4FA7",
    close_all: "\u5173\u95ED\u6240\u6709",
    close_others: "\u5173\u95ED\u5176\u5B83",
    refresh: "\u5237\u65B0"
  },
  routes: {
    dashboard: "\u4EEA\u8868\u76D8",
    home: "\u9996\u9875",
    setting: "\u8BBE\u7F6E",
    user: "\u7528\u6237\u4E2D\u5FC3",
    messages: "\u6D88\u606F\u4E2D\u5FC3",
    menu: "\u83DC\u5355"
  },
  settings: {
    theme_setting: "\u4E3B\u9898\u8BBE\u7F6E",
    theme_dark: "\u6DF1\u8272",
    theme_light: "\u6D45\u8272",
    auto: "\u81EA\u52A8",
    locale_setting: "\u8BED\u8A00",
    sidebar_reverse: "\u4FA7\u8FB9\u680F\u53CD\u8272",
    save: "\u4FDD\u5B58",
    restore: "\u6062\u590D\u9ED8\u8BA4\u503C",
    need_reload: "\u9700\u8981\u5237\u65B0\u540E\u751F\u6548",
    discard: "\u629B\u5F03",
    cancle: "\u53D6\u6D88"
  }
};
var en = {
  common: {
    hi: "Hi",
    welcome: "Welcome",
    sign_in: "Sign In",
    sign_out: "Sign Out",
    sign_up: "Sign Up",
    confirm: "Confirm",
    cancel: "Cancel",
    close: "Close",
    search: "Search",
    username: "Username",
    password: "Password",
    back: "Return Back",
    close_left: "Close Left",
    close_all: "Close All",
    close_others: "Close Others",
    refresh: "Refresh"
  },
  routes: {
    dashboard: "Dashboard",
    home: "Home",
    setting: "Settings",
    user: "User",
    messages: "Messages",
    menu: "Menu"
  },
  settings: {
    theme_setting: "Theme",
    theme_dark: "Dark",
    theme_light: "Light",
    auto: "Auto",
    locale_setting: "Language",
    sidebar_reverse: "Sidebar Reverse",
    save: "Save",
    discard: "Discard",
    restore: "Restore",
    need_reload: "Restore after refresh",
    cancle: "Cancle"
  }
};
const DEFAULT_LOCALE = DEFAULT_CONFIGS.locale;
const langs = [
  {
    label: "\u7B80\u4F53\u4E2D\u6587",
    value: "cn"
  },
  {
    label: "English",
    value: "en"
  }
];
var i18n = createI18n_1({
  missingWarn: false,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { cn, en }
});
const state$2 = DEFAULT_CONFIGS;
const mutations$2 = {
  CHANGE_THEME: changeTheme,
  CHANGE_LOCALE: changeLocale,
  UPDATE_SETTINGS: (state2, form) => {
    Object.assign(state2, form);
    changeTheme(state2, state2.theme);
    changeLocale(state2, state2.locale);
    localStorage.setItem(LS_KEY, JSON.stringify(form));
  },
  RESTORE_SETTINGS: (state2) => {
    localStorage.setItem(LS_KEY, null);
  }
};
function changeTheme(state2, theme) {
  if (theme !== void 0) {
    document.body.classList[theme === "" ? "remove" : "add"]("theme-dark");
  } else {
    state2.theme = state2.theme === "" ? "theme-dark" : "";
    document.body.classList.toggle("theme-dark");
  }
}
function changeLocale(state2, lang) {
  if (lang !== void 0) {
    i18n.global.locale.value = lang;
  } else {
    i18n.global.locale.value = i18n.global.locale.value === "cn" ? "en" : "cn";
  }
}
var settings = {
  namespaced: true,
  state: state$2,
  mutations: mutations$2
};
axios.create({
  baseURL: "/api",
  timeout: 8e3
});
function __UserLogin({ username, password }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin") {
        if (password === "admin") {
          resolve({
            code: 200,
            token: "rho-administrator",
            name: "\u03C1",
            avatar: "https://e7.pngegg.com/pngimages/550/224/png-clipart-rho-greek-alphabet-letter-case-gamma-letter-p-miscellaneous-angle-thumbnail.png",
            role: "admin"
          });
        } else {
          resolve({
            code: 2,
            msg: "Wrong Password"
          });
        }
      } else {
        resolve({
          code: 1,
          msg: "User Doesn' Exist"
        });
      }
    }, 1e3);
  });
}
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const USER_INIT = "USER_INIT";
function initState() {
  return {
    name: "",
    token: "",
    avatar: "",
    role: ""
  };
}
const state$1 = initState();
const mutations$1 = {
  [USER_LOGIN]: (state2, user2) => {
    setUserToken(user2);
  },
  [USER_LOGOUT]: (state2) => {
    state2 = Object.assign(state2, initState());
    deleteUserToken();
  },
  [USER_INIT]: (state2, user2) => {
    if (!state2.token) {
      state2 = Object.assign(state2, user2);
    }
  }
};
const actions = {
  LOGIN: async ({ commit }, user2) => {
    const result = await __UserLogin(user2);
    if (result.code === 200) {
      commit(USER_LOGIN, result);
    }
    return result;
  },
  LOGOUT: ({ commit }) => {
    commit(USER_LOGOUT);
  }
};
var user = {
  namespaced: true,
  state: state$1,
  mutations: mutations$1,
  actions
};
const state = {
  tabs: [],
  active: "",
  cacheViews: []
};
const getters = {};
const mutations = {
  TABS_ADD: (state2, tab) => {
    let found = state2.tabs.find((t) => {
      return t.name === tab.name;
    });
    if (found) {
      state2.active = tab.name;
      found.fullPath = tab.fullPath;
    } else {
      state2.active = tab.name;
      state2.tabs.push(tab);
    }
    if (tab.noCached !== true) {
      state2.cacheViews.push(tab.name);
      state2.cacheViews = [...new Set(state2.cacheViews)];
    }
  },
  TABS_CLOSE: (state2, tab) => {
    let tabIndex = state2.tabs.findIndex((t) => {
      return t.name === tab.name;
    });
    let cachedIndex = state2.cacheViews.findIndex((v) => {
      return v === tab.name;
    });
    if (cachedIndex > -1) {
      state2.cacheViews.splice(cachedIndex, 1);
    }
    state2.tabs.splice(tabIndex, 1);
    if (state2.active === tab.name) {
      if (state2.tabs.length) {
        tab = state2.tabs[tabIndex === 0 ? 0 : --tabIndex];
        Router.push({ name: tab.name });
      } else {
        Router.push("/");
      }
    }
  },
  TABS_CLOSE_MULTI: (state2, payload) => {
    let { tab, key } = payload;
    switch (key) {
      case "close-others":
        state2.tabs = [tab];
        state2.active = tab.name;
        break;
      case "close-left":
        let index = state2.tabs.findIndex((t) => {
          return t.name === tab.name;
        });
        index > -1 && state2.tabs.splice(0, index);
        state2.active = tab.name;
        Router.push({ name: tab.name });
        break;
    }
  },
  TABS_CLOSE_ALL: (state2) => {
    state2.tabs = [];
    state2.active = "";
    Router.push("/");
  },
  TABS_REFRESH: (state2, tab) => {
    let cacheIndex = state2.cacheViews.findIndex((v) => {
      return v === tab.name;
    });
    state2.cacheViews.splice(cacheIndex, 1);
    nextTick(() => {
      Router.push({
        query: Object.assign({}, tab.query, {
          _t: new Date().getTime()
        })
      });
    });
  }
};
var tabs = {
  namespaced: true,
  state,
  getters,
  mutations
};
var store = createStore({
  modules: {
    settings,
    user,
    tabs
  }
});
const Router = createRouter({
  history: createWebHistory(),
  routes
});
Router.beforeEach((to, from, next) => {
  const user2 = getUserToken();
  if (user2) {
    store.commit("user/USER_INIT", user2);
  }
  {
    next();
  }
});
Router.afterEach((to) => {
  let { title, i18n: i18n$1 } = to == null ? void 0 : to.meta;
  title = i18n$1 ? i18n.global.t(title) : title;
  document.title = `${APP_TITLE} ${title}`;
});
var remixicon = "";
var main = "";
createApp(_sfc_main$6).use(i18n).use(store).use(Router).mount("#app");
export { APP_NAME as A, ON_PERMISSION as O, _export_sfc as _, _sfc_main$1 as a, langs as l, mapState as m };
//# sourceMappingURL=index.e9affbac.js.map
