import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", {
      d: "M16,1.34,14.66,0,12,2.65,9.35,0,8,1.34l.45.45.7-.7.71.71L11.2,3.14l.71.71-.71.71L9.26,6.5l.79.79,2-2L14.66,8,16,6.65,13.35,4Z",
      opacity: "0.33",
      style: {"isolation":"isolate"}
    }),
    _createVNode("path", {
      d: "M10.5,3.85,9.15,2.5,6.5,5.16,3.84,2.5,2.5,3.85,5.16,6.5l-2,2L4,9.24,5.94,7.3l.71-.71.71.71L8.7,8.64l.71.71-.7.7.45.45L10.5,9.15,7.84,6.5Z",
      opacity: "0.66",
      style: {"isolation":"isolate"}
    }),
    _createVNode("path", { d: "M8,9.35,6.65,8,4,10.66,1.34,8,0,9.35,2.65,12,0,14.66,1.34,16,4,13.35,6.65,16,8,14.66,5.34,12Z" })
  ]))
}