const e=JSON.parse('{"key":"v-28ab5782","path":"/database/mysql/basic/mysql-basic-15.html","title":"流程控制结构","lang":"zh-CN","frontmatter":{"title":"流程控制结构","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"1. 流程控制结构说明 顺序结构：程序从上往下依次执行 分支结构：程序从两条或多条路径中选择一条去执行 循环结构：程序在满足一定条件的基础上，重复执行一段代码 2. 分支结构 2.1 if 函数 （1）功能：实现简单的双分支 （2）语法 IF(表达式1,表达式2,表达式3) # 执行顺序：如果 表达式1 成立，则IF函数返回 表达式2 的值，否则返回 表达式3 的值","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-15.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"流程控制结构"}],["meta",{"property":"og:description","content":"1. 流程控制结构说明 顺序结构：程序从上往下依次执行 分支结构：程序从两条或多条路径中选择一条去执行 循环结构：程序在满足一定条件的基础上，重复执行一段代码 2. 分支结构 2.1 if 函数 （1）功能：实现简单的双分支 （2）语法 IF(表达式1,表达式2,表达式3) # 执行顺序：如果 表达式1 成立，则IF函数返回 表达式2 的值，否则返回 表达式3 的值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流程控制结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 流程控制结构说明","slug":"_1-流程控制结构说明","link":"#_1-流程控制结构说明","children":[]},{"level":2,"title":"2. 分支结构","slug":"_2-分支结构","link":"#_2-分支结构","children":[{"level":3,"title":"2.1 if 函数","slug":"_2-1-if-函数","link":"#_2-1-if-函数","children":[]},{"level":3,"title":"2.2 case 结构","slug":"_2-2-case-结构","link":"#_2-2-case-结构","children":[]},{"level":3,"title":"2.3 if 结构","slug":"_2-3-if-结构","link":"#_2-3-if-结构","children":[]}]},{"level":2,"title":"3. 循环结构","slug":"_3-循环结构","link":"#_3-循环结构","children":[{"level":3,"title":"3.1 分类","slug":"_3-1-分类","link":"#_3-1-分类","children":[]},{"level":3,"title":"3.2 循环控制","slug":"_3-2-循环控制","link":"#_3-2-循环控制","children":[]},{"level":3,"title":"3.3 案例演示 --- 主要演示 while","slug":"_3-3-案例演示-主要演示-while","link":"#_3-3-案例演示-主要演示-while","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1095},"filePathRelative":"database/mysql/basic/mysql-basic-15.md","localizedDate":"2021年9月11日","excerpt":"<h2> 1. 流程控制结构说明</h2>\\n<ul>\\n<li><strong>顺序结构</strong>：程序从上往下依次执行</li>\\n<li><strong>分支结构</strong>：程序从两条或多条路径中选择一条去执行</li>\\n<li><strong>循环结构</strong>：程序在满足一定条件的基础上，重复执行一段代码</li>\\n</ul>\\n<h2> 2. 分支结构</h2>\\n<h3> 2.1 if 函数</h3>\\n<p>（1）<strong>功能</strong>：实现简单的双分支</p>\\n<p>（2）<strong>语法</strong></p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">IF</span><span class=\\"token punctuation\\">(</span>表达式<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>表达式<span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>表达式<span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 执行顺序：如果 表达式1 成立，则IF函数返回 表达式2 的值，否则返回 表达式3 的值</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};