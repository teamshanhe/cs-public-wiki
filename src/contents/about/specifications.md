---

title:  百科内容规范
icon:   book
author: EDGW_
order:  2
---

任何提交到本百科上的内容都应该遵守这篇规范。

## 资源文件规范

### 文件目录

本百科是由 [VuePress Theme Hope](https://theme-hope.vuejs.press) 生成的静态网页。文章作者使用 [Markdown](./markdown/) 语言及其扩展语法编写文件，由 VuePress 将其编译成静态的 HTML 网页。在仓库的 `src` 目录下，存放了所有文章的源代码。

本百科的文章分“计算机公共素养”、“计算机科学百科”和“关于此百科”三个板块，分别提供面向大众的计算机科普知识、面向学生和计算机工作者的领域知识和关于此百科的信息，这三个板块分别对应以下三个目录：
 - 计算机公共素养： `src/contents/common/`
 - 计算机科学百科： `src/contents/specialized/`
 - 关于此百科： `src/contents/about/`

在这三个目录下创建的文件夹和文件即成为这三个板块的内容。比如说，本文源代码的路径是 `src/contents/about/specifications.md`，则表示本文是“关于此百科”板块下的文章，而本文的图标、标题等则由源代码里的其它属性指定。

### 文本源文件

对于每篇文章，都应该有一个标识符(ID)对应着文章源码的文件（夹）名，如本文的标识符就是 `specifications`。

文章可分为**含子级的文章**和**不含子级的文章**，比如说，本板块下的[本百科的 Markdown 语法](./markdown/)就是含子级的文章，而本文就是不含子级的文章。

::: tabs

@tab 对于含子级的文章

应该在文章所在目录下创建以该文章的标识符命名的文件夹，并创建 `README.md` 文件，作为该文章的源码。

其中 `README.md` 中指定的标题将成为该文章的标题。侧边栏中，这将显示为一个文件夹，且文件夹下有与文件夹同名的文章。

比如文章[本百科的 Markdown 语法](./markdown/)的标识符是 `markdown`，父目录是板块“关于此百科”，故应在父目录对应的 `src/contents/about/` 文件夹下创建 `markdown` 文件夹，并在其中创建 `README.md` 文件，储存该文章的源码。

最终的文件结构应该如下：
```
/src/contents/about/
    - markdown/             # 文章“本百科的 Markdown 语法”对应的目录
        - README.md         # 该文件里储存了文章的源码
    - specifications.md     # 另外两篇文章
    - contribute.md         
```

在侧边栏显示的样式应该如下图：
![侧边栏样式展示](/assets/contents/about/specifications/sidebar-with-subnodes.jpg =300x)


@tab:active 对于不含子级的文章

应该在文章所在目录下创建以该文章的标识符命名的 Markdown 文件，作为该文章的源码。

 - **例 1** 本文章的标识符是 `specifications`，本文章的父目录是板块“关于此百科”，故应在父目录对应的 `src/contents/about/` 文件夹下创建 `specifications.md` 文件，用以储存本文章的源代码。
 - **例 2** 文章[如何贡献此百科的内容](./contribute)的标识符是 `contribute`，父目录是板块“关于此百科”，故应在父目录对应的 `src/contents/about/` 文件夹下创建 `contribute.md` 文件，用以储存该文章的源代码。

:::

### 图片、视频等资源文件

//TODO

## 文本格式规范

## 引用格式规范
