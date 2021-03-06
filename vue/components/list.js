import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m2 2c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1c.5 0 1 .4 1 1" }),
      _createVNode("path", { d: "m2 6c0 .6-.4 1-1 1-.5 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1" }),
      _createVNode("path", { d: "m2 10c0 .6-.4 1-1 1-.5 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1" }),
      _createVNode("path", { d: "m2 14c0 .6-.4 1-1 1-.5 0-1-.4-1-1s.4-1 1-1c.5 0 1 .5 1 1" }),
      _createVNode("path", { d: "m4 1h12v2h-12z" }),
      _createVNode("path", { d: "m4 5h12v2h-12z" }),
      _createVNode("path", { d: "m4 9h12v2h-12z" }),
      _createVNode("path", { d: "m4 13h12v2h-12z" })
    ])
  ]))
}