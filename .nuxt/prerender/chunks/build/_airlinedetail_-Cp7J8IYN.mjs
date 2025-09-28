import { _ as __nuxt_component_0 } from './nuxt-link-mOz2iqHU.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, toDisplayString, createTextVNode, useSSRContext } from 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/vue-router/dist/vue-router.node.mjs';
import { q as queryContent } from './query-ClBvIUu6.mjs';
import { _ as _export_sfc, c as createError } from './server.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/ufo/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/ohash/dist/index.mjs';
import './preview-DgybUhg6.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/h3/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/destr/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/klona/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/unified/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/remark-parse/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/remark-rehype/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/remark-mdc/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/defu/dist/defu.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/remark-gfm/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/rehype-external-links/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/rehype-sort-attribute-values/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/rehype-sort-attributes/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/rehype-raw/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/detab/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/scule/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/hast-util-to-string/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/github-slugger/index.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/hookable/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/pathe/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/unstorage/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/sofia/Proyecto8SofiaRafael/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://D:/sofia/Proyecto8SofiaRafael/node_modules/unctx/dist/index.mjs';

const _sfc_main = {
  __name: "[airlinedetail]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const airlineId = route.params.airlinedetail;
    const airline = ([__temp, __restore] = withAsyncContext(() => queryContent("/airlines").where({ id: airlineId }).findOne()), __temp = await __temp, __restore(), __temp);
    if (!airline) throw createError({ statusCode: 404, statusMessage: "Aerol\xEDnea no encontrada" });
    const allAirplanes = ([__temp, __restore] = withAsyncContext(() => queryContent("/airplanes").find()), __temp = await __temp, __restore(), __temp);
    const airplanesByAirline = allAirplanes.filter((a) => a.aerolineas_ids.includes(airlineId));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 container mx-auto relative" }, _attrs))} data-v-7efcafbc>`);
      if (unref(airline).imagen) {
        _push(`<div class="absolute inset-0 -z-10 overflow-hidden" data-v-7efcafbc><img${ssrRenderAttr("src", unref(airline).imagen)} alt="Fondo aerol\xEDnea" class="w-full h-full object-cover opacity-30 blur-sm" data-v-7efcafbc><div class="absolute inset-0 bg-white/60" data-v-7efcafbc></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text relative z-10" data-v-7efcafbc> \u{1F6EB} ${ssrInterpolate(unref(airline).nombre)}</h1><div class="flex flex-col md:flex-row items-start gap-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 relative z-10" data-v-7efcafbc><div class="flex-shrink-0" data-v-7efcafbc>`);
      if (unref(airline).imagen) {
        _push(`<img${ssrRenderAttr("src", unref(airline).imagen)}${ssrRenderAttr("alt", unref(airline).nombre)} class="w-56 h-auto rounded-2xl shadow-lg border border-gray-200" data-v-7efcafbc>`);
      } else {
        _push(`<div class="w-56 h-72 flex items-center justify-center bg-gray-100 rounded-2xl shadow border border-gray-200" data-v-7efcafbc><span class="text-gray-400 italic" data-v-7efcafbc>Sin logo</span></div>`);
      }
      _push(`</div><div class="flex-1 text-left space-y-4" data-v-7efcafbc><p class="text-lg text-gray-700" data-v-7efcafbc><strong data-v-7efcafbc>Fundaci\xF3n:</strong> ${ssrInterpolate(unref(airline).fundacion)}</p><p class="text-lg text-gray-700" data-v-7efcafbc><strong data-v-7efcafbc>Pa\xEDs:</strong> ${ssrInterpolate(unref(airline).pais)}</p><p class="text-lg text-gray-700 leading-relaxed" data-v-7efcafbc><strong data-v-7efcafbc>Descripci\xF3n:</strong> ${ssrInterpolate(unref(airline).descripcion)}</p><p class="text-lg text-purple-700 font-semibold" data-v-7efcafbc><a${ssrRenderAttr("href", unref(airline).web)} target="_blank" class="hover:underline" data-v-7efcafbc>Sitio web oficial</a></p></div></div><div class="mt-12 relative z-10" data-v-7efcafbc><h2 class="text-2xl font-bold mb-6 flex items-center gap-2" data-v-7efcafbc> \u2708\uFE0F Aviones operados por ${ssrInterpolate(unref(airline).nombre)}</h2>`);
      if (unref(airplanesByAirline).length > 0) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" data-v-7efcafbc><!--[-->`);
        ssrRenderList(unref(airplanesByAirline), (airplane) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: airplane.id,
            to: `/airplane/${airplane.id}`,
            class: "group relative flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition transform"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-24 h-24 mb-2" data-v-7efcafbc${_scopeId}>`);
                if (airplane.imagen) {
                  _push2(`<img${ssrRenderAttr("src", airplane.imagen)}${ssrRenderAttr("alt", airplane.modelo)} class="w-full h-full object-contain rounded-xl" data-v-7efcafbc${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl" data-v-7efcafbc${_scopeId}><span class="text-gray-400 italic text-sm" data-v-7efcafbc${_scopeId}>Sin imagen</span></div>`);
                }
                _push2(`</div><p class="text-sm font-semibold text-gray-700 text-center" data-v-7efcafbc${_scopeId}>${ssrInterpolate(airplane.modelo)}</p>`);
              } else {
                return [
                  createVNode("div", { class: "w-24 h-24 mb-2" }, [
                    airplane.imagen ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: airplane.imagen,
                      alt: airplane.modelo,
                      class: "w-full h-full object-contain rounded-xl"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-full flex items-center justify-center bg-gray-100 rounded-xl"
                    }, [
                      createVNode("span", { class: "text-gray-400 italic text-sm" }, "Sin imagen")
                    ]))
                  ]),
                  createVNode("p", { class: "text-sm font-semibold text-gray-700 text-center" }, toDisplayString(airplane.modelo), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-gray-500 italic mt-2" data-v-7efcafbc> No hay aviones registrados para esta aerol\xEDnea. </p>`);
      }
      _push(`</div><div class="text-center mt-12 relative z-10" data-v-7efcafbc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Volver al Cat\xE1logo `);
          } else {
            return [
              createTextVNode(" \u2190 Volver al Cat\xE1logo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airline/[airlinedetail].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _airlinedetail_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7efcafbc"]]);

export { _airlinedetail_ as default };
//# sourceMappingURL=_airlinedetail_-Cp7J8IYN.mjs.map
