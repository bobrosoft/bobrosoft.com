var He=Object.defineProperty;var De=(i,o,p)=>o in i?He(i,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[o]=p;var q=(i,o,p)=>De(i,typeof o!="symbol"?o+"":o,p);import{r as T,R as z,a as B,e as Ie,d as A,j as m,b as Ne,u as Me,c as ie,H as L,P as qe,U as N,G as We,S as W}from"./index-DYvRyvyK.js";function ne(){return ne=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(i[u]=p[u])}return i},ne.apply(this,arguments)}function ze(i,o){if(i==null)return{};var p=Be(i,o),u,w;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(i);for(w=0;w<x.length;w++)u=x[w],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(p[u]=i[u])}return p}function Be(i,o){if(i==null)return{};var p={},u=Object.keys(i),w,x;for(x=0;x<u.length;x++)w=u[x],!(o.indexOf(w)>=0)&&(p[w]=i[w]);return p}var ae=T.forwardRef(function(i,o){var p=i.color,u=p===void 0?"currentColor":p,w=i.size,x=w===void 0?24:w,s=ze(i,["color","size"]);return z.createElement("svg",ne({ref:o,xmlns:"http://www.w3.org/2000/svg",width:x,height:x,viewBox:"0 0 24 24",fill:"none",stroke:u,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),z.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),z.createElement("polyline",{points:"15 3 21 3 21 9"}),z.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))});ae.propTypes={color:B.string,size:B.oneOfType([B.string,B.number])};ae.displayName="ExternalLink";var ee={},U={exports:{}},te={},ve;function H(){return ve||(ve=1,(function(i){function o(h){try{return a.insertRule(h,a.cssRules.length)}catch{console.warn("react-reveal - animation failed")}}function p(h,d,f,r,c){var n=Math.log(r),y=Math.log(c),O=(y-n)/(f-d);return Math.exp(n+O*(h-d))}function u(h){if(!a)return"";var d="@keyframes "+(v+t)+"{"+h+"}",f=l[h];return f?""+v+f:(o(d),l[h]=t,""+v+t++)}function w(){j||(i.globalHide=j=!0,window.removeEventListener("scroll",w,!0),o("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",w,!0),window.document.removeEventListener("visibilitychange",w))}function x(h){var d=h.ssrFadeout;i.fadeOutEnabled=d}Object.defineProperty(i,"__esModule",{value:!0}),i.insertRule=o,i.cascade=p,i.animation=u,i.hideAll=w,i.default=x;var s=i.namespace="react-reveal";i.defaults={duration:1e3,delay:0,count:1};var P=i.ssr=!0,E=i.observerMode=!1,b=i.raf=function(h){return window.setTimeout(h,66)},S=i.disableSsr=function(){return i.ssr=P=!1};i.fadeOutEnabled=!1,i.ssrFadeout=function(){var h=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return i.fadeOutEnabled=h};var j=i.globalHide=!1;i.ie10=!1;var e=i.collapseend=void 0,t=1,l={},a=!1,v=s+"-"+Math.floor(1e15*Math.random())+"-";if(typeof window<"u"&&window.name!=="nodejs"&&window.document&&typeof navigator<"u"){i.observerMode=E="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),i.raf=b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b,i.ssr=P=window.document.querySelectorAll("div[data-reactroot]").length>0,navigator.appVersion.indexOf("MSIE 10")!==-1&&(i.ie10=!0),P&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(i.ssr=P=!1),P&&window.setTimeout(S,1500),E||(i.collapseend=e=document.createEvent("Event"),e.initEvent("collapseend",!0,!0));var g=document.createElement("style");document.head.appendChild(g),g.sheet&&g.sheet.cssRules&&g.sheet.insertRule&&(a=g.sheet,window.addEventListener("scroll",w,!0),window.addEventListener("orientationchange",w,!0),window.document.addEventListener("visibilitychange",w))}})(te)),te}var G={exports:{}},Z={exports:{}},be;function Ue(){return be||(be=1,(function(i,o){function p(d){return d&&d.__esModule?d:{default:d}}function u(d,f,r){return f in d?Object.defineProperty(d,f,{value:r,enumerable:!0,configurable:!0,writable:!0}):d[f]=r,d}function w(d,f){if(!(d instanceof f))throw new TypeError("Cannot call a class as a function")}function x(d,f){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!f||typeof f!="object"&&typeof f!="function"?d:f}function s(d,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);d.prototype=Object.create(f&&f.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(d,f):d.__proto__=f)}Object.defineProperty(o,"__esModule",{value:!0});var P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},E=(function(){function d(f,r){var c=[],n=!0,y=!1,O=void 0;try{for(var R,k=f[Symbol.iterator]();!(n=(R=k.next()).done)&&(c.push(R.value),!r||c.length!==r);n=!0);}catch(_){y=!0,O=_}finally{try{!n&&k.return&&k.return()}finally{if(y)throw O}}return c}return function(f,r){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return d(f,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),b=Object.assign||function(d){for(var f=1;f<arguments.length;f++){var r=arguments[f];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(d[c]=r[c])}return d},S=(function(){function d(f,r){for(var c=0;c<r.length;c++){var n=r[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(f,n.key,n)}}return function(f,r,c){return r&&d(f.prototype,r),c&&d(f,c),f}})(),j=Ie(),e=p(j),t=A(),l=H(),a=(0,t.shape)({make:t.func,duration:t.number.isRequired,delay:t.number.isRequired,forever:t.bool,count:t.number.isRequired,style:t.object.isRequired,reverse:t.bool}),v={collapse:t.bool,collapseEl:t.element,cascade:t.bool,wait:t.number,force:t.bool,disabled:t.bool,appear:t.bool,enter:t.bool,exit:t.bool,fraction:t.number,refProp:t.string,innerRef:t.func,onReveal:t.func,unmountOnExit:t.bool,mountOnEnter:t.bool,inEffect:a.isRequired,outEffect:(0,t.oneOfType)([a,(0,t.oneOf)([!1])]).isRequired,ssrReveal:t.bool,collapseOnly:t.bool,ssrFadeout:t.bool},g={fraction:.2,refProp:"ref"},h=(function(d){function f(r,c){w(this,f);var n=x(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,r,c));return n.isOn=r.when===void 0||!!r.when,n.state={collapse:r.collapse?f.getInitialCollapseStyle(r):void 0,style:{opacity:n.isOn&&!r.ssrReveal||!r.outEffect?void 0:0},prevProps:r},n.savedChild=!1,n.isShown=!1,l.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return s(f,d),S(f,[{key:"saveRef",value:function(r){this.childRef&&this.childRef(r),this.props.innerRef&&this.props.innerRef(r),this.el!==r&&(this.el=r&&"offsetHeight"in r?r:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?b({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!l.observerMode&&this.props.collapse&&window.document.dispatchEvent(l.collapseend)))}},{key:"animationEnd",value:function(r,c,n){var y=this,O=n.forever,R=n.count,k=n.delay,_=n.duration;if(!O){var C=function(){y&&y.el&&(y.animationEndTimeout=void 0,r.call(y))};this.animationEndTimeout=window.setTimeout(C,k+(_+(c?_:0)*R))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(r,c,n){var y=n.duration+(c.cascade?n.duration:0),O=this.isOn?this.getDimensionValue():0,R=void 0,k=void 0;if(c.collapseOnly)R=n.duration/3,k=n.delay;else{var _=y>>2,C=_>>1;R=_,k=n.delay+(this.isOn?0:y-_-C),r.style.animationDuration=y-_+(this.isOn?C:-C)+"ms",r.style.animationDelay=n.delay+(this.isOn?_-C:0)+"ms"}return r.collapse={height:O,transition:"height "+R+"ms ease "+k+"ms",overflow:c.collapseOnly?"hidden":void 0},r}},{key:"animate",value:function(r){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var c=!this.isOn&&r.outEffect,n=r[c?"outEffect":"inEffect"],y="style"in n&&n.style.animationName||void 0,O=void 0;r.collapseOnly?O={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((r.outEffect||this.isOn)&&n.make&&(y=n.make),O={hasAppeared:!0,hasExited:!1,collapse:void 0,style:b({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:y}),className:n.className}),this.setState(r.collapse?this.collapse(O,r,n):O),c?(this.savedChild=e.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,r.cascade,n)):this.savedChild=!1,this.onReveal(r)}}},{key:"onReveal",value:function(r){r.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),r.wait?this.onRevealTimeout=window.setTimeout(r.onReveal,r.wait):r.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),l.ssr&&(0,l.disableSsr)()}},{key:"handleObserve",value:function(r,c){E(r,1)[0].intersectionRatio>0&&(c.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(r){var c=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.el&&l.observerMode){if(this.observer){if(!c)return;this.observer.disconnect()}else if(c)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:r.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(r){var c=this,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1];l.globalHide||(0,l.hideAll)(),this&&this.el&&(r||(r=this.props),l.ssr&&(0,l.disableSsr)(),this.isOn&&this.isShown&&r.spy!==void 0?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return c.reveal(r)},200)):n||this.inViewport(r)||r.force?this.animate(r):l.observerMode?this.observe(r):this.listen())}},{key:"componentDidMount",value:function(){var r=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),this.props.when!==void 0&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var c=this.context.transitionGroup,n=c&&!c.isMounting?!("enter"in this.props&&this.props.enter===!1):this.props.appear;return this.isOn&&((this.props.when!==void 0||this.props.spy!==void 0)&&!n||l.ssr&&!l.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&f.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):l.ssr&&(l.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&f.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return r.reveal(r.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(r){var c=this,n=void 0;n=typeof r=="string"?r.split("").map(function(I,M){return e.default.createElement("span",{key:M,style:{display:"inline-block",whiteSpace:"pre"}},I)}):e.default.Children.toArray(r);var y=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],O=y.duration,R=y.reverse,k=n.length,_=2*O;this.props.collapse&&(_=parseInt(this.state.style.animationDuration,10),O=_/2);var C=R?k:0;return n=n.map(function(I){return(I===void 0?"undefined":P(I))==="object"&&I?e.default.cloneElement(I,{style:b({},I.props.style,c.state.style,{animationDuration:Math.round((0,l.cascade)(R?C--:C++,0,k,O,_))+"ms"})}):I})}},{key:"componentDidUpdate",value:function(r){if(r.when!==void 0&&(this.isOn=!!this.state.prevProps.when),r.fraction!==this.props.fraction&&this.observe(r,!0),!this.isOn&&r.onExited&&"exit"in r&&r.exit===!1)return void r.onExited();r.disabled||(r.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:f.getInitialCollapseStyle(r)}),this.isShown=!1),r.when===this.props.when&&r.spy===this.props.spy||this.reveal(r),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if(P(this.props.children)==="object"){var r=e.default.Children.only(this.props.children);return"type"in r&&typeof r.type=="string"||this.props.refProp!=="ref"?r:e.default.createElement("div",null,r)}return e.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var r=void 0;r=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var c=this.getChild();typeof c.ref=="function"&&(this.childRef=c.ref);var n=!1,y=c.props,O=y.style,R=y.className,k=y.children,_=this.props.disabled?R:(this.props.outEffect?l.namespace:"")+(this.state.className?" "+this.state.className:"")+(R?" "+R:"")||void 0,C=void 0;typeof this.state.style.animationName=="function"&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&k&&this.state.style.animationName?(n=this.cascade(k),C=b({},O,{opacity:1})):C=this.props.disabled?O:b({},O,this.state.style);var I=b({},this.props.props,u({className:_,style:C},this.props.refProp,this.saveRef)),M=e.default.cloneElement(c,I,r?n||k:void 0);return this.props.collapse!==void 0?this.props.collapseEl?e.default.cloneElement(this.props.collapseEl,{style:b({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:M}):e.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:M}):M}},{key:"makeHandler",value:function(r){var c=this,n=function(){r.call(c,c.props),c.ticking=!1};return function(){c.ticking||((0,l.raf)(n),c.ticking=!0)}}},{key:"inViewport",value:function(r){if(!this.el||window.document.hidden)return!1;var c=this.el.offsetHeight,n=window.pageYOffset-f.getTop(this.el),y=Math.min(c,window.innerHeight)*(l.globalHide?r.fraction:0);return n>y-window.innerHeight&&n<c-y}},{key:"resize",value:function(r){this&&this.el&&this.isOn&&this.inViewport(r)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!r.outEffect?1:0}}),this.onReveal(r))}},{key:"listen",value:function(){l.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!l.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getDerivedStateFromProps",value:function(r,c){return{prevProps:r}}},{key:"getInitialCollapseStyle",value:function(r){return{height:0,visibility:r.when?void 0:"hidden"}}},{key:"getTop",value:function(r){for(;r.offsetTop===void 0;)r=r.parentNode;for(var c=r.offsetTop;r.offsetParent;c+=r.offsetTop)r=r.offsetParent;return c}}]),f})(e.default.Component);h.propTypes=v,h.defaultProps=g,h.displayName="RevealBase",o.default=h,i.exports=o.default})(Z,Z.exports)),Z.exports}var ye;function D(){return ye||(ye=1,(function(i,o){function p(b){return b&&b.__esModule?b:{default:b}}function u(b,S,j,e){return"in"in b&&(b.when=b.in),s.default.Children.count(e)<2?s.default.createElement(E.default,w({},b,{inEffect:S,outEffect:j,children:e})):(e=s.default.Children.map(e,function(t){return s.default.createElement(E.default,w({},b,{inEffect:S,outEffect:j,children:t}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,e):s.default.createElement("span",null,e))}Object.defineProperty(o,"__esModule",{value:!0});var w=Object.assign||function(b){for(var S=1;S<arguments.length;S++){var j=arguments[S];for(var e in j)Object.prototype.hasOwnProperty.call(j,e)&&(b[e]=j[e])}return b};o.default=u;var x=Ie(),s=p(x),P=Ue(),E=p(P);i.exports=o.default})(G,G.exports)),G.exports}var re={},ge;function Fe(){return ge||(ge=1,(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function u(e,t){var l=t.distance,a=t.left,v=t.right,g=t.up,h=t.down,d=t.top,f=t.bottom,r=t.big,c=t.mirror,n=t.opposite,y=(l?l.toString():0)+((a?1:0)|(v?2:0)|(d||h?4:0)|(f||g?8:0)|(c?16:0)|(n?32:0)|(e?64:0)|(r?128:0));if(j.hasOwnProperty(y))return j[y];var O=a||v||g||h||d||f,R=void 0,k=void 0;if(O){if(!c!=!(e&&n)){var _=[v,a,f,d,h,g];a=_[0],v=_[1],d=_[2],f=_[3],g=_[4],h=_[5]}var C=l||(r?"2000px":"100%");R=a?"-"+C:v?C:"0",k=h||d?"-"+C:g||f?C:"0"}return j[y]=(0,P.animation)((e?"to":"from")+" {opacity: 0;"+(O?" transform: translate3d("+R+", "+k+", 0);":"")+`}
     `+(e?"from":"to")+" {opacity: 1;transform: none;} "),j[y]}function w(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P.defaults,t=(e.out,e.forever),l=e.timeout,a=e.duration,v=a===void 0?P.defaults.duration:a,g=e.delay,h=g===void 0?P.defaults.delay:g,d=e.count,f=d===void 0?P.defaults.count:d,r=p(e,["out","forever","timeout","duration","delay","count"]);return{make:u,duration:l===void 0?v:l,delay:h,forever:t,count:f,style:{animationFillMode:"both"},reverse:r.left}}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:P.defaults,t=e.children,l=p(e,["children"]),a=w(l);return(0,b.default)(l,a,a,t)}Object.defineProperty(i,"__esModule",{value:!0}),i.makeFadeEffect=w;var s=A(),P=H(),E=D(),b=o(E),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,i.default=x})(re)),re}var we;function Ge(){return we||(we=1,(function(i,o){function p(t){return t&&t.__esModule?t:{default:t}}function u(t,l){var a={};for(var v in t)l.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(t,v)&&(a[v]=t[v]);return a}function w(t){function l(I){return I?R?{duration:r,delay:c,count:n,forever:y,className:R,style:{}}:_:O?{duration:v===void 0?g:v,delay:h,count:d,forever:f,className:O,style:{}}:k}var a=t.children,v=t.timeout,g=t.duration,h=t.delay,d=t.count,f=t.forever,r=t.durationOut,c=t.delayOut,n=t.countOut,y=t.foreverOut,O=t.effect,R=t.effectOut,k=t.inEffect,_=t.outEffect,C=u(t,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,b.default)(C,l(!1),l(!0),a)}Object.defineProperty(o,"__esModule",{value:!0});var x=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var v in a)Object.prototype.hasOwnProperty.call(a,v)&&(t[v]=a[v])}return t},s=A(),P=H(),E=D(),b=p(E),S=Fe(),j={in:s.object,out:(0,s.oneOfType)([s.object,(0,s.oneOf)([!1])]),effect:s.string,effectOut:s.string,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool,durationOut:s.number,delayOut:s.number,countOut:s.number,foreverOut:s.bool},e=x({},P.defaults,{durationOut:P.defaults.duration,delayOut:P.defaults.delay,countOut:P.defaults.count,foreverOut:P.defaults.forever,inEffect:(0,S.makeFadeEffect)(P.defaults),outEffect:(0,S.makeFadeEffect)(x({out:!0},P.defaults))});w.propTypes=j,w.defaultProps=e,o.default=w,i.exports=o.default})(U,U.exports)),U.exports}var V={exports:{}},xe;function Ze(){return xe||(xe=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.up,g=t.down,h=t.top,d=t.bottom,f=t.mirror,r=t.opposite,c=(l?1:0)|(a?2:0)|(h||g?4:0)|(d||v?8:0)|(f?16:0)|(r?32:0)|(e?64:0);if(j.hasOwnProperty(c))return j[c];if(!f!=!(e&&r)){var n=[a,l,d,h,g,v];l=n[0],a=n[1],h=n[2],d=n[3],v=n[4],g=n[5]}var y=l||a,O=h||d||v||g,R=y||O,k=void 0,_=void 0,C=void 0,I=void 0,M=void 0,se=void 0,le=void 0,ue=void 0,de=void 0,ce=void 0,fe=void 0,pe=void 0,he=void 0,me=void 0;return e?(I=y?(a?"-":"")+"20px":0,M=O?(v||d?"":"-")+"10px":"0",se=(g||h?"":"-")+"20px",he=y?(l?"-":"")+"2000px":"0",me=O?(g||h?"-":"")+"2000px":"0"):(_=y?(l?"-":"")+"3000px":"0",C=O?(g||h?"-":"")+"3000px":"0",le=y?(a?"-":"")+"25px":"0",ue=O?(v||d?"-":"")+"25px":"0",de=y?(l?"-":"")+"10px":"0",ce=O?(g||h?"-":"")+"10px":"0",fe=y?(a?"-":"")+"5px":"0",pe=O?(v||d?"-":"")+"5px":"0"),k=R?e?`
        20% {
          transform: translate3d(`+I+", "+M+`, 0);
          }
        `+(O?`40%, 45% {
            opacity: 1;
            transform: translate3d(0, `+se+`, 0);
          }`:"")+`
          to {
            opacity: 0;
            transform: translate3d(`+he+", "+me+`, 0);
        }
      `:`from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      from {
        opacity: 0;
        transform: translate3d(`+_+", "+C+`, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(`+le+", "+ue+`, 0);
      }
      75% {
        transform: translate3d(`+de+", "+ce+`, 0);
      }
      90% {
        transform: translate3d(`+fe+", "+pe+`, 0);
      }
      to {
        transform: none;
      }`:e?`20% {
          transform: scale3d(.9, .9, .9);
        }
        50%, 55% {
          opacity: 1;
          transform: scale3d(1.1, 1.1, 1.1);
        }
        to {
          opacity: 0;
          transform: scale3d(.3, .3, .3);
      }`:`from, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(.9, .9, .9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(.97, .97, .97);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }`,j[c]=(0,b.animation)(k),j[c]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"},reverse:c.left};return(0,E.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=A(),P=D(),E=p(P),b=H(),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(V,V.exports)),V.exports}var $={exports:{}},Oe;function Ve(){return Oe||(Oe=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.up,g=t.down,h=t.top,d=t.bottom,f=t.big,r=t.mirror,c=t.opposite,n=(l?1:0)|(a?2:0)|(h||g?4:0)|(d||v?8:0)|(r?16:0)|(c?32:0)|(e?64:0)|(f?128:0);if(j.hasOwnProperty(n))return j[n];if(!r!=!(e&&c)){var y=[a,l,d,h,g,v];l=y[0],a=y[1],h=y[2],d=y[3],v=y[4],g=y[5]}var O=f?"2000px":"100%",R=l?"-"+O:a?O:"0",k=g||h?"-"+O:v||d?O:"0";return j[n]=(0,b.animation)(`
    `+(e?"to":"from")+" {opacity: 0;transform: translate3d("+R+", "+k+`, 0) rotate3d(0, 0, 1, -120deg);}
	  `+(e?"from":"to")+` {opacity: 1;transform: none}
  `),j[n]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"}};return(0,P.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=D(),P=p(s),E=A(),b=H(),S={out:E.bool,left:E.bool,right:E.bool,top:E.bool,bottom:E.bool,big:E.bool,mirror:E.bool,opposite:E.bool,duration:E.number,timeout:E.number,delay:E.number,count:E.number,forever:E.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})($,$.exports)),$.exports}var Y={exports:{}},je;function $e(){return je||(je=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.up,g=t.down,h=t.top,d=t.bottom,f=t.big,r=t.mirror,c=t.opposite,n=(l?1:0)|(a?2:0)|(h||g?4:0)|(d||v?8:0)|(r?16:0)|(c?32:0)|(e?64:0)|(f?128:0);if(j.hasOwnProperty(n))return j[n];var y=l||a||v||g||h||d,O=void 0,R=void 0;if(y){if(!r!=!(e&&c)){var k=[a,l,d,h,g,v];l=k[0],a=k[1],h=k[2],d=k[3],v=k[4],g=k[5]}var _=f?"2000px":"100%";O=l?"-"+_:a?_:"0",R=g||h?"-"+_:v||d?_:"0"}return j[n]=(0,b.animation)((e?"to":"from")+" {"+(y?" transform: translate3d("+O+", "+R+", 0);":"")+`}
     `+(e?"from":"to")+" {transform: none;} "),j[n]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"},reverse:c.left};return(0,E.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=A(),P=D(),E=p(P),b=H(),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(Y,Y.exports)),Y.exports}var J={exports:{}},Ee;function Ye(){return Ee||(Ee=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.top,g=t.bottom,h=t.x,d=t.y,f=t.mirror,r=t.opposite,c=(l?1:0)|(a||d?2:0)|(v||h?4:0)|(g?8:0)|(f?16:0)|(r?32:0)|(e?64:0);if(j.hasOwnProperty(c))return j[c];if(!f!=!(e&&r)){var n=[a,l,g,v,d,h];l=n[0],a=n[1],v=n[2],g=n[3],h=n[4],d=n[5]}var y=void 0;if(h||d||l||a||v||g){var O=h||v||g?(g?"-":"")+"1":"0",R=d||a||l?(l?"-":"")+"1":"0";y=e?`from {
          transform: perspective(400px);
        }
        30% {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, -15deg);
          opacity: 1;
        }
        to {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, 90deg);
          opacity: 0;
        }`:`from {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, -20deg);
          animation-timing-function: ease-in;
        }
        60% {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, 10deg);
          opacity: 1;
        }
        80% {
          transform: perspective(400px) rotate3d(`+O+", "+R+`, 0, -5deg);
        }
        to {
          transform: perspective(400px);
        }`}else y=`from {
          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
          animation-timing-function: ease-out;
          opacity: `+(e?"1":"0")+`;
        }
        40% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
          animation-timing-function: ease-out;
        }
        50% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
          animation-timing-function: ease-in;
        }
        to {
          transform: perspective(400px);
          animation-timing-function: ease-in;
          opacity: `+(e?"0":"1")+`;
        }`;return j[c]=(0,b.animation)(y),j[c]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,E.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=A(),P=D(),E=p(P),b=H(),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(J,J.exports)),J.exports}var X={exports:{}},Pe;function Je(){return Pe||(Pe=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.up,g=t.down,h=t.top,d=t.bottom,f=t.mirror,r=t.opposite,c=(l?1:0)|(a?2:0)|(h||g?4:0)|(d||v?8:0)|(f?16:0)|(r?32:0)|(e?64:0);if(j.hasOwnProperty(c))return j[c];if(!f!=!(e&&r)){var n=[a,l,d,h,g,v];l=n[0],a=n[1],h=n[2],d=n[3],v=n[4],g=n[5]}var y="-200deg",O="center";return(g||h)&&l&&(y="-45deg"),((g||h)&&a||(v||d)&&l)&&(y="45deg"),(v||d)&&a&&(y="-90deg"),(l||a)&&(O=(l?"left":"right")+" bottom"),j[c]=(0,b.animation)(`
    `+(e?"to":"from")+" { opacity: 0; transform-origin: "+O+"; transform: rotate3d(0, 0, 1, "+y+`);}
    `+(e?"from":"to")+" { opacity: 1; transform-origin: "+O+`; transform: none;}
  `),j[c]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"}};return(0,E.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=A(),P=D(),E=p(P),b=H(),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(X,X.exports)),X.exports}var Q={exports:{}},ke;function Xe(){return ke||(ke=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.mirror,g=t.opposite,h=(l?1:0)|(a?2:0)|(v?16:0)|(g?32:0)|(e?64:0);if(j.hasOwnProperty(h))return j[h];if(!v!=!(e&&g)){var d=[a,l];l=d[0],a=d[1]}var f=l?"-100%":a?"100%":"0",r=e?`from {
        opacity: 1;
      }
      to {
        transform: translate3d(`+f+`, 0, 0) skewX(30deg);
        opacity: 0;
      }
    `:`from {
        transform: translate3d(`+f+`, 0, 0) skewX(-30deg);
        opacity: 0;
      }
      60% {
        transform: skewX(20deg);
        opacity: 1;
      }
      80% {
        transform: skewX(-5deg);
        opacity: 1;
      }
      to {
        transform: none;
        opacity: 1;
      }`;return j[h]=(0,b.animation)(r),j[h]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"}};return c.left,c.right,c.mirror,c.opposite,(0,P.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=D(),P=p(s),E=A(),b=H(),S={out:E.bool,left:E.bool,right:E.bool,mirror:E.bool,opposite:E.bool,duration:E.number,timeout:E.number,delay:E.number,count:E.number,forever:E.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(Q,Q.exports)),Q.exports}var K={exports:{}},_e;function Qe(){return _e||(_e=1,(function(i,o){function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function w(e,t){var l=t.left,a=t.right,v=t.up,g=t.down,h=t.top,d=t.bottom,f=t.mirror,r=t.opposite,c=(l?1:0)|(a?2:0)|(h||g?4:0)|(d||v?8:0)|(f?16:0)|(r?32:0)|(e?64:0);if(j.hasOwnProperty(c))return j[c];if(!f!=!(e&&r)){var n=[a,l,d,h,g,v];l=n[0],a=n[1],h=n[2],d=n[3],v=n[4],g=n[5]}var y=l||a,O=h||d||v||g,R=y||O,k=void 0,_=void 0,C=void 0,I=void 0,M=void 0;return R?e?(_=y?(l?"":"-")+"42px":"0",C=O?(g||h?"-":"")+"60px":"0",I=y?(a?"":"-")+"2000px":"0",M=O?(v||d?"":"-")+"2000px":"0",k=`40% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+_+", "+C+`, 0);
        }
        to {
          opacity: 0;
          transform: scale(.1) translate3d(`+I+", "+M+`, 0);
          transform-origin: `+(O?"center bottom":(l?"left":"right")+" center")+`;
        }`):(_=y?(l?"-":"")+"1000px":"0",C=O?(g||h?"-":"")+"1000px":"0",I=y?(a?"-":"")+"10px":"0",M=O?(v||d?"-":"")+"60px":"0",k=`from {
          opacity: 0;
          transform: scale3d(.1, .1, .1) translate3d(`+_+", "+C+`, 0);
          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+I+", "+M+`, 0);
          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }`):k=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",j[c]=(0,b.animation)(k),j[c]}function x(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b.defaults,t=e.children,l=(e.out,e.forever),a=e.timeout,v=e.duration,g=v===void 0?b.defaults.duration:v,h=e.delay,d=h===void 0?b.defaults.delay:h,f=e.count,r=f===void 0?b.defaults.count:f,c=u(e,["children","out","forever","timeout","duration","delay","count"]),n={make:w,duration:a===void 0?g:a,delay:d,forever:l,count:r,style:{animationFillMode:"both"},reverse:c.left};return(0,E.default)(c,n,n,t)}Object.defineProperty(o,"__esModule",{value:!0});var s=A(),P=D(),E=p(P),b=H(),S={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},j={};x.propTypes=S,o.default=x,i.exports=o.default})(K,K.exports)),K.exports}var Re;function Ke(){return Re||(Re=1,(function(i){function o(j){return j&&j.__esModule?j:{default:j}}Object.defineProperty(i,"__esModule",{value:!0});var p=Ge();Object.defineProperty(i,"default",{enumerable:!0,get:function(){return o(p).default}});var u=Fe();Object.defineProperty(i,"Fade",{enumerable:!0,get:function(){return o(u).default}});var w=Ze();Object.defineProperty(i,"Bounce",{enumerable:!0,get:function(){return o(w).default}});var x=Ve();Object.defineProperty(i,"Roll",{enumerable:!0,get:function(){return o(x).default}});var s=$e();Object.defineProperty(i,"Slide",{enumerable:!0,get:function(){return o(s).default}});var P=Ye();Object.defineProperty(i,"Flip",{enumerable:!0,get:function(){return o(P).default}}),Object.defineProperty(i,"Reveal",{enumerable:!0,get:function(){return o(p).default}});var E=Je();Object.defineProperty(i,"Rotate",{enumerable:!0,get:function(){return o(E).default}});var b=Xe();Object.defineProperty(i,"LightSpeed",{enumerable:!0,get:function(){return o(b).default}});var S=Qe();Object.defineProperty(i,"Zoom",{enumerable:!0,get:function(){return o(S).default}})})(ee)),ee}var F=Ke();const et=i=>{const o=Me();function p(){o.trackEvent("CV.click",{place:"up-to-date-cv",value:100,currency:"USD"})}return m.jsx("div",{className:"text-center",children:m.jsx(F.Fade,{bottom:!0,when:i.shouldReveal,delay:i.noDelay?0:1600,children:m.jsx("a",{href:Ne.cv(),target:"_blank",rel:"noreferrer",onClick:p,children:"Up-to-date CV"})})})},tt=L.div`
  @media (min-width: ${ie.sm}) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin: 20px 0 !important;
      width: 50%;
    }
  }

  li {
    margin: 30px 0;
    list-style: none;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;

    b {
      font-size: 1.5em;
      color: gold;
      text-shadow: 0 0 10px gold;
    }
  }
