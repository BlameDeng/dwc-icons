<script lang="ts">
import { computed, h } from "vue";

import { icons } from "./icons.js";

export default {
  name: "dwc-icon",
  props: {
    name: { type: String, required: true },
    spinning: [Boolean, String],
    size: { type: [Number, String], default: 14 },
  },
  setup(props, context) {
    const style = computed(() => {
      const iconSize = props.size === "string" ? props.size : props.size + "px";

      return { width: iconSize, height: iconSize };
    });

    return () =>
      h(
        "i",
        { className: "dwc-icon", style: style.value },
        icons[props.name] ? icons[props.name]() : []
      );
  },
};
</script>
<style>
.dwc-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
}

.dwc-icon > svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.dwc-icon.spinning > svg {
  animation: dwc-spin 1.2s linear infinite;
}

@keyframes dwc-spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
