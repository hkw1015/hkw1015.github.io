const t=JSON.parse('{"key":"v-5245a9f1","path":"/linux/basic/linux-basic-5.html","title":"常用命令","lang":"zh-CN","frontmatter":{"title":"常用命令","date":"2021-09-14T00:00:00.000Z","category":"Linux","tag":["Linux 入门"],"description":"1. 基本命令 命令 描述 man 帮助手册 --help 帮助手册 date 日期 cal 日历 pwd 显示当前所在的目录 cd 切换目录 ls 显示当前目录下的内容 grep 通过 | 管道符，配置 grep 进行过滤筛选 mkdir 创建目录-p：同时创建多级目录 touch 创建文件 rmdir 删除一个空目录 rm 删除文件或者目录-rvf：递归删除所有目录内容，有提示-rf：递归删除所有目录内容,无提示【慎用】 cp 复制-r：递归复制整个目录-v：显示复制过程中文件的列表\\\\cp：强制覆盖不提示 cat 查看文件cat 文件名 查看轻量级的文本文件cat 文件1 文件2 连接显示多个文件cat 文件1 &gt; 文件2 合并为新文件cat 文件1 &gt;&gt; 文件2 追加 more 查看比较长的文件空格键：向下翻一页回车键：向下翻一行q：代表立刻离开morectrl+F 向下滚动一屏ctrl+B 向上滚动一屏 less 同 more 类似，比 more 功能更多pageDown：向下滚动一页pageUp：向上滚动一页/字符串： 向下搜索指定字符串?字符串：向上搜索指定字符串n：重复前一个搜索N：反向重复前一个搜索 tail 从尾部开始查看文件，比较适合看日志-f：跟随查看-n&lt;行数&gt; 输出文件尾部 n 行内容 history 查看命令 echo 回显，输出一般在 shell 脚本中使用较多 find 查找文件，提供了丰富的模糊搜索及条件搜索 Find+搜索路径+参数+搜索关键字 按文件名：find /目录/… -name \\"*.txt\\" locate 查找文件，基于索引，查询速度更快通过 updatedb 来更新索引 ln 软链接ln -s 原文件或者目录 软链接名 tar 压缩文件 、解压缩文件tar -zcvf xxx.tar.gz xxxx 压缩文件tar -zxvf xxx.tar.gz 解压缩文件-c：创建一个新归档-x：从归档中解出文件-v：显示详细信息-f：指定压缩后的文件名-z：通过 gzip 过滤归档 zip 压缩文件zip xxx.zip xxxxzip -r xxx.zip 目录/* unzip 解压缩文件 upzip xxx.zip","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/linux/basic/linux-basic-5.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"常用命令"}],["meta",{"property":"og:description","content":"1. 基本命令 命令 描述 man 帮助手册 --help 帮助手册 date 日期 cal 日历 pwd 显示当前所在的目录 cd 切换目录 ls 显示当前目录下的内容 grep 通过 | 管道符，配置 grep 进行过滤筛选 mkdir 创建目录-p：同时创建多级目录 touch 创建文件 rmdir 删除一个空目录 rm 删除文件或者目录-rvf：递归删除所有目录内容，有提示-rf：递归删除所有目录内容,无提示【慎用】 cp 复制-r：递归复制整个目录-v：显示复制过程中文件的列表\\\\cp：强制覆盖不提示 cat 查看文件cat 文件名 查看轻量级的文本文件cat 文件1 文件2 连接显示多个文件cat 文件1 &gt; 文件2 合并为新文件cat 文件1 &gt;&gt; 文件2 追加 more 查看比较长的文件空格键：向下翻一页回车键：向下翻一行q：代表立刻离开morectrl+F 向下滚动一屏ctrl+B 向上滚动一屏 less 同 more 类似，比 more 功能更多pageDown：向下滚动一页pageUp：向上滚动一页/字符串： 向下搜索指定字符串?字符串：向上搜索指定字符串n：重复前一个搜索N：反向重复前一个搜索 tail 从尾部开始查看文件，比较适合看日志-f：跟随查看-n&lt;行数&gt; 输出文件尾部 n 行内容 history 查看命令 echo 回显，输出一般在 shell 脚本中使用较多 find 查找文件，提供了丰富的模糊搜索及条件搜索 Find+搜索路径+参数+搜索关键字 按文件名：find /目录/… -name \\"*.txt\\" locate 查找文件，基于索引，查询速度更快通过 updatedb 来更新索引 ln 软链接ln -s 原文件或者目录 软链接名 tar 压缩文件 、解压缩文件tar -zcvf xxx.tar.gz xxxx 压缩文件tar -zxvf xxx.tar.gz 解压缩文件-c：创建一个新归档-x：从归档中解出文件-v：显示详细信息-f：指定压缩后的文件名-z：通过 gzip 过滤归档 zip 压缩文件zip xxx.zip xxxxzip -r xxx.zip 目录/* unzip 解压缩文件 upzip xxx.zip"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Linux 入门"}],["meta",{"property":"article:published_time","content":"2021-09-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本命令","slug":"_1-基本命令","link":"#_1-基本命令","children":[]},{"level":2,"title":"2. 分类详细说明","slug":"_2-分类详细说明","link":"#_2-分类详细说明","children":[{"level":3,"title":"2.1 帮助命令","slug":"_2-1-帮助命令","link":"#_2-1-帮助命令","children":[]},{"level":3,"title":"2.2 时间日期类","slug":"_2-2-时间日期类","link":"#_2-2-时间日期类","children":[]},{"level":3,"title":"2.3 文件目录类","slug":"_2-3-文件目录类","link":"#_2-3-文件目录类","children":[]}]},{"level":2,"title":"3. 磁盘分区类命令","slug":"_3-磁盘分区类命令","link":"#_3-磁盘分区类命令","children":[{"level":3,"title":"3.1 Windows 下的磁盘分区","slug":"_3-1-windows-下的磁盘分区","link":"#_3-1-windows-下的磁盘分区","children":[]},{"level":3,"title":"3.2 常用的两种磁盘分区类型","slug":"_3-2-常用的两种磁盘分区类型","link":"#_3-2-常用的两种磁盘分区类型","children":[]}]},{"level":2,"title":"4. 磁盘情况查询","slug":"_4-磁盘情况查询","link":"#_4-磁盘情况查询","children":[]},{"level":2,"title":"5. 网络配置类","slug":"_5-网络配置类","link":"#_5-网络配置类","children":[{"level":3,"title":"5.1 ifconfig 查看网络配置","slug":"_5-1-ifconfig-查看网络配置","link":"#_5-1-ifconfig-查看网络配置","children":[]}]},{"level":2,"title":"6. 进程类","slug":"_6-进程类","link":"#_6-进程类","children":[{"level":3,"title":"6.1 ps（process）","slug":"_6-1-ps-process","link":"#_6-1-ps-process","children":[]},{"level":3,"title":"6.2 ps -aux","slug":"_6-2-ps-aux","link":"#_6-2-ps-aux","children":[]},{"level":3,"title":"6.3 ps -ef","slug":"_6-3-ps-ef","link":"#_6-3-ps-ef","children":[]},{"level":3,"title":"6.4 kill pid","slug":"_6-4-kill-pid","link":"#_6-4-kill-pid","children":[]}]},{"level":2,"title":"7. 服务类","slug":"_7-服务类","link":"#_7-服务类","children":[{"level":3,"title":"7.1 service（CentOS6）","slug":"_7-1-service-centos6","link":"#_7-1-service-centos6","children":[]},{"level":3,"title":"7.2 systemctl（CentOS7）","slug":"_7-2-systemctl-centos7","link":"#_7-2-systemctl-centos7","children":[]}]},{"level":2,"title":"8. netstat","slug":"_8-netstat","link":"#_8-netstat","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":16.25,"words":4874},"filePathRelative":"linux/basic/linux-basic-5.md","localizedDate":"2021年9月14日","excerpt":"<h2> 1. 基本命令</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>命令</th>\\n<th style=\\"text-align:left\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>man</td>\\n<td style=\\"text-align:left\\">帮助手册</td>\\n</tr>\\n<tr>\\n<td>--help</td>\\n<td style=\\"text-align:left\\">帮助手册</td>\\n</tr>\\n<tr>\\n<td>date</td>\\n<td style=\\"text-align:left\\">日期</td>\\n</tr>\\n<tr>\\n<td>cal</td>\\n<td style=\\"text-align:left\\">日历</td>\\n</tr>\\n<tr>\\n<td>pwd</td>\\n<td style=\\"text-align:left\\">显示当前所在的目录</td>\\n</tr>\\n<tr>\\n<td>cd</td>\\n<td style=\\"text-align:left\\">切换目录</td>\\n</tr>\\n<tr>\\n<td>ls</td>\\n<td style=\\"text-align:left\\">显示当前目录下的内容</td>\\n</tr>\\n<tr>\\n<td>grep</td>\\n<td style=\\"text-align:left\\">通过 | 管道符，配置 grep 进行过滤筛选</td>\\n</tr>\\n<tr>\\n<td>mkdir</td>\\n<td style=\\"text-align:left\\">创建目录<br>-p：同时创建多级目录</td>\\n</tr>\\n<tr>\\n<td>touch</td>\\n<td style=\\"text-align:left\\">创建文件</td>\\n</tr>\\n<tr>\\n<td>rmdir</td>\\n<td style=\\"text-align:left\\">删除一个空目录</td>\\n</tr>\\n<tr>\\n<td>rm</td>\\n<td style=\\"text-align:left\\">删除文件或者目录<br>-rvf：递归删除所有目录内容，有提示<br>-rf：递归删除所有目录内容,无提示【慎用】</td>\\n</tr>\\n<tr>\\n<td>cp</td>\\n<td style=\\"text-align:left\\">复制<br>-r：递归复制整个目录<br>-v：显示复制过程中文件的列表<br>\\\\cp：强制覆盖不提示</td>\\n</tr>\\n<tr>\\n<td>cat</td>\\n<td style=\\"text-align:left\\">查看文件<br>cat 文件名  查看轻量级的文本文件<br>cat 文件1 文件2 连接显示多个文件<br>cat 文件1 &gt; 文件2 合并为新文件<br>cat 文件1 &gt;&gt; 文件2 追加</td>\\n</tr>\\n<tr>\\n<td>more</td>\\n<td style=\\"text-align:left\\">查看比较长的文件<br>空格键：向下翻一页<br>回车键：向下翻一行<br>q：代表立刻离开more<br>ctrl+F 向下滚动一屏<br>ctrl+B 向上滚动一屏</td>\\n</tr>\\n<tr>\\n<td>less</td>\\n<td style=\\"text-align:left\\">同 more 类似，比 more 功能更多<br>pageDown：向下滚动一页<br>pageUp：向上滚动一页<br>/字符串： 向下搜索指定字符串<br>?字符串：向上搜索指定字符串<br>n：重复前一个搜索<br>N：反向重复前一个搜索</td>\\n</tr>\\n<tr>\\n<td>tail</td>\\n<td style=\\"text-align:left\\">从尾部开始查看文件，比较适合看日志<br>-f：跟随查看<br>-n&lt;行数&gt; 输出文件尾部 n 行内容</td>\\n</tr>\\n<tr>\\n<td>history</td>\\n<td style=\\"text-align:left\\">查看命令</td>\\n</tr>\\n<tr>\\n<td>echo</td>\\n<td style=\\"text-align:left\\">回显，输出一般在 shell 脚本中使用较多</td>\\n</tr>\\n<tr>\\n<td>find</td>\\n<td style=\\"text-align:left\\">查找文件，提供了丰富的模糊搜索及条件搜索 Find+搜索路径+参数+搜索关键字 按文件名：find  /目录/…  -name  \\"*.txt\\"</td>\\n</tr>\\n<tr>\\n<td>locate</td>\\n<td style=\\"text-align:left\\">查找文件，基于索引，查询速度更快<br>通过 updatedb 来更新索引</td>\\n</tr>\\n<tr>\\n<td>ln</td>\\n<td style=\\"text-align:left\\">软链接<br>ln -s 原文件或者目录 软链接名</td>\\n</tr>\\n<tr>\\n<td>tar</td>\\n<td style=\\"text-align:left\\">压缩文件 、解压缩文件<br>tar -zcvf  xxx.tar.gz  xxxx 压缩文件<br>tar -zxvf xxx.tar.gz  解压缩文件<br>-c：创建一个新归档<br>-x：从归档中解出文件<br>-v：显示详细信息<br>-f：指定压缩后的文件名<br>-z：通过 gzip 过滤归档</td>\\n</tr>\\n<tr>\\n<td>zip</td>\\n<td style=\\"text-align:left\\">压缩文件<br>zip xxx.zip  xxxx<br>zip -r  xxx.zip  目录/*</td>\\n</tr>\\n<tr>\\n<td>unzip</td>\\n<td style=\\"text-align:left\\">解压缩文件 upzip xxx.zip</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};