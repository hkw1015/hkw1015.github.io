import{_ as n,Z as a,$ as s,a5 as t}from"./framework-1fb77053.js";const p={},e=t(`<h2 id="_1-事务实现的分类" tabindex="-1"><a class="header-anchor" href="#_1-事务实现的分类" aria-hidden="true">#</a> 1. 事务实现的分类</h2><ul><li><p><strong>声明式事务</strong></p><p>指的是通过注解的方式对事务的各种特性进行控制和管理</p></li><li><p><strong>编程式事务</strong></p><p>指的是通过编码的方式实现事务的声明</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必须自己 commit()</span>
    <span class="token comment">// 一系列业务相关的 jdbc 操作</span>
    conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提交事务</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放连接</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-spring-声明式事务的介绍" tabindex="-1"><a class="header-anchor" href="#_2-spring-声明式事务的介绍" aria-hidden="true">#</a> 2. Spring 声明式事务的介绍</h2><ul><li><p><strong>事务添加到 JavaEE 三层结构中的 Service 层（业务逻辑层）</strong></p></li><li><p><strong>Spring 中进行声明式事务管理，底层使用的是 AOP 原理</strong></p></li><li><p><strong>PlatformTransactionManager 类的简单介绍</strong></p><p><strong><span style="color:red;">PlatformTransactionManager 接口，提供所有事务的操作规范。我们使用 DataSource 数据库连接池，使用的事务管理器是 DataSourceTransactionManager 类</span></strong></p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824000039726.png" alt="image-20210824000039726" tabindex="0" loading="lazy"><figcaption>image-20210824000039726</figcaption></figure><p>实现事务管理的底层 AOP 原理图</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824000311094.png" alt="image-20210824000311094" tabindex="0" loading="lazy"><figcaption>image-20210824000311094</figcaption></figure></li></ul><h2 id="_3-声明式事务管理-注解-transactional-的使用" tabindex="-1"><a class="header-anchor" href="#_3-声明式事务管理-注解-transactional-的使用" aria-hidden="true">#</a> 3. 声明式事务管理（注解 @Transactional）的使用</h2><ul><li><p><strong>配置 Spring 事务需要的切面类 DataSourceTransactionManager</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 配置DataSourceTransactionManager事务管理器===事务的切面类 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSourceTransactionManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.jdbc.datasource.DataSourceTransactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>在 Spring 配置文件中加入 tx 名称空间</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824000759072.png" alt="image-20210824000759072" tabindex="0" loading="lazy"><figcaption>image-20210824000759072</figcaption></figure></li><li><p><strong>配置启用 Spring 的事务注解 @Transactional</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 配置启用spring的事务注解<span class="token annotation punctuation">@Transaction</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>tx<span class="token operator">:</span>annotation<span class="token operator">-</span>driven transaction<span class="token operator">-</span>manager<span class="token operator">=</span><span class="token string">&quot;dataSourceTransactionManager&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>tx<span class="token operator">:</span>annotation<span class="token operator">-</span>driven<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>在 service 层中需要的业务类或方法上添加 @Transactional 注解</strong></p><p>（1）@Transactional，这个注解可以添加到类上，也可以添加到方法上</p><p>（2）如果把这个注解添加到类上，则为这个类里的所有方法都添加事务</p><p>（3）如果把这个注解添加到方法上，则为这个方法添加事务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">updateUser</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>@Transactional 中的属性</strong></p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824001517470.png" alt="image-20210824001517470" tabindex="0" loading="lazy"><figcaption>image-20210824001517470</figcaption></figure><p>（1）<strong><span style="color:red;">propagation：事务传播行为</span></strong></p><p>多个事务方法之间的调用，是通过 <strong>事务传播行为</strong> 进行管理的</p><p>事务的传播特性，有以下几种类型：</p><table><thead><tr><th>传播属性</th><th>描述</th></tr></thead><tbody><tr><td><strong>REQUIRED</strong></td><td>如果有事务在运行，当前的方法就在这个事务内运行，否则，就启动一个新的事务，并在自己的事务内运行</td></tr><tr><td><strong>REQUIRES_NEW</strong></td><td>当前的方法必须启动新事务，并在它自己的事务内运行，如果有事务正在运行，应该将它挂起</td></tr><tr><td>SUPPORTS</td><td>如果有事务在运行，当前的方法就在这个事务内运行，否则它可以不运行在事务中</td></tr><tr><td>NOT_SUPPORTED</td><td>当前的方法不应该运行在事务中，如果有运行的事务，将它挂起</td></tr><tr><td>MANDATORY</td><td>当前的方法必须运行在事务内部，如果没有正在运行的事务，就抛出异常</td></tr><tr><td>NEVER</td><td>当前的方法不应该运行在事务中，如果有运行的事务，就抛出异常</td></tr><tr><td>NESTED</td><td>如果有事务在运行，当前的方法就应该在这个事务的嵌套事务内运行，否则，就启动一个新的事务，并在它自己的事务内运行</td></tr></tbody></table><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824002803882.png" alt="image-20210824002803882" tabindex="0" loading="lazy"><figcaption>image-20210824002803882</figcaption></figure><p>（2）<strong><span style="color:red;">isolation：事务隔离级别</span></strong></p><p>MySQL 数据库提供 4 种隔离级别</p><table><thead><tr><th style="text-align:left;">隔离级别</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>READ UNCOMMITED</strong>（读未提交）</td><td>允许事务读取未被其他事务提交的变更。脏读、不可重复读、幻读都会出现。</td></tr><tr><td style="text-align:left;"><strong>READ COMMITED</strong>（读已提交）</td><td>只允许事务读取已经被其他事务提交的变更。可以避免脏读、但不可重复读和幻读问题仍然可能出现。</td></tr><tr><td style="text-align:left;"><strong>REPEATABLE READ</strong>（可重复读）</td><td>确保事务可以从一个字段种读取相同的值，在这个事务持续期间，禁止其他事务对这个字段进行更新，可以避免脏读和不可重复读，但幻读的问题仍然存在。</td></tr><tr><td style="text-align:left;"><strong>SERIALIZABLE</strong>（串行化）</td><td>确保事务可以从表中读取相同的行，在这个事务持续期间，禁止其他事务对该表执行查询、更新和删除操作，所有并发问题都能避免，但性能十分低下。</td></tr></tbody></table><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210824003818381.png" alt="image-20210824003818381" tabindex="0" loading="lazy"><figcaption>image-20210824003818381</figcaption></figure><p>（3）<strong><span style="color:red;">timeout：超时时间</span></strong></p><p>①事务需要在一定时间内进行提交，如果不提交就进行回滚</p><p>②默认值是 -1，设置时间以秒为单位进行计算</p><p>（4）<strong><span style="color:red;">readOnly：是否只读</span></strong></p><p>①读：查询操作 写：添加/修改/删除</p><p>②readOnly 默认值 false，表示可以查询，可以添加/修改/删除</p><p>③设置 readOnly 为 true，只能做查询操作</p><p>（5）<strong><span style="color:red;">rollbackFor：回滚</span></strong></p><p>设置出现哪些异常时进行事务回滚</p><p>（6）<strong><span style="color:red;">noRollbackFor：不回滚</span></strong></p><p>设置出现哪些异常时不进行事务回滚</p></li></ul><h2 id="_4-xml-配置式事务声明" tabindex="-1"><a class="header-anchor" href="#_4-xml-配置式事务声明" aria-hidden="true">#</a> 4. xml 配置式事务声明</h2><p>第一步：去掉所有的 @Transactional 注解</p><p>第二步：在 Spring 配置文件中做如下配置</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--1 创建事务管理器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.jdbc.datasource.DataSourceTransactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--注入数据源--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--2 配置通知--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>advice</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txadvice<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--配置事务参数--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--指定哪种规则的方法上面添加事务--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>method</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">propagation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>REQUIRED<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>attributes</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>advice</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--3 配置切入点和切面--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--配置切入点--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>pointcut</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">expression</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>execution(*com.hkw.spring5.service.*.*(..))<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--配置切面--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>advisor</span> <span class="token attr-name">advice-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txadvice<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-完全注解声明式事务" tabindex="-1"><a class="header-anchor" href="#_5-完全注解声明式事务" aria-hidden="true">#</a> 5. 完全注解声明式事务</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建配置类，使用配置类替代 xml 配置文件</span>
<span class="token annotation punctuation">@Configuration</span> <span class="token comment">//配置类</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.hkw&quot;</span><span class="token punctuation">)</span> <span class="token comment">//组件扫描</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span> <span class="token comment">//开启事务</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TxConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建数据库连接池</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidDataSource</span> <span class="token function">getDruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DruidDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/book?serverTimezone=GMT%2B8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 创建 JdbcTemplate 对象</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JdbcTemplate</span> <span class="token function">getJdbcTemplate</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//到 ioc 容器中根据类型找到 dataSource</span>
        <span class="token class-name">JdbcTemplate</span> jdbcTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//注入 dataSource</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> jdbcTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 创建事务管理器</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSourceTransactionManager</span> <span class="token function">getDataSourceTransactionManager</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DataSourceTransactionManager</span> transactionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceTransactionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transactionManager<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> transactionManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","spring-tx.html.vue"]]);export{r as default};