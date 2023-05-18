const e=JSON.parse('{"key":"v-3eb0f036","path":"/java/framework/springboot/core/springboot2-core-2.html","title":"Web 开发","lang":"zh-CN","frontmatter":{"title":"Web 开发","date":"2021-09-08T00:00:00.000Z","category":"常用框架","tag":["SpringBoot 核心"],"description":"1. SpringMVC 自动配置概览 Spring Boot provides auto-configuration for Spring MVC that works well with most applications.(大多场景我们都无需自定义配置) The auto-configuration adds the following features on top of Spring’s defaults: Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans. 内容协商视图解析器和 BeanName 视图解析器 Support for serving static resources, including support for WebJars (covered later in this document)). 静态资源（包括 webjars ） Automatic registration of Converter, GenericConverter, and Formatter beans. 自动注册 Converter，GenericConverter，Formatter Support for HttpMessageConverters (covered later in this document). 支持 HttpMessageConverters （后来我们配合内容协商理解原理） Automatic registration of MessageCodesResolver (covered later in this document). 自动注册 MessageCodesResolver （国际化用） Static index.html support. 静态 index.html 页支持 Custom Favicon support (covered later in this document). 自定义 Favicon Automatic use of a ConfigurableWebBindingInitializer bean (covered later in this document). 自动使用 ConfigurableWebBindingInitializer（DataBinder 负责将请求数据绑定到 JavaBean 上）","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/springboot/core/springboot2-core-2.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"Web 开发"}],["meta",{"property":"og:description","content":"1. SpringMVC 自动配置概览 Spring Boot provides auto-configuration for Spring MVC that works well with most applications.(大多场景我们都无需自定义配置) The auto-configuration adds the following features on top of Spring’s defaults: Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans. 内容协商视图解析器和 BeanName 视图解析器 Support for serving static resources, including support for WebJars (covered later in this document)). 静态资源（包括 webjars ） Automatic registration of Converter, GenericConverter, and Formatter beans. 自动注册 Converter，GenericConverter，Formatter Support for HttpMessageConverters (covered later in this document). 支持 HttpMessageConverters （后来我们配合内容协商理解原理） Automatic registration of MessageCodesResolver (covered later in this document). 自动注册 MessageCodesResolver （国际化用） Static index.html support. 静态 index.html 页支持 Custom Favicon support (covered later in this document). 自定义 Favicon Automatic use of a ConfigurableWebBindingInitializer bean (covered later in this document). 自动使用 ConfigurableWebBindingInitializer（DataBinder 负责将请求数据绑定到 JavaBean 上）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"SpringBoot 核心"}],["meta",{"property":"article:published_time","content":"2021-09-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web 开发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. SpringMVC 自动配置概览","slug":"_1-springmvc-自动配置概览","link":"#_1-springmvc-自动配置概览","children":[]},{"level":2,"title":"2. 简单功能分析","slug":"_2-简单功能分析","link":"#_2-简单功能分析","children":[{"level":3,"title":"2.1 静态资源访问","slug":"_2-1-静态资源访问","link":"#_2-1-静态资源访问","children":[]},{"level":3,"title":"2.2 欢迎页支持","slug":"_2-2-欢迎页支持","link":"#_2-2-欢迎页支持","children":[]},{"level":3,"title":"2.3 自定义 Favicon","slug":"_2-3-自定义-favicon","link":"#_2-3-自定义-favicon","children":[]},{"level":3,"title":"2.4 静态资源配置原理","slug":"_2-4-静态资源配置原理","link":"#_2-4-静态资源配置原理","children":[]}]},{"level":2,"title":"3. 请求参数处理","slug":"_3-请求参数处理","link":"#_3-请求参数处理","children":[{"level":3,"title":"3.1 请求映射","slug":"_3-1-请求映射","link":"#_3-1-请求映射","children":[]},{"level":3,"title":"3.2 普通参数与基本注解","slug":"_3-2-普通参数与基本注解","link":"#_3-2-普通参数与基本注解","children":[]},{"level":3,"title":"3.3 POJO 封装过程","slug":"_3-3-pojo-封装过程","link":"#_3-3-pojo-封装过程","children":[]},{"level":3,"title":"3.4 参数处理原理","slug":"_3-4-参数处理原理","link":"#_3-4-参数处理原理","children":[]}]},{"level":2,"title":"4. 数据响应与内容协商","slug":"_4-数据响应与内容协商","link":"#_4-数据响应与内容协商","children":[{"level":3,"title":"4.1 响应 JSON","slug":"_4-1-响应-json","link":"#_4-1-响应-json","children":[]},{"level":3,"title":"4.2 内容协商","slug":"_4-2-内容协商","link":"#_4-2-内容协商","children":[]}]},{"level":2,"title":"5. 视图解析与模板引擎","slug":"_5-视图解析与模板引擎","link":"#_5-视图解析与模板引擎","children":[{"level":3,"title":"5.1 视图解析","slug":"_5-1-视图解析","link":"#_5-1-视图解析","children":[]},{"level":3,"title":"5.2 模板引擎 - Thymeleaf","slug":"_5-2-模板引擎-thymeleaf","link":"#_5-2-模板引擎-thymeleaf","children":[]},{"level":3,"title":"5.3 Thymeleaf 使用","slug":"_5-3-thymeleaf-使用","link":"#_5-3-thymeleaf-使用","children":[]},{"level":3,"title":"5.4 构建后台管理系统","slug":"_5-4-构建后台管理系统","link":"#_5-4-构建后台管理系统","children":[]}]},{"level":2,"title":"6. 拦截器","slug":"_6-拦截器","link":"#_6-拦截器","children":[{"level":3,"title":"6.1 HandlerInterceptor 接口","slug":"_6-1-handlerinterceptor-接口","link":"#_6-1-handlerinterceptor-接口","children":[]},{"level":3,"title":"6.2 配置拦截器","slug":"_6-2-配置拦截器","link":"#_6-2-配置拦截器","children":[]},{"level":3,"title":"6.3 拦截器原理","slug":"_6-3-拦截器原理","link":"#_6-3-拦截器原理","children":[]}]},{"level":2,"title":"7. 文件上传","slug":"_7-文件上传","link":"#_7-文件上传","children":[{"level":3,"title":"7.1 页面表单","slug":"_7-1-页面表单","link":"#_7-1-页面表单","children":[]},{"level":3,"title":"7.2 文件上传代码","slug":"_7-2-文件上传代码","link":"#_7-2-文件上传代码","children":[]},{"level":3,"title":"7.3 自动配置原理","slug":"_7-3-自动配置原理","link":"#_7-3-自动配置原理","children":[]}]},{"level":2,"title":"8. 异常处理","slug":"_8-异常处理","link":"#_8-异常处理","children":[{"level":3,"title":"8.1 错误处理","slug":"_8-1-错误处理","link":"#_8-1-错误处理","children":[]}]},{"level":2,"title":"9. Web 原生组件注入（Servlet、Filter、Listener）","slug":"_9-web-原生组件注入-servlet、filter、listener","link":"#_9-web-原生组件注入-servlet、filter、listener","children":[{"level":3,"title":"9.1 使用 Servlet API","slug":"_9-1-使用-servlet-api","link":"#_9-1-使用-servlet-api","children":[]},{"level":3,"title":"9.2 使用 RegistrationBean","slug":"_9-2-使用-registrationbean","link":"#_9-2-使用-registrationbean","children":[]}]},{"level":2,"title":"10. 嵌入式 Servlet 容器","slug":"_10-嵌入式-servlet-容器","link":"#_10-嵌入式-servlet-容器","children":[{"level":3,"title":"10.1 切换嵌入式 Servlet 容器","slug":"_10-1-切换嵌入式-servlet-容器","link":"#_10-1-切换嵌入式-servlet-容器","children":[]},{"level":3,"title":"10.2 定制 Servlet 容器","slug":"_10-2-定制-servlet-容器","link":"#_10-2-定制-servlet-容器","children":[]}]},{"level":2,"title":"11. 定制化原理","slug":"_11-定制化原理","link":"#_11-定制化原理","children":[{"level":3,"title":"11.1 定制化的常见方式","slug":"_11-1-定制化的常见方式","link":"#_11-1-定制化的常见方式","children":[]},{"level":3,"title":"11.2 原理分析套路","slug":"_11-2-原理分析套路","link":"#_11-2-原理分析套路","children":[]}]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":29.64,"words":8892},"filePathRelative":"java/framework/springboot/core/springboot2-core-2.md","localizedDate":"2021年9月8日","excerpt":"<h2> 1. SpringMVC 自动配置概览</h2>\\n<p>Spring Boot provides auto-configuration for Spring MVC that <strong>works well with most applications.(大多场景我们都无需自定义配置)</strong>\\nThe auto-configuration adds the following features on top of Spring’s defaults:</p>\\n<ul>\\n<li>Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans.\\n<ul>\\n<li>内容协商视图解析器和 BeanName 视图解析器</li>\\n</ul>\\n</li>\\n<li>Support for serving static resources, including support for WebJars (covered later <a href=\\"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.static-content\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">in this document</a>)).\\n<ul>\\n<li>静态资源（包括 webjars ）</li>\\n</ul>\\n</li>\\n<li>Automatic registration of Converter, GenericConverter, and Formatter beans.\\n<ul>\\n<li>自动注册 Converter，GenericConverter，Formatter</li>\\n</ul>\\n</li>\\n<li>Support for HttpMessageConverters (covered later <a href=\\"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.message-converters\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">in this document</a>).\\n<ul>\\n<li>支持 HttpMessageConverters （后来我们配合内容协商理解原理）</li>\\n</ul>\\n</li>\\n<li>Automatic registration of MessageCodesResolver (covered later <a href=\\"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.message-codes\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">in this document</a>).\\n<ul>\\n<li>自动注册 MessageCodesResolver （国际化用）</li>\\n</ul>\\n</li>\\n<li>Static index.html support.\\n<ul>\\n<li>静态 index.html 页支持</li>\\n</ul>\\n</li>\\n<li>Custom Favicon support (covered later <a href=\\"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#boot-features-spring-mvc-favicon\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">in this document</a>).\\n<ul>\\n<li>自定义 Favicon</li>\\n</ul>\\n</li>\\n<li>Automatic use of a ConfigurableWebBindingInitializer bean (covered later <a href=\\"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.binding-initializer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">in this document</a>).\\n<ul>\\n<li>自动使用 ConfigurableWebBindingInitializer（DataBinder 负责将请求数据绑定到 JavaBean 上）</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};