`,rt={Wrapper:tt},ot=i=>{const o=new Date().getFullYear();return m.jsx(rt.Wrapper,{children:m.jsxs("ul",{children:[m.jsx(F.Fade,{right:!0,when:i.shouldReveal,children:m.jsxs("li",{children:[m.jsxs("b",{children:[o-2007," Years"]}),m.jsx("br",{}),"of Dev Experience"]})}),m.jsx(F.Fade,{right:!0,when:i.shouldReveal,delay:300,children:m.jsxs("li",{children:["Primary Coding Language",m.jsx("br",{}),m.jsx("b",{children:"JavaScript/TypeScript"})]})}),m.jsx(F.Fade,{right:!0,when:i.shouldReveal,delay:600,children:m.jsxs("li",{children:[m.jsxs("b",{children:[o-2012," Years"]}),m.jsx("br",{}),"of Remote Work Exp"]})}),m.jsx(F.Fade,{right:!0,when:i.shouldReveal,delay:900,children:m.jsxs("li",{children:["Fluent",m.jsx("br",{}),m.jsx("b",{children:"English"})]})})]})})},nt=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;

  @media (max-width: ${ie.sm}) {
    flex-direction: column;
    text-align: center;
  }

  .author {
    font-size: 1.4em;
  }
`,it={Container:nt},at=i=>m.jsx(F.Fade,{when:i.shouldReveal,children:m.jsxs(it.Container,{children:[m.jsx("div",{children:m.jsxs("p",{children:["Design and Development",m.jsx("br",{}),m.jsx("a",{href:"https://bobrosoft.com",className:"author",children:"Vladimir Tolstikov"})]})}),m.jsx("div",{className:"p",children:m.jsx(qe,{place:"footer",fontSize:20})}),m.jsx("div",{children:m.jsx("p",{children:"© 2022 bobrosoft.com"})})]})}),st=172,lt=[2,7,11,18,24,30,33,35,36,37,39,53,57,63,83,103,116,133,136,137,140,148,149,152,153,161],Se={photoCount:st,portraitPhotos:lt},Le=[];for(let i=1;i<Se.photoCount;i++)Le.push({thumbUrl:`images/gallery/${i}_thumb.jpg`,url:`images/gallery/${i}.jpg`,orientation:Se.portraitPhotos.includes(i)?"portrait":"landscape"});const Te=N.shuffleArray(Le);function ut(i,{threshold:o=0,root:p=null,rootMargin:u="0%",freezeOnceVisible:w=!1}){const[x,s]=T.useState(),P=(x==null?void 0:x.isIntersecting)&&w,E=([b])=>{s(b)};return T.useEffect(()=>{const b=i==null?void 0:i.current;if(!!!window.IntersectionObserver||P||!b)return;const j={threshold:o,root:p,rootMargin:u},e=new IntersectionObserver(E,j);return e.observe(b),()=>e.disconnect()},[i,JSON.stringify(o),p,u,P]),x}function dt(i,o){const p=T.useRef(i);T.useEffect(()=>{p.current=i},[i]),T.useEffect(()=>{if(!o&&o!==0)return;const u=setInterval(()=>p.current(),o);return()=>clearInterval(u)},[o])}const ct=L.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  perspective: 600px;

  &.shown {
    pointer-events: initial;
  }
