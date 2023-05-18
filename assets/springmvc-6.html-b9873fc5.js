const e=JSON.parse('{"key":"v-6cf5a84a","path":"/java/framework/springmvc/springmvc-6.html","title":"SpringMVC 执行流程","lang":"zh-CN","frontmatter":{"title":"SpringMVC 执行流程","date":"2021-09-08T00:00:00.000Z","category":"常用框架","tag":["SpringMVC"],"description":"1. SpringMVC 执行流程 1.1 SpringMVC 常用组件 DispatcherServlet：前端控制器，不需要工程师开发，由框架提供 作用：统一处理请求和响应，整个流程控制的中心，由它调用其它组件处理用户的请求 HandlerMapping：处理器映射器，不需要工程师开发，由框架提供 作用：根据请求的url、method等信息查找Handler，即控制器方法 Handler：处理器，需要工程师开发 作用：在DispatcherServlet的控制下Handler对具体的用户请求进行处理 HandlerAdapter：处理器适配器，不需要工程师开发，由框架提供 作用：通过HandlerAdapter对处理器（控制器方法）进行执行 ViewResolver：视图解析器，不需要工程师开发，由框架提供 作用：进行视图解析，得到相应的视图，例如：ThymeleafView、InternalResourceView、RedirectView View：视图 作用：将模型数据通过页面展示给用户","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/springmvc/springmvc-6.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"SpringMVC 执行流程"}],["meta",{"property":"og:description","content":"1. SpringMVC 执行流程 1.1 SpringMVC 常用组件 DispatcherServlet：前端控制器，不需要工程师开发，由框架提供 作用：统一处理请求和响应，整个流程控制的中心，由它调用其它组件处理用户的请求 HandlerMapping：处理器映射器，不需要工程师开发，由框架提供 作用：根据请求的url、method等信息查找Handler，即控制器方法 Handler：处理器，需要工程师开发 作用：在DispatcherServlet的控制下Handler对具体的用户请求进行处理 HandlerAdapter：处理器适配器，不需要工程师开发，由框架提供 作用：通过HandlerAdapter对处理器（控制器方法）进行执行 ViewResolver：视图解析器，不需要工程师开发，由框架提供 作用：进行视图解析，得到相应的视图，例如：ThymeleafView、InternalResourceView、RedirectView View：视图 作用：将模型数据通过页面展示给用户"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"SpringMVC"}],["meta",{"property":"article:published_time","content":"2021-09-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringMVC 执行流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. SpringMVC 执行流程","slug":"_1-springmvc-执行流程","link":"#_1-springmvc-执行流程","children":[{"level":3,"title":"1.1 SpringMVC 常用组件","slug":"_1-1-springmvc-常用组件","link":"#_1-1-springmvc-常用组件","children":[]},{"level":3,"title":"1.2 DispatcherServlet 初始化过程","slug":"_1-2-dispatcherservlet-初始化过程","link":"#_1-2-dispatcherservlet-初始化过程","children":[]},{"level":3,"title":"1.3 WDispatcherServlet 调用组件处理请求","slug":"_1-3-wdispatcherservlet-调用组件处理请求","link":"#_1-3-wdispatcherservlet-调用组件处理请求","children":[]},{"level":3,"title":"1.4 SpringMVC 的执行流程","slug":"_1-4-springmvc-的执行流程","link":"#_1-4-springmvc-的执行流程","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":7,"words":2100},"filePathRelative":"java/framework/springmvc/springmvc-6.md","localizedDate":"2021年9月8日","excerpt":"<h2> 1. SpringMVC 执行流程</h2>\\n<h3> 1.1 SpringMVC 常用组件</h3>\\n<ul>\\n<li>\\n<p>DispatcherServlet：<strong>前端控制器</strong>，不需要工程师开发，由框架提供</p>\\n<ul>\\n<li>作用：统一处理请求和响应，整个流程控制的中心，由它调用其它组件处理用户的请求</li>\\n</ul>\\n</li>\\n<li>\\n<p>HandlerMapping：<strong>处理器映射器</strong>，不需要工程师开发，由框架提供</p>\\n<ul>\\n<li>作用：根据请求的url、method等信息查找Handler，即控制器方法</li>\\n</ul>\\n</li>\\n<li>\\n<p>Handler：<strong>处理器</strong>，需要工程师开发</p>\\n<ul>\\n<li>作用：在DispatcherServlet的控制下Handler对具体的用户请求进行处理</li>\\n</ul>\\n</li>\\n<li>\\n<p>HandlerAdapter：<strong>处理器适配器</strong>，不需要工程师开发，由框架提供</p>\\n<ul>\\n<li>作用：通过HandlerAdapter对处理器（控制器方法）进行执行</li>\\n</ul>\\n</li>\\n<li>\\n<p>ViewResolver：<strong>视图解析器</strong>，不需要工程师开发，由框架提供</p>\\n<ul>\\n<li>作用：进行视图解析，得到相应的视图，例如：ThymeleafView、InternalResourceView、RedirectView</li>\\n</ul>\\n</li>\\n<li>\\n<p>View：<strong>视图</strong></p>\\n<ul>\\n<li>作用：将模型数据通过页面展示给用户</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
