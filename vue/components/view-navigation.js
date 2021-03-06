import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(0-1)" }, [
      _createVNode("path", { d: "m7.5 5c-2 0-3.7 1.2-4.5 3 .8 1.8 2.5 3 4.5 3 2 0 3.7-1.2 4.5-3-.8-1.8-2.5-3-4.5-3m2.2 1.6c.6.4 1 .9 1.3 1.4-.3.5-.8 1-1.3 1.4-.6.5-1.4.7-2.2.7-.8 0-1.6-.2-2.2-.7-.5-.4-1-.8-1.3-1.4.3-.6.8-1.1 1.4-1.4.1 0 .1-.1.1-.1-.2.3-.3.6-.3.8 0 1.3 1 2.4 2.2 2.4 1.3 0 2.3-1.1 2.2-2.4.1-.2.1-.5.1-.7m-2.2.4c0 .5-.4.9-.8.9-.5 0-.9-.5-.8-1 0-.5.4-.8.8-.8.4 0 .8.4.8.9" }),
      _createVNode("path", { d: "m15 8.5l-2 1.5v-3l2 1.5" }),
      _createVNode("path", { d: "M0,8.5L2,7v3L0,8.5z" }),
      _createVNode("path", { d: "M7.5,15L6,13h3L7.5,15z" }),
      _createVNode("path", { d: "M7.5,1L9,3H6L7.5,1z" })
    ])
  ]))
}