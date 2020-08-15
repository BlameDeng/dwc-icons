<template>
  <h1 class="title">All Icons ({{ icons.length }})</h1>
  <div class="icons">
    <div
      class="icon-wrapper"
      v-for="icon of icons"
      :key="icon"
      @click="onClick(icon)"
    >
      <dwc-icon :name="icon"></dwc-icon>
      <br />
      <span>{{ icon }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Icon, iconList } from "../vue";

export default {
  name: "App",
  components: {
    "dwc-icon": Icon,
  },
  setup() {
    const icons = ref(iconList);

    const onClick = (iconName) => {
      copyStringToClipboard(`<dwc-icon name="${iconName}"></dwc-icon>`);
    };

    const copyStringToClipboard = (str) => {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    };

    return { icons, onClick };
  },
};
</script>
<style>
.title {
  text-align: center;
}

.icons {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.icon-wrapper {
  width: 80px;
  height: 40px;
  margin: 8px 4px;
  cursor: pointer;
  font-size: 12px;
  color: #595959;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
