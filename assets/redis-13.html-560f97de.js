const e=JSON.parse('{"key":"v-d50bae14","path":"/database/redis/redis-13.html","title":"持久化之 AOF","lang":"zh-CN","frontmatter":{"title":"持久化之 AOF","date":"2021-12-11T00:00:00.000Z","category":"Redis","tag":["Redis"],"description":"1. AOF（Append Only File） 1.1 AOF 是什么 以日志的形式来记录每个写操作（增量保存），将 Redis 执行过的所有写指令记录下来（读操作不会记录），只许追加文件但不可以改写文件，Redis 启动之初会读取该文件重新构建数据，换言之，Redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/redis/redis-13.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"持久化之 AOF"}],["meta",{"property":"og:description","content":"1. AOF（Append Only File） 1.1 AOF 是什么 以日志的形式来记录每个写操作（增量保存），将 Redis 执行过的所有写指令记录下来（读操作不会记录），只许追加文件但不可以改写文件，Redis 启动之初会读取该文件重新构建数据，换言之，Redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"持久化之 AOF\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. AOF（Append Only File）","slug":"_1-aof-append-only-file","link":"#_1-aof-append-only-file","children":[{"level":3,"title":"1.1 AOF 是什么","slug":"_1-1-aof-是什么","link":"#_1-1-aof-是什么","children":[]},{"level":3,"title":"1.2 AOF 持久化流程","slug":"_1-2-aof-持久化流程","link":"#_1-2-aof-持久化流程","children":[]},{"level":3,"title":"1.3 AOF 默认不开启","slug":"_1-3-aof-默认不开启","link":"#_1-3-aof-默认不开启","children":[]},{"level":3,"title":"1.4 AOF 和 RDB 同时开启，redis 听谁的？","slug":"_1-4-aof-和-rdb-同时开启-redis-听谁的","link":"#_1-4-aof-和-rdb-同时开启-redis-听谁的","children":[]},{"level":3,"title":"1.5 AOF 启动/修复/恢复","slug":"_1-5-aof-启动-修复-恢复","link":"#_1-5-aof-启动-修复-恢复","children":[]},{"level":3,"title":"1.6 AOF 同步频率设置","slug":"_1-6-aof-同步频率设置","link":"#_1-6-aof-同步频率设置","children":[]},{"level":3,"title":"1.7 Rewrite 压缩","slug":"_1-7-rewrite-压缩","link":"#_1-7-rewrite-压缩","children":[]},{"level":3,"title":"1.8 优势","slug":"_1-8-优势","link":"#_1-8-优势","children":[]},{"level":3,"title":"1.9 劣势","slug":"_1-9-劣势","link":"#_1-9-劣势","children":[]},{"level":3,"title":"1.10 小总结","slug":"_1-10-小总结","link":"#_1-10-小总结","children":[]}]},{"level":2,"title":"2. 总结（which one）","slug":"_2-总结-which-one","link":"#_2-总结-which-one","children":[{"level":3,"title":"2.1 用哪个好","slug":"_2-1-用哪个好","link":"#_2-1-用哪个好","children":[]},{"level":3,"title":"2.2 官网建议","slug":"_2-2-官网建议","link":"#_2-2-官网建议","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":7.51,"words":2254},"filePathRelative":"database/redis/redis-13.md","localizedDate":"2021年12月11日","excerpt":"<h2> 1. AOF（Append Only File）</h2>\\n<h3> 1.1 AOF 是什么</h3>\\n<p><span style=\\"color:red\\">以<strong>日志</strong>的形式来记录每个写操作（增量保存）</span>，将 Redis 执行过的所有写指令记录下来（<span style=\\"color:red\\"><strong>读操作不会记录</strong></span>），<span style=\\"color:red\\"><strong>只许追加文件但不可以改写文件</strong></span>，Redis 启动之初会读取该文件重新构建数据，换言之，Redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作</p>","autoDesc":true}');export{e as data};