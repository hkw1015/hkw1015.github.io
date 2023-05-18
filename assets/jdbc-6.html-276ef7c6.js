import{_ as s,Z as n,$ as a,a5 as e}from"./framework-1fb77053.js";const t={},l=e(`<h2 id="_1-数据库事务介绍" tabindex="-1"><a class="header-anchor" href="#_1-数据库事务介绍" aria-hidden="true">#</a> 1. 数据库事务介绍</h2><p>（1）事务：一组逻辑单元，使数据从一种状态变换到另一种状态。</p><p>（2）<strong>事务处理(事务操作)原则</strong>：保证所有事务都作为一个工作单元来执行，即使出现了故障，都不能改变这种执行方式。当在一个事务中执行多个操作时，要么所有的事务都<strong>被提交</strong>(<strong>commit</strong>)，那么这些修改就永久地保存下来；要么数据库管理系统将放弃所作的所有修改，整个事务<strong>回滚</strong>(<strong>rollback</strong>)到最初状态。</p><p>（3）为确保数据库中数据的一致性，数据的操纵应当是离散的成组的逻辑单元：当它全部完成时，数据应保持一致性，而当这个单元中的一部分操作失败，整个事务应全部视为错误，所有从起始点以后的操作应全部回退到开始状态。</p><h2 id="_2-jdbc-事务处理" tabindex="-1"><a class="header-anchor" href="#_2-jdbc-事务处理" aria-hidden="true">#</a> 2. JDBC 事务处理</h2><p>（1）数据一旦提交，就不可回滚。</p><p>（2）数据什么时候意味着提交?</p><ul><li>当一个连接对象被创建时，默认情况下会自动提交事务：每执行一个 SQL 语句时，如果执行成功，就会向数据库自动提交，而不能回滚。</li><li>关闭数据库连接，数据就会自动提交。如果多个操作，每个操作使用的是自己单独的连接，则无法保证事务，即同一个事务的多个操作必须在同一个连接下。</li><li>DDL 操作一旦执行，会自动提交事务(set autocommit = false 对 DDL 操作失效)。</li></ul><p>（3）JDBC 程序为了让多个 SQL 语句作为一个事务执行：</p><ul><li>调用 Connection 对象的 setAutoCommit(false)：取消自动提交事务</li><li>在所有的 SQL 语句都成功执行以后，调用 commit()：方法提交事务</li><li>在出现异常时，调用 rollback()：方法回滚事务</li></ul><p><span style="color:red;">注：若此时 Connection 没有被关闭，还可能被重复使用，则需要恢复其自动提交状态 setAutocommit(true); 尤其是在使用数据库连接池技术时，执行 close() 方法前，建议恢复自动提交状态。</span></p><h2 id="_3-事务的-acid-属性" tabindex="-1"><a class="header-anchor" href="#_3-事务的-acid-属性" aria-hidden="true">#</a> 3. 事务的 ACID 属性</h2><ul><li><strong>原子性(Atomicity)</strong><ul><li>原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。</li></ul></li><li><strong>一致性(Consistency)</strong><ul><li>事务必须使数据库从一个一致性状态到另外一个一致性状态。</li></ul></li><li><strong>隔离性(Isolation)</strong><ul><li>事务的隔离性是指一个事务的执行不能被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能相互干扰。</li></ul></li><li><strong>持久性(Durability)</strong><ul><li>持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来的操作和数据库故障都不应该对其有任何影响。</li></ul></li></ul><h3 id="_3-1-数据库的并发问题" tabindex="-1"><a class="header-anchor" href="#_3-1-数据库的并发问题" aria-hidden="true">#</a> 3.1 数据库的并发问题</h3><p>（1）对于同时运行的多个事务，当这些事务访问数据库中相同的数据时，如果没有采取必要的隔离机制，就会导致各种并发问题：</p><ul><li><strong>①脏读</strong></li><li>对于两个事务 T1，T2，T1 读取了已经被 T2 更新但还没有被提交的字段。之后，若 T2 回滚，T1 读取的内容就是临时且无效的。</li><li><strong>②不可重复读</strong></li><li>对于两个事务 T1，T2，T1 读取了一个字段，然后 T2 更新了该字段之后，T1 再次读取同一个字段，值就不同了。</li><li><strong>③幻读</strong></li><li>对于两个事务 T1，T2，T1 从表中读取几行数据，然后 T2 在该表中插入了一些新的行，之后，T1 再次读取同一个表，就会多出几行</li></ul><p>（2）<strong>数据库事务的隔离性</strong>：数据库系统必须具有隔离并发运行各个事务的能力，使它们不会相互影响，避免各种并发问题。</p><p>（3)一个事务与其他事务隔离的程度成为隔离级别。数据库规定了多种事务隔离级别，不同的隔离级别对应不同的干扰程度，<strong>隔离级别越高，数据一致性就越好，但并发性越弱</strong>。</p><h3 id="_3-2-四种隔离级别" tabindex="-1"><a class="header-anchor" href="#_3-2-四种隔离级别" aria-hidden="true">#</a> 3.2 四种隔离级别</h3><p>（1）MySQL 数据库提供的四种隔离级别</p><table><thead><tr><th><strong>隔离级别</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>READ UNCOMMITED</strong>(读未提交)</td><td>允许事务读取未被其他事务提交的变更。脏读、不可重复读、幻读都会出现。</td></tr><tr><td><strong>READ COMMITED</strong>(读已提交)</td><td>只允许事务读取已经被其他事务提交的变更。可以避免脏读，但不可重复读和幻读问题仍然可能出现。</td></tr><tr><td><strong>REPEATABLE READ</strong>(可重复读)</td><td>确保事务可以从一个字段中读取相同的值，在这个事务持续期间，禁止其他事务对这个字段进行更新，可以避免脏读和不可重复读，但幻读的问题仍然存在。</td></tr><tr><td><strong>SERIALIZABLE</strong>(串行化)</td><td>确保事务可以从表中读取相同的行，在这个事务持续期间，禁止其他事务对该表执行查询、更新和删除操作，所有并发问题都能避免，但性能十分低下。</td></tr></tbody></table><p>（2）Oracle 支持的 2 种事务隔离级别：<strong>READ COMMITED</strong>，SERIALIZABLE。Oracle 默认的事务隔离级别为 <strong>READ COMMITED</strong>。</p><p>（3）MySQL 支持 4 种隔离级别。MySQL 默认的事务隔离级别为：<strong>REPEATABLE READ</strong>。</p><h3 id="_3-3-在-mysql-中设置隔离级别" tabindex="-1"><a class="header-anchor" href="#_3-3-在-mysql-中设置隔离级别" aria-hidden="true">#</a> 3.3 在 MySQL 中设置隔离级别</h3><p>（1）每启动一个 MySQL 程序，就会获得一个单独的数据库连接，每个数据库连接都有一个全局变量 @@tx_isolation，表示当前的事务隔离级别。</p><p>（2）查看当前的隔离级别：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）设置当前 MySQL 连接的隔离级别：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">read</span> commited<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）设置数据库系统的全局的隔离级别：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">global</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">read</span> commited<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）补充操作</p><ul><li><p>创建 MySQL 数据库用户</p><ul><li><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">user</span> tom identified <span class="token keyword">by</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>授予权限</p><ul><li><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 授予通过网络方式登陆的tom用户，对所有库所有表的全部权限，密码设为abc123</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> tom<span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 给 tom 用户使用本地命令行方式，授予 students 这个库下的所有表的增删改查的权限</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">delete</span><span class="token punctuation">,</span><span class="token keyword">update</span> <span class="token keyword">on</span> students<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> tom<span class="token variable">@localhost</span> identifie <span class="token keyword">by</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,33),o=[l];function i(r,p){return n(),a("div",null,o)}const c=s(t,[["render",i],["__file","jdbc-6.html.vue"]]);export{c as default};