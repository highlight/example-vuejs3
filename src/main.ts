import { H } from "highlight.run";
import { createApp } from "vue";
import App from "./App.vue";

H.init("9mem3yd2", {
  environment: "production",
  enableStrictPrivacy: false,
});
H.identify("Vue.js 3 user", {
  authenticated: false,
});

createApp(App).mount("#app");
