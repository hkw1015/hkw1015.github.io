const e=JSON.parse('{"key":"v-55976715","path":"/database/mysql/basic/mysql-basic-7.html","title":"创建和管理表","lang":"zh-CN","frontmatter":{"title":"创建和管理表","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"1. 库的管理 1.1 创建库 语法 CREATE DATABASE 【IF NOT EXISTS】 库名 【CHARACTER SET 字符集名】; 示例 创建一个库名为books的数据库 CREATE DATABASE IF NOT EXISTS books; 创建结果如下： image-20210910153405081","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-7.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"创建和管理表"}],["meta",{"property":"og:description","content":"1. 库的管理 1.1 创建库 语法 CREATE DATABASE 【IF NOT EXISTS】 库名 【CHARACTER SET 字符集名】; 示例 创建一个库名为books的数据库 CREATE DATABASE IF NOT EXISTS books; 创建结果如下： image-20210910153405081"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建和管理表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 库的管理","slug":"_1-库的管理","link":"#_1-库的管理","children":[{"level":3,"title":"1.1 创建库","slug":"_1-1-创建库","link":"#_1-1-创建库","children":[]},{"level":3,"title":"1.2 修改库（修改字符集）","slug":"_1-2-修改库-修改字符集","link":"#_1-2-修改库-修改字符集","children":[]},{"level":3,"title":"1.3 删除库","slug":"_1-3-删除库","link":"#_1-3-删除库","children":[]}]},{"level":2,"title":"2. 表的管理","slug":"_2-表的管理","link":"#_2-表的管理","children":[{"level":3,"title":"2.1 创建表","slug":"_2-1-创建表","link":"#_2-1-创建表","children":[]},{"level":3,"title":"2.2 修改表","slug":"_2-2-修改表","link":"#_2-2-修改表","children":[]},{"level":3,"title":"2.3 删除表","slug":"_2-3-删除表","link":"#_2-3-删除表","children":[]},{"level":3,"title":"2.4 复制表","slug":"_2-4-复制表","link":"#_2-4-复制表","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"database/mysql/basic/mysql-basic-7.md","localizedDate":"2021年9月11日","excerpt":"<h2> 1. 库的管理</h2>\\n<h3> 1.1 创建库</h3>\\n<ul>\\n<li>\\n<p>语法</p>\\n<ul>\\n<li>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">DATABASE</span> 【<span class=\\"token keyword\\">IF</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token keyword\\">EXISTS</span>】 库名 【<span class=\\"token keyword\\">CHARACTER</span> <span class=\\"token keyword\\">SET</span> 字符集名】<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>示例</p>\\n<ul>\\n<li>\\n<p>创建一个库名为books的数据库</p>\\n</li>\\n<li>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">DATABASE</span> <span class=\\"token keyword\\">IF</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token keyword\\">EXISTS</span> books<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>创建结果如下：</p>\\n<ul>\\n<li><img src=\\"https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910153405081.png\\" alt=\\"image-20210910153405081\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210910153405081</figcaption></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};