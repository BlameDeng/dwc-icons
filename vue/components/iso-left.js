import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("polygon", {
      points: "3.962 4.294 8.472 4.884 5.398 9.32 3.962 4.294",
      opacity: "0.33",
      style: {"isolation":"isolate"}
    }),
    _createVNode("path", { d: "M11,0H10L0,2V13l5,3H6l10-2V3Zm0,1.1662,3.51,2.1062L11,3.985ZM10,1.02V4.188l-1.0225.2076L3.5549,3.6864,1.6862,2.6826Zm0,4.1763V10l-4,.8038V9.5L8.8189,5.4335ZM5,14.8338,1.49,12.7275,5,12.015Zm0-3.829-4,.8039V3.3711L3.3792,4.6745,5,10.3487Zm.5016-2.541L4.4587,4.8131l3.2764.4285ZM6,14.98V11.812L10,11l4.3217,2.3159Zm9-2.3565-4-2.1862V4.9951l4-.8039Z" })
  ]))
}