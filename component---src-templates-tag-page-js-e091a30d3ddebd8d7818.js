"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[1754],{6190:function(e,t,l){l.r(t),l.d(t,{Head:function(){return o}});var n=l(6540),a=l(4794),r=l(3895),s=l(7528);t.default=e=>{var t;let{pageContext:l,data:s,location:o}=e;const{tag:i}=l,{nodes:c,totalCount:m}=s.allMarkdownRemark,u=(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=`${m} post${1===m?"":"s"} tagged with "${i}"`;return n.createElement(r.A,{location:o,title:`${i} | ${u}`},n.createElement("h1",null,i),n.createElement("p",null,d),n.createElement("ol",{style:{listStyle:"none"}},c.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const o=e=>{let{pageContext:t}=e;const{tag:l}=t;return n.createElement(s.A,{title:`Posts tagged "${l}"`})}}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-e091a30d3ddebd8d7818.js.map