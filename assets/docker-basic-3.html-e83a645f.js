const e=JSON.parse('{"key":"v-3f6af211","path":"/deploy/docker/basic/docker-basic-3.html","title":"Docker 常用命令","lang":"zh-CN","frontmatter":{"title":"Docker 常用命令","date":"2022-11-25T00:00:00.000Z","category":"Docker","tag":["Docker 基础"],"description":"1. 帮助启动类命令 启动 Docker：systemctl start docker 停止 Docker：systemctl stop docker 重启 Docker：systemctl restart docker 查看 docker 状态：systemctl status docker 开机启动：systemctl enable docker 查看 docker 概要信息：docker info 查看 docker 总体帮助文档：docker --help 查看 docker 命令帮助文档：docker 具体命令 --help","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/deploy/docker/basic/docker-basic-3.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"Docker 常用命令"}],["meta",{"property":"og:description","content":"1. 帮助启动类命令 启动 Docker：systemctl start docker 停止 Docker：systemctl stop docker 重启 Docker：systemctl restart docker 查看 docker 状态：systemctl status docker 开机启动：systemctl enable docker 查看 docker 概要信息：docker info 查看 docker 总体帮助文档：docker --help 查看 docker 命令帮助文档：docker 具体命令 --help"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Docker 基础"}],["meta",{"property":"article:published_time","content":"2022-11-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 常用命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 帮助启动类命令","slug":"_1-帮助启动类命令","link":"#_1-帮助启动类命令","children":[]},{"level":2,"title":"2. 镜像命令","slug":"_2-镜像命令","link":"#_2-镜像命令","children":[{"level":3,"title":"2.1 列出本地镜像","slug":"_2-1-列出本地镜像","link":"#_2-1-列出本地镜像","children":[]},{"level":3,"title":"2.2 从 Docker Hub 查找镜像","slug":"_2-2-从-docker-hub-查找镜像","link":"#_2-2-从-docker-hub-查找镜像","children":[]},{"level":3,"title":"2.3 从镜像仓库中拉取或者更新指定镜像","slug":"_2-3-从镜像仓库中拉取或者更新指定镜像","link":"#_2-3-从镜像仓库中拉取或者更新指定镜像","children":[]},{"level":3,"title":"2.4 查看镜像/容器/数据卷所占的空间","slug":"_2-4-查看镜像-容器-数据卷所占的空间","link":"#_2-4-查看镜像-容器-数据卷所占的空间","children":[]},{"level":3,"title":"2.5 删除本地一个或多个镜像","slug":"_2-5-删除本地一个或多个镜像","link":"#_2-5-删除本地一个或多个镜像","children":[]},{"level":3,"title":"2.6 什么是 Docker 虚悬镜像？","slug":"_2-6-什么是-docker-虚悬镜像","link":"#_2-6-什么是-docker-虚悬镜像","children":[]}]},{"level":2,"title":"3. 容器命令","slug":"_3-容器命令","link":"#_3-容器命令","children":[{"level":3,"title":"3.1 新建 + 启动容器","slug":"_3-1-新建-启动容器","link":"#_3-1-新建-启动容器","children":[]},{"level":3,"title":"3.2 列出当前正在运行的容器","slug":"_3-2-列出当前正在运行的容器","link":"#_3-2-列出当前正在运行的容器","children":[]},{"level":3,"title":"3.3 退出容器","slug":"_3-3-退出容器","link":"#_3-3-退出容器","children":[]},{"level":3,"title":"3.4 启动已停止运行的容器","slug":"_3-4-启动已停止运行的容器","link":"#_3-4-启动已停止运行的容器","children":[]},{"level":3,"title":"3.5 重启容器","slug":"_3-5-重启容器","link":"#_3-5-重启容器","children":[]},{"level":3,"title":"3.6 停止容器","slug":"_3-6-停止容器","link":"#_3-6-停止容器","children":[]},{"level":3,"title":"3.7 强制停止容器","slug":"_3-7-强制停止容器","link":"#_3-7-强制停止容器","children":[]},{"level":3,"title":"3.8 删除已停止的容器","slug":"_3-8-删除已停止的容器","link":"#_3-8-删除已停止的容器","children":[]},{"level":3,"title":"3.9 重要⭐","slug":"_3-9-重要⭐","link":"#_3-9-重要⭐","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":8.48,"words":2544},"filePathRelative":"deploy/docker/basic/docker-basic-3.md","localizedDate":"2022年11月25日","excerpt":"<h2> 1. 帮助启动类命令</h2>\\n<ul>\\n<li><strong>启动 Docker</strong>：<strong><code>systemctl start docker</code></strong></li>\\n<li><strong>停止 Docker</strong>：<strong><code>systemctl stop docker</code></strong></li>\\n<li><strong>重启 Docker</strong>：<strong><code>systemctl restart docker</code></strong></li>\\n<li><strong>查看 docker 状态</strong>：<strong><code>systemctl status docker</code></strong></li>\\n<li><strong>开机启动</strong>：<strong><code>systemctl enable docker</code></strong></li>\\n<li><strong>查看 docker 概要信息</strong>：<strong><code>docker info</code></strong></li>\\n<li><strong>查看 docker 总体帮助文档</strong>：<strong><code>docker --help</code></strong></li>\\n<li><strong>查看 docker 命令帮助文档</strong>：<strong><code>docker 具体命令 --help</code></strong></li>\\n</ul>","autoDesc":true}');export{e as data};
