"use strict";(self.webpackChunksiannas_blog=self.webpackChunksiannas_blog||[]).push([[2989],{9535:function(e,t,a){var l=a(7294),n=a(5444),r=a(2359);t.Z=function(){var e,t,i=(0,n.useStaticQuery)("3257411868"),c=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1944)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",l.createElement(n.Link,{to:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"You should follow them on Twitter")))}},7198:function(e,t,a){var l=a(7294),n=a(5444);t.Z=function(e){var t,a=e.location,r=e.title,i=e.children,c="/blog/"===a.pathname;return t=c?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/"},r)):l.createElement(n.Link,{className:"header-link-home",to:"/"},r),l.createElement("div",{className:"global-wrapper","data-is-root-path":c},l.createElement("header",{className:"global-header"},t),l.createElement("main",null,i),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},1195:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return u}});var n=a(7294),r=a(5444),i=["data"],c=["posts","categories","childId"],o=function(e){var t=e.data,a=l(e,i).withUlTag||!0;return t.length&&a?n.createElement("ul",null,t.map((function(e){return n.createElement("li",{key:e.fields.slug},n.createElement(r.Link,{to:e.fields.slug},e.frontmatter.title))}))):t.length?n.createElement(n.Fragment,null,t.map((function(e){return n.createElement("li",{key:e.fields.slug},n.createElement(r.Link,{to:e.fields.slug},e.frontmatter.title))}))):n.createElement(n.Fragment,null)},s=function e(t){var a=t.posts,i=t.categories,s=t.childId,m=(l(t,c),n.useState(!1)),u=m[0],d=m[1],f=i[s],p=a.filter((function(e){return e.frontmatter.category===f.name}));return null!==f.children?n.createElement(n.Fragment,null,n.createElement(r.Link,{to:"#",className:"item",onClick:function(){return d(!u)}},n.createElement("i",{className:"angle icon "+(u?"down":"left")}),f.name),n.createElement("div",{className:u?"ui my-collapsible show":"ui my-collapsible"},f.children.map((function(t){return n.createElement(e,{categories:i,posts:a,key:t.id,childId:t.id})})),n.createElement(o,{withUlTag:!1,data:p}))):n.createElement(n.Fragment,null,n.createElement(r.Link,{to:"#",className:"item"},f.name),n.createElement(o,{data:p}))},m=function(e){var t,a,l=e.data,r=(t=l.allCategory.edges,a={},t.forEach((function(e){a[e.node.id]={name:e.node.internal.contentDigest,children:e.node.children.length?e.node.children:null,parent:e.node.parent}})),a),i=l.allMarkdownRemark.nodes;return n.createElement("div",{className:"left fixed vertical menu ui large"},n.createElement("div",{className:"ui dividing large header my-primary",style:{padding:"14px 17px"}},"Siannas Blog"),n.createElement("div",null,Object.keys(r).map((function(e){return r[e].parent?"":n.createElement(s,{categories:r,posts:i,key:e,childId:e})}))))},u=function(e){return n.createElement(r.StaticQuery,{query:"2006365515",render:function(t){return n.createElement(m,Object.assign({data:t},e))}})}},4870:function(e,t,a){a.r(t);var l=a(7294),n=a(5444),r=a(2359),i=a(9535),c=a(7198),o=a(1195),s=a(3751);t.default=function(e){var t,a=e.data,m=e.location,u=a.markdownRemark,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=a.previous,p=a.next,g=a.featuredImage?(0,r.d)(a.featuredImage):null;return l.createElement(c.Z,{location:m,title:d},l.createElement(o.Z,null),l.createElement(s.Z,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,g?l.createElement(r.G,{image:g,alt:"featuredImage"}):"",l.createElement("h1",{itemProp:"headline"},u.frontmatter.title),l.createElement("p",null,u.frontmatter.date)),l.createElement("section",{dangerouslySetInnerHTML:{__html:u.html},itemProp:"articleBody"}),l.createElement("hr",null),l.createElement("p",{className:"tags",id:"tags"},"Tags:",u.frontmatter.tags?u.frontmatter.tags.map((function(e){return l.createElement(n.Link,{to:"#tags",key:e},e)})):"-"),l.createElement("footer",null,l.createElement(i.Z,null))),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,f&&l.createElement(n.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),l.createElement("li",null,p&&l.createElement(n.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))))}},1944:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/9c9c190f08ebb52122f5ed111ba0765f/d24ee/profile-pic.jpg","srcSet":"/blog/static/9c9c190f08ebb52122f5ed111ba0765f/d24ee/profile-pic.jpg 50w,\\n/blog/static/9c9c190f08ebb52122f5ed111ba0765f/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/9c9c190f08ebb52122f5ed111ba0765f/d4bf4/profile-pic.avif 50w,\\n/blog/static/9c9c190f08ebb52122f5ed111ba0765f/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/9c9c190f08ebb52122f5ed111ba0765f/3faea/profile-pic.webp 50w,\\n/blog/static/9c9c190f08ebb52122f5ed111ba0765f/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1722c0dca09f175c9cb1.js.map