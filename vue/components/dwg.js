import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", {
      d: "m11 3v-3h-9v16h12v-13z",
      fill: "#a6afb7"
    }),
    _createVNode("path", {
      d: "m7.5 5a.5.5 0 1 1 -.5.5.5.5 0 0 1 .5-.5zm2.5 0v-2h-2v-3h-1v3h-2v2h-3v1h3v2h2v8h1v-8h2v-2h4v-1zm-.75 2.25h-3.5v-3.5h3.5z",
      fill: "#fff"
    }),
    _createVNode("path", {
      d: "m11 0 3 3h-3z",
      fill: "#747a80"
    })
  ]))
}