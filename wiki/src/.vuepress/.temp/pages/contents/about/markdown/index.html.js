import comp from "/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/contents/about/markdown/index.html.vue"
const data = JSON.parse("{\"path\":\"/contents/about/markdown/\",\"title\":\"本百科的 Markdown 语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"本百科的 Markdown 语法\",\"icon\":\"code\",\"author\":\"EDGW_\",\"order\":3,\"description\":\"Markdown? Markdown 是一种标记语言，它允许你以一种更加简便优雅的方式编写格式丰富的文档，而不用理会烦人的HTML标签。 Markdown 的效果由 Markdown 解析引擎实现，和 HTML 一样，你可以为 Markdown 解析引擎定义 Markdown 呈现的样式，以让你的页面更加丰富和美观。本 Wiki 的内容就是使用 Mar...\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.83,\"words\":250},\"filePathRelative\":\"contents/about/markdown/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
