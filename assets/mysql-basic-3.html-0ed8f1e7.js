const e=JSON.parse('{"key":"v-4ec40499","path":"/database/mysql/basic/mysql-basic-3.html","title":"数据处理之查询","lang":"zh-CN","frontmatter":{"title":"数据处理之查询","date":"2021-09-11T00:00:00.000Z","category":"MySQL","tag":["MySQL 基础"],"description":"0. 准备工作 在我们自己电脑的数据库中创建一些数据库表（SQL 执行脚本文件的网盘下载地址如下） 链接：https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg 提取码：ghi2","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/database/mysql/basic/mysql-basic-3.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"数据处理之查询"}],["meta",{"property":"og:description","content":"0. 准备工作 在我们自己电脑的数据库中创建一些数据库表（SQL 执行脚本文件的网盘下载地址如下） 链接：https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg 提取码：ghi2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"MySQL 基础"}],["meta",{"property":"article:published_time","content":"2021-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据处理之查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"0. 准备工作","slug":"_0-准备工作","link":"#_0-准备工作","children":[]},{"level":2,"title":"1. 基本的 SELECT 语句","slug":"_1-基本的-select-语句","link":"#_1-基本的-select-语句","children":[]},{"level":2,"title":"2. 过滤和排序","slug":"_2-过滤和排序","link":"#_2-过滤和排序","children":[{"level":3,"title":"2.1 过滤查询，又称条件查询","slug":"_2-1-过滤查询-又称条件查询","link":"#_2-1-过滤查询-又称条件查询","children":[]},{"level":3,"title":"2.2 排序查询","slug":"_2-2-排序查询","link":"#_2-2-排序查询","children":[]}]},{"level":2,"title":"3. 分组查询","slug":"_3-分组查询","link":"#_3-分组查询","children":[{"level":3,"title":"1、语法","slug":"_1、语法-2","link":"#_1、语法-2","children":[]},{"level":3,"title":"2、执行顺序","slug":"_2、执行顺序-1","link":"#_2、执行顺序-1","children":[]},{"level":3,"title":"3、特点","slug":"_3、特点","link":"#_3、特点","children":[]},{"level":3,"title":"4、示例","slug":"_4、示例-1","link":"#_4、示例-1","children":[]}]},{"level":2,"title":"4. 连接查询","slug":"_4-连接查询","link":"#_4-连接查询","children":[{"level":3,"title":"1、含义","slug":"_1、含义","link":"#_1、含义","children":[]},{"level":3,"title":"2、笛卡尔乘积现象","slug":"_2、笛卡尔乘积现象","link":"#_2、笛卡尔乘积现象","children":[]},{"level":3,"title":"3、分类","slug":"_3、分类-1","link":"#_3、分类-1","children":[]},{"level":3,"title":"4、sql92 标准","slug":"_4、sql92-标准","link":"#_4、sql92-标准","children":[]},{"level":3,"title":"5、sql99 标准（★★★）","slug":"_5、sql99-标准-★★★","link":"#_5、sql99-标准-★★★","children":[]},{"level":3,"title":"6、sql92 和 sql99 比较","slug":"_6、sql92-和-sql99-比较","link":"#_6、sql92-和-sql99-比较","children":[]},{"level":3,"title":"7、JOIN 连接总结","slug":"_7、join-连接总结","link":"#_7、join-连接总结","children":[]}]},{"level":2,"title":"5. 分页查询","slug":"_5-分页查询","link":"#_5-分页查询","children":[{"level":3,"title":"5.1 应用场景","slug":"_5-1-应用场景","link":"#_5-1-应用场景","children":[]},{"level":3,"title":"5.2 语法","slug":"_5-2-语法","link":"#_5-2-语法","children":[]},{"level":3,"title":"5.3 特点","slug":"_5-3-特点-1","link":"#_5-3-特点-1","children":[]},{"level":3,"title":"5.4 示例","slug":"_5-4-示例","link":"#_5-4-示例","children":[]}]},{"level":2,"title":"6. 联合查询","slug":"_6-联合查询","link":"#_6-联合查询","children":[{"level":3,"title":"6.1 语法","slug":"_6-1-语法","link":"#_6-1-语法","children":[]},{"level":3,"title":"6.2 特点","slug":"_6-2-特点","link":"#_6-2-特点","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":22.37,"words":6711},"filePathRelative":"database/mysql/basic/mysql-basic-3.md","localizedDate":"2021年9月11日","excerpt":"<h2> 0. 准备工作</h2>\\n<p>在我们自己电脑的数据库中创建一些数据库表（SQL 执行脚本文件的网盘下载地址如下）</p>\\n<blockquote>\\n<p><strong>链接：<a href=\\"https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg</a></strong></p>\\n<p><strong>提取码：ghi2</strong></p>\\n</blockquote>","autoDesc":true}');export{e as data};