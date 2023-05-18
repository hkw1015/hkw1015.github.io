const e=JSON.parse('{"key":"v-463e548d","path":"/deploy/docker/basic/docker-basic-7.html","title":"Docker 容器数据卷","lang":"zh-CN","frontmatter":{"title":"Docker 容器数据卷","date":"2022-11-25T00:00:00.000Z","category":"Docker","tag":["Docker 基础"],"description":"1. 🚽避坑点：使用容器数据卷记得加上 --privileged=true 理由：Docker 挂载主机目录访问，如果出现 ，说明权限不足 解决方法：在挂载目录后面多加一个 --privileged=true 参数即可 如果是 CentOS 7 安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在 SELinux 里面挂载目录被禁止掉了，如果要开启，我们一般使用 --privileged=true 参数，扩大容器的权限解决挂载目录没有权限的问题，也即使用该参数，container 内的 root 拥有真正的 root 权限，否则，container 内的 root 只是外部的一个普通用户权限","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/deploy/docker/basic/docker-basic-7.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"Docker 容器数据卷"}],["meta",{"property":"og:description","content":"1. 🚽避坑点：使用容器数据卷记得加上 --privileged=true 理由：Docker 挂载主机目录访问，如果出现 ，说明权限不足 解决方法：在挂载目录后面多加一个 --privileged=true 参数即可 如果是 CentOS 7 安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在 SELinux 里面挂载目录被禁止掉了，如果要开启，我们一般使用 --privileged=true 参数，扩大容器的权限解决挂载目录没有权限的问题，也即使用该参数，container 内的 root 拥有真正的 root 权限，否则，container 内的 root 只是外部的一个普通用户权限"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Docker 基础"}],["meta",{"property":"article:published_time","content":"2022-11-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 容器数据卷\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 🚽避坑点：使用容器数据卷记得加上 --privileged=true","slug":"_1-🚽避坑点-使用容器数据卷记得加上-privileged-true","link":"#_1-🚽避坑点-使用容器数据卷记得加上-privileged-true","children":[]},{"level":2,"title":"2. 容器数据卷是什么","slug":"_2-容器数据卷是什么","link":"#_2-容器数据卷是什么","children":[]},{"level":2,"title":"3. 容器数据卷能干嘛","slug":"_3-容器数据卷能干嘛","link":"#_3-容器数据卷能干嘛","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":2.02,"words":607},"filePathRelative":"deploy/docker/basic/docker-basic-7.md","localizedDate":"2022年11月25日","excerpt":"<h2> 1. 🚽避坑点：使用容器数据卷记得加上 --privileged=true</h2>\\n<p><strong>理由</strong>：Docker 挂载主机目录访问，如果出现 ，说明权限不足</p>\\n<p><strong>解决方法</strong>：在挂载目录后面多加一个 <strong><code>--privileged=true</code></strong> 参数即可</p>\\n<p>如果是 CentOS 7 安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在 SELinux 里面挂载目录被禁止掉了，如果要开启，我们一般使用 --privileged=true 参数，扩大容器的权限解决挂载目录没有权限的问题，也即使用该参数，container 内的 root 拥有真正的 root 权限，否则，container 内的 root 只是外部的一个普通用户权限</p>","autoDesc":true}');export{e as data};
