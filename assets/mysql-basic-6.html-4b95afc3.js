const n=JSON.parse('{"key":"v-53e28e76","path":"/database/mysql/basic/mysql-basic-6.html","title":"数据处理之增删改","lang":"zh-CN","frontmatter":{"title":"数据处理之增删改","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"1. DML 语句 DML（Data Manipulation Language - 数据操纵语言）可以在下面的条件下执行 向表中插入数据 修改现存数据 删除现存数据 事务是由完成若干项工作的 DML 语句组成的 2. 插入 2.1 方式一 语法 INSERT INTO 表名(字段名,...) VALUES(值,...); 特点 要求值的类型和字段的类型要一致或兼容 字段的个数和顺序不一定与原始表中的字段个数和顺序一致，但要保证值和字段一一对应 假如表中有可以为 null 的字段，注意可以通过以下两种方式插入 null 值 字段和值都省略 字段写上，值使用null 字段和值的个数必须一致 字段名可以省略，默认所有列","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-6.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"数据处理之增删改"}],["meta",{"property":"og:description","content":"1. DML 语句 DML（Data Manipulation Language - 数据操纵语言）可以在下面的条件下执行 向表中插入数据 修改现存数据 删除现存数据 事务是由完成若干项工作的 DML 语句组成的 2. 插入 2.1 方式一 语法 INSERT INTO 表名(字段名,...) VALUES(值,...); 特点 要求值的类型和字段的类型要一致或兼容 字段的个数和顺序不一定与原始表中的字段个数和顺序一致，但要保证值和字段一一对应 假如表中有可以为 null 的字段，注意可以通过以下两种方式插入 null 值 字段和值都省略 字段写上，值使用null 字段和值的个数必须一致 字段名可以省略，默认所有列"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据处理之增删改\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. DML 语句","slug":"_1-dml-语句","link":"#_1-dml-语句","children":[]},{"level":2,"title":"2. 插入","slug":"_2-插入","link":"#_2-插入","children":[{"level":3,"title":"2.1 方式一","slug":"_2-1-方式一","link":"#_2-1-方式一","children":[]},{"level":3,"title":"2.2 方式二","slug":"_2-2-方式二","link":"#_2-2-方式二","children":[]},{"level":3,"title":"2.3 两种方式的区别","slug":"_2-3-两种方式的区别","link":"#_2-3-两种方式的区别","children":[]}]},{"level":2,"title":"3. 更新","slug":"_3-更新","link":"#_3-更新","children":[{"level":3,"title":"3.1 修改单表的记录（★）","slug":"_3-1-修改单表的记录-★","link":"#_3-1-修改单表的记录-★","children":[]},{"level":3,"title":"3.2 修改多表的记录【补充】","slug":"_3-2-修改多表的记录【补充】","link":"#_3-2-修改多表的记录【补充】","children":[]}]},{"level":2,"title":"4. 删除","slug":"_4-删除","link":"#_4-删除","children":[{"level":3,"title":"4.1 方式一：使用 DELETE","slug":"_4-1-方式一-使用-delete","link":"#_4-1-方式一-使用-delete","children":[]},{"level":3,"title":"4.2 方式二：使用 TRUNCTE","slug":"_4-2-方式二-使用-truncte","link":"#_4-2-方式二-使用-truncte","children":[]},{"level":3,"title":"4.3 两种方式的区别【面试题】","slug":"_4-3-两种方式的区别【面试题】","link":"#_4-3-两种方式的区别【面试题】","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"database/mysql/basic/mysql-basic-6.md","localizedDate":"2021年9月11日","excerpt":"<h2> 1. DML 语句</h2>\\n<ul>\\n<li>DML（Data Manipulation Language - 数据操纵语言）可以在下面的条件下执行\\n<ul>\\n<li>向表中<strong>插入</strong>数据</li>\\n<li><strong>修改</strong>现存数据</li>\\n<li><strong>删除</strong>现存数据</li>\\n</ul>\\n</li>\\n<li>事务是由完成若干项工作的 DML 语句组成的</li>\\n</ul>\\n<h2> 2. 插入</h2>\\n<h3> 2.1 方式一</h3>\\n<ul>\\n<li>\\n<p><strong>语法</strong></p>\\n<ul>\\n<li>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">INSERT</span> <span class=\\"token keyword\\">INTO</span> 表名<span class=\\"token punctuation\\">(</span>字段名<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">VALUES</span><span class=\\"token punctuation\\">(</span>值<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>特点</strong></p>\\n<ul>\\n<li>要求值的类型和字段的类型要一致或兼容</li>\\n<li>字段的个数和顺序不一定与原始表中的字段个数和顺序一致，但要保证值和字段一一对应</li>\\n<li>假如表中有可以为 null 的字段，注意可以通过以下两种方式插入 null 值\\n<ul>\\n<li>字段和值都省略</li>\\n<li>字段写上，值使用null</li>\\n</ul>\\n</li>\\n<li>字段和值的个数必须一致</li>\\n<li>字段名可以省略，默认所有列</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{n as data};