`,ft=L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: opacity 0.6s;
  transition-delay: 0s;
  z-index: -10;

  &.shown {
    transition-delay: 0.8s;
    opacity: 0.6;
  }
`,pt=L.img`
  box-sizing: initial;
  border: min(50px, 5vw) solid #fff;
  background-color: #aaaaaa;
  box-shadow: 0 0 20px black;

  @media (orientation: landscape) {
    height: 100%;
  }
  @media (orientation: portrait) {
    width: 100%;
  }

  max-width: 80vw;
  max-height: 80vh;
  z-index: 10;
  transform-style: preserve-3d;
  animation: PhotoPreview-Image-appear 800ms forwards;

  @keyframes PhotoPreview-Image-appear {
    0% {
      transform: translate3d(var(--tx), var(--ty), 0px) rotateY(16deg) rotateZ(3deg) scale(0.2);
    }
  }
`,oe={Wrapper:ct,Backdrop:ft,Image:pt},ht=i=>{const{photo:o}=i,[p,u]=T.useState(0),[w,x]=T.useState(!1),[s,P]=T.useState(!1),[E,b]=T.useState(0),S={"--tx":p+"px","--ty":E+"px"};T.useEffect(()=>(document.documentElement.addEventListener("click",j),()=>{document.documentElement.removeEventListener("click",j)}),[]),T.useEffect(()=>{if(!o)return;const e=[];return P(!1),N.isChromium()?x(!0):(x(!1),e.push(window.setTimeout(()=>{x(!0)},50))),N.preloadImage(o.url).then(()=>{N.isChromium()?P(!0):e.push(window.setTimeout(()=>{P(!0)},100))}),()=>{e.forEach(t=>clearTimeout(t))}},[o]);function j(e){u(e.clientX-document.documentElement.clientWidth/2),b(e.clientY-document.documentElement.clientHeight/2)}return m.jsxs(oe.Wrapper,{className:o&&"shown",style:S,children:[m.jsx(oe.Backdrop,{className:o&&"shown",onClick:i==null?void 0:i.onExit}),o&&w&&m.jsx(oe.Image,{src:s?o==null?void 0:o.url:o==null?void 0:o.thumbUrl})]})};class mt{constructor(o){q(this,"options");q(this,"wallHeight");q(this,"wall");q(this,"largestUsedX",0);if(this.options={wallHeightInPhotos:5,photoWidthInPx:100,photoGapInPx:10,useSmoothStart:!1,...o},this.wallHeight=this.options.wallHeightInPhotos*2,this.wall=new Array(this.wallHeight).fill(0).map(()=>[]),this.options.useSmoothStart){const p=Math.floor(this.wallHeight/2);for(let u=0;u<this.wallHeight;u++){const w=Math.floor(Math.abs(u-p)*1.3);for(let x=0;x<w;x++)this.getCell(x,u).isOccupied=!0,this.markAsNoSpace(x,u)}}}get cellWidthInPx(){return this.options.photoWidthInPx/3}get photoGapHalfInPx(){return this.options.photoGapInPx/2}addPhotoToWall(o){let p=Math.max(0,this.largestUsedX-this.wallHeight),u;do{let w=Math.floor(this.wallHeight/2);const x=Math.random()>.5?1:-1;for(;w>=0&&w<this.wallHeight&&!u&&(u=this.tryToPutPhoto(o,p,w),!u);)w+=x;if(u)break;p++}while(p<this.largestUsedX+100);if(!u)throw new Error("GalleryBuilder.CANT_ADD_PHOTO_TO_WALL");return u}tryToPutPhoto(o,p,u){if(u===0&&this.markAsNoSpace(p,u),o.orientation==="portrait"&&u===this.wallHeight-1&&this.markAsNoSpace(p,u,o.orientation),o.orientation==="landscape"&&this.getCell(p,u).noLSpace||o.orientation==="portrait"&&this.getCell(p,u).noPSpace)return;let w;if(o.orientation==="landscape"?w=[{x:p,y:u-1},{x:p+1,y:u-1},{x:p+2,y:u-1},{x:p,y:u},{x:p+1,y:u},{x:p+2,y:u}]:w=[{x:p,y:u-1},{x:p,y:u},{x:p,y:u+1},{x:p+1,y:u-1},{x:p+1,y:u},{x:p+1,y:u+1}],w.find(s=>this.getCell(s.x,s.y).isOccupied)){this.markAsNoSpace(p,u,o.orientation);return}return w.forEach(s=>{this.markAsNoSpace(s.x,s.y),this.getCell(s.x,s.y).isOccupied=!0}),this.largestUsedX=Math.max(w[0].x,this.largestUsedX),this.convertToPhotoOnWall(o,w[0])}markAsNoSpace(o,p,u){u!=="landscape"&&(this.getCell(o,p).noPSpace=!0),u!=="portrait"&&(this.getCell(o,p).noLSpace=!0)}getCell(o,p){return this.wall[p][o]||(this.wall[p][o]={noLSpace:!1,noPSpace:!1,isOccupied:!1}),this.wall[p][o]}convertToPhotoOnWall(o,p){return{...o,x:Math.floor(p.x*this.cellWidthInPx+this.photoGapHalfInPx),y:Math.floor(p.y*this.cellWidthInPx+this.photoGapHalfInPx),width:Math.floor((o.orientation==="landscape"?3:2)*this.cellWidthInPx-2*this.photoGapHalfInPx),height:Math.floor((o.orientation==="landscape"?2:3)*this.cellWidthInPx-2*this.photoGapHalfInPx),random:Math.random()}}}const vt=L.img`
  box-sizing: initial;
  position: absolute;
  border: 8px solid #fff;
  background-color: white;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  object-fit: cover;
  opacity: 0;
  pointer-events: auto;

  &.shown {
    animation: Photo-Image-appear 600ms forwards;
  }

  @keyframes Photo-Image-appear {
    100% {
      opacity: 1;
    }
  }
`,bt=i=>{const{photo:o}=i,p=document.documentElement.clientWidth>document.documentElement.clientHeight,[u,w]=T.useState(!1);return T.useEffect(()=>{N.preloadImage(o.thumbUrl).then(()=>{w(!0)})},[o]),m.jsx(vt,{...i,style:{top:o.y,left:o.x,width:o.width,height:o.height,transform:`translateZ(${(o.random-.6)*(p?300:500)}px)`},className:u?"shown":"",src:o.thumbUrl})},yt=L.div`
  height: ${i=>i.height+"px"};
  perspective: 600px;
`,gt=L.div`
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  left: 40vw;
  pointer-events: none;

  &.animate {
    animation: AnimatedContainer-scroll-sm 300s linear infinite;

    @media (min-width: ${ie.sm}) {
      animation: AnimatedContainer-scroll 300s linear infinite;
    }

    @media (min-width: 1600px) {
      animation: AnimatedContainer-scroll-lg 300s linear infinite;
    }

    @media (min-width: 1900px) {
      animation: AnimatedContainer-scroll-xlg 300s linear infinite;
    }
  }

  @keyframes AnimatedContainer-scroll {
    0% {
      transform: rotateY(16deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(16deg) rotateZ(3deg) translateX(-10000px);
    }
  }

  // mobile version
  @keyframes AnimatedContainer-scroll-sm {
    0% {
      transform: rotateY(16deg) rotateZ(5deg) translateX(0);
    }

    100% {
      transform: rotateY(16deg) rotateZ(5deg) translateX(-10000px);
    }
  }

  @keyframes AnimatedContainer-scroll-lg {
    0% {
      transform: rotateY(13deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(13deg) rotateZ(3deg) translateX(-10000px);
    }
  }

  @keyframes AnimatedContainer-scroll-xlg {
    0% {
      transform: rotateY(10deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(10deg) rotateZ(3deg) translateX(-10000px);
    }
  }
`,Ce={Wrapper:yt,AnimatedContainer:gt},wt=i=>{const o=Me(),p=T.useRef(null),u=ut(p,{threshold:.3}),[w,x]=T.useState(!1),[s,P]=T.useState(!1),[E,b]=T.useState(),[S,j]=T.useState(-1),[e,t]=T.useState(Date.now()),[l,a]=T.useState([]),[v,g]=T.useState(),[h,d]=T.useState(!1);T.useEffect(()=>{const y=new mt({photoGapInPx:26,photoWidthInPx:150,useSmoothStart:!0});b(y),a([]),j(-1)},[]),T.useEffect(()=>(document.addEventListener("visibilitychange",r),()=>{document.removeEventListener("visibilitychange",r)}),[e]),T.useEffect(()=>{!s&&i.shouldReveal&&(u!=null&&u.isIntersecting)&&P(!0)},[i.shouldReveal,u==null?void 0:u.isIntersecting]),dt(()=>{f()},s&&!w?l.length<30?400:1e3:null),T.useEffect(()=>{l.length>500&&x(!0)},[l]);function f(){let y=S+1,O=Te[y];O||(y=0,O=Te[0]),j(y),a([...l,E.addPhotoToWall(O)])}function r(){!document.hidden&&s?Date.now()-e>1e4&&(P(!1),setTimeout(()=>{P(!0)},10)):t(Date.now())}function c(y){g(y),N.isChromium()?d(!0):setTimeout(()=>{d(!0)},50),o.trackEvent("PhotoGallery.photoClick",{photo:location.origin+"/"+y.url})}function n(){g(void 0),d(!1)}return m.jsxs(m.Fragment,{children:[m.jsxs(Ce.Wrapper,{height:500,...i,children:[m.jsx("div",{ref:p}),m.jsx(F.Fade,{when:i.shouldReveal,children:m.jsx("h2",{className:"text-center",children:"Also I Like To Take Photos  📸"})}),m.jsx(Ce.AnimatedContainer,{className:s?"animate":"",children:l.map((y,O)=>y===v&&h?m.jsx(m.Fragment,{}):m.jsx(bt,{photo:y,onClick:()=>c(y)},O))})]}),m.jsx(ht,{photo:v,onExit:n})]})},Ae=L.div`
  display: grid;
  grid-template: auto / 33% 33% 33%;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template: auto / 50% 50%;
  }

  @media (max-width: 500px) {
    grid-template: auto / auto;
  }
`,xt=[{title:"CleverCards",description:`Global Payments Platform which makes it possible for anyone, anywhere, anytime, to be paid instantly.
  Solution in fintech industry around virtual wireless credit cards. I'm responsible for the whole Frontend
(Angular + React) and Mobile Apps (Ionic/Angular)`,websiteUrl:"https://clevercards.com/"},{title:"Bitcoin-message.com",description:`My recent open source pet project, utilizing blockchain technology in a fun way :) Uses React+MobX on
frontend and Firebase(Node.js) + Bitcoin-blockchain on backend. "Save your message in Bitcoin blockchain.
Forever!". Try it ;)`,websiteUrl:"https://bitcoin-message.com/",githubUrl:"https://github.com/bobrosoft/bitcoin-message.com"},{title:"CleverCards iOS App",description:`"Your very own personalised greeting card store". My main
responsibility in Cleverbug startup before recent pivot (from B2C to B2B). Raised $10M from investors. My
Mobile App work (native+web-hybrid) used in main pitch.`},{title:"School Catering System",description:`Huge proprietary SaaS project in catering industry developed from zero. RFID/NFC cards for users, front
  office part, back office part, public terminals with touch interfaces, security turnstiles, own billing,
  payment systems, all that kind of stuff in there.`,websiteUrl:"http://newit-soft.ru/page/products/noncash-payments-school/"},{title:"Gamebomb.ru",description:`One of the biggest social websites about gaming in Russia with 100k visitors daily. All ground-up
architected and developed by one developer. Has bunch of social features, all games library, reviews, news,
  videos, blogs, streaming and online-chat functionality, social achievements and even home-brew
DDOS-protection.`,websiteUrl:"https://gamebomb.ru/"},{title:"Literator.io",description:`"Let's remember best poems together!". One of my open source pet projects. Started with Russian poems,
  English poems are coming soon. Based on (now old) AngularJS (Angular 1) with all best practices on that
moment, fully covered with Unit and E2E tests. If you have Russian or Ukrainian devs in your team, they will be
interested to try :)`,websiteUrl:"https://bobrosoft.github.io/literator.io",githubUrl:"https://github.com/bobrosoft/literator.io"},{title:"Photo505.com",description:`Automatic photoshop-like photo effects, just upload the photo and see the magic. 
    I also have face detection there, so your photo will be perfectly positioned for the best result in some effects.`,websiteUrl:"https://photo505.com/"}],Ot=L.div`
  position: relative;
  padding: 14px 16px;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.03);
  background-color: #1a2b54;
  border-radius: 10px;
  overflow: hidden;

  .header {
    margin: 0;
    display: flex;
    align-items: center;

    .title {
      flex: 1;
      text-decoration: none;
    }

    .icons {
      & > * {
        margin-left: 10px;
        vertical-align: middle;
      }
    }
  }

  .description {
    margin-bottom: 5px;
    font-size: 0.9em;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 50%;
    box-shadow: 0 0px 20px rgba(255, 255, 255, 1);
    transition: transform 300ms;
    transform: scale(0, 1) translateY(-20px);
    will-change: transform;
  }

  &:hover {
    ::before {
      transform: scale(1, 1) translateY(-3.8px);
    }
  }
`,jt={Project:Ot},Et=({shouldReveal:i,project:o,index:p})=>m.jsx(F.Fade,{bottom:!0,when:i,force:!0,delay:p*200,children:m.jsxs(jt.Project,{children:[m.jsxs("h3",{className:"header",children:[m.jsx("a",{className:"title",href:o.websiteUrl||"",target:"_blank",rel:"noreferrer",onClick:u=>{o.websiteUrl||u.preventDefault()},children:o.title}),m.jsxs("span",{className:"icons",children:[o.githubUrl&&m.jsx("a",{href:o.githubUrl,target:"_blank",rel:"noreferrer",children:m.jsx(We,{size:16})}),o.websiteUrl&&m.jsx("a",{href:o.websiteUrl,target:"_blank",rel:"noreferrer",children:m.jsx(ae,{size:16})})]})]}),m.jsx("p",{className:"description",children:o.description})]})}),Pt=i=>{const[o,p]=T.useState(!1);function u(){p(!0)}return m.jsxs(m.Fragment,{children:[m.jsx(F.Fade,{bottom:!0,when:i.shouldReveal,onReveal:u,children:m.jsx("h2",{className:"text-center",children:"Noteworthy Projects"})}),m.jsx(Ae,{children:xt.map((w,x)=>m.jsx(Et,{shouldReveal:o,project:w,index:x},w.title))})]})},kt=new Date().getFullYear(),_t=[{title:"Programming Languages",items:[{title:"JavaScript/TypeScript",expYears:kt-2007,widthPercents:100,color:"#4271BA"},{title:"PHP",expYears:8,widthPercents:60,color:"#4E588B"},{title:"Java",widthPercents:30,color:"#D23830"},{title:"Swift",color:"#DE5C41",widthPercents:25}],asList:!0},{title:"Frameworks",items:[{title:"React",color:"#7ECFEF"},{title:"Angular",color:"#d23c36"},{title:"Next.js",color:"#324048"},{title:"Ionic 4",color:"#497AEF"},{title:"Node.js",color:"#96BE52"},{title:"Titanium SDK",color:"#7D90A7"},{title:"Firebase",color:"#E9A63E"},{title:"Zend Framework",color:"#77AD34"}],asList:!1},{title:"Tools & Libs",items:[{title:"Git",color:"#324048"},{title:"Claude",color:"#d57355"},{title:"Copilot",color:"#5bb6d8"},{title:"Webpack",color:"#3872B4"},{title:"NPM",color:"#B52619"},{title:"node",color:"#96BE52"},{title:"AWS",color:"#E08D36"},{title:"AWS CLI",color:"#324048"},{title:"Gulp",color:"#B94D4A"},{title:"GraphQL",color:"#CC44A2"},{title:"Jest/Jasmine",color:"#B14425"},{title:"Playwright",color:"#28a732"},{title:"nginx",color:"#d23c36"},{title:"Docker",color:"#4990DF"},{title:"SASS/SCSS",color:"#BA6993"}],asList:!1},{title:"Databases",items:[{title:"MySQL",color:"#5B7D99"},{title:"SQLite",color:"#E9A43F"},{title:"MongoDB",color:"#4da53f"},{title:"Firebase (NoSQL)",color:"#E9A63E"}],asList:!1},{title:"Other",items:[{title:"HTML5",color:"#CB5434"},{title:"CSS3",color:"#346DAF"},{title:"OOP/OOAD"},{title:"CI/CD"},{title:"Agile"},{title:"JIRA",color:"#417EEF"},{title:"XP"},{title:"Unix",color:"#324048"},{title:"Bash",color:"#2A2E35"},{title:"TDD/BDD"},{title:"Unit/E2E testing"},{title:"Facebook API",color:"#3771E3"}],asList:!1}],Rt=L.div`
  position: relative;
  padding: 14px 16px;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.03);
  background-color: #1f315d;
  border-radius: 10px;
  //overflow: hidden;

  .header {
    margin: 0;
    text-align: center;
    font-weight: 500;
  }

  .content {
    margin-top: 0.8em;
  }

  .list {
    margin-top: 1.2em;
    font-size: 0.9em;

    .item {
      margin: 0.6em 0;
      max-width: 100%;
      display: flex;
      list-style: none;
      border-radius: 20px;
      overflow: hidden;
    }

    .badge {
      display: inline-block;
      flex: 1;
      padding: 0.2em 0.7em;
      background: #7b7cbc;
    }

    .exp {
      padding: 0.2em 0.7em;
      color: gold;
      background-color: #3f3f6c;
    }
  }

  .badges {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.85em;

    .badge {
      margin: 0.3em 0.2em;
      padding: 0.2em 0.6em;
      border-radius: 20px;
      background-color: #6a6a6a;
    }
  }

  .zoom-on-hover {
    transition: transform 0.3s, box-shadow 0.3s;
    //will-change: transform;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  }

  .contrast {
    color: #333;
  }
`,St={SkillSet:Rt},Tt=({shouldReveal:i,skillSet:o,index:p})=>m.jsx(F.Fade,{bottom:!0,when:i,force:!0,delay:p*200,children:m.jsxs(St.SkillSet,{children:[m.jsx("h3",{className:"header",children:o.title}),m.jsx("div",{className:"content",children:o.asList?m.jsx("ul",{className:"list",children:o.items.map(u=>m.jsxs("li",{className:"item zoom-on-hover",style:{width:u.widthPercents?u.widthPercents+"%":"unset"},children:[m.jsx("span",{className:["badge",u.color&&N.isLightColor(u.color)?"contrast":""].join(" "),style:{backgroundColor:u.color||""},children:u.title}),u.expYears?m.jsxs("span",{className:"exp",children:[u.expYears," Years"]}):m.jsx(m.Fragment,{})]},u.title))}):m.jsx("div",{className:["badges",o.asList?"list":""].join(" "),children:o.items.map(u=>m.jsx("span",{className:["badge","zoom-on-hover",u.color&&N.isLightColor(u.color)?"contrast":""].join(" "),style:{backgroundColor:u.color||""},children:u.title},u.title))})})]})}),Ct=i=>{const[o,p]=T.useState(!1);function u(){p(!0)}return m.jsxs(m.Fragment,{children:[m.jsx(F.Fade,{bottom:!0,when:i.shouldReveal,onReveal:u,children:m.jsx("h2",{className:"text-center",children:"Skills"})}),m.jsx(Ae,{children:_t.map((w,x)=>m.jsx(Tt,{shouldReveal:o,skillSet:w,index:x},w.title))})]})},Ft=({noDelay:i,shouldReveal:o})=>m.jsxs(m.Fragment,{children:[m.jsx(W,{children:m.jsx(ot,{shouldReveal:o})}),m.jsx(W,{children:m.jsx(et,{noDelay:i,shouldReveal:o})}),m.jsx(W,{maxWidth:"1000px",children:m.jsx(Ct,{shouldReveal:o})}),m.jsx(W,{maxWidth:"1000px",children:m.jsx(Pt,{shouldReveal:o})}),m.jsx(wt,{shouldReveal:o,style:{margin:"100px 0"}}),m.jsx(W,{maxWidth:"960px",children:m.jsx(at,{shouldReveal:o})})]});export{Ft as default};
