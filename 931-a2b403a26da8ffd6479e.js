"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[931],{4931:function(t,e,a){a.d(e,{diagram:function(){return x}});var r=a(7354),n=a(5395),o=a(6627),l=a(2362),i=a(8731),c={packet:[]},s=structuredClone(c),d=l.UI.packet,b=(0,l.K2)((()=>{const t=(0,n.$t)({...d,...(0,l.zj)().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),k=(0,l.K2)((()=>s.packet),"getPacket"),p={pushWord:(0,l.K2)((t=>{t.length>0&&s.packet.push(t)}),"pushWord"),getPacket:k,getConfig:b,clear:(0,l.K2)((()=>{(0,l.IU)(),s=structuredClone(c)}),"clear"),setAccTitle:l.SV,getAccTitle:l.iN,setDiagramTitle:l.ke,getDiagramTitle:l.ab,getAccDescription:l.m7,setAccDescription:l.EI},g=(0,l.K2)((t=>{(0,r.S)(t,p);let e=-1,a=[],n=1;const{bitsPerRow:o}=p.getConfig();for(let{start:r,end:i,label:c}of t.blocks){if(i&&i<r)throw new Error(`Packet block ${r} - ${i} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${i??r} is not contiguous. It should start from ${e+1}.`);for(e=i??r,l.Rm.debug(`Packet block ${r} - ${e} with label ${c}`);a.length<=o+1&&p.getPacket().length<1e4;){const[t,e]=h({start:r,end:i,label:c},n,o);if(a.push(t),t.end+1===n*o&&(p.pushWord(a),a=[],n++),!e)break;({start:r,end:i,label:c}=e)}}p.pushWord(a)}),"populate"),h=(0,l.K2)(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),u={parse:(0,l.K2)((async t=>{const e=await(0,i.qg)("packet",t);l.Rm.debug(e),g(e)}),"parse")},f=(0,l.K2)(((t,e,a,r)=>{const n=r.db,i=n.getConfig(),{rowHeight:c,paddingY:s,bitWidth:d,bitsPerRow:b}=i,k=n.getPacket(),p=n.getDiagramTitle(),g=c+s,h=g*(k.length+1)-(p?0:c),u=d*b+2,f=(0,o.D)(e);f.attr("viewbox",`0 0 ${u} ${h}`),(0,l.a$)(f,h,u,i.useMaxWidth);for(const[o,l]of k.entries())$(f,l,o,i);f.append("text").text(p).attr("x",u/2).attr("y",h-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),$=(0,l.K2)(((t,e,a,{rowHeight:r,paddingX:n,paddingY:o,bitWidth:l,bitsPerRow:i,showBits:c})=>{const s=t.append("g"),d=a*(r+o)+o;for(const b of e){const t=b.start%i*l+1,e=(b.end-b.start+1)*l-n;if(s.append("rect").attr("x",t).attr("y",d).attr("width",e).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",t+e/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(b.label),!c)continue;const a=b.end===b.start,o=d-2;s.append("text").attr("x",t+(a?e/2:0)).attr("y",o).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",a?"middle":"start").text(b.start),a||s.append("text").attr("x",t+e).attr("y",o).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(b.end)}}),"drawWord"),w={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},x={parser:u,db:p,renderer:{draw:f},styles:(0,l.K2)((({packet:t}={})=>{const e=(0,n.$t)(w,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")}},7354:function(t,e,a){function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:function(){return r}}),(0,a(2362).K2)(r,"populateCommonDb")}}]);
//# sourceMappingURL=931-a2b403a26da8ffd6479e.js.map