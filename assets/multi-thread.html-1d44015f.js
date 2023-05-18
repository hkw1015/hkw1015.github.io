import{_ as n,Z as s,$ as a,a5 as t}from"./framework-1fb77053.js";const p={},e=t(`<h2 id="_1-程序、线程、进程的理解" tabindex="-1"><a class="header-anchor" href="#_1-程序、线程、进程的理解" aria-hidden="true">#</a> 1. 程序、线程、进程的理解</h2><p>程序（program）：是为完成特定任务、用某种语言编写的一组指令的集合，即指一段静态的代码，静态对象。</p><p>进程（process）：是程序的一次执行过程，或是正在运行的一个程序。动态过程：有它自身的产生、存在和消亡的过程。——生命周期。</p><p>       ①如：运行中的QQ、运行中的QQ播放器；</p><p>       ②进程是动态的，程序是静态的；</p><p>       ③进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域。</p><p>线程（thread）：进程可进一步细化为线程，是程序内部的一条执行路径。（线程作为调度和执行的单位，每个线程拥有独立的运行栈和程序计数器，线程切换的开销较小，多个线程之间共享着内存区域中的<span style="color:blue;">堆和方法区</span>，使得线程间的通信变得更简便、高效，但是多个线程操作共享的系统资源会带来<span style="color:red;">安全隐患</span>）</p><p>举例：360安全卫士</p><p>【程序：存在我们磁盘上的静态代码】</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811093737819.png" alt="image-20210811093737819" tabindex="0" loading="lazy"><figcaption>image-20210811093737819</figcaption></figure><p>【进程：运行中的360】</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811094133509.png" alt="image-20210811094133509" tabindex="0" loading="lazy"><figcaption>image-20210811094133509</figcaption></figure><p>【线程：分别能执行的电脑体检、木马查杀、电脑清理都是一个个线程】</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811094157413.png" alt="image-20210811094157413" tabindex="0" loading="lazy"><figcaption>image-20210811094157413</figcaption></figure><h2 id="_2-创建多线程的四种方式" tabindex="-1"><a class="header-anchor" href="#_2-创建多线程的四种方式" aria-hidden="true">#</a> 2. 创建多线程的四种方式</h2><ul><li><p><strong>方式一：继承 Thread 类</strong></p><p>①创建 Thread 类的子类；</p><p>②重写 Thread 类中的 run()，将此线程要执行的操作，声明在 run() 的方法体中；</p><p>③实例化 Thread 类的子类；</p><p>④调用对象的 start()。</p></li><li><p><strong>方式二：实现Runnable接口</strong></p><p>①创建一个 Runnable 接口的实现类；</p><p>②实现接口中的抽象方法：run()；</p><p>③创建实现类的对象；</p><p>④将此对象作为参数传递到 Thread 类中的构造器中，创建 Thread 类的对象；</p><p>⑤通过 Thread 类对象调用 start()。</p><p>（备注：start() 的作用：①启动线程；②调用当前线程的 run()。）</p><blockquote><p>方式一和方式二的对比：</p><p>（1）联系：public class Thread implements Runnale;</p><p>（2）对比：实现的方式要更好一些；</p><p>一方面，由于单继承的局限性；</p><p>另一方面，如果多个线程有共享数据的话，更适合使用实现的方式。</p></blockquote></li><li><p><strong>方式三：实现Callable接口</strong></p><p>①创建一个 Callable 接口的实现类；</p><p>②实现接口中的抽象方法：call()；</p><p>③创建实现类的对象；</p><p>④将该对象作为参数传递到 FutureTask 类的构造器中，并创建 FutureTask 类的对象；</p><p>⑤将 FutureTask 类的对象作为参数传递到 Thread 类的构造器中，并创建 Thread 类的对象；</p><p>⑥用 Thread 类的实例对象调用 start()。</p></li><li><p><strong>方式四：使用线程池</strong></p><p>①调用 Executors 的 newFixedThreadPool() 方法，返回指定线程数量的 ExecutorService；</p><p>②将 Runnable 接口的实现类对象作为形参传递给 ExecutorService 的 submit() 方法中，submit() 方法的作用：开启线程，调用线程 run()。</p><p>③关闭线程池：pool.shutdown()。</p><p>【说明：一般实际开发中不这么使用，这里仅作为了解】</p><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811095159994.png" alt="image-20210811095159994" tabindex="0" loading="lazy"><figcaption>image-20210811095159994</figcaption></figure></li><li><p><strong>典型代码（方式一 ~ 方式四）</strong></p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 实现方式一：继承Thread类</span>
		<span class="token class-name">MyThread1</span> myThread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		myThread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 实现方式二：实现Runnable接口</span>
		<span class="token class-name">Thread</span> myThread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThread2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		myThread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 实现方式三：实现Callable接口</span>
		<span class="token class-name">Thread</span> myThread3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThread3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		myThread3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 实现方式四：使用线程池</span>
		<span class="token comment">// 1.调用Executors的newFixedThreadPool()，返回指定线程数量的ExecutorService</span>
		<span class="token class-name">ExecutorService</span> pool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 2.将Runnable实现类的对象作为形参传递给ExecutorService的submit()方法中，开启线程，并执行相关的run()。</span>
		pool<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThread4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 相当于：线程.start()。</span>
		pool<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThread4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pool<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyThread4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 结束线程池的使用</span>
		pool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建线程的实现方式一：继承Thread类 ---&gt; 
①创建自定义类继承Thread类；
②将要执行的语句写在重写的run()中；
③创建自定义类的对象；
④对象调用start()。*/</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread1</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---MyThread1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建线程的实现方式二：实现Runnable接口 ---&gt; 
①创建自定义类实现Runnable接口；
②将要执行的语句写在重写的run()中；
③创建自定义类的对象；
④将该对象作为参数传到Thread类的构造器中，并创建Thread类的对象；
⑤对象调用start()。*/</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread2</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---MyThread2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建线程的实现方式三：实现Callable接口 ---&gt; 
①创建自定义类是实现Callable接口；
②将要执行的代码放在重写的call()中；
③创建自定义类的对象；
④将该对象作为参数传到FutureTask类的构造器中，并创建FutureTask类的对象；
⑤将FutureTask类的对象传入Thread类的构造器中，并创建Thread类的对象；
⑥对象调用start()。*/</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread3</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---MyThread3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token number">200</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 创建线程的实现方式四：线程池的使用
 */</span>
<span class="token keyword">class</span> <span class="token class-name">MyThread4</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-thread-类中的常用方法" tabindex="-1"><a class="header-anchor" href="#_3-thread-类中的常用方法" aria-hidden="true">#</a> 3. Thread 类中的常用方法</h2><p>（1）run()：当前线程要执行的操作；</p><p>（2）start()：①启动线程；②调用当前线程的 run()；</p><p>（3）currentThread()：静态方法，获取当前执行代码的所属线程；</p><p>（4）getName()：获取当前线程的名字；</p><p>（5）setName()：设置当前线程的名字；</p><p>（6）yield()：显示地释放 CPU 的执行权；</p><p>（7）join()：在线程 a 的执行过程中，调用线程 b 的 join()，则开始执行线程 b 的操作，直到线程 b 执行完以后，线程 a 才可以继续执行；</p><p>（8）sleep(long millitime)：设置当前线程睡眠的时间；</p><p>（9）isAlive()：判断当前线程是否存活；</p><p>（10）线程的优先级：</p><p>​        MIN_PRIORITY = 1;</p><p>​        NORM_PRIORITY = 5;</p><p>​        MAX_PRIORITY = 10;</p><p>getPriority()：获取当前线程的优先级；</p><p>setPriority(int priority)：设置当前线程的优先级；</p><p>注意：高优先级的线程在被 CPU 分配并执行的概率上会高于低优先级的线程。</p><h2 id="_4-thread-类的生命周期" tabindex="-1"><a class="header-anchor" href="#_4-thread-类的生命周期" aria-hidden="true">#</a> 4. Thread 类的生命周期</h2><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811095747212.png" alt="image-20210811095747212" tabindex="0" loading="lazy"><figcaption>image-20210811095747212</figcaption></figure><h2 id="_5-线程的同步机制" tabindex="-1"><a class="header-anchor" href="#_5-线程的同步机制" aria-hidden="true">#</a> 5. 线程的同步机制</h2><blockquote><p>这里举 卖票 的例子</p></blockquote><ul><li><p><strong>出现的问题</strong></p><p>出现了重票和错票</p></li><li><p><strong>出现问题的原因</strong></p><p>当一个窗口在操作 ticket 时，没操作完的情况下，其他窗口就参与进来，导致 ticket 的错误</p></li><li><p><strong>如何解决？</strong></p><p>必须当一个窗口操作完 ticket 之后，其他窗口才能参与进来操作 ticket</p></li><li><p><strong>java 如何实现？</strong></p><p>使用线程的同步机制。</p><p>方式一：<span style="color:red;">使用同步代码块</span></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">synchronized</span><span class="token punctuation">(</span>同步监视器<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 需要被同步的代码（比如：操作 ticket 的代码）</span>
<span class="token punctuation">}</span>
<span class="token comment">// 说明：</span>
<span class="token comment">// ①需要被同步的代码，即为操作共享数据的代码；</span>
<span class="token comment">// ②什么是共享数据？多个线程都要操作的数据，比如：ticket。</span>
<span class="token comment">// ③同步监视器，俗称锁。任何一个类的对象都可以充当锁，但是，必须保证多个线程共用一把锁。</span>
<span class="token comment">// ④不是所有的多线程问题都会出现线程安全问题，只有多个线程操作共享数据了，才会出现线程安全问题。</span>
<span class="token comment">// ⑤同步的方式解决了线程的安全问题，但是同步代码块或同步方法中，其实是单线程的，效率低。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式一：<span style="color:red;">使用同步方法</span></p><p>（1）如果操作共享数据的代码完全声明在一个方法中，还可以考虑将此方法声明为同步方法；</p><p>（2）如果此方法是非静态的，则同步监视器默认为：this；</p><p>（3）如果此方法是静态的，则同步监视器默认为：当前类本身。</p><p>说明：同步监视器在继承 Thread 类的方式，要慎用 this.（考虑点：要看 this 是不是唯一的）;</p><p>方式一 对比 方式二 的代码举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSynchronized</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Ticket</span> ticket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ticket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Ticket</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义票数为100</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> ticketNum <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
	
	<span class="token comment">/*@Override
	public void run() {
		while(true) {
			// 同步代码块
			synchronized(this) {
				if(ticketNum &gt; 0) {
					try {
						Thread.sleep(50);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					System.out.println(Thread.currentThread().getName() + &quot; : &quot; + ticketNum + &quot;已售出&quot;);
					ticketNum--;
				} else {
					break;
				}
			}
		}
	}*/</span>
    
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">saleTicket</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 同步方法</span>
	<span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">saleTicket</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ticketNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> ticketNum <span class="token operator">+</span> <span class="token string">&quot;已售出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			ticketNum<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>jdk5 中使用 Lock 实现线程安全</strong></p><p>使用举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLock</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Ticket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Ticket</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义票数为100</span>
	<span class="token keyword">int</span> ticketNum <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 1.实例化Lock</span>
	<span class="token keyword">private</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">// 2.加锁</span>
				lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>ticketNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">try</span> <span class="token punctuation">{</span>
						<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> ticketNum <span class="token operator">+</span> <span class="token string">&quot;已售出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					ticketNum<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
				<span class="token comment">// 3.解锁</span>
				lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>【面试题】</strong></p><p>（1）解决线程安全问题，有哪几种方式？</p><p>​        三种。</p><p>​        ①同步代码块；</p><p>​        ②同步方法；</p><p>​        ③使用 Lock。</p><p>（2）使用同步的方式和 Lock 的方式有什么区别？</p><p>​        相同点：都是解决线程安全问题的；</p><p>​        不同点：同步的方式，在执行代码块或同步方法以后，会自动释放同步监视器；</p><p>​        而 Lock 的方式，必须手动执行 unlock() 方法，才可以释放。</p></li></ul><h2 id="_6-线程安全的单例模式-针对懒汉式" tabindex="-1"><a class="header-anchor" href="#_6-线程安全的单例模式-针对懒汉式" aria-hidden="true">#</a> 6. 线程安全的单例模式---针对懒汉式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 懒汉式（线程安全的）</span>
<span class="token keyword">class</span> <span class="token class-name">Singleton4</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> singleton<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">Singleton4</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-死锁问题" tabindex="-1"><a class="header-anchor" href="#_7-死锁问题" aria-hidden="true">#</a> 7. 死锁问题</h2><ul><li><p><strong>死锁的理解</strong></p><p>不同的线程分别占用了对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了死锁。</p></li><li><p><strong>说明</strong></p><p>是我们开发中要避免出现的。</p></li><li><p><strong>举例</strong></p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token class-name">StringBuffer</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">StringBuffer</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token annotation punctuation">@Override</span>
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>

				s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				s2<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
					
				<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

					s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					s2<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token annotation punctuation">@Override</span>
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token punctuation">{</span>

				s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				s2<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
					
				<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>

					s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					s2<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-线程通信" tabindex="-1"><a class="header-anchor" href="#_8-线程通信" aria-hidden="true">#</a> 8. 线程通信</h2><ul><li><p><strong>具体使用</strong></p><p>wait()：一旦执行该方法，当前线程进入阻塞状态，同时，会释放同步监视器；</p><p>notify()：一旦执行该方法，则唤醒被 wait() 后等待中的所有线程中，优先级最高的那个；</p><p>notifyAll()：一旦执行该方法，则唤醒所有被 wait() 后等待中的线程。</p></li><li><p><strong>要求</strong></p><p>（1）此三个方法必须使用在同步方法或同步方法块中，不能使用在 Lock 解决的线程安全问题中；</p><p>（2）此三个方法的调用者是同步监视器。</p></li><li><p><strong>【面试题】sleep() 和 wait() 的区别？</strong></p><p>（1）定义的位置：Thread.sleep() / Object.wait()；</p><p>（2）相同点：都可以使得当前线程进入阻塞状态；</p><p>（3）结束阻塞的方式：sleep()：睡眠时间结束 wait()：notify()/notifyAll()；</p><p>（4）使用上的局限性：</p><p>​        ①sleep()：在任何位置都能使用；wait()：只能使用在同步结构中；</p><p>​        ②如果使用在同步结构中，sleep() 不会释放同步锁，wait() 会释放同步锁。</p></li><li><p><strong>典型例题</strong></p><p>（1）使用两个线程打印 1-100，线程1，线程2，交替打印；</p><p>（2）生产者、消费者的问题。</p></li></ul><h2 id="_9-线程池" tabindex="-1"><a class="header-anchor" href="#_9-线程池" aria-hidden="true">#</a> 9. 线程池</h2><ul><li><p><strong>背景</strong></p><p>如果在程序执行过程中，需要创建大量的分线程，而这些分线程执行的操作还比较简单，执行结束后，就马上准备销毁。 ---降低了执行效率</p></li><li><p><strong>可以考虑用线程池的方式</strong></p><p>好处：①不用再去新建线程，执行效率高；</p><p>​        ②线程可以复用，节省资源；</p><p>​        ③可以对多个线程实现统一的管理。</p></li><li><p><strong>延伸</strong></p><p>数据库连接池</p></li></ul>`,48),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","multi-thread.html.vue"]]);export{k as default};
