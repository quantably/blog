"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[751],{6093:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i}});var n=r(6540),a=r(4794),l=r(3895),o=r(7528);const i=e=>{let{data:{markdownRemark:t}}=e;return n.createElement(o.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:r,next:o,site:i,markdownRemark:m},location:c}=e;const s=(null===(t=i.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.createElement(l.A,{location:c,title:s},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("div",{style:{marginBottom:"1rem"}}," ",n.createElement("button",{onClick:()=>window.history.back(),style:{background:"none",border:"none",padding:0,color:"var(--color-primary)",cursor:"pointer",textDecoration:"underline"}},"← Go back")),n.createElement("h1",{itemProp:"headline"},m.frontmatter.title),n.createElement("p",null,m.frontmatter.date),m.frontmatter.tags&&m.frontmatter.tags.length>0&&n.createElement("div",{style:{marginTop:"-0.5rem",marginBottom:"1rem",fontSize:"var(--fontSize-0)"}},"Tags:"," ",m.frontmatter.tags.map(((e,t)=>n.createElement(n.Fragment,{key:e},n.createElement(a.Link,{to:`/tags/${e}/`,style:{marginRight:"0.5rem"}},e)))))),n.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null)),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,r&&n.createElement(a.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),n.createElement("li",null,o&&n.createElement(a.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-24f9bc339e0ce0d2513f.js.map