import{_ as e,E as i,Z as l,$ as t,a0 as s,a1 as a,a3 as r,a5 as p}from"./framework-1fb77053.js";const o={},d={class:"hint-container tip"},c=s("p",{class:"hint-container-title"},"提示",-1),u=s("p",null,"所需开发环境安装包：",-1),m={href:"https://pan.baidu.com/s/1F6FlGEIJKAyDbH7LaKt4lg",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"提取码：74zb",-1),g=p(`<h2 id="_1-安装-jdk" tabindex="-1"><a class="header-anchor" href="#_1-安装-jdk" aria-hidden="true">#</a> 1. 安装 JDK</h2><p>（1）将 JDK 解压缩到 opt 目录下</p><p>（2）配置环境变量，vim /etc/profile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk1.8.0_152

<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/jdk1.8.0_152/bin:<span class="token environment constant">$PATH</span>

<span class="token builtin class-name">export</span> JAVA_HOME <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）配置完成后执行如下操作</p><p>安装完成注销重新登录一下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启系统[最靠谱]</p><h2 id="_2-安装-tomcat" tabindex="-1"><a class="header-anchor" href="#_2-安装-tomcat" aria-hidden="true">#</a> 2. 安装 Tomcat</h2><p>（1）解压缩到 /opt</p><p>（2）进入到 Tomcat 目录下的 bin 目录中，启动 tomcat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-安装-mysql" tabindex="-1"><a class="header-anchor" href="#_3-安装-mysql" aria-hidden="true">#</a> 3. 安装 MySQL</h2><h3 id="_3-1-检查工作" tabindex="-1"><a class="header-anchor" href="#_3-1-检查工作" aria-hidden="true">#</a> 3.1 检查工作</h3><p><strong>CentOS6</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果存在 mysql-libs 的旧版本包如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914111932669.png" alt="image-20210914111932669" tabindex="0" loading="lazy"><figcaption>image-20210914111932669</figcaption></figure><p>请先执行卸载命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span>  mysql-libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>CentOS7</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果存在如下：</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914111944306.png" alt="image-20210914111944306" tabindex="0" loading="lazy"><figcaption>image-20210914111944306</figcaption></figure><p>请先执行卸载命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span>  mariadb-libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>检查 /tmp 文件夹权限</strong></p><p>执行 ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-安装-mysql" tabindex="-1"><a class="header-anchor" href="#_3-2-安装-mysql" aria-hidden="true">#</a> 3.2 安装 MySQL</h3><p><strong>拷贝安装包到 opt 目录下</strong></p><p>MySQL-client-5.5.54-1.linux2.6.x86_64.rpm</p><p>MySQL-server-5.5.54-1.linux2.6.x86_64.rpm</p><p><strong>执行如下命令进行安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> MySQL-client-5.5.54-1.linux2.6.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> MySQL-server-5.5.54-1.linux2.6.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-检查安装是否成功" tabindex="-1"><a class="header-anchor" href="#_3-3-检查安装是否成功" aria-hidden="true">#</a> 3.3 检查安装是否成功</h3><p><strong>安装完成后查看 MySQL 的版本</strong></p><p>执行 mysqladmin –version，如果打印出消息，即为成功</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914111958311.png" alt="image-20210914111958311" tabindex="0" loading="lazy"><figcaption>image-20210914111958311</figcaption></figure><p>或者通过 rpm 查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> –qa <span class="token operator">|</span> <span class="token function">grep</span> –i mysql（-i 表示忽略大小写）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-mysql-服务的启停" tabindex="-1"><a class="header-anchor" href="#_3-4-mysql-服务的启停" aria-hidden="true">#</a> 3.4 MySQL 服务的启停</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动: <span class="token function">service</span> mysql start
停止: <span class="token function">service</span> mysql stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-设置-root-用户的密码" tabindex="-1"><a class="header-anchor" href="#_3-5-设置-root-用户的密码" aria-hidden="true">#</a> 3.5 设置 root 用户的密码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqladmin <span class="token operator">-</span>u root  password <span class="token string">&#39;123123&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-登录-mysql" tabindex="-1"><a class="header-anchor" href="#_3-6-登录-mysql" aria-hidden="true">#</a> 3.6 登录 MySQL</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql  <span class="token operator">-</span>uroot  <span class="token operator">-</span>p123123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-建库" tabindex="-1"><a class="header-anchor" href="#_3-7-建库" aria-hidden="true">#</a> 3.7 建库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> 库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-8-建表" tabindex="-1"><a class="header-anchor" href="#_3-8-建表" aria-hidden="true">#</a> 3.8 建表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名 <span class="token punctuation">(</span>字段名 字段类型<span class="token punctuation">(</span>长度<span class="token punctuation">)</span> 约束 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-9-字符集问题" tabindex="-1"><a class="header-anchor" href="#_3-9-字符集问题" aria-hidden="true">#</a> 3.9 字符集问题</h3><p><strong>查看字符集</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看 MySQL 的安装位置</strong></p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914111733770.png" alt="image-20210914111733770" tabindex="0" loading="lazy"><figcaption>image-20210914111733770</figcaption></figure><p><strong>修改字符集</strong></p><p>将 /usr/share/mysql/ 中的 my-huge.cnf 拷贝到 /etc/ 下，改名为 my.cnf</p><blockquote><p><strong>mysql 启动时，会优先读取 /etc/my.cnf 文件</strong></p></blockquote><p>在[client] [mysqld] [mysql]中添加相关的字符集设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token assign-left variable">character_set_server</span><span class="token operator">=</span>utf8
<span class="token assign-left variable">character_set_client</span><span class="token operator">=</span>utf8
collation-server<span class="token operator">=</span>utf8_general_ci

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 MySQL 服务，查看字符集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysql restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改已有库表的字符集</strong></p><p>修改库的字符集</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">database</span> 库名 <span class="token keyword">character</span> <span class="token keyword">set</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改表的字符集</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">convert</span> <span class="token keyword">to</span> <span class="token keyword">character</span> <span class="token keyword">set</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-10-远程访问" tabindex="-1"><a class="header-anchor" href="#_3-10-远程访问" aria-hidden="true">#</a> 3.10 远程访问</h3><p><strong>MySQL 默认的 root 用户只允许本机登录，远程通过 SQLyog、Navicat Premium 工具不能登录</strong></p><p><strong>查看 MySQL mysql 库中的用户表</strong></p><p>列显示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询常用字段：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> host<span class="token punctuation">,</span><span class="token keyword">user</span><span class="token punctuation">,</span>password<span class="token punctuation">,</span>select_priv <span class="token keyword">from</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>创建可以远程访问的 root 用户并授予所有权限</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> root<span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改用户的密码</strong></p><p>修改当前用户的密码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> password <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改某个用户的密码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">update</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">set</span> password<span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token keyword">user</span><span class="token operator">=</span><span class="token string">&#39;li4&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意: 所有通过 user 表的修改,必须使用 flush privileges 命令才能生效</strong></p></blockquote>`,83);function h(b,k){const n=i("ExternalLinkIcon");return l(),t("div",null,[s("div",d,[c,u,s("p",null,[a("链接："),s("a",m,[a("https://pan.baidu.com/s/1F6FlGEIJKAyDbH7LaKt4lg"),r(n)])]),v]),g])}const _=e(o,[["render",h],["__file","linux-basic-8.html.vue"]]);export{_ as default};
