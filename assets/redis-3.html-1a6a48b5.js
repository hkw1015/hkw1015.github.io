const e=JSON.parse('{"key":"v-b61138b2","path":"/database/redis/redis-3.html","title":"常用五大数据类型","lang":"zh-CN","frontmatter":{"title":"常用五大数据类型","date":"2021-12-11T00:00:00.000Z","category":"Redis","tag":["Redis"],"description":"Redis 常见数据类型操作命令：http://www.redis.cn/commands.html 1. Redis 键（key） 查看当前库所有 key（匹配：keys *1） 127.0.0.1:6379&gt; set aaa AAA OK 127.0.0.1:6379&gt; keys * 1) \\"aaa\\" 判断某个 key 是否存在 127.0.0.1:6379&gt; exists aaa (integer) 1 查看 key 是什么类型 127.0.0.1:6379&gt; type aaa string 删除指定的 key 127.0.0.1:6379&gt; del aaa (integer) 1 非阻塞删除 仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作 127.0.0.1:6379&gt; set bbb BBB OK 127.0.0.1:6379&gt; unlink bbb (integer) 1 为给定的 key 设置过期时间 &amp; 查看 key 还有多少秒过期 -1 表示永不过期，-2 表示已过期 127.0.0.1:6379&gt; set ccc CCC OK 127.0.0.1:6379&gt; expire ccc 10 (integer) 1 127.0.0.1:6379&gt; ttl ccc (integer) 6 127.0.0.1:6379&gt; ttl ccc (integer) 4 127.0.0.1:6379&gt; ttl ccc (integer) 3 查看当前数据库的 key 的数量 127.0.0.1:6379&gt; keys * 1) \\"ddd\\" 127.0.0.1:6379&gt; dbsize (integer) 1 切换数据库 127.0.0.1:6379&gt; select 5 OK 127.0.0.1:6379[5]&gt; 清空当前库 127.0.0.1:6379&gt; dbsize (integer) 1 127.0.0.1:6379&gt; flushdb OK 127.0.0.1:6379&gt; dbsize (integer) 0 通杀全部库 127.0.0.1:6379[5]&gt; flushall OK","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/redis/redis-3.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"常用五大数据类型"}],["meta",{"property":"og:description","content":"Redis 常见数据类型操作命令：http://www.redis.cn/commands.html 1. Redis 键（key） 查看当前库所有 key（匹配：keys *1） 127.0.0.1:6379&gt; set aaa AAA OK 127.0.0.1:6379&gt; keys * 1) \\"aaa\\" 判断某个 key 是否存在 127.0.0.1:6379&gt; exists aaa (integer) 1 查看 key 是什么类型 127.0.0.1:6379&gt; type aaa string 删除指定的 key 127.0.0.1:6379&gt; del aaa (integer) 1 非阻塞删除 仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作 127.0.0.1:6379&gt; set bbb BBB OK 127.0.0.1:6379&gt; unlink bbb (integer) 1 为给定的 key 设置过期时间 &amp; 查看 key 还有多少秒过期 -1 表示永不过期，-2 表示已过期 127.0.0.1:6379&gt; set ccc CCC OK 127.0.0.1:6379&gt; expire ccc 10 (integer) 1 127.0.0.1:6379&gt; ttl ccc (integer) 6 127.0.0.1:6379&gt; ttl ccc (integer) 4 127.0.0.1:6379&gt; ttl ccc (integer) 3 查看当前数据库的 key 的数量 127.0.0.1:6379&gt; keys * 1) \\"ddd\\" 127.0.0.1:6379&gt; dbsize (integer) 1 切换数据库 127.0.0.1:6379&gt; select 5 OK 127.0.0.1:6379[5]&gt; 清空当前库 127.0.0.1:6379&gt; dbsize (integer) 1 127.0.0.1:6379&gt; flushdb OK 127.0.0.1:6379&gt; dbsize (integer) 0 通杀全部库 127.0.0.1:6379[5]&gt; flushall OK"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用五大数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. Redis 键（key）","slug":"_1-redis-键-key","link":"#_1-redis-键-key","children":[]},{"level":2,"title":"2. Redis 字符串（String）","slug":"_2-redis-字符串-string","link":"#_2-redis-字符串-string","children":[{"level":3,"title":"2.1 简介","slug":"_2-1-简介","link":"#_2-1-简介","children":[]},{"level":3,"title":"2.2 常用命令","slug":"_2-2-常用命令","link":"#_2-2-常用命令","children":[]},{"level":3,"title":"2.3 数据结构","slug":"_2-3-数据结构","link":"#_2-3-数据结构","children":[]}]},{"level":2,"title":"3. Redis 列表（List）","slug":"_3-redis-列表-list","link":"#_3-redis-列表-list","children":[{"level":3,"title":"3.1 简介","slug":"_3-1-简介","link":"#_3-1-简介","children":[]},{"level":3,"title":"3.2 常用命令","slug":"_3-2-常用命令","link":"#_3-2-常用命令","children":[]},{"level":3,"title":"3.3 数据结构","slug":"_3-3-数据结构","link":"#_3-3-数据结构","children":[]}]},{"level":2,"title":"4. Redis 集合（Set）","slug":"_4-redis-集合-set","link":"#_4-redis-集合-set","children":[{"level":3,"title":"4.1 简介","slug":"_4-1-简介","link":"#_4-1-简介","children":[]},{"level":3,"title":"4.2 常用命令","slug":"_4-2-常用命令","link":"#_4-2-常用命令","children":[]},{"level":3,"title":"4.3 数据结构","slug":"_4-3-数据结构","link":"#_4-3-数据结构","children":[]}]},{"level":2,"title":"5. Redis 哈希（Hash）","slug":"_5-redis-哈希-hash","link":"#_5-redis-哈希-hash","children":[{"level":3,"title":"5.1 简介","slug":"_5-1-简介","link":"#_5-1-简介","children":[]},{"level":3,"title":"5.2 常用命令","slug":"_5-2-常用命令","link":"#_5-2-常用命令","children":[]},{"level":3,"title":"5.3 数据结构","slug":"_5-3-数据结构","link":"#_5-3-数据结构","children":[]}]},{"level":2,"title":"6. Redis 有序集合 Zset（sorted set）","slug":"_6-redis-有序集合-zset-sorted-set","link":"#_6-redis-有序集合-zset-sorted-set","children":[{"level":3,"title":"6.1 简介","slug":"_6-1-简介","link":"#_6-1-简介","children":[]},{"level":3,"title":"6.2 常用命令","slug":"_6-2-常用命令","link":"#_6-2-常用命令","children":[]},{"level":3,"title":"6.3 数据结构","slug":"_6-3-数据结构","link":"#_6-3-数据结构","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":16.96,"words":5087},"filePathRelative":"database/redis/redis-3.md","localizedDate":"2021年12月11日","excerpt":"<p>Redis 常见数据类型操作命令：<a href=\\"http://www.redis.cn/commands.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.redis.cn/commands.html</a></p>\\n<h2> 1. Redis 键（key）</h2>\\n<ul>\\n<li>\\n<p>查看当前库所有 key（匹配：keys *1）</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> <span class=\\"token builtin class-name\\">set</span> aaa AAA\\nOK\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> keys *\\n<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token string\\">\\"aaa\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>判断某个 key 是否存在</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> exists aaa\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>查看 key 是什么类型</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> <span class=\\"token builtin class-name\\">type</span> aaa\\nstring\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>删除指定的 key</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> del aaa\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p><span style=\\"color:red\\">非阻塞删除</span></p>\\n<p>仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> <span class=\\"token builtin class-name\\">set</span> bbb BBB\\nOK\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> unlink bbb\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>为给定的 key 设置过期时间 &amp; 查看 key 还有多少秒过期 -1 表示永不过期，-2 表示已过期</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> <span class=\\"token builtin class-name\\">set</span> ccc CCC\\nOK\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> expire ccc <span class=\\"token number\\">10</span>\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> ttl ccc\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">6</span>\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> ttl ccc\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">4</span>\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> ttl ccc\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">3</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>查看当前数据库的 key 的数量</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> keys *\\n<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token string\\">\\"ddd\\"</span>\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> dbsize\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>切换数据库</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> <span class=\\"token keyword\\">select</span> <span class=\\"token number\\">5</span>\\nOK\\n<span class=\\"token number\\">127.0</span>.0.1:6379<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span> \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>清空当前库</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> dbsize\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> flushdb\\nOK\\n<span class=\\"token number\\">127.0</span>.0.1:637<span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">9</span>&gt;</span> dbsize\\n<span class=\\"token punctuation\\">(</span>integer<span class=\\"token punctuation\\">)</span> <span class=\\"token number\\">0</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>通杀全部库</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">127.0</span>.0.1:6379<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span> flushall\\nOK\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{e as data};
