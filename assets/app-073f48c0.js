import{d as v,r as E,a as Kn,b as No,i as Y,c as is,e as Ho,f as Fo,g as f,h as zn,j as Le,o as D,k as b,l as t,m as $,n as wa,p as Js,q as Jo,u as Uo,w as R,s as Nn,t as Go,v as Hn,x as Qo,y as Wo,z as Ko,A as z,B as Yo,T as Mn,C as sn,D as Xo,E as Q,F as Zo,R as Pa,G as Yn,H as Xn,I as hn,J as pn,K as Ie,L as nl,M as al,N as H,O as _a,P as sl,Q as el,S as ps,U as tl,V as ol,W as ll,X as il,Y as pl}from"./framework-1fb77053.js";const cl="modulepreload",rl=function(n){return"/"+n},Us={},i=function(a,s,e){if(!s||s.length===0)return a();const o=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=rl(l),l in Us)return;Us[l]=!0;const p=l.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(!!e)for(let d=o.length-1;d>=0;d--){const m=o[d];if(m.href===l&&(!p||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const r=document.createElement("link");if(r.rel=p?"stylesheet":cl,p||(r.as="script",r.crossOrigin=""),r.href=l,document.head.appendChild(r),p)return new Promise((d,m)=>{r.addEventListener("load",d),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>a())},ul={"v-184f4da6":()=>i(()=>import("./intro.html-bc4c3849.js"),[]).then(({data:n})=>n),"v-8daa1a0e":()=>i(()=>import("./index.html-f66f7dca.js"),[]).then(({data:n})=>n),"v-2e3eac9e":()=>i(()=>import("./slides.html-b446a6cf.js"),[]).then(({data:n})=>n),"v-2e25198a":()=>i(()=>import("./index.html-ef748092.js"),[]).then(({data:n})=>n),"v-72a9c1e2":()=>i(()=>import("./index.html-e0cfc623.js"),[]).then(({data:n})=>n),"v-14c69af4":()=>i(()=>import("./index.html-13847562.js"),[]).then(({data:n})=>n),"v-f0383c18":()=>i(()=>import("./index.html-763f6ae5.js"),[]).then(({data:n})=>n),"v-744e35e2":()=>i(()=>import("./index.html-adbdaee4.js"),[]).then(({data:n})=>n),"v-f785aee2":()=>i(()=>import("./index.html-a10da4eb.js"),[]).then(({data:n})=>n),"v-bce49b2e":()=>i(()=>import("./redis-1.html-89797eb8.js"),[]).then(({data:n})=>n),"v-df48c1ce":()=>i(()=>import("./redis-10.html-a9718b08.js"),[]).then(({data:n})=>n),"v-dbdf1090":()=>i(()=>import("./redis-11.html-5d445739.js"),[]).then(({data:n})=>n),"v-d8755f52":()=>i(()=>import("./redis-12.html-37c2ea2c.js"),[]).then(({data:n})=>n),"v-d50bae14":()=>i(()=>import("./redis-13.html-560f97de.js"),[]).then(({data:n})=>n),"v-d1a1fcd6":()=>i(()=>import("./redis-14.html-56faee19.js"),[]).then(({data:n})=>n),"v-ce384b98":()=>i(()=>import("./redis-15.html-b9f533f7.js"),[]).then(({data:n})=>n),"v-cace9a5a":()=>i(()=>import("./redis-16.html-51260ceb.js"),[]).then(({data:n})=>n),"v-c764e91c":()=>i(()=>import("./redis-17.html-6c456780.js"),[]).then(({data:n})=>n),"v-b97ae9f0":()=>i(()=>import("./redis-2.html-6edcf3fb.js"),[]).then(({data:n})=>n),"v-b61138b2":()=>i(()=>import("./redis-3.html-1a6a48b5.js"),[]).then(({data:n})=>n),"v-b2a78774":()=>i(()=>import("./redis-4.html-091b0099.js"),[]).then(({data:n})=>n),"v-af3dd636":()=>i(()=>import("./redis-5.html-72430327.js"),[]).then(({data:n})=>n),"v-abd424f8":()=>i(()=>import("./redis-6.html-6aaa5847.js"),[]).then(({data:n})=>n),"v-a86a73ba":()=>i(()=>import("./redis-7.html-58202f30.js"),[]).then(({data:n})=>n),"v-a500c27c":()=>i(()=>import("./redis-8.html-a63dbc46.js"),[]).then(({data:n})=>n),"v-a197113e":()=>i(()=>import("./redis-9.html-4cc9b44b.js"),[]).then(({data:n})=>n),"v-e17274d6":()=>i(()=>import("./array.html-e2d32b8b.js"),[]).then(({data:n})=>n),"v-c93c9174":()=>i(()=>import("./basic-grammar.html-3d51bcc5.js"),[]).then(({data:n})=>n),"v-422c02b4":()=>i(()=>import("./collection.html-73a8b0eb.js"),[]).then(({data:n})=>n),"v-131b2324":()=>i(()=>import("./common-class.html-0a1063b4.js"),[]).then(({data:n})=>n),"v-58be56fd":()=>i(()=>import("./enum-and-annotation.html-d1faff0a.js"),[]).then(({data:n})=>n),"v-a57a2242":()=>i(()=>import("./exception.html-4411a24f.js"),[]).then(({data:n})=>n),"v-b231bd26":()=>i(()=>import("./genericity.html-68dcf6c3.js"),[]).then(({data:n})=>n),"v-385b501e":()=>i(()=>import("./io.html-bcd1c7f2.js"),[]).then(({data:n})=>n),"v-da4a4d7e":()=>i(()=>import("./jdk8-new-feature.html-ca816404.js"),[]).then(({data:n})=>n),"v-06bb7d66":()=>i(()=>import("./multi-thread.html-4f6d1289.js"),[]).then(({data:n})=>n),"v-532671a0":()=>i(()=>import("./network.html-007e09ff.js"),[]).then(({data:n})=>n),"v-7c1a6ef8":()=>i(()=>import("./object-oriented-1.html-1823939e.js"),[]).then(({data:n})=>n),"v-7dcf4797":()=>i(()=>import("./object-oriented-2.html-8201ad21.js"),[]).then(({data:n})=>n),"v-7f842036":()=>i(()=>import("./object-oriented-3.html-83924f90.js"),[]).then(({data:n})=>n),"v-8ded9d8e":()=>i(()=>import("./reflection.html-67d1aa97.js"),[]).then(({data:n})=>n),"v-1bfdd03a":()=>i(()=>import("./jdbc-1.html-d5f0e9a8.js"),[]).then(({data:n})=>n),"v-1db2a8d9":()=>i(()=>import("./jdbc-2.html-0623f31b.js"),[]).then(({data:n})=>n),"v-1f678178":()=>i(()=>import("./jdbc-3.html-e6e89a6b.js"),[]).then(({data:n})=>n),"v-211c5a17":()=>i(()=>import("./jdbc-4.html-944b9973.js"),[]).then(({data:n})=>n),"v-22d132b6":()=>i(()=>import("./jdbc-5.html-292c65ea.js"),[]).then(({data:n})=>n),"v-24860b55":()=>i(()=>import("./jdbc-6.html-0aa870d4.js"),[]).then(({data:n})=>n),"v-263ae3f4":()=>i(()=>import("./jdbc-7.html-de7cc1cd.js"),[]).then(({data:n})=>n),"v-27efbc93":()=>i(()=>import("./jdbc-8.html-aeb2ea7a.js"),[]).then(({data:n})=>n),"v-29a49532":()=>i(()=>import("./jdbc-9.html-fc82341b.js"),[]).then(({data:n})=>n),"v-4b724775":()=>i(()=>import("./linux-basic-1.html-a3e86828.js"),[]).then(({data:n})=>n),"v-4d272014":()=>i(()=>import("./linux-basic-2.html-8b403744.js"),[]).then(({data:n})=>n),"v-4edbf8b3":()=>i(()=>import("./linux-basic-3.html-a776afea.js"),[]).then(({data:n})=>n),"v-5090d152":()=>i(()=>import("./linux-basic-4.html-6ff7954a.js"),[]).then(({data:n})=>n),"v-5245a9f1":()=>i(()=>import("./linux-basic-5.html-fd6f3d81.js"),[]).then(({data:n})=>n),"v-53fa8290":()=>i(()=>import("./linux-basic-6.html-e814376b.js"),[]).then(({data:n})=>n),"v-55af5b2f":()=>i(()=>import("./linux-basic-7.html-783887b3.js"),[]).then(({data:n})=>n),"v-576433ce":()=>i(()=>import("./linux-basic-8.html-c65742c6.js"),[]).then(({data:n})=>n),"v-59190c6d":()=>i(()=>import("./linux-basic-9.html-13dd9621.js"),[]).then(({data:n})=>n),"v-10ee9fe3":()=>i(()=>import("./01-Vue简介.html-d4886c7f.js"),[]).then(({data:n})=>n),"v-7e2cd684":()=>i(()=>import("./02-搭建Vue开发环境.html-3752c87b.js"),[]).then(({data:n})=>n),"v-aa48a166":()=>i(()=>import("./03-模板语法.html-0c0eea31.js"),[]).then(({data:n})=>n),"v-60a6eec9":()=>i(()=>import("./04-数据绑定.html-36d4fdde.js"),[]).then(({data:n})=>n),"v-7a4f6454":()=>i(()=>import("./05-MVVM模型.html-5f12941e.js"),[]).then(({data:n})=>n),"v-7d186846":()=>i(()=>import("./06-数据代理.html-90b4ddc7.js"),[]).then(({data:n})=>n),"v-4d748153":()=>i(()=>import("./07-事件处理.html-a13145fd.js"),[]).then(({data:n})=>n),"v-b121e072":()=>i(()=>import("./08-计算属性与侦听器.html-3c6d17a6.js"),[]).then(({data:n})=>n),"v-2214300c":()=>i(()=>import("./09-class与style绑定.html-ff408671.js"),[]).then(({data:n})=>n),"v-7a8e7ed8":()=>i(()=>import("./10-条件渲染.html-f90c5af1.js"),[]).then(({data:n})=>n),"v-19bd6236":()=>i(()=>import("./11-列表渲染.html-c4a8a6dc.js"),[]).then(({data:n})=>n),"v-381488f6":()=>i(()=>import("./12-数据监测总结.html-ff2415dc.js"),[]).then(({data:n})=>n),"v-fa0aa7e8":()=>i(()=>import("./13-收集表单数据.html-e6f3acfa.js"),[]).then(({data:n})=>n),"v-d16aeff8":()=>i(()=>import("./14-过滤器.html-a7fc79bc.js"),[]).then(({data:n})=>n),"v-76277fd2":()=>i(()=>import("./15-内置指令.html-bcdd6cfe.js"),[]).then(({data:n})=>n),"v-6135ec46":()=>i(()=>import("./16-自定义指令.html-f6e6f622.js"),[]).then(({data:n})=>n),"v-3dec9618":()=>i(()=>import("./17-Vue实例生命周期.html-b89a277c.js"),[]).then(({data:n})=>n),"v-857decfc":()=>i(()=>import("./01-模块(化)与组件(化).html-3b8ccf47.js"),[]).then(({data:n})=>n),"v-3ca00cf4":()=>i(()=>import("./02-非单文件组件.html-c944b3aa.js"),[]).then(({data:n})=>n),"v-759a5651":()=>i(()=>import("./03-单文件组件.html-05aa2f21.js"),[]).then(({data:n})=>n),"v-2094ea4f":()=>i(()=>import("./01-初始化脚手架.html-cc72a07a.js"),[]).then(({data:n})=>n),"v-32a97c7e":()=>i(()=>import("./02-ref、props、mixin.html-01062924.js"),[]).then(({data:n})=>n),"v-6592ca48":()=>i(()=>import("./03-插件和scope样式.html-d5442408.js"),[]).then(({data:n})=>n),"v-2270865e":()=>i(()=>import("./04-TodoList案例.html-53858aa0.js"),[]).then(({data:n})=>n),"v-b6dae362":()=>i(()=>import("./git-1.html-5e5ba3db.js"),[]).then(({data:n})=>n),"v-241b801a":()=>i(()=>import("./git-10.html-75bd7a31.js"),[]).then(({data:n})=>n),"v-b3713224":()=>i(()=>import("./git-2.html-9b740e0e.js"),[]).then(({data:n})=>n),"v-b00780e6":()=>i(()=>import("./git-3.html-f485b9ad.js"),[]).then(({data:n})=>n),"v-ac9dcfa8":()=>i(()=>import("./git-4.html-ee30dd6b.js"),[]).then(({data:n})=>n),"v-a9341e6a":()=>i(()=>import("./git-5.html-d4ff321e.js"),[]).then(({data:n})=>n),"v-a5ca6d2c":()=>i(()=>import("./git-6.html-dc589936.js"),[]).then(({data:n})=>n),"v-a260bbee":()=>i(()=>import("./git-7.html-99e38dbc.js"),[]).then(({data:n})=>n),"v-9ef70ab0":()=>i(()=>import("./git-8.html-76b8b433.js"),[]).then(({data:n})=>n),"v-9b8d5972":()=>i(()=>import("./git-9.html-83c266ec.js"),[]).then(({data:n})=>n),"v-f6890b56":()=>i(()=>import("./idea-1.html-55634596.js"),[]).then(({data:n})=>n),"v-f31f5a18":()=>i(()=>import("./idea-2.html-bd9367e9.js"),[]).then(({data:n})=>n),"v-efb5a8da":()=>i(()=>import("./idea-3.html-2a5d90e5.js"),[]).then(({data:n})=>n),"v-ec4bf79c":()=>i(()=>import("./idea-4.html-e227dc6f.js"),[]).then(({data:n})=>n),"v-e8e2465e":()=>i(()=>import("./idea-5.html-fb652572.js"),[]).then(({data:n})=>n),"v-e5789520":()=>i(()=>import("./idea-6.html-7006f010.js"),[]).then(({data:n})=>n),"v-a60ce25e":()=>i(()=>import("./jdk-1.html-0fb874ac.js"),[]).then(({data:n})=>n),"v-3270aac6":()=>i(()=>import("./maven-1.html-cda2fd50.js"),[]).then(({data:n})=>n),"v-2f06f988":()=>i(()=>import("./maven-2.html-a996221c.js"),[]).then(({data:n})=>n),"v-e4d8f156":()=>i(()=>import("./nodejs-1.html-258b21dc.js"),[]).then(({data:n})=>n),"v-3d20ce8f":()=>i(()=>import("./plsql-1.html-a51cbed1.js"),[]).then(({data:n})=>n),"v-3c366b53":()=>i(()=>import("./powerdesigner-1.html-3f4388a7.js"),[]).then(({data:n})=>n),"v-de420796":()=>i(()=>import("./vscode-1.html-ca489af9.js"),[]).then(({data:n})=>n),"v-4b5a535b":()=>i(()=>import("./mysql-basic-1.html-778f9a77.js"),[]).then(({data:n})=>n),"v-20231c67":()=>i(()=>import("./mysql-basic-10.html-aa358b22.js"),[]).then(({data:n})=>n),"v-21d7f506":()=>i(()=>import("./mysql-basic-11.html-e562dfca.js"),[]).then(({data:n})=>n),"v-238ccda5":()=>i(()=>import("./mysql-basic-12.html-61836eb6.js"),[]).then(({data:n})=>n),"v-2541a644":()=>i(()=>import("./mysql-basic-13.html-d1298ca9.js"),[]).then(({data:n})=>n),"v-26f67ee3":()=>i(()=>import("./mysql-basic-14.html-3096723b.js"),[]).then(({data:n})=>n),"v-28ab5782":()=>i(()=>import("./mysql-basic-15.html-d208f4e7.js"),[]).then(({data:n})=>n),"v-4d0f2bfa":()=>i(()=>import("./mysql-basic-2.html-860dcf69.js"),[]).then(({data:n})=>n),"v-4ec40499":()=>i(()=>import("./mysql-basic-3.html-0ed8f1e7.js"),[]).then(({data:n})=>n),"v-5078dd38":()=>i(()=>import("./mysql-basic-4.html-fc5cadde.js"),[]).then(({data:n})=>n),"v-522db5d7":()=>i(()=>import("./mysql-basic-5.html-8595db66.js"),[]).then(({data:n})=>n),"v-53e28e76":()=>i(()=>import("./mysql-basic-6.html-4b95afc3.js"),[]).then(({data:n})=>n),"v-55976715":()=>i(()=>import("./mysql-basic-7.html-baaea777.js"),[]).then(({data:n})=>n),"v-574c3fb4":()=>i(()=>import("./mysql-basic-8.html-0ba8be07.js"),[]).then(({data:n})=>n),"v-59011853":()=>i(()=>import("./mysql-basic-9.html-3bc5c50d.js"),[]).then(({data:n})=>n),"v-095e9d25":()=>i(()=>import("./mysql-install.html-619ead5a.js"),[]).then(({data:n})=>n),"v-3c0140d3":()=>i(()=>import("./docker-basic-1.html-1d34fa1b.js"),[]).then(({data:n})=>n),"v-3db61972":()=>i(()=>import("./docker-basic-2.html-5d1e397b.js"),[]).then(({data:n})=>n),"v-3f6af211":()=>i(()=>import("./docker-basic-3.html-e83a645f.js"),[]).then(({data:n})=>n),"v-411fcab0":()=>i(()=>import("./docker-basic-4.html-6c734814.js"),[]).then(({data:n})=>n),"v-42d4a34f":()=>i(()=>import("./docker-basic-5.html-11030d4e.js"),[]).then(({data:n})=>n),"v-44897bee":()=>i(()=>import("./docker-basic-6.html-f83ad5af.js"),[]).then(({data:n})=>n),"v-463e548d":()=>i(()=>import("./docker-basic-7.html-68ac0c82.js"),[]).then(({data:n})=>n),"v-6dbc1b3a":()=>i(()=>import("./mybatis-1.html-8d9ee5f9.js"),[]).then(({data:n})=>n),"v-6a5269fc":()=>i(()=>import("./mybatis-2.html-1086abae.js"),[]).then(({data:n})=>n),"v-66e8b8be":()=>i(()=>import("./mybatis-3.html-33122854.js"),[]).then(({data:n})=>n),"v-637f0780":()=>i(()=>import("./mybatis-4.html-bc10f65d.js"),[]).then(({data:n})=>n),"v-665eceea":()=>i(()=>import("./mybatis-plus-1.html-2351769e.js"),[]).then(({data:n})=>n),"v-62f51dac":()=>i(()=>import("./mybatis-plus-2.html-06f27ee1.js"),[]).then(({data:n})=>n),"v-5f8b6c6e":()=>i(()=>import("./mybatis-plus-3.html-2f5f9837.js"),[]).then(({data:n})=>n),"v-5c21bb30":()=>i(()=>import("./mybatis-plus-4.html-e3a2677b.js"),[]).then(({data:n})=>n),"v-58b809f2":()=>i(()=>import("./mybatis-plus-5.html-8f1653d5.js"),[]).then(({data:n})=>n),"v-554e58b4":()=>i(()=>import("./mybatis-plus-6.html-b40effba.js"),[]).then(({data:n})=>n),"v-51e4a776":()=>i(()=>import("./mybatis-plus-7.html-3dc190be.js"),[]).then(({data:n})=>n),"v-4e7af638":()=>i(()=>import("./mybatis-plus-8.html-8adab5a3.js"),[]).then(({data:n})=>n),"v-4b1144fa":()=>i(()=>import("./mybatis-plus-9.html-785a17b9.js"),[]).then(({data:n})=>n),"v-646d6d2f":()=>i(()=>import("./springmvc-1.html-e17d4d21.js"),[]).then(({data:n})=>n),"v-662245ce":()=>i(()=>import("./springmvc-2.html-77d4e984.js"),[]).then(({data:n})=>n),"v-67d71e6d":()=>i(()=>import("./springmvc-3.html-7a5a13a9.js"),[]).then(({data:n})=>n),"v-698bf70c":()=>i(()=>import("./springmvc-4.html-85f5c661.js"),[]).then(({data:n})=>n),"v-6b40cfab":()=>i(()=>import("./springmvc-5.html-4201635c.js"),[]).then(({data:n})=>n),"v-6cf5a84a":()=>i(()=>import("./springmvc-6.html-b9873fc5.js"),[]).then(({data:n})=>n),"v-96974d2e":()=>i(()=>import("./spring-annotation-1.html-bda737bf.js"),[]).then(({data:n})=>n),"v-932d9bf0":()=>i(()=>import("./spring-annotation-2.html-fec9146e.js"),[]).then(({data:n})=>n),"v-8fc3eab2":()=>i(()=>import("./spring-annotation-3.html-ed3d2a71.js"),[]).then(({data:n})=>n),"v-8c5a3974":()=>i(()=>import("./spring-annotation-4.html-6f3c7f1e.js"),[]).then(({data:n})=>n),"v-88f08836":()=>i(()=>import("./spring-annotation-5.html-bb231310.js"),[]).then(({data:n})=>n),"v-8586d6f8":()=>i(()=>import("./spring-annotation-6.html-ef2d5814.js"),[]).then(({data:n})=>n),"v-11167db8":()=>i(()=>import("./spring-aop.html-98e9746d.js"),[]).then(({data:n})=>n),"v-204f2809":()=>i(()=>import("./spring-ioc.html-78248481.js"),[]).then(({data:n})=>n),"v-2d5e72f7":()=>i(()=>import("./spring-jdbcTemplate.html-2498c8fe.js"),[]).then(({data:n})=>n),"v-37492b80":()=>i(()=>import("./spring-summary.html-d77671e2.js"),[]).then(({data:n})=>n),"v-63fec628":()=>i(()=>import("./spring-tx.html-43a13f75.js"),[]).then(({data:n})=>n),"v-62ffa9cd":()=>i(()=>import("./springboot2-basic-1.html-e5a2fed0.js"),[]).then(({data:n})=>n),"v-64b4826c":()=>i(()=>import("./springboot2-basic-2.html-efd99fe5.js"),[]).then(({data:n})=>n),"v-66695b0b":()=>i(()=>import("./springboot2-basic-3.html-68c4ee11.js"),[]).then(({data:n})=>n),"v-3cfc1797":()=>i(()=>import("./springboot2-core-1.html-cd8482da.js"),[]).then(({data:n})=>n),"v-3eb0f036":()=>i(()=>import("./springboot2-core-2.html-b18eae13.js"),[]).then(({data:n})=>n),"v-4065c8d5":()=>i(()=>import("./springboot2-core-3.html-894dc0f8.js"),[]).then(({data:n})=>n),"v-421aa174":()=>i(()=>import("./springboot2-core-4.html-c90ad848.js"),[]).then(({data:n})=>n),"v-43cf7a13":()=>i(()=>import("./springboot2-core-5.html-6da2d6dd.js"),[]).then(({data:n})=>n),"v-458452b2":()=>i(()=>import("./springboot2-core-6.html-8f41f492.js"),[]).then(({data:n})=>n),"v-3706649a":()=>i(()=>import("./404.html-892cc94b.js"),[]).then(({data:n})=>n),"v-2921a50f":()=>i(()=>import("./index.html-497d09f9.js"),[]).then(({data:n})=>n),"v-ffb97496":()=>i(()=>import("./index.html-c6e212b1.js"),[]).then(({data:n})=>n),"v-67acca20":()=>i(()=>import("./index.html-3a0b2198.js"),[]).then(({data:n})=>n),"v-43ef4cb5":()=>i(()=>import("./index.html-adc89952.js"),[]).then(({data:n})=>n),"v-88dc28ee":()=>i(()=>import("./index.html-e4a9883d.js"),[]).then(({data:n})=>n),"v-88dc28b0":()=>i(()=>import("./index.html-5af3d074.js"),[]).then(({data:n})=>n),"v-88dc2872":()=>i(()=>import("./index.html-bad4f16f.js"),[]).then(({data:n})=>n),"v-5978b3ac":()=>i(()=>import("./index.html-5a45e0e2.js"),[]).then(({data:n})=>n),"v-54910e2e":()=>i(()=>import("./index.html-1340f3c4.js"),[]).then(({data:n})=>n),"v-5979fced":()=>i(()=>import("./index.html-4f88a716.js"),[]).then(({data:n})=>n),"v-302edd5a":()=>i(()=>import("./index.html-abd71849.js"),[]).then(({data:n})=>n),"v-60f5ff55":()=>i(()=>import("./index.html-fbdb6350.js"),[]).then(({data:n})=>n),"v-24be2528":()=>i(()=>import("./index.html-039ad21b.js"),[]).then(({data:n})=>n),"v-090cd58e":()=>i(()=>import("./index.html-b1a5e546.js"),[]).then(({data:n})=>n),"v-0ef197d6":()=>i(()=>import("./index.html-eaafb257.js"),[]).then(({data:n})=>n),"v-64f4aaee":()=>i(()=>import("./index.html-312243c6.js"),[]).then(({data:n})=>n),"v-21ba2ec8":()=>i(()=>import("./index.html-778e63d6.js"),[]).then(({data:n})=>n),"v-0a3974bc":()=>i(()=>import("./index.html-1302c0be.js"),[]).then(({data:n})=>n),"v-134911e1":()=>i(()=>import("./index.html-ac9d36d6.js"),[]).then(({data:n})=>n),"v-3a93f820":()=>i(()=>import("./index.html-28ea2f25.js"),[]).then(({data:n})=>n),"v-07f357a1":()=>i(()=>import("./index.html-13e3e209.js"),[]).then(({data:n})=>n),"v-780e7036":()=>i(()=>import("./index.html-c1cfa298.js"),[]).then(({data:n})=>n),"v-f98a8cd4":()=>i(()=>import("./index.html-bec4d8dc.js"),[]).then(({data:n})=>n),"v-76b674c7":()=>i(()=>import("./index.html-ef54f921.js"),[]).then(({data:n})=>n),"v-3b7aa683":()=>i(()=>import("./index.html-470cb713.js"),[]).then(({data:n})=>n),"v-574c8786":()=>i(()=>import("./index.html-74f721d0.js"),[]).then(({data:n})=>n),"v-381aa653":()=>i(()=>import("./index.html-604db50f.js"),[]).then(({data:n})=>n),"v-89f3f3e8":()=>i(()=>import("./index.html-e9379866.js"),[]).then(({data:n})=>n),"v-5f7a288b":()=>i(()=>import("./index.html-5f5201eb.js"),[]).then(({data:n})=>n),"v-7177bac5":()=>i(()=>import("./index.html-fb7832a1.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>i(()=>import("./index.html-66336167.js"),[]).then(({data:n})=>n),"v-744d024e":()=>i(()=>import("./index.html-dfe2fb10.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>i(()=>import("./index.html-d228c8f9.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>i(()=>import("./index.html-5a57e655.js"),[]).then(({data:n})=>n),"v-01560935":()=>i(()=>import("./index.html-420438be.js"),[]).then(({data:n})=>n),"v-ac0c2a6a":()=>i(()=>import("./index.html-ef5dc764.js"),[]).then(({data:n})=>n),"v-0d1f4c3c":()=>i(()=>import("./index.html-f0103cc6.js"),[]).then(({data:n})=>n),"v-8848dfa8":()=>i(()=>import("./index.html-2ad073be.js"),[]).then(({data:n})=>n),"v-20002c0c":()=>i(()=>import("./index.html-34cae7e9.js"),[]).then(({data:n})=>n),"v-5831b135":()=>i(()=>import("./index.html-220a8854.js"),[]).then(({data:n})=>n),"v-28a2eb06":()=>i(()=>import("./index.html-787a0a88.js"),[]).then(({data:n})=>n),"v-9c48d85a":()=>i(()=>import("./index.html-6ae79330.js"),[]).then(({data:n})=>n),"v-edc3057c":()=>i(()=>import("./index.html-9ef93224.js"),[]).then(({data:n})=>n),"v-65f6d381":()=>i(()=>import("./index.html-c676b9fe.js"),[]).then(({data:n})=>n),"v-b302da92":()=>i(()=>import("./index.html-c135dc4c.js"),[]).then(({data:n})=>n),"v-65efd6b5":()=>i(()=>import("./index.html-5dc93712.js"),[]).then(({data:n})=>n),"v-b310d42a":()=>i(()=>import("./index.html-77798284.js"),[]).then(({data:n})=>n),"v-5824b700":()=>i(()=>import("./index.html-230d2ca3.js"),[]).then(({data:n})=>n),"v-2894de8a":()=>i(()=>import("./index.html-65a4621f.js"),[]).then(({data:n})=>n),"v-65f11ff6":()=>i(()=>import("./index.html-8b29a16c.js"),[]).then(({data:n})=>n),"v-b30e41a8":()=>i(()=>import("./index.html-da7658d0.js"),[]).then(({data:n})=>n),"v-99b9d3c8":()=>i(()=>import("./index.html-85e56241.js"),[]).then(({data:n})=>n),"v-1e90405c":()=>i(()=>import("./index.html-51b7de58.js"),[]).then(({data:n})=>n),"v-05e7d8a8":()=>i(()=>import("./index.html-6794d522.js"),[]).then(({data:n})=>n),"v-721080b6":()=>i(()=>import("./index.html-1200cffc.js"),[]).then(({data:n})=>n),"v-8e491b96":()=>i(()=>import("./index.html-b53022a2.js"),[]).then(({data:n})=>n),"v-131f882a":()=>i(()=>import("./index.html-5946c964.js"),[]).then(({data:n})=>n),"v-a582fd52":()=>i(()=>import("./index.html-e86425bd.js"),[]).then(({data:n})=>n),"v-3aa1350d":()=>i(()=>import("./index.html-364589dc.js"),[]).then(({data:n})=>n),"v-348641c0":()=>i(()=>import("./index.html-cea28c83.js"),[]).then(({data:n})=>n),"v-3607ddaa":()=>i(()=>import("./index.html-c5c3cb17.js"),[]).then(({data:n})=>n),"v-9717cc36":()=>i(()=>import("./index.html-14837037.js"),[]).then(({data:n})=>n),"v-28acd99e":()=>i(()=>import("./index.html-1f1b499d.js"),[]).then(({data:n})=>n),"v-27fb5a12":()=>i(()=>import("./index.html-0b272bef.js"),[]).then(({data:n})=>n),"v-ecdc9a76":()=>i(()=>import("./index.html-276d9e27.js"),[]).then(({data:n})=>n),"v-47aab902":()=>i(()=>import("./index.html-97986d12.js"),[]).then(({data:n})=>n),"v-3544e778":()=>i(()=>import("./index.html-e29d7ce2.js"),[]).then(({data:n})=>n),"v-757f190a":()=>i(()=>import("./index.html-5462e5ff.js"),[]).then(({data:n})=>n),"v-41e71c66":()=>i(()=>import("./index.html-c7f4ab29.js"),[]).then(({data:n})=>n),"v-9f510020":()=>i(()=>import("./index.html-c0e0d9e6.js"),[]).then(({data:n})=>n),"v-0f6ad445":()=>i(()=>import("./index.html-9ccffcb6.js"),[]).then(({data:n})=>n),"v-7d0ba9b4":()=>i(()=>import("./index.html-b2033e5b.js"),[]).then(({data:n})=>n),"v-1672eb57":()=>i(()=>import("./index.html-18baf143.js"),[]).then(({data:n})=>n),"v-780e2880":()=>i(()=>import("./index.html-9a509d58.js"),[]).then(({data:n})=>n)},dl=JSON.parse('{"base":"/","lang":"en-US","title":"程序员H","description":"","head":[],"locales":{"/":{"lang":"zh-CN"}}}'),Te={"v-184f4da6":v(()=>i(()=>import("./intro.html-3d0aecb4.js"),["assets/intro.html-3d0aecb4.js","assets/framework-1fb77053.js"])),"v-8daa1a0e":v(()=>i(()=>import("./index.html-32ea720b.js"),["assets/index.html-32ea720b.js","assets/framework-1fb77053.js"])),"v-2e3eac9e":v(()=>i(()=>import("./slides.html-ed446237.js"),["assets/slides.html-ed446237.js","assets/framework-1fb77053.js"])),"v-2e25198a":v(()=>i(()=>import("./index.html-23777a3f.js"),["assets/index.html-23777a3f.js","assets/framework-1fb77053.js"])),"v-72a9c1e2":v(()=>i(()=>import("./index.html-ac5a0d15.js"),["assets/index.html-ac5a0d15.js","assets/framework-1fb77053.js"])),"v-14c69af4":v(()=>i(()=>import("./index.html-d5bbb478.js"),["assets/index.html-d5bbb478.js","assets/framework-1fb77053.js"])),"v-f0383c18":v(()=>i(()=>import("./index.html-98ab6b0b.js"),["assets/index.html-98ab6b0b.js","assets/framework-1fb77053.js"])),"v-744e35e2":v(()=>i(()=>import("./index.html-e01d7a11.js"),["assets/index.html-e01d7a11.js","assets/framework-1fb77053.js"])),"v-f785aee2":v(()=>i(()=>import("./index.html-12042c6f.js"),["assets/index.html-12042c6f.js","assets/framework-1fb77053.js"])),"v-bce49b2e":v(()=>i(()=>import("./redis-1.html-b200080e.js"),["assets/redis-1.html-b200080e.js","assets/framework-1fb77053.js"])),"v-df48c1ce":v(()=>i(()=>import("./redis-10.html-44c5bedb.js"),["assets/redis-10.html-44c5bedb.js","assets/framework-1fb77053.js"])),"v-dbdf1090":v(()=>i(()=>import("./redis-11.html-d2a01f41.js"),["assets/redis-11.html-d2a01f41.js","assets/framework-1fb77053.js"])),"v-d8755f52":v(()=>i(()=>import("./redis-12.html-f7f73b70.js"),["assets/redis-12.html-f7f73b70.js","assets/framework-1fb77053.js"])),"v-d50bae14":v(()=>i(()=>import("./redis-13.html-3fb79b5e.js"),["assets/redis-13.html-3fb79b5e.js","assets/framework-1fb77053.js"])),"v-d1a1fcd6":v(()=>i(()=>import("./redis-14.html-628f6c9e.js"),["assets/redis-14.html-628f6c9e.js","assets/framework-1fb77053.js"])),"v-ce384b98":v(()=>i(()=>import("./redis-15.html-70f5ffe5.js"),["assets/redis-15.html-70f5ffe5.js","assets/framework-1fb77053.js"])),"v-cace9a5a":v(()=>i(()=>import("./redis-16.html-a33df81d.js"),["assets/redis-16.html-a33df81d.js","assets/framework-1fb77053.js"])),"v-c764e91c":v(()=>i(()=>import("./redis-17.html-ec201152.js"),["assets/redis-17.html-ec201152.js","assets/framework-1fb77053.js"])),"v-b97ae9f0":v(()=>i(()=>import("./redis-2.html-b84f9ed0.js"),["assets/redis-2.html-b84f9ed0.js","assets/framework-1fb77053.js"])),"v-b61138b2":v(()=>i(()=>import("./redis-3.html-c9096f64.js"),["assets/redis-3.html-c9096f64.js","assets/framework-1fb77053.js"])),"v-b2a78774":v(()=>i(()=>import("./redis-4.html-ccbcd006.js"),["assets/redis-4.html-ccbcd006.js","assets/framework-1fb77053.js"])),"v-af3dd636":v(()=>i(()=>import("./redis-5.html-f156571d.js"),["assets/redis-5.html-f156571d.js","assets/framework-1fb77053.js"])),"v-abd424f8":v(()=>i(()=>import("./redis-6.html-9cbfba92.js"),["assets/redis-6.html-9cbfba92.js","assets/framework-1fb77053.js"])),"v-a86a73ba":v(()=>i(()=>import("./redis-7.html-725ab405.js"),["assets/redis-7.html-725ab405.js","assets/framework-1fb77053.js"])),"v-a500c27c":v(()=>i(()=>import("./redis-8.html-2f3016f2.js"),["assets/redis-8.html-2f3016f2.js","assets/framework-1fb77053.js"])),"v-a197113e":v(()=>i(()=>import("./redis-9.html-32809457.js"),["assets/redis-9.html-32809457.js","assets/framework-1fb77053.js"])),"v-e17274d6":v(()=>i(()=>import("./array.html-acdcbecb.js"),["assets/array.html-acdcbecb.js","assets/framework-1fb77053.js"])),"v-c93c9174":v(()=>i(()=>import("./basic-grammar.html-665ca41a.js"),["assets/basic-grammar.html-665ca41a.js","assets/framework-1fb77053.js"])),"v-422c02b4":v(()=>i(()=>import("./collection.html-88616680.js"),["assets/collection.html-88616680.js","assets/framework-1fb77053.js"])),"v-131b2324":v(()=>i(()=>import("./common-class.html-aea7cdbc.js"),["assets/common-class.html-aea7cdbc.js","assets/framework-1fb77053.js"])),"v-58be56fd":v(()=>i(()=>import("./enum-and-annotation.html-8454ead5.js"),["assets/enum-and-annotation.html-8454ead5.js","assets/framework-1fb77053.js"])),"v-a57a2242":v(()=>i(()=>import("./exception.html-2bb7f41c.js"),["assets/exception.html-2bb7f41c.js","assets/framework-1fb77053.js"])),"v-b231bd26":v(()=>i(()=>import("./genericity.html-229cde58.js"),["assets/genericity.html-229cde58.js","assets/framework-1fb77053.js"])),"v-385b501e":v(()=>i(()=>import("./io.html-7bd219b5.js"),["assets/io.html-7bd219b5.js","assets/framework-1fb77053.js"])),"v-da4a4d7e":v(()=>i(()=>import("./jdk8-new-feature.html-4f14abfa.js"),["assets/jdk8-new-feature.html-4f14abfa.js","assets/framework-1fb77053.js"])),"v-06bb7d66":v(()=>i(()=>import("./multi-thread.html-1d44015f.js"),["assets/multi-thread.html-1d44015f.js","assets/framework-1fb77053.js"])),"v-532671a0":v(()=>i(()=>import("./network.html-2fc2c95d.js"),["assets/network.html-2fc2c95d.js","assets/framework-1fb77053.js"])),"v-7c1a6ef8":v(()=>i(()=>import("./object-oriented-1.html-340cbde8.js"),["assets/object-oriented-1.html-340cbde8.js","assets/framework-1fb77053.js"])),"v-7dcf4797":v(()=>i(()=>import("./object-oriented-2.html-6d14c2d7.js"),["assets/object-oriented-2.html-6d14c2d7.js","assets/framework-1fb77053.js"])),"v-7f842036":v(()=>i(()=>import("./object-oriented-3.html-82d19ddf.js"),["assets/object-oriented-3.html-82d19ddf.js","assets/framework-1fb77053.js"])),"v-8ded9d8e":v(()=>i(()=>import("./reflection.html-e53b20b3.js"),["assets/reflection.html-e53b20b3.js","assets/framework-1fb77053.js"])),"v-1bfdd03a":v(()=>i(()=>import("./jdbc-1.html-c59426dd.js"),["assets/jdbc-1.html-c59426dd.js","assets/framework-1fb77053.js"])),"v-1db2a8d9":v(()=>i(()=>import("./jdbc-2.html-79308746.js"),["assets/jdbc-2.html-79308746.js","assets/framework-1fb77053.js"])),"v-1f678178":v(()=>i(()=>import("./jdbc-3.html-614df51f.js"),["assets/jdbc-3.html-614df51f.js","assets/framework-1fb77053.js"])),"v-211c5a17":v(()=>i(()=>import("./jdbc-4.html-eb39924b.js"),["assets/jdbc-4.html-eb39924b.js","assets/framework-1fb77053.js"])),"v-22d132b6":v(()=>i(()=>import("./jdbc-5.html-570d33b3.js"),["assets/jdbc-5.html-570d33b3.js","assets/framework-1fb77053.js"])),"v-24860b55":v(()=>i(()=>import("./jdbc-6.html-276ef7c6.js"),["assets/jdbc-6.html-276ef7c6.js","assets/framework-1fb77053.js"])),"v-263ae3f4":v(()=>i(()=>import("./jdbc-7.html-3057d2c8.js"),["assets/jdbc-7.html-3057d2c8.js","assets/framework-1fb77053.js"])),"v-27efbc93":v(()=>i(()=>import("./jdbc-8.html-c64fa6be.js"),["assets/jdbc-8.html-c64fa6be.js","assets/framework-1fb77053.js"])),"v-29a49532":v(()=>i(()=>import("./jdbc-9.html-245d3789.js"),["assets/jdbc-9.html-245d3789.js","assets/framework-1fb77053.js"])),"v-4b724775":v(()=>i(()=>import("./linux-basic-1.html-f38982f5.js"),["assets/linux-basic-1.html-f38982f5.js","assets/framework-1fb77053.js"])),"v-4d272014":v(()=>i(()=>import("./linux-basic-2.html-545febcd.js"),["assets/linux-basic-2.html-545febcd.js","assets/framework-1fb77053.js"])),"v-4edbf8b3":v(()=>i(()=>import("./linux-basic-3.html-d5bcedfc.js"),["assets/linux-basic-3.html-d5bcedfc.js","assets/framework-1fb77053.js"])),"v-5090d152":v(()=>i(()=>import("./linux-basic-4.html-3056b10f.js"),["assets/linux-basic-4.html-3056b10f.js","assets/framework-1fb77053.js"])),"v-5245a9f1":v(()=>i(()=>import("./linux-basic-5.html-366601c0.js"),["assets/linux-basic-5.html-366601c0.js","assets/framework-1fb77053.js"])),"v-53fa8290":v(()=>i(()=>import("./linux-basic-6.html-8c502eae.js"),["assets/linux-basic-6.html-8c502eae.js","assets/framework-1fb77053.js"])),"v-55af5b2f":v(()=>i(()=>import("./linux-basic-7.html-388ac313.js"),["assets/linux-basic-7.html-388ac313.js","assets/framework-1fb77053.js"])),"v-576433ce":v(()=>i(()=>import("./linux-basic-8.html-3337278c.js"),["assets/linux-basic-8.html-3337278c.js","assets/framework-1fb77053.js"])),"v-59190c6d":v(()=>i(()=>import("./linux-basic-9.html-a1912a3d.js"),["assets/linux-basic-9.html-a1912a3d.js","assets/framework-1fb77053.js"])),"v-10ee9fe3":v(()=>i(()=>import("./01-Vue简介.html-bb6e7a5f.js"),["assets/01-Vue简介.html-bb6e7a5f.js","assets/framework-1fb77053.js"])),"v-7e2cd684":v(()=>i(()=>import("./02-搭建Vue开发环境.html-6adb2228.js"),["assets/02-搭建Vue开发环境.html-6adb2228.js","assets/framework-1fb77053.js"])),"v-aa48a166":v(()=>i(()=>import("./03-模板语法.html-d4f18c0e.js"),["assets/03-模板语法.html-d4f18c0e.js","assets/framework-1fb77053.js"])),"v-60a6eec9":v(()=>i(()=>import("./04-数据绑定.html-6d09552d.js"),["assets/04-数据绑定.html-6d09552d.js","assets/framework-1fb77053.js"])),"v-7a4f6454":v(()=>i(()=>import("./05-MVVM模型.html-03dd9688.js"),["assets/05-MVVM模型.html-03dd9688.js","assets/framework-1fb77053.js"])),"v-7d186846":v(()=>i(()=>import("./06-数据代理.html-92295dd8.js"),["assets/06-数据代理.html-92295dd8.js","assets/framework-1fb77053.js"])),"v-4d748153":v(()=>i(()=>import("./07-事件处理.html-85a14ba9.js"),["assets/07-事件处理.html-85a14ba9.js","assets/framework-1fb77053.js"])),"v-b121e072":v(()=>i(()=>import("./08-计算属性与侦听器.html-7f7ddc68.js"),["assets/08-计算属性与侦听器.html-7f7ddc68.js","assets/framework-1fb77053.js"])),"v-2214300c":v(()=>i(()=>import("./09-class与style绑定.html-cb6cd62c.js"),["assets/09-class与style绑定.html-cb6cd62c.js","assets/framework-1fb77053.js"])),"v-7a8e7ed8":v(()=>i(()=>import("./10-条件渲染.html-739ff898.js"),["assets/10-条件渲染.html-739ff898.js","assets/framework-1fb77053.js"])),"v-19bd6236":v(()=>i(()=>import("./11-列表渲染.html-8ea4d7a8.js"),["assets/11-列表渲染.html-8ea4d7a8.js","assets/framework-1fb77053.js"])),"v-381488f6":v(()=>i(()=>import("./12-数据监测总结.html-32b44e23.js"),["assets/12-数据监测总结.html-32b44e23.js","assets/framework-1fb77053.js"])),"v-fa0aa7e8":v(()=>i(()=>import("./13-收集表单数据.html-775beef9.js"),["assets/13-收集表单数据.html-775beef9.js","assets/framework-1fb77053.js"])),"v-d16aeff8":v(()=>i(()=>import("./14-过滤器.html-aa4a1355.js"),["assets/14-过滤器.html-aa4a1355.js","assets/framework-1fb77053.js"])),"v-76277fd2":v(()=>i(()=>import("./15-内置指令.html-631f209a.js"),["assets/15-内置指令.html-631f209a.js","assets/framework-1fb77053.js"])),"v-6135ec46":v(()=>i(()=>import("./16-自定义指令.html-effefc70.js"),["assets/16-自定义指令.html-effefc70.js","assets/framework-1fb77053.js"])),"v-3dec9618":v(()=>i(()=>import("./17-Vue实例生命周期.html-d9fe742a.js"),["assets/17-Vue实例生命周期.html-d9fe742a.js","assets/framework-1fb77053.js"])),"v-857decfc":v(()=>i(()=>import("./01-模块(化)与组件(化).html-bdbdb796.js"),["assets/01-模块(化)与组件(化).html-bdbdb796.js","assets/framework-1fb77053.js"])),"v-3ca00cf4":v(()=>i(()=>import("./02-非单文件组件.html-71e8837d.js"),["assets/02-非单文件组件.html-71e8837d.js","assets/framework-1fb77053.js"])),"v-759a5651":v(()=>i(()=>import("./03-单文件组件.html-1f3bdbe4.js"),["assets/03-单文件组件.html-1f3bdbe4.js","assets/framework-1fb77053.js"])),"v-2094ea4f":v(()=>i(()=>import("./01-初始化脚手架.html-f6a300f3.js"),["assets/01-初始化脚手架.html-f6a300f3.js","assets/framework-1fb77053.js"])),"v-32a97c7e":v(()=>i(()=>import("./02-ref、props、mixin.html-5f97ae34.js"),["assets/02-ref、props、mixin.html-5f97ae34.js","assets/framework-1fb77053.js"])),"v-6592ca48":v(()=>i(()=>import("./03-插件和scope样式.html-c9b2bd4d.js"),["assets/03-插件和scope样式.html-c9b2bd4d.js","assets/framework-1fb77053.js"])),"v-2270865e":v(()=>i(()=>import("./04-TodoList案例.html-bef96dbe.js"),["assets/04-TodoList案例.html-bef96dbe.js","assets/framework-1fb77053.js"])),"v-b6dae362":v(()=>i(()=>import("./git-1.html-35385759.js"),["assets/git-1.html-35385759.js","assets/framework-1fb77053.js"])),"v-241b801a":v(()=>i(()=>import("./git-10.html-fe5f8f19.js"),["assets/git-10.html-fe5f8f19.js","assets/framework-1fb77053.js"])),"v-b3713224":v(()=>i(()=>import("./git-2.html-58662dfc.js"),["assets/git-2.html-58662dfc.js","assets/framework-1fb77053.js"])),"v-b00780e6":v(()=>i(()=>import("./git-3.html-9f4f539a.js"),["assets/git-3.html-9f4f539a.js","assets/framework-1fb77053.js"])),"v-ac9dcfa8":v(()=>i(()=>import("./git-4.html-a8d28980.js"),["assets/git-4.html-a8d28980.js","assets/framework-1fb77053.js"])),"v-a9341e6a":v(()=>i(()=>import("./git-5.html-b5fc744c.js"),["assets/git-5.html-b5fc744c.js","assets/framework-1fb77053.js"])),"v-a5ca6d2c":v(()=>i(()=>import("./git-6.html-1fb5ab9b.js"),["assets/git-6.html-1fb5ab9b.js","assets/framework-1fb77053.js"])),"v-a260bbee":v(()=>i(()=>import("./git-7.html-6f8eecfc.js"),["assets/git-7.html-6f8eecfc.js","assets/framework-1fb77053.js"])),"v-9ef70ab0":v(()=>i(()=>import("./git-8.html-679c00dd.js"),["assets/git-8.html-679c00dd.js","assets/framework-1fb77053.js"])),"v-9b8d5972":v(()=>i(()=>import("./git-9.html-c9ed0606.js"),["assets/git-9.html-c9ed0606.js","assets/framework-1fb77053.js"])),"v-f6890b56":v(()=>i(()=>import("./idea-1.html-7c168154.js"),["assets/idea-1.html-7c168154.js","assets/framework-1fb77053.js"])),"v-f31f5a18":v(()=>i(()=>import("./idea-2.html-a85a7ac4.js"),["assets/idea-2.html-a85a7ac4.js","assets/framework-1fb77053.js"])),"v-efb5a8da":v(()=>i(()=>import("./idea-3.html-5a6621b0.js"),["assets/idea-3.html-5a6621b0.js","assets/framework-1fb77053.js"])),"v-ec4bf79c":v(()=>i(()=>import("./idea-4.html-468db1b5.js"),["assets/idea-4.html-468db1b5.js","assets/framework-1fb77053.js"])),"v-e8e2465e":v(()=>i(()=>import("./idea-5.html-8c0772c9.js"),["assets/idea-5.html-8c0772c9.js","assets/framework-1fb77053.js"])),"v-e5789520":v(()=>i(()=>import("./idea-6.html-faa8a36a.js"),["assets/idea-6.html-faa8a36a.js","assets/framework-1fb77053.js"])),"v-a60ce25e":v(()=>i(()=>import("./jdk-1.html-1254678d.js"),["assets/jdk-1.html-1254678d.js","assets/framework-1fb77053.js"])),"v-3270aac6":v(()=>i(()=>import("./maven-1.html-6f502d46.js"),["assets/maven-1.html-6f502d46.js","assets/framework-1fb77053.js"])),"v-2f06f988":v(()=>i(()=>import("./maven-2.html-734435f1.js"),["assets/maven-2.html-734435f1.js","assets/framework-1fb77053.js"])),"v-e4d8f156":v(()=>i(()=>import("./nodejs-1.html-5357b219.js"),["assets/nodejs-1.html-5357b219.js","assets/framework-1fb77053.js"])),"v-3d20ce8f":v(()=>i(()=>import("./plsql-1.html-fd8a4ff6.js"),["assets/plsql-1.html-fd8a4ff6.js","assets/framework-1fb77053.js"])),"v-3c366b53":v(()=>i(()=>import("./powerdesigner-1.html-5908da4a.js"),["assets/powerdesigner-1.html-5908da4a.js","assets/framework-1fb77053.js"])),"v-de420796":v(()=>i(()=>import("./vscode-1.html-4ed972f8.js"),["assets/vscode-1.html-4ed972f8.js","assets/framework-1fb77053.js"])),"v-4b5a535b":v(()=>i(()=>import("./mysql-basic-1.html-add0fc49.js"),["assets/mysql-basic-1.html-add0fc49.js","assets/framework-1fb77053.js"])),"v-20231c67":v(()=>i(()=>import("./mysql-basic-10.html-b0e561ac.js"),["assets/mysql-basic-10.html-b0e561ac.js","assets/framework-1fb77053.js"])),"v-21d7f506":v(()=>i(()=>import("./mysql-basic-11.html-efa98106.js"),["assets/mysql-basic-11.html-efa98106.js","assets/framework-1fb77053.js"])),"v-238ccda5":v(()=>i(()=>import("./mysql-basic-12.html-4c244b9c.js"),["assets/mysql-basic-12.html-4c244b9c.js","assets/framework-1fb77053.js"])),"v-2541a644":v(()=>i(()=>import("./mysql-basic-13.html-e0ae2888.js"),["assets/mysql-basic-13.html-e0ae2888.js","assets/framework-1fb77053.js"])),"v-26f67ee3":v(()=>i(()=>import("./mysql-basic-14.html-2be7146d.js"),["assets/mysql-basic-14.html-2be7146d.js","assets/framework-1fb77053.js"])),"v-28ab5782":v(()=>i(()=>import("./mysql-basic-15.html-dbdb8bd2.js"),["assets/mysql-basic-15.html-dbdb8bd2.js","assets/framework-1fb77053.js"])),"v-4d0f2bfa":v(()=>i(()=>import("./mysql-basic-2.html-0aa2c5a3.js"),["assets/mysql-basic-2.html-0aa2c5a3.js","assets/framework-1fb77053.js"])),"v-4ec40499":v(()=>i(()=>import("./mysql-basic-3.html-9986e413.js"),["assets/mysql-basic-3.html-9986e413.js","assets/framework-1fb77053.js"])),"v-5078dd38":v(()=>i(()=>import("./mysql-basic-4.html-6e6a2303.js"),["assets/mysql-basic-4.html-6e6a2303.js","assets/framework-1fb77053.js"])),"v-522db5d7":v(()=>i(()=>import("./mysql-basic-5.html-8b82b2cc.js"),["assets/mysql-basic-5.html-8b82b2cc.js","assets/framework-1fb77053.js"])),"v-53e28e76":v(()=>i(()=>import("./mysql-basic-6.html-d2e7c06a.js"),["assets/mysql-basic-6.html-d2e7c06a.js","assets/framework-1fb77053.js"])),"v-55976715":v(()=>i(()=>import("./mysql-basic-7.html-90d41679.js"),["assets/mysql-basic-7.html-90d41679.js","assets/framework-1fb77053.js"])),"v-574c3fb4":v(()=>i(()=>import("./mysql-basic-8.html-92ca04e9.js"),["assets/mysql-basic-8.html-92ca04e9.js","assets/framework-1fb77053.js"])),"v-59011853":v(()=>i(()=>import("./mysql-basic-9.html-4180b224.js"),["assets/mysql-basic-9.html-4180b224.js","assets/framework-1fb77053.js"])),"v-095e9d25":v(()=>i(()=>import("./mysql-install.html-08061b9f.js"),["assets/mysql-install.html-08061b9f.js","assets/framework-1fb77053.js"])),"v-3c0140d3":v(()=>i(()=>import("./docker-basic-1.html-aabe2c4c.js"),["assets/docker-basic-1.html-aabe2c4c.js","assets/framework-1fb77053.js"])),"v-3db61972":v(()=>i(()=>import("./docker-basic-2.html-9d41b85f.js"),["assets/docker-basic-2.html-9d41b85f.js","assets/framework-1fb77053.js"])),"v-3f6af211":v(()=>i(()=>import("./docker-basic-3.html-578352e4.js"),["assets/docker-basic-3.html-578352e4.js","assets/framework-1fb77053.js"])),"v-411fcab0":v(()=>i(()=>import("./docker-basic-4.html-ddd598e8.js"),["assets/docker-basic-4.html-ddd598e8.js","assets/framework-1fb77053.js"])),"v-42d4a34f":v(()=>i(()=>import("./docker-basic-5.html-ddc9a7f1.js"),["assets/docker-basic-5.html-ddc9a7f1.js","assets/framework-1fb77053.js"])),"v-44897bee":v(()=>i(()=>import("./docker-basic-6.html-7968484b.js"),["assets/docker-basic-6.html-7968484b.js","assets/framework-1fb77053.js"])),"v-463e548d":v(()=>i(()=>import("./docker-basic-7.html-8f71f236.js"),["assets/docker-basic-7.html-8f71f236.js","assets/framework-1fb77053.js"])),"v-6dbc1b3a":v(()=>i(()=>import("./mybatis-1.html-fa593442.js"),["assets/mybatis-1.html-fa593442.js","assets/framework-1fb77053.js"])),"v-6a5269fc":v(()=>i(()=>import("./mybatis-2.html-21215c20.js"),["assets/mybatis-2.html-21215c20.js","assets/framework-1fb77053.js"])),"v-66e8b8be":v(()=>i(()=>import("./mybatis-3.html-27b858cd.js"),["assets/mybatis-3.html-27b858cd.js","assets/framework-1fb77053.js"])),"v-637f0780":v(()=>i(()=>import("./mybatis-4.html-c3f2acf5.js"),["assets/mybatis-4.html-c3f2acf5.js","assets/framework-1fb77053.js"])),"v-665eceea":v(()=>i(()=>import("./mybatis-plus-1.html-2aed3b48.js"),["assets/mybatis-plus-1.html-2aed3b48.js","assets/framework-1fb77053.js"])),"v-62f51dac":v(()=>i(()=>import("./mybatis-plus-2.html-b7d44c74.js"),["assets/mybatis-plus-2.html-b7d44c74.js","assets/framework-1fb77053.js"])),"v-5f8b6c6e":v(()=>i(()=>import("./mybatis-plus-3.html-bfbba4c3.js"),["assets/mybatis-plus-3.html-bfbba4c3.js","assets/framework-1fb77053.js"])),"v-5c21bb30":v(()=>i(()=>import("./mybatis-plus-4.html-5321fb8f.js"),["assets/mybatis-plus-4.html-5321fb8f.js","assets/framework-1fb77053.js"])),"v-58b809f2":v(()=>i(()=>import("./mybatis-plus-5.html-cf8a5638.js"),["assets/mybatis-plus-5.html-cf8a5638.js","assets/framework-1fb77053.js"])),"v-554e58b4":v(()=>i(()=>import("./mybatis-plus-6.html-d6f2b836.js"),["assets/mybatis-plus-6.html-d6f2b836.js","assets/framework-1fb77053.js"])),"v-51e4a776":v(()=>i(()=>import("./mybatis-plus-7.html-79b99f6d.js"),["assets/mybatis-plus-7.html-79b99f6d.js","assets/framework-1fb77053.js"])),"v-4e7af638":v(()=>i(()=>import("./mybatis-plus-8.html-441ee0f9.js"),["assets/mybatis-plus-8.html-441ee0f9.js","assets/framework-1fb77053.js"])),"v-4b1144fa":v(()=>i(()=>import("./mybatis-plus-9.html-878768e6.js"),["assets/mybatis-plus-9.html-878768e6.js","assets/framework-1fb77053.js"])),"v-646d6d2f":v(()=>i(()=>import("./springmvc-1.html-a974fc9d.js"),["assets/springmvc-1.html-a974fc9d.js","assets/framework-1fb77053.js"])),"v-662245ce":v(()=>i(()=>import("./springmvc-2.html-77bcfdd0.js"),["assets/springmvc-2.html-77bcfdd0.js","assets/framework-1fb77053.js"])),"v-67d71e6d":v(()=>i(()=>import("./springmvc-3.html-bd8d3220.js"),["assets/springmvc-3.html-bd8d3220.js","assets/framework-1fb77053.js"])),"v-698bf70c":v(()=>i(()=>import("./springmvc-4.html-ad06fd77.js"),["assets/springmvc-4.html-ad06fd77.js","assets/framework-1fb77053.js"])),"v-6b40cfab":v(()=>i(()=>import("./springmvc-5.html-b7bec467.js"),["assets/springmvc-5.html-b7bec467.js","assets/framework-1fb77053.js"])),"v-6cf5a84a":v(()=>i(()=>import("./springmvc-6.html-720dacc0.js"),["assets/springmvc-6.html-720dacc0.js","assets/framework-1fb77053.js"])),"v-96974d2e":v(()=>i(()=>import("./spring-annotation-1.html-3d15cb63.js"),["assets/spring-annotation-1.html-3d15cb63.js","assets/framework-1fb77053.js"])),"v-932d9bf0":v(()=>i(()=>import("./spring-annotation-2.html-bc919aff.js"),["assets/spring-annotation-2.html-bc919aff.js","assets/framework-1fb77053.js"])),"v-8fc3eab2":v(()=>i(()=>import("./spring-annotation-3.html-0359efe8.js"),["assets/spring-annotation-3.html-0359efe8.js","assets/framework-1fb77053.js"])),"v-8c5a3974":v(()=>i(()=>import("./spring-annotation-4.html-3b86587e.js"),["assets/spring-annotation-4.html-3b86587e.js","assets/framework-1fb77053.js"])),"v-88f08836":v(()=>i(()=>import("./spring-annotation-5.html-19027f67.js"),["assets/spring-annotation-5.html-19027f67.js","assets/framework-1fb77053.js"])),"v-8586d6f8":v(()=>i(()=>import("./spring-annotation-6.html-64b66ecf.js"),["assets/spring-annotation-6.html-64b66ecf.js","assets/framework-1fb77053.js"])),"v-11167db8":v(()=>i(()=>import("./spring-aop.html-150a94bc.js"),["assets/spring-aop.html-150a94bc.js","assets/framework-1fb77053.js"])),"v-204f2809":v(()=>i(()=>import("./spring-ioc.html-2e6ba16f.js"),["assets/spring-ioc.html-2e6ba16f.js","assets/framework-1fb77053.js"])),"v-2d5e72f7":v(()=>i(()=>import("./spring-jdbcTemplate.html-07cd9778.js"),["assets/spring-jdbcTemplate.html-07cd9778.js","assets/framework-1fb77053.js"])),"v-37492b80":v(()=>i(()=>import("./spring-summary.html-609dab0b.js"),["assets/spring-summary.html-609dab0b.js","assets/framework-1fb77053.js"])),"v-63fec628":v(()=>i(()=>import("./spring-tx.html-8b24a0b0.js"),["assets/spring-tx.html-8b24a0b0.js","assets/framework-1fb77053.js"])),"v-62ffa9cd":v(()=>i(()=>import("./springboot2-basic-1.html-70efa1a4.js"),["assets/springboot2-basic-1.html-70efa1a4.js","assets/framework-1fb77053.js"])),"v-64b4826c":v(()=>i(()=>import("./springboot2-basic-2.html-bb84a167.js"),["assets/springboot2-basic-2.html-bb84a167.js","assets/framework-1fb77053.js"])),"v-66695b0b":v(()=>i(()=>import("./springboot2-basic-3.html-8cebb800.js"),["assets/springboot2-basic-3.html-8cebb800.js","assets/framework-1fb77053.js"])),"v-3cfc1797":v(()=>i(()=>import("./springboot2-core-1.html-03b759fd.js"),["assets/springboot2-core-1.html-03b759fd.js","assets/framework-1fb77053.js"])),"v-3eb0f036":v(()=>i(()=>import("./springboot2-core-2.html-2ad01b5c.js"),["assets/springboot2-core-2.html-2ad01b5c.js","assets/framework-1fb77053.js"])),"v-4065c8d5":v(()=>i(()=>import("./springboot2-core-3.html-27897fc5.js"),["assets/springboot2-core-3.html-27897fc5.js","assets/framework-1fb77053.js"])),"v-421aa174":v(()=>i(()=>import("./springboot2-core-4.html-eab28861.js"),["assets/springboot2-core-4.html-eab28861.js","assets/framework-1fb77053.js"])),"v-43cf7a13":v(()=>i(()=>import("./springboot2-core-5.html-5cd11d48.js"),["assets/springboot2-core-5.html-5cd11d48.js","assets/framework-1fb77053.js"])),"v-458452b2":v(()=>i(()=>import("./springboot2-core-6.html-b55b3497.js"),["assets/springboot2-core-6.html-b55b3497.js","assets/framework-1fb77053.js"])),"v-3706649a":v(()=>i(()=>import("./404.html-1c4e8f77.js"),["assets/404.html-1c4e8f77.js","assets/framework-1fb77053.js"])),"v-2921a50f":v(()=>i(()=>import("./index.html-df463f4b.js"),["assets/index.html-df463f4b.js","assets/framework-1fb77053.js"])),"v-ffb97496":v(()=>i(()=>import("./index.html-4a29fe69.js"),["assets/index.html-4a29fe69.js","assets/framework-1fb77053.js"])),"v-67acca20":v(()=>i(()=>import("./index.html-8bb3898c.js"),["assets/index.html-8bb3898c.js","assets/framework-1fb77053.js"])),"v-43ef4cb5":v(()=>i(()=>import("./index.html-1fd1548d.js"),["assets/index.html-1fd1548d.js","assets/framework-1fb77053.js"])),"v-88dc28ee":v(()=>i(()=>import("./index.html-ae95aa69.js"),["assets/index.html-ae95aa69.js","assets/framework-1fb77053.js"])),"v-88dc28b0":v(()=>i(()=>import("./index.html-4c0020c7.js"),["assets/index.html-4c0020c7.js","assets/framework-1fb77053.js"])),"v-88dc2872":v(()=>i(()=>import("./index.html-95eefc48.js"),["assets/index.html-95eefc48.js","assets/framework-1fb77053.js"])),"v-5978b3ac":v(()=>i(()=>import("./index.html-76e549a8.js"),["assets/index.html-76e549a8.js","assets/framework-1fb77053.js"])),"v-54910e2e":v(()=>i(()=>import("./index.html-c48a5b7e.js"),["assets/index.html-c48a5b7e.js","assets/framework-1fb77053.js"])),"v-5979fced":v(()=>i(()=>import("./index.html-2718b069.js"),["assets/index.html-2718b069.js","assets/framework-1fb77053.js"])),"v-302edd5a":v(()=>i(()=>import("./index.html-ec99aeb6.js"),["assets/index.html-ec99aeb6.js","assets/framework-1fb77053.js"])),"v-60f5ff55":v(()=>i(()=>import("./index.html-aa659d18.js"),["assets/index.html-aa659d18.js","assets/framework-1fb77053.js"])),"v-24be2528":v(()=>i(()=>import("./index.html-9d55b548.js"),["assets/index.html-9d55b548.js","assets/framework-1fb77053.js"])),"v-090cd58e":v(()=>i(()=>import("./index.html-821878e7.js"),["assets/index.html-821878e7.js","assets/framework-1fb77053.js"])),"v-0ef197d6":v(()=>i(()=>import("./index.html-8161bd54.js"),["assets/index.html-8161bd54.js","assets/framework-1fb77053.js"])),"v-64f4aaee":v(()=>i(()=>import("./index.html-899b20de.js"),["assets/index.html-899b20de.js","assets/framework-1fb77053.js"])),"v-21ba2ec8":v(()=>i(()=>import("./index.html-25501198.js"),["assets/index.html-25501198.js","assets/framework-1fb77053.js"])),"v-0a3974bc":v(()=>i(()=>import("./index.html-c4c51a12.js"),["assets/index.html-c4c51a12.js","assets/framework-1fb77053.js"])),"v-134911e1":v(()=>i(()=>import("./index.html-7dbdc75d.js"),["assets/index.html-7dbdc75d.js","assets/framework-1fb77053.js"])),"v-3a93f820":v(()=>i(()=>import("./index.html-4abf6411.js"),["assets/index.html-4abf6411.js","assets/framework-1fb77053.js"])),"v-07f357a1":v(()=>i(()=>import("./index.html-f9e700d1.js"),["assets/index.html-f9e700d1.js","assets/framework-1fb77053.js"])),"v-780e7036":v(()=>i(()=>import("./index.html-ae2cdcd6.js"),["assets/index.html-ae2cdcd6.js","assets/framework-1fb77053.js"])),"v-f98a8cd4":v(()=>i(()=>import("./index.html-e15de8dc.js"),["assets/index.html-e15de8dc.js","assets/framework-1fb77053.js"])),"v-76b674c7":v(()=>i(()=>import("./index.html-ccd6628d.js"),["assets/index.html-ccd6628d.js","assets/framework-1fb77053.js"])),"v-3b7aa683":v(()=>i(()=>import("./index.html-e1a36d40.js"),["assets/index.html-e1a36d40.js","assets/framework-1fb77053.js"])),"v-574c8786":v(()=>i(()=>import("./index.html-71331b1a.js"),["assets/index.html-71331b1a.js","assets/framework-1fb77053.js"])),"v-381aa653":v(()=>i(()=>import("./index.html-4e55c083.js"),["assets/index.html-4e55c083.js","assets/framework-1fb77053.js"])),"v-89f3f3e8":v(()=>i(()=>import("./index.html-598fada6.js"),["assets/index.html-598fada6.js","assets/framework-1fb77053.js"])),"v-5f7a288b":v(()=>i(()=>import("./index.html-c669d63e.js"),["assets/index.html-c669d63e.js","assets/framework-1fb77053.js"])),"v-7177bac5":v(()=>i(()=>import("./index.html-3ed08f17.js"),["assets/index.html-3ed08f17.js","assets/framework-1fb77053.js"])),"v-5bc93818":v(()=>i(()=>import("./index.html-9a78e601.js"),["assets/index.html-9a78e601.js","assets/framework-1fb77053.js"])),"v-744d024e":v(()=>i(()=>import("./index.html-194bdb3d.js"),["assets/index.html-194bdb3d.js","assets/framework-1fb77053.js"])),"v-e52c881c":v(()=>i(()=>import("./index.html-a5b88e2c.js"),["assets/index.html-a5b88e2c.js","assets/framework-1fb77053.js"])),"v-154dc4c4":v(()=>i(()=>import("./index.html-c38cc560.js"),["assets/index.html-c38cc560.js","assets/framework-1fb77053.js"])),"v-01560935":v(()=>i(()=>import("./index.html-0e13b17f.js"),["assets/index.html-0e13b17f.js","assets/framework-1fb77053.js"])),"v-ac0c2a6a":v(()=>i(()=>import("./index.html-6b4c86d3.js"),["assets/index.html-6b4c86d3.js","assets/framework-1fb77053.js"])),"v-0d1f4c3c":v(()=>i(()=>import("./index.html-55369c55.js"),["assets/index.html-55369c55.js","assets/framework-1fb77053.js"])),"v-8848dfa8":v(()=>i(()=>import("./index.html-32168d70.js"),["assets/index.html-32168d70.js","assets/framework-1fb77053.js"])),"v-20002c0c":v(()=>i(()=>import("./index.html-00beabfe.js"),["assets/index.html-00beabfe.js","assets/framework-1fb77053.js"])),"v-5831b135":v(()=>i(()=>import("./index.html-1e0294aa.js"),["assets/index.html-1e0294aa.js","assets/framework-1fb77053.js"])),"v-28a2eb06":v(()=>i(()=>import("./index.html-05794261.js"),["assets/index.html-05794261.js","assets/framework-1fb77053.js"])),"v-9c48d85a":v(()=>i(()=>import("./index.html-c0acf441.js"),["assets/index.html-c0acf441.js","assets/framework-1fb77053.js"])),"v-edc3057c":v(()=>i(()=>import("./index.html-d0f63a21.js"),["assets/index.html-d0f63a21.js","assets/framework-1fb77053.js"])),"v-65f6d381":v(()=>i(()=>import("./index.html-e00b0f54.js"),["assets/index.html-e00b0f54.js","assets/framework-1fb77053.js"])),"v-b302da92":v(()=>i(()=>import("./index.html-6ee4f2a8.js"),["assets/index.html-6ee4f2a8.js","assets/framework-1fb77053.js"])),"v-65efd6b5":v(()=>i(()=>import("./index.html-b183ad33.js"),["assets/index.html-b183ad33.js","assets/framework-1fb77053.js"])),"v-b310d42a":v(()=>i(()=>import("./index.html-3870cb11.js"),["assets/index.html-3870cb11.js","assets/framework-1fb77053.js"])),"v-5824b700":v(()=>i(()=>import("./index.html-46e9bdf9.js"),["assets/index.html-46e9bdf9.js","assets/framework-1fb77053.js"])),"v-2894de8a":v(()=>i(()=>import("./index.html-838f47d8.js"),["assets/index.html-838f47d8.js","assets/framework-1fb77053.js"])),"v-65f11ff6":v(()=>i(()=>import("./index.html-621e8e8f.js"),["assets/index.html-621e8e8f.js","assets/framework-1fb77053.js"])),"v-b30e41a8":v(()=>i(()=>import("./index.html-4c9dfee6.js"),["assets/index.html-4c9dfee6.js","assets/framework-1fb77053.js"])),"v-99b9d3c8":v(()=>i(()=>import("./index.html-59d8571e.js"),["assets/index.html-59d8571e.js","assets/framework-1fb77053.js"])),"v-1e90405c":v(()=>i(()=>import("./index.html-10afdd40.js"),["assets/index.html-10afdd40.js","assets/framework-1fb77053.js"])),"v-05e7d8a8":v(()=>i(()=>import("./index.html-afd3149a.js"),["assets/index.html-afd3149a.js","assets/framework-1fb77053.js"])),"v-721080b6":v(()=>i(()=>import("./index.html-7f7dbf1a.js"),["assets/index.html-7f7dbf1a.js","assets/framework-1fb77053.js"])),"v-8e491b96":v(()=>i(()=>import("./index.html-47f9fce0.js"),["assets/index.html-47f9fce0.js","assets/framework-1fb77053.js"])),"v-131f882a":v(()=>i(()=>import("./index.html-6364ad1c.js"),["assets/index.html-6364ad1c.js","assets/framework-1fb77053.js"])),"v-a582fd52":v(()=>i(()=>import("./index.html-92df1bee.js"),["assets/index.html-92df1bee.js","assets/framework-1fb77053.js"])),"v-3aa1350d":v(()=>i(()=>import("./index.html-dee4030d.js"),["assets/index.html-dee4030d.js","assets/framework-1fb77053.js"])),"v-348641c0":v(()=>i(()=>import("./index.html-090ed711.js"),["assets/index.html-090ed711.js","assets/framework-1fb77053.js"])),"v-3607ddaa":v(()=>i(()=>import("./index.html-be92117c.js"),["assets/index.html-be92117c.js","assets/framework-1fb77053.js"])),"v-9717cc36":v(()=>i(()=>import("./index.html-cdbb999d.js"),["assets/index.html-cdbb999d.js","assets/framework-1fb77053.js"])),"v-28acd99e":v(()=>i(()=>import("./index.html-fea6aa6b.js"),["assets/index.html-fea6aa6b.js","assets/framework-1fb77053.js"])),"v-27fb5a12":v(()=>i(()=>import("./index.html-3a8340ee.js"),["assets/index.html-3a8340ee.js","assets/framework-1fb77053.js"])),"v-ecdc9a76":v(()=>i(()=>import("./index.html-9e9ff4f1.js"),["assets/index.html-9e9ff4f1.js","assets/framework-1fb77053.js"])),"v-47aab902":v(()=>i(()=>import("./index.html-08a47aae.js"),["assets/index.html-08a47aae.js","assets/framework-1fb77053.js"])),"v-3544e778":v(()=>i(()=>import("./index.html-2de9a5cb.js"),["assets/index.html-2de9a5cb.js","assets/framework-1fb77053.js"])),"v-757f190a":v(()=>i(()=>import("./index.html-a3c8f8a3.js"),["assets/index.html-a3c8f8a3.js","assets/framework-1fb77053.js"])),"v-41e71c66":v(()=>i(()=>import("./index.html-299221c1.js"),["assets/index.html-299221c1.js","assets/framework-1fb77053.js"])),"v-9f510020":v(()=>i(()=>import("./index.html-7512489d.js"),["assets/index.html-7512489d.js","assets/framework-1fb77053.js"])),"v-0f6ad445":v(()=>i(()=>import("./index.html-ccfddf71.js"),["assets/index.html-ccfddf71.js","assets/framework-1fb77053.js"])),"v-7d0ba9b4":v(()=>i(()=>import("./index.html-df239ab0.js"),["assets/index.html-df239ab0.js","assets/framework-1fb77053.js"])),"v-1672eb57":v(()=>i(()=>import("./index.html-ead8f38b.js"),["assets/index.html-ead8f38b.js","assets/framework-1fb77053.js"])),"v-780e2880":v(()=>i(()=>import("./index.html-177338cf.js"),["assets/index.html-177338cf.js","assets/framework-1fb77053.js"]))};var vl=Symbol(""),ml=E(ul),De=Kn({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),bn=E(De),T=()=>bn,Ve=Symbol(""),O=()=>{const n=$(Ve);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Re=Symbol(""),gl=()=>{const n=$(Re);if(!n)throw new Error("usePageHead() is called without provider.");return n},Se=Symbol(""),kl=()=>{const n=$(Se);if(!n)throw new Error("usePageHeadTitle() is called without provider.");return n},Pe=Symbol(""),cs=()=>{const n=$(Pe);if(!n)throw new Error("usePageLang() is called without provider.");return n},Oe=Symbol(""),bl=()=>{const n=$(Oe);if(!n)throw new Error("usePageLayout() is called without provider.");return n},rs=Symbol(""),vn=()=>{const n=$(rs);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},On=E(dl),je=()=>On,Be=Symbol(""),Zn=()=>{const n=$(Be);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},hl=Symbol(""),fl="Layout",_l="NotFound",dn=No({resolveLayouts:n=>n.reduce((a,s)=>({...a,...s.layouts}),{}),resolvePageData:async n=>{const a=ml.value[n];return await(a==null?void 0:a())??De},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,a,s)=>{const e=Y(a.description)?a.description:s.description,o=[...is(a.head)?a.head:[],...s.head,["title",{},n],["meta",{name:"description",content:e}]];return Ho(o)},resolvePageHeadTitle:(n,a)=>[n.title,a.title].filter(s=>!!s).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,a)=>{let s;if(n.path){const e=n.frontmatter.layout;Y(e)?s=e:s=fl}else s=_l;return a[s]},resolveRouteLocale:(n,a)=>Fo(n,a),resolveSiteLocaleData:(n,a)=>({...n,...n.locales[a]})}),Aa=f({name:"ClientOnly",setup(n,a){const s=E(!1);return D(()=>{s.value=!0}),()=>{var e,o;return s.value?(o=(e=a.slots).default)==null?void 0:o.call(e):null}}}),us=f({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const a=T(),s=b(()=>Te[n.pageKey||a.value.key]);return()=>s.value?t(s.value):t("div","404 Not Found")}}),en=(n={})=>n,G=n=>zn(n)?n:`/${Le(n)}`;const yl={};var U=Uint8Array,wn=Uint16Array,Ce=Uint32Array,Me=new U([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$e=new U([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),El=new U([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qe=function(n,a){for(var s=new wn(31),e=0;e<31;++e)s[e]=a+=1<<n[e-1];for(var o=new Ce(s[30]),e=1;e<30;++e)for(var l=s[e];l<s[e+1];++l)o[l]=l-s[e]<<5|e;return[s,o]},ze=qe(Me,2),Ne=ze[0],wl=ze[1];Ne[28]=258,wl[258]=28;var Al=qe($e,0),xl=Al[0],Ua=new wn(32768);for(var M=0;M<32768;++M){var gn=(M&43690)>>>1|(M&21845)<<1;gn=(gn&52428)>>>2|(gn&13107)<<2,gn=(gn&61680)>>>4|(gn&3855)<<4,Ua[M]=((gn&65280)>>>8|(gn&255)<<8)>>>1}var Un=function(n,a,s){for(var e=n.length,o=0,l=new wn(a);o<e;++o)n[o]&&++l[n[o]-1];var p=new wn(a);for(o=0;o<a;++o)p[o]=p[o-1]+l[o-1]<<1;var c;if(s){c=new wn(1<<a);var u=15-a;for(o=0;o<e;++o)if(n[o])for(var r=o<<4|n[o],d=a-n[o],m=p[n[o]-1]++<<d,g=m|(1<<d)-1;m<=g;++m)c[Ua[m]>>>u]=r}else for(c=new wn(e),o=0;o<e;++o)n[o]&&(c[o]=Ua[p[n[o]-1]++]>>>15-n[o]);return c},na=new U(288);for(var M=0;M<144;++M)na[M]=8;for(var M=144;M<256;++M)na[M]=9;for(var M=256;M<280;++M)na[M]=7;for(var M=280;M<288;++M)na[M]=8;var He=new U(32);for(var M=0;M<32;++M)He[M]=5;var Ll=Un(na,9,1),Il=Un(He,5,1),Oa=function(n){for(var a=n[0],s=1;s<n.length;++s)n[s]>a&&(a=n[s]);return a},tn=function(n,a,s){var e=a/8|0;return(n[e]|n[e+1]<<8)>>(a&7)&s},ja=function(n,a){var s=a/8|0;return(n[s]|n[s+1]<<8|n[s+2]<<16)>>(a&7)},Tl=function(n){return(n+7)/8|0},ds=function(n,a,s){(a==null||a<0)&&(a=0),(s==null||s>n.length)&&(s=n.length);var e=new(n.BYTES_PER_ELEMENT==2?wn:n.BYTES_PER_ELEMENT==4?Ce:U)(s-a);return e.set(n.subarray(a,s)),e},Dl=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],on=function(n,a,s){var e=new Error(a||Dl[n]);if(e.code=n,Error.captureStackTrace&&Error.captureStackTrace(e,on),!s)throw e;return e},Vl=function(n,a,s){var e=n.length;if(!e||s&&s.f&&!s.l)return a||new U(0);var o=!a||s,l=!s||s.i;s||(s={}),a||(a=new U(e*3));var p=function(Ns){var Hs=a.length;if(Ns>Hs){var Fs=new U(Math.max(Hs*2,Ns));Fs.set(a),a=Fs}},c=s.f||0,u=s.p||0,r=s.b||0,d=s.l,m=s.d,g=s.m,k=s.n,h=e*8;do{if(!d){c=tn(n,u,1);var w=tn(n,u+1,3);if(u+=3,w)if(w==1)d=Ll,m=Il,g=9,k=5;else if(w==2){var B=tn(n,u,31)+257,F=tn(n,u+10,15)+4,J=B+tn(n,u+5,31)+1;u+=14;for(var S=new U(J),A=new U(19),x=0;x<F;++x)A[El[x]]=tn(n,u+x*3,7);u+=F*3;for(var N=Oa(A),rn=(1<<N)-1,$o=Un(A,N,1),x=0;x<J;){var Ms=$o[tn(n,u,rn)];u+=Ms&15;var y=Ms>>>4;if(y<16)S[x++]=y;else{var Tn=0,da=0;for(y==16?(da=3+tn(n,u,3),u+=2,Tn=S[x-1]):y==17?(da=3+tn(n,u,7),u+=3):y==18&&(da=11+tn(n,u,127),u+=7);da--;)S[x++]=Tn}}var $s=S.subarray(0,B),mn=S.subarray(B);g=Oa($s),k=Oa(mn),d=Un($s,g,1),m=Un(mn,k,1)}else on(1);else{var y=Tl(u)+4,_=n[y-4]|n[y-3]<<8,j=y+_;if(j>e){l&&on(0);break}o&&p(r+_),a.set(n.subarray(y,j),r),s.b=r+=_,s.p=u=j*8,s.f=c;continue}if(u>h){l&&on(0);break}}o&&p(r+131072);for(var qo=(1<<g)-1,zo=(1<<k)-1,Va=u;;Va=u){var Tn=d[ja(n,u)&qo],Dn=Tn>>>4;if(u+=Tn&15,u>h){l&&on(0);break}if(Tn||on(2),Dn<256)a[r++]=Dn;else if(Dn==256){Va=u,d=null;break}else{var qs=Dn-254;if(Dn>264){var x=Dn-257,Jn=Me[x];qs=tn(n,u,(1<<Jn)-1)+Ne[x],u+=Jn}var Ra=m[ja(n,u)&zo],Sa=Ra>>>4;Ra||on(3),u+=Ra&15;var mn=xl[Sa];if(Sa>3){var Jn=$e[Sa];mn+=ja(n,u)&(1<<Jn)-1,u+=Jn}if(u>h){l&&on(0);break}o&&p(r+131072);for(var zs=r+qs;r<zs;r+=4)a[r]=a[r-mn],a[r+1]=a[r+1-mn],a[r+2]=a[r+2-mn],a[r+3]=a[r+3-mn];r=zs}}s.l=d,s.p=Va,s.b=r,s.f=c,d&&(c=1,s.m=g,s.d=m,s.n=k)}while(!c);return r==a.length?a:ds(a,0,r)},Rl=new U(0),Sl=function(n){((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)&&on(6,"invalid zlib data"),n[1]&32&&on(6,"invalid zlib data: preset dictionaries not supported")};function Pl(n,a){return Vl((Sl(n),n.subarray(2,-4)),a)}var Gs=typeof TextEncoder<"u"&&new TextEncoder,Ga=typeof TextDecoder<"u"&&new TextDecoder,Ol=0;try{Ga.decode(Rl,{stream:!0}),Ol=1}catch{}var jl=function(n){for(var a="",s=0;;){var e=n[s++],o=(e>127)+(e>223)+(e>239);if(s+o>n.length)return[a,ds(n,s-1)];o?o==3?(e=((e&15)<<18|(n[s++]&63)<<12|(n[s++]&63)<<6|n[s++]&63)-65536,a+=String.fromCharCode(55296|e>>10,56320|e&1023)):o&1?a+=String.fromCharCode((e&31)<<6|n[s++]&63):a+=String.fromCharCode((e&15)<<12|(n[s++]&63)<<6|n[s++]&63):a+=String.fromCharCode(e)}};function Bl(n,a){if(a){for(var s=new U(n.length),e=0;e<n.length;++e)s[e]=n.charCodeAt(e);return s}if(Gs)return Gs.encode(n);for(var o=n.length,l=new U(n.length+(n.length>>1)),p=0,c=function(d){l[p++]=d},e=0;e<o;++e){if(p+5>l.length){var u=new U(p+8+(o-e<<1));u.set(l),l=u}var r=n.charCodeAt(e);r<128||a?c(r):r<2048?(c(192|r>>6),c(128|r&63)):r>55295&&r<57344?(r=65536+(r&1023<<10)|n.charCodeAt(++e)&1023,c(240|r>>18),c(128|r>>12&63),c(128|r>>6&63),c(128|r&63)):(c(224|r>>12),c(128|r>>6&63),c(128|r&63))}return ds(l,0,p)}function Cl(n,a){if(a){for(var s="",e=0;e<n.length;e+=16384)s+=String.fromCharCode.apply(null,n.subarray(e,e+16384));return s}else{if(Ga)return Ga.decode(n);var o=jl(n),l=o[0],p=o[1];return p.length&&on(8),l}}const L=({name:n="",color:a="currentColor"},{slots:s})=>{var e;return t("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:a,"aria-label":`${n} icon`},(e=s.default)==null?void 0:e.call(s))};L.displayName="IconBase";const fn=({size:n=48,stroke:a=4,wrapper:s=!0,height:e=2*n})=>{const o=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[t("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),t("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round"},[t("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),t("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?t("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${e}px`},o):o};fn.displayName="LoadingIcon";const Fe=(n,{slots:a})=>{var s;return((s=a.default)==null?void 0:s.call(a))||null},Je=()=>t(L,{name:"github"},()=>t("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Je.displayName="GitHubIcon";const Ue=()=>t(L,{name:"gitlab"},()=>t("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ue.displayName="GitLabIcon";const Ge=()=>t(L,{name:"gitee"},()=>t("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Ge.displayName="GiteeIcon";const Qe=()=>t(L,{name:"bitbucket"},()=>t("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Qe.displayName="BitbucketIcon";const We=()=>t(L,{name:"source"},()=>t("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));We.displayName="SourceIcon";const vs=Array.isArray,Ml=n=>typeof n=="function",$l=n=>typeof n=="string";var Ke=n=>/^(https?:)?\/\//.test(n),Gn=n=>Object.prototype.toString.call(n)==="[object Object]";const ln=(n,a)=>{const s=a?a._instance:wa();return Gn(s==null?void 0:s.appContext.components)&&(n in s.appContext.components||Js(n)in s.appContext.components||Jo(Js(n))in s.appContext.components)};function ql(){const n=E(!1);return wa()&&D(()=>{n.value=!0}),n}function zl(n){return ql(),b(()=>!!n())}const Nl=()=>zl(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Ye=()=>{const n=Nl();return b(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},_n=n=>{const a=vn();return b(()=>n[a.value])},Hl=n=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(a=>a.test(n)),Fl=n=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(a=>a.test(n)),Jl=n=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(a=>a.test(n)),ms=(n="")=>{if(n){if(typeof n=="number")return new Date(n);const a=Date.parse(n.toString());if(!Number.isNaN(a))return new Date(a)}return null},xa=(n,a)=>{let s=1;for(let e=0;e<n.length;e++)s+=n.charCodeAt(e),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%a},An=n=>typeof n=="string",$n=(n,a)=>An(n)&&n.startsWith(a),Vn=(n,a)=>An(n)&&n.endsWith(a),aa=Object.entries,X=Object.keys,Qs=(n,...a)=>{if(a.length===0)return n;const s=a.shift()||null;return s&&aa(s).forEach(([e,o])=>{e==="__proto__"||e==="constructor"||(Gn(n[e])&&Gn(o)?Qs(n[e],o):vs(o)?n[e]=[...o]:Gn(o)?n[e]={...o}:n[e]=s[e])}),Qs(n,...a)},Ws=n=>Gn(n)&&An(n.name),Qn=(n,a=!1)=>n?vs(n)?n.map(s=>An(s)?{name:s}:Ws(s)?s:null).filter(s=>s!==null):An(n)?[{name:n}]:Ws(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${a?"":"| false"} | undefined\`, but got`,n),[]):[],Xe=(n,a)=>{if(n){if(vs(n)&&n.every(An))return n;if(An(n))return[n];console.error(`Expect ${a||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},Ze=n=>Xe(n,"category"),nt=n=>Xe(n,"tag"),La=n=>$n(n,"/");let Ul=class{constructor(){this.messageElements={};const a="message-container",s=document.getElementById(a);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=a,document.body.appendChild(this.containerElement))}pop(a,s=2e3){const e=document.createElement("div"),o=Date.now();return e.className="message move-in",e.innerHTML=a,this.containerElement.appendChild(e),this.messageElements[o]=e,s>0&&setTimeout(()=>{this.close(o)},s),o}close(a){if(a){const s=this.messageElements[a];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[a]})}else X(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const at=/#.*$/u,Gl=n=>{const a=at.exec(n);return a?a[0]:""},Ks=n=>decodeURI(n).replace(at,"").replace(/(index)?\.(md|html)$/,""),gs=(n,a)=>{if(a===void 0)return!1;const s=Ks(n.path),e=Ks(a),o=Gl(a);return o?o===n.hash&&(!e||s===e):s===e},xn=n=>{const a=atob(n);return Cl(Pl(Bl(a,!0)))},Ql=n=>Ke(n)?n:`https://github.com/${n}`,st=n=>!Ke(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,sa=(n,...a)=>{const s=n.resolve(...a),e=s.matched.at(-1);if(!(e!=null&&e.redirect))return s;const{redirect:o}=e,l=Ml(o)?o(s):o,p=$l(l)?{path:l}:l;return sa(n,{hash:s.hash,query:s.query,params:s.params,...p})};function yn(n){return Wo()?(Ko(n),!0):!1}function nn(n){return typeof n=="function"?n():Uo(n)}const ea=typeof window<"u",Ln=()=>{},Qa=Wl();function Wl(){var n;return ea&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function ks(n,a){function s(...e){return new Promise((o,l)=>{Promise.resolve(n(()=>a.apply(this,e),{fn:a,thisArg:this,args:e})).then(o).catch(l)})}return s}const et=n=>n();function Kl(n,a={}){let s,e,o=Ln;const l=c=>{clearTimeout(c),o(),o=Ln};return c=>{const u=nn(n),r=nn(a.maxWait);return s&&l(s),u<=0||r!==void 0&&r<=0?(e&&(l(e),e=null),Promise.resolve(c())):new Promise((d,m)=>{o=a.rejectOnCancel?m:d,r&&!e&&(e=setTimeout(()=>{s&&l(s),e=null,d(c())},r)),s=setTimeout(()=>{e&&l(e),e=null,d(c())},u)})}}function Yl(n,a=!0,s=!0,e=!1){let o=0,l,p=!0,c=Ln,u;const r=()=>{l&&(clearTimeout(l),l=void 0,c(),c=Ln)};return m=>{const g=nn(n),k=Date.now()-o,h=()=>u=m();return r(),g<=0?(o=Date.now(),h()):(k>g&&(s||!p)?(o=Date.now(),h()):a&&(u=new Promise((w,y)=>{c=e?y:w,l=setTimeout(()=>{o=Date.now(),p=!0,w(h()),r()},Math.max(0,g-k))})),!s&&!l&&(l=setTimeout(()=>p=!0,g)),p=!1,u)}}function Xl(n=et){const a=E(!0);function s(){a.value=!1}function e(){a.value=!0}const o=(...l)=>{a.value&&n(...l)};return{isActive:Kn(a),pause:s,resume:e,eventFilter:o}}function tt(...n){if(n.length!==1)return Hn(...n);const a=n[0];return typeof a=="function"?Kn(Qo(()=>({get:a,set:Ln}))):E(a)}function ot(n,a=200,s={}){return ks(Kl(a,s),n)}function Zl(n,a=200,s=!1,e=!0,o=!1){return ks(Yl(a,s,e,o),n)}function lt(n,a=!0){wa()?D(n):a?n():Nn(n)}function ni(n,a,s={}){const{immediate:e=!0}=s,o=E(!1);let l=null;function p(){l&&(clearTimeout(l),l=null)}function c(){o.value=!1,p()}function u(...r){p(),o.value=!0,l=setTimeout(()=>{o.value=!1,l=null,n(...r)},nn(a))}return e&&(o.value=!0,ea&&u()),yn(c),{isPending:Kn(o),start:u,stop:c}}function Wa(n=!1,a={}){const{truthyValue:s=!0,falsyValue:e=!1}=a,o=Go(n),l=E(n);function p(c){if(arguments.length)return l.value=c,l.value;{const u=nn(s);return l.value=l.value===u?nn(e):u,l.value}}return o?p:[l,p]}var Ys=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,si=Object.prototype.propertyIsEnumerable,ei=(n,a)=>{var s={};for(var e in n)ai.call(n,e)&&a.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&Ys)for(var e of Ys(n))a.indexOf(e)<0&&si.call(n,e)&&(s[e]=n[e]);return s};function ti(n,a,s={}){const e=s,{eventFilter:o=et}=e,l=ei(e,["eventFilter"]);return R(n,ks(o,a),l)}var oi=Object.defineProperty,li=Object.defineProperties,ii=Object.getOwnPropertyDescriptors,ya=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Xs=(n,a,s)=>a in n?oi(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,pi=(n,a)=>{for(var s in a||(a={}))it.call(a,s)&&Xs(n,s,a[s]);if(ya)for(var s of ya(a))pt.call(a,s)&&Xs(n,s,a[s]);return n},ci=(n,a)=>li(n,ii(a)),ri=(n,a)=>{var s={};for(var e in n)it.call(n,e)&&a.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&ya)for(var e of ya(n))a.indexOf(e)<0&&pt.call(n,e)&&(s[e]=n[e]);return s};function ui(n,a,s={}){const e=s,{eventFilter:o}=e,l=ri(e,["eventFilter"]),{eventFilter:p,pause:c,resume:u,isActive:r}=Xl(o);return{stop:ti(n,a,ci(pi({},l),{eventFilter:p})),pause:c,resume:u,isActive:r}}function K(n){var a;const s=nn(n);return(a=s==null?void 0:s.$el)!=null?a:s}const an=ea?window:void 0,ct=ea?window.document:void 0,di=ea?window.navigator:void 0;function q(...n){let a,s,e,o;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,e,o]=n,a=an):[a,s,e,o]=n,!a)return Ln;Array.isArray(s)||(s=[s]),Array.isArray(e)||(e=[e]);const l=[],p=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,g,k)=>(d.addEventListener(m,g,k),()=>d.removeEventListener(m,g,k)),u=R(()=>[K(a),nn(o)],([d,m])=>{p(),d&&l.push(...s.flatMap(g=>e.map(k=>c(d,g,k,m))))},{immediate:!0,flush:"post"}),r=()=>{u(),p()};return yn(r),r}let Zs=!1;function vi(n,a,s={}){const{window:e=an,ignore:o=[],capture:l=!0,detectIframe:p=!1}=s;if(!e)return;Qa&&!Zs&&(Zs=!0,Array.from(e.document.body.children).forEach(g=>g.addEventListener("click",Ln)));let c=!0;const u=g=>o.some(k=>{if(typeof k=="string")return Array.from(e.document.querySelectorAll(k)).some(h=>h===g.target||g.composedPath().includes(h));{const h=K(k);return h&&(g.target===h||g.composedPath().includes(h))}}),d=[q(e,"click",g=>{const k=K(n);if(!(!k||k===g.target||g.composedPath().includes(k))){if(g.detail===0&&(c=!u(g)),!c){c=!0;return}a(g)}},{passive:!0,capture:l}),q(e,"pointerdown",g=>{const k=K(n);k&&(c=!g.composedPath().includes(k)&&!u(g))},{passive:!0}),p&&q(e,"blur",g=>{var k;const h=K(n);((k=e.document.activeElement)==null?void 0:k.tagName)==="IFRAME"&&!(h!=null&&h.contains(e.document.activeElement))&&a(g)})].filter(Boolean);return()=>d.forEach(g=>g())}function mi(){const n=E(!1);return wa()&&D(()=>{n.value=!0}),n}function ta(n){const a=mi();return b(()=>(a.value,Boolean(n())))}function rt(n,a={}){const{window:s=an}=a,e=ta(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const l=E(!1),p=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",c):o.removeListener(c))},c=()=>{e.value&&(p(),o=s.matchMedia(tt(n).value),l.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",c):o.addListener(c)))};return Yo(c),yn(()=>p()),l}function gi(n={}){const{navigator:a=di,read:s=!1,source:e,copiedDuring:o=1500,legacy:l=!1}=n,p=["copy","cut"],c=ta(()=>a&&"clipboard"in a),u=b(()=>c.value||l),r=E(""),d=E(!1),m=ni(()=>d.value=!1,o);function g(){c.value?a.clipboard.readText().then(y=>{r.value=y}):r.value=w()}if(u.value&&s)for(const y of p)q(y,g);async function k(y=nn(e)){u.value&&y!=null&&(c.value?await a.clipboard.writeText(y):h(y),r.value=y,d.value=!0,m.start())}function h(y){const _=document.createElement("textarea");_.value=y??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function w(){var y,_,j;return(j=(_=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:_.toString())!=null?j:""}return{isSupported:u,text:r,copied:d,copy:k}}const va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ma="__vueuse_ssr_handlers__",ki=bi();function bi(){return ma in va||(va[ma]=va[ma]||{}),va[ma]}function hi(n,a){return ki[n]||a}function fi(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var _i=Object.defineProperty,ne=Object.getOwnPropertySymbols,yi=Object.prototype.hasOwnProperty,Ei=Object.prototype.propertyIsEnumerable,ae=(n,a,s)=>a in n?_i(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,se=(n,a)=>{for(var s in a||(a={}))yi.call(a,s)&&ae(n,s,a[s]);if(ne)for(var s of ne(a))Ei.call(a,s)&&ae(n,s,a[s]);return n};const wi={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},ee="vueuse-storage";function In(n,a,s,e={}){var o;const{flush:l="pre",deep:p=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:r=!1,shallow:d,window:m=an,eventFilter:g,onError:k=x=>{console.error(x)}}=e,h=(d?z:E)(a);if(!s)try{s=hi("getDefaultStorage",()=>{var x;return(x=an)==null?void 0:x.localStorage})()}catch(x){k(x)}if(!s)return h;const w=nn(a),y=fi(w),_=(o=e.serializer)!=null?o:wi[y],{pause:j,resume:B}=ui(h,()=>F(h.value),{flush:l,deep:p,eventFilter:g});return m&&c&&(q(m,"storage",A),q(m,ee,S)),A(),h;function F(x){try{if(x==null)s.removeItem(n);else{const N=_.write(x),rn=s.getItem(n);rn!==N&&(s.setItem(n,N),m&&m.dispatchEvent(new CustomEvent(ee,{detail:{key:n,oldValue:rn,newValue:N,storageArea:s}})))}}catch(N){k(N)}}function J(x){const N=x?x.newValue:s.getItem(n);if(N==null)return u&&w!==null&&s.setItem(n,_.write(w)),w;if(!x&&r){const rn=_.read(N);return typeof r=="function"?r(rn,w):y==="object"&&!Array.isArray(rn)?se(se({},w),rn):rn}else return typeof N!="string"?N:_.read(N)}function S(x){A(x.detail)}function A(x){if(!(x&&x.storageArea!==s)){if(x&&x.key==null){h.value=w;return}if(!(x&&x.key!==n)){j();try{h.value=J(x)}catch(N){k(N)}finally{x?Nn(B):B()}}}}}function Ai(n){return rt("(prefers-color-scheme: dark)",n)}var te=Object.getOwnPropertySymbols,xi=Object.prototype.hasOwnProperty,Li=Object.prototype.propertyIsEnumerable,Ii=(n,a)=>{var s={};for(var e in n)xi.call(n,e)&&a.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&te)for(var e of te(n))a.indexOf(e)<0&&Li.call(n,e)&&(s[e]=n[e]);return s};function Ti(n,a,s={}){const e=s,{window:o=an}=e,l=Ii(e,["window"]);let p;const c=ta(()=>o&&"MutationObserver"in o),u=()=>{p&&(p.disconnect(),p=void 0)},r=R(()=>K(n),m=>{u(),c.value&&o&&m&&(p=new MutationObserver(a),p.observe(m,l))},{immediate:!0}),d=()=>{u(),r()};return yn(d),{isSupported:c,stop:d}}var oe=Object.getOwnPropertySymbols,Di=Object.prototype.hasOwnProperty,Vi=Object.prototype.propertyIsEnumerable,Ri=(n,a)=>{var s={};for(var e in n)Di.call(n,e)&&a.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&oe)for(var e of oe(n))a.indexOf(e)<0&&Vi.call(n,e)&&(s[e]=n[e]);return s};function Si(n,a,s={}){const e=s,{window:o=an}=e,l=Ri(e,["window"]);let p;const c=ta(()=>o&&"ResizeObserver"in o),u=()=>{p&&(p.disconnect(),p=void 0)},r=b(()=>Array.isArray(n)?n.map(g=>K(g)):[K(n)]),d=R(r,g=>{if(u(),c.value&&o){p=new ResizeObserver(a);for(const k of g)k&&p.observe(k,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return yn(m),{isSupported:c,stop:m}}function Pi(n,a={width:0,height:0},s={}){const{window:e=an,box:o="content-box"}=s,l=b(()=>{var u,r;return(r=(u=K(n))==null?void 0:u.namespaceURI)==null?void 0:r.includes("svg")}),p=E(a.width),c=E(a.height);return Si(n,([u])=>{const r=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(e&&l.value){const d=K(n);if(d){const m=e.getComputedStyle(d);p.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(r){const d=Array.isArray(r)?r:[r];p.value=d.reduce((m,{inlineSize:g})=>m+g,0),c.value=d.reduce((m,{blockSize:g})=>m+g,0)}else p.value=u.contentRect.width,c.value=u.contentRect.height},s),R(()=>K(n),u=>{p.value=u?a.width:0,c.value=u?a.height:0}),{width:p,height:c}}const le=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function bs(n,a={}){const{document:s=ct,autoExit:e=!1}=a,o=b(()=>{var _;return(_=K(n))!=null?_:s==null?void 0:s.querySelector("html")}),l=E(!1),p=b(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(_=>s&&_ in s||o.value&&_ in o.value)),c=b(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(_=>s&&_ in s||o.value&&_ in o.value)),u=b(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(_=>s&&_ in s||o.value&&_ in o.value)),r=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(_=>s&&_ in s),d=ta(()=>o.value&&s&&p.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>r?(s==null?void 0:s[r])===o.value:!1,g=()=>{if(u.value){if(s&&s[u.value]!=null)return s[u.value];{const _=o.value;if((_==null?void 0:_[u.value])!=null)return Boolean(_[u.value])}}return!1};async function k(){if(d.value){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const _=o.value;(_==null?void 0:_[c.value])!=null&&await _[c.value]()}l.value=!1}}async function h(){if(!d.value)return;g()&&await k();const _=o.value;p.value&&(_==null?void 0:_[p.value])!=null&&(await _[p.value](),l.value=!0)}async function w(){await(l.value?k():h())}const y=()=>{const _=g();(!_||_&&m())&&(l.value=_)};return q(s,le,y,!1),q(()=>K(o),le,y,!1),e&&yn(k),{isSupported:d,isFullscreen:l,enter:h,exit:k,toggle:w}}function Oi(n,a,s={}){const{window:e=an}=s;return In(n,a,e==null?void 0:e.localStorage,s)}function ut(n){const a=window.getComputedStyle(n);if(a.overflowX==="scroll"||a.overflowY==="scroll"||a.overflowX==="auto"&&n.clientHeight<n.scrollHeight||a.overflowY==="auto"&&n.clientWidth<n.scrollWidth)return!0;{const s=n.parentNode;return!s||s.tagName==="BODY"?!1:ut(s)}}function ji(n){const a=n||window.event,s=a.target;return ut(s)?!1:a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)}function hs(n,a=!1){const s=E(a);let e=null,o;R(tt(n),c=>{if(c){const u=c;o=u.style.overflow,s.value&&(u.style.overflow="hidden")}},{immediate:!0});const l=()=>{const c=nn(n);!c||s.value||(Qa&&(e=q(c,"touchmove",u=>{ji(u)},{passive:!1})),c.style.overflow="hidden",s.value=!0)},p=()=>{const c=nn(n);!c||!s.value||(Qa&&(e==null||e()),c.style.overflow=o,s.value=!1)};return yn(p),b({get(){return s.value},set(c){c?l():p()}})}function dt(n,a,s={}){const{window:e=an}=s;return In(n,a,e==null?void 0:e.sessionStorage,s)}let Bi=0;function Ci(n,a={}){const s=E(!1),{document:e=ct,immediate:o=!0,manual:l=!1,id:p=`vueuse_styletag_${++Bi}`}=a,c=E(n);let u=()=>{};const r=()=>{if(!e)return;const m=e.getElementById(p)||e.createElement("style");m.isConnected||(m.type="text/css",m.id=p,a.media&&(m.media=a.media),e.head.appendChild(m)),!s.value&&(u=R(c,g=>{m.textContent=g},{immediate:!0}),s.value=!0)},d=()=>{!e||!s.value||(u(),e.head.removeChild(e.getElementById(p)),s.value=!1)};return o&&!l&&lt(r),l||yn(d),{id:p,css:c,unload:d,load:r,isLoaded:Kn(s)}}function Mi({window:n=an}={}){if(!n)return{x:E(0),y:E(0)};const a=E(n.scrollX),s=E(n.scrollY);return q(n,"scroll",()=>{a.value=n.scrollX,s.value=n.scrollY},{capture:!1,passive:!0}),{x:a,y:s}}function $i(n={}){const{window:a=an,initialWidth:s=1/0,initialHeight:e=1/0,listenOrientation:o=!0,includeScrollbar:l=!0}=n,p=E(s),c=E(e),u=()=>{a&&(l?(p.value=a.innerWidth,c.value=a.innerHeight):(p.value=a.document.documentElement.clientWidth,c.value=a.document.documentElement.clientHeight))};if(u(),lt(u),q("resize",u,{passive:!0}),o){const r=rt("(orientation: portrait)");R(r,()=>u())}return{width:p,height:c}}const vt=({type:n="info",text:a="",vertical:s="top",color:e},{slots:o})=>{var l;return t("span",{class:["badge",n,{diy:e}],style:{verticalAlign:s,...e?{backgroundColor:e}:{}}},a||((l=o.default)==null?void 0:l.call(o)))};vt.displayName="Badge";var qi=f({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const a=b(()=>{const e=["font-icon icon"],o=`iconfont icon-${n.icon}`;return e.push(o),e}),s=b(()=>{const e={};return n.color&&(e.color=n.color),n.size&&(e["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),X(e).length?e:null});return()=>n.icon?t("span",{key:n.icon,class:a.value,style:s.value}):null}});const mt=()=>t(L,{name:"back-to-top"},()=>[t("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),t("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);mt.displayName="BackToTopIcon";var zi=f({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const a=O(),s=_n({"/":{backToTop:"返回顶部"}}),e=z(),{height:o}=Pi(e),{height:l}=$i(),{y:p}=Mi(),c=b(()=>a.value.backToTop!==!1&&p.value>n.threshold),u=b(()=>(console.log(p.value,o.value,l.value,p.value/(o.value-l.value)),p.value/(o.value-l.value)));return D(()=>{e.value=document.body}),()=>t(Mn,{name:"fade"},()=>c.value?t("button",{type:"button",class:"back-to-top","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:t("svg",{class:"scroll-progress"},t("circle",{cx:"50%",cy:"50%",r:"calc(50% - 2px)",style:{"stroke-dasharray":`calc(${Math.PI*u.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),t(mt)]):null)}});const Ni=en({enhance:({app:n})=>{ln("Badge")||n.component("Badge",vt),ln("FontIcon")||n.component("FontIcon",qi)},setup:()=>{Ci(`@import url("//at.alicdn.com/t/c/font_4061997_6b0zxtuz3fj.css");
`)},rootComponents:[()=>t(zi,{})]});function Hi(n,a,s){var e,o,l;a===void 0&&(a=50),s===void 0&&(s={});var p=(e=s.isImmediate)!=null&&e,c=(o=s.callback)!=null&&o,u=s.maxWait,r=Date.now(),d=[];function m(){if(u!==void 0){var k=Date.now()-r;if(k+a>=u)return u-k}return a}var g=function(){var k=[].slice.call(arguments),h=this;return new Promise(function(w,y){var _=p&&l===void 0;if(l!==void 0&&clearTimeout(l),l=setTimeout(function(){if(l=void 0,r=Date.now(),!p){var B=n.apply(h,k);c&&c(B),d.forEach(function(F){return(0,F.resolve)(B)}),d=[]}},m()),_){var j=n.apply(h,k);return c&&c(j),w(j)}d.push({resolve:w,reject:y})})};return g.cancel=function(k){l!==void 0&&clearTimeout(l),d.forEach(function(h){return(0,h.reject)(k)}),d=[]},g}const Fi=({headerLinkSelector:n,headerAnchorSelector:a,delay:s,offset:e=5})=>{const o=sn(),p=Hi(()=>{var w,y;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<e){ie(o,"");return}const r=window.innerHeight+c,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),m=Math.abs(d-r)<e,g=Array.from(document.querySelectorAll(n)),h=Array.from(document.querySelectorAll(a)).filter(_=>g.some(j=>j.hash===_.hash));for(let _=0;_<h.length;_++){const j=h[_],B=h[_+1],F=c>=(((w=j.parentElement)==null?void 0:w.offsetTop)??0)-e,J=!B||c<(((y=B.parentElement)==null?void 0:y.offsetTop)??0)-e;if(!(F&&J))continue;const A=decodeURIComponent(o.currentRoute.value.hash),x=decodeURIComponent(j.hash);if(A===x)return;if(m){for(let N=_+1;N<h.length;N++)if(A===decodeURIComponent(h[N].hash))return}ie(o,x);return}},s);D(()=>{window.addEventListener("scroll",p)}),Xo(()=>{window.removeEventListener("scroll",p)})},ie=async(n,a)=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:a,force:!0}).finally(()=>n.options.scrollBehavior=s)},Ji=".sidebar-link, .toc-link",Ui=".header-anchor",Gi=200,Qi=5,Wi=en({setup(){Fi({headerLinkSelector:Ji,headerAnchorSelector:Ui,delay:Gi,offset:Qi})}});var Ki=f({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(n,{slots:a}){const s=_n({"/":{title:"目录"}}),e=T(),o=Zo(),l=je(),p=r=>{const d=r.I;return typeof d>"u"||d},c=()=>{const r=n.base||e.value.path.replace(/\/[^/]+$/,"/"),d=o.getRoutes(),m=[];return d.filter(({meta:g,path:k})=>{if(!$n(k,r)||k===r)return!1;if(r==="/"){const h=X(l.value.locales).filter(w=>w!=="/");if(k==="/404.html"||h.some(w=>$n(k,w)))return!1}return(Vn(k,".html")&&!Vn(k,"/index.html")||Vn(k,"/"))&&p(g)}).map(({path:g,meta:k})=>{const h=g.substring(r.length).split("/").length;return{title:k.t||"",icon:k.i,base:g.replace(/\/[^/]+\/?$/,"/"),order:k.O||null,level:Vn(g,"/")?h-1:h,path:g}}).filter(({title:g,level:k})=>typeof g=="string"&&g&&k<=n.level).sort(({title:g,level:k,path:h,order:w},{title:y,level:_,path:j,order:B})=>k-_||(Vn(h,"/index.html")?-1:Vn(j,"/index.html")?1:w===null?B===null?g.localeCompare(y):B:B===null?w:w>0?B>0?w-B:-1:B<0?w-B:1)).forEach(g=>{var k;const{base:h,level:w}=g;switch(w){case 1:m.push(g);break;case 2:{const y=m.find(_=>_.path===h);y&&(y.children??(y.children=[])).push(g);break}default:{const y=m.find(_=>_.path===h.replace(/\/[^/]+\/$/,"/"));if(y){const _=(k=y.children)==null?void 0:k.find(j=>j.path===h);_&&(_.children??(_.children=[])).push(g)}}}}),m},u=b(()=>c());return()=>t("div",{class:"auto-catalog-wrapper"},[t("h2",{class:"main-title"},s.value.title),u.value.map(({children:r=[],icon:d,path:m,title:g},k)=>[t("h3",{id:g,class:["child-title",{"has-children":r.length}]},[t("a",{href:`#${g}`,class:"header-anchor"},"#"),t(Pa,{class:"catalog-title",to:m},()=>[n.index?`${k+1}.`:null,d&&a.icon?a.icon({icon:d}):null,g||"Unknown"])]),r.length?t("ul",{class:"child-catalog-wrapper"},r.map(({children:h=[],icon:w,path:y,title:_},j)=>t("li",{class:"child-catalog-item"},[t("div",{class:["sub-title",{"has-children":h.length}]},[t("a",{href:`#${_}`,class:"header-anchor"},"#"),t(Pa,{class:"catalog-title",to:y},()=>[n.index?`${k+1}.${j+1}`:null,w&&a.icon?a.icon({icon:w}):null,_||"Unknown"])]),h.length?t("div",{class:"sub-catalog-wrapper"},h.map(({icon:B,path:F,title:J},S)=>t(Pa,{class:"sub-catalog-item",to:F},()=>[n.index?`${k+1}.${j+1}.${S+1}`:null,B&&a.icon?a.icon({icon:B}):null,J||"Unknown"]))):null]))):null])])}}),Yi=en({enhance:({app:n})=>{ln("AutoCatalog",n)||n.component("AutoCatalog",a=>t(Ki,a,{icon:({icon:s})=>t(Q("HopeIcon"),{icon:s})}))}});const Xi=t("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[t("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),gt=f({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const a=vn(),s=b(()=>n.locales[a.value]??{openInNewWindow:"open in new window"});return()=>t("span",[Xi,t("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}}),Zi={},np=en({enhance({app:n}){n.component("ExternalLinkIcon",t(gt,{locales:Zi}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const V={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const a=V.isStarted();n=Ba(n,V.settings.minimum,1),V.status=n===1?null:n;const s=V.render(!a),e=s.querySelector(V.settings.barSelector),o=V.settings.speed,l=V.settings.easing;return s.offsetWidth,ap(p=>{ga(e,{transform:"translate3d("+pe(n)+"%,0,0)",transition:"all "+o+"ms "+l}),n===1?(ga(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){ga(s,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){V.remove(),p()},o)},o)):setTimeout(()=>p(),o)}),V},isStarted:()=>typeof V.status=="number",start:()=>{V.status||V.set(0);const n=()=>{setTimeout(()=>{V.status&&(V.trickle(),n())},V.settings.trickleSpeed)};return V.settings.trickle&&n(),V},done:n=>!n&&!V.status?V:V.inc(.3+.5*Math.random()).set(1),inc:n=>{let a=V.status;return a?(typeof n!="number"&&(n=(1-a)*Ba(Math.random()*a,.1,.95)),a=Ba(a+n,0,.994),V.set(a)):V.start()},trickle:()=>V.inc(Math.random()*V.settings.trickleRate),render:n=>{if(V.isRendered())return document.getElementById("nprogress");ce(document.documentElement,"nprogress-busy");const a=document.createElement("div");a.id="nprogress",a.innerHTML=V.settings.template;const s=a.querySelector(V.settings.barSelector),e=n?"-100":pe(V.status||0),o=document.querySelector(V.settings.parent);return ga(s,{transition:"all 0 linear",transform:"translate3d("+e+"%,0,0)"}),o!==document.body&&ce(o,"nprogress-custom-parent"),o==null||o.appendChild(a),a},remove:()=>{re(document.documentElement,"nprogress-busy"),re(document.querySelector(V.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&sp(n)},isRendered:()=>!!document.getElementById("nprogress")},Ba=(n,a,s)=>n<a?a:n>s?s:n,pe=n=>(-1+n)*100,ap=function(){const n=[];function a(){const s=n.shift();s&&s(a)}return function(s){n.push(s),n.length===1&&a()}}(),ga=function(){const n=["Webkit","O","Moz","ms"],a={};function s(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,u){return u.toUpperCase()})}function e(p){const c=document.body.style;if(p in c)return p;let u=n.length;const r=p.charAt(0).toUpperCase()+p.slice(1);let d;for(;u--;)if(d=n[u]+r,d in c)return d;return p}function o(p){return p=s(p),a[p]||(a[p]=e(p))}function l(p,c,u){c=o(c),p.style[c]=u}return function(p,c){for(const u in c){const r=c[u];r!==void 0&&Object.prototype.hasOwnProperty.call(c,u)&&l(p,u,r)}}}(),kt=(n,a)=>(typeof n=="string"?n:fs(n)).indexOf(" "+a+" ")>=0,ce=(n,a)=>{const s=fs(n),e=s+a;kt(s,a)||(n.className=e.substring(1))},re=(n,a)=>{const s=fs(n);if(!kt(n,a))return;const e=s.replace(" "+a+" "," ");n.className=e.substring(1,e.length-1)},fs=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),sp=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const ep=()=>{D(()=>{const n=sn(),a=new Set;a.add(n.currentRoute.value.path),n.beforeEach(s=>{a.has(s.path)||V.start()}),n.afterEach(s=>{a.add(s.path),V.done()})})},tp=en({setup(){ep()}}),op=JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$oft8TuQHVqgHjwANTxDtkegb4SBbpgfcqW.Oqk.0wcg2oTaCTiOmG"]}},"author":{"name":"程序员H","url":"http://www.hl1015.com/"},"logo":"/logo.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"docs","pure":true,"breadcrumb":false,"pageInfo":["Author","Category","Tag","Date","Original","Word","ReadingTime"],"blog":{"medias":{"BiliBili":"https://example.com","Gitee":"https://example.com","GitHub":"https://example.com","QQ":"https://example.com","Wechat":"https://example.com","Zhihu":"https://example.com"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"Java","icon":"java","link":"/java/"},{"text":"Linux","icon":"linux","link":"/linux/"},{"text":"Vue","icon":"vue","link":"/vue/"},{"text":"数据库","icon":"database","link":"/database/"},{"text":"部署相关","icon":"deploy","link":"/deploy/"},{"text":"软件教程","icon":"categoryselected","link":"/software/"}],"sidebar":{"/java":[{"text":"Java 基础","icon":"java","collapsible":true,"prefix":"basic/","children":["basic-grammar","array","object-oriented-1","object-oriented-2","object-oriented-3","exception","enum-and-annotation","collection","genericity","io","multi-thread","common-class","reflection","network",{"text":"Java 新特性","icon":"creative","collapsible":true,"children":["jdk8-new-feature"]}]},{"text":"JDBC","icon":"code","collapsible":true,"prefix":"jdbc/","children":["jdbc-1","jdbc-2","jdbc-3","jdbc-4","jdbc-5","jdbc-6","jdbc-7","jdbc-8","jdbc-9"]},{"text":"常用框架","icon":"Category","collapsible":true,"prefix":"framework/","children":[{"text":"Spring","icon":"bxl-spring-boot","collapsible":true,"prefix":"spring/","children":[{"text":"Spring 核心","collapsible":true,"prefix":"core/","children":["spring-summary","spring-ioc","spring-aop","spring-jdbcTemplate","spring-tx"]},{"text":"Spring 注解","collapsible":true,"prefix":"annotation/","children":["spring-annotation-1","spring-annotation-2","spring-annotation-3","spring-annotation-4","spring-annotation-5","spring-annotation-6"]}]},{"text":"SpringBoot","icon":"bxl-spring-boot","collapsible":true,"prefix":"springboot/","children":[{"text":"SpringBoot 基础","collapsible":true,"prefix":"basic/","children":["springboot2-basic-1","springboot2-basic-2","springboot2-basic-3"]},{"text":"SpringBoot 核心","collapsible":true,"prefix":"core/","children":["springboot2-core-1","springboot2-core-2","springboot2-core-3","springboot2-core-4","springboot2-core-5","springboot2-core-6"]}]},{"text":"SpringMVC","icon":"bxl-spring-boot","collapsible":true,"prefix":"springmvc/","children":["springmvc-1","springmvc-2","springmvc-3","springmvc-4","springmvc-5","springmvc-6"]},{"text":"MyBatis","icon":"database","collapsible":true,"prefix":"mybatis/","children":["mybatis-1","mybatis-2","mybatis-3","mybatis-4"]},{"text":"MyBatis-Plus","icon":"database","collapsible":true,"prefix":"mybatis-plus/","children":["mybatis-plus-1","mybatis-plus-2","mybatis-plus-3","mybatis-plus-4","mybatis-plus-5","mybatis-plus-6","mybatis-plus-7","mybatis-plus-8","mybatis-plus-9"]}]}],"/linux":[{"text":"Linux 入门","icon":"linux","collapsible":true,"prefix":"basic/","children":["linux-basic-1","linux-basic-2","linux-basic-3","linux-basic-4","linux-basic-5","linux-basic-6","linux-basic-7","linux-basic-8","linux-basic-9"]},{"text":"Linux 高级","icon":"linux","collapsible":true,"prefix":"senior/","children":[]}],"/vue":[{"text":"第一章：Vue 核心","icon":"vue","collapsible":true,"prefix":"chapter1/","children":["01-Vue简介","02-搭建Vue开发环境","03-模板语法","04-数据绑定","05-MVVM模型","06-数据代理","07-事件处理","08-计算属性与侦听器","09-class与style绑定","10-条件渲染","11-列表渲染","12-数据监测总结","13-收集表单数据","14-过滤器","15-内置指令","16-自定义指令","17-Vue实例生命周期"]},{"text":"第二章：Vue 组件编程","icon":"vue","collapsible":true,"prefix":"chapter2/","children":["01-模块(化)与组件(化)","02-非单文件组件","03-单文件组件"]},{"text":"第三章：使用 Vue 脚手架","icon":"vue","collapsible":true,"prefix":"chapter3/","children":["01-初始化脚手架","02-ref、props、mixin","03-插件和scope样式","04-TodoList案例"]},{"text":"第四章：Vue中的 Ajax","icon":"vue","collapsible":true,"prefix":"chapter4/","children":[]},{"text":"第五章：Vuex","icon":"vue","collapsible":true,"prefix":"chapter5/","children":[]},{"text":"第六章：Vue-Router","icon":"vue","collapsible":true,"prefix":"chapter6/","children":[]},{"text":"第七章：Vue UI 组件库","icon":"vue","collapsible":true,"prefix":"chapter7/","children":[]}],"/database":[{"text":"MySQL","icon":"mysql","prefix":"mysql/","collapsible":true,"children":[{"text":"MySQL 安装","link":"install/mysql-install"},{"text":"MySQL 基础","prefix":"basic/","collapsible":true,"children":["mysql-basic-1","mysql-basic-2","mysql-basic-3","mysql-basic-4","mysql-basic-5","mysql-basic-6","mysql-basic-7","mysql-basic-8","mysql-basic-9","mysql-basic-10","mysql-basic-11","mysql-basic-12","mysql-basic-13","mysql-basic-14","mysql-basic-15"]}]},{"text":"Redis","icon":"redis","prefix":"redis/","collapsible":true,"children":["redis-1","redis-2","redis-3","redis-4","redis-5","redis-6","redis-7","redis-8","redis-9","redis-10","redis-11","redis-12","redis-13","redis-14","redis-15","redis-16","redis-17"]}],"/deploy":[{"text":"Docker","icon":"docker","prefix":"docker/","collapsible":true,"children":[{"text":"Docker 基础","prefix":"basic/","collapsible":true,"children":["docker-basic-1","docker-basic-2","docker-basic-3","docker-basic-4","docker-basic-5","docker-basic-6","docker-basic-7"]},{"text":"Docker 高级","prefix":"senior/","collapsible":true,"children":[]}]},{"text":"Nginx","icon":"nginx","prefix":"nginx/","collapsible":true,"children":[]},{"text":"Jenkins","icon":"jenkins","prefix":"jenkins/","collapsible":true,"children":[]}],"/software":[{"text":"JDK","icon":"java","collapsible":true,"prefix":"jdk/","children":["jdk-1"]},{"text":"NodeJS","icon":"node-js","collapsible":true,"prefix":"nodejs/","children":["nodejs-1"]},{"text":"Git","icon":"git","collapsible":true,"prefix":"git/","children":["git-1","git-2","git-3","git-4","git-5","git-6","git-7","git-8","git-9","git-10"]},{"text":"Maven","icon":"manage","collapsible":true,"prefix":"maven/","children":["maven-1","maven-2"]},{"text":"IDEA","icon":"Idea","collapsible":true,"prefix":"idea/","children":["idea-1","idea-2","idea-3","idea-4","idea-5","idea-6"]},{"text":"VSCode","icon":"vscode","collapsible":true,"prefix":"vscode/","children":["vscode-1"]},{"text":"PLSQL","icon":"database","collapsible":true,"prefix":"plsql/","children":["plsql-1"]},{"text":"PowerDesigner","icon":"database","collapsible":true,"prefix":"powerdesigner/","children":["powerdesigner-1"]}],"/":["","intro","slides"]},"footer":"<a href=\\"https://beian.miit.gov.cn\\">浙ICP备2021002584号-2</a>","displayFooter":true,"blog":{"description":"一个全栈开发者","intro":"/intro.html"}}}}'),lp=E(op),bt=()=>lp,ht=Symbol(""),ip=()=>{const n=$(ht);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},pp=(n,a)=>{var s;return{...n,...(s=n.locales)==null?void 0:s[a]}},cp=en({enhance({app:n}){const a=bt(),s=n._context.provides[rs],e=b(()=>pp(a.value,s.value));n.provide(ht,e),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return a.value}},$themeLocale:{get(){return e.value}}})}});const rp={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.208/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.208/templates/giscus/dark.css"};let up=rp;const ft=Symbol(""),_t=()=>$(ft),dp=_t,vp=n=>{n.provide(ft,up)},ue=["ar","de","gsw","en","es","fa","fr","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var mp=f({name:"GiscusComment",props:{darkmode:Boolean},setup(n){const a=dp(),s=T(),e=!!(a.repo&&a.repoId&&a.category&&a.categoryId),{repo:o,repoId:l,category:p,categoryId:c}=a,u=E(!1),r=b(()=>{const m=cs().value;if(ue.includes(m))return m;const g=m.split("-")[0];return ue.includes(g)?g:"en"}),d=b(()=>({repo:o,repoId:l,category:p,categoryId:c,lang:r.value,theme:n.darkmode?a.darkTheme||"dark":a.lightTheme||"light",mapping:a.mapping||"pathname",term:G(s.value.path),inputPosition:a.inputPosition||"top",reactionsEnabled:a.reactionsEnabled===!1?"0":"1",strict:a.strict===!1?"0":"1",loading:a.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return D(async()=>{await i(()=>import("./giscus-52604b1e.js"),[]),u.value=!0}),()=>e?t("div",{class:["giscus-wrapper",{"input-top":a.inputPosition!=="bottom"}],id:"comment"},u.value?t("giscus-widget",d.value):t(fn)):null}}),gp=f({name:"CommentService",props:{darkmode:Boolean},setup(n){const a=_t(),s=O(),e=a.comment!==!1,o=b(()=>s.value.comment||e&&s.value.comment!==!1);return()=>t(mp,{darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),kp=en({enhance:({app:n})=>{vp(n),n.component("CommentService",gp)}});const bp=800,hp=2e3,fp={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},_p=!1,yp=['.theme-hope-content div[class*="language-"] pre'],de=!1,Ca=new Map,Ep=()=>{const{copy:n}=gi({legacy:!0}),a=_n(fp),s=T(),e=Ye(),o=c=>{if(!c.hasAttribute("copy-code-registered")){const u=document.createElement("button");u.type="button",u.classList.add("copy-code-button"),u.innerHTML='<div class="copy-icon" />',u.setAttribute("aria-label",a.value.copy),u.setAttribute("data-copied",a.value.copied),c.parentElement&&c.parentElement.insertBefore(u,c),c.setAttribute("copy-code-registered","")}},l=()=>Nn().then(()=>new Promise(c=>{setTimeout(()=>{yp.forEach(u=>{document.querySelectorAll(u).forEach(o)}),c()},bp)})),p=(c,u,r)=>{let{innerText:d=""}=u;/language-(shellscript|shell|bash|sh|zsh)/.test(c.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),n(d).then(()=>{r.classList.add("copied"),clearTimeout(Ca.get(r));const m=setTimeout(()=>{r.classList.remove("copied"),r.blur(),Ca.delete(r)},hp);Ca.set(r,m)})};D(()=>{(!e.value||de)&&l(),q("click",c=>{const u=c.target;if(u.matches('div[class*="language-"] > button.copy')){const r=u.parentElement,d=u.nextElementSibling;d&&p(r,d,u)}else if(u.matches('div[class*="language-"] div.copy-icon')){const r=u.parentElement,d=r.parentElement,m=r.nextElementSibling;m&&p(d,m,r)}}),R(()=>s.value.path,()=>{(!e.value||de)&&l()})})};var wp=en({setup:()=>{Ep()}});const Ap=(n,a)=>a==="json"?JSON.parse(n):new Function(`let config,__chart_js_config__;
{
${n}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var xp=f({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const a=z(),s=z(),e=E(!0);return D(async()=>{const[{default:o}]=await Promise.all([i(()=>import("./auto-fa8841cf.js"),[]),new Promise(c=>setTimeout(c,800))]);o.defaults.maintainAspectRatio=!1;const l=Ap(xn(n.config),n.type),p=s.value.getContext("2d");new o(p,l),e.value=!1}),()=>[n.title?t("div",{class:"chart-title"},decodeURIComponent(n.title)):null,e.value?t(fn,{class:"chart-loading",height:192}):null,t("div",{ref:a,class:"chart-wrapper",id:n.id,style:{display:e.value?"none":"block"}},t("canvas",{ref:s,height:400}))]}});const ka=In("VUEPRESS_CODE_TAB_STORE",{});var Lp=f({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(n,{slots:a}){const s=E(n.active),e=z([]),o=()=>{if(n.tabId){const{title:r,id:d=r}=n.data[s.value];ka.value[n.tabId]=d}},l=(r=s.value)=>{s.value=r<e.value.length-1?r+1:0,e.value[s.value].focus()},p=(r=s.value)=>{s.value=r>0?r-1:e.value.length-1,e.value[s.value].focus()},c=(r,d)=>{if(r.key===" "||r.key==="Enter"?(r.preventDefault(),s.value=d):r.key==="ArrowRight"?(r.preventDefault(),l()):r.key==="ArrowLeft"&&(r.preventDefault(),p()),n.tabId){const{title:m,id:g=m}=n.data[s.value];ka.value[n.tabId]=g}},u=()=>{if(n.tabId){const r=n.data.findIndex(({title:d,id:m=d})=>ka.value[n.tabId]===m);if(r!==-1)return r}return n.active};return D(()=>{s.value=u(),R(()=>ka.value[n.tabId],(r,d)=>{if(n.tabId&&r!==d){const m=n.data.findIndex(({title:g,id:k=g})=>k===r);m!==-1&&(s.value=m)}})}),()=>n.data.length?t("div",{class:"code-tabs"},[t("div",{class:"code-tabs-nav",role:"tablist"},n.data.map(({title:r},d)=>{const m=d===s.value;return t("button",{type:"button",ref:g=>{g&&(e.value[d]=g)},class:["code-tabs-nav-tab",{active:m}],role:"tab","aria-controls":`codetab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{s.value=d,o()},onKeydown:g=>c(g,d)},r)})),n.data.map(({title:r,id:d=r},m)=>{var g;const k=m===s.value;return t("div",{class:["code-tab",{active:k}],id:`codetab-${n.id}-${m}`,role:"tabpanel","aria-expanded":k},(g=a[`tab${m}`])==null?void 0:g.call(a,{title:r,value:d,isActive:k}))})]):null}});const yt=({active:n=!1},{slots:a})=>{var s;return t("div",{class:["code-group-item",{active:n}],"aria-selected":n},(s=a.default)==null?void 0:s.call(a))};yt.displayName="CodeGroupItem";const Ip=f({name:"CodeGroup",setup(n,{slots:a}){const s=E(-1),e=z([]),o=(c=s.value)=>{s.value=c<e.value.length-1?c+1:0,e.value[s.value].focus()},l=(c=s.value)=>{s.value=c>0?c-1:e.value.length-1,e.value[s.value].focus()},p=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=u):c.key==="ArrowRight"?(c.preventDefault(),o(u)):c.key==="ArrowLeft"&&(c.preventDefault(),l(u))};return()=>{var c;const u=(((c=a.default)==null?void 0:c.call(a))||[]).filter(r=>r.type.name==="CodeGroupItem").map(r=>(r.props===null&&(r.props={}),r));return u.length===0?null:(s.value<0||s.value>u.length-1?(s.value=u.findIndex(r=>"active"in r.props),s.value===-1&&(s.value=0)):u.forEach((r,d)=>{r.props.active=d===s.value}),t("div",{class:"code-group"},[t("div",{class:"code-group-nav"},u.map((r,d)=>{const m=d===s.value;return t("button",{type:"button",ref:g=>{g&&(e.value[d]=g)},class:["code-group-nav-tab",{active:m}],"aria-pressed":m,"aria-expanded":m,onClick:()=>{s.value=d},onKeydown:g=>p(g,d)},r.props.title)})),u]))}}});const Tp=()=>t(L,{name:"back"},()=>t("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),Dp=()=>t(L,{name:"home"},()=>t("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),Vp='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',Rp='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',Sp='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const Ma={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},ve={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Pp=(n,a,s)=>{const e=document.createElement(n);return Yn(a)&&X(a).forEach(o=>{if(o.indexOf("data"))e[o]=a[o];else{const l=o.replace("data","");e.dataset[l]=a[o]}}),s&&s.forEach(o=>{e.appendChild(o)}),e},_s=n=>({...Ma,...n,jsLib:Array.from(new Set([...Ma.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...Ma.cssLib||[],...n.cssLib||[]]))}),jn=(n,a)=>{if(n[a]!==void 0)return n[a];const s=new Promise(e=>{var o;const l=document.createElement("script");l.src=a,(o=document.querySelector("body"))==null||o.appendChild(l),l.onload=()=>{e()}});return n[a]=s,s},Op=(n,a)=>{if(a.css&&Array.from(n.childNodes).every(s=>s.nodeName!=="STYLE")){const s=Pp("style",{innerHTML:a.css});n.appendChild(s)}},jp=(n,a,s)=>{const e=s.getScript();if(e&&Array.from(a.childNodes).every(o=>o.nodeName!=="SCRIPT")){const o=document.createElement("script");o.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .code-demo-container').shadowRoot;
${e}}`)),a.appendChild(o)}},Bp=n=>{const a=X(n),s={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(e=>{const o=a.filter(l=>ve[e].types.includes(l));if(o.length){const l=o[0];s[e]=[n[l].replace(/^\n|\n$/g,""),ve[e].map[l]||l]}}),s.isLegal=(!s.html.length||s.html[1]==="none")&&(!s.js.length||s.js[1]==="none")&&(!s.css.length||s.css[1]==="none"),s},Et=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),wt=n=>`<div id="app">
${Et(n)}
</div>`,Cp=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Mp=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),At=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,$p=(n,a)=>{const s=_s(a),e=n.js[0]||"";return{...s,html:Et(n.html[0]||""),js:e,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var o;return s.useBabel?((o=window.Babel.transform(e,{presets:["es2015"]}))==null?void 0:o.code)||"":e}}},qp=/<template>([\s\S]+)<\/template>/u,zp=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Np=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Hp=(n,a)=>{const s=_s(a),e=n.html[0]||"",o=qp.exec(e),l=zp.exec(e),p=Np.exec(e),c=o?o[1].replace(/^\n|\n$/g,""):"",[u="",r=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],[d="",m=""]=p?[p[4].replace(/^\n|\n$/g,""),p[3]]:[],g=r===""&&(m===""||m==="css");return{...s,html:wt(c),js:Mp(u),css:d,isLegal:g,jsLib:[s.vue,...s.jsLib],getScript:()=>{var k,h;const w=a.useBabel?((h=(k=window.Babel)==null?void 0:k.transform(u,{presets:["es2015"]}))==null?void 0:h.code)||"":u.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${At(w)};appOptions.template=\`${c.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},Fp=(n,a)=>{const s=_s(a);return{...s,html:wt(""),js:Cp(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[s.react,s.reactDOM,...s.jsLib],jsx:!0,getScript:()=>{var e,o;const l=((o=(e=window.Babel)==null?void 0:e.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${At(l)}))`}}},Bn={},Jp=n=>Promise.all([jn(Bn,n.babel),jn(Bn,n.react),jn(Bn,n.reactDOM)]),Up=n=>{const a=[jn(Bn,n.vue)];return n.useBabel&&a.push(jn(Bn,n.babel)),Promise.all(a)},Gp=n=>n.useBabel?jn(Bn,n.babel):Promise.resolve();var Qp=f({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(n,{slots:a}){const[s,e]=Wa(!1),o=z(),l=z(),p=E("0"),c=E(!1),u=b(()=>JSON.parse(n.config?xn(n.config):"{}")),r=b(()=>{const h=JSON.parse(xn(n.code));return Bp(h)}),d=b(()=>n.type==="react"?Fp(r.value,u.value):n.type==="vue"?Hp(r.value,u.value):$p(r.value,u.value)),m=b(()=>d.value.isLegal),g=(h=!1)=>{const w=o.value.attachShadow({mode:"open"}),y=document.createElement("div");y.classList.add("code-demo-app"),w.appendChild(y),m.value?(h&&(y.innerHTML=d.value.html),Op(w,d.value),jp(n.id,w,d.value),p.value="0"):p.value="auto",c.value=!0},k=()=>{switch(n.type){case"react":return Jp(d.value).then(()=>g());case"vue":return Up(d.value).then(()=>g());default:return Gp(d.value).then(()=>g(!0))}};return D(()=>{setTimeout(()=>{k()},800)}),()=>{var h;return t("div",{class:"code-demo-wrapper",id:n.id},[t("div",{class:"code-demo-header"},[d.value.isLegal?t("button",{type:"button",title:"toggle","aria-hidden":!0,class:["toggle-button",s.value?"down":"end"],onClick:()=>{p.value=s.value?"0":`${l.value.clientHeight+13.8}px`,e()}}):null,n.title?t("span",{class:"title"},decodeURIComponent(n.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?t("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[t("input",{type:"hidden",name:"html",value:d.value.html}),t("input",{type:"hidden",name:"js",value:d.value.js}),t("input",{type:"hidden",name:"css",value:d.value.css}),t("input",{type:"hidden",name:"wrap",value:"1"}),t("input",{type:"hidden",name:"panel_js",value:"3"}),t("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),t("button",{type:"submit",class:"jsfiddle-button",innerHTML:Rp,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?t("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[t("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:r.value?r.value.html[1]:"none",js_pre_processor:r.value?r.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:r.value?r.value.css[1]:"none",editors:d.value.codepenEditors})}),t("button",{type:"submit",innerHTML:Vp,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),c.value?null:t(fn,{class:"code-demo-loading"}),t("div",{ref:o,class:"code-demo-container",style:{display:m.value&&c.value?"block":"none"}}),t("div",{class:"code-demo-code-wrapper",style:{height:p.value}},t("div",{ref:l,class:"code-demo-codes"},(h=a.default)==null?void 0:h.call(a)))])}}});const Wp=(async()=>{}).constructor,Kp=(n,a,s)=>a==="js"?Wp("myChart",`let width,height,option,__echarts_config__;
{
${n}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(s):Promise.resolve({option:JSON.parse(n)});var Yp=f({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const a=E(!0),s=z();let e;return q("resize",ot(()=>e==null?void 0:e.resize(),100)),D(()=>{Promise.all([i(()=>import("./index-b03bef79.js"),[]),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{e=o.init(s.value);const{option:l,...p}=await Kp(xn(n.config),n.type,e);e.resize(p),e.setOption(l),a.value=!1})}),Xn(()=>{e==null||e.dispose()}),()=>[n.title?t("div",{class:"echarts-title"},decodeURIComponent(n.title)):null,t("div",{class:"echarts-wrapper"},[t("div",{ref:s,class:"echarts-container",id:n.id}),a.value?t(fn,{class:"echarts-loading",height:360}):null])]}});var ys={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},Xp={...ys,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},Zp={...ys,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},nc={...ys,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const me={ant:Xp,vue:nc,pie:Zp};var ac=f({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(n){let a=null;const s=z(),e=E(!0),o=E(1),l=b(()=>me[n.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${n.preset}`),me.vue)),p=c=>c<419?.8:c>1280?1:.9;return D(()=>{Promise.all([i(()=>import("./flowchart-35969cab.js"),[]),new Promise(c=>setTimeout(c,800))]).then(([{parse:c}])=>{a=c(xn(n.code)),o.value=p(window.innerWidth),e.value=!1,a.draw(n.id,{...l.value,scale:o.value})}),q("resize",ot(()=>{if(a){const c=p(window.innerWidth);o.value!==c&&(o.value=c,a.draw(n.id,{...l.value,scale:c}))}},100))}),()=>[e.value?t(fn,{class:"flowchart-loading",height:192}):null,t("div",{ref:s,class:["flowchart-wrapper",n.preset],id:n.id,style:{display:e.value?"none":"block"}})]}});let sc={};const xt=Symbol(""),ec=()=>$(xt),tc=n=>{n.provide(xt,sc)},Rn={useMaxWidth:!1},oc=n=>({dark:n,background:n?"#1e1e1e":"#fff",primaryColor:n?"#389d70":"#4abf8a",primaryBorderColor:n?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:n?"#fff":"#000",secondaryTextColor:n?"#ddd":"#333",tertiaryColor:n?"#282828":"#efeef4",tertiaryBorderColor:n?"#bbb":"#242424",tertiaryTextColor:n?"#ddd":"#333",noteBkgColor:n?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:n?"#f6d365":"#333",lineColor:n?"#d3d3d3":"#333",textColor:n?"#fff":"#242424",mainBkg:n?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:n?"#389d70":"#4abf8a",nodeTextColor:n?"#fff":"#242424",signalTextColor:n?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:n?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var lc=f({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(n){const a=ec(),s=z(),e=b(()=>xn(n.code)),o=E(""),l=E(!1),p=async()=>{const[{default:r}]=await Promise.all([i(()=>import("./mermaid.core-f427f273.js").then(d=>d.aH),["assets/mermaid.core-f427f273.js","assets/framework-1fb77053.js"]),new Promise(d=>setTimeout(d,800))]);r.initialize({theme:"base",themeVariables:oc(l.value),flowchart:Rn,sequence:Rn,journey:Rn,gantt:Rn,er:Rn,pie:Rn,...a,startOnLoad:!1}),o.value=(await r.render(n.id,e.value)).svg,console.log(o.value)},c=()=>{const{body:r}=document,d=document.createElement("div");d.classList.add("mermaid-preview"),d.innerHTML=o.value,console.log(d),r.appendChild(d),d.addEventListener("click",()=>{console.log("remove"),r.removeChild(d)})},u=()=>{const r=`data:image/svg+xml;charset=utf8,${o.value.replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,d=document.createElement("a");d.setAttribute("href",r),d.setAttribute("download",`${n.id}.svg`),d.click()};return D(()=>{const r=document.documentElement,d=()=>r.classList.contains("dark")||r.getAttribute("data-theme")==="dark";l.value=d(),p(),Ti(r,()=>{l.value=d()},{attributeFilter:["class","data-theme"],attributes:!0}),R(l,()=>p())}),()=>[t("div",{class:"mermaid-actions"},[t("button",{class:"preview-button",onClick:()=>c(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),t("button",{class:"download-button",onClick:()=>u(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),t("div",{ref:s,class:"mermaid-wrapper"},o.value?t("div",{class:"mermaid-content",innerHTML:o.value}):t(fn,{class:"mermaid-loading",height:96}))]}});let ic={};const Lt=Symbol(""),pc=()=>$(Lt),cc=n=>{n.provide(Lt,ic)},rc={showCompileOutput:!1,clearConsole:!1,ssr:!1};let uc=rc;const It=Symbol(""),ld=()=>$(It),dc=n=>{n.provide(It,uc)},vc=()=>i(()=>import("./highlight.esm-75b11b9d.js"),[]),mc=()=>i(()=>import("./markdown.esm-0191f9da.js"),[]),gc=()=>i(()=>import("./math.esm-70a288c8.js"),[]),kc=()=>i(()=>import("./notes.esm-a106bb2c.js"),[]),bc=()=>i(()=>import("./reveal.esm-ab04f0b1.js"),[]),hc=()=>i(()=>import("./search.esm-7e6792e2.js"),[]),fc=()=>i(()=>import("./zoom.esm-b83b91d0.js"),[]);const _c=()=>[bc(),mc(),vc(),gc(),hc(),kc(),fc()];var yc=f({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(n){const a=pc(),s=O(),e=E(""),o=E(!0),l=z();let p=null;const c=async u=>{const r=[new Promise(k=>setTimeout(k,800)),..._c()],[,d,...m]=await Promise.all(r),g=new d.default(u,{plugins:m.map(({default:k})=>k)});return await g.initialize({backgroundTransition:"slide",hash:s.value.layout==="Slide",mouseWheel:s.value.layout==="Slide",transition:"slide",slideNumber:!0,...a,...s.value.reveal||{},embedded:s.value.layout!=="Slide"}),g};return D(async()=>{const u=l.value;u&&(e.value=xn(n.code),u.setAttribute("id",n.id),u.setAttribute("data-theme",n.theme),p=await c(u),o.value=!1)}),Xn(()=>{p==null||p.destroy()}),()=>t("div",{class:"presentation-wrapper"},[t("div",{ref:l,class:["reveal","reveal-viewport"]},t("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${e.value}<\/script></section>`})),o.value?t(fn,{class:"reveal-loading",height:400}):null])}});var Ec=f({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(n){return()=>[t("div",{class:"playground-wrapper"},[t("div",{class:"title-wrapper"},[n.title?t("div",{class:"title"},decodeURIComponent(n.title)):null,t("div",{class:"actions"},[t("a",{class:"action",href:decodeURIComponent(n.link),target:"_blank",innerHTML:Sp})])]),t("div",{class:"playground-container"},t("iframe",{src:decodeURIComponent(n.link)}))])]}});const $a=In("VUEPRESS_TAB_STORE",{});var wc=f({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(n,{slots:a}){const s=E(n.active),e=z([]),o=()=>{if(n.tabId){const{title:r,id:d=r}=n.data[s.value];$a.value[n.tabId]=d}},l=(r=s.value)=>{s.value=r<e.value.length-1?r+1:0,e.value[s.value].focus()},p=(r=s.value)=>{s.value=r>0?r-1:e.value.length-1,e.value[s.value].focus()},c=(r,d)=>{r.key===" "||r.key==="Enter"?(r.preventDefault(),s.value=d):r.key==="ArrowRight"?(r.preventDefault(),l()):r.key==="ArrowLeft"&&(r.preventDefault(),p()),o()},u=()=>{if(n.tabId){const r=n.data.findIndex(({title:d,id:m=d})=>$a.value[n.tabId]===m);if(r!==-1)return r}return n.active};return D(()=>{s.value=u(),R(()=>$a.value[n.tabId],(r,d)=>{if(n.tabId&&r!==d){const m=n.data.findIndex(({title:g,id:k=g})=>k===r);m!==-1&&(s.value=m)}})}),()=>n.data.length?t("div",{class:"tab-list"},[t("div",{class:"tab-list-nav",role:"tablist"},n.data.map(({title:r},d)=>{const m=d===s.value;return t("button",{type:"button",ref:g=>{g&&(e.value[d]=g)},class:["tab-list-nav-item",{active:m}],role:"tab","aria-controls":`tab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{s.value=d,o()},onKeydown:g=>c(g,d)},r)})),n.data.map(({title:r,id:d=r},m)=>{var g;const k=m===s.value;return t("div",{class:["tab-item",{active:k}],id:`tab-${n.id}-${m}`,role:"tabpanel","aria-expanded":k},(g=a[`tab${m}`])==null?void 0:g.call(a,{title:r,value:d,isActive:k}))})]):null}});const Ac=en({enhance:({app:n})=>{n.component("ChartJS",xp),n.component("CodeTabs",Lp),ln("CodeGroup",n)||n.component("CodeGroup",Ip),ln("CodeGroupItem",n)||n.component("CodeGroupItem",yt),n.component("CodeDemo",Qp),n.component("ECharts",Yp),n.component("FlowChart",ac),tc(n),n.component("Mermaid",lc),cc(n),n.component("Presentation",yc),n.component("Playground",Ec),n.component("Tabs",wc),dc(n),n.component("VuePlayground",v(()=>i(()=>import("./VuePlayground-f42f2250.js"),["assets/VuePlayground-f42f2250.js","assets/framework-1fb77053.js"])))}});let xc={};const Tt=Symbol(""),Lc=()=>$(Tt),Ic=n=>{n.provide(Tt,xc)};const Tc=".theme-hope-content :not(a) > img:not([no-view])",Dc={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},Vc=800,Rc='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Sc=n=>Y(n)?Array.from(document.querySelectorAll(n)):n.map(a=>Array.from(document.querySelectorAll(a))).flat(),Dt=n=>new Promise((a,s)=>{n.complete?a({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>a(Dt(n)),n.onerror=e=>s(e))}),Pc=()=>{const{isSupported:n,toggle:a}=bs(),s=Lc(),e=_n(Dc),o=T();let l;const p=u=>{u.on("uiRegister",()=>{n&&u.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),u.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(r,d)=>{r.setAttribute("download",""),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener"),d.on("change",()=>{r.setAttribute("href",d.currSlide.data.src)})}}),u.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(r,d)=>{const m=[];let g=-1;for(let k=0;k<d.getNumItems();k++){const h=document.createElement("div");h.className="photo-swipe-bullet",h.onclick=w=>{d.goTo(m.indexOf(w.target))},m.push(h),r.appendChild(h)}d.on("change",()=>{g>=0&&m[g].classList.remove("active"),m[d.currIndex].classList.add("active"),g=d.currIndex})}})})},c=()=>Promise.all([i(()=>import("./photoswipe.esm-36cd6c3c.js"),[]),Nn().then(()=>new Promise(u=>setTimeout(u,Vc)).then(()=>Sc(Tc)))]).then(([{default:u},r])=>{const d=r.map(m=>({html:Rc,element:m,msrc:m.src}));r.forEach((m,g)=>{const k=()=>{l=new u({preloaderDelay:0,showHideAnimationType:"zoom",...e.value,...s,dataSource:d,index:g,closeOnVerticalDrag:!0,wheelToZoom:!1}),p(l),l.addFilter("thumbEl",()=>m),l.addFilter("placeholderSrc",()=>m.src),l.init()};m.style.cursor="zoom-in",m.addEventListener("click",()=>{k()}),m.addEventListener("keypress",({key:h})=>{h==="Enter"&&k()})}),r.forEach((m,g)=>{Dt(m).then(k=>{d.splice(g,1,k),l==null||l.refreshSlideContent(g)})})});D(()=>{q("wheel",()=>{l==null||l.close()}),c(),R(()=>o.value.path,()=>c())})};var Oc=en({enhance:({app:n})=>{Ic(n)},setup:()=>{Pc()}});const Vt=()=>{const n=T();return b(()=>n.value.readingTime??null)},Ka=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},Rt=(n,a)=>{const{minutes:s,words:e}=n,{less1Minute:o,word:l,time:p}=a;return{time:s<1?o:p.replace("$time",Math.round(s).toString()),words:l.replace("$word",e.toString())}},ge={words:"",time:""},St=()=>Ka?_n(Ka):b(()=>null),jc=()=>{if(typeof Ka>"u")return b(()=>ge);const n=Vt(),a=St();return b(()=>n.value&&a.value?Rt(n.value,a.value):ge)},cn=()=>bt(),I=()=>ip(),Fn=()=>b(()=>!!cn().value.pure);var qa=f({name:"EmptyComponent",setup:()=>()=>null});const Es={},Pt=n=>{const{icon:a="",color:s,size:e}=n,o={};return s&&(o.color=s),e&&(o.height=Number.isNaN(Number(e))?e:`${e}px`),zn(a)?t("img",{class:"icon",src:a,"no-view":"",style:o}):La(a)?t("img",{class:"icon",src:G(a),"no-view":"",style:o}):t(Q("FontIcon"),n)};Pt.displayName="HopeIcon";var Z=Pt,C=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(C||{}),Ot=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(Ot||{});const Cn=(n,a=!1)=>{const s=sn(),{fullPath:e,meta:o,name:l}=sa(s,encodeURI(n));return{text:!a&&o[C.shortTitle]?o[C.shortTitle]:o[C.title]||n,link:l==="404"?n:e,...o[C.icon]?{icon:o[C.icon]}:{}}},oa=()=>{const n=sn(),a=pn();return s=>{if(s)if(La(s))a.path!==s&&n.push(s);else if(zn(s)||Ie(s))window&&window.open(s);else{const e=a.path.slice(0,a.path.lastIndexOf("/"));n.push(`${e}/${encodeURI(s)}`)}}},jt=()=>{const n=I(),a=O();return b(()=>{const{author:s}=a.value;return s?Qn(s):s===!1?[]:Qn(n.value.author,!1)})},Bc=()=>{const n=O();return b(()=>Ze(n.value.category).map(a=>{var s,e;return{name:a,path:((e=(s=$(Symbol.for("categoryMap")))==null?void 0:s.value.map[a])==null?void 0:e.path)||""}}))},Cc=()=>{const n=O();return b(()=>nt(n.value.tag).map(a=>{var s,e;return{name:a,path:((e=(s=$(Symbol.for("tagMap")))==null?void 0:s.value.map[a])==null?void 0:e.path)||""}}))},Mc=()=>{const n=O(),a=T();return b(()=>{const s=ms(n.value.date);if(s)return s;const{createdTime:e}=a.value.git||{};return e?new Date(e):null})},$c=()=>{const n=I(),a=T(),s=O(),e=jt(),o=Bc(),l=Cc(),p=Mc(),c=Vt(),u=jc(),r=b(()=>({author:e.value,category:o.value,date:p.value,localizedDate:a.value.localizedDate,tag:l.value,isOriginal:s.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:u.value,pageview:"pageview"in s.value?s.value.pageview:!0})),d=b(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:r,items:d}},la=()=>{const n=cn(),a=E(!1),s=E(!1),e=()=>{a.value=window.innerWidth<=(n.value.mobileBreakPoint||719),s.value=window.innerWidth>=(n.value.pcBreakPoint||1440)};return D(()=>{e(),q("resize",e,!1),q("orientationchange",e,!1)}),{isMobile:a,isPC:s}},Bt=Symbol(""),ia=()=>{const n=$(Bt);if(!n)throw new Error("useDarkmode() is called without provider.");return n},qc=n=>{const a=cn(),s=Ai(),e=In("vuepress-theme-hope-scheme","auto"),o=b(()=>a.value.darkmode||"switch"),l=b(()=>{const c=o.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?s.value:c==="toggle"?e.value==="dark":e.value==="dark"||e.value==="auto"&&s.value}),p=b(()=>{const c=o.value;return c==="switch"||c==="toggle"});n.provide(Bt,{canToggle:p,config:o,isDarkmode:l,status:e}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},zc=()=>{const{isDarkmode:n}=ia(),a=(s=n.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");D(()=>{R(n,a,{immediate:!0})})};var W=f({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],setup(n,{attrs:a,emit:s,slots:e}){const o=pn(),l=je(),p=Hn(n,"config"),c=b(()=>zn(p.value.link)),u=b(()=>Ie(p.value.link)||al(p.value.link)),r=b(()=>u.value?void 0:p.value.target||(c.value?"_blank":void 0)),d=b(()=>r.value==="_blank"),m=b(()=>!c.value&&!u.value&&!d.value),g=b(()=>u.value?void 0:p.value.rel||(d.value?"noopener noreferrer":void 0)),k=b(()=>p.value.ariaLabel||p.value.text),h=b(()=>{if(n.exact)return!1;const y=X(l.value.locales);return y.length?y.every(_=>_!==p.value.link):p.value.link!=="/"}),w=b(()=>m.value?p.value.activeMatch?new RegExp(p.value.activeMatch).test(o.path):h.value?$n(o.path,p.value.link):o.path===p.value.link:!1);return()=>{var y,_,j;const{text:B,icon:F,link:J}=p.value;return m.value?t(H,{to:J,"aria-label":k.value,...a,class:["nav-link",{active:w.value},a.class],onFocusout:()=>s("focusout")},()=>{var S,A,x;return((S=e.default)==null?void 0:S.call(e))||[((A=e.before)==null?void 0:A.call(e))||t(Z,{icon:F}),B,(x=e.after)==null?void 0:x.call(e)]}):t("a",{href:J,rel:g.value,target:r.value,"aria-label":k.value,...a,class:["nav-link",a.class],onFocusout:()=>s("focusout")},((y=e.default)==null?void 0:y.call(e))||[((_=e.before)==null?void 0:_.call(e))||t(Z,{icon:F}),B,n.noExternalLinkIcon?null:t(gt),(j=e.after)==null?void 0:j.call(e)])}}});const qn=(n,a,s=!1)=>"activeMatch"in a?new RegExp(a.activeMatch).test(n.path):gs(n,a.link)?!0:a.children&&!s?a.children.some(e=>qn(n,e)):!1,Ct=(n,a)=>a.type==="group"?a.children.some(s=>s.type==="group"?Ct(n,s):s.type==="page"&&qn(n,s,!0))||"prefix"in a&&gs(n,a.prefix):!1,Mt=(n,a)=>Y(n.link)?t(W,{...a,config:n}):t("p",a,[t(Z,{icon:n.icon}),n.text]),$t=n=>{const a=pn();return n?t("ul",{class:"sidebar-sub-headers"},n.map(s=>{const e=qn(a,s,!0);return t("li",{class:"sidebar-sub-header"},[Mt(s,{class:["sidebar-link","heading",{active:e}]}),$t(s.children)])})):null},za=(n="",a="")=>La(a)?a:`${sl(n)}${a}`,Nc=(n,a)=>{const s=T();return{type:"heading",text:n.title,link:`${s.value.path}#${n.slug}`,children:ws(n.children,a)}},ws=(n,a)=>a>0?n.map(s=>Nc(s,a-1)):[],qt=n=>{const a=T();return ws(a.value.headers,n)},Ya=(n,a,s="")=>{const e=T(),o=(l,p=s)=>{var c;const u=Y(l)?Cn(za(p,l)):l.link?{...l,..._a(l.link)?{}:{link:Cn(za(p,l.link)).link}}:l;if("children"in u){const r=za(p,u.prefix),d=u.children==="structure"?Es[r]:u.children;return{type:"group",...u,prefix:r,children:d.map(m=>o(m,r))}}return{type:"page",...u,children:u.link===e.value.path?ws(((c=e.value.headers[0])==null?void 0:c.level)===1?e.value.headers[0].children:e.value.headers,a):[]}};return n.map(l=>o(l))},Hc=(n,a)=>{const s=T(),e=X(n).sort((o,l)=>l.length-o.length);for(const o of e)if($n(decodeURI(s.value.path),o)){const l=n[o];return l?Ya(l==="structure"?Es[o]:l==="heading"?qt(a):l,a,o):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},Fc=()=>{const n=vn(),a=O(),s=I(),e=a.value.home?!1:a.value.sidebar??s.value.sidebar??"structure",o=a.value.headerDepth??s.value.headerDepth??2;return e===!1?[]:e==="heading"?qt(o):e==="structure"?Ya(Es[n.value],o,n.value):is(e)?Ya(e,o):Yn(e)?Hc(e,o):[]},zt=Symbol(""),Jc=()=>{const n=b(()=>Fc());hn(zt,n)},As=()=>{const n=$(zt);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var Uc=f({name:"PageFooter",setup(){const n=O(),a=I(),s=jt(),e=b(()=>{const{copyright:p,footer:c}=n.value;return c!==!1&&!!(p||c||a.value.displayFooter)}),o=b(()=>{const{footer:p}=n.value;return p===!1?!1:Y(p)?p:a.value.footer||""}),l=b(()=>"copyright"in n.value?n.value.copyright:"copyright"in a.value?a.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>e.value?t("footer",{class:"footer-wrapper"},[o.value?t("div",{class:"footer",innerHTML:o.value}):null,l.value?t("div",{class:"copyright",innerHTML:l.value}):null]):null}}),Gc=f({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(n,{slots:a}){const s=T(),e=Hn(n,"config"),o=b(()=>e.value.ariaLabel||e.value.text),l=E(!1);R(()=>s.value.path,()=>{l.value=!1});const p=c=>{c.detail===0&&(l.value=!l.value)};return()=>{var c;return t("div",{class:["dropdown-wrapper",{open:l.value}]},[t("button",{type:"button",class:"dropdown-title","aria-label":o.value,onClick:p},[((c=a.title)==null?void 0:c.call(a))||t("span",{class:"title"},[t(Z,{icon:e.value.icon}),n.config.text]),t("span",{class:"arrow"}),t("ul",{class:"nav-dropdown"},e.value.children.map((u,r)=>{const d=r===e.value.children.length-1;return t("li",{class:"dropdown-item"},"children"in u?[t("h4",{class:"dropdown-subtitle"},u.link?t(W,{config:u,onFocusout:()=>{u.children.length===0&&d&&(l.value=!1)}}):t("span",u.text)),t("ul",{class:"dropdown-subitem-wrapper"},u.children.map((m,g)=>t("li",{class:"dropdown-subitem"},t(W,{config:m,onFocusout:()=>{g===u.children.length-1&&d&&(l.value=!1)}}))))]:t(W,{config:u,onFocusout:()=>{d&&(l.value=!1)}}))}))])])}}});const Nt=(n,a="")=>Y(n)?Cn(`${a}${n}`):"children"in n?{...n,...n.link&&!_a(n.link)?Cn(`${a}${n.link}`):{},children:n.children.map(s=>Nt(s,`${a}${n.prefix||""}`))}:{...n,link:_a(n.link)?n.link:Cn(`${a}${n.link}`).link},Ht=()=>b(()=>(I().value.navbar||[]).map(n=>Nt(n))),Qc=()=>{const n=I(),a=b(()=>n.value.repo||null),s=b(()=>a.value?Ql(a.value):null),e=b(()=>a.value?st(a.value):null),o=b(()=>s.value?n.value.repoLabel??(e.value===null?"Source":e.value):null);return b(()=>!s.value||!o.value||n.value.repoDisplay===!1?null:{type:e.value||"Source",label:o.value,link:s.value})};var Wc=f({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const a=T(),s=Hn(n,"config"),e=b(()=>s.value.ariaLabel||s.value.text),o=E(!1);R(()=>a.value.path,()=>{o.value=!1});const l=(p,c)=>c.at(-1)===p;return()=>[t("button",{type:"button",class:["nav-screen-dropdown-title",{active:o.value}],"aria-label":e.value,onClick:()=>{o.value=!o.value}},[t("span",{class:"title"},[t(Z,{icon:s.value.icon}),n.config.text]),t("span",{class:["arrow",o.value?"down":"end"]})]),t("ul",{class:["nav-screen-dropdown",{hide:!o.value}]},s.value.children.map(p=>t("li",{class:"dropdown-item"},"children"in p?[t("h4",{class:"dropdown-subtitle"},p.link?t(W,{config:p,onFocusout:()=>{l(p,s.value.children)&&p.children.length===0&&(o.value=!1)}}):t("span",p.text)),t("ul",{class:"dropdown-subitem-wrapper"},p.children.map(c=>t("li",{class:"dropdown-subitem"},t(W,{config:c,onFocusout:()=>{l(c,p.children)&&l(p,s.value.children)&&(o.value=!1)}}))))]:t(W,{config:p,onFocusout:()=>{l(p,s.value.children)&&(o.value=!1)}}))))]}}),Kc=f({name:"NavScreenLinks",setup(){const n=Ht();return()=>n.value.length?t("nav",{class:"nav-screen-links"},n.value.map(a=>t("div",{class:"navbar-links-item"},"children"in a?t(Wc,{config:a}):t(W,{config:a})))):null}});const Ft=()=>t(L,{name:"dark"},()=>t("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Ft.displayName="DarkIcon";const Jt=()=>t(L,{name:"light"},()=>t("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Jt.displayName="LightIcon";const Ut=()=>t(L,{name:"auto"},()=>t("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Ut.displayName="AutoIcon";const Gt=()=>t(L,{name:"enter-fullscreen"},()=>t("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Gt.displayName="EnterFullScreenIcon";const Qt=()=>t(L,{name:"cancel-fullscreen"},()=>t("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Qt.displayName="CancelFullScreenIcon";const Wt=()=>t(L,{name:"outlook"},()=>[t("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Wt.displayName="OutlookIcon";var Kt=f({name:"AppearanceSwitch",setup(){const{config:n,status:a}=ia(),s=()=>{n.value==="switch"?a.value={light:"dark",dark:"auto",auto:"light"}[a.value]:a.value=a.value==="light"?"dark":"light"};return()=>t("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[t(Ut,{style:{display:a.value==="auto"?"block":"none"}}),t(Ft,{style:{display:a.value==="dark"?"block":"none"}}),t(Jt,{style:{display:a.value==="light"?"block":"none"}})])}}),Yc=f({name:"AppearanceMode",setup(){const n=I(),{canToggle:a}=ia(),s=b(()=>n.value.outlookLocales.darkmode);return()=>a.value?t("div",{class:"appearance-wrapper"},[t("label",{class:"appearance-title",for:"appearance-switch"},s.value),t(Kt)]):null}}),Xc=f({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const a=(s="")=>{const e=document.documentElement.classList,o=X(n.themeColor).map(l=>`theme-${l}`);if(!s){localStorage.removeItem("theme"),e.remove(...o);return}e.remove(...o.filter(l=>l!==`theme-${s}`)),e.add(`theme-${s}`),localStorage.setItem("theme",s)};return D(()=>{const s=localStorage.getItem("theme");s&&a(s)}),()=>t("ul",{id:"theme-color-picker"},[t("li",t("span",{class:"theme-color",onClick:()=>a()})),aa(n.themeColor).map(([s,e])=>t("li",t("span",{style:{background:e},onClick:()=>a(s)})))])}}),Zc=f({name:"ThemeColor",setup(){const n=cn(),a=I(),s=b(()=>a.value.outlookLocales.themeColor),e=b(()=>{const{themeColor:o}=n.value;return o===!1?null:o});return()=>e.value?t("div",{class:"theme-color-wrapper"},[t("label",{class:"theme-color-title",for:"theme-color-picker"},s.value),t(Xc,{themeColor:e.value})]):null}}),Yt=f({name:"ToggleFullScreenButton",setup(){const n=I(),{isSupported:a,isFullscreen:s,toggle:e}=bs(),o=b(()=>n.value.outlookLocales.fullscreen);return()=>a?t("div",{class:"full-screen-wrapper"},[t("label",{class:"full-screen-title",for:"full-screen-switch"},o.value),t("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:s.value,onClick:()=>e()},s.value?t(Qt):t(Gt))]):null}}),Xt=f({name:"OutlookSettings",setup(){const n=cn(),a=Fn(),s=b(()=>!a.value&&!!n.value.themeColor),e=b(()=>!a.value&&n.value.fullscreen);return()=>t(Aa,()=>[s.value?t(Zc):null,t(Yc),e.value?t(Yt):null])}}),nr=f({name:"NavScreen",props:{show:Boolean},emits:["close"],setup(n,{emit:a,slots:s}){const e=T(),{isMobile:o}=la(),l=z(),p=hs(l);return D(()=>{l.value=document.body,R(o,c=>{!c&&n.show&&(p.value=!1,a("close"))}),R(()=>e.value.path,()=>{p.value=!1,a("close")})}),Xn(()=>{p.value=!1}),()=>t(Mn,{name:"fade",onEnter:()=>{p.value=!0},onAfterLeave:()=>{p.value=!1}},()=>{var c,u;return n.show?t("div",{id:"nav-screen"},t("div",{class:"container"},[(c=s.before)==null?void 0:c.call(s),t(Kc),t("div",{class:"outlook-wrapper"},t(Xt)),(u=s.after)==null?void 0:u.call(s)])):null})}}),ar=f({name:"NavbarBrand",setup(){const n=vn(),a=Zn(),s=I(),e=b(()=>s.value.home||n.value),o=b(()=>a.value.title),l=b(()=>s.value.logo?G(s.value.logo):null),p=b(()=>s.value.logoDark?G(s.value.logoDark):null);return()=>t(H,{to:e.value,class:"brand"},()=>[l.value?t("img",{class:["logo",{light:!!p.value}],src:l.value,alt:o.value}):null,p.value?t("img",{class:["logo dark"],src:p.value,alt:o.value}):null,o.value?t("span",{class:["site-name",{"hide-in-pad":l.value&&s.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),sr=f({name:"NavbarLinks",setup(){const n=Ht();return()=>n.value.length?t("nav",{class:"nav-links"},n.value.map(a=>t("div",{class:"nav-item hide-in-mobile"},"children"in a?t(Gc,{config:a}):t(W,{config:a})))):null}}),er=f({name:"RepoLink",components:{BitbucketIcon:Qe,GiteeIcon:Ge,GitHubIcon:Je,GitLabIcon:Ue,SourceIcon:We},setup(){const n=Qc();return()=>n.value?t("div",{class:"nav-item"},t("a",{class:"repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},t(Q(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Zt=({active:n=!1},{emit:a})=>t("button",{type:"button",class:["toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>a("toggle")},t("span",{class:"button-container"},[t("span",{class:"button-top"}),t("span",{class:"button-middle"}),t("span",{class:"button-bottom"})]));Zt.displayName="ToggleNavbarButton";var tr=Zt;const Xa=(n,{emit:a})=>t("button",{type:"button",class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>a("toggle")},t("span",{class:"icon"}));Xa.displayName="ToggleSidebarButton",Xa.emits=["toggle"];var or=Xa,lr=f({name:"OutlookButton",setup(){const{isSupported:n}=bs(),a=cn(),s=Fn(),e=T(),{canToggle:o}=ia(),l=E(!1),p=b(()=>!s.value&&!!a.value.themeColor),c=b(()=>!s.value&&a.value.fullscreen&&n);return R(()=>e.value.path,()=>{l.value=!1}),()=>o.value||c.value||p.value?t("div",{class:"nav-item hide-in-mobile"},o.value&&!c.value&&!p.value?t(Kt):c.value&&!o.value&&!p.value?t(Yt):t("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[t(Wt),t("div",{class:"outlook-dropdown"},t(Xt))])):null}}),ir=f({name:"NavBar",emits:["toggleSidebar"],setup(n,{emit:a,slots:s}){const e=I(),{isMobile:o}=la(),l=E(!1),p=b(()=>{const{navbarAutoHide:d="mobile"}=e.value;return d!=="none"&&(d==="always"||o.value)}),c=b(()=>e.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),u={Brand:ar,Language:qa,Links:sr,Repo:er,Outlook:lr,Search:ln("Docsearch")?Q("Docsearch"):ln("SearchBox")?Q("SearchBox"):qa},r=d=>u[d]??(ln(d)?Q(d):qa);return()=>{var d,m,g,k,h,w;return[t("header",{class:["navbar",{"auto-hide":p.value,"hide-icon":e.value.navbarIcon===!1}],id:"navbar"},[t("div",{class:"navbar-start"},[t(or,{onToggle:()=>{l.value&&(l.value=!1),a("toggleSidebar")}}),(d=s.startBefore)==null?void 0:d.call(s),(c.value.start||[]).map(y=>t(r(y))),(m=s.startAfter)==null?void 0:m.call(s)]),t("div",{class:"navbar-center"},[(g=s.centerBefore)==null?void 0:g.call(s),(c.value.center||[]).map(y=>t(r(y))),(k=s.centerAfter)==null?void 0:k.call(s)]),t("div",{class:"navbar-end"},[(h=s.endBefore)==null?void 0:h.call(s),(c.value.end||[]).map(y=>t(r(y))),(w=s.endAfter)==null?void 0:w.call(s),t(tr,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),t(nr,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var y;return(y=s.screenTop)==null?void 0:y.call(s)},after:()=>{var y;return(y=s.screenBottom)==null?void 0:y.call(s)}})]}}}),pr=f({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const a=pn();return()=>[Mt(n.config,{class:["sidebar-link",`sidebar-${n.config.type}`,{active:qn(a,n.config,!0)}],exact:!0}),$t(n.config.children)]}}),cr=f({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:a}){const s=pn(),e=b(()=>qn(s,n.config)),o=b(()=>qn(s,n.config,!0));return()=>{const{collapsible:l,children:p=[],icon:c,prefix:u,link:r,text:d}=n.config;return t("section",{class:"sidebar-group"},[t(l?"button":"p",{class:["sidebar-heading",{clickable:l||r,exact:o.value,active:e.value}],...l?{type:"button",onClick:()=>a("toggle"),onKeydown:m=>{m.key==="Enter"&&a("toggle")}}:{}},[t(Z,{icon:c}),r?t(W,{class:"title",config:{text:d,link:r},noExternalLinkIcon:!0}):t("span",{class:"title"},d),l?t("span",{class:["arrow",n.open?"down":"end"]}):null]),n.open||!l?t(no,{key:u,config:p}):null])}}}),no=f({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const a=pn(),s=E(-1),e=o=>{s.value=o===s.value?-1:o};return R(()=>a.path,()=>{const o=n.config.findIndex(l=>Ct(a,l));s.value=o},{immediate:!0,flush:"post"}),()=>t("ul",{class:"sidebar-links"},n.config.map((o,l)=>t("li",o.type==="group"?t(cr,{config:o,open:l===s.value,onToggle:()=>e(l)}):t(pr,{config:o}))))}}),rr=f({name:"SideBar",setup(n,{slots:a}){const s=pn(),e=I(),o=As(),l=z();return D(()=>{R(()=>s.hash,p=>{const c=document.querySelector(`.sidebar a.sidebar-link[href="${s.path}${p}"]`);if(!c)return;const{top:u,height:r}=l.value.getBoundingClientRect(),{top:d,height:m}=c.getBoundingClientRect();d<u?c.scrollIntoView(!0):d+m>u+r&&c.scrollIntoView(!1)})}),()=>{var p,c,u;return t("aside",{class:["sidebar",{"hide-icon":e.value.sidebarIcon===!1}],id:"sidebar",ref:l},[(p=a.top)==null?void 0:p.call(a),((c=a.default)==null?void 0:c.call(a))||t(no,{config:o.value}),(u=a.bottom)==null?void 0:u.call(a)])}}}),xs=f({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},setup(n,{slots:a}){const s=sn(),e=T(),o=O(),l=I(),{isMobile:p,isPC:c}=la(),[u,r]=Wa(!1),[d,m]=Wa(!1),g=As(),k=E(!1),h=b(()=>n.noNavbar||o.value.navbar===!1||l.value.navbar===!1?!1:!!(e.value.title||l.value.logo||l.value.repo||l.value.navbar)),w=b(()=>n.noSidebar?!1:o.value.sidebar!==!1&&g.value.length!==0&&!o.value.home),y=b(()=>n.noToc||o.value.home?!1:o.value.toc||l.value.toc!==!1&&o.value.toc!==!1),_={x:0,y:0},j=S=>{_.x=S.changedTouches[0].clientX,_.y=S.changedTouches[0].clientY},B=S=>{const A=S.changedTouches[0].clientX-_.x,x=S.changedTouches[0].clientY-_.y;Math.abs(A)>Math.abs(x)*1.5&&Math.abs(A)>40&&(A>0&&_.x<=80?r(!0):r(!1))},F=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let J=0;return q("scroll",Zl(()=>{const S=F();S<=58||S<J?k.value=!1:J+200<S&&!u.value&&(k.value=!0),J=S},300,!0)),R(p,S=>{S||r(!1)}),D(()=>{const S=hs(document.body);R(u,x=>{S.value=x});const A=s.afterEach(()=>{r(!1)});Xn(()=>{S.value=!1,A()})}),()=>t(ln("GlobalEncrypt")?Q("GlobalEncrypt"):Fe,()=>{var S;return t("div",{class:["theme-container",{"no-navbar":!h.value,"no-sidebar":!w.value&&!(a.sidebar||a.sidebarTop||a.sidebarBottom),"has-toc":y.value,"hide-navbar":k.value,"sidebar-collapsed":!p.value&&!c.value&&d.value,"sidebar-open":p.value&&u.value},o.value.containerClass||""],onTouchStart:j,onTouchEnd:B},[h.value?t(ir,{onToggleSidebar:()=>r()},{startBefore:()=>{var A;return(A=a.navbarStartBefore)==null?void 0:A.call(a)},startAfter:()=>{var A;return(A=a.navbarStartAfter)==null?void 0:A.call(a)},centerBefore:()=>{var A;return(A=a.navbarCenterBefore)==null?void 0:A.call(a)},centerAfter:()=>{var A;return(A=a.navbarCenterAfter)==null?void 0:A.call(a)},endBefore:()=>{var A;return(A=a.navbarEndBefore)==null?void 0:A.call(a)},endAfter:()=>{var A;return(A=a.navbarEndAfter)==null?void 0:A.call(a)},screenTop:()=>{var A;return(A=a.navScreenTop)==null?void 0:A.call(a)},screenBottom:()=>{var A;return(A=a.navScreenBottom)==null?void 0:A.call(a)}}):null,t(Mn,{name:"fade"},()=>u.value?t("div",{class:"sidebar-mask",onClick:()=>r(!1)}):null),t(Mn,{name:"fade"},()=>p.value?null:t("div",{class:"toggle-sidebar-wrapper",onClick:()=>m()},t("span",{class:["arrow",d.value?"end":"start"]}))),t(rr,{},{...a.sidebar?{default:()=>{var A;return(A=a.sidebar)==null?void 0:A.call(a)}}:{},top:()=>{var A;return(A=a.sidebarTop)==null?void 0:A.call(a)},bottom:()=>{var A;return(A=a.sidebarBottom)==null?void 0:A.call(a)}}),(S=a.default)==null?void 0:S.call(a),t(Uc)])})}}),P=f({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(n,{slots:a}){const s=o=>{o.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,o.style.transform="translateY(-20px)",o.style.opacity="0"},e=o=>{o.style.transform="translateY(0)",o.style.opacity="1"};return()=>t(n.type==="single"?Mn:nl,{name:"drop",appear:n.appear,onAppear:s,onAfterAppear:e,onEnter:s,onAfterEnter:e,onBeforeLeave:s},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}});const Za=({custom:n})=>t(us,{class:["theme-hope-content",{custom:n}]});Za.displayName="MarkdownContent",Za.props={custom:Boolean};var Ls=Za;const ao=()=>t(L,{name:"author"},()=>t("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));ao.displayName="AuthorIcon";const so=()=>t(L,{name:"calendar"},()=>t("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));so.displayName="CalendarIcon";const eo=()=>t(L,{name:"category"},()=>t("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));eo.displayName="CategoryIcon";const to=()=>t(L,{name:"print"},()=>t("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));to.displayName="PrintIcon";const oo=()=>t(L,{name:"tag"},()=>t("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));oo.displayName="TagIcon";const lo=()=>t(L,{name:"timer"},()=>t("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));lo.displayName="TimerIcon";const io=()=>t(L,{name:"word"},()=>[t("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),t("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);io.displayName="WordIcon";const En=()=>{const n=I();return b(()=>n.value.metaLocales)};var ur=f({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const a=En();return()=>n.author.length?t("span",{class:"page-author-info","aria-label":`${a.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(ao),t("span",n.author.map(s=>s.url?t("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):t("span",{class:"page-author-item"},s.name))),t("span",{property:"author",content:n.author.map(s=>s.name).join(", ")})]):null}}),dr=f({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const a=sn(),s=T(),e=En(),o=(l,p="")=>{p&&s.value.path!==p&&(l.preventDefault(),a.push(p))};return()=>n.category.length?t("span",{class:"page-category-info","aria-label":`${e.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(eo),n.category.map(({name:l,path:p})=>t("span",{class:["page-category-item",{[`category${xa(l,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:c=>o(c,p)},l)),t("meta",{property:"articleSection",content:n.category.map(({name:l})=>l).join(",")})]):null}}),vr=f({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const a=cs(),s=En();return()=>n.date?t("span",{class:"page-date-info","aria-label":`${s.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(so),t("span",t(Aa,()=>n.localizedDate||n.date.toLocaleDateString(a.value))),t("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),mr=f({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const a=En();return()=>n.isOriginal?t("span",{class:"page-original-info"},a.value.origin):null}}),gr=f({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const a=En(),s=b(()=>{if(!n.readingTime)return null;const{minutes:e}=n.readingTime;return e<1?"PT1M":`PT${Math.round(e)}M`});return()=>{var e,o;return(e=n.readingTimeLocale)!=null&&e.time?t("span",{class:"page-reading-time-info","aria-label":`${a.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(lo),t("span",(o=n.readingTimeLocale)==null?void 0:o.time),t("meta",{property:"timeRequired",content:s.value})]):null}}}),kr=f({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const a=sn(),s=T(),e=En(),o=(l,p="")=>{p&&s.value.path!==p&&(l.preventDefault(),a.push(p))};return()=>n.tag.length?t("span",{class:"page-tag-info","aria-label":`${e.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(oo),n.tag.map(({name:l,path:p})=>t("span",{class:["page-tag-item",{[`tag${xa(l,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:c=>o(c,p)},l)),t("meta",{property:"keywords",content:n.tag.map(({name:l})=>l).join(",")})]):null}}),br=f({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const a=En();return()=>{var s,e,o;return(s=n.readingTimeLocale)!=null&&s.words?t("span",{class:"page-word-info","aria-label":`${a.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[t(io),t("span",(e=n.readingTimeLocale)==null?void 0:e.words),t("meta",{property:"wordCount",content:(o=n.readingTime)==null?void 0:o.words})]):null}}}),po=f({name:"PageInfo",components:{AuthorInfo:ur,CategoryInfo:dr,DateInfo:vr,OriginalInfo:mr,PageViewInfo:()=>null,ReadingTimeInfo:gr,TagInfo:kr,WordInfo:br},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const a=Fn();return()=>n.items?t("div",{class:"page-info"},n.items.map(s=>t(Q(`${s}Info`),{...n.info,pure:a.value}))):null}}),hr=f({name:"PrintButton",setup(){const n=cn(),a=I();return()=>n.value.print===!1?null:t("button",{type:"button",class:"print-button",title:a.value.metaLocales.print,onClick:()=>{window.print()}},t(to))}});const fr=({title:n,level:a,slug:s})=>t(H,{to:`#${s}`,class:["toc-link",`level${a}`]},()=>n),ns=(n,a)=>{const s=pn();return n.length&&a>0?t("ul",{class:"toc-list"},n.map(e=>{const o=ns(e.children,a-1);return[t("li",{class:["toc-item",{active:gs(s,`#${e.slug}`)}]},fr(e)),o?t("li",o):null]})):null};var co=f({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(n,{slots:a}){const s=pn(),e=T(),o=En(),l=z(),p=E("-1.7rem"),c=r=>{var d;(d=l.value)==null||d.scrollTo({top:r,behavior:"smooth"})},u=()=>{if(l.value){const r=document.querySelector(".toc-item.active");r?p.value=`${r.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:p.value="-1.7rem"}else p.value="-1.7rem"};return D(()=>{R(()=>s.hash,r=>{if(l.value){const d=document.querySelector(`#toc a.toc-link[href$="${r}"]`);if(!d)return;const{top:m,height:g}=l.value.getBoundingClientRect(),{top:k,height:h}=d.getBoundingClientRect();k<m?c(l.value.scrollTop+k-m):k+h>m+g&&c(l.value.scrollTop+k+h-m-g)}}),R(()=>s.fullPath,()=>u(),{flush:"post",immediate:!0})}),()=>{var r,d;const m=n.items.length?ns(n.items,n.headerDepth):e.value.headers?ns(e.value.headers,n.headerDepth):null;return m?t("div",{class:"toc-place-holder"},[t("aside",{id:"toc"},[(r=a.before)==null?void 0:r.call(a),t("div",{class:"toc-header"},[o.value.toc,t(hr)]),t("div",{class:"toc-wrapper",ref:l},[m,t("div",{class:"toc-marker",style:{top:p.value}})]),(d=a.after)==null?void 0:d.call(a)])]):null}}}),Is=f({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const a=T(),s=I(),e=z(),o=({target:l})=>{const p=document.querySelector(l.hash);if(p){const c=()=>{p.removeAttribute("tabindex"),p.removeEventListener("blur",c)};p.setAttribute("tabindex","-1"),p.addEventListener("blur",c),p.focus(),window.scrollTo(0,0)}};return D(()=>{R(()=>a.value.path,()=>e.value.focus())}),()=>[t("span",{ref:e,tabindex:"-1"}),t("a",{href:`#${n.content}`,class:"skip-link sr-only",onClick:o},s.value.routeLocales.skipToContent)]}});let Na=null,ba=null;const _r={wait:()=>Na,pending:()=>{Na=new Promise(n=>ba=n)},resolve:()=>{ba==null||ba(),Na=null,ba=null}},ro=()=>_r;var uo=f({name:"FadeSlideY",setup(n,{slots:a}){const{resolve:s,pending:e}=ro();return()=>t(Mn,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:e},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),yr=f({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(n){return()=>t("div",{class:"feature-panel"},[n.header?t("h2",{class:"feature-header"},n.header):null,n.items.length?t("div",{class:"feature-wrapper"},n.items.map(a=>{const s=[t("h3",[t(Z,{icon:a.icon}),t("span",{innerHTML:a.title})]),t("p",{innerHTML:a.details})];return a.link?_a(a.link)?t("a",{class:"feature-item link",href:a.link,role:"navigation","aria-label":a.title,target:"_blank"},s):t(H,{class:"feature-item link",to:a.link,role:"navigation","aria-label":a.title},()=>s):t("div",{class:"feature-item"},s)})):null])}}),Er=f({name:"HeroInfo",setup(n,{slots:a}){const s=O(),e=Zn(),o=b(()=>s.value.heroText===!1?!1:s.value.heroText||e.value.title||"Hello"),l=b(()=>s.value.tagline===!1?!1:s.value.tagline||e.value.description||"Welcome to your VuePress site"),p=b(()=>s.value.heroImage?G(s.value.heroImage):null),c=b(()=>s.value.heroImageDark?G(s.value.heroImageDark):null),u=b(()=>s.value.heroAlt||o.value||"hero"),r=b(()=>s.value.actions??[]);return()=>{var d,m;return t("header",{class:"hero-info-wrapper"},[((d=a.heroImage)==null?void 0:d.call(a))||t(P,{appear:!0,type:"group"},()=>[p.value?t("img",{key:"light",class:{light:c.value},src:p.value,alt:u.value}):null,c.value?t("img",{key:"dark",class:"dark",src:c.value,alt:u.value}):null]),((m=a.heroInfo)==null?void 0:m.call(a))||t("div",{class:"hero-info"},[o.value?t(P,{appear:!0,delay:.04},()=>t("h1",{id:"main-title"},o.value)):null,l.value?t(P,{appear:!0,delay:.08},()=>t("p",{class:"description"},l.value)):null,r.value.length?t(P,{appear:!0,delay:.12},()=>t("p",{class:"actions"},r.value.map(g=>t(W,{class:["action-button",g.type||"default"],config:g,noExternalLinkIcon:!0})))):null])])}}}),wr=f({name:"HopePage",setup(n,{slots:a}){const s=Fn(),e=O(),o=b(()=>{const{features:l}=e.value;return is(l)?l.some(p=>!("items"in p))?[{items:l}]:l:[]});return()=>{var l,p,c;return t("main",{class:["home project",{pure:s.value}],id:"main-content","aria-labelledby":e.value.heroText===null?void 0:"main-title"},[(l=a.top)==null?void 0:l.call(a),t(Er),o.value.map(({header:u="",items:r},d)=>t(P,{appear:!0,delay:.16+d*.08},()=>t(yr,{header:u,items:r}))),(p=a.center)==null?void 0:p.call(a),t(P,{appear:!0,delay:.16+o.value.length*.08},()=>t(Ls)),(c=a.bottom)==null?void 0:c.call(a)])}}});const Ar=(n,a)=>{const s=n.replace(a,"/").split("/"),e=[];let o=ps(a);return s.forEach((l,p)=>{p!==s.length-1?(o+=`${l}/`,e.push(o)):l!==""&&(o+=l,e.push(o))}),e};var xr=f({name:"BreadCrumb",setup(){const n=sn(),a=T(),s=vn(),e=O(),o=I(),l=z([]),p=b(()=>(e.value.breadcrumb||e.value.breadcrumb!==!1&&o.value.breadcrumb!==!1)&&l.value.length>1),c=b(()=>e.value.breadcrumbIcon||e.value.breadcrumbIcon!==!1&&o.value.breadcrumbIcon!==!1),u=()=>{const r=n.getRoutes(),d=Ar(a.value.path,s.value).map(m=>{const g=r.find(k=>k.path===m);if(g){const{meta:k,path:h}=sa(n,g.path),w=k[C.shortTitle]||k[C.title];if(w)return{title:w,icon:k[C.icon],path:h}}return null}).filter(m=>m!==null);d.length>1&&(l.value=d)};return D(()=>{u(),R(()=>a.value.path,u)}),()=>t("nav",{class:["breadcrumb",{disable:!p.value}]},p.value?t("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},l.value.map((r,d)=>t("li",{class:{"is-active":l.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[t(H,{to:r.path,property:"item",typeof:"WebPage"},()=>[c.value?t(Z,{icon:r.icon}):null,t("span",{property:"name"},r.title||"Unknown")]),t("meta",{property:"position",content:d+1})]))):[])}});const ke=n=>n===!1?!1:Y(n)?Cn(n,!0):Yn(n)?n:null,as=(n,a,s)=>{const e=n.findIndex(o=>o.link===a);if(e!==-1){const o=n[e+s];return o!=null&&o.link?o:null}for(const o of n)if(o.children){const l=as(o.children,a,s);if(l)return l}return null};var Lr=f({name:"PageNav",setup(){const n=I(),a=O(),s=As(),e=T(),o=oa(),l=b(()=>{const c=ke(a.value.prev);return c===!1?null:c||(n.value.prevLink===!1?null:as(s.value,e.value.path,-1))}),p=b(()=>{const c=ke(a.value.next);return c===!1?null:c||(n.value.nextLink===!1?null:as(s.value,e.value.path,1))});return q("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?p.value&&(o(p.value.link),c.preventDefault()):c.key==="ArrowLeft"&&l.value&&(o(l.value.link),c.preventDefault()))}),()=>l.value||p.value?t("nav",{class:"page-nav"},[l.value?t(W,{class:"prev",config:l.value},()=>{var c,u;return[t("div",{class:"hint"},[t("span",{class:"arrow start"}),n.value.metaLocales.prev]),t("div",{class:"link"},[t(Z,{icon:(c=l.value)==null?void 0:c.icon}),(u=l.value)==null?void 0:u.text])]}):null,p.value?t(W,{class:"next",config:p.value},()=>{var c,u;return[t("div",{class:"hint"},[n.value.metaLocales.next,t("span",{class:"arrow end"})]),t("div",{class:"link"},[(c=p.value)==null?void 0:c.text,t(Z,{icon:(u=p.value)==null?void 0:u.icon})])]}):null]):null}});const Ir={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Tr=({docsRepo:n,docsBranch:a,docsDir:s,filePathRelative:e,editLinkPattern:o})=>{if(!e)return null;const l=st(n);let p;return o?p=o:l!==null&&(p=Ir[l]),p?p.replace(/:repo/,zn(n)?n:`https://github.com/${n}`).replace(/:branch/,a).replace(/:path/,Le(`${ps(s)}/${e}`)):null},Dr=()=>{const n=I(),a=T(),s=O();return b(()=>{const{repo:e,docsRepo:o=e,docsBranch:l="main",docsDir:p="",editLink:c,editLinkPattern:u=""}=n.value;if(!(s.value.editLink??c??!0)||!o)return null;const r=Tr({docsRepo:o,docsBranch:l,docsDir:p,editLinkPattern:u,filePathRelative:a.value.filePathRelative});return r?{text:n.value.metaLocales.editLink,link:r}:null})},Vr=()=>{const n=Zn(),a=I(),s=T(),e=O();return b(()=>{var o,l;return!(e.value.lastUpdated??a.value.lastUpdated??!0)||!((o=s.value.git)!=null&&o.updatedTime)?null:new Date((l=s.value.git)==null?void 0:l.updatedTime).toLocaleString(n.value.lang)})},Rr=()=>{const n=I(),a=T(),s=O();return b(()=>{var e;return s.value.contributors??n.value.contributors??!0?((e=a.value.git)==null?void 0:e.contributors)??null:null})};var Sr=f({name:"PageTitle",setup(){const n=T(),a=O(),s=I(),{info:e,items:o}=$c();return()=>t("div",{class:"page-title"},[t("h1",[s.value.titleIcon===!1?null:t(Z,{icon:a.value.icon}),n.value.title]),t(po,{info:e.value,...o.value===null?{}:{items:o.value}}),t("hr")])}});const vo=()=>t(L,{name:"edit"},()=>[t("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),t("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);vo.displayName="EditIcon";var Pr=f({name:"PageMeta",setup(){const n=I(),a=Dr(),s=Vr(),e=Rr();return()=>{const{metaLocales:o}=n.value;return t("footer",{class:"page-meta"},[a.value?t("div",{class:"meta-item edit-link"},t(W,{class:"label",config:a.value},{before:()=>t(vo)})):null,t("div",{class:"meta-item git-info"},[s.value?t("div",{class:"update-time"},[t("span",{class:"label"},`${o.lastUpdated}: `),t(Aa,()=>t("span",{class:"info"},s.value))]):null,e.value&&e.value.length?t("div",{class:"contributors"},[t("span",{class:"label"},`${o.contributors}: `),e.value.map(({email:l,name:p},c)=>[t("span",{class:"contributor",title:`email: ${l}`},p),c!==e.value.length-1?",":""])]):null])])}}}),Or=f({name:"NormalPage",setup(n,{slots:a}){const s=O(),e=T(),{isDarkmode:o}=ia(),l=I(),p=b(()=>s.value.toc||s.value.toc!==!1&&l.value.toc!==!1);return()=>t("main",{class:"page",id:"main-content"},t(ln("LocalEncrypt")?Q("LocalEncrypt"):Fe,()=>{var c,u,r,d;return[(c=a.top)==null?void 0:c.call(a),s.value.cover?t("img",{class:"page-cover",src:s.value.cover,alt:e.value.title,"no-view":""}):null,t(xr),t(Sr),p.value?t(co,{headerDepth:s.value.headerDepth??l.value.headerDepth??2},{before:()=>{var m;return(m=a.tocBefore)==null?void 0:m.call(a)},after:()=>{var m;return(m=a.tocAfter)==null?void 0:m.call(a)}}):null,(u=a.contentBefore)==null?void 0:u.call(a),t(Ls),(r=a.contentAfter)==null?void 0:r.call(a),t(Pr),t(Lr),ln("CommentService")?t(Q("CommentService"),{darkmode:o.value}):null,(d=a.bottom)==null?void 0:d.call(a)]}))}}),jr=f({name:"Layout",setup(){const n=cn(),a=I(),s=T(),e=O(),{isMobile:o}=la(),l=b(()=>{var p,c;return((p=a.value.blog)==null?void 0:p.sidebarDisplay)||((c=n.value.blog)==null?void 0:c.sidebarDisplay)||"mobile"});return()=>[t(Is),t(xs,{},{default:()=>e.value.home?t(wr):t(uo,()=>t(Or,{key:s.value.path})),...l.value!=="none"?{navScreenBottom:()=>t(Q("BloggerInfo"))}:{},...!o.value&&l.value==="always"?{sidebar:()=>t(Q("BloggerInfo"))}:{}})]}}),Br=f({name:"NotFoundHint",setup(){const n=I(),a=()=>{const s=n.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>t("div",{class:"not-found-hint"},[t("p",{class:"error-code"},"404"),t("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),t("p",{class:"error-hint"},a())])}}),Cr=f({name:"NotFound",setup(n,{slots:a}){const s=vn(),e=I(),{navigate:o}=el({to:e.value.home??s.value});return()=>[t(Is),t(xs,{noSidebar:!0},()=>{var l;return t("main",{class:"page not-found",id:"main-content"},((l=a.default)==null?void 0:l.call(a))||[t(Br),t("div",{class:"actions"},[t("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),t("button",{type:"button",class:"action-button",onClick:()=>o()},e.value.routeLocales.home)])])})]}});const Mr={BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>',Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>',Zhihu:'<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#006CE2"/><path fill="#fff" d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z"/></svg>'},$r={category:{"/":{path:"/category/",map:{Guide:{path:"/category/guide/",keys:["v-14c69af4","v-f0383c18","v-744e35e2","v-f785aee2"]},Redis:{path:"/category/redis/",keys:["v-bce49b2e","v-df48c1ce","v-dbdf1090","v-d8755f52","v-d50bae14","v-d1a1fcd6","v-ce384b98","v-cace9a5a","v-c764e91c","v-b97ae9f0","v-b61138b2","v-b2a78774","v-af3dd636","v-abd424f8","v-a86a73ba","v-a500c27c","v-a197113e"]},Java:{path:"/category/java/",keys:["v-e17274d6","v-c93c9174","v-422c02b4","v-131b2324","v-58be56fd","v-b231bd26","v-385b501e","v-da4a4d7e","v-06bb7d66","v-532671a0","v-7c1a6ef8","v-7dcf4797","v-7f842036","v-8ded9d8e","v-1bfdd03a","v-1db2a8d9","v-1f678178","v-211c5a17","v-22d132b6","v-24860b55","v-263ae3f4","v-27efbc93","v-29a49532"]},Linux:{path:"/category/linux/",keys:["v-576433ce","v-4b724775","v-4d272014","v-4edbf8b3","v-5090d152","v-5245a9f1","v-53fa8290","v-55af5b2f","v-59190c6d"]},Vue:{path:"/category/vue/",keys:["v-10ee9fe3","v-7e2cd684","v-aa48a166","v-60a6eec9","v-7a4f6454","v-7d186846","v-4d748153","v-b121e072","v-2214300c","v-7a8e7ed8","v-19bd6236","v-381488f6","v-fa0aa7e8","v-d16aeff8","v-76277fd2","v-6135ec46","v-3dec9618","v-857decfc","v-3ca00cf4","v-759a5651","v-2094ea4f","v-32a97c7e","v-6592ca48","v-2270865e"]},Git:{path:"/category/git/",keys:["v-b6dae362","v-241b801a","v-b3713224","v-b00780e6","v-ac9dcfa8","v-a9341e6a","v-a5ca6d2c","v-a260bbee","v-9ef70ab0","v-9b8d5972"]},IDEA:{path:"/category/idea/",keys:["v-f6890b56","v-f31f5a18","v-efb5a8da","v-ec4bf79c","v-e8e2465e","v-e5789520"]},JDK:{path:"/category/jdk/",keys:["v-a60ce25e"]},Maven:{path:"/category/maven/",keys:["v-3270aac6","v-2f06f988"]},NodeJS:{path:"/category/nodejs/",keys:["v-e4d8f156"]},PLSQL:{path:"/category/plsql/",keys:["v-3d20ce8f"]},PowerDesigner:{path:"/category/powerdesigner/",keys:["v-3c366b53"]},"【VSCode】":{path:"/category/%E3%80%90vscode%E3%80%91/",keys:["v-de420796"]},MySQL:{path:"/category/mysql/",keys:["v-4b5a535b","v-20231c67","v-21d7f506","v-238ccda5","v-2541a644","v-26f67ee3","v-28ab5782","v-4d0f2bfa","v-4ec40499","v-5078dd38","v-522db5d7","v-53e28e76","v-55976715","v-574c3fb4","v-59011853","v-095e9d25"]},Docker:{path:"/category/docker/",keys:["v-3c0140d3","v-3db61972","v-3f6af211","v-411fcab0","v-42d4a34f","v-44897bee","v-463e548d"]},常用框架:{path:"/category/%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6/",keys:["v-96974d2e","v-932d9bf0","v-8fc3eab2","v-8c5a3974","v-88f08836","v-8586d6f8","v-6dbc1b3a","v-6a5269fc","v-66e8b8be","v-637f0780","v-665eceea","v-62f51dac","v-5f8b6c6e","v-5c21bb30","v-58b809f2","v-554e58b4","v-51e4a776","v-4e7af638","v-4b1144fa","v-646d6d2f","v-662245ce","v-67d71e6d","v-698bf70c","v-6b40cfab","v-6cf5a84a","v-62ffa9cd","v-64b4826c","v-66695b0b","v-3cfc1797","v-3eb0f036","v-4065c8d5","v-421aa174","v-43cf7a13","v-458452b2","v-11167db8","v-204f2809","v-2d5e72f7","v-37492b80","v-63fec628"]}}}},tag:{"/":{path:"/tag/",map:{Redis:{path:"/tag/redis/",keys:["v-bce49b2e","v-df48c1ce","v-dbdf1090","v-d8755f52","v-d50bae14","v-d1a1fcd6","v-ce384b98","v-cace9a5a","v-c764e91c","v-b97ae9f0","v-b61138b2","v-b2a78774","v-af3dd636","v-abd424f8","v-a86a73ba","v-a500c27c","v-a197113e"]},"Java 基础":{path:"/tag/java-%E5%9F%BA%E7%A1%80/",keys:["v-e17274d6","v-c93c9174","v-422c02b4","v-131b2324","v-58be56fd","v-a57a2242","v-b231bd26","v-385b501e","v-da4a4d7e","v-06bb7d66","v-532671a0","v-7c1a6ef8","v-7dcf4797","v-7f842036","v-8ded9d8e"]},JDBC:{path:"/tag/jdbc/",keys:["v-1bfdd03a","v-1db2a8d9","v-1f678178","v-211c5a17","v-22d132b6","v-24860b55","v-263ae3f4","v-27efbc93","v-29a49532"]},"Linux 入门":{path:"/tag/linux-%E5%85%A5%E9%97%A8/",keys:["v-576433ce","v-4b724775","v-4d272014","v-4edbf8b3","v-5090d152","v-5245a9f1","v-53fa8290","v-55af5b2f","v-59190c6d"]},Vue:{path:"/tag/vue/",keys:["v-10ee9fe3","v-7e2cd684","v-aa48a166","v-60a6eec9","v-7a4f6454","v-7d186846","v-4d748153","v-b121e072","v-2214300c","v-7a8e7ed8","v-19bd6236","v-381488f6","v-fa0aa7e8","v-d16aeff8","v-76277fd2","v-6135ec46","v-3dec9618","v-857decfc","v-3ca00cf4","v-759a5651","v-2094ea4f","v-32a97c7e","v-6592ca48","v-2270865e"]},Git:{path:"/tag/git/",keys:["v-b6dae362","v-241b801a","v-b3713224","v-b00780e6","v-ac9dcfa8","v-a9341e6a","v-a5ca6d2c","v-a260bbee","v-9ef70ab0","v-9b8d5972"]},IDEA:{path:"/tag/idea/",keys:["v-f6890b56","v-f31f5a18","v-efb5a8da","v-ec4bf79c","v-e8e2465e","v-e5789520"]},JDK:{path:"/tag/jdk/",keys:["v-a60ce25e"]},Maven:{path:"/tag/maven/",keys:["v-3270aac6","v-2f06f988"]},NodeJS:{path:"/tag/nodejs/",keys:["v-e4d8f156"]},PLSQL:{path:"/tag/plsql/",keys:["v-3d20ce8f"]},PowerDesigner:{path:"/tag/powerdesigner/",keys:["v-3c366b53"]},"【VSCode】":{path:"/tag/%E3%80%90vscode%E3%80%91/",keys:["v-de420796"]},"MySQL 基础":{path:"/tag/mysql-%E5%9F%BA%E7%A1%80/",keys:["v-4b5a535b","v-20231c67","v-21d7f506","v-238ccda5","v-2541a644","v-26f67ee3","v-28ab5782","v-4d0f2bfa","v-4ec40499","v-5078dd38","v-522db5d7","v-53e28e76","v-55976715","v-574c3fb4","v-59011853"]},"MySQL 安装":{path:"/tag/mysql-%E5%AE%89%E8%A3%85/",keys:["v-095e9d25"]},"Docker 基础":{path:"/tag/docker-%E5%9F%BA%E7%A1%80/",keys:["v-3c0140d3","v-3db61972","v-3f6af211","v-411fcab0","v-42d4a34f","v-44897bee","v-463e548d"]},MyBatis:{path:"/tag/mybatis/",keys:["v-6dbc1b3a","v-6a5269fc","v-66e8b8be","v-637f0780"]},"MyBatis-Plus":{path:"/tag/mybatis-plus/",keys:["v-665eceea","v-62f51dac","v-5f8b6c6e","v-5c21bb30","v-58b809f2","v-554e58b4","v-51e4a776","v-4e7af638","v-4b1144fa"]},SpringMVC:{path:"/tag/springmvc/",keys:["v-646d6d2f","v-662245ce","v-67d71e6d","v-698bf70c","v-6b40cfab","v-6cf5a84a"]},"Spring 注解":{path:"/tag/spring-%E6%B3%A8%E8%A7%A3/",keys:["v-96974d2e","v-932d9bf0","v-8fc3eab2","v-8c5a3974","v-88f08836","v-8586d6f8"]},Spring:{path:"/tag/spring/",keys:["v-11167db8","v-204f2809","v-2d5e72f7","v-37492b80","v-63fec628"]},"SpringBoot 基础":{path:"/tag/springboot-%E5%9F%BA%E7%A1%80/",keys:["v-62ffa9cd","v-64b4826c","v-66695b0b"]},"SpringBoot 核心":{path:"/tag/springboot-%E6%A0%B8%E5%BF%83/",keys:["v-3cfc1797","v-3eb0f036","v-4065c8d5","v-421aa174","v-43cf7a13","v-458452b2"]}}}}},qr={article:{"/":{path:"/article/",keys:["v-184f4da6","v-2e3eac9e","v-2e25198a","v-72a9c1e2","v-14c69af4","v-f0383c18","v-744e35e2","v-f785aee2","v-e17274d6","v-c93c9174","v-422c02b4","v-131b2324","v-58be56fd","v-a57a2242","v-b231bd26","v-385b501e","v-da4a4d7e","v-06bb7d66","v-532671a0","v-7c1a6ef8","v-7dcf4797","v-7f842036","v-8ded9d8e","v-576433ce","v-10ee9fe3","v-7e2cd684","v-aa48a166","v-60a6eec9","v-7a4f6454","v-7d186846","v-4d748153","v-b121e072","v-2214300c","v-7a8e7ed8","v-19bd6236","v-381488f6","v-fa0aa7e8","v-d16aeff8","v-76277fd2","v-6135ec46","v-3dec9618","v-857decfc","v-3ca00cf4","v-759a5651","v-2094ea4f","v-32a97c7e","v-6592ca48","v-2270865e","v-3c0140d3","v-3db61972","v-3f6af211","v-411fcab0","v-42d4a34f","v-44897bee","v-463e548d","v-a60ce25e","v-e4d8f156","v-3d20ce8f","v-3c366b53","v-bce49b2e","v-df48c1ce","v-dbdf1090","v-d8755f52","v-d50bae14","v-d1a1fcd6","v-ce384b98","v-cace9a5a","v-c764e91c","v-b97ae9f0","v-b61138b2","v-b2a78774","v-af3dd636","v-abd424f8","v-a86a73ba","v-a500c27c","v-a197113e","v-96974d2e","v-932d9bf0","v-8fc3eab2","v-8c5a3974","v-88f08836","v-8586d6f8","v-b6dae362","v-241b801a","v-b3713224","v-b00780e6","v-ac9dcfa8","v-a9341e6a","v-a5ca6d2c","v-a260bbee","v-9ef70ab0","v-9b8d5972","v-f6890b56","v-f31f5a18","v-efb5a8da","v-ec4bf79c","v-e8e2465e","v-e5789520","v-3270aac6","v-2f06f988","v-de420796","v-6dbc1b3a","v-6a5269fc","v-66e8b8be","v-637f0780","v-665eceea","v-62f51dac","v-5f8b6c6e","v-5c21bb30","v-58b809f2","v-554e58b4","v-51e4a776","v-4e7af638","v-4b1144fa","v-1bfdd03a","v-1db2a8d9","v-1f678178","v-211c5a17","v-22d132b6","v-24860b55","v-263ae3f4","v-27efbc93","v-29a49532","v-4b724775","v-4d272014","v-4edbf8b3","v-5090d152","v-5245a9f1","v-53fa8290","v-55af5b2f","v-59190c6d","v-4b5a535b","v-20231c67","v-21d7f506","v-238ccda5","v-2541a644","v-26f67ee3","v-28ab5782","v-4d0f2bfa","v-4ec40499","v-5078dd38","v-522db5d7","v-53e28e76","v-55976715","v-574c3fb4","v-59011853","v-095e9d25","v-646d6d2f","v-662245ce","v-67d71e6d","v-698bf70c","v-6b40cfab","v-6cf5a84a","v-62ffa9cd","v-64b4826c","v-66695b0b","v-3cfc1797","v-3eb0f036","v-4065c8d5","v-421aa174","v-43cf7a13","v-458452b2","v-11167db8","v-204f2809","v-2d5e72f7","v-37492b80","v-63fec628"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-184f4da6","v-2e3eac9e","v-2e25198a","v-72a9c1e2","v-14c69af4","v-f0383c18","v-744e35e2","v-f785aee2","v-e17274d6","v-c93c9174","v-422c02b4","v-131b2324","v-58be56fd","v-a57a2242","v-b231bd26","v-385b501e","v-da4a4d7e","v-06bb7d66","v-532671a0","v-7c1a6ef8","v-7dcf4797","v-7f842036","v-8ded9d8e","v-576433ce","v-10ee9fe3","v-7e2cd684","v-aa48a166","v-60a6eec9","v-7a4f6454","v-7d186846","v-4d748153","v-b121e072","v-2214300c","v-7a8e7ed8","v-19bd6236","v-381488f6","v-fa0aa7e8","v-d16aeff8","v-76277fd2","v-6135ec46","v-3dec9618","v-857decfc","v-3ca00cf4","v-759a5651","v-2094ea4f","v-32a97c7e","v-6592ca48","v-2270865e","v-3c0140d3","v-3db61972","v-3f6af211","v-411fcab0","v-42d4a34f","v-44897bee","v-463e548d","v-a60ce25e","v-e4d8f156","v-3d20ce8f","v-3c366b53","v-bce49b2e","v-df48c1ce","v-dbdf1090","v-d8755f52","v-d50bae14","v-d1a1fcd6","v-ce384b98","v-cace9a5a","v-c764e91c","v-b97ae9f0","v-b61138b2","v-b2a78774","v-af3dd636","v-abd424f8","v-a86a73ba","v-a500c27c","v-a197113e","v-96974d2e","v-932d9bf0","v-8fc3eab2","v-8c5a3974","v-88f08836","v-8586d6f8","v-b6dae362","v-241b801a","v-b3713224","v-b00780e6","v-ac9dcfa8","v-a9341e6a","v-a5ca6d2c","v-a260bbee","v-9ef70ab0","v-9b8d5972","v-f6890b56","v-f31f5a18","v-efb5a8da","v-ec4bf79c","v-e8e2465e","v-e5789520","v-3270aac6","v-2f06f988","v-de420796","v-6dbc1b3a","v-6a5269fc","v-66e8b8be","v-637f0780","v-665eceea","v-62f51dac","v-5f8b6c6e","v-5c21bb30","v-58b809f2","v-554e58b4","v-51e4a776","v-4e7af638","v-4b1144fa","v-1bfdd03a","v-1db2a8d9","v-1f678178","v-211c5a17","v-22d132b6","v-24860b55","v-263ae3f4","v-27efbc93","v-29a49532","v-4b724775","v-4d272014","v-4edbf8b3","v-5090d152","v-5245a9f1","v-53fa8290","v-55af5b2f","v-59190c6d","v-4b5a535b","v-20231c67","v-21d7f506","v-238ccda5","v-2541a644","v-26f67ee3","v-28ab5782","v-4d0f2bfa","v-4ec40499","v-5078dd38","v-522db5d7","v-53e28e76","v-55976715","v-574c3fb4","v-59011853","v-095e9d25","v-646d6d2f","v-662245ce","v-67d71e6d","v-698bf70c","v-6b40cfab","v-6cf5a84a","v-62ffa9cd","v-64b4826c","v-66695b0b","v-3cfc1797","v-3eb0f036","v-4065c8d5","v-421aa174","v-43cf7a13","v-458452b2","v-11167db8","v-204f2809","v-2d5e72f7","v-37492b80","v-63fec628"]}}},be=E($r),mo=(n="")=>{const a=T(),s=sn(),e=vn();return b(()=>{var o;const l=n||((o=O().value.blog)==null?void 0:o.key)||"";if(!l)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const p=s.getRoutes();if(!be.value[l])throw new Error(`useBlogCategory: key ${l} is invalid`);const c=be.value[l][e.value],u={path:c.path,map:{}};for(const r in c.map){const d=c.map[r];u.map[r]={path:d.path,items:[]};for(const m of d.keys){const g=p.find(({name:k})=>k===m);if(g){const k=sa(s,g.path);u.map[r].items.push({path:k.path,info:k.meta})}}a.value.path===d.path&&(u.currentItems=u.map[r].items)}return u})},he=E(qr),Ia=(n="")=>{const a=sn(),s=vn();return b(()=>{var e;const o=n||((e=O().value.blog)==null?void 0:e.key)||"";if(!o)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!he.value[o])throw new Error(`useBlogType: key ${n} is invalid`);const l=a.getRoutes(),p=he.value[o][s.value],c={path:p.path,items:[]};for(const u of p.keys){const r=l.find(({name:d})=>d===u);if(r){const d=sa(a,r.path);c.items.push({path:d.path,info:d.meta})}}return c})};const zr="/assets/hero-197a9d2d.jpg",go=Symbol.for("categoryMap"),pa=()=>{const n=$(go);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Nr=()=>{const n=mo("category");hn(go,n)},ca=()=>{const n=cn(),a=I();return b(()=>({...n.value.blog,...a.value.blog}))},ko=Symbol.for("tagMap"),ra=()=>{const n=$(ko);if(!n)throw new Error("useTagMap() is called without provider.");return n},Hr=()=>{const n=mo("tag");hn(ko,n)},Fr=n=>{const a=I();return b(()=>{const{[C.author]:s}=n.value;return s?Qn(s):s===!1?[]:Qn(a.value.author,!1)})},Jr=n=>{const a=pa();return b(()=>Ze(n.value[C.category]).map(s=>({name:s,path:a.value.map[s].path})))},Ur=n=>{const a=ra();return b(()=>nt(n.value[C.tag]).map(s=>({name:s,path:a.value.map[s].path})))},Gr=n=>b(()=>{const{[C.date]:a}=n.value;return ms(a)}),Qr=n=>{const a=Hn(n,"info"),s=ca(),e=Fr(a),o=Jr(a),l=Ur(a),p=Gr(a),c=St(),u=b(()=>({author:e.value,category:o.value,date:p.value,localizedDate:a.value[C.localizedDate]||"",tag:l.value,isOriginal:a.value[C.isOriginal]||!1,readingTime:a.value[C.readingTime]||null,readingTimeLocale:a.value[C.readingTime]&&c.value?Rt(a.value[C.readingTime],c.value):null,pageview:n.path})),r=b(()=>s.value.articleInfo);return{info:u,items:r}},bo=Symbol(""),ua=()=>{const n=$(bo);if(!n)throw new Error("useArticles() is called without provider.");return n},Wr=()=>{const n=Ia("article");hn(bo,n)},ho=Symbol(""),Ts=()=>{const n=$(ho);if(!n)throw new Error("useStars() is called without provider.");return n},Kr=()=>{const n=Ia("star");hn(ho,n)},fo=Symbol(""),Ds=()=>{const n=$(fo);if(!n)throw new Error("useTimelines() is called without provider.");return n},Yr=()=>{const n=Ia("timeline"),a=b(()=>{const s=[];return n.value.items.forEach(({info:e,path:o})=>{const l=ms(e[C.date]),p=l==null?void 0:l.getFullYear(),c=l?l.getMonth()+1:null,u=l==null?void 0:l.getDate();p&&c&&u&&((!s[0]||s[0].year!==p)&&s.unshift({year:p,items:[]}),s[0].items.push({date:`${c}/${u}`,info:e,path:o}))}),{...n.value,config:s.reverse()}});hn(fo,a)},Xr=()=>{Wr(),Nr(),Kr(),Hr(),Yr()};var Zr=f({name:"SocialMedia",setup(){const n=ca(),a=Fn(),s=b(()=>{const e=n.value.medias;return e?aa(e).map(([o,l])=>({name:o,icon:Mr[o],url:l})):[]});return()=>s.value.length?t("div",{class:"social-media-wrapper"},s.value.map(({name:e,icon:o,url:l})=>t("a",{class:"social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":e,...a.value?{}:{"data-balloon-pos":"up"},innerHTML:o}))):null}}),Vs=f({name:"BloggerInfo",setup(){const n=ca(),a=Zn(),s=I(),e=ua(),o=pa(),l=ra(),p=Ds(),c=oa(),u=b(()=>{var g;return n.value.name||((g=Qn(s.value.author)[0])==null?void 0:g.name)||a.value.title}),r=b(()=>n.value.avatar||s.value.logo),d=b(()=>s.value.blogLocales),m=b(()=>n.value.intro);return()=>t("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[t("div",{class:"blogger",...m.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>c(m.value)}:{}},[r.value?t("img",{class:["blogger-avatar",{round:n.value.roundAvatar}],src:G(r.value),property:"image",alt:"Blogger Avatar"}):null,u.value?t("div",{class:"blogger-name",property:"name"},u.value):null,n.value.description?t("div",{class:"blogger-description",innerHTML:n.value.description}):null,m.value?t("meta",{property:"url",content:G(m.value)}):null]),t("div",{class:"num-wrapper"},[t(H,{to:e.value.path},()=>[t("div",{class:"num"},e.value.items.length),t("div",d.value.article)]),t(H,{to:o.value.path},()=>[t("div",{class:"num"},X(o.value.map).length),t("div",d.value.category)]),t(H,{to:l.value.path},()=>[t("div",{class:"num"},X(l.value.map).length),t("div",d.value.tag)]),t(H,{to:p.value.path},()=>[t("div",{class:"num"},p.value.items.length),t("div",d.value.timeline)])]),t(Zr)])}});const ss=()=>t(L,{name:"category"},()=>t("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ss.displayName="CategoryIcon";const es=()=>t(L,{name:"tag"},()=>t("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));es.displayName="TagIcon";const Rs=()=>t(L,{name:"timeline"},()=>t("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Rs.displayName="TimelineIcon";const _o=()=>t(L,{name:"slides"},()=>t("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));_o.displayName="SlideIcon";const yo=()=>t(L,{name:"sticky"},()=>[t("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);yo.displayName="StickyIcon";const Ea=()=>t(L,{name:"article"},()=>t("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Ea.displayName="ArticleIcon";const Eo=()=>t(L,{name:"book"},()=>t("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Eo.displayName="BookIcon";const wo=()=>t(L,{name:"link"},()=>t("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));wo.displayName="LinkIcon";const Ao=()=>t(L,{name:"project"},()=>t("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Ao.displayName="ProjectIcon";const xo=()=>t(L,{name:"friend"},()=>t("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));xo.displayName="FriendIcon";const ts=()=>t(L,{name:"slide-down"},()=>t("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));ts.displayName="SlideDownIcon";const Lo=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Lo.displayName="EmptyIcon";const Io=()=>t(L,{name:"lock"},()=>t("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Io.displayName="LockIcon";var nu=f({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(n,{slots:a}){const s=Hn(n,"info"),{info:e,items:o}=Qr(n);return()=>{var l,p,c;const{[C.title]:u,[C.type]:r,[C.isEncrypted]:d,[C.cover]:m,[C.excerpt]:g,[C.sticky]:k}=s.value,h=e.value;return t("div",{class:"article-item"},t("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[((l=a.cover)==null?void 0:l.call(a,{cover:m}))||(m?[t("img",{class:"article-cover",src:G(m)}),t("meta",{property:"image",content:G(m)})]:[]),k?t(yo):null,t(H,{to:n.path},()=>{var w;return((w=a.title)==null?void 0:w.call(a,{title:u,isEncrypted:d,type:r}))||t("header",{class:"title"},[d?t(Io):null,r===Ot.slide?t(_o):null,t("span",{property:"headline"},u)])}),((p=a.excerpt)==null?void 0:p.call(a,{excerpt:g}))||(g?t("div",{class:"article-excerpt",innerHTML:g}):null),t("hr",{class:"hr"}),((c=a.info)==null?void 0:c.call(a,{info:h}))||t(po,{info:h,...o.value?{items:o.value}:{}})]))}}}),au=f({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:a}){let s;const e=I(),o=E(""),l=b(()=>e.value.paginationLocales),p=b(()=>Math.ceil(n.total/n.perPage)),c=b(()=>!!p.value&&p.value!==1),u=b(()=>p.value<7?!1:n.current>4),r=b(()=>p.value<7?!1:n.current<p.value-3),d=b(()=>{const{current:k}=n;let h=1,w=p.value;const y=[];p.value>=7&&(k<=4&&k<p.value-3?(h=1,w=5):k>4&&k>=p.value-3?(w=p.value,h=p.value-4):p.value>7&&(h=k-2,w=k+2));for(let _=h;_<=w;_++)y.push(_);return y}),m=k=>a("updateCurrentPage",k),g=k=>{const h=parseInt(k);h<=p.value&&h>0?m(h):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/g,p.value.toString())}`)};return D(()=>{s=new Ul}),()=>t("div",{class:"pagination-wrapper"},c.value?t("div",{class:"pagination-list"},[t("div",{class:"page-number"},[n.current>1?t("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>m(n.current-1)},l.value.prev):null,u.value?[t("div",{role:"navigation",onClick:()=>m(1)},1),t("div",{class:"ellipsis"},"...")]:null,d.value.map(k=>t("div",{key:k,class:{active:n.current===k},role:"navigation",onClick:()=>m(k)},k)),r.value?[t("div",{class:"ellipsis"},"..."),t("div",{role:"navigation",onClick:()=>m(p.value)},p.value)]:null,n.current<p.value?t("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>m(n.current+1)},l.value.next):null]),t("div",{class:"navigate-wrapper"},[t("label",{for:"navigation-text"},`${l.value.navigate}: `),t("input",{id:"navigation-text",value:o.value,onInput:({target:k})=>{o.value=k.value},onKeydown:k=>{k.key==="Enter"&&(k.preventDefault(),g(o.value))}}),t("button",{class:"navigate",role:"navigation",title:l.value.action,onClick:()=>g(o.value)},l.value.action)])]):[])}}),Ss=f({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const a=pn(),s=sn(),e=ca(),o=E(1),l=b(()=>e.value.articlePerPage||10),p=b(()=>n.items.slice((o.value-1)*l.value,o.value*l.value)),c=u=>{o.value=u;const r={...a.query};r.page===u.toString()||u===1&&!r.page||(u===1?delete r.page:r.page=u.toString(),s.push({path:a.path,query:r}))};return D(()=>{const{page:u}=a.query;c(u?Number(u):1),R(o,()=>{const r=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,r)},100)}),R(()=>a.query,({page:r})=>{c(r?Number(r):1)})}),()=>t("div",{id:"article-list",class:"article-wrapper"},p.value.length?[...p.value.map(({info:u,path:r},d)=>t(P,{appear:!0,delay:d*.04},()=>t(nu,{key:r,info:u,path:r}))),t(au,{current:o.value,perPage:l.value,total:n.items.length,onUpdateCurrentPage:c})]:t(Lo))}}),Ps=f({name:"CategoryList",setup(){const n=T(),a=pa();return()=>t("ul",{class:"category-list-wrapper"},aa(a.value.map).map(([s,{path:e,items:o}])=>t("li",{class:["category",`category${xa(s,9)}`,{active:e===n.value.path}]},t(H,{to:e},()=>[s,t("span",{class:"category-num"},o.length)]))))}}),Os=f({name:"TagList",setup(){const n=O(),a=ra(),s=e=>{var o;return e===((o=n.value.blog)==null?void 0:o.name)};return()=>t("ul",{class:"tag-list-wrapper"},aa(a.value.map).map(([e,{path:o,items:l}])=>t("li",{class:["tag",`tag${xa(e,9)}`,{active:s(e)}]},t(H,{to:o},()=>[e,t("span",{class:"tag-num"},l.length)]))))}}),su=f({name:"TimelineList",setup(){const n=I(),a=Ds(),s=oa(),e=b(()=>n.value.blogLocales.timeline);return()=>t("div",{class:"timeline-list-wrapper"},[t("div",{class:"timeline-list-title",onClick:()=>s(a.value.path)},[t(Rs),t("span",{class:"num"},a.value.items.length),e.value]),t("hr"),t("div",{class:"timeline-content"},t("ul",{class:"timeline-list"},a.value.config.map(({year:o,items:l},p)=>t(P,{appear:!0,delay:.08*(p+1)},()=>t("li",[t("h3",{class:"timeline-year"},o),t("ul",{class:"timeline-year-wrapper"},l.map(({date:c,info:u,path:r})=>t("li",{class:"timeline-item"},[t("span",{class:"timeline-date"},c),t(H,{class:"timeline-title",to:r},()=>u[C.title])])))])))))])}}),To=f({name:"InfoList",setup(){const n=I(),a=ua(),s=pa(),e=b(()=>X(s.value.map).length),o=Ts(),l=ra(),p=b(()=>X(l.value.map).length),c=oa(),u=E("article"),r=b(()=>n.value.blogLocales),d=[["article",Ea],["category",ss],["tag",es],["timeline",Rs]];return()=>t("div",{class:"blog-info-list"},[t("div",{class:"blog-type-wrapper"},d.map(([m,g])=>t("button",{type:"button",class:"blog-type-button",onClick:()=>{u.value=m}},t("div",{class:["icon-wrapper",{active:u.value===m}],"aria-label":r.value[m],"data-balloon-pos":"up"},t(g))))),t(P,()=>u.value==="article"?t("div",{class:"sticky-article-wrapper"},[t("div",{class:"title",onClick:()=>c(a.value.path)},[t(Ea),t("span",{class:"num"},a.value.items.length),r.value.article]),t("hr"),t("ul",{class:"sticky-article-list"},o.value.items.map(({info:m,path:g},k)=>t(P,{appear:!0,delay:.08*(k+1)},()=>t("li",{class:"sticky-article"},t(H,{to:g},()=>m[C.title])))))]):u.value==="category"?t("div",{class:"category-wrapper"},[e.value?t("div",{class:"title",onClick:()=>c(s.value.path)},[t(ss),t("span",{class:"num"},e.value),r.value.category]):null,t("hr"),t(P,{delay:.04},()=>t(Ps))]):u.value==="tag"?t("div",{class:"tag-wrapper"},[p.value?t("div",{class:"title",onClick:()=>c(l.value.path)},[t(es),t("span",{class:"num"},p.value),r.value.tag]):null,t("hr"),t(P,{delay:.04},()=>t(Os))]):t(P,()=>t(su)))])}}),Ta=f({name:"BlogWrapper",setup(n,{slots:a}){const{isMobile:s}=la();return()=>[t(Is),t(xs,{noSidebar:!0,noToc:!0},{default:()=>{var e;return(e=a.default)==null?void 0:e.call(a)},navScreenBottom:()=>t(Vs),...s.value?{sidebar:()=>t(To)}:{}})]}});const Do=()=>t("aside",{class:"blog-info-wrapper"},[t(P,()=>t(Vs)),t(P,{delay:.04},()=>t(To))]);Do.displayName="InfoPanel";var Da=Do,eu=f({name:"BlogPage",components:{CategoryList:Ps,TagList:Os},setup(){const n=T(),a=O(),s=pa(),e=ra(),o=b(()=>a.value.blog||{}),l=b(()=>{const{key:c=""}=o.value;return c==="category"?"CategoryList":c==="tag"?"TagList":null}),p=b(()=>{const{name:c="",key:u=""}=o.value;return u==="category"?c?s.value.map[c].items:[]:u==="tag"?c?e.value.map[c].items:[]:[]});return()=>t(Ta,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(P,()=>l.value?t(Q(l.value)):null),o.value.name?t(P,{appear:!0,delay:.24},()=>t(Ss,{key:n.value.path,items:p.value})):null]),t(P,{delay:.16},()=>t(Da))])))}}),tu=f({name:"BlogHero",setup(n,{slots:a}){const s=kl(),e=O(),o=z(),l=b(()=>e.value.heroFullScreen??!1),p=b(()=>{const{heroText:u,heroImage:r,heroImageDark:d,heroAlt:m,heroImageStyle:g,tagline:k=null}=e.value;return{text:u===!1?null:u||s.value,image:r?G(r):null,imageDark:d?G(d):null,heroStyle:g,alt:m||"hero image",tagline:k,isFullScreen:l.value}}),c=b(()=>{const{bgImage:u,bgImageStyle:r}=e.value;return{image:Y(u)?G(u):u===!1?null:zr,bgStyle:r,isFullScreen:l.value}});return()=>{var u,r;return e.value.hero===!1?null:t("div",{ref:o,class:["blog-hero",{fullscreen:l.value,"no-bg":!c.value.image}]},[((u=a.heroBg)==null?void 0:u.call(a,c.value))||(c.value.image?t("div",{class:"mask",style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null),((r=a.heroInfo)==null?void 0:r.call(a,p.value))||[t(P,{appear:!0,type:"group",delay:.04},()=>[p.value.image?t("img",{key:"light",class:["hero-image",{light:p.value.imageDark}],style:p.value.heroStyle,src:p.value.image,alt:p.value.alt}):null,p.value.imageDark?t("img",{key:"dark",class:"hero-image dark",style:p.value.heroStyle,src:p.value.imageDark,alt:p.value.alt}):null]),t(P,{appear:!0,delay:.08},()=>p.value.text?t("h1",p.value.text):null),t(P,{appear:!0,delay:.12},()=>p.value.tagline?t("p",{class:"description",innerHTML:p.value.tagline}):null)],p.value.isFullScreen?t("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:o.value.clientHeight,behavior:"smooth"})}},[t(ts),t(ts)]):null])}}});const ou=["link","article","book","project","friend"];var lu=f({name:"ProjectPanel",components:{ArticleIcon:Ea,BookIcon:Eo,FriendIcon:xo,LinkIcon:wo,ProjectIcon:Ao},setup(){const n=O(),a=Fn(),s=oa(),e=(o="",l="icon")=>ou.includes(o)?t(Q(`${o}-icon`)):zn(o)?t("img",{src:o,alt:l,class:"image"}):La(o)?t("img",{src:G(o),alt:l,class:"image"}):t(Z,{icon:o});return()=>{var o;return(o=n.value.projects)!=null&&o.length?t("div",{class:"project-panel"},n.value.projects.map(({icon:l,link:p,name:c,desc:u},r)=>t("div",{class:["project-card",{[`project${r%9}`]:!a.value}],onClick:()=>s(p)},[e(l,c),t("div",{class:"name"},c),t("div",{class:"desc"},u)]))):null}}}),iu=f({name:"BlogHome",setup(){const n=ua();return()=>t("div",{class:"page blog"},[t(tu),t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-home",id:"main-content"},[t(P,{appear:!0,delay:.16},()=>t(lu)),t(P,{appear:!0,delay:.24},()=>t(Ss,{items:n.value.items}))]),t(P,{appear:!0,delay:.16},()=>t(Da))]),t(P,{appear:!0,delay:.28},()=>t(Ls))])}}),pu=f({name:"BlogHome",setup(){return()=>t(Ta,()=>t(iu))}}),Vo=f({name:"ArticleType",setup(){const n=T(),a=vn(),s=I(),e=ua(),o=Ts(),l=b(()=>{const p=s.value.blogLocales;return[{text:p.all,path:e.value.path},{text:p.star,path:o.value.path},...[].map(({key:c,path:u})=>({text:p[c],path:u.replace(/^\//,a.value)}))]});return()=>t("ul",{class:"article-type-wrapper"},l.value.map(p=>t("li",{class:["article-type",{active:p.path===n.value.path}]},t(H,{to:p.path},()=>p.text))))}}),cu=f({name:"BlogPage",setup(){const n=Ia(),a=O(),s=T(),e=ua(),o=Ts(),l=b(()=>{const{key:p="",type:c}=a.value.blog||{};return p==="star"?o.value.items:c==="type"&&p?n.value.items:e.value.items});return()=>t(Ta,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(P,()=>t(Vo)),t(P,{appear:!0,delay:.24},()=>t(Ss,{key:s.value.path,items:l.value}))]),t(P,{delay:.16},()=>t(Da))])))}}),ru=f({name:"TimelineItems",setup(){const n=ca(),a=I(),s=Ds(),e=b(()=>n.value.timeline||a.value.blogLocales.timelineTitle),o=b(()=>s.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>t("div",{class:"timeline-wrapper"},t("ul",{class:"timeline-content"},[t(P,()=>t("li",{class:"motto"},e.value)),t(co,{items:o.value}),s.value.config.map(({year:l,items:p},c)=>t(P,{appear:!0,delay:.08*(c+1),type:"group"},()=>[t("h3",{key:"title",id:l,class:"timeline-year-title"},t("span",l)),t("li",{key:"content",class:"timeline-year-list"},[t("ul",{class:"timeline-year-wrapper"},p.map(({date:u,info:r,path:d})=>t("li",{class:"timeline-item"},[t("span",{class:"timeline-date"},u),t(H,{class:"timeline-title",to:d},()=>r[C.title])])))])]))]))}}),uu=f({name:"Timeline",components:{ArticleType:Vo,CategoryList:Ps,TagList:Os},setup(){return()=>t(Ta,()=>t("div",{class:"page blog"},t("div",{class:"blog-page-wrapper"},[t("main",{class:"blog-main",id:"main-content"},[t(P,{appear:!0,delay:.24},()=>t(ru))]),t(P,{delay:.16},()=>t(Da))])))}});const Sn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),Ha=Array.from({length:64},(n,a)=>a),ha=n=>Array(n).fill(-1),kn=[...ha(46),0,1,...Ha.slice(54,64),...ha(7),...Ha.slice(2,28),...ha(6),...Ha.slice(28,54),...ha(5)],fe=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],_e=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],Ro=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],os=(n,a)=>{if(a<=0||a>n.length)throw Error(`Illegal len: ${a}`);let s=0,e,o;const l=[];for(;s<a;){if(e=n[s++]&255,l.push(Sn[e>>2&63]),e=(e&3)<<4,s>=a){l.push(Sn[e&63]);break}if(o=n[s++]&255,e|=o>>4&15,l.push(Sn[e&63]),e=(o&15)<<2,s>=a){l.push(Sn[e&63]);break}o=n[s++]&255,e|=o>>6&3,l.push(Sn[e&63]),l.push(Sn[o&63])}return l.join("")},du=(n,a)=>{if(a<=0)throw Error(`Illegal len: ${a}`);const s=n.length;let e=0,o=0,l,p,c,u,r,d;const m=[];for(;e<s-1&&o<a&&(d=n.charCodeAt(e++),l=d<kn.length?kn[d]:-1,d=n.charCodeAt(e++),p=d<kn.length?kn[d]:-1,!(l==-1||p==-1||(r=l<<2>>>0,r|=(p&48)>>4,m.push(String.fromCharCode(r)),++o>=a||e>=s)||(d=n.charCodeAt(e++),c=d<kn.length?kn[d]:-1,c==-1)||(r=(p&15)<<4>>>0,r|=(c&60)>>2,m.push(String.fromCharCode(r)),++o>=a||e>=s)));)d=n.charCodeAt(e++),u=d<kn.length?kn[d]:-1,r=(c&3)<<6>>>0,r|=u,m.push(String.fromCharCode(r)),++o;return m.map(g=>g.charCodeAt(0))},vu=(n,a)=>{let s=null;for(typeof n=="number"&&(s=n,n=()=>null);s!==null||(s=n())!==null;)s<128?a(s&127):s<2048?(a(s>>6&31|192),a(s&63|128)):s<65536?(a(s>>12&15|224),a(s>>6&63|128),a(s&63|128)):(a(s>>18&7|240),a(s>>12&63|128),a(s>>6&63|128),a(s&63|128)),s=null},mu=(n,a)=>{let s,e=null;for(;(s=e!==null?e:n())!==null;){if(s>=55296&&s<=57343&&(e=n())!==null&&e>=56320&&e<=57343){a((s-55296)*1024+e-56320+65536),e=null;continue}a(s)}e!==null&&a(e)},gu=(n,a)=>{mu(n,function(s){vu(s,a)})},ku=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,bu=n=>{const a=[];let s=0;return gu(()=>s>=n.length?null:n.charCodeAt(s++),e=>{a.push(e)}),a},Wn=(n,a,s,e)=>{let o,l=n[a],p=n[a+1];return l^=s[0],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[1],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[2],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[3],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[4],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[5],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[6],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[7],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[8],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[9],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[10],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[11],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[12],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[13],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[14],o=e[l>>>24],o+=e[256|l>>16&255],o^=e[512|l>>8&255],o+=e[768|l&255],p^=o^s[15],o=e[p>>>24],o+=e[256|p>>16&255],o^=e[512|p>>8&255],o+=e[768|p&255],l^=o^s[16],n[a]=p^s[16+1],n[a+1]=l,n},Pn=(n,a)=>{let s=0;for(let e=0;e<4;++e)s=s<<8|n[a]&255,a=(a+1)%n.length;return{key:s,offp:a}},ye=(n,a,s)=>{const e=a.length,o=s.length;let l=0,p=[0,0],c;for(let u=0;u<e;u++)c=Pn(n,l),l=c.offp,a[u]=a[u]^c.key;for(let u=0;u<e;u+=2)p=Wn(p,0,a,s),a[u]=p[0],a[u+1]=p[1];for(let u=0;u<o;u+=2)p=Wn(p,0,a,s),s[u]=p[0],s[u+1]=p[1]},hu=(n,a,s,e)=>{const o=s.length,l=e.length;let p=0,c=[0,0],u;for(let r=0;r<o;r++)u=Pn(a,p),p=u.offp,s[r]=s[r]^u.key;p=0;for(let r=0;r<o;r+=2)u=Pn(n,p),p=u.offp,c[0]^=u.key,u=Pn(n,p),p=u.offp,c[1]^=u.key,c=Wn(c,0,s,e),s[r]=c[0],s[r+1]=c[1];for(let r=0;r<l;r+=2)u=Pn(n,p),p=u.offp,c[0]^=u.key,u=Pn(n,p),p=u.offp,c[1]^=u.key,c=Wn(c,0,s,e),e[r]=c[0],e[r+1]=c[1]},Ee=(n,a,s,e,o)=>{const l=Ro.slice(),p=l.length;if(s<4||s>31){const g=new Error(`Illegal number of rounds (4-31): ${s}`);if(e===!1)return Promise.reject(g);throw g}if(a.length!==16){const g=new Error(`Illegal salt length: ${a.length} != 16`);if(e===!1)return Promise.reject(g);throw g}s=1<<s>>>0;let c,u,r=0,d;Int32Array?(c=new Int32Array(fe),u=new Int32Array(_e)):(c=fe.slice(),u=_e.slice()),hu(a,n,c,u);const m=()=>{if(o&&o(r/s),r<s){const g=Date.now();for(;r<s&&(r=r+1,ye(n,c,u),ye(a,c,u),!(Date.now()-g>100)););}else{for(r=0;r<64;r++)for(d=0;d<p>>1;d++)Wn(l,d<<1,c,u);const g=[];for(r=0;r<p;r++)g.push((l[r]>>24&255)>>>0),g.push((l[r]>>16&255)>>>0),g.push((l[r]>>8&255)>>>0),g.push((l[r]&255)>>>0);return e===!1?Promise.resolve(g):g}if(e===!1)return new Promise(g=>ku(()=>{m().then(g)}))};if(e===!1)return m();{let g;for(;;)if(typeof(g=m())<"u")return g||[]}},fu=n=>{try{let a;return(self.crypto||self.msCrypto).getRandomValues(a=new Uint32Array(n)),Array.prototype.slice.call(a)}catch{throw Error("WebCryptoAPI is not available")}},_u=(n=10)=>{if(typeof n!="number")throw Error("Illegal arguments: "+typeof n);n<4?n=4:n>31&&(n=31);const a=[];return a.push("$2a$"),n<10&&a.push("0"),a.push(n.toString()),a.push("$"),a.push(os(fu(16),16)),a.join("")};function yu(n,a,s,e){if(typeof n!="string"||typeof a!="string"){const k=new Error("Invalid string / salt: Not a string");if(s===!1)return Promise.reject(k);throw k}let o,l;if(a.charAt(0)!=="$"||a.charAt(1)!=="2"){const k=new Error("Invalid salt version: "+a.substring(0,2));if(s===!1)return Promise.reject(k);throw k}if(a.charAt(2)==="$")o=String.fromCharCode(0),l=3;else{if(o=a.charAt(2),o!=="a"&&o!=="b"&&o!=="y"||a.charAt(3)!=="$"){const k=Error("Invalid salt revision: "+a.substring(2,4));if(s===!1)return Promise.reject(k);throw k}l=4}if(a.charAt(l+2)>"$"){const k=new Error("Missing salt rounds");if(s===!1)return Promise.reject(k);throw k}const p=parseInt(a.substring(l,l+1),10)*10,c=parseInt(a.substring(l+1,l+2),10),u=p+c,r=a.substring(l+3,l+25);n+=o>="a"?"\0":"";const d=bu(n),m=du(r,16),g=k=>{const h=[];return h.push("$2"),o>="a"&&h.push(o),h.push("$"),u<10&&h.push("0"),h.push(u.toString()),h.push("$"),h.push(os(m,m.length)),h.push(os(k,Ro.length*4-1)),h.join("")};return s===!1?Ee(d,m,u,!1,e).then(k=>g(k)):g(Ee(d,m,u,!0,e))}const Eu=(n,a=10)=>{if(typeof a=="number"&&(a=_u(a)),typeof n!="string"||typeof a!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof a);return yu(n,a,!0)},ls=(n,a)=>{if(typeof n!="string"||typeof a!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof a);return a.length!==60?!1:Eu(n,a.substring(0,a.length-31))===a},So=()=>t(L,{name:"lock"},()=>t("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));So.displayName="LockIcon";var Po=f({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(n,{emit:a}){const s=O(),e=I(),o=E(""),l=E(!1),p=E(!1),c=b(()=>e.value.encryptLocales);let u=null;const r=()=>{u&&clearTimeout(u),l.value=!1,a("verify",o.value,p.value),Nn().then(()=>{l.value=!0,u=setTimeout(()=>{l.value=!1},1e3)})};return()=>t("div",{class:["password-layer",{expand:n.full||s.value.home}]},t("div",{class:"password-modal"},[t("div",{class:["hint",{tried:l.value}]},l.value?c.value.errorHint:t(So,{"aria-label":c.value.iconLabel})),t("div",{class:"password"},[t("input",{type:"password",value:o.value,placeholder:c.value.placeholder,onInput:({target:d})=>{o.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&r()}})]),t("div",{class:"remember-password"},[t("input",{type:"checkbox",value:p.value,onChange:()=>p.value=!p.value}),c.value.remember]),t("button",{type:"button",class:"submit",onClick:()=>r()},"OK")]))}});const Oo=()=>{const n=cn();return b(()=>n.value.encrypt||{})},we="VUEPRESS_HOPE_GLOBAL_TOKEN",wu=()=>{const n=Oo(),a=In(we,""),s=dt(we,""),e=b(()=>{const{global:l=!1,admin:p=[]}=n.value;return l&&p.length>0}),o=b(()=>{if(e.value){if(a.value)return n.value.admin.some(l=>ls(a.value,l));if(s.value)return n.value.admin.some(l=>ls(s.value,l))}return!1});return{isEncrypted:e,isDecrypted:o,validate:(l,p=!1)=>{(p?a:s).value=l}}},Fa=(n="",a)=>!!n&&ls(n,a),Ae="VUEPRESS_HOPE_PATH_TOKEN",Au=()=>{const n=T(),a=Oo(),s=In(Ae,{}),e=dt(Ae,{}),o=p=>Yn(a.value.config)?X(a.value.config).filter(c=>$n(decodeURI(p),c)).sort((c,u)=>u.length-c.length):[],l=p=>{const c=o(p);if(c.length>0){const{config:u={}}=a.value;return{isEncrypted:!0,isDecrypted:c.some(r=>s.value[r]&&u[r].some(d=>Fa(s.value[r],d))||e.value[r]&&u[r].some(d=>Fa(e.value[r],d)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:b(()=>l(n.value.path)),getStatus:l,validate:(p,c=!1)=>{const{config:u={}}=a.value,r=o(n.value.path);for(const d of r)if(u[d].filter(m=>Fa(p,m))){(c?s:e).value[d]=p;break}}}};var xu=f({name:"GlobalEncrypt",setup(n,{slots:a}){const{isDecrypted:s,isEncrypted:e,validate:o}=wu(),l=E(!1);return D(()=>{l.value=!0}),()=>t(uo,()=>{var p,c;return e.value?l.value?s.value?(p=a.default)==null?void 0:p.call(a):t(Po,{full:!0,onVerify:o}):null:(c=a.default)==null?void 0:c.call(a)})}}),Lu=f({name:"LocalEncrypt",setup(n,{slots:a}){const{status:s,validate:e}=Au(),o=E(!1);return D(()=>{o.value=!0}),()=>{var l,p;const{isEncrypted:c,isDecrypted:u}=s.value;return c?o.value?u?((l=a.default)==null?void 0:l.call(a))||null:t(Po,{full:!0,onVerify:e}):null:((p=a.default)==null?void 0:p.call(a))||null}}});var Iu=f({name:"SlidePage",setup(){const n=sn(),a=E(!1),s=z(),e=()=>{a.value=!a.value},o=()=>{a.value=!1},l=()=>{o(),window.history.go(-1)},p=()=>{o(),n.push("/")};return vi(s,o),()=>t("div",{class:"presentation"},[t(us),t("div",{ref:s,class:["menu",{active:a.value}]},[t("button",{type:"button",class:"menu-button",onClick:()=>e()},t("span",{class:"icon"})),t("button",{type:"button",class:"back-button",onClick:()=>l()},t(Tp)),t("button",{type:"button",class:"home-button",onClick:()=>p()},t(Dp))])])}});const Tu=en({enhance:({app:n,router:a})=>{const{scrollBehavior:s}=a.options;a.options.scrollBehavior=async(...e)=>(await ro().wait(),s(...e)),qc(n),n.component("HopeIcon",Z),n.component("BloggerInfo",Vs),n.component("GlobalEncrypt",xu),n.component("LocalEncrypt",Lu)},setup:()=>{zc(),Jc(),Xr()},layouts:{Layout:jr,NotFound:Cr,BlogCategory:eu,BlogHome:pu,BlogType:cu,Timeline:uu,Slide:Iu}}),jo=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[t("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},t("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),t("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},t("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),t("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},t("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);jo.displayName="LoadingIcon";const Bo=({hint:n})=>t("div",{class:"search-pro-result loading"},[t(jo),n]);Bo.displayName="SearchLoading";const Du=()=>t(L,{name:"close"},()=>t("path",{d:"M507.168 473.232 716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z"}));Du.displayName="CloseIcon";const Vu=()=>t(L,{name:"heading"},()=>t("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));Vu.displayName="HeadingIcon";const Ru=()=>t(L,{name:"heart"},()=>t("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Ru.displayName="HeartIcon";const Su=()=>t(L,{name:"history"},()=>t("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Su.displayName="HistoryIcon";const Pu=()=>t(L,{name:"title"},()=>t("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Pu.displayName="TitleIcon";const js=()=>t(L,{name:"search"},()=>t("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));js.displayName="SearchIcon";const Co={delay:300,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0}],worker:"search-pro.worker.js"},id={},Mo=Co.hotKeys,Bs={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Ou="search-pro-query-history",un=Oi(Ou,[]),ju=()=>{const{queryHistoryCount:n}=Co,a=n>0;return{enabled:a,queryHistory:un,addQueryHistory:s=>{a&&(un.value.length<n?un.value=Array.from(new Set([s,...un.value])):un.value=Array.from(new Set([s,...un.value.slice(0,n-1)])))},removeQueryHistory:s=>{un.value=[...un.value.slice(0,s),...un.value.slice(s+1)]}}};const Cs=Symbol(""),Bu=()=>{const n=E(!1);hn(Cs,n)},Cu=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,Mu=n=>Mo.some(a=>{const{key:s,ctrl:e=!1,shift:o=!1,alt:l=!1,meta:p=!1}=a;return s===n.key&&e===n.ctrlKey&&o===n.shiftKey&&l===n.altKey&&p===n.metaKey}),$u='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',qu='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',zu='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',Nu='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',Ja=Mo[0];var Hu=f({name:"SearchBox",setup(){const n=_n(Bs),a=$(Cs),s=E(!1),e=b(()=>Ja?[(s.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((o,l)=>Ja[["ctrl","shift","alt","meta"][l]]),Ja.key.toUpperCase()]:null);return q("keydown",o=>{!a.value&&Mu(o)&&!Cu(o.target)&&(o.preventDefault(),a.value=!0)}),D(()=>{const{userAgent:o}=navigator;s.value=Jl(o)||Fl(o)||Hl(o)}),()=>[t("button",{type:"button",class:"search-pro-button",role:"search","aria-label":n.value.search,onClick:()=>{a.value=!0}},[t(js),t("div",{class:"placeholder"},n.value.search),e.value?t("div",{class:"key-hints"},e.value.map(o=>t("kbd",{class:"key"},o))):null])]}});const Fu=v({loader:()=>i(()=>import("./SearchResult-6085b179.js"),["assets/SearchResult-6085b179.js","assets/framework-1fb77053.js"]),loadingComponent:()=>{const n=_n(Bs);return t(Bo,{hint:n.value.loading})}});var Ju=f({name:"SearchModal",setup(){const n=$(Cs),a=Zn(),s=Ye(),e=_n(Bs),{enabled:o,queryHistory:l}=ju(),p=E(""),c=z();return R(n,u=>{u&&Nn().then(()=>{var r;(r=c.value)==null||r.focus()})}),q("keydown",u=>{n.value&&u.key==="Escape"&&(n.value=!1)}),D(()=>{const u=hs(document.body);R(n,r=>{u.value=r}),Xn(()=>{u.value=!1})}),()=>n.value?t("div",{class:"search-pro-modal-wrapper"},[t("div",{class:"background",onClick:()=>{n.value=!1,p.value=""}}),t("div",{class:"search-pro-modal"},[t("div",{class:"search-pro-box"},[t("form",[t("label",{for:"search-pro","aria-label":e.value.search},t(js)),t("input",{ref:c,type:"search",class:"search-pro-input",id:"search-pro",placeholder:e.value.placeholder,spellcheck:"false",autocapitalize:"off",autocorrect:"off",autocomplete:o?"on":"off",name:`${a.value.title}-search`,list:"search-pro-dataset",value:p.value,"aria-controls":"search-pro-results",onInput:({target:u})=>{p.value=u.value}}),t("dataset",{id:"search-pro-dataset"},l.value.map(u=>t("options",{value:u})))]),t("button",{type:"button",class:"close-button",onClick:()=>{n.value=!1,p.value=""}},e.value.cancel)]),t(Fu,{query:p.value,onClose:()=>{n.value=!1},onUpdateQuery:u=>{p.value=u}}),s.value?null:t("div",{class:"search-pro-hints"},[t("span",{class:"search-pro-hint"},[t("kbd",{innerHTML:$u}),e.value.select]),t("span",{class:"search-pro-hint"},[t("kbd",{innerHTML:zu}),t("kbd",{innerHTML:qu}),e.value.navigate]),t("span",{class:"search-pro-hint"},[t("kbd",{innerHTML:Nu}),e.value.exit])])])]):null}}),Uu=en({enhance({app:n}){n.component("SearchBox",Hu)},setup(){Bu()},rootComponents:[Ju]});const fa=[yl,Ni,Wi,Yi,np,tp,cp,kp,wp,Ac,Oc,Tu,Uu],Gu=[["v-184f4da6","/intro.html",{d:1684314085e3,v:"/assets/images/cover3.jpg",e:`<h1> Intro Page1</h1>
<p>Place your introduction and profile here.</p>
`,r:{minutes:.04,words:12},y:"a",t:"Intro Page1",i:"info"},["/intro","/intro.md"]],["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/index.html","/README.md"]],["v-2e3eac9e","/slides.html",{d:1684314085e3,e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:3.24,words:971},y:"s",t:"Slide page",i:"slides"},["/slides","/slides.md"]],["v-2e25198a","/database/",{d:1684314085e3,e:`<h2> 目录</h2>
<h3> MySQL</h3>
<ul>
<li>
<p><a href="/database/mysql/install/mysql-install.html" target="blank">MySQL 安装</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-1.html" target="blank">数据库概述</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-2.html" target="blank">安装与使用</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-3.html" target="blank">数据处理之查询</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-4.html" target="blank">常用函数</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-5.html" target="blank">子查询</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-6.html" target="blank">数据处理之增删改</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-7.html" target="blank">创建和管理表</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-8.html" target="blank">数据类型</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-9.html" target="blank">约束</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-10.html" target="blank">事务</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-11.html" target="blank">视图</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-12.html" target="blank">变量</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-13.html" target="blank">存储过程</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-14.html" target="blank">函数</a></p>
</li>
<li>
<p><a href="/database/mysql/basic/mysql-basic-15.html" target="blank">流程控制结构</a></p>
</li>
</ul>`,r:{minutes:.81,words:243},y:"a",t:"数据库",i:"database"},["/database/index.html","/database/README.md"]],["v-72a9c1e2","/deploy/",{d:1684314085e3,e:`<h2> 目录</h2>
<h3> Docker 基础</h3>
<ul>
<li>
<p><a href="/deploy/docker/basic/docker-basic-1.html" target="blank">Docker 简介</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-2.html" target="blank">Docker 安装</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-3.html" target="blank">Docker 常用命令</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-4.html" target="blank">Docker 镜像</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-5.html" target="blank">本地镜像发布到阿里云</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-6.html" target="blank">本地镜像发布到私有库</a></p>
</li>
<li>
<p><a href="/deploy/docker/basic/docker-basic-7.html" target="blank">Docker 容器数据卷</a></p>
</li>
</ul>`,r:{minutes:.26,words:77},y:"a",t:"部署相关",i:"deploy"},["/deploy/index.html","/deploy/README.md"]],["v-14c69af4","/java/",{d:1684314085e3,c:["Guide"],e:`<h2> 目录</h2>
<h3> Java 基础</h3>
<ul>
<li>
<p><a href="/java/basic/basic-grammar.html" target="blank">基础语法</a></p>
</li>
<li>
<p><a href="/java/basic/array.html" target="blank">数组</a></p>
</li>
<li>
<p><a href="/java/basic/object-oriented-1.html" target="blank">面向对象(上)</a></p>
</li>
<li>
<p><a href="/java/basic/object-oriented-2.html" target="blank">面向对象(中)</a></p>
</li>
<li>
<p><a href="/java/basic/object-oriented-3.html" target="blank">面向对象(下)</a></p>
</li>
<li>
<p><a href="/java/basic/exception.html" target="blank">异常处理</a></p>
</li>
<li>
<p><a href="/java/basic/enum-and-annotation.html" target="blank">枚举类和注解</a></p>
</li>
<li>
<p><a href="/java/basic/collection.html" target="blank">集合</a></p>
</li>
<li>
<p><a href="/java/basic/genericity.html" target="blank">泛型</a></p>
</li>
<li>
<p><a href="/java/basic/io.html" target="blank">IO流</a></p>
</li>
<li>
<p><a href="/java/basic/multi-thread.html" target="blank">多线程</a></p>
</li>
<li>
<p><a href="/java/basic/common-class.html" target="blank">Java 常用类</a></p>
</li>
<li>
<p><a href="/java/basic/reflection.html" target="blank">反射机制</a></p>
</li>
<li>
<p><a href="/java/basic/network.html" target="blank">网络编程</a></p>
</li>
<li>
<p><a href="/java/basic/jdk8-new-feature.html" target="blank">Java8 新特性</a></p>
</li>
</ul>`,r:{minutes:1.5,words:451},y:"a",t:"Java",i:"java"},["/java/index.html","/java/README.md"]],["v-f0383c18","/linux/",{d:1684314085e3,c:["Guide"],e:`<h2> 目录</h2>
<h3> Linux 入门</h3>
<ul>
<li>
<p><a href="/linux/basic/linux-basic-1.html" target="blank">简介</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-2.html" target="blank">VM 与 Linux 的安装</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-3.html" target="blank">文件与目录结构</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-4.html" target="blank">VI、VIM 编辑器</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-5.html" target="blank">常用命令</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-6.html" target="blank">用户与权限管理</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-7.html" target="blank">rpm 和 yum</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-8.html" target="blank">搭建开发环境</a></p>
</li>
<li>
<p><a href="/linux/basic/linux-basic-9.html" target="blank">在 VM 上安装 CentOS7</a></p>
</li>
</ul>`,r:{minutes:.3,words:89},y:"a",t:"Linux",i:"linux"},["/linux/index.html","/linux/README.md"]],["v-744e35e2","/vue/",{d:1684314085e3,c:["Guide"],e:`<h2> 目录</h2>
<h3> 第一章：Vue 核心</h3>
<ul>
<li>
<p><a href="/vue/chapter1/01-Vue%E7%AE%80%E4%BB%8B.html" target="blank">Vue 简介</a></p>
</li>
<li>
<p><a href="/vue/chapter1/02-%E6%90%AD%E5%BB%BAVue%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html" target="blank">搭建 Vue 开发环境</a></p>
</li>
<li>
<p><a href="/vue/chapter1/03-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95.html" target="blank">模板语法</a></p>
</li>
<li>
<p><a href="/vue/chapter1/04-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html" target="blank">数据绑定</a></p>
</li>
<li>
<p><a href="/vue/chapter1/05-MVVM%E6%A8%A1%E5%9E%8B.html" target="blank">MVVM 模型</a></p>
</li>
<li>
<p><a href="/vue/chapter1/06-%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86.html" target="blank">数据代理</a></p>
</li>
<li>
<p><a href="/vue/chapter1/07-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html" target="blank">事件处理</a></p>
</li>
<li>
<p><a href="/vue/chapter1/08-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%99%A8.html" target="blank">计算属性与侦听器</a></p>
</li>
<li>
<p><a href="/vue/chapter1/09-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A.html" target="blank">class 与 style 绑定</a></p>
</li>
<li>
<p><a href="/vue/chapter1/10-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.html" target="blank">条件渲染</a></p>
</li>
<li>
<p><a href="/vue/chapter1/11-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.html" target="blank">列表渲染</a></p>
</li>
<li>
<p><a href="/vue/chapter1/12-%E6%95%B0%E6%8D%AE%E7%9B%91%E6%B5%8B%E6%80%BB%E7%BB%93.html" target="blank">数据监测总结</a></p>
</li>
<li>
<p><a href="/vue/chapter1/13-%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE.html" target="blank">收集表单数据</a></p>
</li>
<li>
<p><a href="/vue/chapter1/14-%E8%BF%87%E6%BB%A4%E5%99%A8.html" target="blank">过滤器</a></p>
</li>
<li>
<p><a href="/vue/chapter1/15-%E5%86%85%E7%BD%AE%E6%8C%87%E4%BB%A4.html" target="blank">内置指令</a></p>
</li>
<li>
<p><a href="/vue/chapter1/16-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4.html" target="blank">自定义指令</a></p>
</li>
<li>
<p><a href="/vue/chapter1/17-Vue%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html" target="blank">Vue 实例生命周期</a></p>
</li>
</ul>`,r:{minutes:1.05,words:314},y:"a",t:"Vue",i:"vue"},["/vue/index.html","/vue/README.md"]],["v-f785aee2","/software/",{d:1684314085e3,c:["Guide"],e:`<h2> 目录</h2>
<h3> JDK</h3>
<ul>
<li><a href="/software/jdk/jdk-1.html" target="blank">下载与安装</a></li>
</ul>
<h3> NodeJS</h3>
<ul>
<li><a href="/software/nodejs/nodejs-1.html" target="blank">下载与安装</a></li>
</ul>
<h3> Git</h3>
<ul>
<li>
<p><a href="/software/git/git-1.html" target="blank">概述</a></p>
</li>
<li>
<p><a href="/software/git/git-2.html" target="blank">下载与安装</a></p>
</li>
<li>
<p><a href="/software/git/git-3.html" target="blank">常用命令</a></p>
</li>
<li>
<p><a href="/software/git/git-4.html" target="blank">分支操作</a></p>
</li>
<li>
<p><a href="/software/git/git-5.html" target="blank">团队协作机制</a></p>
</li>
<li>
<p><a href="/software/git/git-6.html" target="blank">GitHub 操作</a></p>
</li>
<li>
<p><a href="/software/git/git-7.html" target="blank">IDEA 集成 Git</a></p>
</li>
<li>
<p><a href="/software/git/git-8.html" target="blank">IDEA 集成 GitHub</a></p>
</li>
<li>
<p><a href="/software/git/git-9.html" target="blank">国内代码托管中心-码云</a></p>
</li>
<li>
<p><a href="/software/git/git-10.html" target="blank">自建代码托管平台-GitLab</a></p>
</li>
</ul>`,r:{minutes:.66,words:199},y:"a",t:"软件教程",i:"categoryselected"},["/software/index.html","/software/README.md"]],["v-bce49b2e","/database/redis/redis-1.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 技术发展</h2>
<p>技术的分类</p>
<ol>
<li>解决功能性的问题：Java、Jsp、RDBMS、Tomcat、Linux、JDBC、SVN</li>
<li>解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、MyBatis</li>
<li>解决性能的问题：NoSQL、Java 多线程、Hadoop、Nginx、MQ、Elasticsearch</li>
</ol>
<h3> 1.1 Web 1.0 时代</h3>
<p>Web 1.0 的时代，数据访问量很有限，用一夫当关的高性能单点服务器可以解决大部分问题。</p>
<figure><img src="http://img.hl1015.top/blog/image-20211116130728895.png" alt="image-20211116130728895" tabindex="0" loading="lazy"><figcaption>image-20211116130728895</figcaption></figure>`,r:{minutes:4.59,words:1376},y:"a",t:"NoSQL 数据库简述"},["/database/redis/redis-1","/database/redis/redis-1.md"]],["v-df48c1ce","/database/redis/redis-10.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. Redis 的事务定义</h2>
<p>Redis 事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。</p>
<p>Redis 事务的主要作用就是 <span style="color:red">串联多个命令</span> 防止别的命令插队。</p>
<h2> 2. Multi、Exec、Discard</h2>
<p>从输入 Multi 命令开始，输入的命令都会依次进入命令队列中，但不会执行，直到输入 Exec 后，Redis 会将之前的命令队列中的命令依次执行。</p>
<p>组队的过程中可以通过 Discard 来放弃组队。</p>`,r:{minutes:3.46,words:1039},y:"a",t:"事务之锁机制 & 秒杀"},["/database/redis/redis-10","/database/redis/redis-10.md"]],["v-dbdf1090","/database/redis/redis-11.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 解决计数器和人员记录的事务操作</h2>
<figure><img src="http://img.hl1015.top/blog/image-20211119095356656.png" alt="image-20211119095356656" tabindex="0" loading="lazy"><figcaption>image-20211119095356656</figcaption></figure>
<p><strong>基础实现：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 模仿秒杀
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImitateSecKillRedisUtil</span> <span class="token punctuation">{</span>

    <span class="token comment">// 秒杀过程</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">doSecKill</span><span class="token punctuation">(</span><span class="token class-name">String</span> uid<span class="token punctuation">,</span> <span class="token class-name">String</span> prodid<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1 uid 和 prodid 非空判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uid <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> prodid <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"uid 和 prodid 不能为空！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 2 连接redis</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">"ip地址"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">"*****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3 拼接key</span>
        <span class="token comment">// 3.1 库存key</span>
        <span class="token class-name">String</span> kcKey <span class="token operator">=</span> <span class="token string">"sk:"</span> <span class="token operator">+</span> prodid <span class="token operator">+</span> <span class="token string">":qt"</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.2 秒杀成功用户key</span>
        <span class="token class-name">String</span> userKey <span class="token operator">=</span> <span class="token string">"sk:"</span> <span class="token operator">+</span> prodid <span class="token operator">+</span> <span class="token string">":user"</span><span class="token punctuation">;</span>

        <span class="token comment">// 4 获取库存，如果库存为null，秒杀还没有开始</span>
        <span class="token class-name">String</span> kc <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>kcKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>kc <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>kc<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"秒杀还没有开始，请等待！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">"秒杀还没有开始，请等待！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 5 判断用户是否重复秒杀操作</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>jedis<span class="token punctuation">.</span><span class="token function">sismember</span><span class="token punctuation">(</span>userKey<span class="token punctuation">,</span> uid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"已经秒杀成功了，不能重复秒杀！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">"已经秒杀成功了，不能重复秒杀！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 6 判断如果商品库存数量小于1，秒杀结束</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>kc<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"秒杀已经结束了！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">"秒杀已经结束了！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 7 秒杀过程</span>
        <span class="token comment">// 库存-1</span>
        jedis<span class="token punctuation">.</span><span class="token function">decr</span><span class="token punctuation">(</span>kcKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 把秒杀成功用户添加清单里面</span>
        jedis<span class="token punctuation">.</span><span class="token function">sadd</span><span class="token punctuation">(</span>userKey<span class="token punctuation">,</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"秒杀成功了..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"秒杀成功了..."</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.99,words:2698},y:"a",t:"事务之秒杀案例"},["/database/redis/redis-11","/database/redis/redis-11.md"]],["v-d8755f52","/database/redis/redis-12.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 总体介绍</h2>
<p>官网介绍：<a href="https://www.redis.io" target="_blank" rel="noopener noreferrer">https://www.redis.io</a></p>
<figure><img src="http://img.hl1015.top/blog/image-20211122131838716.png" alt="image-20211122131838716" tabindex="0" loading="lazy"><figcaption>image-20211122131838716</figcaption></figure>`,r:{minutes:4.83,words:1448},y:"a",t:"持久化之 RDB"},["/database/redis/redis-12","/database/redis/redis-12.md"]],["v-d50bae14","/database/redis/redis-13.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. AOF（Append Only File）</h2>
<h3> 1.1 AOF 是什么</h3>
<p><span style="color:red">以<strong>日志</strong>的形式来记录每个写操作（增量保存）</span>，将 Redis 执行过的所有写指令记录下来（<span style="color:red"><strong>读操作不会记录</strong></span>），<span style="color:red"><strong>只许追加文件但不可以改写文件</strong></span>，Redis 启动之初会读取该文件重新构建数据，换言之，Redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作</p>`,r:{minutes:7.51,words:2254},y:"a",t:"持久化之 AOF"},["/database/redis/redis-13","/database/redis/redis-13.md"]],["v-d1a1fcd6","/database/redis/redis-14.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 是什么</h2>
<p>主机数据更新后根据配置和策略，自动同步到备机的  <span style="color:red">master/slave 机制</span>， <span style="color:red"><strong>Master 以写为主，Slave 以读为主</strong></span></p>
<h2> 2. 能干嘛</h2>
<ul>
<li>读写分离，性能扩展</li>
<li>容灾快速恢复</li>
</ul>
<figure><img src="http://img.hl1015.top/blog/image-20211123101533604.png" alt="image-20211123101533604" tabindex="0" loading="lazy"><figcaption>image-20211123101533604</figcaption></figure>`,r:{minutes:6.47,words:1941},y:"a",t:"主从复制"},["/database/redis/redis-14","/database/redis/redis-14.md"]],["v-ce384b98","/database/redis/redis-15.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 问题</h2>
<ul>
<li>容量不够，Redis 如何进行扩容？</li>
<li>并发写操作，Redis 如何分摊？</li>
<li>
</li>
</ul>
<p>之前通过代理主机来解决，但是  中提供了解决方案，就是无中心化集群配置</p>
<h2> 2. 什么是集群</h2>
<ul>
<li>Redis 集群实现了对 Redis 的水平扩容，即启动 N 个 Redis 节点，将整个数据库分布存储在这  N 个节点中，每个节点存储总数据的 1 / N</li>
<li>Redis 集群通过分区（partition）来提供一定程度的可用性（availability）：即使集群中有一部分节点失效或者无法进行通讯，集群也可以继续处理命令请求</li>
</ul>`,r:{minutes:1.54,words:462},y:"a",t:"集群（待完善）"},["/database/redis/redis-15","/database/redis/redis-15.md"]],["v-cace9a5a","/database/redis/redis-16.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 缓存穿透</h2>
<h3> 1.1 问题描述</h3>
<p>key 对应的数据在数据源并不存在，每次针对此 key 的请求从缓存获取不到，请求都会压到数据源，从而可能压垮数据源。比如用一个不存在的用户 id 获取用户信息，不论缓存还是数据库都没有，若黑客利用此漏洞进行攻击可能压垮数据库。</p>
<figure><img src="http://img.hl1015.top/blog/image-20211124223024214.png" alt="image-20211124223024214" tabindex="0" loading="lazy"><figcaption>image-20211124223024214</figcaption></figure>`,r:{minutes:10.45,words:3135},y:"a",t:"应用问题解决"},["/database/redis/redis-16","/database/redis/redis-16.md"]],["v-c764e91c","/database/redis/redis-17.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. ACL</h2>
<h3> 1.1 简介</h3>
<p>Redis ACL 是 Access Control List（访问控制列表）的缩写，该功能允许根据可以执行的命令和可以访问的键来限制某些连接。</p>
<p>在 Redis 5 版本之前，Redis 安全规则只有密码控制，还有通过 rename 来调整高危命令比如 flushdb，keys *，shutdown 等。Redis 6 则提供 ACL 的功能对用户进行更细粒度的权限控制：</p>
<p>（1）接入权限：用户名和密码</p>
<p>（2）可以执行的命令</p>
<p>（3）可以操作的 key</p>
<p>参考官网：<a href="https://redis.io/topics/acl" target="_blank" rel="noopener noreferrer">https://redis.io/topics/acl</a></p>`,r:{minutes:4.44,words:1331},y:"a",t:"6.0 新功能"},["/database/redis/redis-17","/database/redis/redis-17.md"]],["v-b97ae9f0","/database/redis/redis-2.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<ul>
<li>Redis 是一个开源的 key-value 存储系统</li>
<li>和 Memcache 相比，它支持存储的 value 类型相对更多，包括 string（字符串）、list（链表）、set（集合）、zset（sorted set --- 有序集合）和 hash（哈希类型），这些数据类型都支持 push/pop、add/remove、取交集、并集和差集以及更丰富的操作，而且这些操作都是原子性的，在此基础上，Redis 支持各种不同方式的排序</li>
<li>与 Memcached 一样，为了保证效率，数据都是缓存在内存中，不同的是 Redis 会周期性地把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了 master-slave（主从）同步</li>
</ul>`,r:{minutes:6.02,words:1806},y:"a",t:"概述 & 安装"},["/database/redis/redis-2","/database/redis/redis-2.md"]],["v-b61138b2","/database/redis/redis-3.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<p>Redis 常见数据类型操作命令：<a href="http://www.redis.cn/commands.html" target="_blank" rel="noopener noreferrer">http://www.redis.cn/commands.html</a></p>
<h2> 1. Redis 键（key）</h2>
<ul>
<li>
<p>查看当前库所有 key（匹配：keys *1）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> aaa AAA
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"aaa"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>判断某个 key 是否存在</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> exists aaa
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查看 key 是什么类型</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">type</span> aaa
string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>删除指定的 key</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del aaa
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><span style="color:red">非阻塞删除</span></p>
<p>仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> bbb BBB
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> unlink bbb
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>为给定的 key 设置过期时间 &amp; 查看 key 还有多少秒过期 -1 表示永不过期，-2 表示已过期</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> ccc CCC
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> expire ccc <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl ccc
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl ccc
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl ccc
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查看当前数据库的 key 的数量</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"ddd"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> dbsize
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>切换数据库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token keyword">select</span> <span class="token number">5</span>
OK
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清空当前库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> dbsize
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> flushdb
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> dbsize
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通杀全部库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:6379<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> flushall
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:16.96,words:5087},y:"a",t:"常用五大数据类型"},["/database/redis/redis-3","/database/redis/redis-3.md"]],["v-b2a78774","/database/redis/redis-4.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. Units 单位</h2>
<ul>
<li>配置大小单位，开头定义了一些基本的度量单位，只支持 bytes，不支持 bit</li>
<li>大小写不敏感</li>
</ul>
<figure><img src="http://img.hl1015.top/blog/image-20211117191027942.png" alt="image-20211117191027942" tabindex="0" loading="lazy"><figcaption>image-20211117191027942</figcaption></figure>
<h2> 2. INCLUDES 包含</h2>`,r:{minutes:4.3,words:1290},y:"a",t:"配置文件介绍"},["/database/redis/redis-4","/database/redis/redis-4.md"]],["v-af3dd636","/database/redis/redis-5.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. 什么是发布和订阅</h2>
<ul>
<li>Redis 发布订阅（pub/sub）是一种消息通信模式：发送者（pub）发送消息，订阅者（sub）接收消息</li>
<li>Redis 客户端可以订阅任意数量的频道</li>
</ul>
<h2> 2. Redis 的发布和订阅</h2>
<p><strong>（1）客户端可以订阅频道如下图</strong></p>
<figure><img src="http://img.hl1015.top/blog/image-20211117214435263.png" alt="image-20211117214435263" tabindex="0" loading="lazy"><figcaption>image-20211117214435263</figcaption></figure>`,r:{minutes:.82,words:247},y:"a",t:"发布与订阅"},["/database/redis/redis-5","/database/redis/redis-5.md"]],["v-abd424f8","/database/redis/redis-6.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. Bitmaps</h2>
<h3> 1.1 简介</h3>
<p>现代计算机用二进制（位）作为信息的基础单位，1 个字节等于 8 位，例如 "abc" 字符串是由 3 个字节组成，但实际在计算机存储时将其用二进制表示，"abc" 分别对应的 ASCII 码分别是 97、98、99，对应的二进制分别是 01100001、01100010 和 01100011，如下图：</p>
<figure><img src="http://img.hl1015.top/blog/image-20211117231027912.png" alt="image-20211117231027912" tabindex="0" loading="lazy"><figcaption>image-20211117231027912</figcaption></figure>`,r:{minutes:9.48,words:2844},y:"a",t:"新数据类型"},["/database/redis/redis-6","/database/redis/redis-6.md"]],["v-a86a73ba","/database/redis/redis-7.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<h2> 1. Jedis 需要的 jar 包</h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.71,words:513},y:"a",t:"Jedis 测试"},["/database/redis/redis-7","/database/redis/redis-7.md"]],["v-a500c27c","/database/redis/redis-8.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<p><strong>完成一个手机验证码功能</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 发送验证码要求：
 * 1、输入手机号，点击发送后随机生成 6 位数字码，2 分钟有效
 * 2、输入验证码，点击验证，返回成功或者失败
 * 3、每个手机号每天只能输入 3 次（即发送三次验证码）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VerifyCodeUtil</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * jedis 实例
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">"ip地址"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 验证码相关 key 前缀
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">=</span> <span class="token string">"verifycode:"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 发送验证码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">telephone</span> 手机号
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">sendVerifyCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> telephone<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">"*****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取当天手机验证码的发送次数</span>
        <span class="token class-name">String</span> count <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">+</span> telephone <span class="token operator">+</span> <span class="token string">":count"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 首次发送验证码</span>
            <span class="token comment">// 设置过期时间为 当前时间 到 第二天 的 00:00:00 时刻</span>
            <span class="token class-name">Duration</span> duration <span class="token operator">=</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">between</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">plusDays</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">atTime</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> expireTime <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">*</span> duration<span class="token punctuation">.</span><span class="token function">toMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            jedis<span class="token punctuation">.</span><span class="token function">setex</span><span class="token punctuation">(</span><span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">+</span> telephone <span class="token operator">+</span> <span class="token string">":count"</span><span class="token punctuation">,</span> expireTime<span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 当前手机号验证码发送次数超过 3 次</span>
            <span class="token keyword">return</span> <span class="token string">"同一天内验证码发送次数不得超过 3 次！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 生成随机 6 位验证码，设置过期时间 2 分钟</span>
        <span class="token class-name">String</span> verifyCode <span class="token operator">=</span> <span class="token function">genRandomNumStr</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">setex</span><span class="token punctuation">(</span><span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">+</span> telephone <span class="token operator">+</span> <span class="token string">":code"</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">,</span> verifyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 发送验证码次数 + 1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            jedis<span class="token punctuation">.</span><span class="token function">incrBy</span><span class="token punctuation">(</span><span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">+</span> telephone <span class="token operator">+</span> <span class="token string">":count"</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"您的验证码为："</span> <span class="token operator">+</span> verifyCode <span class="token operator">+</span> <span class="token string">"，有效期：2 分钟！"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 验证手机号和验证码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">telephone</span>  手机号
     * <span class="token keyword">@param</span> <span class="token parameter">verifyCode</span> 验证码
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">checkVerifyCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> telephone<span class="token punctuation">,</span> <span class="token class-name">String</span> verifyCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">"*****"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> resultMsg<span class="token punctuation">;</span>
        <span class="token class-name">String</span> code <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">VERIFY_CODE_PREFIX</span> <span class="token operator">+</span> telephone <span class="token operator">+</span> <span class="token string">":code"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> verifyCode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resultMsg <span class="token operator">=</span> <span class="token string">"成功！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            resultMsg <span class="token operator">=</span> <span class="token string">"失败！"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> resultMsg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成一个定长的随机数字组成的字符
     *
     * <span class="token keyword">@param</span> <span class="token parameter">length</span> 字符的长度
     * <span class="token keyword">@return</span> 定长的随机数字组成的字符
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">genRandomNumStr</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            str<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.68,words:504},y:"a",t:"Jedis 实例"},["/database/redis/redis-8","/database/redis/redis-8.md"]],["v-a197113e","/database/redis/redis-9.html",{d:16391808e5,l:"2021年12月11日",c:"Redis",g:["Redis"],e:`<blockquote>
<p>SpringBoot 整合 Redis 非常简单，只需要按如下步骤整合即可！！！</p>
</blockquote>
<h2> 1. 整合步骤</h2>
<p><strong>（1）在 pom.xml 文件中引入 redis 相关依赖</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- redis --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- spring2.X 集成 redis 所需 common-pool2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.42,words:426},y:"a",t:"与 SpringBoot 整合"},["/database/redis/redis-9","/database/redis/redis-9.md"]],["v-e17274d6","/java/basic/array.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 一维数组</h2>
<ul>
<li>
<p><strong>数组的说明</strong></p>
<p>数组（array）：可以理解为多个相同数据类型的变量的组合。</p>
<p>目的：为了便于在内存中对数据进行统一管理。</p>
</li>
<li>
<p><strong>一维数组的声明与初始化</strong></p>
<p>（1）静态初始化：数组的赋值和数组元素的赋值同时进行。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）动态初始化：数组的赋值和数组元素的赋值分开进行。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>一维数组的引用</strong></p>
<p>通过下角标的方式进行调用（下角标从0开始，到数组长度-1结束）。</p>
<p>总结：不管是静态初始化还是动态初始化，一旦数组初始化完成，其长度就确定了，而且长度是不可变的。</p>
</li>
<li>
<p><strong>数组的属性</strong></p>
<p>数组的长度，即为数组中元素的个数，可以通过 length 属性来获取。</p>
</li>
<li>
<p><strong>一维数组的遍历</strong></p>
</li>
</ul>`,r:{minutes:3.55,words:1065},y:"a",t:"数组"},["/java/basic/array","/java/basic/array.md"]],["v-c93c9174","/java/basic/basic-grammar.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 标识符的使用</h2>
<ul>
<li>
<p><strong>规则</strong></p>
<p>（1）由26个英文字母大小写，0-9，_或$组成；</p>
<p>（2）数字不可以开头；</p>
<p>（3）不可以使用关键字和保留字，但能包含关键字和保留字；</p>
<p>（4）Java中严格区分大小写，长度无限制；</p>
<p>（5）标识符不能包含空格。</p>
</li>
<li>
<p><strong>规范</strong></p>
<p>（1）包名：多单词组成时字母都是小写：xxxyyyzzz；</p>
<p>（2）类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz；</p>
<p>（3）变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz；</p>
<p>（4）常量名：所有字母大写，多单词组成时，单词之间用_连接：XXX_YYY_ZZZ。</p>
</li>
<li>
<p><strong>注意</strong></p>
<p>在起名字时，为了提高阅读性，要尽量“见名知意”。</p>
</li>
</ul>`,r:{minutes:4.04,words:1211},y:"a",t:"基本语法"},["/java/basic/basic-grammar","/java/basic/basic-grammar.md"]],["v-422c02b4","/java/basic/collection.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 数组与集合</h2>
<ul>
<li>
<p><strong>内存中多个相同数据类型的存储“容器”：①数组 ②集合</strong></p>
<p>对应的，数据的持久化：①数据库 ②文件（.txt,.jpg,...） ③xml文件</p>
</li>
<li>
<p><strong>数组存储的特点</strong></p>
<p>①一旦初始化，其长度就确定了；</p>
<p>②存储有序的、重复的数据；</p>
<p>③声明的类型，就决定了只能操作此类型的元素。</p>
<p>数组存储的弊端：</p>
<p>①一旦初始化，其长度就不可变；</p>
<p>②数组中涉及到数据的增删改查的方法比较少，不及集合；</p>
<p>③不能存放无序的、要求不可重复的数据。</p>
</li>
<li>
<p><strong>集合存储的优点</strong></p>
<p>（1）使用集合，可以不用考虑长度问题，直接添加即可；</p>
<p>（2）集合中提供了丰富的方法，便于数据的操作（CRUD）；</p>
<p>（3）操作的数据特点更丰富，可以存储无序的、不可重复的；有序的、可重复的；键值对特点。</p>
</li>
<li>
<p><strong>数据结构研究的问题</strong></p>
<p>（1）数据与数据之间的逻辑关系：一对一，一对多，多对多；</p>
<p>（2）数据的存储结构：①顺序存储（典型：一维数组）②链式存储。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 单向链表</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
	<span class="token class-name">A</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 双向链表</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
	<span class="token class-name">A</span> prev<span class="token punctuation">;</span>
	<span class="token class-name">A</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 二叉树</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
	<span class="token class-name">A</span> left<span class="token punctuation">;</span>
	<span class="token class-name">A</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:19.95,words:5986},y:"a",t:"集合"},["/java/basic/collection","/java/basic/collection.md"]],["v-131b2324","/java/basic/common-class.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. String、StringBuffer、StringBuilder</h2>
<blockquote>
<p>（一）java.lang.String 类</p>
</blockquote>
<ul>
<li>
<p><strong>特点</strong></p>
<p>String 的不可变性</p>
<p>体现：</p>
<p>①给现有的字符串添加一个新的字符串，不能在原有的字符串后面添加，而必须声明一个新的内存空间，存放新的字符串；</p>
<p>②给现有的字符串重新赋值，不能在原有的常量池对应的字符串的位置赋值，必须重新声明一个新的内存空间，存放新的字符串；</p>
<p>③现有的字符串调用 replace() 方法，仍然声明一个新的内存空间，存放修改以后的字符串。</p>
</li>
<li>
<p><strong>内存的存储结构</strong></p>
<p>String 声明的变量，我们称为字符串，本质上数据存放在字符串常量池中，字符串常量池存放在方法区中。</p>
<blockquote>
<p>jdk 6：方法区（具体的实现就是永久代---&gt;堆：新生代、老年代、永久代）；</p>
<p>jdk 7：方法区取消，统一归入堆；</p>
<p>jdk 8：元空间取代原的方法区</p>
</blockquote>
</li>
<li>
<p><strong>String 的实例化方式</strong></p>
<p>方式一：通过字面量定义的方式；</p>
<p>方式二：通过new + 构造器的方式。</p>
<p>二者区别：</p>
<p>①字面量的方式：地址值对应的数据声明在方法区中的字符串常量池；</p>
<p>②new + 构造器的方式：地址值对应的数据声明在堆空间中（堆空间中对应的 String 对象里存的是对应声明在字符串常量池中的字符串（若有，则不用创建；若无，就创建）的地址值）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 方式一：通过字面量的方式</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
		
<span class="token comment">// 方式二：通过new + 构造器的方式</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210811110223198.png" alt="image-20210811110223198" tabindex="0" loading="lazy"><figcaption>image-20210811110223198</figcaption></figure>
</li>
</ul>`,r:{minutes:11.89,words:3566},y:"a",t:"Java 常用类"},["/java/basic/common-class","/java/basic/common-class.md"]],["v-58be56fd","/java/basic/enum-and-annotation.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 枚举类的使用</h2>
<ul>
<li>
<p><strong>枚举类的理解</strong></p>
<p>如果一个类中的对象的个数是有限可列的，那么我们说此类是一个枚举类。</p>
<p>--&gt; 如何定义枚举类？</p>
<p>方法一：自定义枚举类；</p>
<p>方法二：jdk 5.0 新增了enum 的方式。</p>
</li>
<li>
<p><strong>如何自定义枚举类？步骤</strong></p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.提供类的对象的属性</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>
	
	<span class="token comment">// 2.提供构造器,私的</span>
	<span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 3.提供当前枚举类的对象</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SPRING</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"春天"</span><span class="token punctuation">,</span> <span class="token string">"春暖花开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SUMMER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"夏天"</span><span class="token punctuation">,</span> <span class="token string">"夏日炎炎"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">AUTUMN</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"秋天"</span><span class="token punctuation">,</span> <span class="token string">"秋高气爽"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">WINTER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"冬天"</span><span class="token punctuation">,</span> <span class="token string">"寒冬凛冽"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">"Season [seasonName="</span> <span class="token operator">+</span> seasonName <span class="token operator">+</span> <span class="token string">", seasonDesc="</span> <span class="token operator">+</span> seasonDesc <span class="token operator">+</span> <span class="token string">"]"</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>		
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.35,words:1006},y:"a",t:"枚举类和注解"},["/java/basic/enum-and-annotation","/java/basic/enum-and-annotation.md"]],["v-a57a2242","/java/basic/exception.html",{d:1684314085e3,g:["Java 基础"],e:`<h2> 1. 异常</h2>
<ul>
<li>
<p><strong>异常的体系结构</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Throwable</span>

 	<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Error</span>：错误

 			<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token class-name">StackOverflowError</span>

 			<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token constant">OOM</span>

 	<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Exception</span>：异常

 			<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> 编译时异常<span class="token punctuation">(</span>非<span class="token class-name">RuntimeException</span><span class="token punctuation">)</span>：执行javac<span class="token punctuation">.</span>exe命令时，报出的异常

 			<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> 运行时异常<span class="token punctuation">(</span><span class="token class-name">RuntimeException</span><span class="token punctuation">)</span>：执行java<span class="token punctuation">.</span>exe命令时，报出的异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Error：错误</strong></p>
<p>（1）java 虚拟机无法解决的严重问题；</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如：JVM系统内部错误、资源耗尽等严重情况。例：StackOverflowError 和 OOM。</p>
<p>（2）一般不编写针对性的代码进行处理。</p>
</li>
<li>
<p><strong>Exception：异常</strong></p>
<p>（1）其他因编程错误或偶然的外在因素导致的一般性问题；</p>
<p>（2）可以使用针对性的代码进行处理。</p>
</li>
<li>
<p><strong>从程序执行过程，看编译时异常和运行时异常</strong></p>
</li>
</ul>`,r:{minutes:7.11,words:2133},y:"a",t:"异常处理"},["/java/basic/exception","/java/basic/exception.md"]],["v-b231bd26","/java/basic/genericity.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 泛型在集合中的使用</h2>
<ul>
<li>
<p><strong>在集合中使用泛型的例子</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">89</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">76</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">54</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 问题一：类型不安全</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"AA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Object</span> obj <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 问题二：需要强转，一方面繁琐，另一方面可能报ClassCastException</span>
		<span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子1：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">67</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">54</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">87</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// list.add("MM");</span>

	<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Integer</span> score <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">// 不允许。</span>
    <span class="token comment">// List&lt;int&gt; list = new ArrayList&lt;int&gt;();</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类型推断：int[] arr = {1,2,3};</span>

	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Lilei"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"HanMeimei"</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Jim"</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// map.put(12, "Jerry");</span>

	<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> entrySet <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span>entrySet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"--&gt;"</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>总结</strong></p>
<p>（1）泛型参数只能使用引用数据类型，不能使用基本数据类型；</p>
<p>（2）集合中，如果没有使用泛型，则默认使用 Object 类型；</p>
<p>​        &nbsp;如果集合中使用泛型，则集合的相关属性、方法中，凡是使用到类或接口泛型参数的地方，都要调整为具体的泛型类型。</p>
<p>（3）什么时候使用泛型呢？</p>
<p>​        &nbsp;首先，类或接口应该声明为泛型类、泛型接口；</p>
<p>​        &nbsp;其次，在实例化类时，就可以指明泛型参数的类型。</p>
</li>
</ul>`,r:{minutes:4.11,words:1234},y:"a",t:"泛型"},["/java/basic/genericity","/java/basic/genericity.md"]],["v-385b501e","/java/basic/io.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. File 类的使用</h2>
<ul>
<li>
<p><strong>java.io.File 类的使用</strong></p>
<p>（1）FIle 类的一个对象，代表着一个文件（.txt , .doc , .jpg , .avi等）或文件目录；</p>
<p>（2）本章涉及到的 File，流相关的类，都定义在 <code>java.io</code> 包下；</p>
<p>（3）File 类的对象，如果作为一个文件，就可以理解作为一个端点（起始点、目标点）被流所使用；</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代码上的体现：常常将 File 类的对象，作为参数传递给流的构造器中。</p>
<p>（4）File 类中提供了文件或文件目录的创建、重命名、长度、删除等操作，但是并没涉及到文件内容的读写。如果涉及到文件内容的读写的话，就需要使用流。</p>
</li>
<li>
<p><strong>File 类的实例化</strong></p>
</li>
</ul>`,r:{minutes:11.65,words:3494},y:"a",t:"IO流"},["/java/basic/io","/java/basic/io.md"]],["v-da4a4d7e","/java/basic/jdk8-new-feature.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 一、Lambda 表达式</h2>
<h3> 1. Lambda 使用</h3>
<h4> 1.1 为什么要使用 Lambda 表达式？</h4>
<p>Lambda 表达式是一个 <strong>匿名函数</strong>，我们可以把表达式理解为是 <strong>一段可以传递的代码</strong>（将代码像数据一样进行传递），可以写出更简洁、灵活的代码，作为一种更紧凑的代码风格，使 Java 的语言表达能力得到了提升。</p>
<h4> 1.2 从匿名内部类到 Lambda 的转换</h4>
<p>举例 1：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 匿名内部类</span>
    <span class="token class-name">Runnable</span> r1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    r1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"==========================================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Lambda 表达式</span>
    <span class="token class-name">Runnable</span> r2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello Lambda!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r2<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.64,words:5293},y:"a",t:"Java8 新特性"},["/java/basic/jdk8-new-feature","/java/basic/jdk8-new-feature.md"]],["v-06bb7d66","/java/basic/multi-thread.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 程序、线程、进程的理解</h2>
<p>程序（program）：是为完成特定任务、用某种语言编写的一组指令的集合，即指一段静态的代码，静态对象。</p>
<p>进程（process）：是程序的一次执行过程，或是正在运行的一个程序。动态过程：有它自身的产生、存在和消亡的过程。——生命周期。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①如：运行中的QQ、运行中的QQ播放器；</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②进程是动态的，程序是静态的；</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域。</p>`,r:{minutes:10.15,words:3045},y:"a",t:"多线程"},["/java/basic/multi-thread","/java/basic/multi-thread.md"]],["v-532671a0","/java/basic/network.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. InetAddress 类的使用</h2>
<ul>
<li>
<p><strong>实现网络通信需要解决的两个问题</strong></p>
<p>（1）如何准确地定位互联网上的一台或多台主机；</p>
<p>（2）如何实现可靠而高效的数据传输。</p>
</li>
<li>
<p><strong>网络通信（就对应着上面的两个问题）</strong></p>
<p>要素一：使用 IP 地址，定位网络中的主机；</p>
<p>要素二：遵循相关的网络通信协议。</p>
</li>
<li>
<p><strong>针对要素一</strong></p>
<p>（1）IP：一个 IP 地址，对应着网络中的一台主机。如“192.168.10.16”、“127.0.0.1” --- 本地回路地址。</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 InetAddress 类来代表 IP，一个 InetAdress 类的对象，就代表着一个具体的 IP 地址。</p>
<p>（2）如何实现 InetAdress 类</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①getByName(String hostName) ②getLocalHost()；</p>
<p>（3）两个方法的使用</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getHostName() / getHostAddress()</p>
<p>（4）域名：<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com</a></p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域名解析：域名容易记忆，当在连接网络时，输入一个主机的域名之后，域名服务器（DNS）负责将域名转化为 IP 地址，这样才能和主机建立连接）。</p>
</li>
<li>
<p><strong>端口号的使用</strong></p>
<p>端口号标识正在计算机中运行的进程（程序）</p>
<p>注意：不同的进程对应不同的端口号</p>
<p>常见的端口号：http:80  tomcat:8080  mysql:3306  oracle:1521 等。</p>
</li>
<li>
<p><strong>针对要素二</strong></p>
<p>使用网络通信协议</p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/blog/article/computer_network/img202103092243.png" alt="network-protocol" tabindex="0" loading="lazy"><figcaption>network-protocol</figcaption></figure>
</li>
<li>
<p><strong>TCP 与 UDP 协议的区别</strong></p>
<p>TCP 协议：</p>
<p>（1）使用 TCP 协议前，须先建立 TCP 连接，形成传输数据通道；</p>
<p>（2）传输前，采用“三次握手”的方式，是可靠的；</p>
<p>（3）TCP 协议进行通信的两个应用进程：客户端、服务端；</p>
<p>（4）在连接中可进行大数据量的传输；</p>
<p>（5）传输完毕，需释放已建立的连接，效率低。</p>
<p>UDP 协议：</p>
<p>（1）将数据、源、目的封装成数据包，不需要建立连接；</p>
<p>（2）每个数据报的大小限制在 64k 内；</p>
<p>（3）因无需连接，故是不可靠的；</p>
<p>（4）发送数据结束时无需释放资源，速度快。</p>
</li>
</ul>`,r:{minutes:4.71,words:1414},y:"a",t:"网络编程"},["/java/basic/network","/java/basic/network.md"]],["v-7c1a6ef8","/java/basic/object-oriented-1.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 类与对象</h2>
<ul>
<li>
<p><strong>面向对象学习的三条主线</strong></p>
<p>（1）类与类的成员：属性、方法、构造器、代码块、内部类</p>
<p>（2）面向对象的三大特征：封装性、继承性、多态性、（抽象性）</p>
<p>（3）关键字：this、package、import、super、final、abstract、interface等</p>
</li>
<li>
<p><strong>面向对象与面向过程（理解）</strong></p>
<p>面向过程：强调的是功能行为。</p>
<p>面向对象：将功能封装进对象，强调了具备功能的对象。</p>
</li>
<li>
<p><strong>完成一个项目（或功能）的思路</strong></p>
<p>（1）是否已经存在具有相关功能结构的对象，如果存在，直接调用；</p>
<p>（2）如果此对象不存在，则需要自己创建一个对象；</p>
<p>（3）如果发现创建此对象的类不存在，则需要创建一个具备相关功能的类。</p>
</li>
<li>
<p><strong>面向对象中两个重要的概念</strong></p>
<p>类（class）：对一类事物的描述，抽象的，概念的。</p>
<p>对象（object、instance）：实实在在存在的一个个体，是具体的，形象的。</p>
<p>二者的关系：对象，是由类派生的，创建的。</p>
</li>
<li>
<p><strong>面向对象思想落地实现的规则</strong></p>
<p>（1）创建一个类，并设计类的内部结构：属性、方法、构造器、代码块、内部类；</p>
<p>（2）创建类的对象（最主要的方法：new()）；</p>
<p>（3）通过“对象.方法”或“对象.属性”的方式，实现相关的功能的调用。</p>
</li>
</ul>`,r:{minutes:9.5,words:2849},y:"a",t:"面向对象(上)"},["/java/basic/object-oriented-1","/java/basic/object-oriented-1.md"]],["v-7dcf4797","/java/basic/object-oriented-2.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 面向对象的特征二：继承性</h2>
<ul>
<li>
<p><strong>为什么要有类的继承（继承性的好处）？</strong></p>
<p>①减少了冗余，提高了代码的复用性；</p>
<p>②更好的扩展性；</p>
<p>③为多态的使用，提供前提。</p>
</li>
</ul>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/java/base/image-20210810013047426.png" alt="image-20210810013047426" tabindex="0" loading="lazy"><figcaption>image-20210810013047426</figcaption></figure>`,r:{minutes:13.57,words:4072},y:"a",t:"面向对象(中)"},["/java/basic/object-oriented-2","/java/basic/object-oriented-2.md"]],["v-7f842036","/java/basic/object-oriented-3.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. 关键词：static</h2>
<ul>
<li>
<p><strong>可以用来修饰的结构</strong></p>
<p>属性、方法、代码块、内部类</p>
</li>
<li>
<p><strong>static 修饰属性：静态变量（或类变量）</strong></p>
<p>①将属性按照是否使用 static 修饰，分为类变量和实例变量</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类变量：类创建的多个对象共用同一套类变量；</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实例变量：类创建的每个对象各自拥有一套实例变量。</p>
<p>②类的某一个对象可以调用类变量，其对类变量的修改，会导致其他对象调用此类变量时，是修改过了的，而类的某一个对象修改了实例变量，不会影响其他对象同名的实例变量的值；</p>
<p>③类变量，随着类的加载而加载，实例变量，随着对象的创建而加载；</p>
<p>④内存中，实例变量存储在堆空间中，类变量存储在静态域中，而静态域存储在方法区。</p>
</li>
<li>
<p><strong>static修饰方法</strong></p>
<p>①随着类的加载而加载；</p>
<p>②在静态方法内部：能调用静态的属性或静态的方法，不能调用非静态的属性或非静态的方法；</p>
<p>在非静态方法内部：能调用静态的属性或静态的方法，也能调用非静态的属性或非静态的方法；</p>
</li>
<li>
<p><strong>如何使用static关键字？</strong></p>
<p>（1）什么样的属性适合声明为 static？</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①类的多个对象要共享此唯一的数据；</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②类中的常量。</p>
<p>（2）什么样的方法适合声明为 static？</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①工具类中的方法（比如：Arrays工具类）；</p>
<p>​    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②操作静态变量的方法，通常为静态的。</p>
</li>
<li>
<p><strong>举例</strong></p>
<p>单例模式、工具类：Arrays / Math / Collections / XxxUtils / XxxFactory</p>
</li>
</ul>`,r:{minutes:10.07,words:3021},y:"a",t:"面向对象(下)"},["/java/basic/object-oriented-3","/java/basic/object-oriented-3.md"]],["v-8ded9d8e","/java/basic/reflection.html",{d:1684314085e3,c:"Java",g:["Java 基础"],e:`<h2> 1. Class 的理解</h2>
<ul>
<li>
<p><strong>反射的内容</strong></p>
<p>①Class 的理解；</p>
<p>②获取 Class 的实例；</p>
<p>③反射的应用一：动态地创建运行时类的对象：newInstance()；</p>
<p>④反射的应用二：获取运行时类中完整的类的结构：属性、方法、构造器、父类、包、 注解。。。；</p>
<p>⑤反射的应用三：调用运行时类中的指定的结构：属性、方法、构造器。</p>
</li>
<li>
<p><strong>Class 的理解（一个 Class 实例对应着一个运行时类）</strong></p>
<p>（1）java.lang.Class：是反射的源头；</p>
<p>（2）java 源文件经过编译（javac.exe）以后，会生成一个或多个字节码文件（.class），使用 java.exe 命令，将指定的字节码文件加载（使用类的加载器）到内存中，则加载到内存中的字节码文件对应的类，我们就称为运行时类。此运行时类本身就充当了 Class 的实例；</p>
<p>（3）运行时类一旦加载到内存中，就会随着 JVM 的存在而存在，即运行时类只被加载一次。</p>
</li>
<li>
<p><strong>反射：体现 java 语言的动态的特性</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 根据传入类的全类名，动态的创建对应的运行时类的对象</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">String</span> className<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:4.76,words:1427},y:"a",t:"反射机制"},["/java/basic/reflection","/java/basic/reflection.md"]],["v-1bfdd03a","/java/jdbc/jdbc-1.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. 数据的持久化</h2>
<p>（1）持久化（peristence）：<strong>把数据保存到可掉电式的存储设置中供之后使用。<strong>大多数情况下，特别是企业级应用</strong>，数据持久化意味着将内存中的数据保存到磁盘上加以 "固化"</strong>，而持久化的实现过程大多通过各种关系型数据库来完成。</p>
<p>（2）持久化的主要应用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XML 数据文件中。</p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210914151526458.png" alt="image-20210914151526458" tabindex="0" loading="lazy"><figcaption>image-20210914151526458</figcaption></figure>`,r:{minutes:2.5,words:750},y:"a",t:"JDBC 概述"},["/java/jdbc/jdbc-1","/java/jdbc/jdbc-1.md"]],["v-1db2a8d9","/java/jdbc/jdbc-2.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 0. 准备工作</h2>
<p>由于这里使用的是 MySQL 8，所以以 MySQL 8 做示例</p>
<p>MySQL8 数据库驱动下载地址：<a href="https://dev.mysql.com/downloads/connector/j/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/connector/j/</a></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210914152740939.png" alt="image-20210914152740939" tabindex="0" loading="lazy"><figcaption>image-20210914152740939</figcaption></figure>`,r:{minutes:4.21,words:1264},y:"a",t:"获取数据库连接"},["/java/jdbc/jdbc-2","/java/jdbc/jdbc-2.md"]],["v-1f678178","/java/jdbc/jdbc-3.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. 操作和访问数据库</h2>
<p>（1）数据库连接被用于数据库服务器发送命令和 SQL 语句，并接受数据库服务器返回的结果。其实一个数据库连接就是一个 Socket 连接。</p>
<p>（2）在 java.sql 包中有 3 个接口分别定义了对数据库的调用的不同方式：</p>
<ul>
<li>Statement：用于执行静态 SQL 语句并返回它所生成结果的对象</li>
<li>PreparedStatement：SQL 语句被预编译存储在此对象中，可以使用此对象多次高效地执行该语句</li>
<li>CallableStatement：用于执行 SQL 存储过程</li>
</ul>`,r:{minutes:12.38,words:3713},y:"a",t:"使用 PreparedStatement 实现 CRUD 操作"},["/java/jdbc/jdbc-3","/java/jdbc/jdbc-3.md"]],["v-211c5a17","/java/jdbc/jdbc-4.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. MySQL BLOB 类型字段</h2>
<p>（1）MySQL 中，BLOB 是一个二进制大型对象，是一个可以存储大量数据的容器，它能容纳不同大小的数据。</p>
<p>（2）插入 BLOB 类型的数据必须使用 PreparedStatement，因为 BLOB 类型的数据无法使用字符串拼接写。</p>
<p>（3）MySQL 的四种 BLOB 类型(除了在存储的最大信息量上不同外，它们是等同的)。</p>
<table>
<thead>
<tr>
<th><strong>类型</strong></th>
<th><strong>大小(单位：字节)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>TinyBlob</td>
<td>最大   255</td>
</tr>
<tr>
<td>Blob</td>
<td>最大   65K</td>
</tr>
<tr>
<td>MediumBlob</td>
<td>最大   16M</td>
</tr>
<tr>
<td>LongBlob</td>
<td>最大   4G</td>
</tr>
</tbody>
</table>`,r:{minutes:2.38,words:713},y:"a",t:"操作 BLOB 类型字段"},["/java/jdbc/jdbc-4","/java/jdbc/jdbc-4.md"]],["v-22d132b6","/java/jdbc/jdbc-5.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<p><strong>层次一：使用 Statement实现</strong></p>
<p><strong>层次二：使用 PreparedStatement 替换 Statement</strong></p>
<p><strong>层次三：使用 addBatch() / executeBatch() / clearBatch()</strong></p>
<p>MySQL 服务器是默认关闭批处理的，我们需要通过一个参数，让 MySQL 开启批处理的支持</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?rewriteBatchedStatements=true # 写在配置文件的url的后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.75,words:225},y:"a",t:"批量插入"},["/java/jdbc/jdbc-5","/java/jdbc/jdbc-5.md"]],["v-24860b55","/java/jdbc/jdbc-6.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. 数据库事务介绍</h2>
<p>（1）事务：一组逻辑单元，使数据从一种状态变换到另一种状态。</p>
<p>（2）<strong>事务处理(事务操作)原则</strong>：保证所有事务都作为一个工作单元来执行，即使出现了故障，都不能改变这种执行方式。当在一个事务中执行多个操作时，要么所有的事务都<strong>被提交</strong>(<strong>commit</strong>)，那么这些修改就永久地保存下来；要么数据库管理系统将放弃所作的所有修改，整个事务<strong>回滚</strong>(<strong>rollback</strong>)到最初状态。</p>
<p>（3）为确保数据库中数据的一致性，数据的操纵应当是离散的成组的逻辑单元：当它全部完成时，数据应保持一致性，而当这个单元中的一部分操作失败，整个事务应全部视为错误，所有从起始点以后的操作应全部回退到开始状态。</p>`,r:{minutes:5.44,words:1633},y:"a",t:"数据库事务"},["/java/jdbc/jdbc-6","/java/jdbc/jdbc-6.md"]],["v-263ae3f4","/java/jdbc/jdbc-7.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. JDBC 数据库连接池的必要性</h2>
<p>（1）在使用开发基于数据库的 web 程序时，传统的设计模式是按以下步骤：</p>
<ul>
<li>①在主程序(如 servlet、beans)中建立数据库连接</li>
<li>②进行 sql 操作</li>
<li>③断开数据库连接</li>
</ul>
<p>（2）这种模式开发，存在的问题：</p>
<ul>
<li>①<strong>普通的 JDBC 数据库连接使用 DriverManager 来获取</strong>，每次向数据库建立连接的时候都要将 Connection 加载到内存中，再验证用户名和密码(得花费0.05s~1s的时间)。需要数据库连接的时候，就向数据库要求一个，执行完成后再断开连接。这样的方式将会消耗大量的资源和时间。数据库的连接资源并没有得到很好的利用。若同时有几百人甚至几千人在线，频繁的进行数据库连接操作将占用很多的系统资源，严重的甚至会造成服务器的崩溃。</li>
<li>②<strong>对于每一次数据库连接，使用完后都得断开</strong>。否则，如果程序出现异常而未能关闭，将会导致数据库系统中的内存泄露，最终将导致重启数据库。(回忆：何为 Java 的内存泄露?)</li>
<li>③<strong>这种开发不能控制被创建的连接对象数</strong>，系统资源会被毫无顾及地分配出去，如果连接过多，也可能导致内存泄漏，服务器崩溃。</li>
</ul>`,r:{minutes:5.51,words:1654},y:"a",t:"数据库连接池"},["/java/jdbc/jdbc-7","/java/jdbc/jdbc-7.md"]],["v-27efbc93","/java/jdbc/jdbc-8.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<h2> 1. Apache-DBUtils 简介</h2>
<p>（1）commons-dbutils 是 Apache 组织提供的一个开源的 JDBC 工具类库，它是对 JDBC 的简单封装，学习成本极低，并且使用 dbutils 能极大简化 jdbc 编码的工作量，同时也不会影响程序的性能。</p>
<p>（2）API 介绍</p>
<p>①org.apache.commons.dbutils.QueryRunner</p>
<p>②org.apache.commons.dbutils.ResultSetHandler</p>
<p>③工具类：org.apache.commons.dbutils.DbUtils</p>`,r:{minutes:2.41,words:722},y:"a",t:"Apache-DBUtils 实现 CRUD 操作"},["/java/jdbc/jdbc-8","/java/jdbc/jdbc-8.md"]],["v-29a49532","/java/jdbc/jdbc-9.html",{d:16315776e5,l:"2021年9月14日",c:"Java",g:["JDBC"],e:`<p><strong>（1）考虑事务以后的数据库操作</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1、获取数据库的连接</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 方式1：手动获取连接 方式2：数据库连接池</span>
conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 体现事务</span>

<span class="token comment">// 2、如下的多个 DML 操作，作为一个事务出现</span>
操作<span class="token number">1</span>：需要使用通用的增删改查操作 <span class="token comment">// 通用的增删改查操作如何实现？</span>
操作<span class="token number">2</span>：需要使用通用的增删改查操作 <span class="token comment">// 方式1：手动使用 PreparedStatement 实现</span>
操作<span class="token number">3</span>：需要使用通用的增删改查操作 <span class="token comment">// 方式2：使用 dbUtils.jar 中的 QueryRunner 方法</span>
conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3、如果出现异常，则</span>
conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4、关闭资源</span>
<span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">closeResource</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 方式1：手动关闭资源 方式2：使用 DbUtils 类的关闭方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.9,words:271},y:"a",t:"总结"},["/java/jdbc/jdbc-9","/java/jdbc/jdbc-9.md"]],["v-4b724775","/linux/basic/linux-basic-1.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. 为什么要学习 Linux？</h2>
<p>开源、稳定、漏洞少、靠谱公司都用它。</p>
<h2> 2. Linux 是什么？</h2>
<p>Linux 是一套免费试用和自由传播的类 Unix 操作系统。</p>
<h2> 3. Linux 与 Unix 的那些事</h2>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210913132447213.png" alt="image-20210913132447213" tabindex="0" loading="lazy"><figcaption>image-20210913132447213</figcaption></figure>`,r:{minutes:.54,words:162},y:"a",t:"简介"},["/linux/basic/linux-basic-1","/linux/basic/linux-basic-1.md"]],["v-4d272014","/linux/basic/linux-basic-2.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. Linux 系统从哪下载</h2>
<ul>
<li>网易镜像：<a href="http://mirrors.163.com/centos/7/isos/" target="_blank" rel="noopener noreferrer">http://mirrors.163.com/centos/7/isos/</a></li>
<li>搜狐镜像：<a href="http://mirrors.sohu.com/centos/7/isos/" target="_blank" rel="noopener noreferrer">http://mirrors.sohu.com/centos/7/isos/</a></li>
</ul>`,r:{minutes:1.08,words:323},y:"a",t:"VM 与 Linux 的安装"},["/linux/basic/linux-basic-2","/linux/basic/linux-basic-2.md"]],["v-4edbf8b3","/linux/basic/linux-basic-3.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. Linux 一切皆文件</h2>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210913142430439.png" alt="image-20210913142430439" tabindex="0" loading="lazy"><figcaption>image-20210913142430439</figcaption></figure>
<h2> 2. 目录结构</h2>
<table>
<thead>
<tr>
<th>目录</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>/bin</strong> (/usr/bin、/usr\\local\\bin)</td>
<td>是 Binary 的缩写，这个目录存放着最经常使用的命令</td>
</tr>
<tr>
<td><strong>/sbin</strong> (/usr/sbin、/usr\\local\\sbin)</td>
<td>s 就是 Super User 的意思，这里存放的是系统管理员使用的系统管理程序</td>
</tr>
<tr>
<td><strong>/home</strong></td>
<td>存放普通用户的主目录，在 Linux 中每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的</td>
</tr>
<tr>
<td>/lib</td>
<td>系统开机所需要最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库</td>
</tr>
<tr>
<td>/lost+found</td>
<td>这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件</td>
</tr>
<tr>
<td><strong>/etc</strong></td>
<td>所有的系统管理所需要的配置文件和子目录</td>
</tr>
<tr>
<td><strong>/usr</strong></td>
<td>这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似与 windows 下的 program files 目录。</td>
</tr>
<tr>
<td><strong>/boot</strong></td>
<td>这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件，自己的安装别放这里</td>
</tr>
<tr>
<td>/proc</td>
<td>这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息</td>
</tr>
<tr>
<td>/srv</td>
<td>service 缩写，该目录存放一些服务启动之后需要提取的数据</td>
</tr>
<tr>
<td>/sys</td>
<td>这是 linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs</td>
</tr>
<tr>
<td>/tmp</td>
<td>这个目录是用来存放一些临时文件的</td>
</tr>
<tr>
<td><strong>/dev</strong></td>
<td>类似于 windows 的设备管理器，把所有的硬件用文件的形式存储</td>
</tr>
<tr>
<td><strong>/media（centos6）</strong></td>
<td>linux 系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，linux 会把识别的设备挂载到这个目录下。</td>
</tr>
<tr>
<td><strong>/run</strong></td>
<td>进程产生的临时文件，虚拟机加载光盘映像在：/run/media/root/  目录下</td>
</tr>
<tr>
<td>/mnt</td>
<td>系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在 /mnt/ 上，然后进入该目录就可以查看里的内容了。</td>
</tr>
<tr>
<td><strong>/opt</strong></td>
<td>这是给主机额外安装软件所摆放的目录。比如你安装一个 ORACLE 数据库则就可以放到这个目录下。默认是空的</td>
</tr>
<tr>
<td><strong>/usr/local</strong></td>
<td>这是另一个给主机额外安装软件所摆放的目录。一般是通过编译源码方式安装的程序</td>
</tr>
<tr>
<td><strong>/var</strong></td>
<td>这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件</td>
</tr>
</tbody>
</table>`,r:{minutes:2.43,words:728},y:"a",t:"文件与目录结构"},["/linux/basic/linux-basic-3","/linux/basic/linux-basic-3.md"]],["v-5090d152","/linux/basic/linux-basic-4.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. VI、VIM 是什么</h2>
<p>VI、VIM 是 Linux 系统命令行下的文本编辑器。</p>
<p>通过命令 <strong>vi 文件名</strong> 或者 <strong>vim 文件名</strong> 来使用。</p>
<h2> 2. 三种模式</h2>
<h3> 2.1 一般模式（默认模式）</h3>
<p>（1）通过 vi 或者是 vim 打开文档后默认进入到一般模式，该模式下主要负责查看和一些基础的修剪工作</p>
<p>（2）常用的操作</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>dd</td>
<td>删除光标当前行</td>
</tr>
<tr>
<td>dnd</td>
<td>删除 n 行</td>
</tr>
<tr>
<td>u</td>
<td>撤销上一步</td>
</tr>
<tr>
<td>x</td>
<td>删除一个字母，类似于键盘上的 Delete 功能</td>
</tr>
<tr>
<td>X</td>
<td>删除一个字母，类似于键盘上的 Backspace 功能</td>
</tr>
<tr>
<td>yy</td>
<td>复制光标当前行</td>
</tr>
<tr>
<td>p</td>
<td>粘贴</td>
</tr>
<tr>
<td>dw</td>
<td>删除一个词</td>
</tr>
<tr>
<td>yw</td>
<td>复制一个词</td>
</tr>
<tr>
<td>Shift + g</td>
<td>移动到页尾</td>
</tr>
<tr>
<td>N + gg</td>
<td>移动到第 N 行</td>
</tr>
<tr>
<td>Shift + 6</td>
<td>移动到行头</td>
</tr>
<tr>
<td>Shift + 4</td>
<td>移动到行尾</td>
</tr>
</tbody>
</table>`,r:{minutes:1.72,words:515},y:"a",t:"VI、VIM 编辑器"},["/linux/basic/linux-basic-4","/linux/basic/linux-basic-4.md"]],["v-5245a9f1","/linux/basic/linux-basic-5.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. 基本命令</h2>
<table>
<thead>
<tr>
<th>命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>man</td>
<td style="text-align:left">帮助手册</td>
</tr>
<tr>
<td>--help</td>
<td style="text-align:left">帮助手册</td>
</tr>
<tr>
<td>date</td>
<td style="text-align:left">日期</td>
</tr>
<tr>
<td>cal</td>
<td style="text-align:left">日历</td>
</tr>
<tr>
<td>pwd</td>
<td style="text-align:left">显示当前所在的目录</td>
</tr>
<tr>
<td>cd</td>
<td style="text-align:left">切换目录</td>
</tr>
<tr>
<td>ls</td>
<td style="text-align:left">显示当前目录下的内容</td>
</tr>
<tr>
<td>grep</td>
<td style="text-align:left">通过 | 管道符，配置 grep 进行过滤筛选</td>
</tr>
<tr>
<td>mkdir</td>
<td style="text-align:left">创建目录<br>-p：同时创建多级目录</td>
</tr>
<tr>
<td>touch</td>
<td style="text-align:left">创建文件</td>
</tr>
<tr>
<td>rmdir</td>
<td style="text-align:left">删除一个空目录</td>
</tr>
<tr>
<td>rm</td>
<td style="text-align:left">删除文件或者目录<br>-rvf：递归删除所有目录内容，有提示<br>-rf：递归删除所有目录内容,无提示【慎用】</td>
</tr>
<tr>
<td>cp</td>
<td style="text-align:left">复制<br>-r：递归复制整个目录<br>-v：显示复制过程中文件的列表<br>\\cp：强制覆盖不提示</td>
</tr>
<tr>
<td>cat</td>
<td style="text-align:left">查看文件<br>cat 文件名  查看轻量级的文本文件<br>cat 文件1 文件2 连接显示多个文件<br>cat 文件1 &gt; 文件2 合并为新文件<br>cat 文件1 &gt;&gt; 文件2 追加</td>
</tr>
<tr>
<td>more</td>
<td style="text-align:left">查看比较长的文件<br>空格键：向下翻一页<br>回车键：向下翻一行<br>q：代表立刻离开more<br>ctrl+F 向下滚动一屏<br>ctrl+B 向上滚动一屏</td>
</tr>
<tr>
<td>less</td>
<td style="text-align:left">同 more 类似，比 more 功能更多<br>pageDown：向下滚动一页<br>pageUp：向上滚动一页<br>/字符串： 向下搜索指定字符串<br>?字符串：向上搜索指定字符串<br>n：重复前一个搜索<br>N：反向重复前一个搜索</td>
</tr>
<tr>
<td>tail</td>
<td style="text-align:left">从尾部开始查看文件，比较适合看日志<br>-f：跟随查看<br>-n&lt;行数&gt; 输出文件尾部 n 行内容</td>
</tr>
<tr>
<td>history</td>
<td style="text-align:left">查看命令</td>
</tr>
<tr>
<td>echo</td>
<td style="text-align:left">回显，输出一般在 shell 脚本中使用较多</td>
</tr>
<tr>
<td>find</td>
<td style="text-align:left">查找文件，提供了丰富的模糊搜索及条件搜索 Find+搜索路径+参数+搜索关键字 按文件名：find  /目录/…  -name  "*.txt"</td>
</tr>
<tr>
<td>locate</td>
<td style="text-align:left">查找文件，基于索引，查询速度更快<br>通过 updatedb 来更新索引</td>
</tr>
<tr>
<td>ln</td>
<td style="text-align:left">软链接<br>ln -s 原文件或者目录 软链接名</td>
</tr>
<tr>
<td>tar</td>
<td style="text-align:left">压缩文件 、解压缩文件<br>tar -zcvf  xxx.tar.gz  xxxx 压缩文件<br>tar -zxvf xxx.tar.gz  解压缩文件<br>-c：创建一个新归档<br>-x：从归档中解出文件<br>-v：显示详细信息<br>-f：指定压缩后的文件名<br>-z：通过 gzip 过滤归档</td>
</tr>
<tr>
<td>zip</td>
<td style="text-align:left">压缩文件<br>zip xxx.zip  xxxx<br>zip -r  xxx.zip  目录/*</td>
</tr>
<tr>
<td>unzip</td>
<td style="text-align:left">解压缩文件 upzip xxx.zip</td>
</tr>
</tbody>
</table>`,r:{minutes:16.25,words:4874},y:"a",t:"常用命令"},["/linux/basic/linux-basic-5","/linux/basic/linux-basic-5.md"]],["v-53fa8290","/linux/basic/linux-basic-6.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. 用户</h2>
<p>（1）Linux 系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。</p>
<p>（2）对用户的操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>新增用户：useradd 新用户名

设置密码：passwd 用户名

用户是否存在：id 用户名

切换用户：su 切换用户名

查看当前用户/登录用户：whoami / <span class="token function">who</span> am I

删除用户：userdel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.78,words:835},y:"a",t:"用户与权限管理"},["/linux/basic/linux-basic-6","/linux/basic/linux-basic-6.md"]],["v-55af5b2f","/linux/basic/linux-basic-7.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 1. rpm</h2>
<p>（1）RPM（RedHat Package Manager），RedHat 软件包管理工具，类似 windows 里面的 setup.exe，是 Linux 这系列操作系统里面的打包安装工具，它虽然是 RedHat 的标志，但理念是通用的。</p>
<p>（2）查询已安装的 rpm 列表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm  –qa | grep xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.68,words:205},y:"a",t:"rpm 和 yum"},["/linux/basic/linux-basic-7","/linux/basic/linux-basic-7.md"]],["v-576433ce","/linux/basic/linux-basic-8.html",{d:1684314085e3,c:"Linux",g:["Linux 入门"],e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>所需开发环境安装包：</p>
<p>链接：<a href="https://pan.baidu.com/s/1F6FlGEIJKAyDbH7LaKt4lg" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1F6FlGEIJKAyDbH7LaKt4lg</a></p>
<p>提取码：74zb</p>
</div>
<h2> 1. 安装 JDK</h2>
<p>（1）将 JDK 解压缩到 opt 目录下</p>`,r:{minutes:2.4,words:719},y:"a",t:"搭建开发环境"},["/linux/basic/linux-basic-8","/linux/basic/linux-basic-8.md"]],["v-59190c6d","/linux/basic/linux-basic-9.html",{d:16315776e5,l:"2021年9月14日",c:"Linux",g:["Linux 入门"],e:`<h2> 0 检查 BIOS 虚拟化支持</h2>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914130804420.png" alt="image-20210914130804420" tabindex="0" loading="lazy"><figcaption>image-20210914130804420</figcaption></figure>
<h2> 1 新建虚拟机</h2>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/linux/image-20210914130816997.png" alt="image-20210914130816997" tabindex="0" loading="lazy"><figcaption>image-20210914130816997</figcaption></figure>`,r:{minutes:3.56,words:1067},y:"a",t:"在 VM 上安装 CentOS7"},["/linux/basic/linux-basic-9","/linux/basic/linux-basic-9.md"]],["v-10ee9fe3","/vue/chapter1/01-Vue%E7%AE%80%E4%BB%8B.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> Vue 是什么？</h2>
<figure><img src="http://img.hl1015.top/work/image-20221108101241215.png" alt="image-20221108101241215" tabindex="0" loading="lazy"><figcaption>image-20221108101241215</figcaption></figure>
<p>Vue 是一套用于<strong>构建用户界面</strong>的<strong>渐进式</strong> JavaScript 框架</p>
<blockquote>
<p>所谓构建用户界面就是将数据以界面的方式展示</p>
<p>所谓渐进式是指 Vue 可以自底向上逐层的应用</p>
<ul>
<li>简单应用：只需一个轻量小巧的核心库</li>
<li>复杂应用：可以引入各式各样的 Vue 插件</li>
</ul>
</blockquote>`,r:{minutes:1.69,words:508},y:"a",t:"Vue 简介"},["/vue/chapter1/01-Vue简介.html","/vue/chapter1/01-Vue%E7%AE%80%E4%BB%8B","/vue/chapter1/01-Vue简介.md","/vue/chapter1/01-Vue%E7%AE%80%E4%BB%8B.md"]],["v-7e2cd684","/vue/chapter1/02-%E6%90%AD%E5%BB%BAVue%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 直接用 &lt;script&gt; 引入 vuejs</h2>
<blockquote>
<p>这里以 Vue 2 官方教程为例</p>
<p>这里建议在 VS Code 中预先安装 <code>Live Server</code> 插件用于内置服务器进行本地代码运行</p>
<img src="http://img.hl1015.top/work/image-20221117142922663.png" alt="image-20221117142922663" style="zoom:50%;">
</blockquote>
<ul>
<li>新建一个工程目录，使用 VS Code 打开</li>
<li>在工程下创建两个目录，一个目录存放 html，一个目录存放 js（从官方地址下载）</li>
</ul>`,r:{minutes:3.94,words:1181},y:"a",t:"搭建 Vue 开发环境"},["/vue/chapter1/02-搭建Vue开发环境.html","/vue/chapter1/02-%E6%90%AD%E5%BB%BAVue%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83","/vue/chapter1/02-搭建Vue开发环境.md","/vue/chapter1/02-%E6%90%AD%E5%BB%BAVue%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md"]],["v-aa48a166","/vue/chapter1/03-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<blockquote>
<p><strong>Vue 模板语法有两大类：插值语法 和 指令语法</strong></p>
</blockquote>
<h2> 插值语法</h2>
<ul>
<li>功能：用于解析标签体内容</li>
<li>写法：<code>{{xxx}}</code>，xxx 是 js 表达式，且可以直接读取到 data 中的所有属性</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>模板语法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入Vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>插值语法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>你好，{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hkw'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.95,words:285},y:"a",t:"模板语法"},["/vue/chapter1/03-模板语法.html","/vue/chapter1/03-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95","/vue/chapter1/03-模板语法.md","/vue/chapter1/03-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95.md"]],["v-60a6eec9","/vue/chapter1/04-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<blockquote>
<p><strong>Vue 中有 2 种数据绑定的方式：单向绑定 和 双向绑定</strong></p>
</blockquote>
<ul>
<li><strong>单向绑定</strong>：数据只能从 data 流向页面</li>
<li><strong>双向绑定</strong>：数据不仅能从 data 流向页面，还可以从页面流向 data
<ul>
<li>双向绑定一般都应用在表单类元素上（如：input、select 等）</li>
<li><code>v-model:value</code> 可以简写为 <code>v-model</code>，因为 <code>v-model</code> 默认收集的就是 <code>value</code> 值</li>
</ul>
</li>
</ul>`,r:{minutes:.76,words:228},y:"a",t:"数据绑定"},["/vue/chapter1/04-数据绑定.html","/vue/chapter1/04-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A","/vue/chapter1/04-数据绑定.md","/vue/chapter1/04-%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.md"]],["v-7a4f6454","/vue/chapter1/05-MVVM%E6%A8%A1%E5%9E%8B.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<ol>
<li><strong>M：模型（Model）==&gt; 对应 data 中的数据</strong></li>
<li><strong>V：视图（View）==&gt; 模板</strong></li>
<li><strong>VM：视图模型（ViewModel）==&gt; Vue 实例对象</strong></li>
</ol>
<figure><img src="http://img.hl1015.top/blog/image-20211218090853409.png" alt="image-20211218090853409" tabindex="0" loading="lazy"><figcaption>image-20211218090853409</figcaption></figure>`,r:{minutes:.43,words:129},y:"a",t:"MVVM 模型"},["/vue/chapter1/05-MVVM模型.html","/vue/chapter1/05-MVVM%E6%A8%A1%E5%9E%8B","/vue/chapter1/05-MVVM模型.md","/vue/chapter1/05-MVVM%E6%A8%A1%E5%9E%8B.md"]],["v-7d186846","/vue/chapter1/06-%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 回顾 Object.defineproperty 方法</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以枚举，默认值是false</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以被修改，默认值是false</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制属性是否可以被删除，默认值是false</span>

	<span class="token comment">// 当有人读取 person 的 age 属性时，get函数【getter】就会调用，且返回值就是 age 的值</span>
	<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> number
	<span class="token punctuation">}</span>

	<span class="token comment">// 当有人修改 person 的 age 属性时，set 函数【setter】就会被调用，且会收到修改的具体值</span>
	<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		number <span class="token operator">=</span> value
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.06,words:319},y:"a",t:"数据代理"},["/vue/chapter1/06-数据代理.html","/vue/chapter1/06-%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86","/vue/chapter1/06-数据代理.md","/vue/chapter1/06-%E6%95%B0%E6%8D%AE%E4%BB%A3%E7%90%86.md"]],["v-4d748153","/vue/chapter1/07-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 示例效果</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>事件处理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入Vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        {{name}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>点我提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hello hkw'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'同学你好'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'vm'</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.1,words:629},y:"a",t:"事件处理"},["/vue/chapter1/07-事件处理.html","/vue/chapter1/07-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86","/vue/chapter1/07-事件处理.md","/vue/chapter1/07-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.md"]],["v-b121e072","/vue/chapter1/08-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%99%A8.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 计算属性</h2>
<h3> 定义</h3>
<p>要用的属性不存在，要通过已有属性计算得来</p>
<h3> 使用</h3>
<ul>
<li>在 <code>computed</code> 配置属性中定义计算属性</li>
<li>在页面中使用 <code>{{属性名/方法名}}</code> 来显示计算的结果【简写形式时计算属性定义为方法】</li>
</ul>
<h3> 原理</h3>
<ul>
<li>底层借助了 <code>Object.defineproperty</code> 方法提供的 <code>getter</code> 和 <code>setter</code></li>
<li><code>get 函数</code> 什么时候执行？
<ul>
<li>初次读取时会执行一次</li>
<li>当依赖的数据发生改变时会被再次调用</li>
</ul>
</li>
</ul>`,r:{minutes:3.72,words:1116},y:"a",t:"计算属性与侦听器"},["/vue/chapter1/08-计算属性与侦听器.html","/vue/chapter1/08-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%99%A8","/vue/chapter1/08-计算属性与侦听器.md","/vue/chapter1/08-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%99%A8.md"]],["v-2214300c","/vue/chapter1/09-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<blockquote>
<p>应用场景：在应用界面中，某个（些）元素的样式是变化的</p>
</blockquote>
<h2> class 样式</h2>
<p>格式：<code>:class="xxx"</code>，xxx 可以是字符串、对象、数组</p>
<ul>
<li>字符串写法适用于：类名不确定，要动态获取</li>
<li>对象写法适用于：要绑定多个样式，个数不确定，名字也不确定</li>
<li>数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用</li>
</ul>
<h2> style 样式</h2>
<ul>
<li><code>:style="{fontSize: xxx}"</code>，其中 xxx 是动态值</li>
<li><code>:style="[a,b]"</code>，其中 、b 是样式对象</li>
</ul>`,r:{minutes:.5,words:151},y:"a",t:"class 与 style 绑定"},["/vue/chapter1/09-class与style绑定.html","/vue/chapter1/09-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A","/vue/chapter1/09-class与style绑定.md","/vue/chapter1/09-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A.md"]],["v-7a8e7ed8","/vue/chapter1/10-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> v-if</h2>
<p><strong>写法：</strong></p>
<ul>
<li><code>v-if="表达式"</code></li>
<li><code>v-else-if="表达式"</code></li>
<li><code>v-else="表达式"</code></li>
</ul>
<p><strong>适用于</strong>：切换频率较低的场景</p>
<p><strong>特点</strong>：不展示的 DOM 元素直接被移除</p>
<p><strong>注意</strong>：<code>v-if</code> 可以和 <code>v-else-if、v-else</code> 一起使用，但要求结构<strong>不能被 "打断"，要保持连续性</strong></p>`,r:{minutes:.55,words:164},y:"a",t:"条件渲染"},["/vue/chapter1/10-条件渲染.html","/vue/chapter1/10-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93","/vue/chapter1/10-条件渲染.md","/vue/chapter1/10-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.md"]],["v-19bd6236","/vue/chapter1/11-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 基本使用</h2>
<p><strong><code>v-for</code> 指令：</strong></p>
<ul>
<li>用于展示列表数据</li>
<li>语法：<code>v-for="(item, index) in xxx" :key="yyy"</code></li>
<li>可遍历：<strong>数组、对象</strong>、字符串（用的很少）、指定次数（用的很少）</li>
</ul>
<p>示例代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>基本列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 遍历数组 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>人员列表（遍历数组）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(p,index) of persons<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					{{p.name}}-{{p.age}}
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

			<span class="token comment">&lt;!-- 遍历对象 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>汽车信息（遍历对象）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value,k) of car<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>k<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					{{k}}-{{value}}
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

			<span class="token comment">&lt;!-- 遍历字符串 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>测试遍历字符串（用得少）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(char,index) of str<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					{{char}}-{{index}}
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
			
			<span class="token comment">&lt;!-- 遍历指定次数 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>测试遍历指定次数（用得少）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(number,index) of 5<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					{{index}}-{{number}}
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
			Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
			
			<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
				<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">persons</span><span class="token operator">:</span><span class="token punctuation">[</span>
						<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'002'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'003'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'王五'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token literal-property property">car</span><span class="token operator">:</span><span class="token punctuation">{</span>
						<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'奥迪A8'</span><span class="token punctuation">,</span>
						<span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">'70万'</span><span class="token punctuation">,</span>
						<span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'黑色'</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'hello'</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.68,words:1103},y:"a",t:"列表渲染"},["/vue/chapter1/11-列表渲染.html","/vue/chapter1/11-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93","/vue/chapter1/11-列表渲染.md","/vue/chapter1/11-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.md"]],["v-381488f6","/vue/chapter1/12-%E6%95%B0%E6%8D%AE%E7%9B%91%E6%B5%8B%E6%80%BB%E7%BB%93.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<p><strong>Vue监视数据的原理：</strong></p>
<ol>
<li>
<p>vue 会监视 data 中所有层次的数据</p>
</li>
<li>
<p>如何监测中的数据？</p>
<p>通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据</p>
<p>（1）对象中后追加的属性，Vue 默认不做响应式处理</p>
<p>（2）如需给后添加的属性做响应式，请使用如下API：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target，propertyName<span class="token operator">/</span>index，value<span class="token punctuation">)</span> 
或者
vm<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>target，propertyName<span class="token operator">/</span>index，value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如何监测中的数据？</p>
<p>通过包裹数组更新元素的方法实现，本质就是做了两件事：</p>
<p>（1）调用原生对应的方法对数组进行更新</p>
<p>（2）重新解析模板，进而更新页面</p>
</li>
<li>
<p>在 Vue 一定要用如下方法：</p>
<p>（1）使用这些 API：<code>push()、pop()、shift()、unshift()、splice()、sort()、reverse()</code></p>
<p>（2）<code>Vue.set()</code> 或 <code>vm.$set()</code></p>
</li>
</ol>`,r:{minutes:1.91,words:574},y:"a",t:"数据监测总结"},["/vue/chapter1/12-数据监测总结.html","/vue/chapter1/12-%E6%95%B0%E6%8D%AE%E7%9B%91%E6%B5%8B%E6%80%BB%E7%BB%93","/vue/chapter1/12-数据监测总结.md","/vue/chapter1/12-%E6%95%B0%E6%8D%AE%E7%9B%91%E6%B5%8B%E6%80%BB%E7%BB%93.md"]],["v-fa0aa7e8","/vue/chapter1/13-%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<ul>
<li>
<p>若：<code>&lt;input type="text"/&gt;</code>，则 v-model 收集的是 value 值，用户输入的就是 value 值</p>
</li>
<li>
<p>若：<code>&lt;input type="radio"/&gt;</code>，则 v-model 收集的是 value 值，且要给标签配置 value 值</p>
</li>
<li>
<p>若：<code>\\&lt;input type="checkbox"/&gt;</code></p>
<ul>
<li>没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</li>
<li>配置 input 的 value 属性：
<ul>
<li>（1）v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</li>
<li>（2）v-model 的初始值是数组，那么收集的的就是 value 组成的数组</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>v-model 的三个修饰符</strong></p>
<ul>
<li>lazy：失去焦点再收集数据</li>
<li>number：输入字符串转为有效的数字【一般和 type="number" 一起配合使用】</li>
<li>trim：首尾空格过滤</li>
</ul>
</li>
</ul>`,r:{minutes:1.51,words:453},y:"a",t:"收集表单数据"},["/vue/chapter1/13-收集表单数据.html","/vue/chapter1/13-%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE","/vue/chapter1/13-收集表单数据.md","/vue/chapter1/13-%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE.md"]],["v-d16aeff8","/vue/chapter1/14-%E8%BF%87%E6%BB%A4%E5%99%A8.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 定义</h2>
<p>对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）</p>
<h2> 语法</h2>
<ul>
<li><strong>注册</strong>过滤器：<code>Vue.filter(name, callback)</code>【全局】 或 <code>new Vue(filters: {})</code>【局部】</li>
<li><strong>使用</strong>过滤器：<code>{{ xxx | 过滤器名 }}</code> 或 <code>v-bind:属性 = "xxx | 过滤器名"</code></li>
</ul>
<h2> 说明</h2>`,r:{minutes:1.18,words:354},y:"a",t:"过滤器"},["/vue/chapter1/14-过滤器.html","/vue/chapter1/14-%E8%BF%87%E6%BB%A4%E5%99%A8","/vue/chapter1/14-过滤器.md","/vue/chapter1/14-%E8%BF%87%E6%BB%A4%E5%99%A8.md"]],["v-76277fd2","/vue/chapter1/15-%E5%86%85%E7%BD%AE%E6%8C%87%E4%BB%A4.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<blockquote>
<p>已经学过的指令：</p>
<ul>
<li><strong>v-bind</strong>：单向绑定解析表达式，可简写为 <code>xxx</code></li>
<li><strong>v-model</strong>：双向数据绑定</li>
<li><strong>v-for</strong>：遍历数组/对象/字符串</li>
<li><strong>v-on</strong>：绑定事件监听，可简写为 <code>@</code></li>
<li><strong>v-if/v-else-if/v-else</strong>：条件渲染（动态控制节点是否存在）</li>
<li><strong>v-show</strong>：条件渲染（动态控制节点是否展示）</li>
</ul>
<p>下面介绍一些 Vue 的一些其他内置指令语法</p>
</blockquote>`,r:{minutes:2.28,words:683},y:"a",t:"内置指令"},["/vue/chapter1/15-内置指令.html","/vue/chapter1/15-%E5%86%85%E7%BD%AE%E6%8C%87%E4%BB%A4","/vue/chapter1/15-内置指令.md","/vue/chapter1/15-%E5%86%85%E7%BD%AE%E6%8C%87%E4%BB%A4.md"]],["v-6135ec46","/vue/chapter1/16-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 定义语法</h2>
<p><strong>局部指令</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">指令名</span><span class="token operator">:</span> 配置对象<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

或

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">指令名</span><span class="token operator">:</span> 回调函数<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.61,words:482},y:"a",t:"自定义指令"},["/vue/chapter1/16-自定义指令.html","/vue/chapter1/16-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4","/vue/chapter1/16-自定义指令.md","/vue/chapter1/16-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4.md"]],["v-3dec9618","/vue/chapter1/17-Vue%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 生命周期</h2>
<ul>
<li>又名：生命周期回调函数、生命周期函数、生命周期钩子</li>
<li>是什么：Vue 在关键时刻帮我们调用的一些特殊名称的函数</li>
<li>生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的</li>
<li>生命周期函数中的 <code>this</code> 指向的是 vm 或 组件实例对象</li>
</ul>
<figure><img src="http://img.hl1015.top/work/image-20221219112019288.png" alt="image-20221219112019288" tabindex="0" loading="lazy"><figcaption>image-20221219112019288</figcaption></figure>`,r:{minutes:.87,words:260},y:"a",t:"Vue 实例生命周期"},["/vue/chapter1/17-Vue实例生命周期.html","/vue/chapter1/17-Vue%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F","/vue/chapter1/17-Vue实例生命周期.md","/vue/chapter1/17-Vue%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md"]],["v-857decfc","/vue/chapter2/01-%E6%A8%A1%E5%9D%97(%E5%8C%96)%E4%B8%8E%E7%BB%84%E4%BB%B6(%E5%8C%96).html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 模块</h2>
<ul>
<li>理解：向外提供特定功能的 js 程序，一般就是一个 js 文件</li>
<li>为什么：js 文件很多很复杂</li>
<li>作用：复用 js，简化 js 的编写，提高 js 运行效率</li>
</ul>
<h2> 组件</h2>
<ul>
<li>理解：实现应用中局部功能代码和资源的集合（html/css/js/image ...）</li>
<li>为什么：一个界面的功能很复杂</li>
<li>作用：复用编码，简化项目编码，提高运行效率</li>
</ul>
<figure><img src="http://img.hl1015.top/work/image-20221227161844383.png" alt="image-20221227161844383" tabindex="0" loading="lazy"><figcaption>image-20221227161844383</figcaption></figure>`,r:{minutes:.7,words:211},y:"a",t:"模块(化)与组件(化)"},["/vue/chapter2/01-模块(化)与组件(化).html","/vue/chapter2/01-%E6%A8%A1%E5%9D%97(%E5%8C%96)%E4%B8%8E%E7%BB%84%E4%BB%B6(%E5%8C%96)","/vue/chapter2/01-模块(化)与组件(化).md","/vue/chapter2/01-%E6%A8%A1%E5%9D%97(%E5%8C%96)%E4%B8%8E%E7%BB%84%E4%BB%B6(%E5%8C%96).md"]],["v-3ca00cf4","/vue/chapter2/02-%E9%9D%9E%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<blockquote>
<p>非单文件组件提前说明：</p>
<ul>
<li>模板编写没有提示</li>
<li>没有构建过程，无法将 ES6 转换成 ES5</li>
<li>不支持组件的 CSS</li>
<li>真正开发中几乎不用</li>
</ul>
</blockquote>
<h2> Vue 中使用组件的三大步骤</h2>
<ol>
<li>定义组件（创建组件）</li>
<li>注册组件</li>
<li>使用组件（写组件标签）</li>
</ol>
<h2> 如何定义一个组件</h2>
<p><strong>使用 <code>Vue.extend(options)</code> 语句进行创建</strong></p>`,r:{minutes:4.3,words:1290},y:"a",t:"非单文件组件"},["/vue/chapter2/02-非单文件组件.html","/vue/chapter2/02-%E9%9D%9E%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6","/vue/chapter2/02-非单文件组件.md","/vue/chapter2/02-%E9%9D%9E%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6.md"]],["v-759a5651","/vue/chapter2/03-%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 一个 .vue 文件的组成（3 个部分）</h2>
<h3> 1. 模板页面</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
页面模板
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.74,words:221},y:"a",t:"单文件组件"},["/vue/chapter2/03-单文件组件.html","/vue/chapter2/03-%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6","/vue/chapter2/03-单文件组件.md","/vue/chapter2/03-%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6.md"]],["v-2094ea4f","/vue/chapter3/01-%E5%88%9D%E5%A7%8B%E5%8C%96%E8%84%9A%E6%89%8B%E6%9E%B6.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 说明</h2>
<ul>
<li>Vue 脚手架是 Vue 官方提供的标准化的开发工具（开发平台）</li>
<li>官方文档：<a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/</a></li>
</ul>
<h2> 具体步骤</h2>
<blockquote>
<p>如出现下载缓慢请配置 npm 淘宝镜像【建议执行】：</p>
<p><code>npm config set registry https://registry.npm.taobao.org</code></p>
</blockquote>`,r:{minutes:1.73,words:518},y:"a",t:"初始化脚手架"},["/vue/chapter3/01-初始化脚手架.html","/vue/chapter3/01-%E5%88%9D%E5%A7%8B%E5%8C%96%E8%84%9A%E6%89%8B%E6%9E%B6","/vue/chapter3/01-初始化脚手架.md","/vue/chapter3/01-%E5%88%9D%E5%A7%8B%E5%8C%96%E8%84%9A%E6%89%8B%E6%9E%B6.md"]],["v-32a97c7e","/vue/chapter3/02-ref%E3%80%81props%E3%80%81mixin.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> ref 属性</h2>
<p>（1）功能：被用来给元素或子组件注册引用信息（id 的替代者）</p>
<p>（2）应用场景</p>
<ul>
<li>应用在 html 标签上获取的是真实 DOM 元素</li>
<li>应用在组件标签上获取的是组件实例对象（vc）</li>
</ul>
<p>（3）使用方式</p>
<ul>
<li>打标识：<code>&lt;h1 ref="xxx"&gt;...&lt;/h1&gt;</code> 或 <code>&lt;School ref="xxx"&gt;&lt;/School&gt;</code></li>
<li>获取：<code>this.$refs.xxx</code></li>
</ul>`,r:{minutes:1.32,words:395},y:"a",t:"ref、props、mixin"},["/vue/chapter3/02-ref、props、mixin.html","/vue/chapter3/02-ref%E3%80%81props%E3%80%81mixin","/vue/chapter3/02-ref、props、mixin.md","/vue/chapter3/02-ref%E3%80%81props%E3%80%81mixin.md"]],["v-6592ca48","/vue/chapter3/03-%E6%8F%92%E4%BB%B6%E5%92%8Cscope%E6%A0%B7%E5%BC%8F.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 插件</h2>
<p>（1）功能：增强 Vue</p>
<p>（2）本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据</p>
<p>（3）定义插件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>对象<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加全局过滤器</span>
    Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
               
    <span class="token comment">// 添加全局指令</span>
    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 添加全局混入</span>
    Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
              
    <span class="token comment">// 添加实例方法/属性</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$myProperty <span class="token operator">=</span> xxx
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.17,words:350},y:"a",t:"插件和 scope 样式"},["/vue/chapter3/03-插件和scope样式.html","/vue/chapter3/03-%E6%8F%92%E4%BB%B6%E5%92%8Cscope%E6%A0%B7%E5%BC%8F","/vue/chapter3/03-插件和scope样式.md","/vue/chapter3/03-%E6%8F%92%E4%BB%B6%E5%92%8Cscope%E6%A0%B7%E5%BC%8F.md"]],["v-2270865e","/vue/chapter3/04-TodoList%E6%A1%88%E4%BE%8B.html",{d:16698528e5,l:"2022年12月1日",c:"Vue",g:["Vue"],e:`<h2> 组件化编码流程（通用）</h2>
<ol>
<li>实现静态组件：抽取组件，使用组件实现静态页面效果</li>
<li>展示动态数据
<ul>
<li>数据的类型，名称是什么？</li>
<li>数据保存在那个组件？</li>
</ul>
</li>
<li>交互 --- 从绑定事件监听开始</li>
</ol>
<h2> 第一步：抽取静态组件</h2>
<figure><img src="http://img.hl1015.top/work/image-20230320123738557.png" alt="image-20230320123738557" tabindex="0" loading="lazy"><figcaption>image-20230320123738557</figcaption></figure>`,r:{minutes:3.95,words:1184},y:"a",t:"TodoList 案例(待完善)"},["/vue/chapter3/04-TodoList案例.html","/vue/chapter3/04-TodoList%E6%A1%88%E4%BE%8B","/vue/chapter3/04-TodoList案例.md","/vue/chapter3/04-TodoList%E6%A1%88%E4%BE%8B.md"]],["v-b6dae362","/software/git/git-1.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<p>Git 是一个免费的、开源的<strong>分布式版本控制系统</strong>，可以快速高效地处理从小型到大型的各种项目。</p>
<p>Git 易于学习，占地面积小，性能极快。它具有廉价的本地库，方便的暂存区域和多个工作流分支等特性。其性能优于 Subversion、CVS、Perforce 和 ClearCase 等版本控制工具。</p>
<h2> 1. 何为版本控制</h2>
<p>版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。</p>
<p>版本控制其实最重要的是可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。</p>
<h2> 2. 为什么需要版本控制</h2>`,r:{minutes:2.72,words:817},y:"a",t:"概述"},["/software/git/git-1","/software/git/git-1.md"]],["v-241b801a","/software/git/git-10.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. GitLab 简介</h2>
<p>GitLab 是由 GitLabInc 开发，使用 MIT 许可证的基于网络的 Git 仓库管理工具，且具有 wiki 和 issue 跟踪功能。使用 Git 作为代码管理工具，并在此基础上搭建起来的 web 服务。</p>
<p>GitLab 由乌克兰程序员 DmitriyZaporozhets 和 ValerySizov 开发，它使用 Ruby 语言写成。后来，一些部分用 Go 语言进行重写。截止 2018 年 5 月，该公司约有 290 名团队成员，以及 2000 多名开源贡献者。GitLab 被 IBM，Sony，JulichResearchCenter，NASA，Alibaba，Invincea，O’ReillyMedia，Leibniz-Rechenzentrum(LRZ)，CERN，SpaceX 等组织使用。</p>`,r:{minutes:4.23,words:1268},y:"a",t:"自建代码托管平台-GitLab"},["/software/git/git-10","/software/git/git-10.md"]],["v-b3713224","/software/git/git-2.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. 下载</h2>
<p>下载地址：<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">https://git-scm.com/downloads</a></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911131746871.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:5.02,words:1506},y:"a",t:"下载与安装"},["/software/git/git-2","/software/git/git-2.md"]],["v-b00780e6","/software/git/git-3.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<table>
<thead>
<tr>
<th style="text-align:center">命令名称</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">git config --global <a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name</a> 用户名</td>
<td style="text-align:center">设置用户签名</td>
</tr>
<tr>
<td style="text-align:center">git config --global user.email 邮箱</td>
<td style="text-align:center">设置用户签名</td>
</tr>
<tr>
<td style="text-align:center">git init</td>
<td style="text-align:center">初始化本地库</td>
</tr>
<tr>
<td style="text-align:center">git status</td>
<td style="text-align:center">查看本地库状态</td>
</tr>
<tr>
<td style="text-align:center">git add 文件名</td>
<td style="text-align:center">添加到暂存区</td>
</tr>
<tr>
<td style="text-align:center">git commit -m "日志信息" 文件名</td>
<td style="text-align:center">提交到本地库</td>
</tr>
<tr>
<td style="text-align:center">git reflog</td>
<td style="text-align:center">查看历史记录</td>
</tr>
<tr>
<td style="text-align:center">git reset --hard 版本号</td>
<td style="text-align:center">版本穿梭</td>
</tr>
</tbody>
</table>`,r:{minutes:4.39,words:1317},y:"a",t:"常用命令"},["/software/git/git-3","/software/git/git-3.md"]],["v-ac9dcfa8","/software/git/git-4.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<figure><img src="http://img.hl1015.top/blog/image-20211108090224759.png" alt="image-20211108090224759" tabindex="0" loading="lazy"><figcaption>image-20211108090224759</figcaption></figure>
<h2> 1. 什么是分支</h2>
<p>在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）</p>`,r:{minutes:4.24,words:1271},y:"a",t:"分支操作"},["/software/git/git-4","/software/git/git-4.md"]],["v-a9341e6a","/software/git/git-5.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. 团队内协作</h2>
<figure><img src="http://img.hl1015.top/blog/image-20211108213256764.png" alt="image-20211108213256764" tabindex="0" loading="lazy"><figcaption>image-20211108213256764</figcaption></figure>
<h2> 2. 跨团队协作</h2>
<figure><img src="http://img.hl1015.top/blog/image-20211108213357307.png" alt="image-20211108213357307" tabindex="0" loading="lazy"><figcaption>image-20211108213357307</figcaption></figure>`,r:{minutes:.12,words:37},y:"a",t:"团队协作机制"},["/software/git/git-5","/software/git/git-5.md"]],["v-a5ca6d2c","/software/git/git-6.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<p>GitHub 网址：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></p>
<p>Ps：全球最大同性交友网站，技术宅男的天堂，新世界的大门，你还在等什么？</p>
<h2> 0. 注册一个 GitHub 账号</h2>
<figure><img src="http://img.hl1015.top/blog/image-20211109105830188.png" alt="image-20211109105830188" tabindex="0" loading="lazy"><figcaption>image-20211109105830188</figcaption></figure>`,r:{minutes:6.09,words:1827},y:"a",t:"GitHub 操作"},["/software/git/git-6","/software/git/git-6.md"]],["v-a260bbee","/software/git/git-7.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. 配置 git 过滤文件</h2>
<p><strong>（1）Eclipse 特定文件</strong></p>
<img src="http://img.hl1015.top/blog/image-20211114175630742.png" alt="image-20211114175630742" style="zoom:67%;">
<p><strong>（2）IDEA 特定文件</strong></p>
<img src="http://img.hl1015.top/blog/image-20211114175711881.png" alt="image-20211114175711881" style="zoom:67%;">`,r:{minutes:2.95,words:885},y:"a",t:"IDEA 集成 Git"},["/software/git/git-7","/software/git/git-7.md"]],["v-9ef70ab0","/software/git/git-8.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. 设置 GitHub 账号</h2>
<img src="http://img.hl1015.top/blog/image-20211114221018457.png" alt="image-20211114221018457" style="zoom:50%;">
<img src="http://img.hl1015.top/blog/image-20211114221041858.png" alt="image-20211114221041858" style="zoom:67%;">
<p><span style="color:red">如果出现 401 等情况连接不上的，是因为网络原因，可以使用 token 登录（token 从 GitHub 账户获取，此处不再赘述）</span></p>`,r:{minutes:1.82,words:546},y:"a",t:"IDEA 集成 GitHub"},["/software/git/git-8","/software/git/git-8.md"]],["v-9b8d5972","/software/git/git-9.html",{d:16362432e5,l:"2021年11月7日",c:"Git",g:["Git"],e:`<h2> 1. 简介</h2>
<p>众所周知，GitHub 服务器在国外，使用 GitHub 作为项目托管网站，如果网速不好的话，严重影响使用体验，甚至会出现登录不上的情况。针对这个情况，大家也可以使用国内的项目托管网站-码云。</p>
<p>码云是开源中国推出的基于 Git 的代码托管服务中心，网址是 <a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">https://gitee.com/</a>，使用方式跟 GitHub 一样，而且它还是一个中文网站，如果你英文不是很好它是最好的选择。</p>
<h2> 2. 码云账号注册和登录</h2>`,r:{minutes:2.65,words:795},y:"a",t:"国内代码托管中心-码云"},["/software/git/git-9","/software/git/git-9.md"]],["v-f6890b56","/software/idea/idea-1.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911141222475.png" alt="image-20210911141222475" tabindex="0" loading="lazy"><figcaption>image-20210911141222475</figcaption></figure>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911141303964.png" alt="image-20210911141303964" tabindex="0" loading="lazy"><figcaption>image-20210911141303964</figcaption></figure>`,r:{minutes:.58,words:175},y:"a",t:"2020.1.1 完全版破解"},["/software/idea/idea-1","/software/idea/idea-1.md"]],["v-f31f5a18","/software/idea/idea-2.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<p><strong>前提：</strong></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911150704230.png" alt="image-20210911150704230" tabindex="0" loading="lazy"><figcaption>image-20210911150704230</figcaption></figure>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911150711123.png" alt="image-20210911150711123" tabindex="0" loading="lazy"><figcaption>image-20210911150711123</figcaption></figure>`,r:{minutes:.25,words:75},y:"a",t:"搭建初始配置"},["/software/idea/idea-2","/software/idea/idea-2.md"]],["v-efb5a8da","/software/idea/idea-3.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<p><strong>第一步，打开设置选项</strong></p>
<p>【快捷键：Ctrl + Alt + S】</p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911151026322.png" alt="image-20210911151026322" tabindex="0" loading="lazy"><figcaption>image-20210911151026322</figcaption></figure>
<p><strong>第二步，填入要过滤的内容</strong></p>`,r:{minutes:.25,words:75},y:"a",t:"配置 git 过滤文件"},["/software/idea/idea-3","/software/idea/idea-3.md"]],["v-ec4bf79c","/software/idea/idea-4.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<p><strong>第一步，安装 Git</strong></p>
<p>cmd 命令行输入 <code>git --version</code> 检查版本，看是否成功安装好</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.73,words:520},y:"a",t:"上传项目到 GitHub"},["/software/idea/idea-4","/software/idea/idea-4.md"]],["v-e8e2465e","/software/idea/idea-5.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<p><strong>进入 File &gt; Settings</strong></p>
<p><strong>1、Appearance &amp; Behavior &gt; System Settings &gt; Updates，将 Automatically check updates for 取消勾选</strong></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911140417066.png" alt="image-20210911140417066" tabindex="0" loading="lazy"><figcaption>image-20210911140417066</figcaption></figure>`,r:{minutes:.29,words:88},y:"a",t:"关于 plugin 加载不出来的问题解决"},["/software/idea/idea-5","/software/idea/idea-5.md"]],["v-e5789520","/software/idea/idea-6.html",{d:16362432e5,l:"2021年11月7日",c:"IDEA",g:["IDEA"],e:`<p><strong>1、进入 File &gt; Settings</strong></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911140624172.png" alt="image-20210911140624172" tabindex="0" loading="lazy"><figcaption>image-20210911140624172</figcaption></figure>
<p><strong>2、选中 Editor &gt; Live Template</strong></p>`,r:{minutes:.74,words:223},y:"a",t:"自定义模板 Live Template"},["/software/idea/idea-6","/software/idea/idea-6.md"]],["v-a60ce25e","/software/jdk/jdk-1.html",{d:16630272e5,l:"2022年9月13日",c:"JDK",g:["JDK"],e:`<h2> 1. JDK 下载</h2>
<p>jdk 8 下载地址：<a href="https://www.oracle.com/java/technologies/downloads/#java8-windows" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/downloads/#java8-windows</a></p>
<figure><figcaption>image-20220930104131372</figcaption></figure>
<h2> 2. JDK 安装</h2>`,r:{minutes:1.13,words:338},y:"a",t:"下载与安装"},["/software/jdk/jdk-1","/software/jdk/jdk-1.md"]],["v-3270aac6","/software/maven/maven-1.html",{d:16362432e5,l:"2021年11月7日",c:"Maven",g:["Maven"],e:`<h2> 1. 下载</h2>
<p>下载地址：<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noopener noreferrer">https://maven.apache.org/download.cgi</a></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/tools/image-20210911141618404.png" alt="image-20210911141618404" tabindex="0" loading="lazy"><figcaption>image-20210911141618404</figcaption></figure>`,r:{minutes:.79,words:236},y:"a",t:"下载与配置"},["/software/maven/maven-1","/software/maven/maven-1.md"]],["v-2f06f988","/software/maven/maven-2.html",{d:16362432e5,l:"2021年11月7日",c:"Maven",g:["Maven"],e:`<blockquote>
<p>导言：生产环境下开发不再是一个项目一个工程，而是每一个模块创建一个工程，而多个模块整合在一起就需要使用到像 Maven 这样的构建工具。</p>
</blockquote>
<h2> 1. Why？</h2>
<h3> 1.1 真的需要吗？</h3>
<p>Maven 是干什么用的？这是很多同学在刚开始接触 Maven 时最大的疑问。之所以会提出这个问题，是因为即使不使用 Maven 我们仍然可以进行 B/S 结构项目的开发。从表述层、业务逻辑层到持久化层再到数据库都有成熟的解决方案———不使用 Maven 我们一样可以开发项目啊？</p>
<figure><img src="http://img.hl1015.top/blog/image-20211104205712535.png" alt="image-20211104205712535" tabindex="0" loading="lazy"><figcaption>image-20211104205712535</figcaption></figure>`,r:{minutes:22.06,words:6619},y:"a",t:"快速入门"},["/software/maven/maven-2","/software/maven/maven-2.md"]],["v-e4d8f156","/software/nodejs/nodejs-1.html",{d:16630272e5,l:"2022年9月13日",c:"NodeJS",g:["NodeJS"],e:`<h2> 1. Node.js 简介</h2>
<ul>
<li><code>Node.js</code> 是一个基于 <code>Chrome V8</code> 引擎的 <code>JavaScript</code> 运行环境</li>
<li>可以简单地将 <code>Node.js</code> 类比理解为 <code>Java</code> 项目的依赖管理工具 <code>Maven</code></li>
</ul>
<h2> 2. Node.js 下载</h2>
<p>下载地址：<a href="http://nodejs.cn/download/" target="_blank" rel="noopener noreferrer">下载 | Node.js 中文网 (nodejs.cn)</a></p>`,r:{minutes:.52,words:157},y:"a",t:"下载与安装"},["/software/nodejs/nodejs-1","/software/nodejs/nodejs-1.md"]],["v-3d20ce8f","/software/plsql/plsql-1.html",{d:1662768e6,l:"2022年9月10日",c:"PLSQL",g:["PLSQL"],e:`<h2> 1. PLSQL 下载</h2>
<ul>
<li>链接：<a href="https://pan.baidu.com/s/1_hV6jVV4oBus0C19EgLMYQ?pwd=tdpp" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1_hV6jVV4oBus0C19EgLMYQ?pwd=tdpp</a></li>
<li>提取码：tdpp</li>
</ul>
<h2> 2. InstantClient 下载</h2>
<ul>
<li>链接：<a href="https://pan.baidu.com/s/1j6q0tuD7g1T6seX9U6IK0A?pwd=qdrb" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1j6q0tuD7g1T6seX9U6IK0A?pwd=qdrb</a></li>
<li>提取码：qdrb</li>
</ul>`,r:{minutes:3.09,words:927},y:"a",t:"下载与安装"},["/software/plsql/plsql-1","/software/plsql/plsql-1.md"]],["v-3c366b53","/software/powerdesigner/powerdesigner-1.html",{d:1662768e6,l:"2022年9月10日",c:"PowerDesigner",g:["PowerDesigner"],e:`<h2> 1. PowerDesigner 下载</h2>
<ul>
<li>链接：<a href="https://pan.baidu.com/s/17ZGJ6EVT-3U3Dq4nMzjjtg?pwd=ez9l" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/17ZGJ6EVT-3U3Dq4nMzjjtg?pwd=ez9l</a></li>
<li>提取码：ez9l</li>
</ul>
<h2> 2. PowerDesigner 安装</h2>
<ul>
<li>按照提示安装，选择地区时选择 <code>Hong Kong</code>，其他使用默认选项即可【这里不再赘述】</li>
<li>进行 powerdesigner 破解，将下载下来的 <code>pdflm 16.dll</code> 文件复制粘贴到 powerdesigner 安装的根目录进行替换，具体操作如下图：</li>
</ul>`,r:{minutes:2.27,words:680},y:"a",t:"下载与安装"},["/software/powerdesigner/powerdesigner-1","/software/powerdesigner/powerdesigner-1.md"]],["v-de420796","/software/vscode/vscode-1.html",{d:16362432e5,l:"2021年11月7日",c:"【VSCode】",g:["【VSCode】"],e:`<p><strong>1、下载</strong></p>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></p>
<figure><img src="http://img.hl1015.top/work/image-20230511162805676.png" alt="image-20230511162805676" tabindex="0" loading="lazy"><figcaption>image-20230511162805676</figcaption></figure>`,r:{minutes:.81,words:242},y:"a",t:"下载与中文配置"},["/software/vscode/vscode-1","/software/vscode/vscode-1.md"]],["v-4b5a535b","/database/mysql/basic/mysql-basic-1.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 数据库的好处</h2>
<ul>
<li>实现数据持久化</li>
<li>使用完整的管理系统统一管理，易于查询</li>
</ul>
<h2> 2. 数据库的相关概念</h2>
<ul>
<li>
<p><strong>DB</strong></p>
<ul>
<li>数据库（database）：存储数据的 "仓库"，它保存了一系列有组织的数据</li>
</ul>
</li>
<li>
<p><strong>DBMS</strong></p>
<ul>
<li>数据库管理系统（Database Manager System），又称为数据库软件（产品）：数据库是通过 DBMS 创建和操作的容器</li>
</ul>
</li>
<li>
<p><strong>SQL</strong></p>
<ul>
<li>结构化查询语言（Structure Query Language）：专门用来和数据库通信的语言</li>
</ul>
</li>
</ul>`,r:{minutes:2.44,words:731},y:"a",t:"数据库概述"},["/database/mysql/basic/mysql-basic-1","/database/mysql/basic/mysql-basic-1.md"]],["v-20231c67","/database/mysql/basic/mysql-basic-10.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 事务的概念和特性</h2>
<h3> 1.1 事务的概念</h3>
<p><strong><span style="color:red">事务由单独单元的一个或多个 SQL 语句组成，在这个单元中，每个 MySQL 语句是相互依赖的</span></strong>。而整个单独单元作为一个不可分割的整体，如果单元中的某条 SQL 语句一旦执行失败或产生错误，整个单元将会回滚。所有受到影响的数据将返回到事务开始以前的状态；如果单元中的所有 SQL 语句均执行成功，则事务被顺利执行。</p>
<h3> 1.2 MySQL 中的存储引擎【了解】</h3>
<p>（1）概念：在 MySQL 中的数据用各种不同的技术存储在文件（或内存）中</p>`,r:{minutes:4.34,words:1301},y:"a",t:"事务"},["/database/mysql/basic/mysql-basic-10","/database/mysql/basic/mysql-basic-10.md"]],["v-21d7f506","/database/mysql/basic/mysql-basic-11.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 什么是视图</h2>
<h3> 1.1 概念</h3>
<p>MySQL 从 5.0.1 版本开始提供视图功能。一种虚拟存在的表，行和列的数据来自定义视图的查询中使用的表，并且是在使用视图时<strong>动态生成的</strong>，<strong>只保存了 sql 逻辑，不保存查询结果</strong></p>
<h3> 1.2 应用场景</h3>
<p>（1）多个地方用到同样的查询结果</p>
<p>（2）该查询结果使用的sql语句较复杂</p>
<h3> 1.3 视图的好处</h3>
<p>（1）重用 SQL 语句</p>
<p>（2）简化复杂的 SQL 操作，不必知道它的查询细节</p>`,r:{minutes:2.04,words:613},y:"a",t:"视图"},["/database/mysql/basic/mysql-basic-11","/database/mysql/basic/mysql-basic-11.md"]],["v-238ccda5","/database/mysql/basic/mysql-basic-12.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 系统变量</h2>
<h3> 1.1 说明</h3>
<p>变量由系统提供，不是用户定义，属于服务器层面</p>
<h3> 1.2 分类</h3>
<ul>
<li><strong>全局变量</strong>
<ul>
<li>作用域：服务器每次启动将为所有的全局变量赋初始值，全局变量针对于所有的会话(连接)有效，但是不能跨重启，每次重启服务器后会根据配置文件的配置来进行系统变量的初始赋值</li>
</ul>
</li>
<li><strong>会话变量</strong>
<ul>
<li>作用域：仅仅针对于当前会话(连接)有效</li>
</ul>
</li>
</ul>
`,r:{minutes:2.43,words:728},y:"a",t:"变量"},["/database/mysql/basic/mysql-basic-12","/database/mysql/basic/mysql-basic-12.md"]],["v-2541a644","/database/mysql/basic/mysql-basic-13.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 什么是存储过程</h2>
<h3> 1.1 含义</h3>
<p>事先经过编译并存储在数据库中的一段 sql 语句的集合（类似于 Java 中的方法）</p>
<h3> 1.2 好处</h3>
<p>（1）简化开发人员很多工作</p>
<p>（2）减少数据在数据库和应用服务器之间的传输</p>
<p>（3）提高了数据处理的效率</p>
<h2> 2. 创建和调用存储过程</h2>
<h3> 2.1 语法</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    存储过程体<span class="token punctuation">(</span>一组合法有效的<span class="token keyword">SQL</span>语句<span class="token punctuation">)</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.7,words:809},y:"a",t:"存储过程"},["/database/mysql/basic/mysql-basic-13","/database/mysql/basic/mysql-basic-13.md"]],["v-26f67ee3","/database/mysql/basic/mysql-basic-14.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 函数和存储过程的区别</h2>
<p>函数和存储过程的定义一样，但有如下区别：</p>
<p>（1）存储过程：可以有0个返回，也可以有多个返回，适合做批量插入、批量更新（增删改）</p>
<p>（2）函数：有且仅有1个返回，适合做处理数据后返回一个结果（查询）</p>
<h2> 2. 函数的创建和调用</h2>
<h3> 2.1 创建语法</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> 函数名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token keyword">RETURNS</span> 返回类型
<span class="token keyword">BEGIN</span>
    函数体
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.52,words:456},y:"a",t:"函数"},["/database/mysql/basic/mysql-basic-14","/database/mysql/basic/mysql-basic-14.md"]],["v-28ab5782","/database/mysql/basic/mysql-basic-15.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 流程控制结构说明</h2>
<ul>
<li><strong>顺序结构</strong>：程序从上往下依次执行</li>
<li><strong>分支结构</strong>：程序从两条或多条路径中选择一条去执行</li>
<li><strong>循环结构</strong>：程序在满足一定条件的基础上，重复执行一段代码</li>
</ul>
<h2> 2. 分支结构</h2>
<h3> 2.1 if 函数</h3>
<p>（1）<strong>功能</strong>：实现简单的双分支</p>
<p>（2）<strong>语法</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span><span class="token punctuation">(</span>表达式<span class="token number">1</span><span class="token punctuation">,</span>表达式<span class="token number">2</span><span class="token punctuation">,</span>表达式<span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 执行顺序：如果 表达式1 成立，则IF函数返回 表达式2 的值，否则返回 表达式3 的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.65,words:1095},y:"a",t:"流程控制结构"},["/database/mysql/basic/mysql-basic-15","/database/mysql/basic/mysql-basic-15.md"]],["v-4d0f2bfa","/database/mysql/basic/mysql-basic-2.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. MySQL 数据库产品(软件)的介绍</h2>
<p><strong>MySQL产品的特点</strong></p>
<ul>
<li>
<p>MySQL 数据库隶属于 MySQL AB 公司，总部位于瑞典，后被 Oracle 收购</p>
</li>
<li>
<p>优点：</p>
<ul>
<li>①成本低：开放源代码，一般可以免费使用</li>
<li>②性能高：执行快</li>
<li>③简单：很容易安装和使用</li>
</ul>
</li>
</ul>
<h2> 2. MySQL 数据库的安装</h2>
<p><strong>（1）DBMS 分为两类</strong></p>`,r:{minutes:2.71,words:814},y:"a",t:"安装与使用"},["/database/mysql/basic/mysql-basic-2","/database/mysql/basic/mysql-basic-2.md"]],["v-4ec40499","/database/mysql/basic/mysql-basic-3.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 0. 准备工作</h2>
<p>在我们自己电脑的数据库中创建一些数据库表（SQL 执行脚本文件的网盘下载地址如下）</p>
<blockquote>
<p><strong>链接：<a href="https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1CwXAMv5YPpT6Sj5Dl7ykxg</a></strong></p>
<p><strong>提取码：ghi2</strong></p>
</blockquote>`,r:{minutes:22.37,words:6711},y:"a",t:"数据处理之查询"},["/database/mysql/basic/mysql-basic-3","/database/mysql/basic/mysql-basic-3.md"]],["v-5078dd38","/database/mysql/basic/mysql-basic-4.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 概述</h2>
<h3> 1.1 概念</h3>
<p>类似 Java 中的方法，将一组逻辑语句封装在方法体中，对外暴露方法名</p>
<h3> 1.2 好处</h3>
<ul>
<li>隐藏了实现细节</li>
<li>提高了代码的重用性</li>
</ul>
<h3> 1.3 调用</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 函数名<span class="token punctuation">(</span>实参列表<span class="token punctuation">)</span> 【<span class="token keyword">FROM</span> 表名】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:10.19,words:3057},y:"a",t:"常用函数"},["/database/mysql/basic/mysql-basic-4","/database/mysql/basic/mysql-basic-4.md"]],["v-522db5d7","/database/mysql/basic/mysql-basic-5.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 介绍</h2>
<h3> 1.1 含义</h3>
<ul>
<li>出现在其他语句中的 SELECT 语句，称为子查询或内查询</li>
<li>内部嵌套其他 SELECT 语句的查询，称为主查询或外查询</li>
</ul>
<h3> 1.2 示例</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	first_name 
<span class="token keyword">FROM</span>
	employees 
<span class="token keyword">WHERE</span>
	department_id <span class="token operator">IN</span> <span class="token punctuation">(</span> 
    	<span class="token keyword">SELECT</span>
    		department_id 
    	<span class="token keyword">FROM</span>
		departments 
	<span class="token keyword">WHERE</span>
	location_id <span class="token operator">=</span> <span class="token number">1700</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.08,words:1523},y:"a",t:"子查询"},["/database/mysql/basic/mysql-basic-5","/database/mysql/basic/mysql-basic-5.md"]],["v-53e28e76","/database/mysql/basic/mysql-basic-6.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. DML 语句</h2>
<ul>
<li>DML（Data Manipulation Language - 数据操纵语言）可以在下面的条件下执行
<ul>
<li>向表中<strong>插入</strong>数据</li>
<li><strong>修改</strong>现存数据</li>
<li><strong>删除</strong>现存数据</li>
</ul>
</li>
<li>事务是由完成若干项工作的 DML 语句组成的</li>
</ul>
<h2> 2. 插入</h2>
<h3> 2.1 方式一</h3>
<ul>
<li>
<p><strong>语法</strong></p>
<ul>
<li>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名<span class="token punctuation">(</span>字段名<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>值<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>特点</strong></p>
<ul>
<li>要求值的类型和字段的类型要一致或兼容</li>
<li>字段的个数和顺序不一定与原始表中的字段个数和顺序一致，但要保证值和字段一一对应</li>
<li>假如表中有可以为 null 的字段，注意可以通过以下两种方式插入 null 值
<ul>
<li>字段和值都省略</li>
<li>字段写上，值使用null</li>
</ul>
</li>
<li>字段和值的个数必须一致</li>
<li>字段名可以省略，默认所有列</li>
</ul>
</li>
</ul>`,r:{minutes:1.85,words:554},y:"a",t:"数据处理之增删改"},["/database/mysql/basic/mysql-basic-6","/database/mysql/basic/mysql-basic-6.md"]],["v-55976715","/database/mysql/basic/mysql-basic-7.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 库的管理</h2>
<h3> 1.1 创建库</h3>
<ul>
<li>
<p>语法</p>
<ul>
<li>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 【<span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span>】 库名 【<span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> 字符集名】<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>示例</p>
<ul>
<li>
<p>创建一个库名为books的数据库</p>
</li>
<li>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> books<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>创建结果如下：</p>
<ul>
<li><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/mysql/image-20210910153405081.png" alt="image-20210910153405081" tabindex="0" loading="lazy"><figcaption>image-20210910153405081</figcaption></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:1.32,words:397},y:"a",t:"创建和管理表"},["/database/mysql/basic/mysql-basic-7","/database/mysql/basic/mysql-basic-7.md"]],["v-574c3fb4","/database/mysql/basic/mysql-basic-8.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 数值类型</h2>
<h3> 1.1 整型</h3>
<h4> （1）分类</h4>
<table>
<thead>
<tr>
<th style="text-align:center">整数类型</th>
<th style="text-align:center">字节</th>
<th style="text-align:center">范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tinyint</td>
<td style="text-align:center">1</td>
<td style="text-align:center">有符号：-128~127<br>无符号：0~255</td>
</tr>
<tr>
<td style="text-align:center">smallint</td>
<td style="text-align:center">2</td>
<td style="text-align:center">有符号：-32768~32767<br>无符号：0~65535</td>
</tr>
<tr>
<td style="text-align:center">mediumint</td>
<td style="text-align:center">3</td>
<td style="text-align:center">有符号：-8388608~8388607<br>无符号：0~1677215</td>
</tr>
<tr>
<td style="text-align:center">int / integer</td>
<td style="text-align:center">4</td>
<td style="text-align:center">有符号：- 2147483648~2147483647<br>无符号：0~4294967295</td>
</tr>
<tr>
<td style="text-align:center">bigint</td>
<td style="text-align:center">8</td>
<td style="text-align:center">有符号：-9223372036854775808~9223372036854775807<br>无符号：0~9223372036854775807*2+1</td>
</tr>
</tbody>
</table>`,r:{minutes:3.43,words:1029},y:"a",t:"数据类型"},["/database/mysql/basic/mysql-basic-8","/database/mysql/basic/mysql-basic-8.md"]],["v-59011853","/database/mysql/basic/mysql-basic-9.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 基础"],e:`<h2> 1. 什么是约束？</h2>
<h3> 1.1 含义</h3>
<ul>
<li>为了保证数据的一致性和完整性，SQL 规范以约束的方式对表数据进行额外的条件限制</li>
<li>约束是表级的强制规定</li>
<li>可以在创建表时规定约束（通过 CREATE TABLE 语句），或者在表创建之后也可以（通过 ALTER TABLE 语句）</li>
</ul>
<h3> 1.2 约束分类</h3>
<p>有以下六大约束：</p>
<ul>
<li><strong>NOT NULL</strong>：非空约束，规定某个字段不能为空，比如姓名，学号等</li>
<li><strong>UNIQUE</strong>：唯一约束，规定某个字段在整个表中是唯一的，可以为空，比如座位号</li>
<li><strong>PRIMARY KEY</strong>：主键约束(非空且唯一)，比如学号，员工编号</li>
<li><strong>FOREIGN KEY</strong>：外键约束，用于限制两个表的关系
<ul>
<li>(在从表中添加外键约束，用于引用主表中某列的值，比如学生表的专业编号，员工表的部门编号)</li>
</ul>
</li>
<li><strong>CHECK</strong>：检查约束(MySQL 不支持，但也不报错)，比如年龄，性别</li>
<li><strong>DEFAULT</strong>：默认值，用于保证该字段有默认值，比如性别、删除标识</li>
</ul>`,r:{minutes:3.92,words:1176},y:"a",t:"约束"},["/database/mysql/basic/mysql-basic-9","/database/mysql/basic/mysql-basic-9.md"]],["v-095e9d25","/database/mysql/install/mysql-install.html",{d:16313184e5,l:"2021年9月11日",c:"MySQL",g:["MySQL 安装"],e:`<h2> 1. 下载</h2>
<p><strong>1、进入 MySQL 官网</strong></p>
<ul>
<li>官网地址：<a href="https://www.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">https://www.mysql.com/downloads/</a></li>
<li>进入官网以后，登录你的 Oracle 帐号，没有的申请一个（也可以不申请）</li>
</ul>
<p><strong>2、点击 MySQL Community(GPL) Downloads &gt;&gt;</strong></p>`,r:{minutes:3.4,words:1019},y:"a",t:"MySQL 安装"},["/database/mysql/install/mysql-install","/database/mysql/install/mysql-install.md"]],["v-3c0140d3","/deploy/docker/basic/docker-basic-1.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. Docker 是什么</h2>
<h3> 1.1 问题：Docker 为什么出现？</h3>
<p>假设你在开发一个商城项目，使用的是一台笔记本电脑而且你的开发环境具有特定的配置，其他开发人员身处的环境配置也各有不同，你正在开发的应用依赖于你当前的配置且还要依赖于某些配置文件，此外，你的企业还拥有标准化的测试和生产环境，且具有自身的配置和一系列支持文件。你希望尽可能多在本地模拟这些环境而不产生重新创建服务器环境的开销，请问：</p>
<ul>
<li>你要如何确保应用能够在这些环境中运行和通过质量检测？</li>
<li>你如何在部署过程中不出现令人头疼的版本、配置问题？</li>
<li>你如何无需重新编写代码和进行故障修复？</li>
</ul>`,r:{minutes:8.31,words:2493},y:"a",t:"Docker 简介"},["/deploy/docker/basic/docker-basic-1","/deploy/docker/basic/docker-basic-1.md"]],["v-3db61972","/deploy/docker/basic/docker-basic-2.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. Docker 官网</h2>
<ul>
<li>官网：<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">https://www.docker.com</a></li>
</ul>
<figure><img src="http://img.hl1015.top/blog/image-20220304110115822.png" alt="image-20220304110115822" tabindex="0" loading="lazy"><figcaption>image-20220304110115822</figcaption></figure>`,r:{minutes:7.09,words:2127},y:"a",t:"Docker 安装"},["/deploy/docker/basic/docker-basic-2","/deploy/docker/basic/docker-basic-2.md"]],["v-3f6af211","/deploy/docker/basic/docker-basic-3.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. 帮助启动类命令</h2>
<ul>
<li><strong>启动 Docker</strong>：<strong><code>systemctl start docker</code></strong></li>
<li><strong>停止 Docker</strong>：<strong><code>systemctl stop docker</code></strong></li>
<li><strong>重启 Docker</strong>：<strong><code>systemctl restart docker</code></strong></li>
<li><strong>查看 docker 状态</strong>：<strong><code>systemctl status docker</code></strong></li>
<li><strong>开机启动</strong>：<strong><code>systemctl enable docker</code></strong></li>
<li><strong>查看 docker 概要信息</strong>：<strong><code>docker info</code></strong></li>
<li><strong>查看 docker 总体帮助文档</strong>：<strong><code>docker --help</code></strong></li>
<li><strong>查看 docker 命令帮助文档</strong>：<strong><code>docker 具体命令 --help</code></strong></li>
</ul>`,r:{minutes:8.48,words:2544},y:"a",t:"Docker 常用命令"},["/deploy/docker/basic/docker-basic-3","/deploy/docker/basic/docker-basic-3.md"]],["v-411fcab0","/deploy/docker/basic/docker-basic-4.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. 是什么</h2>
<p>镜像是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境（包括代码、运行时需要的库、环境变量和配置文件等），这个打包好的运行时环境就是 image 镜像文件</p>
<p>只有通过这个镜像文件才能生成 Docker 容器实例（类似 Java 中 new 出来一个对象）</p>
<p>当我们使用 <code>pull</code> 命令下载某个镜像的时候，我们可以看到 Docker 的镜像好像是在一层一层的下载：</p>
<figure><img src="http://img.hl1015.top/blog/image-20220310131424402.png" alt="image-20220310131424402" tabindex="0" loading="lazy"><figcaption>image-20220310131424402</figcaption></figure>`,r:{minutes:4.31,words:1294},y:"a",t:"Docker 镜像"},["/deploy/docker/basic/docker-basic-4","/deploy/docker/basic/docker-basic-4.md"]],["v-42d4a34f","/deploy/docker/basic/docker-basic-5.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. 本地镜像发布到阿里云流程</h2>
<figure><img src="http://img.hl1015.top/blog/image-20220310142751957.png" alt="image-20220310142751957" tabindex="0" loading="lazy"><figcaption>image-20220310142751957</figcaption></figure>
<h2> 2. 镜像的生成方法</h2>
<p>两种方式：</p>
<ul>
<li>
<p><strong><code>docker commit</code></strong></p>
<ul>
<li>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">"提交的描述信息"</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">"作者"</span> 容器ID 要创建的目标镜像名:标签名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Dockerfile【后面会介绍】</p>
</li>
</ul>`,r:{minutes:1.18,words:355},y:"a",t:"本地镜像发布到阿里云"},["/deploy/docker/basic/docker-basic-5","/deploy/docker/basic/docker-basic-5.md"]],["v-44897bee","/deploy/docker/basic/docker-basic-6.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. 本地镜像发布到私有库流程</h2>
<figure><img src="http://img.hl1015.top/blog/image-20220310142751957.png" alt="image-20220310142751957" tabindex="0" loading="lazy"><figcaption>image-20220310142751957</figcaption></figure>
<h2> 2. 私有库是什么</h2>
<p>官方 Docker Hub 地址：<a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">https://hub.docker.com</a>，中国大陆访问太慢了且已经有了被阿里云取代的趋势，不太主流</p>`,r:{minutes:2.64,words:793},y:"a",t:"本地镜像发布到私有库"},["/deploy/docker/basic/docker-basic-6","/deploy/docker/basic/docker-basic-6.md"]],["v-463e548d","/deploy/docker/basic/docker-basic-7.html",{d:16693344e5,l:"2022年11月25日",c:"Docker",g:["Docker 基础"],e:`<h2> 1. 🚽避坑点：使用容器数据卷记得加上 --privileged=true</h2>
<p><strong>理由</strong>：Docker 挂载主机目录访问，如果出现 ，说明权限不足</p>
<p><strong>解决方法</strong>：在挂载目录后面多加一个 <strong><code>--privileged=true</code></strong> 参数即可</p>
<p>如果是 CentOS 7 安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在 SELinux 里面挂载目录被禁止掉了，如果要开启，我们一般使用 --privileged=true 参数，扩大容器的权限解决挂载目录没有权限的问题，也即使用该参数，container 内的 root 拥有真正的 root 权限，否则，container 内的 root 只是外部的一个普通用户权限</p>`,r:{minutes:2.02,words:607},y:"a",t:"Docker 容器数据卷"},["/deploy/docker/basic/docker-basic-7","/deploy/docker/basic/docker-basic-7.md"]],["v-6dbc1b3a","/java/framework/mybatis/mybatis-1.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis"],e:`<h2> 1. MyBatis 历史</h2>
<p>MyBatis 最初是 Apache 的一个开源项目 <strong>iBatis</strong>，2010 年 6 月这个项目由 Apache Software Foundation 迁移到了 Google Code。随着开发团队转投 Google Code 旗下，iBatis 3.x 正式更名为 MyBtis。代码于 2013 年 11 月迁移到 GitHub。</p>
<p>iBatis 一词来源于 "internet" 和 "abatis" 的组合，是一个基于 Java 的持久层框架。iBatis 提供的持久层框架包括 SQL Maps 和 Data Access Objects（DAO）。</p>`,r:{minutes:1.46,words:437},y:"a",t:"简介"},["/java/framework/mybatis/mybatis-1","/java/framework/mybatis/mybatis-1.md"]],["v-6a5269fc","/java/framework/mybatis/mybatis-2.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis"],e:`<h2> 1. Hello World</h2>
<h3> 1.1 物理建模</h3>
<p>在本地新建一个数据库，新建一张表 t_emp 并往表中插入几条数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token identifier"><span class="token punctuation">\`</span>mybatis-example<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">\`</span>mybatis-example<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>t_emp<span class="token punctuation">\`</span></span><span class="token punctuation">(</span>
emp_id <span class="token keyword">INT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
emp_name <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
emp_salary <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>emp_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>t_emp<span class="token punctuation">\`</span></span><span class="token punctuation">(</span>emp_name<span class="token punctuation">,</span>emp_salary<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">"zhagnsan"</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>t_emp<span class="token punctuation">\`</span></span><span class="token punctuation">(</span>emp_name<span class="token punctuation">,</span>emp_salary<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">"lisi"</span><span class="token punctuation">,</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>t_emp<span class="token punctuation">\`</span></span><span class="token punctuation">(</span>emp_name<span class="token punctuation">,</span>emp_salary<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">"wangwu"</span><span class="token punctuation">,</span><span class="token number">700</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.92,words:5077},y:"a",t:"基本用法"},["/java/framework/mybatis/mybatis-2","/java/framework/mybatis/mybatis-2.md"]],["v-66e8b8be","/java/framework/mybatis/mybatis-3.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis"],e:`<h2> 1. 概念</h2>
<h3> 1.1 关联关系的概念说明</h3>
<p><strong>①数量关系</strong></p>
<p>主要体现在数据库表中</p>
<ul>
<li>一对一
<ul>
<li>夫妻关系，人和身份证号</li>
</ul>
</li>
<li>一对多
<ul>
<li>用户和用户的订单，锁和钥匙</li>
</ul>
</li>
<li>多对多
<ul>
<li>老师和学生，部门和员工</li>
</ul>
</li>
</ul>
<p><strong>②关联关系的方向</strong></p>
<p>主要体现在 Java 实体类中</p>
<ul>
<li>双向：双方都可以访问到对方
<ul>
<li>Customer：包含 Order 的集合属性</li>
<li>Order：包含单个 Customer 的属性</li>
</ul>
</li>
<li>单向：双方中只有一方能够访问到对方
<ul>
<li>Customer：不包含 Order 的集合属性，访问不到 Order</li>
<li>Order：包含单个 Customer 的属性</li>
</ul>
</li>
</ul>`,r:{minutes:9.04,words:2712},y:"a",t:"映射关联关系"},["/java/framework/mybatis/mybatis-3","/java/framework/mybatis/mybatis-3.md"]],["v-637f0780","/java/framework/mybatis/mybatis-4.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis"],e:`<h2> 1. 简介</h2>
<p>MyBatis 框架的动态 SQL 技术是一种根据特定条件动态拼接 SQL 语句的功能，它存在的意义是为了解决拼接 SQL 语句字符串时的痛点问题。</p>
<blockquote>
<p>One of the most powerful features of MyBatis has always been its Dynamic SQL capabilities. If you have any experience with JDBC or any similar framework, you understand how painful it is to conditionally concatenate strings of SQL together, making sure not to forget spaces or to omit a comma at the end of a list of columns. Dynamic SQL can be downright painful to deal with.</p>
<p>MyBatis的一个强大的特性之一通常是它的动态 SQL 能力。如果你有使用 JDBC 或其他相似框架的经验，你就明白条件地串联 SQL 字符串在一起是多么的痛苦，确保不能忘了空格或在列表的最后省略逗号。动态 SQL 可以彻底处理这种痛苦。</p>
</blockquote>`,r:{minutes:6.47,words:1940},y:"a",t:"动态 SQL"},["/java/framework/mybatis/mybatis-4","/java/framework/mybatis/mybatis-4.md"]],["v-665eceea","/java/framework/mybatis-plus/mybatis-plus-1.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 1. MyBatisPlus 介绍</h2>
<figure><img src="http://img.hl1015.top/work/image-20230512102126068.png" alt="image-20230512102126068" tabindex="0" loading="lazy"><figcaption>image-20230512102126068</figcaption></figure>
<p>MyBatis-Plus（简称 MP），是一个 MyBatis 的增强的工具包，只做增强不做改变，为简化开发工作、提高生产效率而生。</p>
<p>我们的愿景是成为 MyBatis 最好的搭档，就像魂斗罗中的 1P、2P，基友搭配，效率翻倍。</p>`,r:{minutes:.47,words:140},y:"a",t:"简介"},["/java/framework/mybatis-plus/mybatis-plus-1","/java/framework/mybatis-plus/mybatis-plus-1.md"]],["v-62f51dac","/java/framework/mybatis-plus/mybatis-plus-2.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 0. 创建一个 Maven 工程</h2>
<figure><img src="http://img.hl1015.top/blog/image-20211127095508329.png" alt="image-20211127095508329" tabindex="0" loading="lazy"><figcaption>image-20211127095508329</figcaption></figure>
<h2> 1. 创建测试表</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> mp<span class="token punctuation">;</span>
<span class="token comment">-- 使用库</span>
<span class="token keyword">USE</span> mp<span class="token punctuation">;</span>
<span class="token comment">-- 创建表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tbl_employee<span class="token punctuation">(</span>
 id <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 last_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 gender <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 age <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tbl_employee<span class="token punctuation">(</span>last_name<span class="token punctuation">,</span>email<span class="token punctuation">,</span>gender<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span><span class="token string">'tom@atguigu.com'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tbl_employee<span class="token punctuation">(</span>last_name<span class="token punctuation">,</span>email<span class="token punctuation">,</span>gender<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'Jerry'</span><span class="token punctuation">,</span><span class="token string">'jerry@atguigu.com'</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tbl_employee<span class="token punctuation">(</span>last_name<span class="token punctuation">,</span>email<span class="token punctuation">,</span>gender<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'Black'</span><span class="token punctuation">,</span><span class="token string">'black@atguigu.com'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tbl_employee<span class="token punctuation">(</span>last_name<span class="token punctuation">,</span>email<span class="token punctuation">,</span>gender<span class="token punctuation">,</span>age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'White'</span><span class="token punctuation">,</span><span class="token string">'white@atguigu.com'</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.88,words:864},y:"a",t:"集成 MP"},["/java/framework/mybatis-plus/mybatis-plus-2","/java/framework/mybatis-plus/mybatis-plus-2.md"]],["v-5f8b6c6e","/java/framework/mybatis-plus/mybatis-plus-3.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 1. 通用 CRUD</h2>
<p>（1）提出问题</p>
<p>假设我们已存在一张 tbl_employee 表，且已有对应的实体类 Employee，实现 tbl_employee  表的 CRUD 操作我们需要做什么呢？</p>
<p>（2）实现方式</p>
<ul>
<li>基于 MyBatis</li>
</ul>
<p>需要编写 EmployeeMapper 接口，并手动编写 CRUD 方法，提供 EmployeeMapper.xml 映射文件，并手动编写每个方法对应的 SQL 语句</p>
<ul>
<li>基于 MP</li>
</ul>
<p>只需要创建 EmployeeMapper 接口，并继承 BaseMapper 接口，这就是使用 MP 需要完成的所有操作，甚至不需要创建 SQL 映射文件</p>`,r:{minutes:4.65,words:1394},y:"a",t:"入门 HelloWorld"},["/java/framework/mybatis-plus/mybatis-plus-3","/java/framework/mybatis-plus/mybatis-plus-3.md"]],["v-5c21bb30","/java/framework/mybatis-plus/mybatis-plus-4.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 1. EntityWrapper 简介</h2>
<p>（1）MyBatis-Plus 通过 EntityWrapper（简称 EW，MP 封装的一个查询条件构造器）或者 Condition（与 EW 类似）来让用户自由的构建查询条件，简单便捷，没有额外的负担，能够有效提高开发效率</p>
<p>（2）实体包装器，主要用于处理 SQL 拼接，排序，实体参数查询等</p>
<p>（4）条件参数说明：</p>
<figure><img src="http://img.hl1015.top/blog/image-20211129212306363.png" alt="image-20211129212306363" tabindex="0" loading="lazy"><figcaption>image-20211129212306363</figcaption></figure>`,r:{minutes:1.36,words:407},y:"a",t:"条件构造器 EntityWrapper"},["/java/framework/mybatis-plus/mybatis-plus-4","/java/framework/mybatis-plus/mybatis-plus-4.md"]],["v-58b809f2","/java/framework/mybatis-plus/mybatis-plus-5.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<p>ActiveRecord（活动记录），是一种领域模型模式，特点是一个模型类对应关系型数据库中的一个表，而模型类的一个实例对应表中的一行记录。</p>
<p>ActiveRecord 一直广受动态语言（PHP、Ruby 等）的喜爱，而 Java 作为准静态语言，对于 ActiveRecord 往往只能感叹其优雅，所以 MP 也在 AR 道路上进行了一定的探索。</p>
<h2> 1. 如何使用 AR 模式</h2>
<p>仅仅需要让实体类继承 Model 类且实现主键指定方法，即可开发 AR 之旅</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"tbl_employee"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Serializable</span> <span class="token function">pkVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.13,words:640},y:"a",t:"ActiveRecord（活动记录）"},["/java/framework/mybatis-plus/mybatis-plus-5","/java/framework/mybatis-plus/mybatis-plus-5.md"]],["v-554e58b4","/java/framework/mybatis-plus/mybatis-plus-6.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<p>（1）MP 提供了大量的自定义设置，生成的代码完全能够满足各类型的需求</p>
<p>（2）MP 的代码生成器和 MyBatis MBG 代码生成器对比：</p>
<ul>
<li>MP 的代码生成器都是基于 Java 代码来生成，MBG 基于 xml 文件进行代码生成</li>
<li>MyBatis 的代码生成器可生成：实体类、Mapper 接口、Mapper 映射文件</li>
<li>MP 的代码生成器可生成：实体类（可以选择是否支持 AR）、Mapper 接口、Mapper 映射文件、Service 层、Controller 层</li>
</ul>
<p>（3）表及字段命名策略选择</p>`,r:{minutes:2.69,words:808},y:"a",t:"代码生成器"},["/java/framework/mybatis-plus/mybatis-plus-6","/java/framework/mybatis-plus/mybatis-plus-6.md"]],["v-51e4a776","/java/framework/mybatis-plus/mybatis-plus-7.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 1. MyBatis 插件机制简介</h2>
<p><strong>（1）插件机制</strong></p>
<p>MyBatis 通过插件（Interceptor）可以做到拦截四大对象相关方法的执行，根据需求，完成相关数据的动态改变。</p>
<ul>
<li>Executor</li>
<li>StatementHandler</li>
<li>ParameterHandler</li>
<li>ResultSetHandler</li>
</ul>
<p><strong>（2）插件原理</strong></p>
<p>四大对象的每个对象在创建时，都会执行 interceptorChain.pluginAll()，会经过每个插件对象的 plugin() 方法，目的是为当前的四大对象创建代理。代理对象就可以拦截到四大对象相关方法的执行，因为要执行四大对象的方法需要经过代理。</p>`,r:{minutes:3.14,words:941},y:"a",t:"插件机制"},["/java/framework/mybatis-plus/mybatis-plus-7","/java/framework/mybatis-plus/mybatis-plus-7.md"]],["v-4e7af638","/java/framework/mybatis-plus/mybatis-plus-8.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<p>根据 MyBatisPlus 的 AutoSqlInjector 可以自定义各种你想要的 SQL，注入到全局中，相当于自定义 MyBatisPlus 自动注入的方法。</p>
<h2> 1. AutoSqlInjector</h2>
<ul>
<li>
<p>在 Mapper 接口中定义相关的 CRUD 方法</p>
<figure><img src="http://img.hl1015.top/blog/image-20211130163632225.png" alt="image-20211130163632225" tabindex="0" loading="lazy"><figcaption>image-20211130163632225</figcaption></figure>
</li>
<li>
<p>扩展 AutoSqlInjector --- inject 方法，实现 Mapper 接口中要注入的 SQL</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义全局操作
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySQLInjector</span> <span class="token keyword">extends</span> <span class="token class-name">AutoSqlInjector</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 扩展 inject 方法，完成自定义全局操作
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token class-name">Configuration</span> configuration<span class="token punctuation">,</span> <span class="token class-name">MapperBuilderAssistant</span> builderAssistant<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> mapperClass<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> modelClass<span class="token punctuation">,</span> <span class="token class-name">TableInfo</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 总体目标：将 EmployeeMapper 中定义的 selectAll，处理成对应的 MappedStatement 对象，加入到 configuration 对象中</span>
        <span class="token comment">// 1)注入的 SQL 语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select id,last_name,email,gender,age,version from "</span> <span class="token operator">+</span> table<span class="token punctuation">.</span><span class="token function">getTableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2)注入的方法名，一定要与 EmployeeMapper 接口中的方法名一致</span>
        <span class="token class-name">String</span> method <span class="token operator">=</span> <span class="token string">"selectAll"</span><span class="token punctuation">;</span>

        <span class="token comment">// 3)构造 SqlSource 对象</span>
        <span class="token class-name">SqlSource</span> sqlSource <span class="token operator">=</span> languageDriver<span class="token punctuation">.</span><span class="token function">createSqlSource</span><span class="token punctuation">(</span>configuration<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> modelClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4)构造一个查询的 MappedStatement，并加入到 configuration</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addSelectMappedStatement</span><span class="token punctuation">(</span>mapperClass<span class="token punctuation">,</span> method<span class="token punctuation">,</span> sqlSource<span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> table<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 MP 全局策略中，配置自定义注入器</p>
<figure><img src="http://img.hl1015.top/blog/image-20211130163517834.png" alt="image-20211130163517834" tabindex="0" loading="lazy"><figcaption>image-20211130163517834</figcaption></figure>
</li>
</ul>`,r:{minutes:2.33,words:698},y:"a",t:"自定义全局操作"},["/java/framework/mybatis-plus/mybatis-plus-8","/java/framework/mybatis-plus/mybatis-plus-8.md"]],["v-4b1144fa","/java/framework/mybatis-plus/mybatis-plus-9.html",{d:16358976e5,l:"2021年11月3日",c:"常用框架",g:["MyBatis-Plus"],e:`<h2> 1. 元数据处理器接口</h2>
<blockquote>
<p>①所在包：com.baomidou.mybatisplus.MetaObjectHandler</p>
<p>②insertFill(MetaObject metaObject) / updateFill(MetaObject metaObject)</p>
<p>③metaObject：元对象，是 MyBatis 提供的一个用于更加方便，更加优雅地访问对象的属性，给对象的属性设置值的一个对象，还会用于包装对象，支持对 Object、Map、Collection 等对象进行包装</p>
<p>④本质上 metaObject 获取对象的属性值或者是给对象的属性设置值，最终是要通过 Reflector 获取到属性的对应方法的 Invoker，最终 invoke</p>
</blockquote>`,r:{minutes:1.65,words:495},y:"a",t:"公共字段自动填充"},["/java/framework/mybatis-plus/mybatis-plus-9","/java/framework/mybatis-plus/mybatis-plus-9.md"]],["v-646d6d2f","/java/framework/springmvc/springmvc-1.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h2> 1. 什么是 MVC</h2>
<p>MVC 是一种软件架构的思想，将软件按照模型、视图、控制器来划分</p>
<p>M：Model，模型层，指工程中的 JavaBean，作用是处理数据</p>
<p>JavaBean 分为两类：</p>
<ul>
<li>一类称为实体类 Bean：专门存储业务数据的，如 Student、User 等</li>
<li>一类称为业务处理 Bean：指 Service 或 Dao 对象，专门用于处理业务逻辑和数据访问。</li>
</ul>
<p>V：View，视图层，指工程中的 html 或 jsp 等页面，作用是与用户进行交互，展示数据</p>
<p>C：Controller，控制层，指工程中的 servlet，作用是接收请求和响应浏览器</p>`,r:{minutes:1.82,words:545},y:"a",t:"简介"},["/java/framework/springmvc/springmvc-1","/java/framework/springmvc/springmvc-1.md"]],["v-662245ce","/java/framework/springmvc/springmvc-2.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h1> 1. HelloWorld</h1>
<h3> 1.1 开发环境</h3>
<p>IDE：idea 2019.2</p>
<p>构建工具：maven 3.5.4</p>
<p>服务器：tomcat 7</p>
<p>Spring 版本：5.3.1</p>
<h3> 1.2 创建 maven 工程</h3>
<h5> a&gt;添加web模块</h5>
<h5> b&gt;打包方式：war</h5>
<h5> c&gt;引入依赖</h5>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- SpringMVC --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 日志 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>ch.qos.logback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>logback-classic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- ServletAPI --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Spring5和Thymeleaf整合包 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.thymeleaf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>thymeleaf-spring5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.12.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:15.82,words:4747},y:"a",t:"基础功能"},["/java/framework/springmvc/springmvc-2","/java/framework/springmvc/springmvc-2.md"]],["v-67d71e6d","/java/framework/springmvc/springmvc-3.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h2> 1. RESTful</h2>
<h3> 1.1 RESTful 简介</h3>
<p>REST：<strong>Re</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer，表现层资源状态转移。</p>
<h5> a&gt;资源</h5>
<p>资源是一种看待服务器的方式，即，将服务器看作是由很多离散的资源组成。每个资源是服务器上一个可命名的抽象概念。因为资源是一个抽象的概念，所以它不仅仅能代表服务器文件系统中的一个文件、数据库中的一张表等等具体的东西，可以将资源设计的要多抽象有多抽象，只要想象力允许而且客户端应用开发者能够理解。与面向对象设计类似，资源是以名词为核心来组织的，首先关注的是名词。一个资源可以由一个或多个 URI 来标识。URI 既是资源的名称，也是资源在 Web 上的地址。对某个资源感兴趣的客户端应用，可以通过资源的 URI 与其进行交互。</p>`,r:{minutes:6.87,words:2062},y:"a",t:"RESTful"},["/java/framework/springmvc/springmvc-3","/java/framework/springmvc/springmvc-3.md"]],["v-698bf70c","/java/framework/springmvc/springmvc-4.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h2> 1. HttpMessageConverter</h2>
<p>HttpMessageConverter，报文信息转换器，将请求报文转换为 Java 对象，或将 Java 对象转换为响应报文</p>
<p>HttpMessageConverter提供了两个注解和两个类型：@RequestBody，@ResponseBody，RequestEntity，</p>
<p>ResponseEntity</p>
<h3> 1.1 @RequestBody</h3>
<p>@RequestBody 可以获取请求体，需要在控制器方法设置一个形参，使用 @RequestBody 进行标识，当前请求的请求体就会为当前注解所标识的形参赋值</p>`,r:{minutes:6.16,words:1848},y:"a",t:"扩展功能"},["/java/framework/springmvc/springmvc-4","/java/framework/springmvc/springmvc-4.md"]],["v-6b40cfab","/java/framework/springmvc/springmvc-5.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h2> 1. 注解配置SpringMVC</h2>
<p>使用配置类和注解代替 web.xml 和 SpringMVC 配置文件的功能</p>
<h3> 1.1 创建初始化类，代替 web.xml</h3>
<p>在 Servlet 3.0 环境中，容器会在类路径中查找实现 javax.servlet.ServletContainerInitializer 接口的类，如果找到的话就用它来配置 Servlet 容器。
Spring 提供了这个接口的实现，名为 SpringServletContainerInitializer，这个类反过来又会查找实现WebApplicationInitializer 的类并将配置的任务交给它们来完成。Spring 3.2 引入了一个便利的 WebApplicationInitializer 基础实现，名为 AbstractAnnotationConfigDispatcherServletInitializer，当我们的类扩展了 AbstractAnnotationConfigDispatcherServletInitializer 并将其部署到 Servlet3.0 容器的时候，容器会自动发现它，并用它来配置 Servlet 上下文。</p>`,r:{minutes:2.08,words:625},y:"a",t:"注解配置 SpringMVC"},["/java/framework/springmvc/springmvc-5","/java/framework/springmvc/springmvc-5.md"]],["v-6cf5a84a","/java/framework/springmvc/springmvc-6.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringMVC"],e:`<h2> 1. SpringMVC 执行流程</h2>
<h3> 1.1 SpringMVC 常用组件</h3>
<ul>
<li>
<p>DispatcherServlet：<strong>前端控制器</strong>，不需要工程师开发，由框架提供</p>
<ul>
<li>作用：统一处理请求和响应，整个流程控制的中心，由它调用其它组件处理用户的请求</li>
</ul>
</li>
<li>
<p>HandlerMapping：<strong>处理器映射器</strong>，不需要工程师开发，由框架提供</p>
<ul>
<li>作用：根据请求的url、method等信息查找Handler，即控制器方法</li>
</ul>
</li>
<li>
<p>Handler：<strong>处理器</strong>，需要工程师开发</p>
<ul>
<li>作用：在DispatcherServlet的控制下Handler对具体的用户请求进行处理</li>
</ul>
</li>
<li>
<p>HandlerAdapter：<strong>处理器适配器</strong>，不需要工程师开发，由框架提供</p>
<ul>
<li>作用：通过HandlerAdapter对处理器（控制器方法）进行执行</li>
</ul>
</li>
<li>
<p>ViewResolver：<strong>视图解析器</strong>，不需要工程师开发，由框架提供</p>
<ul>
<li>作用：进行视图解析，得到相应的视图，例如：ThymeleafView、InternalResourceView、RedirectView</li>
</ul>
</li>
<li>
<p>View：<strong>视图</strong></p>
<ul>
<li>作用：将模型数据通过页面展示给用户</li>
</ul>
</li>
</ul>`,r:{minutes:7,words:2100},y:"a",t:"SpringMVC 执行流程"},["/java/framework/springmvc/springmvc-6","/java/framework/springmvc/springmvc-6.md"]],["v-96974d2e","/java/framework/spring/annotation/spring-annotation-1.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<h2> 1. 使用 @Configuration 和 @Bean 注解给容器中注册组件</h2>
<p><strong>（1）准备：新建一个 maven 工程，添加 spring-context 和 lombok 的依赖</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.18.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.82,words:2345},y:"a",t:"组件注册"},["/java/framework/spring/annotation/spring-annotation-1","/java/framework/spring/annotation/spring-annotation-1.md"]],["v-932d9bf0","/java/framework/spring/annotation/spring-annotation-2.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<h2> 1. 使用 @Bean 指定初始化和销毁方法</h2>
<blockquote>
<p>Bean 的生命周期：Bean 创建 ---》 初始化 ---》 销毁 的过程</p>
<p>【对象创建时，如果是单实例，在容器启动时创建对象；如果是多实例，在每次获取时创建对象】</p>
</blockquote>
<p>容器管理 Bean 的生命周期，我们可以自定义初始化和销毁方法，容器在 Bean 进行到当前生命周期的时候来调用我们自定义的初始化和销毁方法</p>
<ul>
<li>指定初始化和销毁方法
<ul>
<li>xml 方式：通过 init-method 和 destroy-method 指定</li>
<li>@Bean 注解方式：通过 initMethod 和 destroy-method</li>
</ul>
</li>
<li>初始化时机
<ul>
<li>对象创建完成，并赋值好，调用初始化方法</li>
</ul>
</li>
<li>销毁时机
<ul>
<li>单实例：容器关闭的时候，调用销毁方法</li>
<li>多实例：容器不会管理这个 Bean，所以容器不会调用销毁方法</li>
</ul>
</li>
</ul>`,r:{minutes:3.39,words:1018},y:"a",t:"生命周期"},["/java/framework/spring/annotation/spring-annotation-2","/java/framework/spring/annotation/spring-annotation-2.md"]],["v-8fc3eab2","/java/framework/spring/annotation/spring-annotation-3.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<h2> 1. @Value</h2>
<ul>
<li>基本数值</li>
<li>SpEL，例如：<code>#{10 - 5}</code></li>
<li>\${}：取出配置文件中的值（在运行环境变量里面的值）</li>
</ul>
<p>Person 实体类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"#{20 - 2}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.04,words:312},y:"a",t:"属性赋值"},["/java/framework/spring/annotation/spring-annotation-3","/java/framework/spring/annotation/spring-annotation-3.md"]],["v-8c5a3974","/java/framework/spring/annotation/spring-annotation-4.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<h2> 1. @Autowired、@Qualifier、@Primary</h2>
<p>自动装配：Spring 利用依赖注入（DI），完成对 IOC 容器中各个组件的依赖关系组件的赋值</p>
<ul>
<li>@Autowired：自动注入
<ul>
<li>默认优先按照类型去容器中找对应的组件：ioc.getBean(UserDao.class);</li>
<li>如果找到多个相同类型的组件，再将属性的名称作为组件的 id 去容器中查找：ioc.getBean("userDao");</li>
<li>自动装配默认一定要将属性赋值完成，没有找到就会报错，可以使用  <code>@Autowired(required = false)</code> 来防止找不到报错</li>
</ul>
</li>
<li>@Qualifier：使用 @Qualifier 指定需要装配的组件的 id，而不是使用属性名</li>
<li>@Primary：让 Spring 进行自动装配的时候，默认使用首选的 Bean，也可以继续使用 @Qualifier 指定需要装配的 Bean 的名字</li>
</ul>`,r:{minutes:4.92,words:1475},y:"a",t:"自动装配"},["/java/framework/spring/annotation/spring-annotation-4","/java/framework/spring/annotation/spring-annotation-4.md"]],["v-88f08836","/java/framework/spring/annotation/spring-annotation-5.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<p>面向切面编程：在程序运行期间动态地将某段代码切入到指定方法指定位置运行的编程方式【基于动态代理】</p>
<h2> 1. 思路</h2>
<p>以 <strong>动态日志打印</strong> 功能为例子进行 AOP 演示：</p>
<ol>
<li>
<p>导入 aop 模块：Spring AOP（spring-aspects）</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-aspects<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定义一个业务逻辑类（MathCalculator）：在业务逻辑运行的时候将日志进行打印【方法之前、方法运行结束、方法正常返回、方法出现异常、xxx】</p>
</li>
<li>
<p>定义一个日志切面类（LogAspects）：切面类里面的方法需要动态感知 MathCalculator 中的方法运行到哪里了然后执行</p>
<blockquote>
<p>通知方法：</p>
<ul>
<li><strong>前置通知（@Before）：在目标方法运行之前运行</strong></li>
<li><strong>后置通知（@After）：在目标方法运行结束之后运行【无论方法正常结束还是异常结束】</strong></li>
<li><strong>返回通知（@AfterReturning）：在目标方法正常返回之后运行</strong></li>
<li><strong>异常通知（@AfterThrowing）：在目标方法出现异常之后运行</strong></li>
<li><strong>环绕通知（@Around）：动态代理，手动推进目标方法运行【proceedingJoinPoint.proceed()】</strong></li>
</ul>
</blockquote>
</li>
<li>
<p>给切面类的目标方法标注通知注解，告诉方法何时何地运行</p>
</li>
<li>
<p>将切面类和业务逻辑类（目标方法所在类）都加入到容器中</p>
</li>
<li>
<p>告诉 Spring 容器哪一个类是切面类（给切面类上加一个 @Aspect 注解）</p>
</li>
<li>
<p>给配置类中加 @EnableAspectJAutoProxy 【开启基于注解的 AOP 模式】</p>
</li>
</ol>`,r:{minutes:3.13,words:939},y:"a",t:"AOP 应用"},["/java/framework/spring/annotation/spring-annotation-5","/java/framework/spring/annotation/spring-annotation-5.md"]],["v-8586d6f8","/java/framework/spring/annotation/spring-annotation-6.html",{d:16391808e5,l:"2021年12月11日",c:"常用框架",g:["Spring 注解"],e:`<h2> 1. 环境搭建</h2>
<p><strong>（1）导入依赖【数据源、数据库驱动、spring-jdbc模块】</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--数据源--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--数据库驱动--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--spring-jdbc模块--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.31,words:692},y:"a",t:"声明式事务应用"},["/java/framework/spring/annotation/spring-annotation-6","/java/framework/spring/annotation/spring-annotation-6.md"]],["v-11167db8","/java/framework/spring/core/spring-aop.html",{d:16296768e5,l:"2021年8月23日",c:"常用框架",g:["Spring"],e:`<h2> 1. 什么是 AOP</h2>
<ul>
<li>
<p><strong>面向切面编程</strong></p>
<p>利用 AOP 可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。</p>
</li>
<li>
<p><strong>通俗描述</strong></p>
<p>不通过修改源代码的方式，在主干功能里添加新功能</p>
</li>
<li>
<p><strong>使用登录的功能来说明 AOP</strong></p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210822161043989.png" alt="image-20210822161043989" tabindex="0" loading="lazy"><figcaption>image-20210822161043989</figcaption></figure>
</li>
</ul>`,r:{minutes:6.12,words:1837},y:"a",t:"AOP"},["/java/framework/spring/core/spring-aop","/java/framework/spring/core/spring-aop.md"]],["v-204f2809","/java/framework/spring/core/spring-ioc.html",{d:16296768e5,l:"2021年8月23日",c:"常用框架",g:["Spring"],e:`<h2> 1. IOC 底层原理</h2>
<ul>
<li><strong>什么是 IOC（inversion of control）</strong></li>
</ul>
<p>（1）控制反转，将对象的创建和对象之间的调用关系，都交由 Spring 去管理</p>
<p>（2）使用 IOC 目的：降低耦合度</p>
<p>（3）入门案例就是 IOC 的实现</p>
<ul>
<li>
<p><strong>底层原理</strong></p>
<p>三大原理：xml 解析、工厂模式、反射</p>
</li>
</ul>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210821225139096.png" alt="image-20210821225139096" tabindex="0" loading="lazy"><figcaption>image-20210821225139096</figcaption></figure>`,r:{minutes:21.54,words:6463},y:"a",t:"IOC 容器"},["/java/framework/spring/core/spring-ioc","/java/framework/spring/core/spring-ioc.md"]],["v-2d5e72f7","/java/framework/spring/core/spring-jdbcTemplate.html",{d:16296768e5,l:"2021年8月23日",c:"常用框架",g:["Spring"],e:`<h2> 1. 概念和准备</h2>
<ul>
<li>
<p><strong>什么是 JdbcTemplate</strong></p>
<p>Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库进行操作</p>
</li>
<li>
<p><strong>准备工作</strong></p>
<p>（1）引入相关 jar 包</p>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/image-20210823224228196.png" alt="image-20210823224228196" tabindex="0" loading="lazy"><figcaption>image-20210823224228196</figcaption></figure>
<p>（2）在 Spring 配置文件中配置数据库连接池</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入外部属性文件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>property-placeholder</span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classpath:jdbc.properties<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- 配置连接池 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.alibaba.druid.pool.DruidDataSource<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driverClassName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\${prop.driverClassName}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\${prop.url}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\${prop.username}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\${prop.password}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）配置 JdbcTemplate 对象，注入数据源 dataSource</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 配置JdbcTemplate对象，注入dataSource --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbcTemplate<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.jdbc.core.JdbcTemplate<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）创建 service 接口及实现类、dao 接口及实现类</p>
<p>在配置文件中开启注解扫描</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 开启注解扫描 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.hkw<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>service 层中注入 dao 对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dao 层中注入 JdbcTemplate 对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:6.45,words:1934},y:"a",t:"JdbcTemplate"},["/java/framework/spring/core/spring-jdbcTemplate","/java/framework/spring/core/spring-jdbcTemplate.md"]],["v-37492b80","/java/framework/spring/core/spring-summary.html",{d:16296768e5,l:"2021年8月23日",c:"常用框架",g:["Spring"],e:`<h2> 1. Spring 是轻量级的开源 JavaEE 框架</h2>
<ul>
<li><strong>轻量级理解：体积小、引用的 jar 包少</strong></li>
</ul>
<h2> 2. Spring 可以解决企业应用开发的复杂性</h2>
<h2> 3. Spring 有两大核心部分：IOC 和 AOP</h2>
<ul>
<li><strong>IOC：控制反转，把创建对象过程交给 Spring 进行管理</strong></li>
<li><strong>AOP：面向切面，不修改源码情况下进行功能增强</strong></li>
</ul>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/java_note/image-20210821084319424.png" alt="image-20210821084319424" tabindex="0" loading="lazy"><figcaption>image-20210821084319424</figcaption></figure>`,r:{minutes:2.59,words:778},y:"a",t:"框架概述"},["/java/framework/spring/core/spring-summary","/java/framework/spring/core/spring-summary.md"]],["v-63fec628","/java/framework/spring/core/spring-tx.html",{d:16296768e5,l:"2021年8月23日",c:"常用框架",g:["Spring"],e:`<h2> 1. 事务实现的分类</h2>
<ul>
<li>
<p><strong>声明式事务</strong></p>
<p>指的是通过注解的方式对事务的各种特性进行控制和管理</p>
</li>
<li>
<p><strong>编程式事务</strong></p>
<p>指的是通过编码的方式实现事务的声明</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必须自己 commit()</span>
    <span class="token comment">// 一系列业务相关的 jdbc 操作</span>
    conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提交事务</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放连接</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:5.07,words:1521},y:"a",t:"事务管理"},["/java/framework/spring/core/spring-tx","/java/framework/spring/core/spring-tx.md"]],["v-62ffa9cd","/java/framework/springboot/basic/springboot2-basic-1.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 基础"],e:`<blockquote>
<p><strong>学习要求</strong></p>
<ul>
<li>熟悉 Spring 基础</li>
<li>熟悉 Maven 使用</li>
</ul>
<p><strong>环境要求</strong></p>
<ul>
<li>Java 8 及以上</li>
<li>Maven 3.3 及以上：<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-system-requirements" target="_blank" rel="noopener noreferrer">https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started-system-requirements</a></li>
</ul>
<p><strong>学习资料</strong></p>
<ul>
<li>文档地址：<a href="https://www.yuque.com/atguigu/springboot" target="_blank" rel="noopener noreferrer">https://www.yuque.com/atguigu/springboot</a>
<ul>
<li>文档不支持旧版本 IE、Edge 浏览器，请使用 chrome 或者 firefox</li>
</ul>
</li>
<li>视频地址：<a href="http://www.gulixueyuan.com/" target="_blank" rel="noopener noreferrer">http://www.gulixueyuan.com/</a>    <a href="https://www.bilibili.com/video/BV19K4y1L7MT?p=1" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV19K4y1L7MT?p=1</a></li>
<li>源码地址：<a href="https://gitee.com/leifengyang/springboot2" target="_blank" rel="noopener noreferrer">https://gitee.com/leifengyang/springboot2</a></li>
</ul>
</blockquote>`,r:{minutes:2.88,words:864},y:"a",t:"Spring 与 SpringBoot"},["/java/framework/springboot/basic/springboot2-basic-1","/java/framework/springboot/basic/springboot2-basic-1.md"]],["v-64b4826c","/java/framework/springboot/basic/springboot2-basic-2.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 基础"],e:`<h2> 1. 系统要求</h2>
<ul>
<li><a href="https://www.java.com/zh-CN/" target="_blank" rel="noopener noreferrer">Java 8</a> &amp; 兼容 Java 14</li>
<li>Maven 3.3 +</li>
</ul>
<h3> 1.1 Maven 设置</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.02,words:306},y:"a",t:"SpringBoot 入门"},["/java/framework/springboot/basic/springboot2-basic-2","/java/framework/springboot/basic/springboot2-basic-2.md"]],["v-66695b0b","/java/framework/springboot/basic/springboot2-basic-3.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 基础"],e:`<h2> 1. SpringBoot 特点</h2>
<h3> 1.1 依赖管理</h3>
<ul>
<li>
<p><strong>父工程做依赖管理</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--依赖管理--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.4.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--它的父项目--&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.4.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--几乎声明了所有开发中常用的依赖的版本号,自动版本仲裁机制--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>开发导入 starter 场景启动器</strong></p>
<p>1、见到很多 spring-boot-starter-* ： *就某种场景</p>
<p>2、只要引入starter，这个场景的所有常规需要的依赖我们都自动引入</p>
<p>3、SpringBoot 所有支持的 <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-starter" target="_blank" rel="noopener noreferrer">场景</a></p>
<p>4、见到的  *-spring-boot-starter： 第三方为我们提供的简化开发的场景启动器。</p>
<p>5、所有场景启动器最底层的依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.4.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>无需关注版本号，自动版本仲裁</strong></p>
<p>1、引入依赖默认都可以不写版本</p>
<p>2、引入非版本仲裁的 jar，要写版本号</p>
</li>
<li>
<p><strong>可以修改默认版本号</strong></p>
<p>1、查看 spring-boot-dependencies 里面规定当前依赖的版本用的 key</p>
<p>2、在当前项目里面重写配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">&gt;</span></span>5.1.43<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:8.18,words:2453},y:"a",t:"了解自动配置原理"},["/java/framework/springboot/basic/springboot2-basic-3","/java/framework/springboot/basic/springboot2-basic-3.md"]],["v-3cfc1797","/java/framework/springboot/core/springboot2-core-1.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. 文件类型</h2>
<h3> 1.1 properties</h3>
<ul>
<li>同以前的用法一样</li>
</ul>
<h3> 1.2 yaml</h3>
<h4> 1.2.1 简介</h4>
<ul>
<li>YAML 是 "YAML Ain't Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。</li>
<li>非常适合用来做 <strong>以数据为中心</strong> 的配置文件</li>
</ul>
<h4> 1.2.2 基本语法</h4>`,r:{minutes:1.6,words:481},y:"a",t:"配置文件"},["/java/framework/springboot/core/springboot2-core-1","/java/framework/springboot/core/springboot2-core-1.md"]],["v-3eb0f036","/java/framework/springboot/core/springboot2-core-2.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. SpringMVC 自动配置概览</h2>
<p>Spring Boot provides auto-configuration for Spring MVC that <strong>works well with most applications.(大多场景我们都无需自定义配置)</strong>
The auto-configuration adds the following features on top of Spring’s defaults:</p>
<ul>
<li>Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans.
<ul>
<li>内容协商视图解析器和 BeanName 视图解析器</li>
</ul>
</li>
<li>Support for serving static resources, including support for WebJars (covered later <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.static-content" target="_blank" rel="noopener noreferrer">in this document</a>)).
<ul>
<li>静态资源（包括 webjars ）</li>
</ul>
</li>
<li>Automatic registration of Converter, GenericConverter, and Formatter beans.
<ul>
<li>自动注册 Converter，GenericConverter，Formatter</li>
</ul>
</li>
<li>Support for HttpMessageConverters (covered later <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.message-converters" target="_blank" rel="noopener noreferrer">in this document</a>).
<ul>
<li>支持 HttpMessageConverters （后来我们配合内容协商理解原理）</li>
</ul>
</li>
<li>Automatic registration of MessageCodesResolver (covered later <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.message-codes" target="_blank" rel="noopener noreferrer">in this document</a>).
<ul>
<li>自动注册 MessageCodesResolver （国际化用）</li>
</ul>
</li>
<li>Static index.html support.
<ul>
<li>静态 index.html 页支持</li>
</ul>
</li>
<li>Custom Favicon support (covered later <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#boot-features-spring-mvc-favicon" target="_blank" rel="noopener noreferrer">in this document</a>).
<ul>
<li>自定义 Favicon</li>
</ul>
</li>
<li>Automatic use of a ConfigurableWebBindingInitializer bean (covered later <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-web-applications.spring-mvc.binding-initializer" target="_blank" rel="noopener noreferrer">in this document</a>).
<ul>
<li>自动使用 ConfigurableWebBindingInitializer（DataBinder 负责将请求数据绑定到 JavaBean 上）</li>
</ul>
</li>
</ul>`,r:{minutes:29.64,words:8892},y:"a",t:"Web 开发"},["/java/framework/springboot/core/springboot2-core-2","/java/framework/springboot/core/springboot2-core-2.md"]],["v-4065c8d5","/java/framework/springboot/core/springboot2-core-3.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. SQL</h2>
<h3> 1.1 数据源的自动配置 - <span style="color:red">HikariDataSource</span></h3>
<h4> 1.1.1 导入 JDBC 场景</h4>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.31,words:2194},y:"a",t:"数据访问"},["/java/framework/springboot/core/springboot2-core-3","/java/framework/springboot/core/springboot2-core-3.md"]],["v-421aa174","/java/framework/springboot/core/springboot2-core-4.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. JUnit 5 的变化</h2>
<p><strong><span style="color:red">SpringBoot 2.2.0 版本开始引入 JUnit 5 作为单元测试默认库</span></strong></p>
<p>作为最新版本的 JUnit 框架，JUnit 5 和之前版本的 JUnit 框架有很大的不同，由三个不同子项目的几个不同模块组成。</p>
<blockquote>
<p>JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage</p>
</blockquote>
<p><strong>JUnit Platform</strong>：JUnit Platform 是在 JVM 上启动测试框架的基础，不仅支持 JUnit 自制的测试引擎，其他测试引擎也都可以接入。</p>`,r:{minutes:7.4,words:2219},y:"a",t:"单元测试"},["/java/framework/springboot/core/springboot2-core-4","/java/framework/springboot/core/springboot2-core-4.md"]],["v-43cf7a13","/java/framework/springboot/core/springboot2-core-5.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. SpringBoot Actuator</h2>
<h3> 1.1 简介</h3>
<p>未来每一个微服务在云上部署以后，我们都需要对其进行监控、追踪、审计、控制等。SpringBoot 就抽取了 Actuator 场景，使得我们每个微服务快速引用即可获得生产级别的应用监控、审计等功能。</p>
<h3> 1.2 1.x 与 2.x 的不同</h3>
<figure><img src="https://pet-hkw.oss-cn-shenzhen.aliyuncs.com/image/new_blog_system/framework/springboot-image39.png" alt="springboot-image39" tabindex="0" loading="lazy"><figcaption>springboot-image39</figcaption></figure>`,r:{minutes:5.49,words:1646},y:"a",t:"指标监控"},["/java/framework/springboot/core/springboot2-core-5","/java/framework/springboot/core/springboot2-core-5.md"]],["v-458452b2","/java/framework/springboot/core/springboot2-core-6.html",{d:16310592e5,l:"2021年9月8日",c:"常用框架",g:["SpringBoot 核心"],e:`<h2> 1. Profile 功能</h2>
<p>为了方便<code>多环境适配</code>，<code>SpringBoot </code>简化了 profile 功能</p>
<h3> 1.1 application-profile 功能</h3>
<ul>
<li>默认配置文件 application.yaml 任何时候都会加载</li>
<li>指定环境配置文件 application-{env}.yaml</li>
<li>激活指定环境
<ul>
<li>配置文件激活</li>
<li>命令行：java -jar xxx.jar <strong><code>--spring.profiles.active=prod --person.name=haha</code></strong>
<ul>
<li><strong>修改配置文件的任意值，<code>命令行优先</code></strong></li>
</ul>
</li>
</ul>
</li>
<li>默认配置与环境配置同时生效</li>
<li>同名配置项，profile 配置优先</li>
</ul>`,r:{minutes:4.5,words:1349},y:"a",t:"原理解析"},["/java/framework/springboot/core/springboot2-core-6","/java/framework/springboot/core/springboot2-core-6.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-2921a50f","/database/redis/",{y:"p",t:"Redis"},["/database/redis/index.html"]],["v-ffb97496","/java/basic/",{y:"p",t:"Basic"},["/java/basic/index.html"]],["v-67acca20","/java/jdbc/",{y:"p",t:"Jdbc"},["/java/jdbc/index.html"]],["v-43ef4cb5","/linux/basic/",{y:"p",t:"Basic"},["/linux/basic/index.html"]],["v-88dc28ee","/vue/chapter1/",{y:"p",t:"Chapter1"},["/vue/chapter1/index.html"]],["v-88dc28b0","/vue/chapter2/",{y:"p",t:"Chapter2"},["/vue/chapter2/index.html"]],["v-88dc2872","/vue/chapter3/",{y:"p",t:"Chapter3"},["/vue/chapter3/index.html"]],["v-5978b3ac","/software/git/",{y:"p",t:"Git"},["/software/git/index.html"]],["v-54910e2e","/software/idea/",{y:"p",t:"Idea"},["/software/idea/index.html"]],["v-5979fced","/software/jdk/",{y:"p",t:"Jdk"},["/software/jdk/index.html"]],["v-302edd5a","/software/maven/",{y:"p",t:"Maven"},["/software/maven/index.html"]],["v-60f5ff55","/software/nodejs/",{y:"p",t:"Nodejs"},["/software/nodejs/index.html"]],["v-24be2528","/software/plsql/",{y:"p",t:"Plsql"},["/software/plsql/index.html"]],["v-090cd58e","/software/powerdesigner/",{y:"p",t:"Powerdesigner"},["/software/powerdesigner/index.html"]],["v-0ef197d6","/software/vscode/",{y:"p",t:"Vscode"},["/software/vscode/index.html"]],["v-64f4aaee","/database/mysql/basic/",{y:"p",t:"Basic"},["/database/mysql/basic/index.html"]],["v-21ba2ec8","/database/mysql/",{y:"p",t:"Mysql"},["/database/mysql/index.html"]],["v-0a3974bc","/database/mysql/install/",{y:"p",t:"Install"},["/database/mysql/install/index.html"]],["v-134911e1","/deploy/docker/basic/",{y:"p",t:"Basic"},["/deploy/docker/basic/index.html"]],["v-3a93f820","/deploy/docker/",{y:"p",t:"Docker"},["/deploy/docker/index.html"]],["v-07f357a1","/java/framework/mybatis/",{y:"p",t:"Mybatis"},["/java/framework/mybatis/index.html"]],["v-780e7036","/java/framework/",{y:"p",t:"Framework"},["/java/framework/index.html"]],["v-f98a8cd4","/java/framework/mybatis-plus/",{y:"p",t:"Mybatis Plus"},["/java/framework/mybatis-plus/index.html"]],["v-76b674c7","/java/framework/springmvc/",{y:"p",t:"Springmvc"},["/java/framework/springmvc/index.html"]],["v-3b7aa683","/java/framework/spring/annotation/",{y:"p",t:"Annotation"},["/java/framework/spring/annotation/index.html"]],["v-574c8786","/java/framework/spring/",{y:"p",t:"Spring"},["/java/framework/spring/index.html"]],["v-381aa653","/java/framework/spring/core/",{y:"p",t:"Core"},["/java/framework/spring/core/index.html"]],["v-89f3f3e8","/java/framework/springboot/basic/",{y:"p",t:"Basic"},["/java/framework/springboot/basic/index.html"]],["v-5f7a288b","/java/framework/springboot/",{y:"p",t:"Springboot"},["/java/framework/springboot/index.html"]],["v-7177bac5","/java/framework/springboot/core/",{y:"p",t:"Core"},["/java/framework/springboot/core/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴"},["/timeline/index.html"]],["v-ac0c2a6a","/category/guide/",{y:"p",t:"Guide 分类"},["/category/guide/index.html"]],["v-0d1f4c3c","/tag/redis/",{y:"p",t:"Redis 标签"},["/tag/redis/index.html"]],["v-8848dfa8","/category/redis/",{y:"p",t:"Redis 分类"},["/category/redis/index.html"]],["v-20002c0c","/tag/java-%E5%9F%BA%E7%A1%80/",{y:"p",t:"Java 基础 标签"},["/tag/java-基础/","/tag/java-%E5%9F%BA%E7%A1%80/index.html"]],["v-5831b135","/category/java/",{y:"p",t:"Java 分类"},["/category/java/index.html"]],["v-28a2eb06","/tag/jdbc/",{y:"p",t:"JDBC 标签"},["/tag/jdbc/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",t:"Linux 分类"},["/category/linux/index.html"]],["v-edc3057c","/tag/linux-%E5%85%A5%E9%97%A8/",{y:"p",t:"Linux 入门 标签"},["/tag/linux-入门/","/tag/linux-%E5%85%A5%E9%97%A8/index.html"]],["v-65f6d381","/category/vue/",{y:"p",t:"Vue 分类"},["/category/vue/index.html"]],["v-b302da92","/tag/vue/",{y:"p",t:"Vue 标签"},["/tag/vue/index.html"]],["v-65efd6b5","/category/git/",{y:"p",t:"Git 分类"},["/category/git/index.html"]],["v-b310d42a","/tag/git/",{y:"p",t:"Git 标签"},["/tag/git/index.html"]],["v-5824b700","/category/idea/",{y:"p",t:"IDEA 分类"},["/category/idea/index.html"]],["v-2894de8a","/tag/idea/",{y:"p",t:"IDEA 标签"},["/tag/idea/index.html"]],["v-65f11ff6","/category/jdk/",{y:"p",t:"JDK 分类"},["/category/jdk/index.html"]],["v-b30e41a8","/tag/jdk/",{y:"p",t:"JDK 标签"},["/tag/jdk/index.html"]],["v-99b9d3c8","/category/maven/",{y:"p",t:"Maven 分类"},["/category/maven/index.html"]],["v-1e90405c","/tag/maven/",{y:"p",t:"Maven 标签"},["/tag/maven/index.html"]],["v-05e7d8a8","/category/nodejs/",{y:"p",t:"NodeJS 分类"},["/category/nodejs/index.html"]],["v-721080b6","/tag/nodejs/",{y:"p",t:"NodeJS 标签"},["/tag/nodejs/index.html"]],["v-8e491b96","/category/plsql/",{y:"p",t:"PLSQL 分类"},["/category/plsql/index.html"]],["v-131f882a","/tag/plsql/",{y:"p",t:"PLSQL 标签"},["/tag/plsql/index.html"]],["v-a582fd52","/category/powerdesigner/",{y:"p",t:"PowerDesigner 分类"},["/category/powerdesigner/index.html"]],["v-3aa1350d","/tag/powerdesigner/",{y:"p",t:"PowerDesigner 标签"},["/tag/powerdesigner/index.html"]],["v-348641c0","/category/%E3%80%90vscode%E3%80%91/",{y:"p",t:"【VSCode】 分类"},["/category/【vscode】/","/category/%E3%80%90vscode%E3%80%91/index.html"]],["v-3607ddaa","/tag/%E3%80%90vscode%E3%80%91/",{y:"p",t:"【VSCode】 标签"},["/tag/【vscode】/","/tag/%E3%80%90vscode%E3%80%91/index.html"]],["v-9717cc36","/category/mysql/",{y:"p",t:"MySQL 分类"},["/category/mysql/index.html"]],["v-28acd99e","/tag/mysql-%E5%9F%BA%E7%A1%80/",{y:"p",t:"MySQL 基础 标签"},["/tag/mysql-基础/","/tag/mysql-%E5%9F%BA%E7%A1%80/index.html"]],["v-27fb5a12","/category/docker/",{y:"p",t:"Docker 分类"},["/category/docker/index.html"]],["v-ecdc9a76","/tag/mysql-%E5%AE%89%E8%A3%85/",{y:"p",t:"MySQL 安装 标签"},["/tag/mysql-安装/","/tag/mysql-%E5%AE%89%E8%A3%85/index.html"]],["v-47aab902","/category/%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6/",{y:"p",t:"常用框架 分类"},["/category/常用框架/","/category/%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6/index.html"]],["v-3544e778","/tag/docker-%E5%9F%BA%E7%A1%80/",{y:"p",t:"Docker 基础 标签"},["/tag/docker-基础/","/tag/docker-%E5%9F%BA%E7%A1%80/index.html"]],["v-757f190a","/tag/mybatis/",{y:"p",t:"MyBatis 标签"},["/tag/mybatis/index.html"]],["v-41e71c66","/tag/mybatis-plus/",{y:"p",t:"MyBatis-Plus 标签"},["/tag/mybatis-plus/index.html"]],["v-9f510020","/tag/springmvc/",{y:"p",t:"SpringMVC 标签"},["/tag/springmvc/index.html"]],["v-0f6ad445","/tag/spring-%E6%B3%A8%E8%A7%A3/",{y:"p",t:"Spring 注解 标签"},["/tag/spring-注解/","/tag/spring-%E6%B3%A8%E8%A7%A3/index.html"]],["v-7d0ba9b4","/tag/spring/",{y:"p",t:"Spring 标签"},["/tag/spring/index.html"]],["v-1672eb57","/tag/springboot-%E5%9F%BA%E7%A1%80/",{y:"p",t:"SpringBoot 基础 标签"},["/tag/springboot-基础/","/tag/springboot-%E5%9F%BA%E7%A1%80/index.html"]],["v-780e2880","/tag/springboot-%E6%A0%B8%E5%BF%83/",{y:"p",t:"SpringBoot 核心 标签"},["/tag/springboot-核心/","/tag/springboot-%E6%A0%B8%E5%BF%83/index.html"]]];var xe=f({name:"Vuepress",setup(){const n=bl();return()=>t(n.value)}}),Qu=()=>Gu.reduce((n,[a,s,e,o])=>(n.push({name:a,path:s,component:xe,meta:e},...o.map(l=>({path:l,redirect:s}))),n),[{name:"404",path:"/:catchAll(.*)",component:xe}]),Wu=il,Ku=()=>{const n=tl({history:Wu(ps("/")),routes:Qu(),scrollBehavior:(a,s,e)=>e||(a.hash?{el:a.hash}:{top:0})});return n.beforeResolve(async(a,s)=>{var e;(a.path!==s.path||s===ol)&&([bn.value]=await Promise.all([dn.resolvePageData(a.name),(e=Te[a.name])==null?void 0:e.__asyncLoader()]))}),n},Yu=n=>{n.component("ClientOnly",Aa),n.component("Content",us)},Xu=(n,a,s)=>{const e=E(a.currentRoute.value.path);R(()=>a.currentRoute.value.path,g=>e.value=g);const o=b(()=>dn.resolveLayouts(s)),l=b(()=>dn.resolveRouteLocale(On.value.locales,e.value)),p=b(()=>dn.resolveSiteLocaleData(On.value,l.value)),c=b(()=>dn.resolvePageFrontmatter(bn.value)),u=b(()=>dn.resolvePageHeadTitle(bn.value,p.value)),r=b(()=>dn.resolvePageHead(u.value,c.value,p.value)),d=b(()=>dn.resolvePageLang(bn.value)),m=b(()=>dn.resolvePageLayout(bn.value,o.value));return n.provide(vl,o),n.provide(Ve,c),n.provide(Se,u),n.provide(Re,r),n.provide(Pe,d),n.provide(Oe,m),n.provide(rs,l),n.provide(Be,p),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>r.value},$headTitle:{get:()=>u.value},$lang:{get:()=>d.value},$page:{get:()=>bn.value},$routeLocale:{get:()=>l.value},$site:{get:()=>On.value},$siteLocale:{get:()=>p.value},$withBase:{get:()=>G}}),{layouts:o,pageData:bn,pageFrontmatter:c,pageHead:r,pageHeadTitle:u,pageLang:d,pageLayout:m,routeLocale:l,siteData:On,siteLocaleData:p}},Zu=()=>{const n=gl(),a=cs(),s=E([]),e=()=>{n.value.forEach(l=>{const p=nd(l);p&&s.value.push(p)})},o=()=>{document.documentElement.lang=a.value,s.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),s.value.splice(0,s.value.length),n.value.forEach(l=>{const p=ad(l);p!==null&&(document.head.appendChild(p),s.value.push(p))})};hn(hl,o),D(()=>{e(),o(),R(()=>n.value,()=>o())})},nd=([n,a,s=""])=>{const e=Object.entries(a).map(([c,u])=>Y(u)?`[${c}=${JSON.stringify(u)}]`:u===!0?`[${c}]`:"").join(""),o=`head > ${n}${e}`;return Array.from(document.querySelectorAll(o)).find(c=>c.innerText===s)||null},ad=([n,a,s])=>{if(!Y(n))return null;const e=document.createElement(n);return Yn(a)&&Object.entries(a).forEach(([o,l])=>{Y(l)?e.setAttribute(o,l):l===!0&&e.setAttribute(o,"")}),Y(s)&&e.appendChild(document.createTextNode(s)),e},sd=ll,ed=async()=>{var s;const n=sd({name:"VuepressApp",setup(){var e;Zu();for(const o of fa)(e=o.setup)==null||e.call(o);return()=>[t(pl),...fa.flatMap(({rootComponents:o=[]})=>o.map(l=>t(l)))]}}),a=Ku();Yu(n),Xu(n,a,fa);for(const e of fa)await((s=e.enhance)==null?void 0:s.call(e,{app:n,router:a,siteData:On}));return n.use(a),{app:n,router:a}};ed().then(({app:n,router:a})=>{a.isReady().then(()=>{n.mount("#app")})});export{id as H,ju as L,i as _,vn as a,_n as b,q as c,ed as createVueApp,Ru as d,T as e,Qs as f,ot as g,Vu as h,ld as i,fn as k,Du as l,Su as m,Bo as n,Co as r,Oi as u,Bs as v,Pu as y};
