import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.15_@vuepress+bundler-vite@2.0.0-rc.15_@types+n_w2my35keldurogv2mhgn3bjz64/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "./mathjax.css";
import Tabs from "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/home/edgw/桌面/cs-public-wiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.15_@vuepress+bund_n2jvibp2qudesxvy77q3xuheiq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
