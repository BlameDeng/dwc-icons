<script>
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
      const iconSize =
        typeof props.size === "string" ? props.size : props.size + "px";

      return { width: iconSize, height: iconSize };
    });

    return () =>
      h(
        "i",
        {
          class: `dwc-icon${
            props.spinning === true || props.spinning === "true"
              ? " spinning"
              : ""
          }`,
          key: props.name,
          style: style.value,
        },
        icons[props.name] ? icons[props.name](undefined, false) : []
      );
  },
};
</script>
<style>
@import "./index.css";
</style>
