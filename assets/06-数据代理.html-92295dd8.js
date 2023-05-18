import{_ as n,Z as s,$ as a,a5 as e}from"./framework-1fb77053.js";const t={},p=e(`<h2 id="回顾-object-defineproperty-方法" tabindex="-1"><a class="header-anchor" href="#回顾-object-defineproperty-方法" aria-hidden="true">#</a> 回顾 Object.defineproperty 方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以枚举，默认值是false</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以被修改，默认值是false</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以被删除，默认值是false</span>

	<span class="token comment">// 当有人读取 person 的 age 属性时，get函数【getter】就会调用，且返回值就是 age 的值</span>
	<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> number
	<span class="token punctuation">}</span>

	<span class="token comment">// 当有人修改 person 的 age 属性时，set 函数【setter】就会被调用，且会收到修改的具体值</span>
	<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		number <span class="token operator">=</span> value
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码将 number 和 person 的 age 属性进行了双向关联</p><h2 id="vue-中的数据代理" tabindex="-1"><a class="header-anchor" href="#vue-中的数据代理" aria-hidden="true">#</a> Vue 中的数据代理</h2><blockquote><p><strong>数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）</strong></p></blockquote><ol><li>Vue 中的数据代理：通过 vm 对象来代理 data 对象中属性的操作（读/写）</li><li>Vue 中数据代理的好处：更加方便地操作 data 中的数据</li><li>基本原理</li></ol><ul><li>通过 <code>Object.defineProperty()</code> 把 data 对象中所有属性添加到 vm 上【<code>&quot;_data&quot;</code>】</li><li>为每一个添加到 vm 上的属性，都指定一个 <code>getter/setter</code></li><li>在 <code>getter/setter</code> 内部去操作（读/写）data 中的对应的属性</li></ul>`,7),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","06-数据代理.html.vue"]]);export{u as default};
