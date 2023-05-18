import{_ as c,E as t,Z as l,$ as d,a0 as e,a1 as a,a3 as n,a4 as i,a5 as r}from"./framework-1fb77053.js";const u={},p=e("h2",{id:"_1-docker-官网",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-docker-官网","aria-hidden":"true"},"#"),a(" 1. Docker 官网")],-1),h={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},g=e("figure",null,[e("img",{src:"http://img.hl1015.top/blog/image-20220304110115822.png",alt:"image-20220304110115822",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20220304110115822")],-1),m={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},b=r(`<figure><img src="http://img.hl1015.top/blog/image-20220304110058964.png" alt="image-20220304110058964" tabindex="0" loading="lazy"><figcaption>image-20220304110058964</figcaption></figure><h2 id="_2-前提说明" tabindex="-1"><a class="header-anchor" href="#_2-前提说明" aria-hidden="true">#</a> 2. 前提说明</h2><p><strong>CentOS Docker 安装</strong></p><ul><li>Docker 并非是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境</li><li>Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机</li><li>因此，Docker 必须部署在 Linux 内核的系统上，如果其他系统想部署 Docker 就必须安装一个虚拟 Linux 环境</li></ul><figure><img src="http://img.hl1015.top/blog/image-20220304131908734.png" alt="image-20220304131908734" tabindex="0" loading="lazy"><figcaption>image-20220304131908734</figcaption></figure><p>在 Windows 上部署 Docker 的方法都是先安装一个虚拟机，并在安装 Linux 系统的虚拟机中运行 Docker</p><p><strong>前提条件</strong></p><p>目前，CentOS 仅发行版本中的内核支持 Docker，Docker 运行在 CentOS 7（64-bit）上，要求系统为 64 位、Linux 系统内核版本为 3.8 以上</p><p><strong>查看自己的内核</strong></p><blockquote><p>uname 命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@centos101 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release </span>
CentOS Linux release <span class="token number">7.4</span>.1708 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span> 
<span class="token punctuation">[</span>root@centos101 ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">3.10</span>.0-693.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-docker-的基本组成" tabindex="-1"><a class="header-anchor" href="#_3-docker-的基本组成" aria-hidden="true">#</a> 3. Docker 的基本组成</h2><h3 id="_3-1-镜像-image" tabindex="-1"><a class="header-anchor" href="#_3-1-镜像-image" aria-hidden="true">#</a> 3.1 镜像（image）</h3>`,13),k=e("li",null,"image 相当于是一个 root 文件系统，比如官方镜像 centos:7 就包含了完整的一套 centos:7 最小系统的 root 文件系统",-1),v=r('<p>容器与镜像的关系类似于面向对象编程中的对象与类</p><table><thead><tr><th>Docker</th><th>面向对象</th></tr></thead><tbody><tr><td>容器</td><td>对象</td></tr><tr><td>镜像</td><td>类</td></tr></tbody></table><h3 id="_3-2-容器-container" tabindex="-1"><a class="header-anchor" href="#_3-2-容器-container" aria-hidden="true">#</a> 3.2 容器（container）</h3>',3),f=e("h3",{id:"_3-3-仓库-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-3-仓库-repository","aria-hidden":"true"},"#"),a(" 3.3 仓库（repository）")],-1),_=r('<p>类似于：Maven 仓库，存放各种 jar 包的地方；GitHub 仓库，存放各种 Git 项目的地方</p><p>Docker 公司提供的官方 registry 被称为 Docker Hub，存放各种镜像模板的地方</p><p>仓库分为公开仓库（public）和私有仓库（private）两种形式，最大的公开仓库是 Docker Hub，存放了数量庞大的镜像供用户下载</p><p>国内的公开仓库包括阿里云、网易云等</p><h3 id="_3-4-总结" tabindex="-1"><a class="header-anchor" href="#_3-4-总结" aria-hidden="true">#</a> 3.4 总结</h3><p>Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是 image 镜像文件，只有通过这个镜像文件才能生成 Docker 容器实例（类似于 Java 中 new 出来一个对象）</p><p>image 文件可以看作是容器的模板，Docker 根据 image 文件生成容器的实例，同一个 image 文件，可以生成多个同时运行的容器实例</p><ul><li><strong>镜像文件</strong>：image 文件可以生成容器实例，本身也是一个文件，称为镜像文件</li><li><strong>容器实例</strong>：一个容器运行一种服务，当我们需要的时候，就可以通过 Docker 客户端创建一个对应的运行实例，也就是我们的容器</li><li><strong>仓库</strong>：就是放一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候再从仓库中拉下来就可以了</li></ul><h2 id="_4-docker-平台架构图解" tabindex="-1"><a class="header-anchor" href="#_4-docker-平台架构图解" aria-hidden="true">#</a> 4. Docker 平台架构图解</h2><figure><img src="http://img.hl1015.top/blog/image-20220304135631557.png" alt="image-20220304135631557" tabindex="0" loading="lazy"><figcaption>image-20220304135631557</figcaption></figure><p><strong>Docker 工作原理</strong></p>',11),x=r('<figure><img src="http://img.hl1015.top/blog/image-20220304135943708.png" alt="image-20220304135943708" tabindex="0" loading="lazy"><figcaption>image-20220304135943708</figcaption></figure><p><strong>整体架构及底层通信原理简述</strong></p><p>Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职</p><p>Docker 运行的基本流程为：</p><ol><li>用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者</li><li>Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接收 Docker Client 的请求</li><li>Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式存在</li><li>Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph Driver 将下载的镜像以 Graph 的形式存储</li><li>当需要为 Docker 创建网络环境时，通过网络管理驱动 Network Driver 创建并配置 Docker 容器网络环境</li><li>当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Exec Driver 来完成</li><li>Libcontainer 是一项独立的容器管理包，Network Driver 以及 Exec Driver 都是通过 Libcontainer 来实现具体对容器进行的操作</li></ol><figure><img src="http://img.hl1015.top/blog/image-20220304143835924.png" alt="image-20220304143835924" tabindex="0" loading="lazy"><figcaption>image-20220304143835924</figcaption></figure><h2 id="_5-安装步骤【centos-上安装-docker】" tabindex="-1"><a class="header-anchor" href="#_5-安装步骤【centos-上安装-docker】" aria-hidden="true">#</a> 5. 安装步骤【CentOS 上安装 Docker】</h2>',7),D={href:"https://docs.docker.com/engine/install/centos",target:"_blank",rel:"noopener noreferrer"},y=r(`<h3 id="_5-1-确认是-centos-7-及以上版本" tabindex="-1"><a class="header-anchor" href="#_5-1-确认是-centos-7-及以上版本" aria-hidden="true">#</a> 5.1 确认是 CentOS 7 及以上版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@centos101 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release </span>
CentOS Linux release <span class="token number">7.4</span>.1708 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_5-2-卸载旧版本" aria-hidden="true">#</a> 5.2 卸载旧版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-yum-安装-gcc-相关依赖" tabindex="-1"><a class="header-anchor" href="#_5-3-yum-安装-gcc-相关依赖" aria-hidden="true">#</a> 5.3 yum 安装 gcc 相关依赖</h3><blockquote><p>机器能上外网的情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-安装需要的软件包" tabindex="-1"><a class="header-anchor" href="#_5-4-安装需要的软件包" aria-hidden="true">#</a> 5.4 安装需要的软件包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-5-设置-stable-镜像仓库" tabindex="-1"><a class="header-anchor" href="#_5-5-设置-stable-镜像仓库" aria-hidden="true">#</a> 5.5 设置 stable 镜像仓库</h3><blockquote><p>由于官网文档中是国外的网址，访问速度非常慢，不推荐使用，推荐使用国内的镜像仓库地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-6-更新-yum-软件包索引" tabindex="-1"><a class="header-anchor" href="#_5-6-更新-yum-软件包索引" aria-hidden="true">#</a> 5.6 更新 yum 软件包索引</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-7-安装-docker-ce" tabindex="-1"><a class="header-anchor" href="#_5-7-安装-docker-ce" aria-hidden="true">#</a> 5.7 安装 Docker CE</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-8-启动-docker" tabindex="-1"><a class="header-anchor" href="#_5-8-启动-docker" aria-hidden="true">#</a> 5.8 启动 Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-9-测试" tabindex="-1"><a class="header-anchor" href="#_5-9-测试" aria-hidden="true">#</a> 5.9 测试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220304155501426.png" alt="image-20220304155501426" tabindex="0" loading="lazy"><figcaption>image-20220304155501426</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://img.hl1015.top/blog/image-20220304155618583.png" alt="image-20220304155618583" tabindex="0" loading="lazy"><figcaption>image-20220304155618583</figcaption></figure><h3 id="_5-10-卸载" tabindex="-1"><a class="header-anchor" href="#_5-10-卸载" aria-hidden="true">#</a> 5.10 卸载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-配置阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#_6-配置阿里云镜像加速" aria-hidden="true">#</a> 6. 配置阿里云镜像加速</h2>`,28),C={href:"https://promotion.aliyun.com/ntms/act/kubernetes.html",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,"注册一个属于自己的阿里云账户（可复用淘宝账号）",-1),S=e("li",null,[a("登录阿里云，打开控制台，找到 "),e("strong",null,"容器镜像服务")],-1),w=r(`<figure><img src="http://img.hl1015.top/blog/image-20220304160625107.png" alt="image-20220304160625107" tabindex="0" loading="lazy"><figcaption>image-20220304160625107</figcaption></figure><figure><img src="http://img.hl1015.top/blog/image-20220304160837373.png" alt="image-20220304160837373" tabindex="0" loading="lazy"><figcaption>image-20220304160837373</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://ovnvnphb.mirror.aliyuncs.com&quot;]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-docker-run-干了什么" tabindex="-1"><a class="header-anchor" href="#_7-docker-run-干了什么" aria-hidden="true">#</a> 7. docker run 干了什么</h2><figure><img src="http://img.hl1015.top/blog/image-20220304163115609.png" alt="image-20220304163115609" tabindex="0" loading="lazy"><figcaption>image-20220304163115609</figcaption></figure><h2 id="_8-为什么-docker-比-vm-虚拟机快" tabindex="-1"><a class="header-anchor" href="#_8-为什么-docker-比-vm-虚拟机快" aria-hidden="true">#</a> 8. 为什么 Docker 比 VM 虚拟机快</h2><ul><li><strong>Docker 有着比虚拟机更少的抽象层</strong></li></ul><p>由于 Docker 不需要 Hypervisor（虚拟机）实现硬件资源虚拟化，运行在 Docker 容器上的程序直接使用的都是实际物理机的硬件资源，因此在 CPU、内存利用率上 Docker 将会在效率上有明显优势</p><ul><li><strong>Docker 利用的是宿主机的内核，而不需要加载操作系统 OS 内核</strong></li></ul><p>当新建一个容器时，Docker 不需要和虚拟机一样重新加载一个操作系统内核，进而避免引寻、加载操作系统内核返回等比较费时费资源的过程，当新建一个虚拟机时，虚拟机软件需要加载 OS，返回新建过程是分钟级别的，而 Docker 由于直接利用宿主机的操作系统，则省略了返回过程，因此新建一个 Docker 容器只需要几秒钟</p><figure><img src="http://img.hl1015.top/blog/image-20220304170416448.png" alt="image-20220304170416448" tabindex="0" loading="lazy"><figcaption>image-20220304170416448</figcaption></figure>`,14);function z(q,O){const o=t("ExternalLinkIcon"),s=t("font");return l(),d("div",null,[p,e("ul",null,[e("li",null,[a("官网："),e("a",h,[a("https://www.docker.com"),n(o)])])]),g,e("ul",null,[e("li",null,[a("仓库【Docker Hub】："),e("a",m,[a("https://hub.docker.com"),n(o)])])]),b,e("ul",null,[e("li",null,[a("Docker 镜像（image）就是一个"),n(s,{color:"red"},{default:i(()=>[a("只读")]),_:1}),a("的模板，镜像可以用来创建 Docker 容器，"),n(s,{color:"red"},{default:i(()=>[a("一个镜像可以创建很多容器")]),_:1})]),k,e("li",null,[a('image 相当于容器的 "源代码"，'),n(s,{color:"red"},{default:i(()=>[a("Docker 镜像文件类似于 Java 的类模板，而 Docker 容器实例类似于 Java 中 new 出来的实例对象")]),_:1})])]),v,e("p",null,[e("strong",null,[n(s,{color:"blue"},{default:i(()=>[a("从面向对象的角度")]),_:1})])]),e("p",null,[a("Docker 利用容器（container）独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，"),n(s,{color:"red"},{default:i(()=>[a("容器是用镜像创建的运行实例")]),_:1}),a("，就像是 Java 中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供了一个标准的和隔离的运行环境，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台")]),e("p",null,[e("strong",null,[n(s,{color:"blue"},{default:i(()=>[a("从镜像容器角度")]),_:1})])]),n(s,{color:"red"},{default:i(()=>[a("可以把容器看作是一个简易版的 Linux 环境")]),_:1}),a("（包括 root 用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序"),f,e("p",null,[a("仓库（repository）是"),n(s,{color:"red"},{default:i(()=>[a("集中存放镜像")]),_:1}),a("文件的场所")]),_,e("p",null,[a("Docker 是一个 Client-Server 结构的系统，Docker 守护进程运行在主机上，然后通过 Socket 连接从客户端访问，守护进程从客户端接收命令并管理运行在主机上的容器。（"),n(s,{color:"red"},{default:i(()=>[a("容器，是一个运行时环境，就是我们前面说到的集装箱")]),_:1}),a("）")]),x,e("blockquote",null,[e("p",null,[a("官网-安装文档："),e("a",D,[a("https://docs.docker.com/engine/install/centos"),n(o)])])]),y,e("ul",null,[e("li",null,[a("阿里云云原生官网地址："),e("a",C,[a("https://promotion.aliyun.com/ntms/act/kubernetes.html"),n(o)])]),L,S]),w])}const J=c(u,[["render",z],["__file","docker-basic-2.html.vue"]]);export{J as default};