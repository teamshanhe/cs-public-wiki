---

title:  百科内容规范
icon:   book
author: EDGW_
order:  2
---

任何提交到本百科上的内容都应该遵守这篇规范。

> [!tip]
> 本文研究的不是 Markdown 语法，有关语法的问题，如何插入图片、公式、代码等，请参考 [本百科的 Markdown 语法](./markdown/)。


> [!tip]
> 下面频繁提到的 `src` 目录在仓库根目录下的 `wiki` 子文件夹下。

## 1 资源文件规范

### 1.1 文件目录

本百科是由 [VuePress Theme Hope](https://theme-hope.vuejs.press) 生成的静态网页。文章作者使用 [Markdown](./markdown/) 语言及其扩展语法编写文件，由 VuePress 将其编译成静态的 HTML 网页。在 `src` 目录下，存放了所有文章的源代码。

本百科的文章分“计算机公共素养”、“计算机科学百科”和“关于此百科”三个板块，分别提供面向大众的计算机科普知识、面向学生和计算机工作者的领域知识和关于此百科的信息，这三个板块分别对应以下三个目录：
 - 计算机公共素养： `src/contents/common/`
 - 计算机科学百科： `src/contents/specialized/`
 - 关于此百科： `src/contents/about/`

在这三个目录下创建的文件夹和文件即成为这三个板块的内容。比如说，本文源代码的路径是 `src/contents/about/specifications.md`，则表示本文是“关于此百科”板块下的文章，而本文的图标、标题等则由源代码里的其它属性指定。

### 1.2 文本源文件

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

### 1.3 图片、视频等资源文件

文章中的资源可分为**外部资源**和**内部资源**。以图片为例，文章中的图片可分为**外部图片**和**内部图片**。外部图片指的是图片文件存储在其他服务器上，在访问时请求源服务器的图片；内部图片指的是图片文件储存在本仓库中的图片。

::: tabs

@tab 内部资源

内部资源必须存储在 `src/.vuepress/public/assets/` 文件夹中，并且要放在所在页面对应的目录下，若多个页面引用同一图片的，则应把图片放置其他清晰、合理、易于管理的目录下。

**例 1** 本页面的[文本源文件](#文本源文件)节中曾展示一张图片说明含子级的文章的侧边栏展示情况。因为本文的源码在 `src/contents/about/specifications.md` 中，该图片的名字是 `sidebar-with-subnodes.jpg`，所以该文件应该存放为 `src/.vuepress/public/assets/contents/about/specifications/sidebar-with-subnodes.jpg`。

**例 2** 比方说您要在 `src/contents/common/categoryA/a.md` 和 `src/contents/common/categoryA/b.md` 中同时展示一个图片，那您可以把图片放置在 `src/.vuepress/public/assets/contents/common/categoryA` 中，或者您可以考虑更好的分类方法。 

### 图片

推荐使用**内部图片**或者**源稳定的外部图片**，比如说来自稳定大型的图床的图片。

> [!warning]
> 在引用商业图片，或引用别人发布的图片时，请注意图片发布者所提供许可协议是否允许您在这里引用其图片。若图片发布者未提供明确的许可协议，则您不能在这里引用图片。
> 您可以引用任何按照 CC BY-SA 4.0协议发布的图片。

### 视频

受限与 GitHub Pages 的带宽，以及本网站开发者的时间问题，本百科暂不允许使用内源视频。您可以使用外源视频。

@tab 外部资源

请确定所引用的资源地址是稳定的，这样我们的页面才不会频繁出现“图片挂了”的情况。

我们推荐您使用稳定、在国内能快速访问的图床或者其他托管网站来存放视频，我们也支持来自 **BiliBili** 和**西瓜视频**的视频。

::::

## 2 文本格式规范

为了使排版整洁、美观，内容简洁、明了，我们推荐您遵守以下格式规范：

### 2.1 排版格式规范

#### 2.1.1 页面标题

 - 您应该简明扼要的指出本页的内容；
 - 您应该使页面图标与页面标题相匹配；
 - 您应该使页面标题**尽量**不包含公式、emoji等可能会在侧边栏渲染时出错的内容。

#### 2.1.2 文章小标题
 - 您的小标题不应该超过四级。如果四级以内的小标题不能展示您文章的层次结构，您应该考虑把文章拆分成多篇文章；
 - 若您的小标题层级较为复杂，您应该为其编号（如本文）。

#### 2.1.3 正文
 - 您应该分段阐述您的内容；
 - 您应该灵活在文本间穿插图片，而不是把图片全部放在最后面；
 - 您应该使用“您”作为对读者的称呼，而不是“你”；
 - 您应该在中文与西文字符、公式间适当的加上空格；
 - 您应该灵活使用行间公式优化您的排版，使其错落有致；
 - 您应该在西文标点符号（或半角符号）后加上空格。中文标点符号（或全角符号）后可以不用添加空格。
> [!tip]
> 在 English characters 旁边应该加上空格；
> 不然会很不美观。比如说这样here is an example就很不美观。

> [!tip]
> **适当**是指您可以灵活选择排版方式让页面变得美观。
> 比如说如果一个英文单词邻着标点符号，那我们认为单词和标点之间就不用添加空格，因为标点提供的空白部分已经起到了空格的效果。

## 引用格式规范
