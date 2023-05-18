import{_ as t,E as l,Z as s,$ as n,a0 as a,a1 as i,a3 as o,a5 as r}from"./framework-1fb77053.js";const c={},d=a("h2",{id:"_1-mybatis-历史",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-mybatis-历史","aria-hidden":"true"},"#"),i(" 1. MyBatis 历史")],-1),h=a("p",null,[i("MyBatis 最初是 Apache 的一个开源项目 "),a("strong",null,"iBatis"),i("，2010 年 6 月这个项目由 Apache Software Foundation 迁移到了 Google Code。随着开发团队转投 Google Code 旗下，iBatis 3.x 正式更名为 MyBtis。代码于 2013 年 11 月迁移到 GitHub。")],-1),_=a("p",null,'iBatis 一词来源于 "internet" 和 "abatis" 的组合，是一个基于 Java 的持久层框架。iBatis 提供的持久层框架包括 SQL Maps 和 Data Access Objects（DAO）。',-1),u=a("h2",{id:"_2-mybatis-下载地址",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-mybatis-下载地址","aria-hidden":"true"},"#"),i(" 2. MyBatis 下载地址")],-1),b={href:"https://github.com/mybatis/mybatis-3/releases",target:"_blank",rel:"noopener noreferrer"},m=r('<figure><img src="http://img.hl1015.top/blog/image-20211020221358071.png" alt="image-20211020221358071" tabindex="0" loading="lazy"><figcaption>image-20211020221358071</figcaption></figure><h2 id="_3-mybatis-特性" tabindex="-1"><a class="header-anchor" href="#_3-mybatis-特性" aria-hidden="true">#</a> 3. MyBatis 特性</h2><ul><li>MyBatis 支持定制化 SQL、存储过程以及高级映射</li><li>MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及结果集解析操作</li><li>MyBatis 可以使用简单的 XML 或注解实现配置和原始映射；将接口和 Java 的 POJO（Plain Ordinary Java Object，普通的 Java 对象）映射成数据库中的记录</li><li>MyBatis 是一个半自动的 ORM（Object Relation Mapping）框架</li></ul><h2 id="_4-和其他持久层技术对比" tabindex="-1"><a class="header-anchor" href="#_4-和其他持久层技术对比" aria-hidden="true">#</a> 4. 和其他持久层技术对比</h2><ul><li>JDBC <ul><li>SQL 夹杂在 Java 代码中耦合度高，导致硬编码内伤</li><li>维护不易且实际开发需求中 SQL 有变化，频繁修改的情况多见</li><li>代码冗长，开发效率低</li></ul></li><li>Hibernate 和 JPA <ul><li>操作简便，开发效率高</li><li>程序中的长难复杂 SQL 需要绕过框架</li><li>内部自动生成的 SQL，不容易做特殊优化</li><li>基于全映射的全自动框架，大量字段的 POJO 进行部分映射时比较困难</li></ul></li><li>MyBais <ul><li>轻量级，性能出色</li><li>SQL 和 Java 编码分开，功能边界清晰。Java 代码专注业务、SQL 语句专注数据</li><li>开发效率稍逊于 Hibernate，但是完全能够接受</li></ul></li></ul>',5);function y(p,g){const e=l("ExternalLinkIcon");return s(),n("div",null,[d,h,_,u,a("p",null,[a("a",b,[i("https://github.com/mybatis/mybatis-3/releases"),o(e)])]),m])}const f=t(c,[["render",y],["__file","mybatis-1.html.vue"]]);export{f as default};