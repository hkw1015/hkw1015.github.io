import{_ as l,E as r,Z as g,$ as p,a0 as e,a1 as a,a3 as i,a4 as t,a5 as n}from"./framework-1fb77053.js";const c={},d=n('<h2 id="_1-本地镜像发布到私有库流程" tabindex="-1"><a class="header-anchor" href="#_1-本地镜像发布到私有库流程" aria-hidden="true">#</a> 1. 本地镜像发布到私有库流程</h2><figure><img src="http://img.hl1015.top/blog/image-20220310142751957.png" alt="image-20220310142751957" tabindex="0" loading="lazy"><figcaption>image-20220310142751957</figcaption></figure><h2 id="_2-私有库是什么" tabindex="-1"><a class="header-anchor" href="#_2-私有库是什么" aria-hidden="true">#</a> 2. 私有库是什么</h2>',3),u={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>Docker Hub、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私有仓库给团队使用，基于公司内部项目构建镜像</p><p><strong>Docker Registry 是官方提供的工具，可以用于构建私有镜像仓库</strong></p><h2 id="_3-将本地镜像推送到私有库" tabindex="-1"><a class="header-anchor" href="#_3-将本地镜像推送到私有库" aria-hidden="true">#</a> 3. 将本地镜像推送到私有库</h2><p><strong>1、下载镜像 Docker Registry</strong></p><figure><img src="http://img.hl1015.top/blog/image-20220310155417205.png" alt="image-20220310155417205" tabindex="0" loading="lazy"><figcaption>image-20220310155417205</figcaption></figure><p><strong>2、运行私有库 Registry，相当于本地有个私有 Docker Hub</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">-v</span> /root/myregistry/:/tmp/registry <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况，仓库被创建在容器的 /var/lib/registry 目录下，建议自行用容器卷映射，方便宿主机联调</p><figure><img src="http://img.hl1015.top/blog/image-20220310155732065.png" alt="image-20220310155732065" tabindex="0" loading="lazy"><figcaption>image-20220310155732065</figcaption></figure><p><strong>3、案例演示创建一个新镜像，ubuntu 安装 ifconfig 命令</strong></p><p>①从 Hub 上下载 ubuntu 镜像到本地并成功运行</p><figure><img src="http://img.hl1015.top/blog/image-20220310161004050.png" alt="image-20220310161004050" tabindex="0" loading="lazy"><figcaption>image-20220310161004050</figcaption></figure><p>②原始的 ubuntu 镜像是不带 ifconfig 命令的</p><figure><img src="http://img.hl1015.top/blog/image-20220310161027313.png" alt="image-20220310161027313" tabindex="0" loading="lazy"><figcaption>image-20220310161027313</figcaption></figure><p>③外网连通的情况下，安装 ifconfig 命令并测试通过</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310161711496.png" alt="image-20220310161711496" tabindex="0" loading="lazy"><figcaption>image-20220310161711496</figcaption></figure><p>④安装完成后，commit 我们自己的新镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;提交的描述信息&quot;</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;作者&quot;</span> 容器ID 要创建的目标镜像名:标签名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310162010715.png" alt="image-20220310162010715" tabindex="0" loading="lazy"><figcaption>image-20220310162010715</figcaption></figure><p>⑤启动新镜像并和原来的对比</p><figure><img src="http://img.hl1015.top/blog/image-20220310162319131.png" alt="image-20220310162319131" tabindex="0" loading="lazy"><figcaption>image-20220310162319131</figcaption></figure><p>官网默认下载的 ubuntu 镜像没有 ifconfig 命令，我们通过 commit 构建的新镜像，新增了 ifconfig 功能，可以成功使用</p><p><strong>4、curl 验证私有服上有什么镜像</strong></p><p>回到宿主机，使用 <code>ifconfig</code> 命令查看宿主机 ip</p><figure><img src="http://img.hl1015.top/blog/image-20220310163232254.png" alt="image-20220310163232254" tabindex="0" loading="lazy"><figcaption>image-20220310163232254</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-XGET</span> http://192.168.184.130:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310163444151.png" alt="image-20220310163444151" tabindex="0" loading="lazy"><figcaption>image-20220310163444151</figcaption></figure><p>可以看到，目前私有库没有任何镜像上传过</p><p><strong>5、将新镜像修改符合私有服规范的 TAG</strong></p><p>公式：<strong><code>docker tag 镜像:Tag Host:Port/Repository:Tag</code></strong></p><p>使用命令 docker tag 将 hkw/myubuntu:1.2 这个镜像修改为 192.168.184.130:5000/hkw/myubuntu:1.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag hkw/myubuntu:1.2 <span class="token number">192.168</span>.184.130:5000/hkw/myubuntu:1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310164034650.png" alt="image-20220310164034650" tabindex="0" loading="lazy"><figcaption>image-20220310164034650</figcaption></figure><p><strong>6、修改配置文件使之支持 HTTP</strong></p><p>理由：Docker 默认不允许 HTTP 方式推送镜像，通过配置选项来取消这个限制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑后内容应该类似如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://ovnvnphb.mirror.aliyuncs.com&quot;],
  &quot;insecure-registries&quot;: [&quot;192.168.184.130:5000&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),b=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">-v</span> /root/myregistry/:/tmp/registry <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),v=n(`<p><strong>7、push 推送到私有库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push <span class="token number">192.168</span>.184.130:5000/hkw/myubuntu:1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310165825004.png" alt="image-20220310165825004" tabindex="0" loading="lazy"><figcaption>image-20220310165825004</figcaption></figure><p><strong>8、再次通过 curl 验证私有库上有什么镜像</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-XGET</span> http://192.168.184.130:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310170046779.png" alt="image-20220310170046779" tabindex="0" loading="lazy"><figcaption>image-20220310170046779</figcaption></figure><p><strong>9、pull 到本地并运行</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token number">192.168</span>.184.130:5000/hkw/myubuntu:1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220310170449247.png" alt="image-20220310170449247" tabindex="0" loading="lazy"><figcaption>image-20220310170449247</figcaption></figure><p>验证 ifconfig 命令是否可用</p><figure><img src="http://img.hl1015.top/blog/image-20220310170728314.png" alt="image-20220310170728314" tabindex="0" loading="lazy"><figcaption>image-20220310170728314</figcaption></figure>`,11);function f(k,x){const o=r("ExternalLinkIcon"),s=r("font");return g(),p("div",null,[d,e("p",null,[a("官方 Docker Hub 地址："),e("a",u,[a("https://hub.docker.com"),i(o)]),a("，中国大陆访问太慢了且已经有了被阿里云取代的趋势，不太主流")]),m,e("blockquote",null,[e("p",null,[e("strong",null,[i(s,{color:"red"},{default:t(()=>[a("注意别遗漏了中间的逗号（非中文）")]),_:1})])]),i(s,{color:"blue"},{default:t(()=>[a("修改完后如果不生效，建议重启 Docker")]),_:1}),b,i(s,{color:"blue"},{default:t(()=>[a("重启之后，记得重新启动 registry")]),_:1}),h]),v])}const y=l(c,[["render",f],["__file","docker-basic-6.html.vue"]]);export{y as default};
