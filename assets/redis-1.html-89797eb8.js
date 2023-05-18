const e=JSON.parse('{"key":"v-bce49b2e","path":"/database/redis/redis-1.html","title":"NoSQL 数据库简述","lang":"zh-CN","frontmatter":{"title":"NoSQL 数据库简述","date":"2021-12-11T00:00:00.000Z","category":"Redis","tag":["Redis"],"description":"1. 技术发展 技术的分类 解决功能性的问题：Java、Jsp、RDBMS、Tomcat、Linux、JDBC、SVN 解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、MyBatis 解决性能的问题：NoSQL、Java 多线程、Hadoop、Nginx、MQ、Elasticsearch 1.1 Web 1.0 时代 Web 1.0 的时代，数据访问量很有限，用一夫当关的高性能单点服务器可以解决大部分问题。 image-20211116130728895","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/redis/redis-1.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"NoSQL 数据库简述"}],["meta",{"property":"og:description","content":"1. 技术发展 技术的分类 解决功能性的问题：Java、Jsp、RDBMS、Tomcat、Linux、JDBC、SVN 解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、MyBatis 解决性能的问题：NoSQL、Java 多线程、Hadoop、Nginx、MQ、Elasticsearch 1.1 Web 1.0 时代 Web 1.0 的时代，数据访问量很有限，用一夫当关的高性能单点服务器可以解决大部分问题。 image-20211116130728895"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NoSQL 数据库简述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 技术发展","slug":"_1-技术发展","link":"#_1-技术发展","children":[{"level":3,"title":"1.1 Web 1.0 时代","slug":"_1-1-web-1-0-时代","link":"#_1-1-web-1-0-时代","children":[]},{"level":3,"title":"1.2 Web 2.0 时代","slug":"_1-2-web-2-0-时代","link":"#_1-2-web-2-0-时代","children":[]},{"level":3,"title":"1.3 解决 CPU 及内存压力","slug":"_1-3-解决-cpu-及内存压力","link":"#_1-3-解决-cpu-及内存压力","children":[]},{"level":3,"title":"1.4 解决 IO 压力","slug":"_1-4-解决-io-压力","link":"#_1-4-解决-io-压力","children":[]}]},{"level":2,"title":"2. NoSQL 数据库","slug":"_2-nosql-数据库","link":"#_2-nosql-数据库","children":[{"level":3,"title":"2.1 NoSQL 数据库概述","slug":"_2-1-nosql-数据库概述","link":"#_2-1-nosql-数据库概述","children":[]},{"level":3,"title":"2.2 NoSQL 适用场景","slug":"_2-2-nosql-适用场景","link":"#_2-2-nosql-适用场景","children":[]},{"level":3,"title":"2.3 NoSQL 不适用场景","slug":"_2-3-nosql-不适用场景","link":"#_2-3-nosql-不适用场景","children":[]},{"level":3,"title":"2.4 Memcache","slug":"_2-4-memcache","link":"#_2-4-memcache","children":[]},{"level":3,"title":"2.5 Redis","slug":"_2-5-redis","link":"#_2-5-redis","children":[]},{"level":3,"title":"2.6 MongoDB","slug":"_2-6-mongodb","link":"#_2-6-mongodb","children":[]}]},{"level":2,"title":"3. 行列式存储数据库（大数据时代）","slug":"_3-行列式存储数据库-大数据时代","link":"#_3-行列式存储数据库-大数据时代","children":[{"level":3,"title":"3.1 行式数据库","slug":"_3-1-行式数据库","link":"#_3-1-行式数据库","children":[]},{"level":3,"title":"3.2 列式数据库","slug":"_3-2-列式数据库","link":"#_3-2-列式数据库","children":[]}]},{"level":2,"title":"4. 图关系型数据库","slug":"_4-图关系型数据库","link":"#_4-图关系型数据库","children":[]},{"level":2,"title":"5. DB-Engines 数据库排名","slug":"_5-db-engines-数据库排名","link":"#_5-db-engines-数据库排名","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":4.59,"words":1376},"filePathRelative":"database/redis/redis-1.md","localizedDate":"2021年12月11日","excerpt":"<h2> 1. 技术发展</h2>\\n<p>技术的分类</p>\\n<ol>\\n<li>解决功能性的问题：Java、Jsp、RDBMS、Tomcat、Linux、JDBC、SVN</li>\\n<li>解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、MyBatis</li>\\n<li>解决性能的问题：NoSQL、Java 多线程、Hadoop、Nginx、MQ、Elasticsearch</li>\\n</ol>\\n<h3> 1.1 Web 1.0 时代</h3>\\n<p>Web 1.0 的时代，数据访问量很有限，用一夫当关的高性能单点服务器可以解决大部分问题。</p>\\n<figure><img src=\\"http://img.hl1015.top/blog/image-20211116130728895.png\\" alt=\\"image-20211116130728895\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20211116130728895</figcaption></figure>","autoDesc":true}');export{e as data};
