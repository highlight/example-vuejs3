# Vue 3 and Highlight Example Application

## Install Highlight

```sh
npm install highlight.run

# or using Yarn
yarn add highlight.run
```

## Initialize Highlight

You will need to start Highlight as soon as your application starts. In this example, we initialize Highlight in [main.ts](./src/main.ts) before the application is mounted.


```vue
H.init("9mem3yd2", {
  environment: "production",
  enableStrictPrivacy: false,
});
H.identify("Vue.js 3 user", {
  authenticated: false,
});

createApp(App).mount("#app");
```
