import{_ as n,Z as s,$ as a,a5 as e}from"./framework-1fb77053.js";const t={},i=e(`<figure><img src="http://img.hl1015.top/blog/image-20211108090224759.png" alt="image-20211108090224759" tabindex="0" loading="lazy"><figcaption>image-20211108090224759</figcaption></figure><h2 id="_1-什么是分支" tabindex="-1"><a class="header-anchor" href="#_1-什么是分支" aria-hidden="true">#</a> 1. 什么是分支</h2><p>在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）</p><figure><img src="http://img.hl1015.top/blog/image-20211108150736098.png" alt="image-20211108150736098" tabindex="0" loading="lazy"><figcaption>image-20211108150736098</figcaption></figure><h2 id="_2-分支的好处" tabindex="-1"><a class="header-anchor" href="#_2-分支的好处" aria-hidden="true">#</a> 2. 分支的好处</h2><p>同时并行推进多个功能开发，提高开发效率。</p><p>各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。</p><h2 id="_3-分支的操作" tabindex="-1"><a class="header-anchor" href="#_3-分支的操作" aria-hidden="true">#</a> 3. 分支的操作</h2><table><thead><tr><th style="text-align:center;">命令名称</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">git branch 分支名</td><td style="text-align:center;">创建分支</td></tr><tr><td style="text-align:center;">git branch -v</td><td style="text-align:center;">查看分支</td></tr><tr><td style="text-align:center;">git checkout 分支名</td><td style="text-align:center;">切换分支</td></tr><tr><td style="text-align:center;">git merge 分支名</td><td style="text-align:center;">把指定的分支合并到当前分支上</td></tr></tbody></table><h3 id="_3-1-查看分支" tabindex="-1"><a class="header-anchor" href="#_3-1-查看分支" aria-hidden="true">#</a> 3.1 查看分支</h3><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* master 1738a0e my first commit （* 代表当前所在的分支）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建分支" tabindex="-1"><a class="header-anchor" href="#_3-2-创建分支" aria-hidden="true">#</a> 3.2 创建分支</h3><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch hot-fix

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  hot-fix 1738a0e my first commit （刚创建的新分支，并将主分支 master 的内容复制了一份）
* master  1738a0e my first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-修改分支" tabindex="-1"><a class="header-anchor" href="#_3-3-修改分支" aria-hidden="true">#</a> 3.3 修改分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--- 在 master 分支上做修改 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git！hello hkw！master-test
hello git！hello hkw！

--- 添加暂存区 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt

--- 提交本地库 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;my third commit&quot;</span> hello.txt
<span class="token punctuation">[</span>master f333df8<span class="token punctuation">]</span> my third commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>

--- 查看分支 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  hot-fix 1738a0e my first commit （hot-fix 分支并未做任何改变）
* master  f333df8 my third commit （当前 master 分支已更新为最新一次提交的版本）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-切换分支" tabindex="-1"><a class="header-anchor" href="#_3-4-切换分支" aria-hidden="true">#</a> 3.4 切换分支</h3><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--- 切换分支 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout hot-fix
Switched to branch <span class="token string">&#39;hot-fix&#39;</span>

--- 发现当前分支已由 master 改为 hot-fix ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* hot-fix 1738a0e my first commit
  master  f333df8 my third commit

--- 查看 hot-fix 分支上的内容发现与 master 分支上的内容不同 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git！hello hkw！
hello git！hello hkw！

--- 在 hot-fix 分支上做修改 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git！hello hkw！ hot-fix-test
hello git！hello hkw！

--- 添加暂存区 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt

--- 提交本地库 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;hot-fix commit&quot;</span> hello.txt
<span class="token punctuation">[</span>hot-fix 2ead043<span class="token punctuation">]</span> hot-fix commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-合并分支" tabindex="-1"><a class="header-anchor" href="#_3-5-合并分支" aria-hidden="true">#</a> 3.5 合并分支</h3><p><strong>（1）基本语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）案例实操 - 在 master 分支上合并 hot-fix 分支</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge hot-fix
Auto-merging hello.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> hello.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-产生冲突" tabindex="-1"><a class="header-anchor" href="#_3-6-产生冲突" aria-hidden="true">#</a> 3.6 产生冲突</h3><p>冲突产生的表现：后面的状态为 <span style="color:red;">MERGING</span></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
hello git！hello hkw！master-test
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
hello git！hello hkw！ hot-fix-test
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hot-fix
hello git！hello hkw！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冲突产生的原因：</p><p>     合并分支时，两个分支在同一文件的同一个位置有两套完全不同的修改。Git 无法替我们决定使用哪一个，必须人为决定新代码内容。</p><p>查看状态（检测到文件有两处修改）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>

Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>
        both modified:   hello.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-解决冲突" tabindex="-1"><a class="header-anchor" href="#_3-7-解决冲突" aria-hidden="true">#</a> 3.7 解决冲突</h3><p>（1）编辑有冲突的文件，删除特殊符号，决定要使用的内容</p><p>特殊符号：<span style="color:red;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span> 当前分支的代码 <span style="color:red;">=======</span> 合并过来的代码 <span style="color:red;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; hot-fix</span></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt

Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git！hello hkw！master-test
hello git！hello hkw！hot-fix-test
hello git！hello hkw！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）添加到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）执行提交（注意：此时使用 git commit 命令时 <span style="color:red;"><strong>不能带文件名</strong></span>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;merge hot-fix&quot;</span>
<span class="token punctuation">[</span>master fd0c18d<span class="token punctuation">]</span> merge hot-fix

--- 发现后面的状态 MERGING 消失，变为正常 ---
Administrator@WIN-84I7718196I MINGW64 ~/Desktop/git_test <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-创建分支和切换分支图解" tabindex="-1"><a class="header-anchor" href="#_4-创建分支和切换分支图解" aria-hidden="true">#</a> 4. 创建分支和切换分支图解</h2><figure><img src="http://img.hl1015.top/blog/image-20211108171125543.png" alt="image-20211108171125543" tabindex="0" loading="lazy"><figcaption>image-20211108171125543</figcaption></figure><p>master、hot-fix 其实都是指向具体版本记录的指针。当前所在的分支，其实是由 HEAD 决定的，所以创建分支的本质就是多创建一个指针。</p><p>HEAD 如果指向 master，那么我们现在就在 master 分支上。</p><p>HEAD 如果执行 hot-fix，那么我们现在就在 hot-fix 分支上。</p><p>所以，切换分支的本质就是移动 HEAD 指针。</p>`,52),l=[i];function o(c,d){return s(),a("div",null,l)}const p=n(t,[["render",o],["__file","git-4.html.vue"]]);export{p as default};
