import{_ as n,Z as e,$ as s,a5 as a}from"./framework-1fb77053.js";const i={},l=a(`<h2 id="_1-用户" tabindex="-1"><a class="header-anchor" href="#_1-用户" aria-hidden="true">#</a> 1. 用户</h2><p>（1）Linux 系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。</p><p>（2）对用户的操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>新增用户：useradd 新用户名

设置密码：passwd 用户名

用户是否存在：id 用户名

切换用户：su 切换用户名

查看当前用户/登录用户：whoami / <span class="token function">who</span> am I

删除用户：userdel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-用户组" tabindex="-1"><a class="header-anchor" href="#_2-用户组" aria-hidden="true">#</a> 2. 用户组</h2><p>（1）类似于角色，系统可以对有共性的多个用户进行统一的管理。</p><p>（2）对用户组的操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>新增组：groupadd 组名

删除组：groupdel 组名

修改用户的组：usermod –g 用户组 用户名

增加用户时直接加上组：useradd –g 用户组 用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-系统中用户和组的相关文件" tabindex="-1"><a class="header-anchor" href="#_3-系统中用户和组的相关文件" aria-hidden="true">#</a> 3. 系统中用户和组的相关文件</h2><p>（1）用户（user）的配置文件：/etc/passwd</p><p>每行含义：<strong>用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell</strong></p><p>（2）口令的配置文件：/etc/shadow</p><p>每行含义：<strong>登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志</strong></p><p>（3）组（group）的配置文件：/etc/group</p><p>每行含义：<strong>组名:口令:组标识号:组内用户列表</strong></p><h2 id="_4-文件的权限管理" tabindex="-1"><a class="header-anchor" href="#_4-文件的权限管理" aria-hidden="true">#</a> 4. 文件的权限管理</h2><h3 id="_4-1-再说-ls-l" tabindex="-1"><a class="header-anchor" href="#_4-1-再说-ls-l" aria-hidden="true">#</a> 4.1 再说 ls -l</h3><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914103304791.png" alt="image-20210914103304791" tabindex="0" loading="lazy"><figcaption>image-20210914103304791</figcaption></figure><p><strong>0-9 位说明：</strong></p><ul><li>第 0 位确定文件类型 <ul><li>d：目录文件, -：普通文件, l：链接文件, c：字符设备文件, b：块设备文件, p：管道文件【FIFO文件】</li></ul></li><li>第 1-3 位确定所有者（该文件的所有者）拥有该文件的权限 --- User</li><li>第 4-6 位确定所属组（同用户组的）拥有该文件的权限 --- Group</li><li>第 7-9 位确定其他用户拥有该文件的权限 --- Other</li></ul><p><strong>作用到文件：</strong></p><ul><li>[ r ]代表可读(read)：可以读取,查看</li><li>[ w ]代表可写(write)：可以修改，但是不代表可以删除该文件，删除一个文件的前提条件是<strong>对该文件所在的目录有写权限，才能删除该文件</strong></li><li>[ x ]代表可执行(execute)：可以被系统执行</li></ul><p><strong>作用到目录：</strong></p><ul><li>[ r ]代表可读(read)：可以读取，ls 查看目录内容</li><li>[ w ]代表可写(write)：可以修改，目录内创建+删除+重命名目录</li><li>[ x ]代表可执行(execute)：可以进入该目录</li></ul><h3 id="_4-2-chmod" tabindex="-1"><a class="header-anchor" href="#_4-2-chmod" aria-hidden="true">#</a> 4.2 chmod</h3><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914103310378.png" alt="image-20210914103310378" tabindex="0" loading="lazy"><figcaption>image-20210914103310378</figcaption></figure><p><strong>第一种方式：+ 、-、= 变更权限</strong></p><p>u：所有者 g：所有组 o：其他人</p><p>a：所有人（u、g、o 的总和）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>x 文件目录名

<span class="token function">chmod</span> o+w 文件目录名

<span class="token function">chmod</span> a-x 文件目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二种方式：通过数字变更权限</strong></p><p>r=4 w=2 x=1 rwx=4+2+1=7</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>x 文件目录名
// 相当于 <span class="token function">chmod</span> <span class="token number">751</span> 文件目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-chown" tabindex="-1"><a class="header-anchor" href="#_4-3-chown" aria-hidden="true">#</a> 4.3 chown</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 改变文件的所有者
<span class="token function">chown</span> newowner <span class="token function">file</span>

// 改变用户的所有者和所有组
<span class="token function">chown</span> newowner:newgroup <span class="token function">file</span>

// <span class="token parameter variable">-R</span> 如果是目录 则使其下所有子文件或目录递归生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-chgrp" tabindex="-1"><a class="header-anchor" href="#_4-4-chgrp" aria-hidden="true">#</a> 4.4 chgrp</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 改变文件的所有组
<span class="token function">chgrp</span> newgroup <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,37),d=[l];function r(c,o){return e(),s("div",null,d)}const u=n(i,[["render",r],["__file","linux-basic-6.html.vue"]]);export{u as default};
