const n=JSON.parse('{"key":"v-96974d2e","path":"/java/framework/spring/annotation/spring-annotation-1.html","title":"组件注册","lang":"zh-CN","frontmatter":{"title":"组件注册","date":"2021-12-11T00:00:00.000Z","category":"常用框架","tag":["Spring 注解"],"description":"1. 使用 @Configuration 和 @Bean 注解给容器中注册组件 （1）准备：新建一个 maven 工程，添加 spring-context 和 lombok 的依赖 &lt;dependency&gt; &lt;groupId&gt;org.projectlombok&lt;/groupId&gt; &lt;artifactId&gt;lombok&lt;/artifactId&gt; &lt;version&gt;1.18.20&lt;/version&gt; &lt;scope&gt;compile&lt;/scope&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-context&lt;/artifactId&gt; &lt;version&gt;5.3.5&lt;/version&gt; &lt;/dependency&gt;","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/spring/annotation/spring-annotation-1.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"组件注册"}],["meta",{"property":"og:description","content":"1. 使用 @Configuration 和 @Bean 注解给容器中注册组件 （1）准备：新建一个 maven 工程，添加 spring-context 和 lombok 的依赖 &lt;dependency&gt; &lt;groupId&gt;org.projectlombok&lt;/groupId&gt; &lt;artifactId&gt;lombok&lt;/artifactId&gt; &lt;version&gt;1.18.20&lt;/version&gt; &lt;scope&gt;compile&lt;/scope&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-context&lt;/artifactId&gt; &lt;version&gt;5.3.5&lt;/version&gt; &lt;/dependency&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Spring 注解"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件注册\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 使用 @Configuration 和 @Bean 注解给容器中注册组件","slug":"_1-使用-configuration-和-bean-注解给容器中注册组件","link":"#_1-使用-configuration-和-bean-注解给容器中注册组件","children":[]},{"level":2,"title":"2. 使用 @ComponentScan 注解自动扫描组件 & 指定扫描规则","slug":"_2-使用-componentscan-注解自动扫描组件-指定扫描规则","link":"#_2-使用-componentscan-注解自动扫描组件-指定扫描规则","children":[]},{"level":2,"title":"3. 使用 @Scope 注解设置组件作用域","slug":"_3-使用-scope-注解设置组件作用域","link":"#_3-使用-scope-注解设置组件作用域","children":[]},{"level":2,"title":"4. 使用 @Lazy 注解实现 Bean 懒加载","slug":"_4-使用-lazy-注解实现-bean-懒加载","link":"#_4-使用-lazy-注解实现-bean-懒加载","children":[]},{"level":2,"title":"5. 使用 @Conditional 按照条件注册 Bean","slug":"_5-使用-conditional-按照条件注册-bean","link":"#_5-使用-conditional-按照条件注册-bean","children":[]},{"level":2,"title":"6. 使用 @Import 给容器中快速导入一个组件","slug":"_6-使用-import-给容器中快速导入一个组件","link":"#_6-使用-import-给容器中快速导入一个组件","children":[]},{"level":2,"title":"7. 使用 FactoryBean 注册组件","slug":"_7-使用-factorybean-注册组件","link":"#_7-使用-factorybean-注册组件","children":[]},{"level":2,"title":"8. 总结给容器中注册组件的方式","slug":"_8-总结给容器中注册组件的方式","link":"#_8-总结给容器中注册组件的方式","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":7.82,"words":2345},"filePathRelative":"java/framework/spring/annotation/spring-annotation-1.md","localizedDate":"2021年12月11日","excerpt":"<h2> 1. 使用 @Configuration 和 @Bean 注解给容器中注册组件</h2>\\n<p><strong>（1）准备：新建一个 maven 工程，添加 spring-context 和 lombok 的依赖</strong></p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.projectlombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>lombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.18.20<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>compile<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-context<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>5.3.5<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};