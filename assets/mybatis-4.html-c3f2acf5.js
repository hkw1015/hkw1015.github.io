import{_ as n,Z as a,$ as s,a5 as t}from"./framework-1fb77053.js";const e={},p=t(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>MyBatis 框架的动态 SQL 技术是一种根据特定条件动态拼接 SQL 语句的功能，它存在的意义是为了解决拼接 SQL 语句字符串时的痛点问题。</p><blockquote><p>One of the most powerful features of MyBatis has always been its Dynamic SQL capabilities. If you have any experience with JDBC or any similar framework, you understand how painful it is to conditionally concatenate strings of SQL together, making sure not to forget spaces or to omit a comma at the end of a list of columns. Dynamic SQL can be downright painful to deal with.</p><p>MyBatis的一个强大的特性之一通常是它的动态 SQL 能力。如果你有使用 JDBC 或其他相似框架的经验，你就明白条件地串联 SQL 字符串在一起是多么的痛苦，确保不能忘了空格或在列表的最后省略逗号。动态 SQL 可以彻底处理这种痛苦。</p></blockquote><h2 id="_2-if-和-where-标签" tabindex="-1"><a class="header-anchor" href="#_2-if-和-where-标签" aria-hidden="true">#</a> 2. if 和 where 标签</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- List&lt;Employee&gt; selectEmployeeByCondition(Employee employee); --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectEmployeeByCondition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.hkw.mybatis.entity.Employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select emp_id,emp_name,emp_salary from t_emp
	<span class="token comment">&lt;!-- where标签会自动去掉“标签体内前面多余的and/or” --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 使用if标签，让我们可以有选择的加入SQL语句的片段。这个SQL语句片段是否要加入整个SQL语句，就看if标签判断的结果是否为true --&gt;</span>
		<span class="token comment">&lt;!-- 在if标签的test属性中，可以访问实体类的属性，不可以访问数据库表的字段 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 在if标签内部，需要访问接口的参数时还是正常写#{} --&gt;</span>
			or emp_name = #{empName}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empSalary <span class="token entity named-entity" title="&gt;">&amp;gt;</span> 2000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			or emp_salary &gt; #{empSalary}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!--
		 第一种情况：所有条件都满足 WHERE emp_name = ? or emp_salary &gt; ?
		 第二种情况：部分条件满足 WHERE emp_salary &gt; ?
		 第三种情况：所有条件都不满足 没有where子句
		 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-set-标签" tabindex="-1"><a class="header-anchor" href="#_3-set-标签" aria-hidden="true">#</a> 3. set 标签</h2><h3 id="_3-1-相关业务需求举例" tabindex="-1"><a class="header-anchor" href="#_3-1-相关业务需求举例" aria-hidden="true">#</a> 3.1 相关业务需求举例</h3><p>实际开发时，对一个实体类对象进行更新，往往不是更新所有字段，而是更新一部分字段，此时页面上的表单往往不会给不修改的字段提供表单项。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5232<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	
	年  龄：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userAge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
	性  别：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userGender<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
	坐  标：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userPosition<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
	<span class="token comment">&lt;!-- 用户名：&lt;input type=&quot;text&quot; name=&quot;userName&quot; /&gt;&lt;br/&gt;   --&gt;</span>
	<span class="token comment">&lt;!-- 余  额：&lt;input type=&quot;text&quot; name=&quot;userBalance&quot; /&gt;&lt;br/&gt;--&gt;</span>
	<span class="token comment">&lt;!-- 等  级：&lt;input type=&quot;text&quot; name=&quot;userGrade&quot; /&gt;&lt;br/&gt;  --&gt;</span>
	
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如上面的表单，如果服务器端接收表单时，使用的是 User 这个实体类，那么 userName、userBalance、userGrade 接收到的数据就是 null。</p><p>如果不加判断，直接用 User 对象去更新数据库，在 Mapper 配置文件中又是每一个字段都更新，那就会把 userName、userBalance、userGrade 设置为 null 值，从而造成数据库表中对应数据被破坏。</p><p>此时需要我们在 Mapper 配置文件中，对 update 语句的 set 子句进行定制，此时就可以使用动态 SQL 的 set 标签。</p><h3 id="_3-2-实际配置方式" tabindex="-1"><a class="header-anchor" href="#_3-2-实际配置方式" aria-hidden="true">#</a> 3.2 实际配置方式</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- void updateEmployeeDynamic(Employee employee); --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateEmployeeDynamic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	update t_emp
	<span class="token comment">&lt;!-- set emp_name = #{empName},emp_salary = #{empSalary} --&gt;</span>
	<span class="token comment">&lt;!-- 使用set标签动态管理set子句，并且动态去掉两端多余的逗号 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>set</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_name = #{empName},
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empSalary <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 3000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_salary = #{empSalary},
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>set</span><span class="token punctuation">&gt;</span></span>
	where emp_id = #{empId}
	<span class="token comment">&lt;!--
		 第一种情况：所有条件都满足 SET emp_name = ?, emp_salary = ?
		 第二种情况：部分条件满足 SET emp_salary = ?
		 第三种情况：所有条件都不满足 update t_emp where emp_id = ?
			没有set子句的update语句会导致SQL语法错误
	 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-trim-标签" tabindex="-1"><a class="header-anchor" href="#_4-trim-标签" aria-hidden="true">#</a> 4. trim 标签</h2><p>使用 trim 标签控制条件部分两端是否包含某些字符。</p><ul><li>prefix 属性：指定要动态添加的前缀</li><li>suffix 属性：指定要动态添加的后缀</li><li>prefixOverrides 属性：指定要动态去掉的前缀，使用 &quot;|&quot; 分隔有可能的多个值</li><li>suffixOverrides 属性：指定要动态去掉的后缀，使用 &quot;|&quot; 分隔有可能的多个值</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- List&lt;Employee&gt; selectEmployeeByConditionByTrim(Employee employee); --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectEmployeeByConditionByTrim<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.hkw.mybatis.entity.Employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select emp_id,emp_name,emp_age,emp_salary,emp_gender
	from t_emp
	<span class="token comment">&lt;!-- prefix属性指定要动态添加的前缀 --&gt;</span>
	<span class="token comment">&lt;!-- suffix属性指定要动态添加的后缀 --&gt;</span>
	<span class="token comment">&lt;!-- prefixOverrides属性指定要动态去掉的前缀，使用“|”分隔有可能的多个值 --&gt;</span>
	<span class="token comment">&lt;!-- suffixOverrides属性指定要动态去掉的后缀，使用“|”分隔有可能的多个值 --&gt;</span>
	<span class="token comment">&lt;!-- 当前例子用where标签实现更简洁，但是trim标签更灵活，可以用在任何有需要的地方 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>where<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>and|or<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_name=#{empName} and
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empSalary <span class="token entity named-entity" title="&gt;">&amp;gt;</span> 3000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_salary&gt;#{empSalary} and
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empAge <span class="token entity named-entity" title="&lt;">&amp;lt;</span>= 20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_age=#{empAge} or
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empGender == &#39;male&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			emp_gender=#{empGender}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-choose-when-otherwise-标签" tabindex="-1"><a class="header-anchor" href="#_5-choose-when-otherwise-标签" aria-hidden="true">#</a> 5. choose / when / otherwise 标签</h2><p>在多个分支条件中，仅执行一个。</p><ul><li>从上到下依次执行条件判断</li><li>遇到的第一个满足条件的分支会被采纳</li><li>被采纳分支后面的分支都将不被考虑</li><li>如果所有的 when 分支都不满足，那么就执行 otherwise 分支</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- List&lt;Employee&gt; selectEmployeeByConditionByChoose(Employee employee); --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectEmployeeByConditionByChoose<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.hkw.mybatis.entity.Employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select emp_id,emp_name,emp_salary from t_emp
	where
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>emp_name = #{empName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empSalary <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 3000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>emp_salary <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherwise</span><span class="token punctuation">&gt;</span></span>1 = 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherwise</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--
	 第一种情况：第一个 when 满足条件 where emp_name = ?
	 第二种情况：第二个 when 满足条件 where emp_salary &lt; 3000
	 第三种情况：两个 when 都不满足 where 1 = 1 执行了 otherwise
	 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-foreach-标签" tabindex="-1"><a class="header-anchor" href="#_6-foreach-标签" aria-hidden="true">#</a> 6. foreach 标签</h2><h3 id="_6-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_6-1-基本用法" aria-hidden="true">#</a> 6.1 基本用法</h3><p>用批量插入举例</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--
    collection属性：要遍历的集合
    item属性：遍历集合的过程中能得到每一个具体对象，在item属性中设置一个名字，将来通过这个名字引用遍历出来的对象
    separator属性：指定当foreach标签的标签体重复拼接字符串时，各个标签体字符串之间的分隔符
    open属性：指定整个循环把字符串拼好后，字符串整体的前面要添加的字符串
    close属性：指定整个循环把字符串拼好后，字符串整体的后面要添加的字符串
    index属性：这里起一个名字，便于后面引用
        遍历List集合，这里能够得到List集合的索引值
        遍历Map集合，这里能够得到Map集合的key
 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>values<span class="token punctuation">&quot;</span></span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myIndex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 在foreach标签内部如果需要引用遍历得到的具体的一个对象，需要使用item属性声明的名称 --&gt;</span>
    (#{emp.empName},#{myIndex},#{emp.empSalary},#{emp.empGender})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-批量更新时的注意点" tabindex="-1"><a class="header-anchor" href="#_6-2-批量更新时的注意点" aria-hidden="true">#</a> 6.2 批量更新时的注意点</h3><p>上面批量插入的例子本质上是一条 SQL 语句，而实现批量更新则需要多条 SQL 语句拼起来，用分号分开，也就是一次性发送多条 SQL 语句让数据库执行。此时需要在 <strong><span style="color:blue;">数据库连接信息的 URL 地址</span></strong> 中设置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">dev.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/mybatis-example?allowMultiQueries=true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对应的 foreach 标签如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- int updateEmployeeBatch(@Param(&quot;empList&quot;) List&lt;Employee&gt; empList) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateEmployeeBatch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        update t_emp set emp_name=#{emp.empName} where emp_id=#{emp.empId}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-关于-foreach-标签的-collection-属性" tabindex="-1"><a class="header-anchor" href="#_6-3-关于-foreach-标签的-collection-属性" aria-hidden="true">#</a> 6.3 关于 foreach 标签的 collection 属性</h3><p>如果没有给接口中 List 类型的参数使用 @Param 注解指定一个具体的名字，那么在 collection 属性中默认可以使用 collection 或 list 来应用这个 list 集合。这一点可以通过异常信息看出来：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Parameter</span> &#39;empList&#39; not <span class="token class-name"><span class="token namespace">found<span class="token punctuation">.</span></span> Available</span> parameters are <span class="token punctuation">[</span>collection<span class="token punctuation">,</span> list<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在实际开发中，为了避免隐晦的表达造成一定的误会，建议使用 @Param 注解明确声明变量的名称，然后在 foreach 标签的 collection 属性中按照 @Param 注解指定的名称来引用传入的参数。</p><h2 id="_7-sql-标签" tabindex="-1"><a class="header-anchor" href="#_7-sql-标签" aria-hidden="true">#</a> 7. sql 标签</h2><h3 id="_7-1-抽取重复的-sql-片段" tabindex="-1"><a class="header-anchor" href="#_7-1-抽取重复的-sql-片段" aria-hidden="true">#</a> 7.1 抽取重复的 SQL 片段</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 使用sql标签抽取重复出现的SQL片段 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mySelectSql<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select emp_id,emp_name,emp_age,emp_salary,emp_gender from t_emp
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-引用已抽取的-sql-片段" tabindex="-1"><a class="header-anchor" href="#_7-2-引用已抽取的-sql-片段" aria-hidden="true">#</a> 7.2 引用已抽取的 SQL 片段</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 使用include标签引用声明的SQL片段 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mySelectSql<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,40),l=[p];function o(c,i){return a(),s("div",null,l)}const r=n(e,[["render",o],["__file","mybatis-4.html.vue"]]);export{r as default};
