import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://to-be-decided",

  author: [
    {
      name: "山河大学",
      url: "https://github.com/teamshanhe",
    },
    {
      name: "山河大学计算机院",
      url: "https://github.com/teamshanhe",
    }
  ],

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "teamshanhe/cs-public-wiki",

  docsDir: "src",
  navbar,
  sidebar,
  footer: "使用 <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a> 主题 | CC BY-SA 4.0 协议",
  displayFooter: true,

  
  encrypt: {
    config: {
      
    },
  },
  
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    
    // 评论服务插件
    comment: {
      provider: "Giscus",
      repo: "teamshanhe/cs-public-wiki-discussions",
      repoId: "R_kgDOMkvZvg",
      category: "Announcements",
      categoryId: "DIC_kwDOMkvZvs4Chvki",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      mathjax: true,
      gfm: true,
      alert: true
    },
  },
});
