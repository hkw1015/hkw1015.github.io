import{_ as s,E as t,Z as o,$ as c,a0 as e,a1 as a,a3 as n,a5 as d}from"./framework-1fb77053.js";const r="/assets/image-20221121090541218-7a70caa6.png",l="/assets/image-20221121090702900-4b86ff6b.png",g="/assets/image-20221118170731534-7a7537da.png",p="/assets/image-20221119092740475-9858bccd.png",m="/assets/image-20221119093713582-9e1c69c6.png",u="/assets/image-20221119093835869-7428b3de.png",f="/assets/image-20221119100209566-bb601e35.png",h="/assets/image-20221119192956222-7f62b521.png",_="/assets/image-20221119092303310-836b341c.png",b="/assets/image-20221119193842743-04b01b80.png",v="/assets/image-20221120145347606-cbf69b7f.png",L="/assets/image-20221120145822159-80c1801e.png",x="/assets/image-20221120145637180-fa6fe1f0.png",E="/assets/image-20221120151256396-2effec1f.png",k="/assets/image-20221120152616874-51d32ca8.png",S={},q=e("h2",{id:"_1-plsql-下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-plsql-下载","aria-hidden":"true"},"#"),a(" 1. PLSQL 下载")],-1),C={href:"https://pan.baidu.com/s/1_hV6jVV4oBus0C19EgLMYQ?pwd=tdpp",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,"提取码：tdpp",-1),Q=e("h2",{id:"_2-instantclient-下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-instantclient-下载","aria-hidden":"true"},"#"),a(" 2. InstantClient 下载")],-1),I={href:"https://pan.baidu.com/s/1j6q0tuD7g1T6seX9U6IK0A?pwd=qdrb",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"提取码：qdrb",-1),A=d('<h2 id="_3-plsql-安装" tabindex="-1"><a class="header-anchor" href="#_3-plsql-安装" aria-hidden="true">#</a> 3. PLSQL 安装</h2><ul><li>双击 msi 文件，按照提示安装，选择默认选项即可【这里不再赘述】</li><li>使用下载下来的注册码文件进行注册激活，具体操作如下图：</li></ul><figure><img src="'+r+'" alt="image-20221121090541218" tabindex="0" loading="lazy"><figcaption>image-20221121090541218</figcaption></figure><p>出现如下提示框说明注册成功！</p><figure><img src="'+l+'" alt="image-20221121090702900" tabindex="0" loading="lazy"><figcaption>image-20221121090702900</figcaption></figure><h2 id="_4-instantclient-配置" tabindex="-1"><a class="header-anchor" href="#_4-instantclient-配置" aria-hidden="true">#</a> 4. InstantClient 配置</h2><p>解压 instantclient 压缩包，打开 <code>network -&gt; admin -&gt; tnsnames.ora</code> 文件</p><figure><img src="'+g+`" alt="image-20221118170731534" tabindex="0" loading="lazy"><figcaption>image-20221118170731534</figcaption></figure><p>编辑 tnsnames.ora 文件，添加自己预先想要设定的数据库连接配置，举例如下：</p><div class="language-ora line-numbers-mode" data-ext="ora"><pre class="language-ora"><code>kfdb212 =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.201.212)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = kfdbpdb)
    )
  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加好配置后，还需要在 PLSQL 中对 IntantClient 进行配置【配置 Oracle 主目录和 OCI 库，后面会讲到】，后续打开 PLSQL 时就无需每次输入数据库连接信息，只需输入密码即可（首次需要输入用户名）</p><h2 id="_5-plsql-配置" tabindex="-1"><a class="header-anchor" href="#_5-plsql-配置" aria-hidden="true">#</a> 5. PLSQL 配置</h2><blockquote><p>首先打开 <code>Configure -&gt; Preferences</code> 首选项界面</p><figure><img src="`+p+'" alt="image-20221119092740475" tabindex="0" loading="lazy"><figcaption>image-20221119092740475</figcaption></figure></blockquote><ul><li><strong>配置语言为中文</strong></li></ul><figure><img src="'+m+'" alt="image-20221119093713582" tabindex="0" loading="lazy"><figcaption>image-20221119093713582</figcaption></figure><p>点击 <code>Apply</code> 然后点击 <code>OK</code>，配置成功后界面变为中文语言</p><figure><img src="'+u+'" alt="image-20221119093835869" tabindex="0" loading="lazy"><figcaption>image-20221119093835869</figcaption></figure><ul><li><strong>配置 Oracle 主目录 和 OCI 库</strong></li></ul><figure><img src="'+f+'" alt="image-20221119100209566" tabindex="0" loading="lazy"><figcaption>image-20221119100209566</figcaption></figure><h2 id="_6-字符集环境变量配置" tabindex="-1"><a class="header-anchor" href="#_6-字符集环境变量配置" aria-hidden="true">#</a> 6. 字符集环境变量配置</h2><p>为防止出现字符集乱码问题，在正式使用 PLSQL 之前，我们需要进行字符集环境变量的配置</p><p>打开系统 <code>环境变量</code> 配置界面，在 <code>系统变量</code> 中 <code>新建</code> 一个变量，取名 <code>NLS_LANG</code>，值为 <code>SIMPLIFIED CHINESE_CHINA.AL32UTF8</code></p><figure><img src="'+h+'" alt="image-20221119192956222" tabindex="0" loading="lazy"><figcaption>image-20221119192956222</figcaption></figure><h2 id="_7-plsql-使用" tabindex="-1"><a class="header-anchor" href="#_7-plsql-使用" aria-hidden="true">#</a> 7. PLSQL 使用</h2><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3><p>在 Oracle 登录界面，输入正确的 <code>用户名</code> 和 <code>密码</code> 后，点击确定</p><figure><img src="'+_+'" alt="image-20221119092303310" tabindex="0" loading="lazy"><figcaption>image-20221119092303310</figcaption></figure><h3 id="查看表" tabindex="-1"><a class="header-anchor" href="#查看表" aria-hidden="true">#</a> 查看表</h3><p>在左下角的 <code>对象</code> 窗口中找到一个名为 <code>Tables</code> 的文件夹，展开这个文件夹就能够看到当前数据库下的所有表</p><figure><img src="'+b+'" alt="image-20221119193842743" tabindex="0" loading="lazy"><figcaption>image-20221119193842743</figcaption></figure><h3 id="执行-sql" tabindex="-1"><a class="header-anchor" href="#执行-sql" aria-hidden="true">#</a> 执行 SQL</h3><p>新建一个 SQL 窗口：<code>文件</code> -&gt; <code>新建(N)</code> -&gt; <code>SQL 窗口(S)</code></p><figure><img src="'+v+'" alt="image-20221120145347606" tabindex="0" loading="lazy"><figcaption>image-20221120145347606</figcaption></figure><p>键入需要执行的 SQL 语句，点击最上方一行的绿色按钮执行 SQL 语句【或者使用快捷键 <code>f8</code>】</p><blockquote><p>默认是执行窗口中的所有语句，如果在窗口中编写了多条语句，但是只想执行其中的部分语句，只需要先选中想要执行的语句，然后执行即可【存在多条 SQL 语句时，记得每条语句结尾写 ;】</p></blockquote><figure><img src="'+L+'" alt="image-20221120145822159" tabindex="0" loading="lazy"><figcaption>image-20221120145822159</figcaption></figure><p>查询结果在超过一定行数时会默认分页显示，点击如下图中的绿色按钮，可以展示所有数据</p><figure><img src="'+x+`" alt="image-20221120145637180" tabindex="0" loading="lazy"><figcaption>image-20221120145637180</figcaption></figure><h3 id="创建序列" tabindex="-1"><a class="header-anchor" href="#创建序列" aria-hidden="true">#</a> 创建序列</h3><blockquote><p>Oracle 的主键递增需要依赖序列，所以我们需要掌握序列的创建</p><p><strong>创建序列有两种方式：SQL 语句创建、PLSQL 可视化界面创建</strong></p></blockquote><p>SQL 语句创建模板如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> SEQUENCE SEQUENCE_NAME
 MINVALUE <span class="token number">1</span> <span class="token comment">--最小值</span>
 NOMAXVALUE <span class="token comment">--不设置最大值</span>
 <span class="token keyword">START</span> <span class="token keyword">WITH</span> <span class="token number">1</span> <span class="token comment">--从1开始计数</span>
 INCREMENT <span class="token keyword">BY</span> <span class="token number">1</span> <span class="token comment">--每次加1</span>
 NOCYCLE <span class="token comment">--一直累加，不循环</span>
 NOCACHE<span class="token punctuation">;</span> <span class="token comment">--不建缓冲区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PLSQL 可视化界面创建：<code>文件</code> -&gt; <code>新建(N)</code> -&gt; <code>序列(Q)</code></p><figure><img src="`+E+'" alt="image-20221120151256396" tabindex="0" loading="lazy"><figcaption>image-20221120151256396</figcaption></figure><h3 id="提交事务" tabindex="-1"><a class="header-anchor" href="#提交事务" aria-hidden="true">#</a> 提交事务</h3><p>有时候我们需要对数据库表进行锁表更新，可以通过在查询 SQL 语句后边跟一个 <code>for update</code> 来完成，编辑之前需要点击红色小锁按钮进行解锁【锁图案会变成另一个打开状态的绿色小锁】，编辑完数据后再点击进行上锁，然后点击最上面一行【执行按钮右侧的两个】的两个按钮，左边绿色的是提交事务按钮，右边红色的是回滚事务按钮</p><figure><img src="'+k+'" alt="image-20221120152616874" tabindex="0" loading="lazy"><figcaption>image-20221120152616874</figcaption></figure>',47);function T(O,z){const i=t("ExternalLinkIcon");return o(),c("div",null,[q,e("ul",null,[e("li",null,[a("链接："),e("a",C,[a("https://pan.baidu.com/s/1_hV6jVV4oBus0C19EgLMYQ?pwd=tdpp"),n(i)])]),N]),Q,e("ul",null,[e("li",null,[a("链接："),e("a",I,[a("https://pan.baidu.com/s/1j6q0tuD7g1T6seX9U6IK0A?pwd=qdrb"),n(i)])]),y]),A])}const V=s(S,[["render",T],["__file","plsql-1.html.vue"]]);export{V as default};
