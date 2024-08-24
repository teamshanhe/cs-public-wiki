import comp from "/home/edgw/桌面/cs-public-wiki/wiki/src/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于我们\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"关于我们\",\"icon\":\"user\",\"welcome\":\"欢迎探索\",\"name\":\"山河大学计算机科学公共百科\",\"avatar\":\"/logo.svg\",\"titles\":[\"由山河大学和山河大学计算机学院搭建\",\"一个在 CC BY-SA 4.0 协议下开源的自由百科\"],\"footer\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://to-be-decided/cs-public-wiki/about.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"关于我们\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"山河大学\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"关于我们\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"about.md\"}")
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
