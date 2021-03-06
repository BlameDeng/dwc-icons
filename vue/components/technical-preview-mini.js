import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("defs", null, [
      _createVNode("linearGradient", {
        id: "a",
        x1: "8",
        y1: "32",
        x2: "8",
        y2: "16",
        gradientTransform: "translate(0 -16)",
        gradientUnits: "userSpaceOnUse"
      }, [
        _createVNode("stop", {
          offset: "0",
          "stop-color": "#ffc335"
        }),
        _createVNode("stop", {
          offset: "1",
          "stop-color": "#ffdf52"
        })
      ])
    ]),
    _createVNode("path", {
      d: "M8.7.3l7,7a.96667.96667,0,0,1,0,1.4l-7,7a.96667.96667,0,0,1-1.4,0l-7-7a.96667.96667,0,0,1,0-1.4l7-7A.96667.96667,0,0,1,8.7.3",
      fill: "url(#a)"
    }),
    _createVNode("path", {
      d: "M8,1l7,7L8,15,1,8,8,1M8,0a.90783.90783,0,0,0-.7.3l-7,7a.96667.96667,0,0,0,0,1.4l7,7a.96667.96667,0,0,0,1.4,0l7-7a.96667.96667,0,0,0,0-1.4l-7-7A.90783.90783,0,0,0,8,0Z",
      fill: "#ffc000"
    }),
    _createVNode("circle", {
      cx: "8",
      cy: "8",
      r: "2",
      opacity: "0.9",
      style: {"isolation":"isolate"}
    })
  ]))
}