const e=JSON.parse('{"key":"v-1f678178","path":"/java/jdbc/jdbc-3.html","title":"使用 PreparedStatement 实现 CRUD 操作","lang":"zh-CN","frontmatter":{"title":"使用 PreparedStatement 实现 CRUD 操作","date":"2021-09-14T00:00:00.000Z","category":"Java","tag":["JDBC"],"description":"1. 操作和访问数据库 （1）数据库连接被用于数据库服务器发送命令和 SQL 语句，并接受数据库服务器返回的结果。其实一个数据库连接就是一个 Socket 连接。 （2）在 java.sql 包中有 3 个接口分别定义了对数据库的调用的不同方式： Statement：用于执行静态 SQL 语句并返回它所生成结果的对象 PreparedStatement：SQL 语句被预编译存储在此对象中，可以使用此对象多次高效地执行该语句 CallableStatement：用于执行 SQL 存储过程","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/jdbc/jdbc-3.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"使用 PreparedStatement 实现 CRUD 操作"}],["meta",{"property":"og:description","content":"1. 操作和访问数据库 （1）数据库连接被用于数据库服务器发送命令和 SQL 语句，并接受数据库服务器返回的结果。其实一个数据库连接就是一个 Socket 连接。 （2）在 java.sql 包中有 3 个接口分别定义了对数据库的调用的不同方式： Statement：用于执行静态 SQL 语句并返回它所生成结果的对象 PreparedStatement：SQL 语句被预编译存储在此对象中，可以使用此对象多次高效地执行该语句 CallableStatement：用于执行 SQL 存储过程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"JDBC"}],["meta",{"property":"article:published_time","content":"2021-09-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 PreparedStatement 实现 CRUD 操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 操作和访问数据库","slug":"_1-操作和访问数据库","link":"#_1-操作和访问数据库","children":[]},{"level":2,"title":"2. 使用 Statement 操作数据库的弊端","slug":"_2-使用-statement-操作数据库的弊端","link":"#_2-使用-statement-操作数据库的弊端","children":[]},{"level":2,"title":"3. PreparedStatement 的使用","slug":"_3-preparedstatement-的使用","link":"#_3-preparedstatement-的使用","children":[{"level":3,"title":"3.1 PreparedStatement 介绍","slug":"_3-1-preparedstatement-介绍","link":"#_3-1-preparedstatement-介绍","children":[]},{"level":3,"title":"3.2 PreparedStatement VS Statement","slug":"_3-2-preparedstatement-vs-statement","link":"#_3-2-preparedstatement-vs-statement","children":[]},{"level":3,"title":"3.3 Java 与 SQL 对应数据类型转换表","slug":"_3-3-java-与-sql-对应数据类型转换表","link":"#_3-3-java-与-sql-对应数据类型转换表","children":[]},{"level":3,"title":"3.4 使用 PreparedStatement 实现增、删、改操作","slug":"_3-4-使用-preparedstatement-实现增、删、改操作","link":"#_3-4-使用-preparedstatement-实现增、删、改操作","children":[]},{"level":3,"title":"3.5 使用 PreparedStatement 实现查询操作","slug":"_3-5-使用-preparedstatement-实现查询操作","link":"#_3-5-使用-preparedstatement-实现查询操作","children":[]},{"level":3,"title":"3.6 PreparedStatement 除了解决 Statement 拼串、sql 注入问题之外，PreparedStatement 还有哪些好处？","slug":"_3-6-preparedstatement-除了解决-statement-拼串、sql-注入问题之外-preparedstatement-还有哪些好处","link":"#_3-6-preparedstatement-除了解决-statement-拼串、sql-注入问题之外-preparedstatement-还有哪些好处","children":[]},{"level":3,"title":"3.7 JDBC API 小结","slug":"_3-7-jdbc-api-小结","link":"#_3-7-jdbc-api-小结","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":12.38,"words":3713},"filePathRelative":"java/jdbc/jdbc-3.md","localizedDate":"2021年9月14日","excerpt":"<h2> 1. 操作和访问数据库</h2>\\n<p>（1）数据库连接被用于数据库服务器发送命令和 SQL 语句，并接受数据库服务器返回的结果。其实一个数据库连接就是一个 Socket 连接。</p>\\n<p>（2）在 java.sql 包中有 3 个接口分别定义了对数据库的调用的不同方式：</p>\\n<ul>\\n<li>Statement：用于执行静态 SQL 语句并返回它所生成结果的对象</li>\\n<li>PreparedStatement：SQL 语句被预编译存储在此对象中，可以使用此对象多次高效地执行该语句</li>\\n<li>CallableStatement：用于执行 SQL 存储过程</li>\\n</ul>","autoDesc":true}');export{e as data};
