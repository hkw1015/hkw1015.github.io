import{_ as n,Z as s,$ as a,a5 as t}from"./framework-1fb77053.js";const p={},e=t(`<blockquote><p>非单文件组件提前说明：</p><ul><li>模板编写没有提示</li><li>没有构建过程，无法将 ES6 转换成 ES5</li><li>不支持组件的 CSS</li><li>真正开发中几乎不用</li></ul></blockquote><h2 id="vue-中使用组件的三大步骤" tabindex="-1"><a class="header-anchor" href="#vue-中使用组件的三大步骤" aria-hidden="true">#</a> Vue 中使用组件的三大步骤</h2><ol><li>定义组件（创建组件）</li><li>注册组件</li><li>使用组件（写组件标签）</li></ol><h2 id="如何定义一个组件" tabindex="-1"><a class="header-anchor" href="#如何定义一个组件" aria-hidden="true">#</a> 如何定义一个组件</h2><p><strong>使用 <code>Vue.extend(options)</code> 语句进行创建</strong></p><blockquote><p>其中 <code>options</code> 和 <code>new Vue(options)</code> 时传入的那个 <code>options</code> 几乎一样，但也有点区别：</p><ul><li>el 不要写，为什么？—— 最终所有的组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务哪个容器</li><li>data 必须写成函数，为什么？—— 避免组件被复用，数据存在引用关系</li></ul></blockquote><p>备注：使用 <code>template</code> 可以配置组件结构</p><h2 id="如何注册组件" tabindex="-1"><a class="header-anchor" href="#如何注册组件" aria-hidden="true">#</a> 如何注册组件</h2><ul><li>局部注册：在 <code>new Vue</code> 的时候传入 <code>components</code> 选项</li><li>全局注册：通过 <code>Vue.component(&#39;组件名&#39;, 组件)</code></li></ul><h2 id="编写组件标签" tabindex="-1"><a class="header-anchor" href="#编写组件标签" aria-hidden="true">#</a> 编写组件标签</h2><p>格式：<code>&lt;组件名&gt;&lt;/组件名&gt;</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>基本使用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 第三步：编写组件标签 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>school</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>school</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 第三步：编写组件标签 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

		<span class="token comment">//第一步：创建school组件</span>
		<span class="token keyword">const</span> school <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div class=&quot;demo&quot;&gt;
					&lt;h2&gt;学校名称：{{schoolName}}&lt;/h2&gt;
					&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;
					&lt;button @click=&quot;showName&quot;&gt;点我提示学校名&lt;/button&gt;	
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token comment">// el:&#39;#root&#39;, //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">schoolName</span><span class="token operator">:</span><span class="token string">&#39;尚硅谷&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;北京昌平&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>schoolName<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//第一步：创建student组件</span>
		<span class="token keyword">const</span> student <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学生姓名：{{studentName}}&lt;/h2&gt;
					&lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">studentName</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//第一步：创建hello组件</span>
		<span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;	
					&lt;h2&gt;你好啊！{{name}}&lt;/h2&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Tom&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//第二步：全局注册组件</span>
		Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>hello<span class="token punctuation">)</span>

		<span class="token comment">//创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;你好啊！&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//第二步：注册组件（局部注册）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				school<span class="token punctuation">,</span>
				student
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root2&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件的几个注意点" tabindex="-1"><a class="header-anchor" href="#组件的几个注意点" aria-hidden="true">#</a> 组件的几个注意点</h2><h3 id="_1-关于组件名" tabindex="-1"><a class="header-anchor" href="#_1-关于组件名" aria-hidden="true">#</a> 1. 关于组件名</h3><ul><li>一个单词组成 <ul><li>第一种写法（首字母小写）：school</li><li>第二种写法（首字母大写）：School</li></ul></li><li>多个单词组成 <ul><li>第一种写法（kebab-case 命名）：my-school</li><li>第二种写法（CamelCase 命名）：MySchool【需要 Vue 脚手架支持】</li></ul></li><li>备注 <ul><li>组件名尽可能回避 html 中已有的元素名称，例如：h2、H2 都不行</li><li>可以使用 name 配置项指定组件在开发者工具中呈现的名字</li></ul></li></ul><h3 id="_2-关于组件标签" tabindex="-1"><a class="header-anchor" href="#_2-关于组件标签" aria-hidden="true">#</a> 2. 关于组件标签</h3><ul><li>第一种写法：<code>&lt;school&gt;&lt;/school&gt;</code></li><li>第二种写法：<code>&lt;school/&gt;</code></li><li>备注：不使用脚手架时，<code>&lt;school/&gt;</code> 会导致后续组件不能渲染</li></ul><h3 id="_3-一个简写方式" tabindex="-1"><a class="header-anchor" href="#_3-一个简写方式" aria-hidden="true">#</a> 3. 一个简写方式</h3><p><code>const school = Vue.extend(options)</code> 可简写为：<code>const school = options</code>【对象形式，Vue 底层会帮我们加上 extend 的调用】</p><h2 id="组件的嵌套" tabindex="-1"><a class="header-anchor" href="#组件的嵌套" aria-hidden="true">#</a> 组件的嵌套</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>组件的嵌套<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 引入Vue --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//阻止 vue 在启动时生成生产提示。</span>

		<span class="token comment">//定义student组件</span>
		<span class="token keyword">const</span> student <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学生姓名：{{name}}&lt;/h2&gt;	
					&lt;h2&gt;学生年龄：{{age}}&lt;/h2&gt;	
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;尚硅谷&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//定义school组件【嵌套入student组件】</span>
		<span class="token keyword">const</span> school <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;
					&lt;h2&gt;学校名称：{{name}}&lt;/h2&gt;	
					&lt;h2&gt;学校地址：{{address}}&lt;/h2&gt;	
					&lt;student&gt;&lt;/student&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;尚硅谷&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;北京&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//注册组件（局部）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				student
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//定义hello组件</span>
		<span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1&gt;{{msg}}&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;欢迎来到尚硅谷学习！&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		<span class="token comment">//定义app组件</span>
		<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
				&lt;div&gt;	
					&lt;hello&gt;&lt;/hello&gt;
					&lt;school&gt;&lt;/school&gt;
				&lt;/div&gt;
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
				school<span class="token punctuation">,</span>
				hello
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//创建vm</span>
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;app&gt;&lt;/app&gt;&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token comment">//注册组件（局部）</span>
			<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>app<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于-vuecomponent" tabindex="-1"><a class="header-anchor" href="#关于-vuecomponent" aria-hidden="true">#</a> 关于 VueComponent</h2><ol><li>school 组件本质是一个名为 <code>VueComponent</code> 的构造函数，且不是程序员定义的，是 <code>Vue.extend</code> 生成的</li><li>我们只需要写 <code>&lt;school&gt;&lt;/school&gt;</code> 或 <code>&lt;school/&gt;</code>，Vue 解析时会帮我们创建 school 组件的实例对象</li><li>特别注意：每次调用 <code>Vue.extend</code>，返回的都是一个全新的 <code>VueComponent</code>！！！</li><li>关于 this 指向 <ul><li>组件配置中：<code>data 函数、methods 中的函数、watch 中的函数、computed 中的函数</code>，它们的 <code>this</code> 均是 <strong>VueComponent 实例对象</strong></li><li>new Vue(options) 配置中：<code>data 函数、methods 中的函数、watch 中的函数、computed 中的函数</code>，它们的 <code>this</code> 均是 <strong>Vue 实例对象</strong></li></ul></li><li>VueComponent 的实例对象，可以简称 vc（也可称之为：组件实例对象），Vue 的实例对象，简称 vm <ul><li>因为组件是可复用的 Vue 实例，所以它们与 <code>new Vue</code> 接收相同的选项，例如 <code>data</code>、<code>computed</code>、<code>watch</code>、<code>methods</code> 以及生命周期钩子等，仅有的例外是像 <code>el</code> 这样根实例特有的选项【来自官网】</li></ul></li></ol><h2 id="一个重要的内置关系" tabindex="-1"><a class="header-anchor" href="#一个重要的内置关系" aria-hidden="true">#</a> 一个重要的内置关系</h2><ul><li>一个重要的内置关系：<strong>VueComponent.prototype.proto === Vue.prototype</strong></li><li>为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法</li></ul><figure><img src="http://img.hl1015.top/work/image-20221227161356992.png" alt="image-20221227161356992" tabindex="0" loading="lazy"><figcaption>image-20221227161356992</figcaption></figure>`,28),l=[e];function o(c,i){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","02-非单文件组件.html.vue"]]);export{r as default};
