import { defineAsyncComponent } from "vue";

export { default as iconList } from "./icon-list.json";

export const install = (app) => {
  for (const icon of iconList) {
    const iconComponent = defineAsyncComponent(() =>
      import("./components/" + icon + ".js")
    );

    app.component("dwc-" + icon, iconComponent);
  }
};
