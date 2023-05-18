const t=JSON.parse('{"key":"v-88f08836","path":"/java/framework/spring/annotation/spring-annotation-5.html","title":"AOP 应用","lang":"zh-CN","frontmatter":{"title":"AOP 应用","date":"2021-12-11T00:00:00.000Z","category":"常用框架","tag":["Spring 注解"],"description":"面向切面编程：在程序运行期间动态地将某段代码切入到指定方法指定位置运行的编程方式【基于动态代理】 1. 思路 以 动态日志打印 功能为例子进行 AOP 演示： 导入 aop 模块：Spring AOP（spring-aspects） &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-aspects&lt;/artifactId&gt; &lt;version&gt;5.3.5&lt;/version&gt; &lt;/dependency&gt; 定义一个业务逻辑类（MathCalculator）：在业务逻辑运行的时候将日志进行打印【方法之前、方法运行结束、方法正常返回、方法出现异常、xxx】 定义一个日志切面类（LogAspects）：切面类里面的方法需要动态感知 MathCalculator 中的方法运行到哪里了然后执行 通知方法： 前置通知（@Before）：在目标方法运行之前运行 后置通知（@After）：在目标方法运行结束之后运行【无论方法正常结束还是异常结束】 返回通知（@AfterReturning）：在目标方法正常返回之后运行 异常通知（@AfterThrowing）：在目标方法出现异常之后运行 环绕通知（@Around）：动态代理，手动推进目标方法运行【proceedingJoinPoint.proceed()】 给切面类的目标方法标注通知注解，告诉方法何时何地运行 将切面类和业务逻辑类（目标方法所在类）都加入到容器中 告诉 Spring 容器哪一个类是切面类（给切面类上加一个 @Aspect 注解） 给配置类中加 @EnableAspectJAutoProxy 【开启基于注解的 AOP 模式】","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/framework/spring/annotation/spring-annotation-5.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"AOP 应用"}],["meta",{"property":"og:description","content":"面向切面编程：在程序运行期间动态地将某段代码切入到指定方法指定位置运行的编程方式【基于动态代理】 1. 思路 以 动态日志打印 功能为例子进行 AOP 演示： 导入 aop 模块：Spring AOP（spring-aspects） &lt;dependency&gt; &lt;groupId&gt;org.springframework&lt;/groupId&gt; &lt;artifactId&gt;spring-aspects&lt;/artifactId&gt; &lt;version&gt;5.3.5&lt;/version&gt; &lt;/dependency&gt; 定义一个业务逻辑类（MathCalculator）：在业务逻辑运行的时候将日志进行打印【方法之前、方法运行结束、方法正常返回、方法出现异常、xxx】 定义一个日志切面类（LogAspects）：切面类里面的方法需要动态感知 MathCalculator 中的方法运行到哪里了然后执行 通知方法： 前置通知（@Before）：在目标方法运行之前运行 后置通知（@After）：在目标方法运行结束之后运行【无论方法正常结束还是异常结束】 返回通知（@AfterReturning）：在目标方法正常返回之后运行 异常通知（@AfterThrowing）：在目标方法出现异常之后运行 环绕通知（@Around）：动态代理，手动推进目标方法运行【proceedingJoinPoint.proceed()】 给切面类的目标方法标注通知注解，告诉方法何时何地运行 将切面类和业务逻辑类（目标方法所在类）都加入到容器中 告诉 Spring 容器哪一个类是切面类（给切面类上加一个 @Aspect 注解） 给配置类中加 @EnableAspectJAutoProxy 【开启基于注解的 AOP 模式】"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Spring 注解"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AOP 应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. 思路","slug":"_1-思路","link":"#_1-思路","children":[]},{"level":2,"title":"2. 案例实操","slug":"_2-案例实操","link":"#_2-案例实操","children":[]},{"level":2,"title":"3. 原理总结","slug":"_3-原理总结","link":"#_3-原理总结","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":3.13,"words":939},"filePathRelative":"java/framework/spring/annotation/spring-annotation-5.md","localizedDate":"2021年12月11日","excerpt":"<p>面向切面编程：在程序运行期间动态地将某段代码切入到指定方法指定位置运行的编程方式【基于动态代理】</p>\\n<h2> 1. 思路</h2>\\n<p>以 <strong>动态日志打印</strong> 功能为例子进行 AOP 演示：</p>\\n<ol>\\n<li>\\n<p>导入 aop 模块：Spring AOP（spring-aspects）</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-aspects<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>5.3.5<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>定义一个业务逻辑类（MathCalculator）：在业务逻辑运行的时候将日志进行打印【方法之前、方法运行结束、方法正常返回、方法出现异常、xxx】</p>\\n</li>\\n<li>\\n<p>定义一个日志切面类（LogAspects）：切面类里面的方法需要动态感知 MathCalculator 中的方法运行到哪里了然后执行</p>\\n<blockquote>\\n<p>通知方法：</p>\\n<ul>\\n<li><strong>前置通知（@Before）：在目标方法运行之前运行</strong></li>\\n<li><strong>后置通知（@After）：在目标方法运行结束之后运行【无论方法正常结束还是异常结束】</strong></li>\\n<li><strong>返回通知（@AfterReturning）：在目标方法正常返回之后运行</strong></li>\\n<li><strong>异常通知（@AfterThrowing）：在目标方法出现异常之后运行</strong></li>\\n<li><strong>环绕通知（@Around）：动态代理，手动推进目标方法运行【proceedingJoinPoint.proceed()】</strong></li>\\n</ul>\\n</blockquote>\\n</li>\\n<li>\\n<p>给切面类的目标方法标注通知注解，告诉方法何时何地运行</p>\\n</li>\\n<li>\\n<p>将切面类和业务逻辑类（目标方法所在类）都加入到容器中</p>\\n</li>\\n<li>\\n<p>告诉 Spring 容器哪一个类是切面类（给切面类上加一个 @Aspect 注解）</p>\\n</li>\\n<li>\\n<p>给配置类中加 @EnableAspectJAutoProxy 【开启基于注解的 AOP 模式】</p>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
