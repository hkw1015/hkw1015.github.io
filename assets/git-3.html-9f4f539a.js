import{_ as e,E as t,Z as i,$ as l,a0 as n,a1 as s,a3 as o,a5 as c}from"./framework-1fb77053.js";const p={},d=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"命令名称"),n("th",{style:{"text-align":"center"}},"作用")])],-1),r={style:{"text-align":"center"}},u={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},m=n("td",{style:{"text-align":"center"}},"设置用户签名",-1),v=n("tr",null,[n("td",{style:{"text-align":"center"}},"git config --global user.email 邮箱"),n("td",{style:{"text-align":"center"}},"设置用户签名")],-1),g=n("tr",null,[n("td",{style:{"text-align":"center"}},"git init"),n("td",{style:{"text-align":"center"}},"初始化本地库")],-1),b=n("tr",null,[n("td",{style:{"text-align":"center"}},"git status"),n("td",{style:{"text-align":"center"}},"查看本地库状态")],-1),k=n("tr",null,[n("td",{style:{"text-align":"center"}},"git add 文件名"),n("td",{style:{"text-align":"center"}},"添加到暂存区")],-1),h=n("tr",null,[n("td",{style:{"text-align":"center"}},'git commit -m "日志信息" 文件名'),n("td",{style:{"text-align":"center"}},"提交到本地库")],-1),I=n("tr",null,[n("td",{style:{"text-align":"center"}},"git reflog"),n("td",{style:{"text-align":"center"}},"查看历史记录")],-1),f=n("tr",null,[n("td",{style:{"text-align":"center"}},"git reset --hard 版本号"),n("td",{style:{"text-align":"center"}},"版本穿梭")],-1),x=c(`<h2 id="_1-设置用户签名" tabindex="-1"><a class="header-anchor" href="#_1-设置用户签名" aria-hidden="true">#</a> 1. 设置用户签名</h2><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name 用户名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><p>全局范围的签名设置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name hkw

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email hkw1015@163.com

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test
$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
        name <span class="token operator">=</span> hkw
        email <span class="token operator">=</span> hkw1015@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>     签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。Git 首次安装必须设置一下用户签名，否则无法提交代码。</p><p>     注意：这里设置用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。</p><h2 id="_2-初始化本地库" tabindex="-1"><a class="header-anchor" href="#_2-初始化本地库" aria-hidden="true">#</a> 2. 初始化本地库</h2><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test
$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> C:/Users/Administrator/Desktop/git_test/.git/

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ ll <span class="token parameter variable">-a</span>
total <span class="token number">12</span>
drwxr-xr-x <span class="token number">1</span> Administrator <span class="token number">197121</span> <span class="token number">0</span> <span class="token number">11</span>月  <span class="token number">7</span> <span class="token number">20</span>:24 ./
drwxr-xr-x <span class="token number">1</span> Administrator <span class="token number">197121</span> <span class="token number">0</span> <span class="token number">11</span>月  <span class="token number">7</span> <span class="token number">19</span>:41 <span class="token punctuation">..</span>/
drwxr-xr-x <span class="token number">1</span> Administrator <span class="token number">197121</span> <span class="token number">0</span> <span class="token number">11</span>月  <span class="token number">7</span> <span class="token number">20</span>:24 .git/ （.git 初始化的效果，生成 git）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）结果查看</strong></p><figure><img src="http://img.hl1015.top/blog/image-20211107202812407.png" alt="image-20211107202812407" tabindex="0" loading="lazy"><figcaption>image-20211107202812407</figcaption></figure><h2 id="_3-查看本地库状态" tabindex="-1"><a class="header-anchor" href="#_3-查看本地库状态" aria-hidden="true">#</a> 3. 查看本地库状态</h2><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><p>①首次查看（工作区没有任何文件）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

nothing to commit <span class="token punctuation">(</span>create/copy files and use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②新增文件（hello.txt）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt
hello git！hello hkw！
hello git！hello hkw！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③再次查看（检测到未追踪的文件）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        hello.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>④<span style="color:red;"><strong>添加</strong></span>暂存区</p><p>[1]将工作区的文件添加到暂存区</p><p>     &lt;1&gt;基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>    &lt;2&gt;案例实操</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[2]查看状态（检测到暂存区有新文件）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑤<span style="color:red;"><strong>提交</strong></span>本地库</p><p>[1]将暂存区的文件提交到本地库</p><p>     &lt;1&gt;基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;日志信息&quot;</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>    &lt;2&gt;案例实操</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;my first commit&quot;</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 1738a0e<span class="token punctuation">]</span> my first commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[2]查看状态（没有文件需要提交）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑥修改文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt
hello git！hello hkw！666
hello git！hello hkw！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[1]查看状态（检测到工作区有文件被修改）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
        modified:   hello.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[2]将修改的文件再次添加暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[3]查看状态（工作区的修改添加到了暂存区）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        modified:   hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[4]提交修改到本地库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;my second commit&quot;</span>
<span class="token punctuation">[</span>master 3911d3a<span class="token punctuation">]</span> my second commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[5]查看状态（没有文件需要提交）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑦<span style="color:red;"><strong>历史版本</strong></span></p><p>[1]查看历史版本</p><p>     &lt;1&gt;基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog 查看版本信息
<span class="token function">git</span> log 查看版本详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>     &lt;2&gt;案例实操</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
3911d3a <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit: my second commit
1738a0e HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[2]版本穿梭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 首先查看当前的历史记录，可以看到当前是 3911d3a 这个版本 --
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
3911d3a <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit: my second commit
1738a0e HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit

-- 切换到 1738a0e 版本，也就是我们第一次提交的版本 --
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 1738a0e
HEAD is now at 1738a0e my first commit

-- 切换完毕之后再查看历史记录，当前成功切换到了1738a0e 版本 --
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
1738a0e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: reset: moving to 1738a0e
3911d3a HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: my second commit
1738a0e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit

-- 然后查看文件 hello.txt，发现文件内容已经变化 --
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git！hello hkw！
hello git！hello hkw！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 切换版本，底层其实是移动的 HEAD 指针，具体原理如下图所示：</p><figure><img src="http://img.hl1015.top/blog/image-20211107214656265.png" alt="image-20211107214656265" tabindex="0" loading="lazy"><figcaption>image-20211107214656265</figcaption></figure>`,64);function _(y,N){const a=t("ExternalLinkIcon");return i(),l("div",null,[n("table",null,[d,n("tbody",null,[n("tr",null,[n("td",r,[s("git config --global "),n("a",u,[s("user.name"),o(a)]),s(" 用户名")]),m]),v,g,b,k,h,I,f])]),x])}const w=e(p,[["render",_],["__file","git-3.html.vue"]]);export{w as default};
