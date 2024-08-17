import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/cs-public-wiki/",

  lang: "zh-CN",
  title: "主页",
  description: "山河大学计算机科学公共百科主页",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
