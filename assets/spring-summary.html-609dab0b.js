import{_ as e,E as t,Z as i,$ as p,a0 as n,a1 as o,a3 as c,a5 as a}from"./framework-1fb77053.js";const l={},r=a('<h2 id="_1-spring-是轻量级的开源-javaee-框架" tabindex="-1"><a class="header-anchor" href="#_1-spring-是轻量级的开源-javaee-框架" aria-hidden="true">#</a> 1. Spring 是轻量级的开源 JavaEE 框架</h2><ul><li><strong>轻量级理解：体积小、引用的 jar 包少</strong></li></ul><h2 id="_2-spring-可以解决企业应用开发的复杂性" tabindex="-1"><a class="header-anchor" href="#_2-spring-可以解决企业应用开发的复杂性" aria-hidden="true">#</a> 2. Spring 可以解决企业应用开发的复杂性</h2><h2 id="_3-spring-有两大核心部分-ioc-和-aop" tabindex="-1"><a class="header-anchor" href="#_3-spring-有两大核心部分-ioc-和-aop" aria-hidden="true">#</a> 3. Spring 有两大核心部分：IOC 和 AOP</h2><ul><li><strong>IOC：控制反转，把创建对象过程交给 Spring 进行管理</strong></li><li><strong>AOP：面向切面，不修改源码情况下进行功能增强</strong></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084319424.png" alt="image-20210821084319424" tabindex="0" loading="lazy"><figcaption>image-20210821084319424</figcaption></figure><h2 id="_4-spring-特点" tabindex="-1"><a class="header-anchor" href="#_4-spring-特点" aria-hidden="true">#</a> 4. Spring 特点</h2><ul><li><strong>方便解耦，简化开发</strong></li><li><strong>Aop 编程支持</strong></li><li><strong>方便程序调试</strong></li><li><strong>方便和其他框架进行整合</strong></li><li><strong>方便进行事务操作</strong></li><li><strong>降低 API 开发难度</strong></li></ul><h2 id="_5-spring-5-入门" tabindex="-1"><a class="header-anchor" href="#_5-spring-5-入门" aria-hidden="true">#</a> 5. Spring 5 入门</h2><h3 id="_5-1-下载-spring-5" tabindex="-1"><a class="header-anchor" href="#_5-1-下载-spring-5" aria-hidden="true">#</a> 5.1 下载 Spring 5</h3><ul><li><strong>下载 Spring 最新稳定版 5.2.8</strong></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821083358883.png" alt="image-20210821083358883" tabindex="0" loading="lazy"><figcaption>image-20210821083358883</figcaption></figure><blockquote><p>GA(Genernal Availability)：正式发布的版本，官方推荐使用此版本。在国外都是用 GA 来说明 release 版本的。</p><p>PRE：预览版，内部测试版。主要是给开发人员测试和找 BUG 用的，不建议使用。</p><p>SNAPSHOT：快照版，可以稳定使用，且仍在继续改进版本。</p></blockquote>',13),g=n("strong",null,"下载地址：",-1),u={href:"https://repo.spring.io/release/org/springframework/spring/",target:"_blank",rel:"noopener noreferrer"},m=a(`<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821083819530.png" alt="image-20210821083819530" tabindex="0" loading="lazy"><figcaption>image-20210821083819530</figcaption></figure><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821083900168.png" alt="image-20210821083900168" tabindex="0" loading="lazy"><figcaption>image-20210821083900168</figcaption></figure><h3 id="_5-2-打开-idea-创建普通-java-工程" tabindex="-1"><a class="header-anchor" href="#_5-2-打开-idea-创建普通-java-工程" aria-hidden="true">#</a> 5.2 打开 IDEA，创建普通 Java 工程</h3><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084158117.png" alt="image-20210821084158117" tabindex="0" loading="lazy"><figcaption>image-20210821084158117</figcaption></figure><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084207297.png" alt="image-20210821084207297" tabindex="0" loading="lazy"><figcaption>image-20210821084207297</figcaption></figure><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084217667.png" alt="image-20210821084217667" tabindex="0" loading="lazy"><figcaption>image-20210821084217667</figcaption></figure><h3 id="_5-3-导入-spring-5-相关的-jar-包" tabindex="-1"><a class="header-anchor" href="#_5-3-导入-spring-5-相关的-jar-包" aria-hidden="true">#</a> 5.3 导入 Spring 5 相关的 jar 包</h3><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084253362.png" alt="image-20210821084253362" tabindex="0" loading="lazy"><figcaption>image-20210821084253362</figcaption></figure><ul><li><strong>解压下载好的 zip 包，在 lib 下可以找到 Spring 里的相关 jar 包</strong></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084448778.png" alt="image-20210821084448778" tabindex="0" loading="lazy"><figcaption>image-20210821084448778</figcaption></figure><ul><li><strong>找到对应的 4 个 jar 包，拷贝出来</strong></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084545395.png" alt="image-20210821084545395" tabindex="0" loading="lazy"><figcaption>image-20210821084545395</figcaption></figure><blockquote><p>注意：除此之外，我们还需要一个日志 jar 包（这里使用的是 commons-logging-1.1.1.jar），不导入会报错，如下图为我们核心 IOC 所需要的所有 jar 包</p></blockquote><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084721889.png" alt="image-20210821084721889" tabindex="0" loading="lazy"><figcaption>image-20210821084721889</figcaption></figure><ul><li><p><strong>开始导入到工程</strong></p><p>（1）File &gt; Project Structure &gt; Module &gt; Dependencies，点击 ‘+’ 号，选择 JARs or directories ...</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084818589.png" alt="image-20210821084818589" tabindex="0" loading="lazy"><figcaption>image-20210821084818589</figcaption></figure><p>（2）找到对应的 jar 包目录，选中之后，点击ok</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084906036.png" alt="image-20210821084906036" tabindex="0" loading="lazy"><figcaption>image-20210821084906036</figcaption></figure><p>​ 可以在 External Libraries 中看到我们刚导入的jar包</p><p>​ <img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084945945.png" alt="image-20210821084945945" loading="lazy"></p></li></ul><h3 id="_5-4-入门案例" tabindex="-1"><a class="header-anchor" href="#_5-4-入门案例" aria-hidden="true">#</a> 5.4 入门案例</h3><ul><li><p><strong>创建一个普通类，在这个类中创建一个普通方法</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>创建 Spring 的配置文件，在配置文件中配置创建的对象</strong></p><blockquote><p>注意：Spring 的配置文件使用 xml 格式</p></blockquote><p>（1）我们在 src 下创建我们的 bean1.xml（src &gt; New &gt; XML Configuration File &gt; Spring Config）</p></li></ul><p>​ <img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210821220443347.png" alt="image-20210821220443347" loading="lazy"></p><p>​ <img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210821220520801.png" alt="image-20210821220520801" loading="lazy"></p><p>（2）bean1.xml 内容如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 配置User对象创建 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.hkw.spring5.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：id 一般为类名小写（唯一标识），class 为全类名</p></blockquote><p>（3）测试</p><p>创建一个用于测试的类，编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.加载Spring的配置文件</span>
    <span class="token class-name">ApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;bean1.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2.获取配置中创建的对象</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.输出查看结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210821220953135.png" alt="image-20210821220953135" tabindex="0" loading="lazy"><figcaption>image-20210821220953135</figcaption></figure>`,26);function d(k,h){const s=t("ExternalLinkIcon");return i(),p("div",null,[r,n("ul",null,[n("li",null,[g,n("a",u,[o("https://repo.spring.io/release/org/springframework/spring/"),c(s)])])]),m])}const f=e(l,[["render",d],["__file","spring-summary.html.vue"]]);export{f as default};
