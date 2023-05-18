import{_ as i,Z as a,$ as t,a5 as e}from"./framework-1fb77053.js";const r={},l=e('<p>Git 是一个免费的、开源的<strong>分布式版本控制系统</strong>，可以快速高效地处理从小型到大型的各种项目。</p><p>Git 易于学习，占地面积小，性能极快。它具有廉价的本地库，方便的暂存区域和多个工作流分支等特性。其性能优于 Subversion、CVS、Perforce 和 ClearCase 等版本控制工具。</p><h2 id="_1-何为版本控制" tabindex="-1"><a class="header-anchor" href="#_1-何为版本控制" aria-hidden="true">#</a> 1. 何为版本控制</h2><p>版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。</p><p>版本控制其实最重要的是可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。</p><h2 id="_2-为什么需要版本控制" tabindex="-1"><a class="header-anchor" href="#_2-为什么需要版本控制" aria-hidden="true">#</a> 2. 为什么需要版本控制</h2><p>个人开发过渡到团队协作。</p><figure><img src="http://img.hl1015.top/blog/image-20211107103523777.png" alt="image-20211107103523777" tabindex="0" loading="lazy"><figcaption>image-20211107103523777</figcaption></figure><h2 id="_3-版本控制工具" tabindex="-1"><a class="header-anchor" href="#_3-版本控制工具" aria-hidden="true">#</a> 3. 版本控制工具</h2><ul><li><p><strong>集中式版本控制工具</strong></p><p>CVS、<span style="color:red;">SVN（Subversion）</span>、VSS、......</p><p>集中化的版本控制系统诸如 CVS、SVN 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。</p><p>这种做法带来了许多好处，每个人都可以在一定程度上看到项目中的其他人正在做些什么，而管理员也可以轻松掌控每个开发者的权限，并且管理一个集中化的版本控制系统，要远比在各个客户端维护本地数据库来得轻松容易。</p><p>事分两面，有好有坏。这么做显而易见的缺点是中央服务器的单点故障。如果服务器宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。</p></li></ul><img src="http://img.hl1015.top/blog/image-20211107173932134.png" alt="image-20211107173932134" style="zoom:50%;"><ul><li><p><strong>分布式版本控制工具</strong></p><p><strong><span style="color:red;">Git</span></strong>、Mercurial、Bazaar、Darcs、.....</p><p>像 Git 这种分布式版本控制工具，客户端提取的不是最新版本的文件快照，而是把代码仓库完整地镜像下来（本地库）。这样任何一处协同工作作用的文件发生故障，事后可以用其他客户端的本地仓库进行恢复。因为每个客户端的每一侧文件提取操作，实际上都是一次对整个文件仓库的完整备份。</p><p>分布式的版本控制系统出现之后，解决了集中式版本控制系统的缺陷：</p><p>（1）服务器断网的情况下也可以进行开发（因为版本控制是在本地进行的）</p><p>（2）每个客户端保存的也都是整个完整的项目（包含历史记录，更加安全）</p><img src="http://img.hl1015.top/blog/image-20211107192140559.png" alt="image-20211107192140559" style="zoom:50%;"></li></ul><h2 id="_4-git-简介" tabindex="-1"><a class="header-anchor" href="#_4-git-简介" aria-hidden="true">#</a> 4. Git 简介</h2><figure><img src="http://img.hl1015.top/blog/image-20211107192327830.png" alt="image-20211107192327830" tabindex="0" loading="lazy"><figcaption>image-20211107192327830</figcaption></figure><h2 id="_5-git-和代码托管中心" tabindex="-1"><a class="header-anchor" href="#_5-git-和代码托管中心" aria-hidden="true">#</a> 5. Git 和代码托管中心</h2><p>代码托管中心是基于网络服务器的远程代码仓库，一般我们简单称为<span style="color:red;"><strong>远程库</strong></span>。</p><ul><li><p><strong>局域网</strong></p><ul><li>GitLab</li></ul></li><li><p><strong>互联网</strong></p><ul><li>GitHub（外网）</li><li>Gitee 码云（国内网站）</li></ul></li></ul>',17),p=[l];function n(o,s){return a(),t("div",null,p)}const h=i(r,[["render",n],["__file","git-1.html.vue"]]);export{h as default};
