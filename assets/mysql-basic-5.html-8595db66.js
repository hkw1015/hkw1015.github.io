const e=JSON.parse('{"key":"v-522db5d7","path":"/database/mysql/basic/mysql-basic-5.html","title":"子查询","lang":"zh-CN","frontmatter":{"title":"子查询","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"1. 介绍 1.1 含义 出现在其他语句中的 SELECT 语句，称为子查询或内查询 内部嵌套其他 SELECT 语句的查询，称为主查询或外查询 1.2 示例 SELECT \\tfirst_name FROM \\temployees WHERE \\tdepartment_id IN ( \\tSELECT \\t\\tdepartment_id \\tFROM \\t\\tdepartments \\tWHERE \\tlocation_id = 1700 );","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-5.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"子查询"}],["meta",{"property":"og:description","content":"1. 介绍 1.1 含义 出现在其他语句中的 SELECT 语句，称为子查询或内查询 内部嵌套其他 SELECT 语句的查询，称为主查询或外查询 1.2 示例 SELECT \\tfirst_name FROM \\temployees WHERE \\tdepartment_id IN ( \\tSELECT \\t\\tdepartment_id \\tFROM \\t\\tdepartments \\tWHERE \\tlocation_id = 1700 );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"子查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[{"level":3,"title":"1.1 含义","slug":"_1-1-含义","link":"#_1-1-含义","children":[]},{"level":3,"title":"1.2 示例","slug":"_1-2-示例","link":"#_1-2-示例","children":[]},{"level":3,"title":"1.3 分类","slug":"_1-3-分类","link":"#_1-3-分类","children":[]},{"level":3,"title":"1.4 特点","slug":"_1-4-特点","link":"#_1-4-特点","children":[]}]},{"level":2,"title":"2. 子查询的使用","slug":"_2-子查询的使用","link":"#_2-子查询的使用","children":[{"level":3,"title":"2.1 WHERE 或 HAVING 后面","slug":"_2-1-where-或-having-后面","link":"#_2-1-where-或-having-后面","children":[]},{"level":3,"title":"2.2 SELECT 后面","slug":"_2-2-select-后面","link":"#_2-2-select-后面","children":[]},{"level":3,"title":"2.3 FROM 后面","slug":"_2-3-from-后面","link":"#_2-3-from-后面","children":[]},{"level":3,"title":"2.4 EXIST 后面（相关子查询）","slug":"_2-4-exist-后面-相关子查询","link":"#_2-4-exist-后面-相关子查询","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":5.08,"words":1523},"filePathRelative":"database/mysql/basic/mysql-basic-5.md","localizedDate":"2021年9月11日","excerpt":"<h2> 1. 介绍</h2>\\n<h3> 1.1 含义</h3>\\n<ul>\\n<li>出现在其他语句中的 SELECT 语句，称为子查询或内查询</li>\\n<li>内部嵌套其他 SELECT 语句的查询，称为主查询或外查询</li>\\n</ul>\\n<h3> 1.2 示例</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span>\\n\\tfirst_name \\n<span class=\\"token keyword\\">FROM</span>\\n\\temployees \\n<span class=\\"token keyword\\">WHERE</span>\\n\\tdepartment_id <span class=\\"token operator\\">IN</span> <span class=\\"token punctuation\\">(</span> \\n    \\t<span class=\\"token keyword\\">SELECT</span>\\n    \\t\\tdepartment_id \\n    \\t<span class=\\"token keyword\\">FROM</span>\\n\\t\\tdepartments \\n\\t<span class=\\"token keyword\\">WHERE</span>\\n\\tlocation_id <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1700</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
