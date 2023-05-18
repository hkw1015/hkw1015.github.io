import{_ as n,Z as a,$ as s,a5 as t}from"./framework-1fb77053.js";const e={},p=t(`<p>根据 MyBatisPlus 的 AutoSqlInjector 可以自定义各种你想要的 SQL，注入到全局中，相当于自定义 MyBatisPlus 自动注入的方法。</p><h2 id="_1-autosqlinjector" tabindex="-1"><a class="header-anchor" href="#_1-autosqlinjector" aria-hidden="true">#</a> 1. AutoSqlInjector</h2><ul><li><p>在 Mapper 接口中定义相关的 CRUD 方法</p><figure><img src="http://img.hl1015.top/blog/image-20211130163632225.png" alt="image-20211130163632225" tabindex="0" loading="lazy"><figcaption>image-20211130163632225</figcaption></figure></li><li><p>扩展 AutoSqlInjector --- inject 方法，实现 Mapper 接口中要注入的 SQL</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义全局操作
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySQLInjector</span> <span class="token keyword">extends</span> <span class="token class-name">AutoSqlInjector</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 扩展 inject 方法，完成自定义全局操作
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token class-name">Configuration</span> configuration<span class="token punctuation">,</span> <span class="token class-name">MapperBuilderAssistant</span> builderAssistant<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> mapperClass<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> modelClass<span class="token punctuation">,</span> <span class="token class-name">TableInfo</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 总体目标：将 EmployeeMapper 中定义的 selectAll，处理成对应的 MappedStatement 对象，加入到 configuration 对象中</span>
        <span class="token comment">// 1)注入的 SQL 语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,last_name,email,gender,age,version from &quot;</span> <span class="token operator">+</span> table<span class="token punctuation">.</span><span class="token function">getTableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2)注入的方法名，一定要与 EmployeeMapper 接口中的方法名一致</span>
        <span class="token class-name">String</span> method <span class="token operator">=</span> <span class="token string">&quot;selectAll&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 3)构造 SqlSource 对象</span>
        <span class="token class-name">SqlSource</span> sqlSource <span class="token operator">=</span> languageDriver<span class="token punctuation">.</span><span class="token function">createSqlSource</span><span class="token punctuation">(</span>configuration<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> modelClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4)构造一个查询的 MappedStatement，并加入到 configuration</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addSelectMappedStatement</span><span class="token punctuation">(</span>mapperClass<span class="token punctuation">,</span> method<span class="token punctuation">,</span> sqlSource<span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> table<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 MP 全局策略中，配置自定义注入器</p><figure><img src="http://img.hl1015.top/blog/image-20211130163517834.png" alt="image-20211130163517834" tabindex="0" loading="lazy"><figcaption>image-20211130163517834</figcaption></figure></li></ul><p>测试自定义全局方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义全局操作
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMySQLInjector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> employees <span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;employees = &quot;</span> <span class="token operator">+</span> employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20211130171232127.png" alt="image-20211130171232127" tabindex="0" loading="lazy"><figcaption>image-20211130171232127</figcaption></figure><h2 id="_2-自定义注入器的应用之逻辑删除" tabindex="-1"><a class="header-anchor" href="#_2-自定义注入器的应用之逻辑删除" aria-hidden="true">#</a> 2. 自定义注入器的应用之逻辑删除</h2><blockquote><p>假删除、逻辑删除：并不会真正地从数据库中将数据删除，而是将当前被删除的这条数据中的一个逻辑删除字段置为删除状态【tbl_employee -&gt; del_flag = 0 -&gt; 1】。</p><p>①所在包：com.baomidou.mybatisplus.mapper.LogicSqlInjector</p><p>②logicDeleteValue：逻辑已删除全局值</p><p>③logicNotDeleteValue：逻辑未删除全局值</p><p>④在 POJO 的逻辑删除字段添加 @TableLogic 注解</p><p>⑤会在 MP 自带查询和更新方法的 SQL 后面，追加【逻辑删除字段】=【logicNotDeleteValue 默认值】删除方法：deleteById() 和其他 delete 方法，底层 SQL 调用的是 update tbl_xxx set 【逻辑删除字段】 = 【logicDeleteValue 默认值】</p></blockquote><p><strong>（1）给 tbl_employee 表新增一个 逻辑删除标识（0-未删除 1-已删除）</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>mp<span class="token punctuation">\`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>tbl_employee<span class="token punctuation">\`</span></span> 
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">\`</span>del_flag<span class="token punctuation">\`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;逻辑删除标识 0-未删除 1-已删除&#39;</span> <span class="token keyword">AFTER</span> <span class="token identifier"><span class="token punctuation">\`</span>version<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20211130213559849.png" alt="image-20211130213559849" tabindex="0" loading="lazy"><figcaption>image-20211130213559849</figcaption></figure><p><strong>（2）在 MP 全局策略中，配置逻辑删除注入器</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 定义 MyBatis-Plus 的全局策略配置 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>globalConfiguration<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.baomidou.mybatisplus.entity.GlobalConfiguration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	...
	<span class="token comment">&lt;!-- 注入逻辑删除 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlInjector<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logicSqlInjector<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 逻辑已删除全局值默认值 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logicDeleteValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 逻辑未删除全局值默认值 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logicNotDeleteValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 定义 逻辑删除注入器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logicSqlInjector<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.baomidou.mybatisplus.mapper.LogicSqlInjector<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）实体类 Employee 添加 delFlag 字段，并添加上 @TableLogic 注解</strong></p><figure><img src="http://img.hl1015.top/blog/image-20211130215242234.png" alt="image-20211130215242234" tabindex="0" loading="lazy"><figcaption>image-20211130215242234</figcaption></figure><p><strong>（4）测试逻辑删除</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogicDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Integer</span> result <span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20211130215711729.png" alt="image-20211130215711729" tabindex="0" loading="lazy"><figcaption>image-20211130215711729</figcaption></figure><figure><img src="http://img.hl1015.top/blog/image-20211130215739091.png" alt="image-20211130215739091" tabindex="0" loading="lazy"><figcaption>image-20211130215739091</figcaption></figure><p><strong>（5）测试删除后的查询</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectAfterLogicDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Employee</span> employee <span class="token operator">=</span> employeeMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;employee = &quot;</span> <span class="token operator">+</span> employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20211130215951964.png" alt="image-20211130215951964" tabindex="0" loading="lazy"><figcaption>image-20211130215951964</figcaption></figure>`,22),o=[p];function l(c,i){return a(),s("div",null,o)}const r=n(e,[["render",l],["__file","mybatis-plus-8.html.vue"]]);export{r as default};