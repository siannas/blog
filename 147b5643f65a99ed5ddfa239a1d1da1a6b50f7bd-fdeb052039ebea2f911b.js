(self.webpackChunksiannas_blog=self.webpackChunksiannas_blog||[]).push([[973],{8:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},7188:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return T}});var a=n(9611);var l=n(8);function c(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n(181);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}}(e,t)||(0,u.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=n(7294),m=n(3935);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,w=function(e,t){var n,o;return e===(null==t||null===(n=t.tagName)||void 0===n||null===(o=n.toUpperCase)||void 0===o?void 0:o.call(n))},y=function(e){return w("DIV",e)||w("SPAN",e)},E=function(e){return w("IMG",e)},S=function(e){return w("SVG",e)},L=function(e){var t=e.height,n=e.offset,o=e.width;return Math.min((window.innerWidth-2*n)/o,(window.innerHeight-2*n)/t)},z=function(e){var t=e.containerHeight,n=e.containerWidth,o=e.hasScalableSrc,i=e.offset,r=e.targetHeight,a=e.targetWidth;return!o&&r&&a?function(e){var t=e.containerHeight,n=e.containerWidth,o=e.offset,i=e.targetHeight,r=e.targetWidth,a=L({height:i,offset:o,width:r}),l=r>i?r/n:i/t;return a>1?l:a*l}({containerHeight:t,containerWidth:n,offset:i,targetHeight:r,targetWidth:a}):L({height:t,offset:i,width:n})},I=/url(?:\(['"]?)(.*?)(?:['"]?\))/,M=function(e){if(e){if(E(e))return e.currentSrc;if(y(e)){var t,n=window.getComputedStyle(e).backgroundImage;if(n)return null===(t=I.exec(n))||void 0===t?void 0:t[1]}}},O=function(e){var t=e.position,n=e.relativeNum,o=parseFloat(t);return t.endsWith("%")?n*o/100:o},W=/\.svg$/i,D=function(e){var t,n,o,i=e.hasZoomImg,r=e.imgSrc,a=e.isSvg,l=e.isZoomed,c=e.loadedImgEl,d=e.offset,s=e.shouldRefresh,u=e.targetEl,f=a||"data:image/svg+xml"===(null==r||null===(t=r.slice)||void 0===t?void 0:t.call(r,0,18))||i||!(!r||!W.test(r)),m=u.getBoundingClientRect(),v=window.getComputedStyle(u),g=function(e){var t=e.containerHeight,n=e.containerLeft,o=e.containerTop,i=e.containerWidth,r=e.hasScalableSrc,a=e.offset,l=e.targetHeight,c=e.targetWidth,d=z({containerHeight:t,containerWidth:i,hasScalableSrc:r,offset:a,targetHeight:l,targetWidth:c});return{top:o,left:n,width:i*d,height:t*d,transform:"translate(0,0) scale(".concat(1/d,")")}}({containerHeight:m.height,containerLeft:m.left,containerTop:m.top,containerWidth:m.width,hasScalableSrc:f,offset:d,targetHeight:null!==(n=null==c?void 0:c.naturalHeight)&&void 0!==n?n:m.height,targetWidth:null!==(o=null==c?void 0:c.naturalWidth)&&void 0!==o?o:m.width}),p=c&&v.objectFit?function(e){var t=e.containerHeight,n=e.containerLeft,o=e.containerTop,i=e.containerWidth,r=e.hasScalableSrc,a=e.objectFit,l=e.objectPosition,c=e.offset,d=e.targetHeight,s=e.targetWidth;if("scale-down"===a&&(a=s<=i&&d<=t?"none":"contain"),"cover"===a||"contain"===a){var u=i/s,f=t/d,m="cover"===a?Math.max(u,f):Math.min(u,f),v=h(l.split(" "),2),g=v[0],p=void 0===g?"50%":g,b=v[1],w=void 0===b?"50%":b,y=O({position:p,relativeNum:i-s*m}),E=O({position:w,relativeNum:t-d*m}),S=z({containerHeight:d*m,containerWidth:s*m,hasScalableSrc:r,offset:c,targetHeight:d,targetWidth:s});return{top:o+E,left:n+y,width:s*m*S,height:d*m*S,transform:"translate(0,0) scale(".concat(1/S,")")}}if("none"===a){var L=h(l.split(" "),2),I=L[0],M=void 0===I?"50%":I,W=L[1],D=void 0===W?"50%":W,C=O({position:M,relativeNum:i-s}),H=O({position:D,relativeNum:t-d}),Z=z({containerHeight:d,containerWidth:s,hasScalableSrc:r,offset:c,targetHeight:d,targetWidth:s});return{top:o+H,left:n+C,width:s*Z,height:d*Z,transform:"translate(0,0) scale(".concat(1/Z,")")}}if("fill"===a){var T=i/s,N=t/d,k=Math.max(T,N),x=z({containerHeight:d*k,containerWidth:s*k,hasScalableSrc:r,offset:c,targetHeight:d,targetWidth:s});return{width:i*x,height:t*x,transform:"translate(0,0) scale(".concat(1/x,")")}}return{}}({containerHeight:m.height,containerLeft:m.left,containerTop:m.top,containerWidth:m.width,hasScalableSrc:f,objectFit:v.objectFit,objectPosition:v.objectPosition,offset:d,targetHeight:c.naturalHeight,targetWidth:c.naturalWidth}):void 0,b=c&&y(u)?function(e){var t=e.backgroundPosition,n=e.backgroundSize,o=e.containerHeight,i=e.containerLeft,r=e.containerTop,a=e.containerWidth,l=e.hasScalableSrc,c=e.offset,d=e.targetHeight,s=e.targetWidth;if("cover"===n||"contain"===n){var u=a/s,f=o/d,m="cover"===n?Math.max(u,f):Math.min(u,f),v=h(t.split(" "),2),g=v[0],p=void 0===g?"50%":g,b=v[1],w=void 0===b?"50%":b,y=O({position:p,relativeNum:a-s*m}),E=O({position:w,relativeNum:o-d*m}),S=z({containerHeight:d*m,containerWidth:s*m,hasScalableSrc:l,offset:c,targetHeight:d,targetWidth:s});return{top:r+E,left:i+y,width:s*m*S,height:d*m*S,transform:"translate(0,0) scale(".concat(1/S,")")}}if("auto"===n){var L=h(t.split(" "),2),I=L[0],M=void 0===I?"50%":I,W=L[1],D=void 0===W?"50%":W,C=O({position:M,relativeNum:a-s}),H=O({position:D,relativeNum:o-d}),Z=z({containerHeight:d,containerWidth:s,hasScalableSrc:l,offset:c,targetHeight:d,targetWidth:s});return{top:r+H,left:i+C,width:s*Z,height:d*Z,transform:"translate(0,0) scale(".concat(1/Z,")")}}var T=h(n.split(" "),2),N=T[0],k=void 0===N?"50%":N,x=T[1],j=void 0===x?"50%":x,U=O({position:k,relativeNum:a})/s,A=O({position:j,relativeNum:o})/d,P=Math.min(U,A),R=h(t.split(" "),2),B=R[0],_=void 0===B?"50%":B,F=R[1],Y=void 0===F?"50%":F,G=O({position:_,relativeNum:a-s*P}),K=O({position:Y,relativeNum:o-d*P}),q=z({containerHeight:d*P,containerWidth:s*P,hasScalableSrc:l,offset:c,targetHeight:d,targetWidth:s});return{top:r+K,left:i+G,width:s*P*q,height:d*P*q,transform:"translate(0,0) scale(".concat(1/q,")")}}({backgroundPosition:v.backgroundPosition,backgroundSize:v.backgroundSize,containerHeight:m.height,containerLeft:m.left,containerTop:m.top,containerWidth:m.width,hasScalableSrc:f,offset:d,targetHeight:c.naturalHeight,targetWidth:c.naturalWidth}):void 0,w=Object.assign({},g,p,b);if(l){var E=window.innerWidth/2,S=window.innerHeight/2,L=E-(parseFloat(String(w.left||0))+parseFloat(String(w.width||0))/2),I=S-(parseFloat(String(w.top||0))+parseFloat(String(w.height||0))/2);s&&(w.transitionDuration="0.01ms"),w.transform="translate(".concat(L,"px,").concat(I,"px) scale(1)")}return w};"undefined"!=typeof document&&((b=document.createElement("div")).setAttribute("data-rmiz-portal",""),document.body.appendChild(b));var C={overflow:"",width:""};function H(e){return f.createElement(Z,p({},e))}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,a.Z)(e,t)}(d,e);var t,n,l,c=v(d);function d(){var e;return o(this,d),(e=c.apply(this,arguments)).state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},e.refContent=(0,f.createRef)(),e.refDialog=(0,f.createRef)(),e.refModalContent=(0,f.createRef)(),e.refModalImg=(0,f.createRef)(),e.refWrap=(0,f.createRef)(),e.imgEl=null,e.prevBodyAttrs=C,e.styleModalImg={},e.setId=function(){var t=function(){return Math.random().toString(16).slice(-4)};e.setState({id:t()+t()+t()})},e.setAndTrackImg=function(){var t,n,o,i,r,a,l=e.refContent.current;l&&(e.imgEl=l.querySelector(':is(img, svg, [role="img"], [data-zoom]):not([aria-hidden="true"])'),e.imgEl?(null===(t=e.changeObserver)||void 0===t||null===(n=t.disconnect)||void 0===n||n.call(t),null===(o=e.imgEl)||void 0===o||null===(i=o.addEventListener)||void 0===i||i.call(o,"load",e.handleImgLoad),null===(r=e.imgEl)||void 0===r||null===(a=r.addEventListener)||void 0===a||a.call(r,"click",e.handleZoom),e.state.loadedImgEl||e.handleImgLoad(),e.imgElObserver=new ResizeObserver((function(t){var n=t[0];null!=n&&n.target&&(e.imgEl=n.target,e.setState({}))})),e.imgElObserver.observe(e.imgEl)):e.changeObserver||(e.changeObserver=new MutationObserver(e.setAndTrackImg),e.changeObserver.observe(l,{childList:!0,subtree:!0})))},e.handleIfZoomChanged=function(t){var n=e.props.isZoomed;!t&&n?e.zoom():t&&!n&&e.unzoom()},e.handleImgLoad=function(){var t=r(e).imgEl,n=M(t);if(n){var o=new Image;E(t)&&(o.sizes=t.sizes,o.srcset=t.srcset),o.src=n;var i=function(){e.setState({loadedImgEl:o})};o.decode().then(i).catch((function(){o.onload=i}))}},e.handleZoom=function(){var t,n;null===(t=(n=e.props).onZoomChange)||void 0===t||t.call(n,!0)},e.handleUnzoom=function(){var t,n;null===(t=(n=e.props).onZoomChange)||void 0===t||t.call(n,!1)},e.handleDialogCancel=function(e){e.preventDefault()},e.handleDialogClick=function(t){t.target!==e.refModalContent.current&&t.target!==e.refModalImg.current||e.handleUnzoom()},e.handleDialogKeyDown=function(t){"Escape"!==t.key&&27!==t.keyCode||(t.preventDefault(),t.stopPropagation(),e.handleUnzoom())},e.handleWheel=function(t){t.stopPropagation(),queueMicrotask((function(){e.handleUnzoom()}))},e.handleTouchStart=function(t){1===t.changedTouches.length&&t.changedTouches[0]&&(e.touchYStart=t.changedTouches[0].screenY)},e.handleTouchMove=function(t){if(null!=e.touchYStart&&t.changedTouches[0]){e.touchYEnd=t.changedTouches[0].screenY;var n=Math.max(e.touchYStart,e.touchYEnd),o=Math.min(e.touchYStart,e.touchYEnd);Math.abs(n-o)>10&&(e.touchYStart=void 0,e.touchYEnd=void 0,e.handleUnzoom())}},e.handleTouchCancel=function(){e.touchYStart=void 0,e.touchYEnd=void 0},e.handleResize=function(){e.setState({shouldRefresh:!0})},e.zoom=function(){var t,n,o,i;e.bodyScrollDisable(),null===(t=e.refDialog.current)||void 0===t||null===(n=t.showModal)||void 0===n||n.call(t),e.setState({modalState:"LOADING"}),e.loadZoomImg(),window.addEventListener("wheel",e.handleWheel,{passive:!0}),window.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),window.addEventListener("touchend",e.handleTouchMove,{passive:!0}),window.addEventListener("touchcancel",e.handleTouchCancel,{passive:!0}),null===(o=e.refModalImg.current)||void 0===o||null===(i=o.addEventListener)||void 0===i||i.call(o,"transitionend",e.handleZoomEnd,{once:!0})},e.handleZoomEnd=function(){setTimeout((function(){e.setState({modalState:"LOADED"}),window.addEventListener("resize",e.handleResize,{passive:!0})}),0)},e.unzoom=function(){var t,n;e.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",e.handleWheel),window.removeEventListener("touchstart",e.handleTouchStart),window.removeEventListener("touchend",e.handleTouchMove),window.removeEventListener("touchcancel",e.handleTouchCancel),null===(t=e.refModalImg.current)||void 0===t||null===(n=t.addEventListener)||void 0===n||n.call(t,"transitionend",e.handleUnzoomEnd,{once:!0})},e.handleUnzoomEnd=function(){setTimeout((function(){var t,n;window.removeEventListener("resize",e.handleResize),e.setState({shouldRefresh:!1,modalState:"UNLOADED"}),null===(t=e.refDialog.current)||void 0===t||null===(n=t.close)||void 0===n||n.call(t),e.bodyScrollEnable()}),0)},e.bodyScrollDisable=function(){e.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};var t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width="".concat(t,"px")},e.bodyScrollEnable=function(){document.body.style.width=e.prevBodyAttrs.width,document.body.style.overflow=e.prevBodyAttrs.overflow,e.prevBodyAttrs=C},e.loadZoomImg=function(){var t=r(e).props.zoomImg,n=null==t?void 0:t.src;if(n){var o,i,a=new Image;a.sizes=null!==(o=null==t?void 0:t.sizes)&&void 0!==o?o:"",a.srcset=null!==(i=null==t?void 0:t.srcSet)&&void 0!==i?i:"",a.src=n;var l=function(){e.setState({isZoomImgLoaded:!0})};a.decode().then(l).catch((function(){a.onload=l}))}},e.UNSAFE_handleSvg=function(){var t=r(e),n=t.imgEl,o=t.refModalImg,i=t.styleModalImg;if(S(n)){var a,l,c,d,s,u,h,f=document.createElement("div");f.innerHTML=n.outerHTML;var m=f.firstChild;m.style.width="".concat(null!==(a=i.width)&&void 0!==a?a:0,"px"),m.style.height="".concat(null!==(l=i.height)&&void 0!==l?l:0,"px"),m.addEventListener("click",e.handleUnzoom),null===(c=o.current)||void 0===c||null===(d=c.firstChild)||void 0===d||null===(s=d.remove)||void 0===s||s.call(d),null===(u=o.current)||void 0===u||null===(h=u.appendChild)||void 0===h||h.call(u,m)}},e}return t=d,(n=[{key:"render",value:function(){var e=this.handleDialogCancel,t=this.handleDialogClick,n=this.handleDialogKeyDown,o=this.handleUnzoom,i=this.handleZoom,r=this.imgEl,a=this.props,l=a.a11yNameButtonUnzoom,c=a.a11yNameButtonZoom,d=a.children,s=a.classDialog,u=a.IconUnzoom,h=a.IconZoom,v=a.isZoomed,g=a.wrapElement,w=a.ZoomContent,L=a.zoomImg,z=a.zoomMargin,I=this.refContent,O=this.refDialog,W=this.refModalContent,C=this.refModalImg,H=this.refWrap,Z=this.state,T=Z.id,N=Z.isZoomImgLoaded,k=Z.loadedImgEl,x=Z.modalState,j=Z.shouldRefresh,U="rmiz-modal-".concat(T),A="rmiz-modal-img-".concat(T),P=y(r),R=E(r),B=S(r),_=function(e){var t,n;if(e)return E(e)?null!==(t=e.alt)&&void 0!==t?t:void 0:null!==(n=e.getAttribute("aria-label"))&&void 0!==n?n:void 0}(r),F=M(r),Y=R?r.sizes:void 0,G=R?r.srcset:void 0,K=!(null==L||!L.src),q=r&&(k||B)&&"none"!==window.getComputedStyle(r).display,V=_?"".concat(c,": ").concat(_):c,$="LOADING"===x||"LOADED"===x,J=q?"found":"not-found",Q="UNLOADED"===x||"UNLOADING"===x?"hidden":"visible",X={visibility:"UNLOADED"===x?"visible":"hidden"},ee=function(e){if(!e)return{};if(S(e)){var t,n=e.parentNode,o=null==n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n),i=e.getBoundingClientRect();return{height:i.height,left:o.left-i.left,width:i.width,top:o.top-i.top}}return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop}}(r);this.styleModalImg=q?D({hasZoomImg:K,imgSrc:F,isSvg:B,isZoomed:v&&$,loadedImgEl:k,offset:z,shouldRefresh:j,targetEl:r}):{};var te=null;if(q){var ne=R||P?f.createElement("img",p(p({alt:_,sizes:Y,src:F,srcSet:G},N&&"LOADED"===x?L:{}),{},{"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:A,ref:C,style:this.styleModalImg,width:this.styleModalImg.width||void 0})):B?f.createElement("div",{"data-rmiz-modal-img":!0,ref:C,style:this.styleModalImg}):null,oe=f.createElement("button",{"aria-label":l,"data-rmiz-btn-unzoom":"",onClick:o,type:"button"},f.createElement(u,null));te=w?f.createElement(w,{buttonUnzoom:oe,modalState:x,img:ne,onUnzoom:o}):f.createElement(f.Fragment,null,ne,oe)}return f.createElement(g,{"aria-owns":U,"data-rmiz":"",ref:H},f.createElement(g,{"data-rmiz-content":J,ref:I,style:X},d),q&&f.createElement(g,{"data-rmiz-ghost":"",style:ee},f.createElement("button",{"aria-label":V,"data-rmiz-btn-zoom":"",onClick:i,type:"button"},f.createElement(h,null))),q&&null!=b&&(0,m.createPortal)(f.createElement("dialog",{"aria-labelledby":A,"aria-modal":"true",className:s,"data-rmiz-modal":"",id:U,onClick:t,onClose:o,onCancel:e,onKeyDown:n,ref:O,role:"dialog"},f.createElement("div",{"data-rmiz-modal-overlay":Q}),f.createElement("div",{"data-rmiz-modal-content":"",ref:W},te)),b))}},{key:"componentDidMount",value:function(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}},{key:"componentWillUnmount",value:function(){var e,t,n,o,i,r,a,l,c,d,s,u;null===(e=this.changeObserver)||void 0===e||null===(t=e.disconnect)||void 0===t||t.call(e),null===(n=this.imgElObserver)||void 0===n||null===(o=n.disconnect)||void 0===o||o.call(n),null===(i=this.imgEl)||void 0===i||null===(r=i.removeEventListener)||void 0===r||r.call(i,"load",this.handleImgLoad),null===(a=this.imgEl)||void 0===a||null===(l=a.removeEventListener)||void 0===l||l.call(a,"click",this.handleZoom),null===(c=this.refModalImg.current)||void 0===c||null===(d=c.removeEventListener)||void 0===d||d.call(c,"transitionend",this.handleZoomEnd),null===(s=this.refModalImg.current)||void 0===s||null===(u=s.removeEventListener)||void 0===u||u.call(s,"transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchend",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(e){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}}])&&i(t.prototype,n),l&&i(t,l),d}(f.Component);function T(e){var t=h((0,f.useState)(!1),2),n=t[0],o=t[1];return f.createElement(H,p(p({},e),{},{isZoomed:n,onZoomChange:o}))}Z.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return f.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return f.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},wrapElement:"div",zoomMargin:0}}}]);
//# sourceMappingURL=147b5643f65a99ed5ddfa239a1d1da1a6b50f7bd-fdeb052039ebea2f911b.js.map