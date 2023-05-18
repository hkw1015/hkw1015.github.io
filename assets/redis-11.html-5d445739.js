const n=JSON.parse('{"key":"v-dbdf1090","path":"/database/redis/redis-11.html","title":"事务之秒杀案例","lang":"zh-CN","frontmatter":{"title":"事务之秒杀案例","date":"2021-12-11T00:00:00.000Z","category":"Redis","tag":["Redis"],"description":"1. 解决计数器和人员记录的事务操作 image-20211119095356656 基础实现： /** * 模仿秒杀 */ public class ImitateSecKillRedisUtil { // 秒杀过程 public static String doSecKill(String uid, String prodid) throws IOException { // 1 uid 和 prodid 非空判断 if (uid == null || prodid == null) { return \\"uid 和 prodid 不能为空！\\"; } // 2 连接redis Jedis jedis = new Jedis(\\"ip地址\\", 6379); jedis.auth(\\"*****\\"); // 3 拼接key // 3.1 库存key String kcKey = \\"sk:\\" + prodid + \\":qt\\"; // 3.2 秒杀成功用户key String userKey = \\"sk:\\" + prodid + \\":user\\"; // 4 获取库存，如果库存为null，秒杀还没有开始 String kc = jedis.get(kcKey); if (kc == null &amp;&amp; \\"\\".equals(kc.trim())) { System.out.println(\\"秒杀还没有开始，请等待！\\"); jedis.close(); return \\"秒杀还没有开始，请等待！\\"; } // 5 判断用户是否重复秒杀操作 if (jedis.sismember(userKey, uid)) { System.out.println(\\"已经秒杀成功了，不能重复秒杀！\\"); jedis.close(); return \\"已经秒杀成功了，不能重复秒杀！\\"; } // 6 判断如果商品库存数量小于1，秒杀结束 if (Integer.parseInt(kc) &lt;= 0) { System.out.println(\\"秒杀已经结束了！\\"); jedis.close(); return \\"秒杀已经结束了！\\"; } // 7 秒杀过程 // 库存-1 jedis.decr(kcKey); // 把秒杀成功用户添加清单里面 jedis.sadd(userKey, uid); System.out.println(\\"秒杀成功了...\\"); jedis.close(); return \\"秒杀成功了...\\"; } }","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/redis/redis-11.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"事务之秒杀案例"}],["meta",{"property":"og:description","content":"1. 解决计数器和人员记录的事务操作 image-20211119095356656 基础实现： /** * 模仿秒杀 */ public class ImitateSecKillRedisUtil { // 秒杀过程 public static String doSecKill(String uid, String prodid) throws IOException { // 1 uid 和 prodid 非空判断 if (uid == null || prodid == null) { return \\"uid 和 prodid 不能为空！\\"; } // 2 连接redis Jedis jedis = new Jedis(\\"ip地址\\", 6379); jedis.auth(\\"*****\\"); // 3 拼接key // 3.1 库存key String kcKey = \\"sk:\\" + prodid + \\":qt\\"; // 3.2 秒杀成功用户key String userKey = \\"sk:\\" + prodid + \\":user\\"; // 4 获取库存，如果库存为null，秒杀还没有开始 String kc = jedis.get(kcKey); if (kc == null &amp;&amp; \\"\\".equals(kc.trim())) { System.out.println(\\"秒杀还没有开始，请等待！\\"); jedis.close(); return \\"秒杀还没有开始，请等待！\\"; } // 5 判断用户是否重复秒杀操作 if (jedis.sismember(userKey, uid)) { System.out.println(\\"已经秒杀成功了，不能重复秒杀！\\"); jedis.close(); return \\"已经秒杀成功了，不能重复秒杀！\\"; } // 6 判断如果商品库存数量小于1，秒杀结束 if (Integer.parseInt(kc) &lt;= 0) { System.out.println(\\"秒杀已经结束了！\\"); jedis.close(); return \\"秒杀已经结束了！\\"; } // 7 秒杀过程 // 库存-1 jedis.decr(kcKey); // 把秒杀成功用户添加清单里面 jedis.sadd(userKey, uid); System.out.println(\\"秒杀成功了...\\"); jedis.close(); return \\"秒杀成功了...\\"; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务之秒杀案例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 解决计数器和人员记录的事务操作","slug":"_1-解决计数器和人员记录的事务操作","link":"#_1-解决计数器和人员记录的事务操作","children":[]},{"level":2,"title":"2. Redis 事务 --- 秒杀并发模拟","slug":"_2-redis-事务-秒杀并发模拟","link":"#_2-redis-事务-秒杀并发模拟","children":[{"level":3,"title":"2.1 联网","slug":"_2-1-联网","link":"#_2-1-联网","children":[]},{"level":3,"title":"2.2 无网络","slug":"_2-2-无网络","link":"#_2-2-无网络","children":[]},{"level":3,"title":"2.3 测试及结果","slug":"_2-3-测试及结果","link":"#_2-3-测试及结果","children":[]}]},{"level":2,"title":"3. 超卖问题","slug":"_3-超卖问题","link":"#_3-超卖问题","children":[]},{"level":2,"title":"4. 利用乐观锁淘汰用户，解决超卖问题","slug":"_4-利用乐观锁淘汰用户-解决超卖问题","link":"#_4-利用乐观锁淘汰用户-解决超卖问题","children":[]},{"level":2,"title":"5. 继续增加并发测试","slug":"_5-继续增加并发测试","link":"#_5-继续增加并发测试","children":[{"level":3,"title":"5.1 连接有限制","slug":"_5-1-连接有限制","link":"#_5-1-连接有限制","children":[]},{"level":3,"title":"5.2 连接超时，通过连接池解决","slug":"_5-2-连接超时-通过连接池解决","link":"#_5-2-连接超时-通过连接池解决","children":[]},{"level":3,"title":"5.3 已经秒光，可是还有库存","slug":"_5-3-已经秒光-可是还有库存","link":"#_5-3-已经秒光-可是还有库存","children":[]}]},{"level":2,"title":"6. 解决库存遗留问题","slug":"_6-解决库存遗留问题","link":"#_6-解决库存遗留问题","children":[{"level":3,"title":"6.1 LUA 脚本","slug":"_6-1-lua-脚本","link":"#_6-1-lua-脚本","children":[]},{"level":3,"title":"6.2 LUA 脚本在 Redis 中的优势","slug":"_6-2-lua-脚本在-redis-中的优势","link":"#_6-2-lua-脚本在-redis-中的优势","children":[]}]},{"level":2,"title":"7. 秒杀案例代码","slug":"_7-秒杀案例代码","link":"#_7-秒杀案例代码","children":[{"level":3,"title":"解决库存遗留问题 --- LUA 脚本","slug":"解决库存遗留问题-lua-脚本","link":"#解决库存遗留问题-lua-脚本","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":8.99,"words":2698},"filePathRelative":"database/redis/redis-11.md","localizedDate":"2021年12月11日","excerpt":"<h2> 1. 解决计数器和人员记录的事务操作</h2>\\n<figure><img src=\\"http://img.hl1015.top/blog/image-20211119095356656.png\\" alt=\\"image-20211119095356656\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20211119095356656</figcaption></figure>\\n<p><strong>基础实现：</strong></p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**\\n * 模仿秒杀\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ImitateSecKillRedisUtil</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token comment\\">// 秒杀过程</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">doSecKill</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> uid<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> prodid<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 1 uid 和 prodid 非空判断</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>uid <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">||</span> prodid <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"uid 和 prodid 不能为空！\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token comment\\">// 2 连接redis</span>\\n        <span class=\\"token class-name\\">Jedis</span> jedis <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Jedis</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"ip地址\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6379</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">auth</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*****\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 3 拼接key</span>\\n        <span class=\\"token comment\\">// 3.1 库存key</span>\\n        <span class=\\"token class-name\\">String</span> kcKey <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"sk:\\"</span> <span class=\\"token operator\\">+</span> prodid <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\":qt\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 3.2 秒杀成功用户key</span>\\n        <span class=\\"token class-name\\">String</span> userKey <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"sk:\\"</span> <span class=\\"token operator\\">+</span> prodid <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\":user\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 4 获取库存，如果库存为null，秒杀还没有开始</span>\\n        <span class=\\"token class-name\\">String</span> kc <span class=\\"token operator\\">=</span> jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>kcKey<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>kc <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>kc<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">trim</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"秒杀还没有开始，请等待！\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"秒杀还没有开始，请等待！\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token comment\\">// 5 判断用户是否重复秒杀操作</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sismember</span><span class=\\"token punctuation\\">(</span>userKey<span class=\\"token punctuation\\">,</span> uid<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"已经秒杀成功了，不能重复秒杀！\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"已经秒杀成功了，不能重复秒杀！\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token comment\\">// 6 判断如果商品库存数量小于1，秒杀结束</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">parseInt</span><span class=\\"token punctuation\\">(</span>kc<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"秒杀已经结束了！\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"秒杀已经结束了！\\"</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token comment\\">// 7 秒杀过程</span>\\n        <span class=\\"token comment\\">// 库存-1</span>\\n        jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">decr</span><span class=\\"token punctuation\\">(</span>kcKey<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">// 把秒杀成功用户添加清单里面</span>\\n        jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sadd</span><span class=\\"token punctuation\\">(</span>userKey<span class=\\"token punctuation\\">,</span> uid<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"秒杀成功了...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        jedis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"秒杀成功了...\\"</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};