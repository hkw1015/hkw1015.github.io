import{_ as a,E as t,Z as e,$ as p,a3 as o,a4 as c,a5 as n,a1 as l}from"./framework-1fb77053.js";const i={},u=n(`<h2 id="示例效果" tabindex="-1"><a class="header-anchor" href="#示例效果" aria-hidden="true">#</a> 示例效果</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>事件处理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入Vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{name}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hello hkw&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;同学你好&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;vm&#39;</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/work/image-20221201163811081.png" alt="image-20221201163811081" tabindex="0" loading="lazy"><figcaption>image-20221201163811081</figcaption></figure><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><ol><li>使用 <code>v-on:xxx</code> 或 <code>@xxx</code> 绑定事件，其中 <code>xxx</code> 是事件名</li><li>事件的回调需要配置在 <code>methods</code> 对象中，最终会在 <code>vm</code> 上</li><li><code>methods</code> 中配置的函数，不要用箭头函数，否则 <code>this</code> 就不是 <code>vm</code> 了</li><li><code>methods</code> 中配置的函数，都是被 Vue 所管理的函数，<code>this</code> 的指向是 <code>vm</code> 或 <code>组件实例对象</code></li><li><code>@click=&quot;demo&quot;</code> 和 <code>@click=&quot;demo($event)&quot;</code> 效果一致，但后者可以传参【默认事件形参：event，隐含属性对象：$event】</li></ol><h2 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h2><ol><li><code>prevent</code>：阻止默认事件（常用）</li><li><code>stop</code>：阻止事件冒泡（常用）</li><li><code>once</code>：事件只触发一次（常用）</li><li><code>capture</code>：使用事件的捕获模式</li><li><code>self</code>：只有 event.target 是当前操作的元素才触发事件</li><li><code>passive</code>：事件的默认行为立即执行，无需等待事件回调执行完毕</li></ol><p>以上事件修饰符可以连续写，vue 会按先后顺序生效，举例：阻止事件冒泡 + 阻止默认事件：<code>@click.stop.pervent=&quot;事件函数&quot;</code></p><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><p><strong>（1）Vue 中常用的按键别名</strong></p><ul><li>回车 =&gt; <code>enter</code></li><li>删除 =&gt; <code>delete</code>（捕获 &quot;删除&quot; 和 &quot;退格&quot; 键）</li><li>退出 =&gt; <code>esc</code></li><li>空格 =&gt; <code>space</code></li><li>换行 =&gt;<code> tab</code></li><li>上 =&gt; <code>up</code></li><li>下 =&gt; <code>down</code></li><li>左 =&gt; <code>left</code></li><li>右 =&gt; <code>right</code></li></ul>`,11),d=n('<p>也可以使用 <code>keyCode</code> 去指定具体的按键（不推荐），比如：<code>@keyup.13=&quot;事件函数&quot;</code></p><figure><img src="http://img.hl1015.top/work/image-20221201182451853.png" alt="image-20221201182451853" tabindex="0" loading="lazy"><figcaption>image-20221201182451853</figcaption></figure><p>或者通过 <code>Vue.config.keyCodes.自定义键名 = 键码</code> 来自定义按键别名（不推荐），比如：<code>Vue.config.keyCodes.huiche = 13</code>，使用时：<code>@keyup.huiche=&quot;事件函数&quot;</code></p><p><strong>（2）系统修饰键（用法特殊）</strong></p><p>系统修饰键：<code>ctrl、alt、shift、meta</code></p><ul><li>配合 <code>keyup</code> 使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发</li><li>配置 <code>keydown</code> 使用：正常触发事件</li></ul><p>想要只按 修饰符 + 其他键 才生效【比如：<code>ctrl + s</code>】，只需连续写即可，举例：<code>@click.ctrl.s=&quot;事件函数&quot;</code> 只有在按 <code>ctrl + s</code> 才会触发事件函数</p>',7);function k(r,g){const s=t("font");return e(),p("div",null,[u,o(s,{color:"red"},{default:c(()=>[l("Vue 未提供别名的按键，可以使用按键原始的 key 值去绑定，但注意要转为 kebab-case（短横线命名），比如：键盘上的 caps lock 按键，绑定按键时需要写成： `@keyup.caps-lock`")]),_:1}),d])}const m=a(i,[["render",k],["__file","07-事件处理.html.vue"]]);export{m as default};
