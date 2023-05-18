const a=JSON.parse('{"key":"v-2d5e72f7","path":"/java/framework/spring/core/spring-jdbcTemplate.html","title":"JdbcTemplate","lang":"zh-CN","frontmatter":{"title":"JdbcTemplate","date":"2021-08-23T00:00:00.000Z","category":"常用框架","tag":["Spring"],"description":"1. 概念和准备 什么是 JdbcTemplate Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库进行操作 准备工作 （1）引入相关 jar 包 image-20210823224228196 （2）在 Spring 配置文件中配置数据库连接池 &lt;!-- 引入外部属性文件 --&gt; &lt;context:property-placeholder location=\\"classpath:jdbc.properties\\"/&gt; &lt;!-- 配置连接池 --&gt; &lt;bean id=\\"dataSource\\" class=\\"com.alibaba.druid.pool.DruidDataSource\\"&gt; &lt;property name=\\"driverClassName\\" value=\\"${prop.driverClassName}\\"&gt;&lt;/property&gt; &lt;property name=\\"url\\" value=\\"${prop.url}\\"&gt;&lt;/property&gt; &lt;property name=\\"username\\" value=\\"${prop.username}\\"&gt;&lt;/property&gt; &lt;property name=\\"password\\" value=\\"${prop.password}\\"&gt;&lt;/property&gt; &lt;/bean&gt; （3）配置 JdbcTemplate 对象，注入数据源 dataSource &lt;!-- 配置JdbcTemplate对象，注入dataSource --&gt; &lt;bean id=\\"jdbcTemplate\\" class=\\"org.springframework.jdbc.core.JdbcTemplate\\"&gt; &lt;property name=\\"dataSource\\" ref=\\"dataSource\\"&gt;&lt;/property&gt; &lt;/bean&gt; （4）创建 service 接口及实现类、dao 接口及实现类 在配置文件中开启注解扫描 &lt;!-- 开启注解扫描 --&gt; &lt;context:component-scan base-package=\\"com.hkw\\"&gt;&lt;/context:component-scan&gt; service 层中注入 dao 对象 @Service public class UserServiceImpl implements UserService { @Autowired private UserDao userDao = new UserDaoImpl(); } dao 层中注入 JdbcTemplate 对象 @Repository public class UserDaoImpl implements UserDao { @Autowired private JdbcTemplate jdbcTemplate; }","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/spring/core/spring-jdbcTemplate.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"JdbcTemplate"}],["meta",{"property":"og:description","content":"1. 概念和准备 什么是 JdbcTemplate Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库进行操作 准备工作 （1）引入相关 jar 包 image-20210823224228196 （2）在 Spring 配置文件中配置数据库连接池 &lt;!-- 引入外部属性文件 --&gt; &lt;context:property-placeholder location=\\"classpath:jdbc.properties\\"/&gt; &lt;!-- 配置连接池 --&gt; &lt;bean id=\\"dataSource\\" class=\\"com.alibaba.druid.pool.DruidDataSource\\"&gt; &lt;property name=\\"driverClassName\\" value=\\"${prop.driverClassName}\\"&gt;&lt;/property&gt; &lt;property name=\\"url\\" value=\\"${prop.url}\\"&gt;&lt;/property&gt; &lt;property name=\\"username\\" value=\\"${prop.username}\\"&gt;&lt;/property&gt; &lt;property name=\\"password\\" value=\\"${prop.password}\\"&gt;&lt;/property&gt; &lt;/bean&gt; （3）配置 JdbcTemplate 对象，注入数据源 dataSource &lt;!-- 配置JdbcTemplate对象，注入dataSource --&gt; &lt;bean id=\\"jdbcTemplate\\" class=\\"org.springframework.jdbc.core.JdbcTemplate\\"&gt; &lt;property name=\\"dataSource\\" ref=\\"dataSource\\"&gt;&lt;/property&gt; &lt;/bean&gt; （4）创建 service 接口及实现类、dao 接口及实现类 在配置文件中开启注解扫描 &lt;!-- 开启注解扫描 --&gt; &lt;context:component-scan base-package=\\"com.hkw\\"&gt;&lt;/context:component-scan&gt; service 层中注入 dao 对象 @Service public class UserServiceImpl implements UserService { @Autowired private UserDao userDao = new UserDaoImpl(); } dao 层中注入 JdbcTemplate 对象 @Repository public class UserDaoImpl implements UserDao { @Autowired private JdbcTemplate jdbcTemplate; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2021-08-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JdbcTemplate\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 概念和准备","slug":"_1-概念和准备","link":"#_1-概念和准备","children":[]},{"level":2,"title":"2. JdbcTemplate 操作数据库","slug":"_2-jdbctemplate-操作数据库","link":"#_2-jdbctemplate-操作数据库","children":[{"level":3,"title":"添加","slug":"添加","link":"#添加","children":[]},{"level":3,"title":"修改和删除","slug":"修改和删除","link":"#修改和删除","children":[]},{"level":3,"title":"查询返回某个值","slug":"查询返回某个值","link":"#查询返回某个值","children":[]},{"level":3,"title":"查询返回对象","slug":"查询返回对象","link":"#查询返回对象","children":[]},{"level":3,"title":"查询返回对象集合","slug":"查询返回对象集合","link":"#查询返回对象集合","children":[]},{"level":3,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":6.45,"words":1934},"filePathRelative":"java/framework/spring/core/spring-jdbcTemplate.md","localizedDate":"2021年8月23日","excerpt":"<h2> 1. 概念和准备</h2>\\n<ul>\\n<li>\\n<p><strong>什么是 JdbcTemplate</strong></p>\\n<p>Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库进行操作</p>\\n</li>\\n<li>\\n<p><strong>准备工作</strong></p>\\n<p>（1）引入相关 jar 包</p>\\n<figure><img src=\\"https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210823224228196.png\\" alt=\\"image-20210823224228196\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210823224228196</figcaption></figure>\\n<p>（2）在 Spring 配置文件中配置数据库连接池</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!-- 引入外部属性文件 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token namespace\\">context:</span>property-placeholder</span> <span class=\\"token attr-name\\">location</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>classpath:jdbc.properties<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\n<span class=\\"token comment\\">&lt;!-- 配置连接池 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>bean</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dataSource<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>com.alibaba.druid.pool.DruidDataSource<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>property</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>driverClassName<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>${prop.driverClassName}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>property</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>property</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>url<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>${prop.url}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>property</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>property</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>username<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>${prop.username}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>property</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>property</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>password<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>${prop.password}<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>property</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>bean</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>（3）配置 JdbcTemplate 对象，注入数据源 dataSource</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!-- 配置JdbcTemplate对象，注入dataSource --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>bean</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>jdbcTemplate<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>org.springframework.jdbc.core.JdbcTemplate<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>property</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dataSource<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>dataSource<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>property</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>bean</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>（4）创建 service 接口及实现类、dao 接口及实现类</p>\\n<p>在配置文件中开启注解扫描</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!-- 开启注解扫描 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token namespace\\">context:</span>component-scan</span> <span class=\\"token attr-name\\">base-package</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>com.hkw<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span><span class=\\"token namespace\\">context:</span>component-scan</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>service 层中注入 dao 对象</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Service</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">UserServiceImpl</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">UserService</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Autowired</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">UserDao</span> userDao <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">UserDaoImpl</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>dao 层中注入 JdbcTemplate 对象</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Repository</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">UserDaoImpl</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">UserDao</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Autowired</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">JdbcTemplate</span> jdbcTemplate<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{a as data};