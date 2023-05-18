import{_ as t,E as p,Z as e,$ as c,a0 as n,a1 as a,a3 as l,a5 as o}from"./framework-1fb77053.js";const i={},u=n("h2",{id:"_1-系统要求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-系统要求","aria-hidden":"true"},"#"),a(" 1. 系统要求")],-1),r={href:"https://www.java.com/zh-CN/",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"Maven 3.3 +",-1),d=o(`<h3 id="_1-1-maven-设置" tabindex="-1"><a class="header-anchor" href="#_1-1-maven-设置" aria-hidden="true">#</a> 1.1 Maven 设置</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>jdk-1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdk</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdk</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-helloworld" tabindex="-1"><a class="header-anchor" href="#_2-helloworld" aria-hidden="true">#</a> 2. HelloWorld</h2><blockquote><p>需求：浏览器发送 /hello 请求，响应 Hello，Spring Boot2</p></blockquote><h3 id="_2-1-创建-maven-工程" tabindex="-1"><a class="header-anchor" href="#_2-1-创建-maven-工程" aria-hidden="true">#</a> 2.1 创建 maven 工程</h3><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210827083242830.png" alt="image-20210827083242830" tabindex="0" loading="lazy"><figcaption>image-20210827083242830</figcaption></figure><h3 id="_2-2-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-引入依赖" aria-hidden="true">#</a> 2.2 引入依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.4.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-创建主程序" tabindex="-1"><a class="header-anchor" href="#_2-3-创建主程序" aria-hidden="true">#</a> 2.3 创建主程序</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 主程序类
 * @SpringBootApplication：这是一个SpringBoot应用
 */</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MainApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-编写业务" tabindex="-1"><a class="header-anchor" href="#_2-4-编写业务" aria-hidden="true">#</a> 2.4 编写业务</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handle01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello, Spring Boot 2!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-测试" tabindex="-1"><a class="header-anchor" href="#_2-5-测试" aria-hidden="true">#</a> 2.5 测试</h3><p>直接运行 main 方法</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210827083935363.png" alt="image-20210827083935363" tabindex="0" loading="lazy"><figcaption>image-20210827083935363</figcaption></figure><h3 id="_2-6-简化配置" tabindex="-1"><a class="header-anchor" href="#_2-6-简化配置" aria-hidden="true">#</a> 2.6 简化配置</h3><p>resources 目录下新建 application.properties 文件</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-简化部署" tabindex="-1"><a class="header-anchor" href="#_2-7-简化部署" aria-hidden="true">#</a> 2.7 简化部署</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将项目打包成 jar 包，直接在目标服务器执行即可。（java -jar）</p><blockquote><p>注意点：取消掉 cmd 的快速编辑模式（右键，属性）</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210827084639284.png" alt="image-20210827084639284" tabindex="0" loading="lazy"><figcaption>image-20210827084639284</figcaption></figure></blockquote>`,22);function g(v,m){const s=p("ExternalLinkIcon");return e(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("Java 8"),l(s)]),a(" & 兼容 Java 14")]),k]),d])}const h=t(i,[["render",g],["__file","springboot2-basic-2.html.vue"]]);export{h as default};
