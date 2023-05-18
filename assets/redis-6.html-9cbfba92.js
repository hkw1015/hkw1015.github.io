import{_ as s,Z as n,$ as a,a5 as e}from"./framework-1fb77053.js";const t={},p=e(`<h2 id="_1-bitmaps" tabindex="-1"><a class="header-anchor" href="#_1-bitmaps" aria-hidden="true">#</a> 1. Bitmaps</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><p>现代计算机用二进制（位）作为信息的基础单位，1 个字节等于 8 位，例如 &quot;abc&quot; 字符串是由 3 个字节组成，但实际在计算机存储时将其用二进制表示，&quot;abc&quot; 分别对应的 ASCII 码分别是 97、98、99，对应的二进制分别是 01100001、01100010 和 01100011，如下图：</p><figure><img src="http://img.hl1015.top/blog/image-20211117231027912.png" alt="image-20211117231027912" tabindex="0" loading="lazy"><figcaption>image-20211117231027912</figcaption></figure><p>合理地使用操作位能够有效地提高内存使用率和开发效率。</p><p>Redis 提供了 Bitmaps 这个 &quot;数据类型&quot; 可以实现对位的操作：</p><p>（1）Bitmaps 本身不是一种数据类型，实际上它就是字符串（key-value），但是它可以对字符串的位进行操作</p><p>（2）Bitmaps 单独提供了一套命令，所以在 Redis 中使用 Bitmaps 和使用字符串的方法不太相同，可以把 Bitmaps 想象成一个以位为单位的数组，数组的每个单元只能存储 0 和 1，数组的下标在 Bitmaps 中叫做偏移量</p><figure><img src="http://img.hl1015.top/blog/image-20211118090047532.png" alt="image-20211118090047532" tabindex="0" loading="lazy"><figcaption>image-20211118090047532</figcaption></figure><h3 id="_1-2-命令" tabindex="-1"><a class="header-anchor" href="#_1-2-命令" aria-hidden="true">#</a> 1.2 命令</h3><h4 id="_1-2-1-setbit" tabindex="-1"><a class="header-anchor" href="#_1-2-1-setbit" aria-hidden="true">#</a> 1.2.1 setbit</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setbit <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>offset<span class="token operator">&gt;</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token comment"># 设置 Bitmaps 中某个偏移量的值（0 或 1）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>注：offset 偏移量从 0 开始</code></p><p><strong>（2）实例</strong></p><p>每个独立用户是否访问过网站存放在 Bitmaps 中，将访问的用户记作 1，没有访问的用户记作 0，用偏移量作为用户的 id</p><p>设置键的第 offset 个位的值（从 0 算起），假设现在有 20 个用户，userid = 1，6，11，15，19 的用户对网站进行了访问，那么当前 Bitmaps 初始化结果如图：</p><figure><img src="http://img.hl1015.top/blog/image-20211118090659444.png" alt="image-20211118090659444" tabindex="0" loading="lazy"><figcaption>image-20211118090659444</figcaption></figure><p>unique:users:2021118 代表 2021-11-18 这天的独立访问用户的 Bitmaps</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20211118 <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20211118 <span class="token number">6</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20211118 <span class="token number">11</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20211118 <span class="token number">15</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20211118 <span class="token number">19</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;">注：</span>①很多应用的用户id以一个指定数字（例如 10000）开头，直接将用户 id 和 Bitmaps 的偏移量对应势必会造成一定的浪费，通常的做法是每次做 setbit 操作时将用户 id 减去这个指定数字；②在第一次初始化 Bitmaps 时，假如偏移量非常大，那么整个初始化过程执行会比较慢，可能会造成 Redis 的阻塞</p><h4 id="_1-2-2-getbit" tabindex="-1"><a class="header-anchor" href="#_1-2-2-getbit" aria-hidden="true">#</a> 1.2.2 getbit</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getbit <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>offset<span class="token operator">&gt;</span> <span class="token comment"># 获取 Bitmaps 中某个偏移量的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>注：offset 偏移量从 0 开始</code></p><p><strong>（2）实例</strong></p><p>获取 id = 8 的用户是否在 2021-11-18 这天访问过，返回 0 说明没有访问过</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getbit unique:users:20211118 <span class="token number">8</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getbit unique:users:20211118 <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getbit unique:users:20211118 <span class="token number">100</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>注：因为 100 根本不存在，所以也是返回 0</code></p><h4 id="_1-2-3-bitcount" tabindex="-1"><a class="header-anchor" href="#_1-2-3-bitcount" aria-hidden="true">#</a> 1.2.3 bitcount</h4><p>统计字符串被设置为 1 的 bit 数。一般情况下，给定的整个字符串都会被进行计数，通过指定额外的 start 或 end 参数，可以让计数只在特定的位上进行。start 和 end 参数的设置，都可以使用负数值：比如 -1 表示最后一位，而 -2 表示倒数第二个位，start、end 是指 bit 组的字节的下标数，二者皆包含。</p><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcount <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token punctuation">[</span>start end<span class="token punctuation">]</span> <span class="token comment"># 统计字符串从 start 字节到 end 字节比特值为 1 的数量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><p>计算 2021-11-18 这天的独立访问用户数量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitcount unique:users:20211118
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>start 和 end 代表起始和结束字节数，下面操作计算用户 id 在第 1 个字节到第 3 个字节之间的独立访问用户数，对应的用户 id 是 11，15，19</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitcount unique:users:20211118 <span class="token number">1</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：<span style="color:red;">K1 【01000001 01000000 00000000 00100001】，对应下标【0, 1, 2, 3】</span></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitcount K1 <span class="token number">1</span> <span class="token number">2</span> <span class="token comment"># 统计下标 1、2 字节组中 bit = 1 的个数，即 01000000 00000000，结果为 1</span>

bitcount K1 <span class="token number">1</span> <span class="token number">3</span> <span class="token comment"># 统计下标 1、3 字节组中 bit = 1 的个数，即 01000000 00000000 00100001，结果为 3</span>

bitcount K1 <span class="token number">0</span> <span class="token parameter variable">-2</span> <span class="token comment"># 统计下标 0 到下标倒数第 2 的字节组中 bit = 1 的个数，即 01000001 01000000 00000000，结果为 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>注意：Redis 的 setbit 设置或清除的是 bit 位置，而 bitcount 计算的是 byte 位置</code></p><h4 id="_1-2-4-bitop" tabindex="-1"><a class="header-anchor" href="#_1-2-4-bitop" aria-hidden="true">#</a> 1.2.4 bitop</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bitop and<span class="token punctuation">(</span>or/not/xor<span class="token punctuation">)</span> <span class="token operator">&lt;</span>destkey<span class="token operator">&gt;</span><span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>bitop 是一个复合操作，它可以做多个 Bitmaps 的 and（交集）、or（并集）、not（非）、xor（异或）操作并将结果保存在 destkey 中。</p><p>2020-11-04 日访问网站的 userid = 1,2,5,9</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201104 <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201104 <span class="token number">2</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201104 <span class="token number">5</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201104 <span class="token number">9</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2020-11-03 日访问网站的 userid = 0,1,4,9</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201103 <span class="token number">0</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201103 <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201103 <span class="token number">4</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setbit unique:users:20201103 <span class="token number">9</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算出两天都访问过网站的用户数量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitop and unique:users:and:20201104_03 unique:users:20201103 unique:users:20201104
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitcount unique:users:and:20201104_03
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20211118095852405.png" alt="image-20211118095852405" tabindex="0" loading="lazy"><figcaption>image-20211118095852405</figcaption></figure><p>计算出任意一天都访问过网站的用户数量（例如月活跃就是类似这种），可以使用 or 求并集</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitop or unique:users:or:20201104_03 unique:users:20201103 unique:users:20201104
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> bitcount unique:users:or:20201104_03
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-bitmaps-与-set-对比" tabindex="-1"><a class="header-anchor" href="#_1-3-bitmaps-与-set-对比" aria-hidden="true">#</a> 1.3 Bitmaps 与 Set 对比</h3><p>假设网站有 1 亿用户，每天独立访问的用户有 5 千万，如果每天用集合类型和 Bitmaps 分别存储活跃用户：</p><p><strong>Set 和 Bitmaps 存储一天活跃用户对比</strong></p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">每个 userid 占用空间</th><th style="text-align:center;">需要存储的用户量</th><th style="text-align:center;">全部内存量</th></tr></thead><tbody><tr><td style="text-align:center;">Set</td><td style="text-align:center;">64 位</td><td style="text-align:center;">50000000</td><td style="text-align:center;">64 位 * 50000000 = 400 MB</td></tr><tr><td style="text-align:center;">Bitmaps</td><td style="text-align:center;">1 位</td><td style="text-align:center;">100000000</td><td style="text-align:center;">1 位 * 100000000 = 12.5 MB</td></tr></tbody></table><p>很明显，这种情况下使用 Bitmaps 能节省很多的内存空间，尤其是随着时间推移节省的内存还是非常可观的</p><p><strong>Set 和 Bitmaps 存储独立用户空间对比</strong></p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">一天</th><th style="text-align:center;">一个月</th><th style="text-align:center;">一年</th></tr></thead><tbody><tr><td style="text-align:center;">Set</td><td style="text-align:center;">400 MB</td><td style="text-align:center;">12 GB</td><td style="text-align:center;">144 GB</td></tr><tr><td style="text-align:center;">Bitmaps</td><td style="text-align:center;">12.5 MB</td><td style="text-align:center;">375 MB</td><td style="text-align:center;">4.5 GB</td></tr></tbody></table><p>但 Bitmaps 并不是万金油，假如该网站每天的独立访问用户很少，例如只有 10 万（大量的僵尸用户），那么两者的对比如下表所示，很显然，这时候使用 Bitmaps 就不太合适了，因为基本上大部分位都是 0</p><p><strong>Set 和 Bitmaps 存储一天活跃用户对比（独立用户较少）</strong></p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">每个 userid 占用空间</th><th style="text-align:center;">需要存储的用户量</th><th style="text-align:center;">全部内存量</th></tr></thead><tbody><tr><td style="text-align:center;">Set</td><td style="text-align:center;">64 位</td><td style="text-align:center;">100000</td><td style="text-align:center;">64 位 * 100000 = 800 KB</td></tr><tr><td style="text-align:center;">Bitmaps</td><td style="text-align:center;">1 位</td><td style="text-align:center;">100000000</td><td style="text-align:center;">1 位 * 100000000 = 12.5 MB</td></tr></tbody></table><h2 id="_2-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_2-hyperloglog" aria-hidden="true">#</a> 2. HyperLogLog</h2><h3 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介" aria-hidden="true">#</a> 2.1 简介</h3><p>在工作当中，我们经常会遇到与统计相关的功能需求，比如统计网站 PV（PageView 页面访问量），可以使用 Redis 的 incr、incrby 轻松实现。但像 UV（UniqueVisitor，独立访客）、独立 IP 数、搜索记录数等需要去重和计数的问题如何解决？这种求集合中不重复元素个数的问题称为基数问题。</p><p>解决基数问题有很多种方案：</p><p>（1）数据存储在 MySQL 表中，使用 distinct count 计算不重复个数</p><p>（2）使用 Redis 提供的 hash、set、bitmaps 等数据结构来处理</p><p>以上的方案结果精确，但随着数据不断增加，导致占用内存越来越大，对于非常大的数据集是不切实际的。</p><p>能否能够降低一定的精度来平衡存储空间？ ===》 Redis 推出了 HyperLogLog</p><p>Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的，并且是很小的。在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 2^64 个不同元素的基数，这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会存储输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。</p><p>什么是基数？--- 比如数据集 {1, 3, 5, 7, 5, 7, 8}，那么这个数据集的基数集为 {1, 3, 5, 7, 8}，基数（不重复元素）为 5, 7。基数估计就是在误差可接受的范围内，快速计算基数。</p><h3 id="_2-2-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-命令" aria-hidden="true">#</a> 2.2 命令</h3><h4 id="_2-2-1-pfadd" tabindex="-1"><a class="header-anchor" href="#_2-2-1-pfadd" aria-hidden="true">#</a> 2.2.1 pfadd</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pfadd <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>element<span class="token operator">&gt;</span><span class="token punctuation">[</span>element <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 添加指定元素到 HyperLogLog 中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;mysql&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将所有元素添加到 HyperLogLog 数据结构中，如果执行命令后 HLL 估计的近似基数发生变化，则返回 1，否则返回 0</p><h4 id="_2-2-2-pfcount" tabindex="-1"><a class="header-anchor" href="#_2-2-2-pfcount" aria-hidden="true">#</a> 2.2.2 pfcount</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pfcount <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 计算 HLL 的近似基数，可以计算多个 HLL，比如用 HLL 存储每天的 UV，计算一周的 UV 可以使用 7 天的 UV 合并计算即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;mysql&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll1 <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfcount hll1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll2 <span class="token string">&quot;redis&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfadd hll2 <span class="token string">&quot;mongdb&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfcount hll1 hll2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-pfmerge" tabindex="-1"><a class="header-anchor" href="#_2-2-3-pfmerge" aria-hidden="true">#</a> 2.2.3 pfmerge</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pfcount <span class="token operator">&lt;</span>destkey<span class="token operator">&gt;</span><span class="token operator">&lt;</span>sourcekey<span class="token operator">&gt;</span><span class="token punctuation">[</span>sourcekey <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 将一个或多个 HLL 合并后的结果存储在另一个 HLL 中，比如每月活跃用户可以使用每天的活跃用户来合并计算可得</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfcount hll1 hll2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfmerge hll3 hll1 hll2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> pfcount hll3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-geographic" tabindex="-1"><a class="header-anchor" href="#_3-geographic" aria-hidden="true">#</a> 3. Geographic</h2><h3 id="_3-1-简介" tabindex="-1"><a class="header-anchor" href="#_3-1-简介" aria-hidden="true">#</a> 3.1 简介</h3><p>Redis 3.2 中增加了对 GEO【Geographic，地理信息的缩写】类型的支持。该类型就是元素的二维坐标，在地图上就是经纬度。Redis 基于该类型，提供了经纬度设置，查询，范围查询，距离查询，经纬度 Hash 等常见操作。</p><h3 id="_3-2-命令" tabindex="-1"><a class="header-anchor" href="#_3-2-命令" aria-hidden="true">#</a> 3.2 命令</h3><h4 id="_3-2-1-geoadd" tabindex="-1"><a class="header-anchor" href="#_3-2-1-geoadd" aria-hidden="true">#</a> 3.2.1 geoadd</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geoadd <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>longitude<span class="token operator">&gt;</span><span class="token operator">&lt;</span>latitude<span class="token operator">&gt;</span><span class="token operator">&lt;</span>member<span class="token operator">&gt;</span><span class="token punctuation">[</span>longitude latitude member <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 添加地理位置（经度，纬度，名称）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> geoadd china:city <span class="token number">121.47</span> <span class="token number">31.23</span> shanghai
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> geoadd china:city <span class="token number">106.50</span> <span class="token number">29.53</span> chongqing <span class="token number">114.05</span> <span class="token number">22.52</span> shenzhen <span class="token number">116.38</span> <span class="token number">39.90</span> beijing
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两极无法直接添加，<strong>一般会下载城市数据，直接通过 Java 程序一次性导入</strong>。</p><p>有效的经度从 -180 度到 180 度。有效的纬度从 -85.05112878 度到 85.05112878 度。</p><p>当坐标位置超出指定范围时，该命令将会返回一个错误。已经添加的数据，是无法再次往里面添加的。</p><h4 id="_3-2-2-geopos" tabindex="-1"><a class="header-anchor" href="#_3-2-2-geopos" aria-hidden="true">#</a> 3.2.2 geopos</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geopos <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>member<span class="token operator">&gt;</span><span class="token punctuation">[</span>member <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment"># 获得指定地区的坐标值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> geopos china:city shanghai
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;121.47000163793563843&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;31.22999903975783553&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-geodist" tabindex="-1"><a class="header-anchor" href="#_3-2-3-geodist" aria-hidden="true">#</a> 3.2.3 geodist</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geodlist <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>member<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>member<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token punctuation">[</span>m<span class="token operator">|</span>km<span class="token operator">|</span>ft<span class="token operator">|</span>mi<span class="token punctuation">]</span> <span class="token comment"># 获取两个位置之间的直线距离</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><p>获取 北京 和 上海 两地之间的距离</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> geodist china:city beijing shanghai
<span class="token string">&quot;1068153.5181&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> geodist china:city beijing shanghai km
<span class="token string">&quot;1068.1535&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>单位：</p><p>m 表示单位为 米（默认值）</p><p>km 表示单位为 千米</p><p>mi 表示单位为 英里</p><p>ft 表示单位为 英尺</p><p>如果用户没有显式地指定单位参数，那么 GEODIST 默认使用 米 作为单位</p></blockquote><h4 id="_3-2-4-georadius" tabindex="-1"><a class="header-anchor" href="#_3-2-4-georadius" aria-hidden="true">#</a> 3.2.4 georadius</h4><p><strong>（1）格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geodlist <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token operator">&lt;</span>longitude<span class="token operator">&gt;</span><span class="token operator">&lt;</span>latitude<span class="token operator">&gt;</span>radius m<span class="token operator">|</span>km<span class="token operator">|</span>ft<span class="token operator">|</span>mi <span class="token comment"># 以给定的经纬度为中心，找出某一半径内的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> georadius china:city <span class="token number">110</span> <span class="token number">30</span> <span class="token number">1000</span> km
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;chongqing&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;shenzhen&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120),i=[p];function o(r,l){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","redis-6.html.vue"]]);export{d as default};
