import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", {
      d: "m11 3v-3h-9v16h12v-13z",
      fill: "#da8933"
    }),
    _createVNode("g", { fill: "#fff" }, [
      _createVNode("path", {
        d: "m10 5h2v2h-2zm0 4h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z",
        opacity: ".25"
      }),
      _createVNode("path", {
        d: "m8 5h2v2h-2zm0 4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2z",
        opacity: ".5"
      }),
      _createVNode("path", {
        d: "m6 5h2v2h-2zm0 4h2v2h-2zm2-2h2v2h-2zm0 4h2v2h-2z",
        opacity: ".75"
      }),
      _createVNode("path", { d: "m4 5h2v2h-2zm0 4h2v2h-2zm6-2h2v2h-2zm0 4h2v2h-2z" })
    ]),
    _createVNode("path", {
      d: "m11 0 3 3h-3z",
      fill: "#986024"
    })
  ]))
}