import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/about",
    {
      text: "计算机公共素养",
      icon: "book",
      prefix: "contents/common/",
      link: "contents/common/",
      children: "structure",
    },
    {
      text: "计算机科学百科",
      icon: "book",
      prefix: "contents/specialized/",
      link: "contents/specialized/",
      children: "structure",
    },
    {
      text: "关于此百科",
      icon: "book",
      prefix: "contents/about/",
      link: "contents/about/",
      children: "structure",
    },
  ],
});
