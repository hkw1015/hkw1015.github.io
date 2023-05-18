import{_ as n,Z as s,$ as a,a5 as t}from"./framework-1fb77053.js";const e={},p=t(`<h2 id="_1-jdbc-数据库连接池的必要性" tabindex="-1"><a class="header-anchor" href="#_1-jdbc-数据库连接池的必要性" aria-hidden="true">#</a> 1. JDBC 数据库连接池的必要性</h2><p>（1）在使用开发基于数据库的 web 程序时，传统的设计模式是按以下步骤：</p><ul><li>①在主程序(如 servlet、beans)中建立数据库连接</li><li>②进行 sql 操作</li><li>③断开数据库连接</li></ul><p>（2）这种模式开发，存在的问题：</p><ul><li>①<strong>普通的 JDBC 数据库连接使用 DriverManager 来获取</strong>，每次向数据库建立连接的时候都要将 Connection 加载到内存中，再验证用户名和密码(得花费0.05s~1s的时间)。需要数据库连接的时候，就向数据库要求一个，执行完成后再断开连接。这样的方式将会消耗大量的资源和时间。数据库的连接资源并没有得到很好的利用。若同时有几百人甚至几千人在线，频繁的进行数据库连接操作将占用很多的系统资源，严重的甚至会造成服务器的崩溃。</li><li>②<strong>对于每一次数据库连接，使用完后都得断开</strong>。否则，如果程序出现异常而未能关闭，将会导致数据库系统中的内存泄露，最终将导致重启数据库。(回忆：何为 Java 的内存泄露?)</li><li>③<strong>这种开发不能控制被创建的连接对象数</strong>，系统资源会被毫无顾及地分配出去，如果连接过多，也可能导致内存泄漏，服务器崩溃。</li></ul><h2 id="_2-数据库连接池技术" tabindex="-1"><a class="header-anchor" href="#_2-数据库连接池技术" aria-hidden="true">#</a> 2. 数据库连接池技术</h2><p>（1）为解决传统开发中的数据库连接问题，可以采用数据库连接池技术。</p><p>（2）<strong>数据库连接池的基本思想</strong>：就是为数据库连接建立一个 &quot;缓冲池&quot;。预先在缓存池中放入一定数量的连接，当需要建立数据库连接时，只需从 &quot;缓冲池&quot; 中取出一个，使用完毕之后再放回去。</p><p>（3）<strong>数据库连接池</strong>负责分配、管理和释放数据库连接，它<strong>允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个</strong>。</p><p>（4）数据库连接池在初始化时将创建一定数量的数据库连接放到连接池中，这些数据库连接的数量是由<strong>最小数据库连接数</strong>来设定的。无论这些数据库连接是否使用，连接池都将一直保证至少拥有这么多的连接数量。连接池的最大数据库连接数量限定了这个连接池能占有的最大连接数，当应用程序向连接池请求的连接数超过最大连接数量时，这些请求将被加入到等待队列中。</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210914172610735.png" alt="image-20210914172610735" tabindex="0" loading="lazy"><figcaption>image-20210914172610735</figcaption></figure><p>（5）工作原理</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210914172631073.png" alt="image-20210914172631073" tabindex="0" loading="lazy"><figcaption>image-20210914172631073</figcaption></figure><p>（6）数据库连接池的优点</p><ul><li>①<strong>资源重用</strong><ul><li>由于数据库连接得以重用，避免了频繁创建，释放连接引起的大量性能开销。在减少系统消耗的基础上，另一方面也增加了系统运行环境的平稳性。</li></ul></li><li>②<strong>更快的系统反应速度</strong><ul><li>数据库连接池在初始化过程中，往往已经创建了若干数据库连接置于连接池中备用。此时连接的初始化工作均已完成。对于业务请求处理而言，直接利用现有可用连接，避免了数据库连接初始化和释放过程的时间开销，从而减少了系统的响应时间。</li></ul></li><li>③<strong>新的资源分配手段</strong><ul><li>对于多应用共享同一数据库的系统而言，可在应用层通过数据库连接池的配置，实现某一应用最大可用数据库连接数的限制，避免某一应用独占所有的数据库资源。</li></ul></li><li>④<strong>统一的连接管理，避免数据库连接泄露</strong><ul><li>在较为完善的数据库连接池实现中，可根据预先的占用超时设定，强制回收被占用连接，从而避免了常规数据库操作中可能出现的资源泄露。</li></ul></li></ul><h2 id="_3-多种开源的数据库连接池" tabindex="-1"><a class="header-anchor" href="#_3-多种开源的数据库连接池" aria-hidden="true">#</a> 3. 多种开源的数据库连接池</h2><p>（1）JDBC 的数据库连接池使用 javax.sql.DataSource 来表示，DataSource 只是一个接口，该接口通常由服务器（Weblogic，WebSphere，Tomcat）提供实现，也有一些开源组织提供实现。</p><ul><li>①<strong>DBCP</strong> 是 Apache 提供的数据库连接池。Tomcat服务器自带dbcp数据库连接池，速度相对 c3p0 较快，但因自身原因存在 BUG，Hibernate3 已不再提供支持。</li><li>②<strong>C3P0</strong> 是一个开源组织提供的一个数据库连接，速度相对较慢，稳定性还可以。Hibernate 官方推荐使用。</li><li>③<strong>Proxool</strong> 是 sourceforge 下的一个开源项目数据库连接池，有监控连接池的功能，稳定性较c3p0差一点。</li><li>④<strong>BoneCP</strong> 是一个开源组织提供的数据库连接池，速度快</li><li>⑤<strong>Druid</strong> 是阿里提供的数据库连接池，据说是集 DBCP、C3P0、Proxool 优点于一身的数据库连接池，但是速度不确定比 BoneCP 快。</li></ul><p>（2）DataSource 通常被称为数据源，它包含连接池和连接池管理两个部分，习惯上也经常把 DataSource 称为连接池。</p><p>（3）DataSource 用来取代 DriverManager 来获取 Connection，获取速度快，同时可以大幅度提高数据库访问速度。</p><p>（4）特别注意：</p><p>数据源和数据库连接不同，数据源无需创建多个，它是产生数据连接的工厂，因此整个应用只需要一个数据源。</p><p><strong>Druid（德鲁伊）数据库连接池</strong></p><p>Druid 是阿里巴巴开源平台上一个数据库连接池实现，它结合了 C3P0、DBCP、Proxool 等 DB 池的有点，同时加入了日志监控，可以很好地监控 DB 池连接和 SQL 的执行情况，可以说是针对监控而生的 DB 连接池，<strong>可以说是目前最好的连接池之一</strong>。</p><p>封装进 JDBCUtil 工具类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCUtil</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DataSource</span> source<span class="token punctuation">;</span>
	
	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			prop<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
			source <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 使用 Druid 数据库连接池技术获取连接
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">Connection</span> conn <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> conn<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，src 下的配置文件内容为：【druid.properties】</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/students?serverTimezone=GMT%2B8</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>

<span class="token key attr-name">initialSize</span><span class="token punctuation">=</span><span class="token value attr-value">10 # 初始化时连理物理连接的个数</span>
<span class="token key attr-name">maxActive</span><span class="token punctuation">=</span><span class="token value attr-value">10 # 最大连接数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试一下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210914173315179.png" alt="image-20210914173315179" tabindex="0" loading="lazy"><figcaption>image-20210914173315179</figcaption></figure>`,30),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(e,[["render",i],["__file","jdbc-7.html.vue"]]);export{u as default};
