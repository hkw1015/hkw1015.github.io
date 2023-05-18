import{_ as n,Z as s,$ as a,a5 as e}from"./framework-1fb77053.js";const i={},l=e(`<h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h2><h3 id="_1-1-含义" tabindex="-1"><a class="header-anchor" href="#_1-1-含义" aria-hidden="true">#</a> 1.1 含义</h3><ul><li>出现在其他语句中的 SELECT 语句，称为子查询或内查询</li><li>内部嵌套其他 SELECT 语句的查询，称为主查询或外查询</li></ul><h3 id="_1-2-示例" tabindex="-1"><a class="header-anchor" href="#_1-2-示例" aria-hidden="true">#</a> 1.2 示例</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	first_name 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	department_id <span class="token operator">IN</span> <span class="token punctuation">(</span> 
    	<span class="token keyword">SELECT</span>
    		department_id 
    	<span class="token keyword">FROM</span>
		departments 
	<span class="token keyword">WHERE</span>
	location_id <span class="token operator">=</span> <span class="token number">1700</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-分类" tabindex="-1"><a class="header-anchor" href="#_1-3-分类" aria-hidden="true">#</a> 1.3 分类</h3><ul><li><strong>按子查询出现的位置分</strong><ul><li>（1）SELECT 后面 -- 仅支持标量子查询</li><li>（2）FROM 后面 --- 支持表子查询</li><li>（3）<strong>WHERE 或 HAVING 后面(★★★)</strong> --- 支持 标量子查询(单行)、列子查询(多行)、行子查询(较少)</li><li>（4）EXISTS 后面（相关子查询） --- 支持表子查询</li></ul></li><li><strong>按结果集的行列数不同分</strong><ul><li>（1）标量子查询（结果集只有一行一列）</li><li>（2）列子查询（结果集有一列多行）</li><li>（3）行子查询（结果集有一行多列）</li><li>（4）表子查询（结果集一般为多行多列）</li></ul></li></ul><h3 id="_1-4-特点" tabindex="-1"><a class="header-anchor" href="#_1-4-特点" aria-hidden="true">#</a> 1.4 特点</h3><ul><li>子查询放在小括号内</li><li>子查询一般放在比较条件的右侧</li><li>标量子查询，一般搭配着单行操作符使用 <ul><li>单行操作符：&gt; &lt; &gt;= &lt;= = &lt;&gt;</li></ul></li><li>列子查询，一般搭配着多行操作符使用 <ul><li>多行操作符：IN ANY/SOME ALL</li><li><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910143143193.png" alt="image-20210910143143193" tabindex="0" loading="lazy"><figcaption>image-20210910143143193</figcaption></li></ul></li><li>子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果</li></ul><h2 id="_2-子查询的使用" tabindex="-1"><a class="header-anchor" href="#_2-子查询的使用" aria-hidden="true">#</a> 2. 子查询的使用</h2><h3 id="_2-1-where-或-having-后面" tabindex="-1"><a class="header-anchor" href="#_2-1-where-或-having-后面" aria-hidden="true">#</a> 2.1 WHERE 或 HAVING 后面</h3><h4 id="_1、标量子查询-单行子查询" tabindex="-1"><a class="header-anchor" href="#_1、标量子查询-单行子查询" aria-hidden="true">#</a> 1、标量子查询（单行子查询）</h4><p><strong>示例1：谁的工资比Abel高?</strong></p><p>第一步：查询 Abel 的工资 ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	salary 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910143457178.png" alt="image-20210910143457178" tabindex="0" loading="lazy"><figcaption>image-20210910143457178</figcaption></figure><p>第二步，查询员工的信息，要求： salary&gt;①结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
	employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary 
<span class="token keyword">FROM</span> 
	employees 	
<span class="token keyword">WHERE</span> 
	salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span> 
		<span class="token keyword">SELECT</span> 
			salary 
		<span class="token keyword">FROM</span> 
		employees 
    <span class="token keyword">WHERE</span> 
		last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910143556827.png" alt="image-20210910143556827" tabindex="0" loading="lazy"><figcaption>image-20210910143556827</figcaption></figure><p><strong>示例2：返回job_id与141号员工相同，salary比143号员工多的 姓名，job_id和工资</strong></p><p>第一步，查询141号员工的job_id ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	job_id 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	employee_id <span class="token operator">=</span> <span class="token number">141</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，查询143号员工的salary ②</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	salary 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	employee_id <span class="token operator">=</span> <span class="token number">143</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，查询员工的姓名，job_id和工资，要求：job_id=①结果，salary&gt;②结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> job_id<span class="token operator">=</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		job_id 
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
		employee_id <span class="token operator">=</span> <span class="token number">141</span>
<span class="token punctuation">)</span> <span class="token operator">AND</span> salary<span class="token operator">&gt;</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		salary 
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
		employee_id <span class="token operator">=</span> <span class="token number">143</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910143818361.png" alt="image-20210910143818361" tabindex="0" loading="lazy"><figcaption>image-20210910143818361</figcaption></figure><p><strong>示例3：返回工资最少的员工的last_name,job_id和salary</strong></p><p>第一步，查询员工中的最少工资 ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">MIN</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，查询员工的last_name,job_id和salary，要求：工资=①结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> salary<span class="token operator">=</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">MIN</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910143926895.png" alt="image-20210910143926895" tabindex="0" loading="lazy"><figcaption>image-20210910143926895</figcaption></figure><p><strong>示例4：查询最低工资大于50号部门最低工资的部门id和其最低工资</strong></p><p>第一步，查询50号部门的最低工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">MIN</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span> 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，查询各个部门的最低工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三步，查询部门id和其最低工资，要求：最低工资大于50号部门最低工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">MIN</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
		department_id <span class="token operator">=</span> <span class="token number">50</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910144111355.png" alt="image-20210910144111355" tabindex="0" loading="lazy"><figcaption>image-20210910144111355</figcaption></figure><p><strong>非法使用标量子查询的情况：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		salary <span class="token comment">// 这里返回了多行</span>
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
		department_id <span class="token operator">=</span> <span class="token number">50</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id <span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">MIN</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span>
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
		department_id <span class="token operator">=</span> <span class="token number">1000</span> <span class="token comment">// 使用了不存在条件</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、列子查询-多行子查询" tabindex="-1"><a class="header-anchor" href="#_2、列子查询-多行子查询" aria-hidden="true">#</a> 2、列子查询（多行子查询）</h4><p><strong>示例1：查询location_id是1400或1700部门中的所有员工姓名</strong></p><p>第一步，查询location_id是1400或1700的所有部门编号 ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	department_id 
<span class="token keyword">FROM</span>
	departments 
<span class="token keyword">WHERE</span>
	location_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token number">1400</span><span class="token punctuation">,</span> <span class="token number">1700</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，查询员工姓名，要求：部门编号=①结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		department_id 
	<span class="token keyword">FROM</span>
		departments 
	<span class="token keyword">WHERE</span>
		location_id <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token number">1400</span><span class="token punctuation">,</span> <span class="token number">1700</span> <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910144411217.png" alt="image-20210910144411217" tabindex="0" loading="lazy"><figcaption>image-20210910144411217</figcaption></figure><p><strong>示例2：查询其他工种中比job_id为&#39;IT_PROG&#39;工种任一工资低的员工号、姓名、job_id以及salary</strong></p><p>第一步，查询job_id为&#39;IT_PROG&#39;工种的任一工资 ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	salary 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，查询其他工种的员工号、姓名、job_id以及salary，要求：salary比①结果任一工资低</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	employee_id<span class="token punctuation">,</span>
	last_name<span class="token punctuation">,</span>
	job_id<span class="token punctuation">,</span>
	salary 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	salary <span class="token operator">&lt;</span> <span class="token keyword">ANY</span> <span class="token punctuation">(</span> 
	<span class="token keyword">SELECT</span>
		salary 
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">WHERE</span>
	job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910144553635.png" alt="image-20210910144553635" tabindex="0" loading="lazy"><figcaption>image-20210910144553635</figcaption></figure><h4 id="_3、行子查询-结果集为一行多列或多列多行" tabindex="-1"><a class="header-anchor" href="#_3、行子查询-结果集为一行多列或多列多行" aria-hidden="true">#</a> 3、行子查询（结果集为一行多列或多列多行）</h4><p><strong>示例1：查询员工编号最小并且工资最高的员工信息</strong></p><p>第一步，查询最小的员工编号 ①</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，查询最高工资 ②</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三步，查询员工信息，要求：员工编号=①结果，工资=②结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> <span class="token punctuation">(</span>employee_id<span class="token punctuation">,</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-select-后面" tabindex="-1"><a class="header-anchor" href="#_2-2-select-后面" aria-hidden="true">#</a> 2.2 SELECT 后面</h3><p>示例1：查询每个部门的员工个数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span>d<span class="token punctuation">.</span>department_name<span class="token punctuation">,</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		employees <span class="token keyword">AS</span> e 
	<span class="token keyword">WHERE</span>
		e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span> <span class="token keyword">AS</span> 个数
<span class="token keyword">FROM</span> departments <span class="token keyword">AS</span> d<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910145127945.png" alt="image-20210910145127945" tabindex="0" loading="lazy"><figcaption>image-20210910145127945</figcaption></figure><p>示例2：查询员工号=102的部门名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		d<span class="token punctuation">.</span>department_name 
	<span class="token keyword">FROM</span>
		departments <span class="token keyword">AS</span> d 
	<span class="token keyword">WHERE</span>
		d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span> <span class="token keyword">AS</span> 部门名
<span class="token keyword">FROM</span>
	employees <span class="token keyword">AS</span> e 
<span class="token keyword">WHERE</span>
	e<span class="token punctuation">.</span>employee_id <span class="token operator">=</span> <span class="token number">102</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910145158740.png" alt="image-20210910145158740" tabindex="0" loading="lazy"><figcaption>image-20210910145158740</figcaption></figure><h3 id="_2-3-from-后面" tabindex="-1"><a class="header-anchor" href="#_2-3-from-后面" aria-hidden="true">#</a> 2.3 FROM 后面</h3><p><strong>将子查询结果充当一张表，要求必须起别名</strong></p><p>示例1：查询每个部门的平均工资的工资等级</p><p>第一步，查询每个部门的平均工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">AVG</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span><span class="token punctuation">,</span>
	department_id 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	department_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 第二步，查询工资等级</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> avg_dep<span class="token punctuation">.</span>dep<span class="token punctuation">,</span>g<span class="token punctuation">.</span>grade_level <span class="token keyword">FROM</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">AVG</span><span class="token punctuation">(</span> salary <span class="token punctuation">)</span> <span class="token keyword">AS</span> avg<span class="token punctuation">,</span>
		department_id <span class="token keyword">AS</span> dep 
	<span class="token keyword">FROM</span>
		employees 
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
		department_id
<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_dep
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> job_grades <span class="token keyword">AS</span> g
<span class="token keyword">ON</span> avg_dep<span class="token punctuation">.</span>avg <span class="token operator">BETWEEN</span> g<span class="token punctuation">.</span>lowest_sal <span class="token operator">AND</span> g<span class="token punctuation">.</span>highest_sal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910150603085.png" alt="image-20210910150603085" tabindex="0" loading="lazy"><figcaption>image-20210910150603085</figcaption></figure><h3 id="_2-4-exist-后面-相关子查询" tabindex="-1"><a class="header-anchor" href="#_2-4-exist-后面-相关子查询" aria-hidden="true">#</a> 2.4 EXIST 后面（相关子查询）</h3><p><strong>语法</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">EXISTS</span><span class="token punctuation">(</span>完整的<span class="token keyword">SELECT</span>查询语句<span class="token punctuation">)</span>
结果：返回<span class="token number">1</span>或<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> employee_id <span class="token keyword">FROM</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910150926984.png" alt="image-20210910150926984" tabindex="0" loading="lazy"><figcaption>image-20210910150926984</figcaption></figure><p>示例1：查询有员工的部门名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_name <span class="token keyword">FROM</span> departments <span class="token keyword">AS</span> d <span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token operator">*</span>
	<span class="token keyword">FROM</span>
		employees <span class="token keyword">AS</span> e 
	<span class="token keyword">WHERE</span>
		d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：查询没有女朋友的男神信息</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> boyName <span class="token keyword">FROM</span> boys <span class="token keyword">AS</span> bo <span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token operator">*</span> 
	<span class="token keyword">FROM</span>
		beauty <span class="token keyword">AS</span> b 
	<span class="token keyword">WHERE</span>
		b<span class="token punctuation">.</span>boyfriend_id <span class="token operator">=</span> bo<span class="token punctuation">.</span>id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),t=[l];function p(o,d){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","mysql-basic-5.html.vue"]]);export{r as default};
