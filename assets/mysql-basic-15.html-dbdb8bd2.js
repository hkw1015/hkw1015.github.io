import{_ as s,Z as n,$ as a,a5 as e}from"./framework-1fb77053.js";const p={},t=e(`<h2 id="_1-流程控制结构说明" tabindex="-1"><a class="header-anchor" href="#_1-流程控制结构说明" aria-hidden="true">#</a> 1. 流程控制结构说明</h2><ul><li><strong>顺序结构</strong>：程序从上往下依次执行</li><li><strong>分支结构</strong>：程序从两条或多条路径中选择一条去执行</li><li><strong>循环结构</strong>：程序在满足一定条件的基础上，重复执行一段代码</li></ul><h2 id="_2-分支结构" tabindex="-1"><a class="header-anchor" href="#_2-分支结构" aria-hidden="true">#</a> 2. 分支结构</h2><h3 id="_2-1-if-函数" tabindex="-1"><a class="header-anchor" href="#_2-1-if-函数" aria-hidden="true">#</a> 2.1 if 函数</h3><p>（1）<strong>功能</strong>：实现简单的双分支</p><p>（2）<strong>语法</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span><span class="token punctuation">(</span>表达式<span class="token number">1</span><span class="token punctuation">,</span>表达式<span class="token number">2</span><span class="token punctuation">,</span>表达式<span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 执行顺序：如果 表达式1 成立，则IF函数返回 表达式2 的值，否则返回 表达式3 的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）<strong>应用</strong>：任何地方</p><h3 id="_2-2-case-结构" tabindex="-1"><a class="header-anchor" href="#_2-2-case-结构" aria-hidden="true">#</a> 2.2 case 结构</h3><p><strong>（1）分类</strong></p><p><strong>情况1</strong>：类似于 java 中的 switch 语句，一般用于实现**<span style="color:blue;">等值判断</span>**</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CASE</span> 变量<span class="token operator">|</span>表达式<span class="token operator">|</span>字段
<span class="token keyword">WHEN</span> 要判断的值 <span class="token keyword">THEN</span> 返回的值<span class="token number">1</span>或语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">WHEN</span> 要判断的值 <span class="token keyword">THEN</span> 返回的值<span class="token number">2</span>或语句<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ELSE</span> 要返回的值n或语句n<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>情况2</strong>：类似于 java 中的多重if语句，一般用于实现**<span style="color:blue;">区间判断</span>**</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CASE</span>
<span class="token keyword">WHEN</span> 要判断的条件<span class="token number">1</span> <span class="token keyword">THEN</span> 返回的值<span class="token number">1</span>或语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">WHEN</span> 要判断的条件<span class="token number">2</span> <span class="token keyword">THEN</span> 返回的值<span class="token number">2</span>或语句<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ELSE</span> 要返回的值n或语句n<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）特点</strong></p><ul><li>既可以作为表达式，嵌套在其他语句中使用，可以放在任何地方，BEGIN END 中或 BEGIN END 的外面；也可以作为独立的语句去使用，只能放在 BEGIN END 中（值或语句后面需要跟分号）</li><li>如果 WHEN 中的值满足或条件成立，则执行对应的 THEN 后面的语句，并且结束 CASE；如果都不满足，则执行 ELSE 中的语句或值</li><li>ELSE 可以省略，如果 ELSE 省略了，并且所有的 WHEN 条件都不满足，则返回 null</li></ul><p><strong>（3）案例演示</strong></p><p>案例：创建存储过程，根据传入的成绩，来显示等级，比如传入的成绩：90-100，显示A；80-90，显示B；60-80，显示C，否则，显示D</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> myp7<span class="token punctuation">(</span><span class="token operator">IN</span> score <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">CASE</span>
	<span class="token keyword">WHEN</span> score<span class="token operator">&gt;=</span><span class="token number">90</span> <span class="token operator">AND</span> score<span class="token operator">&lt;=</span><span class="token number">100</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;A&#39;</span> <span class="token keyword">AS</span> 等级<span class="token punctuation">;</span>
	<span class="token keyword">WHEN</span> score<span class="token operator">&gt;=</span><span class="token number">80</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;B&#39;</span> <span class="token keyword">AS</span> 等级<span class="token punctuation">;</span>
	<span class="token keyword">WHEN</span> score<span class="token operator">&gt;=</span><span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;C&#39;</span> <span class="token keyword">AS</span> 等级<span class="token punctuation">;</span>
	<span class="token keyword">ELSE</span> <span class="token keyword">SELECT</span> <span class="token string">&#39;D&#39;</span> <span class="token keyword">AS</span> 等级<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210911092118833.png" alt="image-20210911092118833" tabindex="0" loading="lazy"><figcaption>image-20210911092118833</figcaption></figure><h3 id="_2-3-if-结构" tabindex="-1"><a class="header-anchor" href="#_2-3-if-结构" aria-hidden="true">#</a> 2.3 if 结构</h3><p><strong>（1）功能</strong>：实现多重分支</p><p><strong>（2）语法</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 应用在 BEGIN END 中</span>

<span class="token keyword">IF</span> 条件<span class="token number">1</span> 语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">ELSEIF</span> 条件<span class="token number">2</span> 语句<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
【<span class="token keyword">ELSE</span> 语句n<span class="token punctuation">;</span>】
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）<strong>案例演示</strong></p><p>案例：根据传入的成绩，来显示等级，比如传入的成绩：90-100，返回A；80-90，返回B；60-80，返回C；否则，返回D</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> test_if<span class="token punctuation">(</span>score <span class="token keyword">INT</span><span class="token punctuation">)</span> <span class="token keyword">RETURNS</span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">IF</span> score<span class="token operator">&gt;=</span><span class="token number">90</span> <span class="token operator">AND</span> score<span class="token operator">&lt;=</span><span class="token number">100</span> <span class="token keyword">THEN</span> <span class="token keyword">RETURN</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSEIF</span> score<span class="token operator">&gt;=</span><span class="token number">80</span> <span class="token keyword">THEN</span> <span class="token keyword">RETURN</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSEIF</span> score<span class="token operator">&gt;=</span><span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token keyword">RETURN</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSE</span> <span class="token keyword">RETURN</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210911094839802.png" alt="image-20210911094839802" tabindex="0" loading="lazy"><figcaption>image-20210911094839802</figcaption></figure><h2 id="_3-循环结构" tabindex="-1"><a class="header-anchor" href="#_3-循环结构" aria-hidden="true">#</a> 3. 循环结构</h2><h3 id="_3-1-分类" tabindex="-1"><a class="header-anchor" href="#_3-1-分类" aria-hidden="true">#</a> 3.1 分类</h3><p><strong>（1）while</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>【标签:】<span class="token keyword">WHILE</span> 循环条件 <span class="token keyword">do</span>
    循环体<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">WHILE</span>【标签】<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）loop --- 可以用来实现简单的死循环</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>【标签:】<span class="token keyword">LOOP</span>
    循环体<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">LOOP</span>【标签】<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）repeat</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>【标签:】<span class="token keyword">REPEAT</span>
    循环体<span class="token punctuation">;</span>
UNTIL 结束循环的条件
<span class="token keyword">END</span> <span class="token keyword">WHILE</span>【标签】<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-循环控制" tabindex="-1"><a class="header-anchor" href="#_3-2-循环控制" aria-hidden="true">#</a> 3.2 循环控制</h3><p>（1）iterate 类似于 continue，继续，结束本次循环，继续下一次</p><p>（2）leave 类似于 break，跳出，结束当前所在的循环</p><h3 id="_3-3-案例演示-主要演示-while" tabindex="-1"><a class="header-anchor" href="#_3-3-案例演示-主要演示-while" aria-hidden="true">#</a> 3.3 案例演示 --- 主要演示 while</h3><p><strong>（1）不添加循环控制</strong></p><p>案例1：批量插入，根据传入的次数往 admin 表中插入记录</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test_while1<span class="token punctuation">(</span><span class="token operator">IN</span> count <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">DECLARE</span> i <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">WHILE</span> i<span class="token operator">&lt;=</span>count <span class="token keyword">DO</span>
		<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> admin<span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">WHILE</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210911100643012.png" alt="image-20210911100643012" tabindex="0" loading="lazy"><figcaption>image-20210911100643012</figcaption></figure><p><strong>（2）添加 leave 语句</strong></p><p>案例2：批量插入，根据传入的次数往 admin 表中插入记录，如果次数&gt;20就停止插入记录</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test_while2<span class="token punctuation">(</span><span class="token operator">IN</span> count <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">DECLARE</span> i <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>
	a:<span class="token keyword">WHILE</span> i<span class="token operator">&lt;=</span>count <span class="token keyword">DO</span>
		<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> admin<span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">IF</span> i<span class="token operator">&gt;=</span><span class="token number">20</span> <span class="token keyword">THEN</span> <span class="token keyword">LEAVE</span> a<span class="token punctuation">;</span>
		<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">WHILE</span> a<span class="token punctuation">;</span>
<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210911101032790.png" alt="image-20210911101032790" tabindex="0" loading="lazy"><figcaption>image-20210911101032790</figcaption></figure><p><strong>（3）添加 iterate 语句</strong></p><p>案例3：批量插入，根据传入的次数往 admin 表中插入记录，只插入偶数次</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test_while3<span class="token punctuation">(</span><span class="token operator">IN</span> count <span class="token keyword">INT</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">DECLARE</span> i <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">;</span>
	a:<span class="token keyword">WHILE</span> i<span class="token operator">&lt;=</span>count <span class="token keyword">DO</span>
		<span class="token keyword">SET</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">IF</span> <span class="token function">MOD</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token number">0</span> <span class="token keyword">THEN</span> <span class="token keyword">ITERATE</span> a<span class="token punctuation">;</span>
		<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> admin<span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">WHILE</span> a<span class="token punctuation">;</span>
<span class="token keyword">END</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210911101152892.png" alt="image-20210911101152892" tabindex="0" loading="lazy"><figcaption>image-20210911101152892</figcaption></figure>`,52),o=[t];function l(c,i){return n(),a("div",null,o)}const d=s(p,[["render",l],["__file","mysql-basic-15.html.vue"]]);export{d as default};