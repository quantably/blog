"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[711],{4151:function(e,t,l){l.r(t),l.d(t,{Head:function(){return s}});var n=l(6540),r=l(4794),a=l(3895),o=l(7528);t.default=e=>{var t;let{data:l,location:o}=e;const s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",i=l.allMarkdownRemark.nodes;return 0===i.length?n.createElement(a.A,{location:o,title:s},n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(a.A,{location:o,title:s},n.createElement("h1",null,"Blog"),n.createElement("ol",{style:{listStyle:"none"}},i.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const s=()=>n.createElement(o.A,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-blog-js-c6647cf1c902f20926bf.js.map