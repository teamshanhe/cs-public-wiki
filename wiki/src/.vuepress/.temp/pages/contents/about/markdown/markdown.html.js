import comp from "/home/edgw/桌面/cs-public-wiki/src/.vuepress/.temp/pages/contents/about/markdown/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/contents/about/markdown/markdown.html\",\"title\":\"适用于本百科的 Markdown 教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"适用于本百科的 Markdown 教程\",\"icon\":\"info\",\"author\":\"EDGW_\",\"order\":3,\"description\":\"//TODO\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"contents/about/markdown/markdown.md\",\"autoDesc\":true}")
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
