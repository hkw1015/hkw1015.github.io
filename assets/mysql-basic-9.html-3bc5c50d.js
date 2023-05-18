const e=JSON.parse('{"key":"v-59011853","path":"/database/mysql/basic/mysql-basic-9.html","title":"约束","lang":"zh-CN","frontmatter":{"title":"约束","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"1. 什么是约束？ 1.1 含义 为了保证数据的一致性和完整性，SQL 规范以约束的方式对表数据进行额外的条件限制 约束是表级的强制规定 可以在创建表时规定约束（通过 CREATE TABLE 语句），或者在表创建之后也可以（通过 ALTER TABLE 语句） 1.2 约束分类 有以下六大约束： NOT NULL：非空约束，规定某个字段不能为空，比如姓名，学号等 UNIQUE：唯一约束，规定某个字段在整个表中是唯一的，可以为空，比如座位号 PRIMARY KEY：主键约束(非空且唯一)，比如学号，员工编号 FOREIGN KEY：外键约束，用于限制两个表的关系 (在从表中添加外键约束，用于引用主表中某列的值，比如学生表的专业编号，员工表的部门编号) CHECK：检查约束(MySQL 不支持，但也不报错)，比如年龄，性别 DEFAULT：默认值，用于保证该字段有默认值，比如性别、删除标识","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-9.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"约束"}],["meta",{"property":"og:description","content":"1. 什么是约束？ 1.1 含义 为了保证数据的一致性和完整性，SQL 规范以约束的方式对表数据进行额外的条件限制 约束是表级的强制规定 可以在创建表时规定约束（通过 CREATE TABLE 语句），或者在表创建之后也可以（通过 ALTER TABLE 语句） 1.2 约束分类 有以下六大约束： NOT NULL：非空约束，规定某个字段不能为空，比如姓名，学号等 UNIQUE：唯一约束，规定某个字段在整个表中是唯一的，可以为空，比如座位号 PRIMARY KEY：主键约束(非空且唯一)，比如学号，员工编号 FOREIGN KEY：外键约束，用于限制两个表的关系 (在从表中添加外键约束，用于引用主表中某列的值，比如学生表的专业编号，员工表的部门编号) CHECK：检查约束(MySQL 不支持，但也不报错)，比如年龄，性别 DEFAULT：默认值，用于保证该字段有默认值，比如性别、删除标识"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"约束\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是约束？","slug":"_1-什么是约束","link":"#_1-什么是约束","children":[{"level":3,"title":"1.1 含义","slug":"_1-1-含义","link":"#_1-1-含义","children":[]},{"level":3,"title":"1.2 约束分类","slug":"_1-2-约束分类","link":"#_1-2-约束分类","children":[]},{"level":3,"title":"1.3 约束的添加分类","slug":"_1-3-约束的添加分类","link":"#_1-3-约束的添加分类","children":[]}]},{"level":2,"title":"2. 创建表时添加约束","slug":"_2-创建表时添加约束","link":"#_2-创建表时添加约束","children":[{"level":3,"title":"2.1 添加列级约束","slug":"_2-1-添加列级约束","link":"#_2-1-添加列级约束","children":[]},{"level":3,"title":"2.2 添加表级约束","slug":"_2-2-添加表级约束","link":"#_2-2-添加表级约束","children":[]},{"level":3,"title":"2.3 通用的写法","slug":"_2-3-通用的写法","link":"#_2-3-通用的写法","children":[]}]},{"level":2,"title":"3. 修改表时添加约束","slug":"_3-修改表时添加约束","link":"#_3-修改表时添加约束","children":[{"level":3,"title":"3.1 语法","slug":"_3-1-语法","link":"#_3-1-语法","children":[]},{"level":3,"title":"3.2 示例","slug":"_3-2-示例","link":"#_3-2-示例","children":[]}]},{"level":2,"title":"4. 修改表时删除约束","slug":"_4-修改表时删除约束","link":"#_4-修改表时删除约束","children":[]},{"level":2,"title":"5. 主键和唯一的对比","slug":"_5-主键和唯一的对比","link":"#_5-主键和唯一的对比","children":[]},{"level":2,"title":"6. 外键的特点","slug":"_6-外键的特点","link":"#_6-外键的特点","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":3.92,"words":1176},"filePathRelative":"database/mysql/basic/mysql-basic-9.md","localizedDate":"2021年9月11日","excerpt":"<h2> 1. 什么是约束？</h2>\\n<h3> 1.1 含义</h3>\\n<ul>\\n<li>为了保证数据的一致性和完整性，SQL 规范以约束的方式对表数据进行额外的条件限制</li>\\n<li>约束是表级的强制规定</li>\\n<li>可以在创建表时规定约束（通过 CREATE TABLE 语句），或者在表创建之后也可以（通过 ALTER TABLE 语句）</li>\\n</ul>\\n<h3> 1.2 约束分类</h3>\\n<p>有以下六大约束：</p>\\n<ul>\\n<li><strong>NOT NULL</strong>：非空约束，规定某个字段不能为空，比如姓名，学号等</li>\\n<li><strong>UNIQUE</strong>：唯一约束，规定某个字段在整个表中是唯一的，可以为空，比如座位号</li>\\n<li><strong>PRIMARY KEY</strong>：主键约束(非空且唯一)，比如学号，员工编号</li>\\n<li><strong>FOREIGN KEY</strong>：外键约束，用于限制两个表的关系\\n<ul>\\n<li>(在从表中添加外键约束，用于引用主表中某列的值，比如学生表的专业编号，员工表的部门编号)</li>\\n</ul>\\n</li>\\n<li><strong>CHECK</strong>：检查约束(MySQL 不支持，但也不报错)，比如年龄，性别</li>\\n<li><strong>DEFAULT</strong>：默认值，用于保证该字段有默认值，比如性别、删除标识</li>\\n</ul>","autoDesc":true}');export{e as data};