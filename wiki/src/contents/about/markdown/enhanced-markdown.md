---

title:  增强组件语法
icon:   code
author: EDGW_
---



> [!tip]
> 本页面给出了一些常用的 Markdown 增强语法，你也可以可以参考 [Markdown 增强](https://theme-hope.vuejs.press/zh/guide/markdown/)。

## $\LaTeX$ 公式
::: tabs

@tab 语法解释

使用 `$` 包裹公式以创建行内公式，使用 `$$` 包裹公式以创建行间公式。善用行间公式可以使排版更美观。

本百科使用 mathjax 渲染 $\LaTeX$ 公式。

[这个页面](/cs-public-wiki/contents/common/latex/)介绍了 $\LaTeX$ 公式的语法

### 样例

行内公式：$\forall \varepsilon>0,\exists N$，使得 $\forall n>N$，$|a_n-A|<\varepsilon$。

行间公式：

$$-\frac{\hbar^2}{2\mu}(\frac{\partial^2\psi}{\partial x^2}+\frac{\partial^2\psi}{\partial ^2}+\frac{\partial^2\psi}{\partial z^2})+V\psi=E\psi\tag{1} $$

@tab 演示

这是一个 $f(x)=\frac{2x+3}{x^2}+\ln{(e^{2x}+\sqrt{x})}$ 行间公式。

这是一行
$$\Gamma(x) = \int_0^{+\infty}{t^{x-1}e^{-t}\mathrm{d}t} (x>0,x\in\mathbb{R})\tag{1}$$
独立公式。

这是 $\LaTeX$。

-----------------
这是上面文字的源码
```markdown
这是一个 $f(x)=\frac{2x+3}{x^2}+\ln{(e^{2x}+\sqrt{x})}$ 行间公式。

这是一行
$$\Gamma(x) = \int_0^{+\infty}{t^{x-1}e^{-t}\mathrm{d}t} (x>0,x\in\mathbb{R})\tag{1}$$
独立公式。

这是 $\LaTeX$。
```

:::
