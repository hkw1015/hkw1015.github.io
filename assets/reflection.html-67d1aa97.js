const a=JSON.parse('{"key":"v-8ded9d8e","path":"/java/basic/reflection.html","title":"反射机制","lang":"zh-CN","frontmatter":{"title":"反射机制","category":"Java","tag":["Java 基础"],"description":"1. Class 的理解 反射的内容 ①Class 的理解； ②获取 Class 的实例； ③反射的应用一：动态地创建运行时类的对象：newInstance()； ④反射的应用二：获取运行时类中完整的类的结构：属性、方法、构造器、父类、包、 注解。。。； ⑤反射的应用三：调用运行时类中的指定的结构：属性、方法、构造器。 Class 的理解（一个 Class 实例对应着一个运行时类） （1）java.lang.Class：是反射的源头； （2）java 源文件经过编译（javac.exe）以后，会生成一个或多个字节码文件（.class），使用 java.exe 命令，将指定的字节码文件加载（使用类的加载器）到内存中，则加载到内存中的字节码文件对应的类，我们就称为运行时类。此运行时类本身就充当了 Class 的实例； （3）运行时类一旦加载到内存中，就会随着 JVM 的存在而存在，即运行时类只被加载一次。 反射：体现 java 语言的动态的特性 // 根据传入类的全类名，动态的创建对应的运行时类的对象 public Object getInstance(String className) throws Exception { \\tClass clazz = Class.forName(className); \\treturn clazz.newInstance(); }","head":[["meta",{"property":"og:url","content":"http://www.hl1015.com/java/basic/reflection.html"}],["meta",{"property":"og:site_name","content":"程序员H"}],["meta",{"property":"og:title","content":"反射机制"}],["meta",{"property":"og:description","content":"1. Class 的理解 反射的内容 ①Class 的理解； ②获取 Class 的实例； ③反射的应用一：动态地创建运行时类的对象：newInstance()； ④反射的应用二：获取运行时类中完整的类的结构：属性、方法、构造器、父类、包、 注解。。。； ⑤反射的应用三：调用运行时类中的指定的结构：属性、方法、构造器。 Class 的理解（一个 Class 实例对应着一个运行时类） （1）java.lang.Class：是反射的源头； （2）java 源文件经过编译（javac.exe）以后，会生成一个或多个字节码文件（.class），使用 java.exe 命令，将指定的字节码文件加载（使用类的加载器）到内存中，则加载到内存中的字节码文件对应的类，我们就称为运行时类。此运行时类本身就充当了 Class 的实例； （3）运行时类一旦加载到内存中，就会随着 JVM 的存在而存在，即运行时类只被加载一次。 反射：体现 java 语言的动态的特性 // 根据传入类的全类名，动态的创建对应的运行时类的对象 public Object getInstance(String className) throws Exception { \\tClass clazz = Class.forName(className); \\treturn clazz.newInstance(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T09:01:25.000Z"}],["meta",{"property":"article:author","content":"程序员H"}],["meta",{"property":"article:tag","content":"Java 基础"}],["meta",{"property":"article:modified_time","content":"2023-05-17T09:01:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"反射机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-17T09:01:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员H\\",\\"url\\":\\"http://www.hl1015.com/\\"}]}"]]},"headers":[{"level":2,"title":"1. Class 的理解","slug":"_1-class-的理解","link":"#_1-class-的理解","children":[]},{"level":2,"title":"2. 获取 Class 实例","slug":"_2-获取-class-实例","link":"#_2-获取-class-实例","children":[]},{"level":2,"title":"3. 了解 ClassLoader","slug":"_3-了解-classloader","link":"#_3-了解-classloader","children":[]},{"level":2,"title":"4. 通过反射创建运行时类的对象","slug":"_4-通过反射创建运行时类的对象","link":"#_4-通过反射创建运行时类的对象","children":[]},{"level":2,"title":"5. 通过反射获取运行时类的完整结构","slug":"_5-通过反射获取运行时类的完整结构","link":"#_5-通过反射获取运行时类的完整结构","children":[]},{"level":2,"title":"6. 调用运行类的某一结构","slug":"_6-调用运行类的某一结构","link":"#_6-调用运行类的某一结构","children":[]}],"git":{"createdTime":1684314085000,"updatedTime":1684314085000,"contributors":[{"name":"hkw","email":"hkw1015@163.com","commits":1}]},"readingTime":{"minutes":4.76,"words":1427},"filePathRelative":"java/basic/reflection.md","localizedDate":"2023年5月17日","excerpt":"<h2> 1. Class 的理解</h2>\\n<ul>\\n<li>\\n<p><strong>反射的内容</strong></p>\\n<p>①Class 的理解；</p>\\n<p>②获取 Class 的实例；</p>\\n<p>③反射的应用一：动态地创建运行时类的对象：newInstance()；</p>\\n<p>④反射的应用二：获取运行时类中完整的类的结构：属性、方法、构造器、父类、包、 注解。。。；</p>\\n<p>⑤反射的应用三：调用运行时类中的指定的结构：属性、方法、构造器。</p>\\n</li>\\n<li>\\n<p><strong>Class 的理解（一个 Class 实例对应着一个运行时类）</strong></p>\\n<p>（1）java.lang.Class：是反射的源头；</p>\\n<p>（2）java 源文件经过编译（javac.exe）以后，会生成一个或多个字节码文件（.class），使用 java.exe 命令，将指定的字节码文件加载（使用类的加载器）到内存中，则加载到内存中的字节码文件对应的类，我们就称为运行时类。此运行时类本身就充当了 Class 的实例；</p>\\n<p>（3）运行时类一旦加载到内存中，就会随着 JVM 的存在而存在，即运行时类只被加载一次。</p>\\n</li>\\n<li>\\n<p><strong>反射：体现 java 语言的动态的特性</strong></p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 根据传入类的全类名，动态的创建对应的运行时类的对象</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> className<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Exception</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token class-name\\">Class</span> clazz <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Class</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forName</span><span class=\\"token punctuation\\">(</span>className<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> clazz<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">newInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{a as data};