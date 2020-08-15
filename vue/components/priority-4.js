import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("circle", {
      cx: "10",
      cy: "10",
      fill: "#0ff",
      r: "7.5"
    }),
    _createVNode("path", { d: "m10 3a7 7 0 1 1 -7 7 7.00793 7.00793 0 0 1 7-7m0-1a8 8 0 1 0 8 8 8 8 0 0 0 -8-8z" }),
    _createVNode("path", { d: "m12.511 11.95068h-.80225v1.38086h-1.376v-1.38086h-2.84375v-.97949l2.9209-4.30273h1.29883v4.18847h.80227zm-2.17823-1.09375v-1.12988q0-.28272.02246-.82031c.01514-.3584.02735-.56738.03663-.625h-.03663a5.12145 5.12145 0 0 1 -.40523.72949l-1.22168 1.8457z" })
  ]))
}