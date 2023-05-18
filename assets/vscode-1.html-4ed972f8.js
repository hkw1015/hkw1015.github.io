import{_ as i,E as a,Z as s,$ as t,a0 as e,a1 as o,a3 as l,a5 as c}from"./framework-1fb77053.js";const g={},u=e("p",null,[e("strong",null,"1、下载")],-1),m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},p=c(`<figure><img src="http://img.hl1015.top/work/image-20230511162805676.png" alt="image-20230511162805676" tabindex="0" loading="lazy"><figcaption>image-20230511162805676</figcaption></figure><p><strong>2、安装（傻瓜式安装）</strong></p><p><strong>3、中文界面配置</strong></p><ul><li>首先安装中文插件：Chinese (Simplified) Language Pack for Visual Studio Code</li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145350450.png" alt="image-20210911145350450" tabindex="0" loading="lazy"><figcaption>image-20210911145350450</figcaption></figure><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145358101.png" alt="image-20210911145358101" tabindex="0" loading="lazy"><figcaption>image-20210911145358101</figcaption></figure><ul><li>右下角弹出是否重启 vs，点击 &quot;Restart Now&quot;</li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145435918.png" alt="image-20210911145435918" tabindex="0" loading="lazy"><figcaption>image-20210911145435918</figcaption></figure><ul><li>可以看到重启之后，界面语言变成了中文</li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145451442.png" alt="image-20210911145451442" tabindex="0" loading="lazy"><figcaption>image-20210911145451442</figcaption></figure><ul><li>有些机器重启后如果界面没有变化，则 点击 左边栏 Manage -&gt; Command Paletet...【Ctrl+Shift+p】</li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145607944.png" alt="image-20210911145607944" tabindex="0" loading="lazy"><figcaption>image-20210911145607944</figcaption></figure><ul><li>在搜索框中输入 &quot;configure display language&quot;，回车</li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911145559476.png" alt="image-20210911145559476" tabindex="0" loading="lazy"><figcaption>image-20210911145559476</figcaption></figure><ul><li>打开 locale.json 文件，修改文件下的属性 &quot;locale&quot;:&quot;zh-cn&quot;</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 定义 VS Code 的显示语言。</span>
	<span class="token comment">// 请参阅 https://go.microsoft.com/fwlink/?LinkId=761051，了解支持的语言列表。</span>
	
	<span class="token property">&quot;locale&quot;</span><span class="token operator">:</span><span class="token string">&quot;zh-cn&quot;</span> <span class="token comment">// 更改将在重新启动 VS Code 之后生效。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启 vs</li></ul>`,17);function r(d,f){const n=a("ExternalLinkIcon");return s(),t("div",null,[u,e("p",null,[e("a",m,[o("https://code.visualstudio.com/"),l(n)])]),p])}const _=i(g,[["render",r],["__file","vscode-1.html.vue"]]);export{_ as default};
