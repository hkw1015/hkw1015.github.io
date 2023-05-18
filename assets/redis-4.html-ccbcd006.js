import{_ as i,Z as a,$ as e,a5 as l}from"./framework-1fb77053.js";const t={},g=l('<h2 id="_1-units-单位" tabindex="-1"><a class="header-anchor" href="#_1-units-单位" aria-hidden="true">#</a> 1. Units 单位</h2><ul><li>配置大小单位，开头定义了一些基本的度量单位，只支持 bytes，不支持 bit</li><li>大小写不敏感</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117191027942.png" alt="image-20211117191027942" tabindex="0" loading="lazy"><figcaption>image-20211117191027942</figcaption></figure><h2 id="_2-includes-包含" tabindex="-1"><a class="header-anchor" href="#_2-includes-包含" aria-hidden="true">#</a> 2. INCLUDES 包含</h2><p>类似于 jsp 中的 include，多实例的情况下可以把公用的配置文件提取出来</p><figure><img src="http://img.hl1015.top/blog/image-20211117191141188.png" alt="image-20211117191141188" tabindex="0" loading="lazy"><figcaption>image-20211117191141188</figcaption></figure><h2 id="_3-网络相关配置" tabindex="-1"><a class="header-anchor" href="#_3-网络相关配置" aria-hidden="true">#</a> 3. 网络相关配置</h2><h3 id="_3-1-bind" tabindex="-1"><a class="header-anchor" href="#_3-1-bind" aria-hidden="true">#</a> 3.1 bind</h3><ul><li>默认情况 bind=127.0.0.1 只能接受本机的访问请求，不写的情况下，无限制接收任何 ip 地址的访问</li><li>生产环境肯定要写你应用服务器的地址，服务器是需要远程访问的，所以需要将其注释掉</li><li><span style="color:red;">如果开启了 protected-mode，那么在没有设定 bind ip 且没有设密码的情况下，Redis 只允许接受本机的响应</span></li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117193127958.png" alt="image-20211117193127958" tabindex="0" loading="lazy"><figcaption>image-20211117193127958</figcaption></figure><p>保存配置，停止服务，重新启动查看进程，不再是本机访问了</p><figure><img src="http://img.hl1015.top/blog/image-20211117193431679.png" alt="image-20211117193431679" tabindex="0" loading="lazy"><figcaption>image-20211117193431679</figcaption></figure><h3 id="_3-2-protected-mode" tabindex="-1"><a class="header-anchor" href="#_3-2-protected-mode" aria-hidden="true">#</a> 3.2 protected-mode</h3><p>将本机访问保护模式设置 no</p><figure><img src="http://img.hl1015.top/blog/image-20211117193639739.png" alt="image-20211117193639739" tabindex="0" loading="lazy"><figcaption>image-20211117193639739</figcaption></figure><h3 id="_3-3-port" tabindex="-1"><a class="header-anchor" href="#_3-3-port" aria-hidden="true">#</a> 3.3 port</h3><p>端口号，默认 6379</p><figure><img src="http://img.hl1015.top/blog/image-20211117195843479.png" alt="image-20211117195843479" tabindex="0" loading="lazy"><figcaption>image-20211117195843479</figcaption></figure><h3 id="_3-4-tcp-backlog" tabindex="-1"><a class="header-anchor" href="#_3-4-tcp-backlog" aria-hidden="true">#</a> 3.4 tcp-backlog</h3><ul><li>设置 tcp 的 backlog，backlog 其实是一个连接队列，backlog 队列总和 = 未完成三次握手队列 + 已经完成三次握手队列</li><li>在高并发环境下你需要一个高 backlog 值来避免慢客户端连接问题</li><li>注意 Linux 内核会将这个值减小到 /proc/sys/net/core/somaxconn 的值（128），所以需要确认增大 /proc/sys/net/core/somaxconn 和 /proc/sys/net/ipv4/tcp_max_syn_backlog（128），两个值来达到想要的效果</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117200353451.png" alt="image-20211117200353451" tabindex="0" loading="lazy"><figcaption>image-20211117200353451</figcaption></figure><h3 id="_3-5-timeout" tabindex="-1"><a class="header-anchor" href="#_3-5-timeout" aria-hidden="true">#</a> 3.5 timeout</h3><p>一个空闲的客户端维持多少秒会关闭，0 表示关闭该功能，即<span style="color:red;">永不关闭</span></p><figure><img src="http://img.hl1015.top/blog/image-20211117200711480.png" alt="image-20211117200711480" tabindex="0" loading="lazy"><figcaption>image-20211117200711480</figcaption></figure><h3 id="_3-6-tcp-keepalive" tabindex="-1"><a class="header-anchor" href="#_3-6-tcp-keepalive" aria-hidden="true">#</a> 3.6 tcp-keepalive</h3><ul><li>对访问客户端的一种<span style="color:red;">心跳检测</span>，每隔 n 秒检测一次</li><li>单位为秒，如果设置为 0，则不会进行 Keepalive 检测，建议设置成 60</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117201034413.png" alt="image-20211117201034413" tabindex="0" loading="lazy"><figcaption>image-20211117201034413</figcaption></figure><h2 id="_4-general-通用" tabindex="-1"><a class="header-anchor" href="#_4-general-通用" aria-hidden="true">#</a> 4. GENERAL 通用</h2><h3 id="_4-1-daemonize" tabindex="-1"><a class="header-anchor" href="#_4-1-daemonize" aria-hidden="true">#</a> 4.1 daemonize</h3><p>是否为后台进程，设置为 yes（守护进程，后台启动）</p><figure><img src="http://img.hl1015.top/blog/image-20211117201332021.png" alt="image-20211117201332021" tabindex="0" loading="lazy"><figcaption>image-20211117201332021</figcaption></figure><h3 id="_4-2-pidfile" tabindex="-1"><a class="header-anchor" href="#_4-2-pidfile" aria-hidden="true">#</a> 4.2 pidfile</h3><p>存放 pid 文件的位置，每个实例会产生一个不同的 pid 文件</p><figure><img src="http://img.hl1015.top/blog/image-20211117201513982.png" alt="image-20211117201513982" tabindex="0" loading="lazy"><figcaption>image-20211117201513982</figcaption></figure><h3 id="_4-3-loglevel" tabindex="-1"><a class="header-anchor" href="#_4-3-loglevel" aria-hidden="true">#</a> 4.3 loglevel</h3><p>指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 <span style="color:red;"><strong>notice</strong></span></p><p>四个级别根据使用阶段来选择，生产环境 notice 或者 warning</p><figure><img src="http://img.hl1015.top/blog/image-20211117202016878.png" alt="image-20211117202016878" tabindex="0" loading="lazy"><figcaption>image-20211117202016878</figcaption></figure><h3 id="_4-4-logfile" tabindex="-1"><a class="header-anchor" href="#_4-4-logfile" aria-hidden="true">#</a> 4.4 logfile</h3><p>日志文件名称</p><figure><img src="http://img.hl1015.top/blog/image-20211117202208048.png" alt="image-20211117202208048" tabindex="0" loading="lazy"><figcaption>image-20211117202208048</figcaption></figure><h3 id="_4-5-databases-16" tabindex="-1"><a class="header-anchor" href="#_4-5-databases-16" aria-hidden="true">#</a> 4.5 databases 16</h3><p>设定库的数量，默认 16，默认数据库为 0，可以使用 SELECT &lt;dbid&gt; 命令在连接上指定数据库 id</p><figure><img src="http://img.hl1015.top/blog/image-20211117202427870.png" alt="image-20211117202427870" tabindex="0" loading="lazy"><figcaption>image-20211117202427870</figcaption></figure><h2 id="_5-security-安全" tabindex="-1"><a class="header-anchor" href="#_5-security-安全" aria-hidden="true">#</a> 5. SECURITY 安全</h2><h3 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码" aria-hidden="true">#</a> 设置密码</h3><ul><li>访问密码的查看、设置和取消</li><li>在命令中设置密码，只是临时的，重启 redis 服务器，密码就还原了</li><li>永久设置，需要在配置文件中进行设置</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117203247312.png" alt="image-20211117203247312" tabindex="0" loading="lazy"><figcaption>image-20211117203247312</figcaption></figure><figure><img src="http://img.hl1015.top/blog/image-20211117203633134.png" alt="image-20211117203633134" tabindex="0" loading="lazy"><figcaption>image-20211117203633134</figcaption></figure><h2 id="_6-limits-限制" tabindex="-1"><a class="header-anchor" href="#_6-limits-限制" aria-hidden="true">#</a> 6. LIMITS 限制</h2><h3 id="_6-1-maxclients" tabindex="-1"><a class="header-anchor" href="#_6-1-maxclients" aria-hidden="true">#</a> 6.1 maxclients</h3><ul><li>设置 redis 同时可以与多少个客户端进行连接</li><li>默认情况下为 10000 个客户端</li><li>如果达到了此限制，redis 则会拒绝新的连接请求，并且向这些连接请求方发出 &quot;max number for clients reached&quot; 以作回应</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117204024967.png" alt="image-20211117204024967" tabindex="0" loading="lazy"><figcaption>image-20211117204024967</figcaption></figure><h3 id="_6-2-maxmemory" tabindex="-1"><a class="header-anchor" href="#_6-2-maxmemory" aria-hidden="true">#</a> 6.2 maxmemory</h3><ul><li>建议<span style="color:red;"><strong>必须设置</strong></span>，否则，会导致内存占满，造成服务器宕机</li><li>设置 redis 可以使用的内存量，一旦到达内存使用上限，redis 将会试图移除内部数据，移除规则可以通过 maxmemory-policy 来指定</li><li>如果 redis 无法根据移除规则来移除内存中的数据，或者设置了 &quot;不允许移除&quot;，那么 redis 则会针对那些需要申请内存的指令返回错误信息，比如 SET、LPUSH 等</li><li>但是对于无内存申请的指令，仍然会正常响应，比如 GET 等。如果你的 redis 是主 redis（说明你的 redis 有从 redis），那么在设置内存使用上限时，需要在系统中留出一些内存空间给同步队列缓存，只有在你设置的是 &quot;不移除&quot; 的情况下，才不用考虑这个因素。</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117210710238.png" alt="image-20211117210710238" tabindex="0" loading="lazy"><figcaption>image-20211117210710238</figcaption></figure><h3 id="_6-3-maxmemory-policy" tabindex="-1"><a class="header-anchor" href="#_6-3-maxmemory-policy" aria-hidden="true">#</a> 6.3 maxmemory-policy</h3><ul><li>volatile-lru：使用 LRU 算法移除 key，只对设置了<span style="color:red;">过期时间</span>的键（最近最少使用）</li><li>allkeys-lru：在所有集合 key 中，使用 LRU 算法移除 key</li><li>volatile-random：在过期集合中移除随机的 key，只对设置了过期时间的键</li><li>allkeys-random：在所有集合 key 中，移除随机的 key</li><li>volatile-ttl：移除那些 TTL 值最小的 key，即那些最近要过期的 key</li><li>noevicton：不进行移除，针对写操作，只是返回错误信息</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117212618200.png" alt="image-20211117212618200" tabindex="0" loading="lazy"><figcaption>image-20211117212618200</figcaption></figure><h3 id="_6-4-maxmemory-samples" tabindex="-1"><a class="header-anchor" href="#_6-4-maxmemory-samples" aria-hidden="true">#</a> 6.4 maxmemory-samples</h3><ul><li>设置样本数量，LRU 算法和最小 TTL 算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis 默认会检查这么多个 key 并选择其中 LRU 的那个</li><li>一般设置 3 到 7 的数字，数值越小样本越不准确，但性能消耗越小</li></ul><figure><img src="http://img.hl1015.top/blog/image-20211117212952920.png" alt="image-20211117212952920" tabindex="0" loading="lazy"><figcaption>image-20211117212952920</figcaption></figure>',62),r=[g];function n(o,d){return a(),e("div",null,r)}const p=i(t,[["render",n],["__file","redis-4.html.vue"]]);export{p as default};