(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4186)}])},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(6495).Z,n=a(2648).Z,o=a(1598).Z,r=a(7273).Z,s=o(a(7294)),l=n(a(3121)),c=a(2675),d=a(139),u=a(8730);a(7238);var h=n(a(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/splashhh-home-deploy/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,a,n,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let r="decode"in e?e.decode():Promise.resolve();r.catch(()=>{}).then(()=>{if(e.parentNode){if(null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,r=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:a,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:h,fill:m,placeholder:g,loading:f,srcString:_,config:v,unoptimized:w,loader:b,onLoadRef:y,onLoadingCompleteRef:x,onLoad:j,onError:N}=e,E=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return f=h?"lazy":f,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,a,{width:o,height:n,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:f,style:i({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&p(e,_,y,x,w))},[_,y,x,N,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,_,y,x,w)},onError:e=>{let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),N&&N(e)}})))}),v=s.forwardRef((e,t)=>{let a,n;var o,{src:p,sizes:v,unoptimized:w=!1,priority:b=!1,loading:y,className:x,quality:j,width:N,height:E,fill:I,style:S,onLoad:k,onLoadingComplete:z,placeholder:C="empty",blurDataURL:A,layout:P,objectFit:R,objectPosition:T,lazyBoundary:L,lazyRoot:O}=e,H=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),M=s.useMemo(()=>{let e=m||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:a})},[F]),q=H,G=q.loader||h.default;if(delete q.loader,"__next_img_default"in G){if("custom"===M.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=G;G=e=>{let{config:t}=e,a=r(e,["config"]);return B(a)}}if(P){"fill"===P&&(I=!0);let D={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];D&&(S=i({},S,D));let W={responsive:"100vw",fill:"100vw"}[P];W&&!v&&(v=W)}let Z="",X=f(N),U=f(E);if("object"==typeof(o=p)&&(g(o)||void 0!==o.src)){let V=g(p)?p.default:p;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(a=V.blurWidth,n=V.blurHeight,A=A||V.blurDataURL,Z=V.src,!I){if(X||U){if(X&&!U){let J=X/V.width;U=Math.round(V.height*J)}else if(!X&&U){let Q=U/V.height;X=Math.round(V.width*Q)}}else X=V.width,U=V.height}}let $=!b&&("lazy"===y||void 0===y);((p="string"==typeof p?p:Z).startsWith("data:")||p.startsWith("blob:"))&&(w=!0,$=!1),M.unoptimized&&(w=!0);let K=f(j),Y=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:T}:{},{color:"transparent"},S),ee="blur"===C&&A?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:X,heightInt:U,blurWidth:a,blurHeight:n,blurDataURL:A}),'")')}:{},et=function(e){let{config:t,src:a,unoptimized:i,width:n,quality:o,sizes:r,loader:s}=e;if(i)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,a){let{deviceSizes:i,allSizes:n}=e;if(a){let o=/(^|\s)(1?\d?\d)vw/g,r=[];for(let s;s=o.exec(a);s)r.push(parseInt(s[2]));if(r.length){let l=.01*Math.min(...r);return{widths:n.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,r),d=l.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:a,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:a,quality:o,width:l[d]})}}({config:M,src:p,unoptimized:w,width:X,quality:K,sizes:v,loader:G}),ea=p,ei={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:q.crossOrigin},en=s.useRef(k);s.useEffect(()=>{en.current=k},[k]);let eo=s.useRef(z);s.useEffect(()=>{eo.current=z},[z]);let er=i({isLazy:$,imgAttributes:et,heightInt:U,widthInt:X,qualityInt:K,className:x,imgStyle:Y,blurStyle:ee,loading:y,config:M,fill:I,unoptimized:w,placeholder:C,loader:G,srcString:ea,onLoadRef:en,onLoadingCompleteRef:eo},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},er,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:i,blurHeight:n,blurDataURL:o}=e,r=i||t,s=n||a,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:i,quality:n}=e;return a.endsWith(".svg")&&!t.dangerouslyAllowSVG?a:"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},4186:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var i=a(5893),n=a(1712),o=a.n(n),r=a(9008),s=a.n(r),l=a(5675),c=a.n(l),d=a(1502),u=a.n(d),h=a(1664),m=a.n(h);function g(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Splashhh - Generative AI for creative flow"}),(0,i.jsx)("meta",{name:"description",content:"Genrative art using ML and AI models"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:u().main,children:[(0,i.jsxs)("div",{className:u().description,children:[(0,i.jsxs)("p",{children:["Splashhh - Generative ",(0,i.jsx)("code",{className:u().code,children:"AI"})," for image creation"]}),(0,i.jsx)("div",{children:"Coming soon"})]}),(0,i.jsxs)("div",{className:u().grid,children:[(0,i.jsxs)(m(),{href:"/text-to-image-ai",className:u().card,children:[(0,i.jsx)("h2",{className:o().className,children:"Text to Image"}),(0,i.jsx)("p",{className:o().className,children:"The text to image feature is a function of a generative AI model that allows the user to input text and generate an image based on the contents of the text. The model uses natural language processing (NLP) techniques to understand the meaning and content of the text, and then uses this information to generate an image that is relevant to the text. This can be useful for a variety of applications, such as creating visual summaries of text documents or generating images for social media posts."})]}),(0,i.jsxs)(m(),{href:"/image-to-image-ai",className:u().card,children:[(0,i.jsx)("h2",{className:o().className,children:"Image to Image"}),(0,i.jsx)("p",{className:o().className,children:"The image to image feature is a function of a generative AI model that allows the user to input an image and generate a new image based on it. The model uses computer vision techniques to analyze the content of the input image, and then uses this information to generate a new image that is related to the input image in some way. This can be useful for a variety of applications, such as image editing and image style transfer. For example, the model could be used to add a specific filter or effect to an input image, or to transfer the style of one image to another. The quality and accuracy of the generated images will vary depending on the capabilities of the underlying AI model."})]}),(0,i.jsxs)(m(),{href:"/auto-color-ai",className:u().card,children:[(0,i.jsx)("h2",{className:o().className,children:"Auto color"}),(0,i.jsx)("p",{className:o().className,children:"The auto-color using generative AI feature is a function of a generative AI model that allows the user to automatically colorize an image, with a particular focus on coloring comics. The model uses advanced computer vision techniques to analyze the input image and determine the appropriate colors for different objects or regions in the image. It then applies these colors to the image to create a colorized version, with a particular emphasis on achieving a stylized, comic book-like appearance. This can be useful for a variety of applications, such as restoring old black and white comic strips or adding color to monochrome comics."})]})]}),(0,i.jsxs)("div",{className:u().center,children:[(0,i.jsx)(c(),{className:u().logo,src:"/logo_transparent.png",alt:"splashhh Logo",width:280,height:280,priority:!0}),(0,i.jsx)("div",{className:u().thirteen,children:(0,i.jsx)("h2",{children:"alpha"})})]}),(0,i.jsx)("div",{className:u().center,children:(0,i.jsx)("img",{src:"/design-examples.png",alt:"splashhh design",className:u().image,width:828,height:537})})]})]})}},1712:function(e){e.exports={style:{fontFamily:"'__myFont_41edab', '__myFont_Fallback_41edab'"},className:"__className_41edab"}},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",image:"Home_image__yn5pu",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},5675:function(e,t,a){e.exports=a(9749)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);