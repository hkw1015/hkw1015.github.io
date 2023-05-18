const t=JSON.parse('{"key":"v-51e4a776","path":"/java/framework/mybatis-plus/mybatis-plus-7.html","title":"插件机制","lang":"zh-CN","frontmatter":{"title":"插件机制","date":"2021-11-03T00:00:00.000Z","category":"常用框架","tag":["MyBatis-Plus"],"description":"1. MyBatis 插件机制简介 （1）插件机制 MyBatis 通过插件（Interceptor）可以做到拦截四大对象相关方法的执行，根据需求，完成相关数据的动态改变。 Executor StatementHandler ParameterHandler ResultSetHandler （2）插件原理 四大对象的每个对象在创建时，都会执行 interceptorChain.pluginAll()，会经过每个插件对象的 plugin() 方法，目的是为当前的四大对象创建代理。代理对象就可以拦截到四大对象相关方法的执行，因为要执行四大对象的方法需要经过代理。","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/mybatis-plus/mybatis-plus-7.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"插件机制"}],["meta",{"property":"og:description","content":"1. MyBatis 插件机制简介 （1）插件机制 MyBatis 通过插件（Interceptor）可以做到拦截四大对象相关方法的执行，根据需求，完成相关数据的动态改变。 Executor StatementHandler ParameterHandler ResultSetHandler （2）插件原理 四大对象的每个对象在创建时，都会执行 interceptorChain.pluginAll()，会经过每个插件对象的 plugin() 方法，目的是为当前的四大对象创建代理。代理对象就可以拦截到四大对象相关方法的执行，因为要执行四大对象的方法需要经过代理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MyBatis-Plus"}],["meta",{"property":"article:published_time","content":"2021-11-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. MyBatis 插件机制简介","slug":"_1-mybatis-插件机制简介","link":"#_1-mybatis-插件机制简介","children":[]},{"level":2,"title":"2. 分页插件","slug":"_2-分页插件","link":"#_2-分页插件","children":[]},{"level":2,"title":"3. 执行分析插件","slug":"_3-执行分析插件","link":"#_3-执行分析插件","children":[]},{"level":2,"title":"4. 性能分析插件","slug":"_4-性能分析插件","link":"#_4-性能分析插件","children":[]},{"level":2,"title":"5. 乐观锁插件","slug":"_5-乐观锁插件","link":"#_5-乐观锁插件","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":3.14,"words":941},"filePathRelative":"java/framework/mybatis-plus/mybatis-plus-7.md","localizedDate":"2021年11月3日","excerpt":"<h2> 1. MyBatis 插件机制简介</h2>\\n<p><strong>（1）插件机制</strong></p>\\n<p>MyBatis 通过插件（Interceptor）可以做到拦截四大对象相关方法的执行，根据需求，完成相关数据的动态改变。</p>\\n<ul>\\n<li>Executor</li>\\n<li>StatementHandler</li>\\n<li>ParameterHandler</li>\\n<li>ResultSetHandler</li>\\n</ul>\\n<p><strong>（2）插件原理</strong></p>\\n<p>四大对象的每个对象在创建时，都会执行 interceptorChain.pluginAll()，会经过每个插件对象的 plugin() 方法，目的是为当前的四大对象创建代理。代理对象就可以拦截到四大对象相关方法的执行，因为要执行四大对象的方法需要经过代理。</p>","autoDesc":true}');export{t as data};
