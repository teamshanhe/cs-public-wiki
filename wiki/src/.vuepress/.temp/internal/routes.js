export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"山河大学计算机科学公共百科","i":"home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/about.html.js"), meta: {"t":"关于我们","i":"user"} }],
  ["/contents/", { loader: () => import(/* webpackChunkName: "contents_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/index.html.js"), meta: {"t":"百科目录","i":"home"} }],
  ["/contents/about/", { loader: () => import(/* webpackChunkName: "contents_about_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/index.html.js"), meta: {"t":"关于此百科","i":"book"} }],
  ["/contents/about/contribute.html", { loader: () => import(/* webpackChunkName: "contents_about_contribute.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/contribute.html.js"), meta: {"t":"如何贡献此百科的内容","i":"info","O":1} }],
  ["/contents/about/specifications.html", { loader: () => import(/* webpackChunkName: "contents_about_specifications.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/specifications.html.js"), meta: {"t":"百科内容规范","i":"book","O":2} }],
  ["/contents/common/", { loader: () => import(/* webpackChunkName: "contents_common_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/common/index.html.js"), meta: {"t":"计算机公共素养","i":"book"} }],
  ["/contents/specialized/", { loader: () => import(/* webpackChunkName: "contents_specialized_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/specialized/index.html.js"), meta: {"t":"计算机科学百科","i":"book"} }],
  ["/contents/about/markdown/", { loader: () => import(/* webpackChunkName: "contents_about_markdown_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/markdown/index.html.js"), meta: {"t":"本百科的 Markdown 语法","i":"code"} }],
  ["/contents/about/markdown/basic-markdown.html", { loader: () => import(/* webpackChunkName: "contents_about_markdown_basic-markdown.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/markdown/basic-markdown.html.js"), meta: {"t":"基本 Markdown 语法","i":"code"} }],
  ["/contents/about/markdown/enhanced-markdown.html", { loader: () => import(/* webpackChunkName: "contents_about_markdown_enhanced-markdown.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/markdown/enhanced-markdown.html.js"), meta: {"t":"增强组件语法","i":"code"} }],
  ["/contents/common/basics/", { loader: () => import(/* webpackChunkName: "contents_common_basics_index.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/common/basics/index.html.js"), meta: {"t":"基础知识和基本操作"} }],
  ["/contents/common/basics/compressions.html", { loader: () => import(/* webpackChunkName: "contents_common_basics_compressions.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/common/basics/compressions.html.js"), meta: {"t":"压缩和解压文件","i":"archive"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/contents/about/markdown/extended-markdown.html", { loader: () => import(/* webpackChunkName: "contents_about_markdown_extended-markdown.html" */"/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/markdown/extended-markdown.html.js"), meta: {"t":"扩展 Markdown 语法","i":"code"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
