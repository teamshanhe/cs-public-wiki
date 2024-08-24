<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本页面在本主题下给出了一些常用的基本 Markdown 语法示例，完整的基本 Markdown 语法可以参考 <a href="https://markdown.com.cn/basic-syntax/" target="_blank" rel="noopener noreferrer">Markdown 基本语法</a></p>
</div>
<h2 id="markdown-标题" tabindex="-1"><a class="header-anchor" href="#markdown-标题"><span>Markdown 标题</span></a></h2>
<Tabs id="9" :data='[{"id":"语法解释"},{"id":"演示"}]'>
<template #title0="{ value, isActive }">语法解释</template>
<template #title1="{ value, isActive }">演示</template>
<template #tab0="{ value, isActive }">
<p>要创建标题，请在单词或短语前面添加井号 (<code v-pre>#</code>) 。<code v-pre>#</code> 的数量代表了标题的级别。例如，添加三个 <code v-pre>#</code> 表示创建一个三级标题 (<code v-pre>&lt;h3&gt;</code>) (例如：<code v-pre>### A subtitle</code>)。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请注意在 <code v-pre>#</code> 和标题之间添加空格，不同markdown处理器对不添加空格的语法有着不同的处理（即未定义行为），可能会产生意想不到的结果。</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"># 使用这种。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">#不要使用这种。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
</template>
<template #tab1="{ value, isActive }">
<h1 id="这是一个一级标题" tabindex="-1"><a class="header-anchor" href="#这是一个一级标题"><span>这是一个一级标题</span></a></h1>
<p>在本百科的页面中，一级标题可以用于标识页面标题，因此不应当在百科中使用一级标题。</p>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题"><span>二级标题</span></a></h2>
<p>这是百科内文章的顶级标题，二级标题下会自动添加一根分割线。</p>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题"><span>三级标题</span></a></h3>
<h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题"><span>四级标题</span></a></h4>
<h5 id="五级标题" tabindex="-1"><a class="header-anchor" href="#五级标题"><span>五级标题</span></a></h5>
<h6 id="六级标题" tabindex="-1"><a class="header-anchor" href="#六级标题"><span>六级标题</span></a></h6>
<p>二、三级标题会被列入页索引中（即“此页内容”），不建议使用五、六级标题，若你的文章确实要用到那么多层标题，请尝试重新为你的文章分类或将其拆分成多个文章。</p>
<hr>
<p>这是上面文字的源码</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"># 这是一个一级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">在本百科的页面中，一级标题可以用于标识页面标题，因此不应当在百科中使用一级标题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">## 二级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">这是百科内文章的顶级标题，二级标题下会自动添加一根分割线。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">#### 四级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">##### 五级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">###### 六级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">二、三级标题会被列入页索引中（即“此页内容”），不建议使用五、六级标题，若你的文章确实要用到那么多层标题，请尝试重新为你的文章分类或将其拆分成多个文章。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="markdown-段落" tabindex="-1"><a class="header-anchor" href="#markdown-段落"><span>Markdown 段落</span></a></h2>
<Tabs id="60" :data='[{"id":"语法解释"},{"id":"演示"}]'>
<template #title0="{ value, isActive }">语法解释</template>
<template #title1="{ value, isActive }">演示</template>
<template #tab0="{ value, isActive }">
<p>Markdown中用一行空行分段。若您不在两段落间添加空行，这两段会被处理成一段，从排版上看则更加紧凑。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>不要用空格（spaces）或制表符（ tabs）缩进段落，这可能会产生意想不到的结果</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">正确的写法。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   错误的写法，可能导致排版问题。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p></p>
</template>
<template #tab1="{ value, isActive }">
<p>这是一段。<br>
因为没有添加空行，这是同一段。</p>
<p>因为添加了空行，这是另一段。</p>
<hr>
<p>这是上面文字的源码</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">这是一段。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">因为没有添加空行，这是同一段。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">因为添加了空行，这是另一段。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="markdown-强调" tabindex="-1"><a class="header-anchor" href="#markdown-强调"><span>Markdown 强调</span></a></h2>
<Tabs id="93" :data='[{"id":"语法解释"},{"id":"演示"}]'>
<template #title0="{ value, isActive }">语法解释</template>
<template #title1="{ value, isActive }">演示</template>
<template #tab0="{ value, isActive }">
<h3 id="加粗文本" tabindex="-1"><a class="header-anchor" href="#加粗文本"><span>加粗文本</span></a></h3>
<p>要加粗文本，请在单词或短语的前后各添加两个星号（<code v-pre>**</code>）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号。</p>
<h3 id="倾斜文本" tabindex="-1"><a class="header-anchor" href="#倾斜文本"><span>倾斜文本</span></a></h3>
<p>要用斜体显示文本，请在单词或短语前后添加一个星号（<code v-pre>*</code>）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>您可能听说过也可以用下划线（<code v-pre>_</code>）来加粗或倾斜文本，但是下划线的不支持突出单词的中间部分，比如说 <code v-pre>abc _def_ ghi</code> 是合法的，会被解释成 “abc <em>def</em> ghi”，而 <code v-pre>abc_def_ghi</code> 则不会被解释成斜体，会变成 “abc_def_ghi”，这主要是因为用于表示变量名或其他不能含有空格和连字符的名称的词语经常包含下划线，所以我们不建议您使用下划线。</p>
</div>
</template>
<template #tab1="{ value, isActive }">
<p><strong>粗体字</strong></p>
<p><em>斜体字</em></p>
<hr>
<p>这是上面文字的源码</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit">**粗体字**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">*斜体字*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="markdown-引用" tabindex="-1"><a class="header-anchor" href="#markdown-引用"><span>Markdown 引用</span></a></h2>
<Tabs id="131" :data='[{"id":"语法解释"},{"id":"演示"}]'>
<template #title0="{ value, isActive }">语法解释</template>
<template #title1="{ value, isActive }">演示</template>
<template #tab0="{ value, isActive }">
<p>在段落前加 <code v-pre>&gt;</code> 将其标记为引用。添加多个 <code v-pre>&gt;</code> 可以嵌套引用。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>引用与标题类似，<code v-pre>&gt;</code> 与文本之间也需要添加空格。</p>
</div>
</template>
<template #tab1="{ value, isActive }">
<blockquote>
<p>引用</p>
<blockquote>
<p>多级引用</p>
<blockquote>
<p>多多级引用</p>
</blockquote>
</blockquote>
<ul>
<li>在引用内可以<strong>自</strong><em>由</em><code v-pre>使用</code>其他格式。</li>
<li>
<h3 id="也可以添加标题" tabindex="-1"><a class="header-anchor" href="#也可以添加标题"><span>也可以添加标题</span></a></h3>
</li>
</ul>
</blockquote>
<hr>
<p>这是上面文字的源码</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">> 引用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">>> 多级引用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">>>> 多多级引用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">> </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">-</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit"> 在引用内可以</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-weight:bold;--shiki-dark-font-weight:inherit">**自**</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">*由*</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">`</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#98C379;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">使用</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">`</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">其他格式。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#5C6370;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">> </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit"> ### 也可以添加标题</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


