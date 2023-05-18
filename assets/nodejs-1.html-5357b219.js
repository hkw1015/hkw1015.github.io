import{_ as d,E as s,Z as c,$ as i,a0 as e,a1 as a,a3 as t,a5 as o}from"./framework-1fb77053.js";const r="/assets/image-20220930104837284-6caead2e.png",l="/assets/image-20220930104857457-78bca36a.png",h={},p=o('<h2 id="_1-node-js-简介" tabindex="-1"><a class="header-anchor" href="#_1-node-js-简介" aria-hidden="true">#</a> 1. Node.js 简介</h2><ul><li><code>Node.js</code> 是一个基于 <code>Chrome V8</code> 引擎的 <code>JavaScript</code> 运行环境</li><li>可以简单地将 <code>Node.js</code> 类比理解为 <code>Java</code> 项目的依赖管理工具 <code>Maven</code></li></ul><h2 id="_2-node-js-下载" tabindex="-1"><a class="header-anchor" href="#_2-node-js-下载" aria-hidden="true">#</a> 2. Node.js 下载</h2>',3),_={href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"},g=o('<figure><img src="'+r+'" alt="image-20220930104837284" tabindex="0" loading="lazy"><figcaption>image-20220930104837284</figcaption></figure><p>我们只需要关注 <code>npm</code> 的功能就行了，<code>npm</code> 是随同 <code>node.js</code> 一起安装的<strong>包管理</strong>工具</p><h2 id="_3-node-js-安装" tabindex="-1"><a class="header-anchor" href="#_3-node-js-安装" aria-hidden="true">#</a> 3. Node.js 安装</h2><p>【安装步骤不赘述，无脑下一步即可😄】</p><p>使用 <code>node -v</code> 检查版本</p><figure><img src="'+l+`" alt="image-20220930104857457" tabindex="0" loading="lazy"><figcaption>image-20220930104857457</figcaption></figure><h2 id="_4-node-js-配置" tabindex="-1"><a class="header-anchor" href="#_4-node-js-配置" aria-hidden="true">#</a> 4. Node.js 配置</h2><ul><li>配置 <code>npm</code> 使用淘宝镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function m(u,f){const n=s("ExternalLinkIcon");return c(),i("div",null,[p,e("p",null,[a("下载地址："),e("a",_,[a("下载 | Node.js 中文网 (nodejs.cn)"),t(n)])]),g])}const b=d(h,[["render",m],["__file","nodejs-1.html.vue"]]);export{b as default};