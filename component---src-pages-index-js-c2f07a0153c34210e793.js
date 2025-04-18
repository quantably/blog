"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[8293],{922:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return c}});var r=a(6540),n=a(4794),i=a(3895),s=a(7528),l=a(2532);var o=()=>{var e;const t=null===(e=(0,n.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio"},r.createElement(l.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpg",width:75,height:75,quality:95,alt:"Profile picture",__imageData:a(6304)}),(null==t?void 0:t.name)&&r.createElement("p",null,"Hi, I'm Peter. I'm an AI leader with over 15 years experience building disruptive AI systems at companies like Monolith, Elsevier, Experian, and IBM). In this site, I share my experiences on real-world strategies for leading AI teams, overcoming project hurdles, leveraging modern tools, and ultimately delivering AI solutions that create tangible business value."))};var c=e=>{var t;let{data:a,location:s}=e;const l=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.indexPageContent,d=a.latestBlogPosts.nodes;return r.createElement(i.A,{location:s,title:l},r.createElement("section",{dangerouslySetInnerHTML:{__html:c.html}}),r.createElement(o,null),r.createElement("hr",{style:{marginBottom:"2rem"}}),r.createElement("section",null,r.createElement("h2",null,"Recent Posts"),r.createElement("table",{style:{width:"100%",marginBottom:"1.5rem"}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{textAlign:"left",paddingBottom:"0.5rem"}},"Date"),r.createElement("th",{style:{textAlign:"left",paddingBottom:"0.5rem"}},"Title"))),r.createElement("tbody",null,d.map((e=>{const t=e.frontmatter.title||e.fields.slug;return r.createElement("tr",{key:e.fields.slug},r.createElement("td",{style:{whiteSpace:"nowrap",paddingRight:"1rem",verticalAlign:"top"}},e.frontmatter.date),r.createElement("td",null,r.createElement(n.Link,{to:`/blog${e.fields.slug}`,itemProp:"url"},t)))})))),r.createElement(n.Link,{to:"/blog"},"See all posts")))};const d=e=>{let{data:t}=e;return r.createElement(s.A,{title:t.indexPageContent.frontmatter.title})}},2532:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},I={image:i().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],$=new Set;let A,_;const j=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=l(e,T);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:k}=w,x=l(w,N),S=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{A||(A=a.e(1108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(L);if(_&&$.has(L))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:$.has(L),image:n},h)),$.has(L)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,L,$,i,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{$.has(L)&&_&&(S.current.innerHTML=_(s({isLoading:$.has(L),isLoaded:$.has(L),image:n},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},x,{style:s({},E,i,{backgroundColor:d}),className:`${k}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));P.propTypes=I,P.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,O);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const q=R((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=l(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:C,layout:I,images:T,placeholder:N,backgroundColor:$}=o,A=c(w,C,I),{style:_,className:j}=A,P=l(A,S),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},P,{style:s({},_,i,{backgroundColor:h}),className:`${j}${a?` ${a}`:""}`}),r.createElement(m,{layout:I,width:w,height:C},r.createElement(E,s({},u(N,!1,I,w,C,$,y,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:g},v,d("eager"===p,!1,O,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:C,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=W;const H=R(P);H.displayName="StaticImage",H.propTypes=W},2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6304:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#787868","images":{"fallback":{"src":"/static/d7f7325c81d60ef40c20dcd62f976b2b/d8275/profile-pic.jpg","srcSet":"/static/d7f7325c81d60ef40c20dcd62f976b2b/d8275/profile-pic.jpg 75w,\\n/static/d7f7325c81d60ef40c20dcd62f976b2b/b5649/profile-pic.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/d7f7325c81d60ef40c20dcd62f976b2b/26941/profile-pic.avif 75w,\\n/static/d7f7325c81d60ef40c20dcd62f976b2b/95309/profile-pic.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/d7f7325c81d60ef40c20dcd62f976b2b/a18cc/profile-pic.webp 75w,\\n/static/d7f7325c81d60ef40c20dcd62f976b2b/7ddcc/profile-pic.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c2f07a0153c34210e793.js.map