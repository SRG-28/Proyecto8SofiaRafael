import { _ as __nuxt_component_0 } from "./nuxt-link-mOz2iqHU.js";
import { withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { q as queryContent } from "./query-ClBvIUu6.js";
import { _ as _export_sfc } from "../server.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/ufo/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/ohash/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/klona/dist/index.mjs";
import "./preview-DgybUhg6.js";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/h3/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/destr/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "ofetch";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/hookable/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/radix3/dist/index.mjs";
import "D:/sofia/Proyecto8SofiaRafael/node_modules/defu/dist/defu.mjs";
const _imports_0 = publicAssetsURL("/default-plane.jpg");
const _imports_1 = publicAssetsURL("/default-airline.jpg");
const _imports_2 = publicAssetsURL("/default-manufacturer.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const airplanes = ([__temp, __restore] = withAsyncContext(() => queryContent("/airplanes").only(["id", "modelo", "image"]).find()), __temp = await __temp, __restore(), __temp);
    const airlines = ([__temp, __restore] = withAsyncContext(() => queryContent("/airlines").only(["id", "nombre", "image"]).find()), __temp = await __temp, __restore(), __temp);
    const manufacturers = ([__temp, __restore] = withAsyncContext(() => queryContent("/airplanemanufacturer").only(["id", "nombre", "image"]).find()), __temp = await __temp, __restore(), __temp);
    const showAirlines = ref(false);
    const showManufacturers = ref(false);
    function tilt(e) {
      const el = e.currentTarget;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;
      const rotateX = (mouseY - centerY) / centerY * 8;
      const rotateY = (mouseX - centerX) / centerX * -8;
      el.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    function resetTilt(e) {
      const el = e.currentTarget;
      el.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 container mx-auto text-center" }, _attrs))} data-v-3f1b2bc9><header class="mb-16 relative z-10" data-v-3f1b2bc9><h1 class="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text" data-v-3f1b2bc9> ✈️ Catálogo de Aviones Comerciales </h1><h2 class="text-2xl text-purple-700 mb-6" data-v-3f1b2bc9>Explora modelos, fabricantes y aerolíneas</h2><p class="text-base text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed" data-v-3f1b2bc9> Descubre los aviones más emblemáticos de la aviación comercial. Haz click en cualquier avión, aerolínea o fabricante para ver sus detalles completos. </p></header><section class="mb-16 relative rounded-3xl overflow-hidden" data-v-3f1b2bc9><div class="absolute inset-0 w-full h-full overflow-hidden" data-v-3f1b2bc9><img${ssrRenderAttr("src", _imports_0)} alt="Fondo sección" class="w-full h-full object-cover opacity-30 blur-sm" data-v-3f1b2bc9></div><h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10" data-v-3f1b2bc9> ✈️ Aviones </h2><ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-v-3f1b2bc9><!--[-->`);
      ssrRenderList(unref(airplanes), (item) => {
        _push(`<li data-v-3f1b2bc9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/airplane/${item.id}`,
          class: "group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-gray-100 bg-opacity-80 border border-gray-300",
          onMousemove: ($event) => tilt($event),
          onMouseleave: ($event) => resetTilt($event)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative p-6 z-10 flex flex-col items-center justify-end h-full mt-10" data-v-3f1b2bc9${_scopeId}><h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors" data-v-3f1b2bc9${_scopeId}>${ssrInterpolate(item.modelo)}</h3></div>`);
            } else {
              return [
                createVNode("div", { class: "relative p-6 z-10 flex flex-col items-center justify-end h-full mt-10" }, [
                  createVNode("h3", { class: "text-lg font-bold group-hover:text-yellow-400 transition-colors" }, toDisplayString(item.modelo), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section><div class="flex justify-center gap-4 mb-8" data-v-3f1b2bc9><button class="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition" data-v-3f1b2bc9>${ssrInterpolate(showAirlines.value ? "Ocultar" : "Mostrar")} Aerolíneas </button><button class="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition" data-v-3f1b2bc9>${ssrInterpolate(showManufacturers.value ? "Ocultar" : "Mostrar")} Fabricantes </button></div><section style="${ssrRenderStyle(showAirlines.value ? null : { display: "none" })}" class="mb-16 relative rounded-3xl overflow-hidden transition-all duration-500" data-v-3f1b2bc9><div class="absolute inset-0 w-full h-full overflow-hidden" data-v-3f1b2bc9><img${ssrRenderAttr("src", _imports_1)} alt="Fondo aerolíneas" class="w-full h-full object-cover opacity-30 blur-sm" data-v-3f1b2bc9></div><h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10" data-v-3f1b2bc9>🛫 Aerolíneas</h2><ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-v-3f1b2bc9><!--[-->`);
      ssrRenderList(unref(airlines), (item) => {
        _push(`<li data-v-3f1b2bc9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/airline/${item.id}`,
          class: "group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-white border border-gray-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6" data-v-3f1b2bc9${_scopeId}><h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors text-center" data-v-3f1b2bc9${_scopeId}>${ssrInterpolate(item.nombre)}</h3></div>`);
            } else {
              return [
                createVNode("div", { class: "relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6" }, [
                  createVNode("h3", { class: "text-lg font-bold group-hover:text-yellow-400 transition-colors text-center" }, toDisplayString(item.nombre), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section><section style="${ssrRenderStyle(showManufacturers.value ? null : { display: "none" })}" class="mb-16 relative rounded-3xl overflow-hidden transition-all duration-500" data-v-3f1b2bc9><div class="absolute inset-0 w-full h-full overflow-hidden" data-v-3f1b2bc9><img${ssrRenderAttr("src", _imports_2)} alt="Fondo fabricantes" class="w-full h-full object-cover opacity-30 blur-sm" data-v-3f1b2bc9></div><h2 class="text-3xl font-bold mb-8 flex items-center justify-center gap-3 relative z-10" data-v-3f1b2bc9>🏭 Fabricantes</h2><ul class="grid gap-10 relative z-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-v-3f1b2bc9><!--[-->`);
      ssrRenderList(unref(manufacturers), (item) => {
        _push(`<li data-v-3f1b2bc9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/airplanemanufacturer/${item.id}`,
          class: "group relative flex flex-col justify-end rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:-translate-y-2 h-72 bg-white border border-gray-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6" data-v-3f1b2bc9${_scopeId}><h3 class="text-lg font-bold group-hover:text-yellow-400 transition-colors text-center" data-v-3f1b2bc9${_scopeId}>${ssrInterpolate(item.nombre)}</h3></div>`);
            } else {
              return [
                createVNode("div", { class: "relative p-6 z-10 flex flex-col items-center justify-end h-full mt-6" }, [
                  createVNode("h3", { class: "text-lg font-bold group-hover:text-yellow-400 transition-colors text-center" }, toDisplayString(item.nombre), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f1b2bc9"]]);
export {
  index as default
};
//# sourceMappingURL=index-B2GDt1lL.js.map
