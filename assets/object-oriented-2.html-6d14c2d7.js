import{_ as n,Z as s,$ as a,a5 as p}from"./framework-1fb77053.js";const t={},e=p(`<h2 id="_1-面向对象的特征二-继承性" tabindex="-1"><a class="header-anchor" href="#_1-面向对象的特征二-继承性" aria-hidden="true">#</a> 1. 面向对象的特征二：继承性</h2><ul><li><p><strong>为什么要有类的继承（继承性的好处）？</strong></p><p>①减少了冗余，提高了代码的复用性；</p><p>②更好的扩展性；</p><p>③为多态的使用，提供前提。</p></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210810013047426.png" alt="image-20210810013047426" tabindex="0" loading="lazy"><figcaption>image-20210810013047426</figcaption></figure><ul><li><p><strong>继承性的格式</strong></p><p>格式：class B extends A {}</p><p>说明：关键字 extends：继承；（扩展、延展、延长）</p><p>​      B：subclass，子类</p><p>​      A：superclass，超类，父类，基类</p></li><li><p><strong>子类继承父类后有了什么不同</strong></p><p>（1）子类继承父类以后，就获取了父类中声明的结构：属性、方法</p><p>​    强调的是：子类可以获取父类中声明为private的结构，只是由于封装性的影响， 子类不可以直接调用罢了。</p><p>（2）子类在继承父类的基础上，还可以定义自己特有的结构：属性、方法</p></li><li><p><strong>Java 中继承的说明</strong></p><p>①子父类是相对的概念；</p><p>②一个父类可以被多个子类所继承，反之，一个子类只能声明一个父类（Java中的单继承性：局限性）；</p><p>③两个概念：直接父类、间接父类；</p><p>④子类通过继承的方式，可以获取直接父类和间接父类的所有的属性、方法。</p></li><li><p><strong>对 java.lang.Object 类(根基类)的理解</strong></p><p>①如果一个类没有显示地声明父类的话，则默认继承 java.lang.Object 类；</p><p>②所有的 java 类（除了Object类）都直接或间接地继承于 java.lang.Object 类；</p><p>③所有的 java 类在权限允许的情况下，可以调用 java.lang.Object 类的结构。</p></li></ul><h2 id="_2-方法的重写" tabindex="-1"><a class="header-anchor" href="#_2-方法的重写" aria-hidden="true">#</a> 2. 方法的重写</h2><ul><li><p><strong>什么是方法的重写（override或overwrite）？</strong></p><p>在子类继承父类以后，子类对父类中声明的方法进行“覆盖”或“覆写”，此对方法的“覆盖”或“覆写”就称为方法的重写。</p><p>使用：子类重写父类的方法以后，如果通过子类的对象调用重写之后的方法，此时执行的就是子类重写父类的方法。</p></li><li><p><strong>举例</strong></p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 返回圆的面积</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cylinder</span> <span class="token keyword">extends</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 返回圆柱的表面积</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>重写的规则</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>权限修饰符 返回值类型 方法名（形参列表） <span class="token keyword">throws</span> 异常类型 <span class="token punctuation">{</span>
	<span class="token comment">// 方法体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 规则：</p><p>​   ①子类重写的方法，必须与父类被重写的方法的 <strong>“方法名（形参列表）”</strong> 相同；</p><p>​   ②子类重写的方法的权限修饰 <strong>不小于</strong> 父类被重写的方法的权限修饰；</p><p>​     特别强调：子类不能重写父类中声明为 private 的方法。</p><p>​   ③父类被重写的方法的返回值类型是 void，则子类重写方法的返回值类型也必须为void；父类被重写方法的返回值类型不是 void，则子类重写方法的返回值类型 <strong>不大于</strong> 父类被重写方法的返回值类型。</p><p>​      比如：父类的方法的返回值类型为 Person，子类方法可以返回 Person 类型或者 Person 的子类类型；</p><p>​   ④子类重写方法抛出的异常类型 <strong>不大于</strong> 父类被重写方法抛出的异常类型。</p><p>说明：子类和父类同名同形参的方法，要么都声明为 static，要么都声明为非 static。</p><ul><li><p><strong>面试题</strong></p><p>方法重载和方法重写的区别？</p><p>​    方法重载：同一个类中，相同方法名，不同参数列表的多个方法之间称为方法重载；</p><p>​    方法重写：子类继承父类以后，子类重写父类中方法，要求：</p><p>​        ①子类重写方法和父类被重写方法的 方法名（形参列表）必须相同；</p><p>​        ②子类重写方法的权限修饰 不小于 父类被重写方法的权限修饰；</p><p>​        （子类不能重写父类中声明为 private 的方法）</p><p>​    ③子类重写方法的返回值类型 不大于 父类被重写方法的返回值类型（无返回值的情况，若父类被重写方法的返回值类型为 void，则子类重写方法的返回值类型必须也为 void）；</p><p>​    ④子类重写方法抛出的异常类型 不大于 父类被重写方法抛出的异常类型。</p><p><strong>类似的面试题：</strong></p></li></ul><ol><li><p>throws 和 throw 的区别？</p><p>throws：用来声明一个方法可能产生的所有异常，不做任何处理而是将异常往上抛，谁调用就抛给谁。</p><p>​  说明：①用在方法声明后面，跟的是异常类名；</p><p>​    ②可以跟多个异常类名，用逗号隔开；</p><p>​    ③表示抛出异常，由该方法的调用者来处理；</p><p>​    ④throws 表示出现异常的一种可能性，并不一定会发生这些异常。</p><p>throw：用来抛出一个具体的异常类型。</p><p>​  说明：①用在方法体内，跟的是异常对象名；</p><p>​    ②只能抛出一个异常对象；</p><p>​    ③表示抛出异常，由方法体内的语句处理；</p><p>​    ④执行 throw 一定会抛出某种异常。</p></li><li><p>Collection 和 Collections 的区别？</p><p>Collection：是 java 中集合类的一个顶级接口，它的直接继承接口是 List 和 Set，另外它也提供了对集合对象进行基本操作的通用接口方法。</p><p>Collections：是一个服务于 java 的 Collection 框架的工具类，包含了各种有关集合操作的静态多态方法。</p></li><li><p>String 、StringBuffer 、StringBuilder 的区别？</p><p>String：</p><p>​  是不可变的字符串序列，因为它底层是用 final 修饰的字符数组来保存字符串的。</p><p>StringBuffer 和 StringBuilder：</p><p>​  相同点：都继承自 AbstractStringBuilder 类，是可变字符串序列。</p><p>​  不同点：StringBuffer 是线程安全的，效率较低；StringBuilder 是线程不安全的，效率较高。</p></li><li><p>final / finally / finalize 的区别？</p><p>final：</p><p>​  有三种用法：修饰类、变量和方法。</p><p>​  ①修饰类时，表明该类不能被继承；</p><p>​  ②修饰变量时，表明该变量在使用时不能被改变，所以在声明时需要给变量进行初始化（如果是成员变量，也可以在声明处先不赋值，但在构造器内要对改成员变量赋值）；</p><p>​  ③修饰方法时，表明该方法只能使用，在子类中不能被重写。</p><p>finally：</p><p>​  通常是放在 try...catch 后面构造最终代码执行块，无论程序是正常还是异常，这部分代码都会执行，一般将释放资源的代码写在里面。</p><p>finalize：</p><p>​  finalize() 是 Object 类里定义的方法，这个方法是垃圾收集器在销毁对象时调用的，但该方法被调用并不意味着 gc 会立即回收该对象。</p></li><li><p>ArrayList / LinkedList / Vector 的区别？</p><p>相同点：都是 List 接口下的实现类，可以存储有序的、可重复的数据；</p><p>不同点：</p><p>​  ArrayList：最常用的 List 实现类，底层是动态数组，可以对其中的元素进行快速反问，适合查找和遍历，不适合插入和删除；</p><p>​  LinkedList：底层是双向链表，很适合动态插入和删除操作，随机查找和遍历的效率较低；</p><p>​  Vector：底层也是数组，但是它里面加了同步锁，是线程安全的，所以性能上比 ArrayList 要差；</p></li><li><p>抽象类和接口的区别？</p><p>①抽象类使用 abstract 关键词修饰，接口使用 interface 关键词修饰；</p><p>②抽象类中有构造方法，但不能实例化，接口中没有构造方法；</p><p>③抽象类中可以有非抽象方法，接口中一般只有抽象方法；</p><p>④抽象类中可以有变量，接口中只能有常量；</p><p>⑤抽象类只能单继承类，接口可以实现多个接口；</p><p>⑥实现类只能继承一个抽象类，但是可以实现多个接口。</p></li><li><p>sleep() 和 wait() 的区别？</p><p>（1）定义的位置：Thread.sleep() / Object.wait()；</p><p>（2）相同点：都可以使得当前线程进入阻塞状态；</p><p>（3）结束阻塞的方式：sleep()：睡眠时间结束 wait()：notify()/notifyAll()；</p><p>（4）使用上的局限性：</p><p>​  ①sleep()：在任何位置都能使用；wait()：只能使用在同步结构中；</p><p>​  ②如果使用在同步结构中，sleep()不会释放同步锁，wait()会释放同步锁。</p></li></ol><h2 id="_3-关键字-super" tabindex="-1"><a class="header-anchor" href="#_3-关键字-super" aria-hidden="true">#</a> 3. 关键字：super</h2><ul><li><p><strong>super可以理解为</strong></p><p>父类的</p></li><li><p><strong>可以调用的结构</strong></p><p>属性、方法、构造器</p></li><li><p><strong>super 调用属性、方法</strong></p><p>我们可以在子类的方法或构造器中调用父类的属性或方法（前提：权限允许，可以使用“super.属性”或“super.方法”的方式。但是，多数情况下，我们都选择省略此“super.”。但是，如果子父类中出现同名的属性或者子类对父类的方法进行了重写同时又希望调用父类中被重写的方法的情况下，为了区分同名的属性和方法，可以使用“super.属性”或“super.方法”的方式，显示地表明调用的父类的属性、父类中被重写的方法）。</p><p>明确：子类的属性不能覆盖父类中同名的属性。</p></li><li><p><strong>super 调用构造器</strong></p><p>①在子类的构造器中，可以通过“super(形参列表)”的方式，显示地调用父类中指定的构造器；</p><p>②“super(形式列表)”结构如果使用，必须声明在子类构造器的首行；</p><p>③在子类构造器的首行，不能同时使用“this(形参列表)”和“super(形参列表)”；</p><p>④默认情况下，在子类构造器的首行，使用“super()”；</p><p>⑤在子类构造器的首行，要么使用“this(形参列表)”，要么使用“super(形参列表)”，没别的情况了。</p></li></ul><h2 id="_4-子类对象实例化全过程" tabindex="-1"><a class="header-anchor" href="#_4-子类对象实例化全过程" aria-hidden="true">#</a> 4. 子类对象实例化全过程</h2><ul><li><p><strong>理解</strong></p><p>（1）结果上说</p><p>​  类的继承性，子类通过继承的方式获取父类中声明的结构，进而实例化子类，可通过子类的对象调用父类中声明的结构（前提：父类中声明的结构的权限允许）。</p><p>（2）过程上说</p><p>​  在使用子类的构造器创建子类对象的过程中，我们一定会直接或间接地调用到父类的构造器，以及父类的父类的构造器，以及。。。直到加载到 Object 类的构造器。因此加载了这些类的构造器，所以才将类的结构加载内容，进而我们通过子类的对象才可以调用已经在内存中加载的结构。</p><p>（3）整个过程中，调用过多个类的构造器，但是只创建了一个对象，即为 new 的子类对象。</p></li></ul><h2 id="_5-面向对象的特征三-多态性" tabindex="-1"><a class="header-anchor" href="#_5-面向对象的特征三-多态性" aria-hidden="true">#</a> 5. 面向对象的特征三：多态性</h2><ul><li><p><strong>多态性的理解</strong></p><p>可以理解为一种事物的多种形态</p></li><li><p><strong>广义上多态性的理解</strong></p><p>①方法的重载和重写；</p><p>②子类对象的多态性。</p></li><li><p><strong>狭义上多态性的理解</strong></p><p>子类对象的多态性</p></li><li><p><strong>何为子类对象的多态性</strong></p><p>父类的引用指向子类的对象（或子类的对象赋给父类的引用）</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>举例：
<span class="token class-name">Account</span> acct <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SavingAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 前提：Account 是 SavingAccount 的父类</span>
<span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>多态性的应用</strong></p><p>虚拟方法的调用（动态绑定）：</p><p>​  在编译时（javac.exe），我们关注引用变量声明的类型，只能通过引用变量调用父类中的结构，但在运行时（java.exe），实际调用的是子类重写父类的方法。</p><p>总结：编译看左边，运行看右边（针对方法）。</p></li><li><p><strong>多态性的说明</strong></p><p>多态性不适用于属性，只适用于方法。</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> id <span class="token operator">=</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> id <span class="token operator">=</span> <span class="token string">&quot;1002&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">sysout</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;1001&quot;</span>
    <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> p<span class="token punctuation">;</span>
    <span class="token function">sysout</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;1002&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 总结：编译和运行，都看左边（针对属性）。</p><ul><li><p><strong>多态性使用的前提</strong></p><p>①类的继承性；</p><p>②方法的重写。</p></li><li><p><strong>关于向上转型和向下转型</strong></p><p>（1）向上转型：多态</p><p>（2）向下转型：在使用了多态以后，变量声明为父类的类型，如果希望通过父类类型调用子类特有的结构编译是不通过的，但是在内存中加载了子类的结构，为了能调用到子类特有的结构，我们需要使用向下转型。</p><p>​  ①如何实现向下转型：使用强制转换符（）；</p><p>​  ②可能出现的问题：报 ClassCastException 的异常；</p><p>​  ③如何避免问题的出现：在强转前，使用instanceof进行判断，如果返回true，再强转；</p><p>​  ④具体使用说明：</p><p>​    a instanceof A ：判断 a 是否是 类A 的实例。如果是，返回true；如果不是，返回false。</p><p>​    需要注意的问题：强转为的类型和要转换的变量的类型要具备子父类关系。</p></li></ul><h2 id="_6-object类的使用" tabindex="-1"><a class="header-anchor" href="#_6-object类的使用" aria-hidden="true">#</a> 6. Object类的使用</h2><ul><li><p><strong>java.lang.Object 类的使用说明</strong></p><p>①java.lang.Object 类：作为 java 类（除了此类之外）的根父类；</p><p>②内部只声明了唯一的空参构造器：Object()；</p><p>③内部定义了很多通用的方法。</p></li><li><p><strong>关于类中常用方法的使用说明</strong></p><p>（1）equals()</p><p>①java.lang.Object 类中 equals() 的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②像 String、Date、File、包装类重写了 Object 类中的 equals() 方法，比较的是两个对象的实体内容是否一致；</p><p>③对于自定义类来讲，如果没有重写 Object 类中的 equals() 方法，则仍然比较两个对象的引用地址是否相等。如果重写的话，重写的标准：比较两个对象的相关属性是否相等。</p><p>【面试题】== 和 equals() 的区别？</p><p>==：比较运算符，适用于基本数据类型和引用数据类型</p><p>​  基本数据类型：比较两个变量值是否相等；</p><p>​  引用数据类型：比较两个引用类型变量的地址值是否相等（即两个引用是否指向同一个对象）。</p><p>equals()：</p><p>​  在 Object 类中定义，对于自定义类来说，如果没有重写 Object 类中的 equals() 方法，则默认比较的是两个对象的引用地址是否相等。如果重写了 equals() 方法，就按重写的标准进行比较。</p><p>（2）toSting()</p><p>①我们在输出对象的引用时，实际上就是在调用此对象的 toString() 方法；</p><p>②java.lang.Object 类中的 toString() 的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> “@” <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即默认情况下，返回当前对象所属的类及此对象存储的地址。</p><p>③像String、Date、File、包装类重写了 Object 类中的 toString() 方法，返回当前对象的实体内容；</p><p>④对于自定义类来讲，如果没重写 Object 类中的 toString() 方法，则默认返回对象所属的类及此对象存储的地址。如果重写 toString() 的话，重写的标准：返回当前对象的属性信息。</p></li></ul><h2 id="_7-单元测试方法" tabindex="-1"><a class="header-anchor" href="#_7-单元测试方法" aria-hidden="true">#</a> 7. 单元测试方法</h2><p>​  （1）选中当前工程，右键 build path - add libraries - Junit - Junit 4【eclipse 玩法】</p><p>​  （2）创建一个java类</p><p>​    ①此类是 public 的；</p><p>​    ②此类只能声明一个空参构造器；</p><p>​    ③类名不要使用 Test。</p><p>​  （3）声明单元测试方法</p><p>​    ①此方法是 public 的；</p><p>​    ②此方法没有返回值；</p><p>​    ③此方法无形参。</p><p>​  （4）在方法的声明上，加上@Test，并导包 import org.junit.Test。</p><h2 id="_8-包装类的使用" tabindex="-1"><a class="header-anchor" href="#_8-包装类的使用" aria-hidden="true">#</a> 8. 包装类的使用</h2><ul><li><p><strong>为什么要有包装类（封装类）？</strong></p><p>为了使得基本数据类型的变量具备类的特性，给每一个基本数据类型的变量提供了一个对应的包装类。</p></li><li><p><strong>基本数据类型与对应的包装类</strong></p></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210810103429633.png" alt="image-20210810103429633" tabindex="0" loading="lazy"><figcaption>image-20210810103429633</figcaption></figure><ul><li><strong>需要掌握的类型间的转换</strong></li></ul><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210810103531099.png" alt="image-20210810103531099" tabindex="0" loading="lazy"><figcaption>image-20210810103531099</figcaption></figure><p>在 jdk1.5 的时候，增加了新特性：自动装箱、自动拆箱；</p><p>基本数据类型 ---&gt; 包装类：自动装箱；</p><p>包装类 ---&gt; 基本数据类型：自动拆箱；</p><p>基本数据类型、包装类 ---&gt; String：①num + &quot;&quot;；②调用 String 类重载的 valueOf(xxx) 方法；</p><p>String ---&gt; 基本数据类型、包装类：调用相对应的包装类的 parseXxx(String s)。</p>`,53),i=[e];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","object-oriented-2.html.vue"]]);export{u as default};
