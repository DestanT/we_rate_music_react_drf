(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(27),r=a.n(n),o=(a(86),a(23)),i=a.n(o),l=a(19),d=a.n(l),j=a(120),u=a(121),b=a(61),h=a(12),x=a(74),m=a(14),O=a(10),p=a(9),g=a.n(p);g.a.defaults.baseURL="/api",g.a.defaults.headers.post["Content-Type"]="multipart/form-data",g.a.defaults.withCredentials=!0;const v=g.a.create(),_=g.a.create();var f=a(8),w=a(1);const y=Object(s.createContext)(),C=Object(s.createContext)(),N=()=>Object(s.useContext)(y),S=e=>{let{children:t}=e;const[a,c]=Object(s.useState)(null),n=Object(f.f)();return Object(s.useEffect)((()=>{(async()=>{const e=g.a.CancelToken.source();try{const{data:t}=await _.get("dj-rest-auth/user/",{cancelToken:e.token});c(t)}catch(t){g.a.isCancel(t)?console.log("Request canceled",t.message):console.log(t)}})()}),[]),Object(s.useMemo)((()=>{v.interceptors.request.use((async e=>{try{await g.a.post("/dj-rest-auth/token/refresh/")}catch(t){return c((e=>(e&&n.push("/signin"),null))),e}return e}),(e=>Promise.reject(e))),_.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status)){try{await g.a.post("/dj-rest-auth/token/refresh/")}catch(e){c((e=>(e&&n.push("/signin"),null)))}return g()(e.config)}return Promise.reject(e)}))}),[n]),Object(w.jsx)(y.Provider,{value:a,children:Object(w.jsx)(C.Provider,{value:c,children:t})})};var P=a(73),k=a.n(P);var I=e=>{let{src:t,height:a=45}=e;const s=N();return Object(w.jsx)("span",{children:Object(w.jsx)("img",{className:k.a.Avatar,src:t,height:a,width:a,alt:"".concat(null===s||void 0===s?void 0:s.username,"' avatar")})})};var A=()=>{const e=N(),t=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(j.a,{className:"m-auto",children:[Object(w.jsx)(O.c,{className:d.a.NavLink,activeClassName:d.a.Active,to:"/signup",children:Object(w.jsx)(h.a,{icon:m.j,size:"2xl"})}),"Sign Up!"]}),Object(w.jsxs)(j.a,{className:"m-auto",children:[Object(w.jsx)(O.c,{className:d.a.NavLink,activeClassName:d.a.Active,to:"/signin",children:Object(w.jsx)(h.a,{icon:m.f,size:"2xl"})}),"Login"]})]}),a=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{className:"mr-auto",children:Object(w.jsx)(O.c,{className:d.a.NavLink,activeClassName:d.a.Active,to:"/popular",children:Object(w.jsx)(h.a,{icon:m.i,size:"2xl"})})}),Object(w.jsx)(j.a,{className:"mr-auto",children:Object(w.jsx)(O.c,{className:d.a.NavLink,activeClassName:d.a.Active,to:"/feed",children:Object(w.jsx)(h.a,{icon:m.e,size:"2xl"})})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(O.c,{className:d.a.NavLink,to:"/profile/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(w.jsx)(I,{src:null===e||void 0===e?void 0:e.profile_image,height:40})})}),Object(w.jsx)(j.a,{className:"ml-auto",children:Object(w.jsx)(O.c,{className:d.a.NavLink,activeClassName:d.a.Active,to:"/placeholder",children:Object(w.jsx)(h.a,{icon:m.g,size:"2xl"})})}),Object(w.jsx)(j.a,{className:"ml-auto",children:Object(w.jsx)(O.c,{className:d.a.NavLink,to:"/spotify-search",children:Object(w.jsx)(h.a,{icon:x.a,style:{color:"#1db954"},size:"2xl"})})})]});return Object(w.jsx)(u.a,{className:d.a.CustomBackground,expand:"md",fixed:"bottom",children:Object(w.jsx)(b.a,{children:e?a:t})})},B=a(16),R=a.n(B),F=a(21),L=a.n(F),U=a(75),z=a(41),H=a(33),T=a(55),E=a(76),M=a(77);var W=()=>{var e,t,a,c;const[n,r]=Object(s.useState)({username:"",password1:"",password2:""}),{username:o,password1:l,password2:d}=n,[j,u]=Object(s.useState)({}),h=Object(f.f)(),x=e=>{r({...n,[e.target.name]:e.target.value})};return Object(w.jsxs)(U.a,{className:R.a.Row,children:[Object(w.jsxs)(z.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(w.jsxs)(b.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(w.jsx)("h1",{className:R.a.Header,children:"sign up"}),Object(w.jsxs)(H.a,{onSubmit:async e=>{e.preventDefault();try{await g.a.post("/dj-rest-auth/registration/",n),h.push("/signin")}catch(a){var t;u(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(w.jsxs)(H.a.Group,{controlId:"username",children:[Object(w.jsx)(H.a.Label,{className:"d-none",children:"username"}),Object(w.jsx)(H.a.Control,{className:R.a.Input,type:"text",placeholder:"Username",name:"username",value:o,onChange:x})]}),null===(e=j.username)||void 0===e?void 0:e.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",children:e},t))),Object(w.jsxs)(H.a.Group,{controlId:"password1",children:[Object(w.jsx)(H.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(H.a.Control,{className:R.a.Input,type:"password",placeholder:"Password",name:"password1",value:l,onChange:x})]}),null===(t=j.password1)||void 0===t?void 0:t.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",children:e},t))),Object(w.jsxs)(H.a.Group,{controlId:"password2",children:[Object(w.jsx)(H.a.Label,{className:"d-none",children:"Confirm password"}),Object(w.jsx)(H.a.Control,{className:R.a.Input,type:"password",placeholder:"Confirm password",name:"password2",value:d,onChange:x})]}),null===(a=j.password2)||void 0===a?void 0:a.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",children:e},t))),Object(w.jsx)(E.a,{className:"".concat(L.a.Button," ").concat(L.a.Wide," ").concat(L.a.Bright),type:"submit",children:"Sign up"}),null===(c=j.non_field_errors)||void 0===c?void 0:c.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",className:"mt-3",children:e},t)))]})]}),Object(w.jsx)(b.a,{className:"mt-3 ".concat(i.a.Content),children:Object(w.jsxs)(O.b,{className:R.a.Link,to:"/signin",children:["Already have an account? ",Object(w.jsx)("span",{children:"Sign in"})]})})]}),Object(w.jsx)(z.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(R.a.SignUpCol),children:Object(w.jsx)(M.a,{className:"".concat(i.a.FillerImage),src:"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"})})]})};var D=function(){var e,t,a;const c=Object(s.useContext)(C),[n,r]=Object(s.useState)({username:"",password:""}),{username:o,password:l}=n,[d,j]=Object(s.useState)({}),u=Object(f.f)(),h=e=>{r({...n,[e.target.name]:e.target.value})};return Object(w.jsxs)(U.a,{className:R.a.Row,children:[Object(w.jsxs)(z.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(w.jsxs)(b.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(w.jsx)("h1",{className:R.a.Header,children:"sign in"}),Object(w.jsxs)(H.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await g.a.post("/dj-rest-auth/login/",n);c(e.user),u.goBack()}catch(a){var t;j(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(w.jsxs)(H.a.Group,{controlId:"username",children:[Object(w.jsx)(H.a.Label,{className:"d-none",children:"Username"}),Object(w.jsx)(H.a.Control,{type:"text",placeholder:"Username",name:"username",className:R.a.Input,value:o,onChange:h})]}),null===(e=d.username)||void 0===e?void 0:e.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",children:e},t))),Object(w.jsxs)(H.a.Group,{controlId:"password",children:[Object(w.jsx)(H.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(H.a.Control,{type:"password",placeholder:"Password",name:"password",className:R.a.Input,value:l,onChange:h})]}),null===(t=d.password)||void 0===t?void 0:t.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",children:e},t))),Object(w.jsx)(E.a,{className:"".concat(L.a.Button," ").concat(L.a.Wide," ").concat(L.a.Bright),type:"submit",children:"Sign in"}),null===(a=d.non_field_errors)||void 0===a?void 0:a.map(((e,t)=>Object(w.jsx)(T.a,{variant:"warning",className:"mt-3",children:e},t)))]})]}),Object(w.jsx)(b.a,{className:"mt-3 ".concat(i.a.Content),children:Object(w.jsxs)(O.b,{className:R.a.Link,to:"/signup",children:["Don't have an account? ",Object(w.jsx)("span",{children:"Sign up now!"})]})})]}),Object(w.jsx)(z.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(R.a.SignInCol),children:Object(w.jsx)(M.a,{className:"".concat(i.a.FillerImage),src:"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"})})]})};const q="51c949a050b74ceba5688d10a1c7f5f1",J=(e=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,a)=>e+t[a%62]),"")})(64),Q=async()=>{const e=await(async e=>{const t=(new TextEncoder).encode(e);return window.crypto.subtle.digest("SHA-256",t)})(J);return t=e,btoa(String.fromCharCode(...new Uint8Array(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");var t};let V;V="https://we-rate-music-drf-1626129441d6.herokuapp.com/spotify-search";const G=()=>(Object(s.useEffect)((()=>{let e=new URLSearchParams(window.location.search).get("code");e&&(window.localStorage.setItem("code",e),(async e=>{let t=localStorage.getItem("code_verifier");const a={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:q,grant_type:"authorization_code",code:e,redirect_uri:V,code_verifier:t})},s=await fetch("https://accounts.spotify.com/api/token",a),c=await s.json();c.access_token?localStorage.setItem("access_token",c.access_token):console.log("Error: ",c)})(e))}),[]),{handleAuthentication:async()=>{await(async()=>{const e=new URL("https://accounts.spotify.com/authorize");window.localStorage.setItem("code_verifier",J);const t=await Q(),a={response_type:"code",client_id:q,scope:"user-read-private user-read-email streaming",code_challenge_method:"S256",code_challenge:t,redirect_uri:V};e.search=new URLSearchParams(a).toString(),window.location.href=e.toString()})()}}),K=Object(s.createContext)(),Z=Object(s.createContext)(),Y=()=>Object(s.useContext)(Z),X=e=>{let{children:t}=e;const[a,c]=Object(s.useState)("spotify:album:1VrravzsxruIeQf1cuE6zB");return Object(w.jsx)(K.Provider,{value:a,children:Object(w.jsx)(Z.Provider,{value:c,children:t})})};var $=()=>Object(w.jsx)("div",{children:Object(w.jsx)(h.a,{icon:m.c,size:"2xl",spin:!0})}),ee=a(38),te=a.n(ee),ae=a(42),se=a.n(ae);var ce=e=>{let{userId:t}=e;const[a,c]=Object(s.useState)(null),[n,r]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=g.a.CancelToken.source();return r(!1),(async()=>{try{const{data:a}=await v.get("profiles/".concat(t),{cancelToken:e.token});c(a),r(!0)}catch(a){g.a.isCancel(a)?console.log("Request canceled",a.message):console.log(a)}})(),()=>{e.cancel("Request canceled")}}),[t]),n?Object(w.jsxs)(b.a,{className:te.a.ProfileContainer,style:{backgroundImage:"url(".concat(a.background,")")},children:[Object(w.jsx)(b.a,{children:Object(w.jsxs)(U.a,{children:[Object(w.jsx)(z.a,{xs:3,children:Object(w.jsx)(h.a,{icon:m.a,size:"xl",className:te.a.FontAwesomeIcon})}),Object(w.jsx)(z.a,{xs:6,children:Object(w.jsx)("h2",{children:a.owner})}),Object(w.jsx)(z.a,{xs:3,children:"Settings"})]})}),Object(w.jsx)(b.a,{className:te.a.StatsContainer,children:Object(w.jsxs)(U.a,{children:[Object(w.jsx)(z.a,{xs:3,children:Object(w.jsx)(I,{src:a.image,height:100})}),Object(w.jsx)(z.a,{xs:9,children:Object(w.jsxs)(U.a,{children:[Object(w.jsxs)(z.a,{xs:4,children:[Object(w.jsx)("h3",{children:a.followers_count}),Object(w.jsx)("p",{children:"Followers"})]}),Object(w.jsxs)(z.a,{xs:4,children:[Object(w.jsx)("h3",{children:a.following_count}),Object(w.jsx)("p",{children:"Following"})]}),Object(w.jsxs)(z.a,{xs:4,children:[Object(w.jsx)("h3",{children:a.playlists_count}),Object(w.jsx)("p",{children:"Playlists"})]})]})})]})})]}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(b.a,{className:te.a.ProfileContainer,children:[Object(w.jsx)(b.a,{children:Object(w.jsx)($,{className:se.a.Centered})}),Object(w.jsx)(b.a,{className:te.a.StatsContainer,children:Object(w.jsx)($,{className:se.a.Centered})})]})})},ne=a(118);var re=function(e){let{onSearch:t}=e;const[a,c]=Object(s.useState)("");return Object(w.jsx)(H.a,{onSubmit:async e=>{e.preventDefault(),t(a)},children:Object(w.jsx)(H.a.Group,{controlId:"searchForm",children:Object(w.jsxs)(ne.a,{children:[Object(w.jsx)(H.a.Control,{type:"text",placeholder:"Search Spotify",onChange:e=>c(e.target.value)}),Object(w.jsx)(ne.a.Append,{children:Object(w.jsx)(E.a,{type:"submit",className:L.a.Button,children:Object(w.jsx)(h.a,{icon:m.d,style:{color:"#3d3d3d"},size:"lg"})})})]})})})},oe=a(78),ie=a.n(oe);var le=e=>{let{image:t,title:a}=e;return Object(w.jsx)("img",{src:t||"https://res.cloudinary.com/dxgzepuov/image/upload/v1702896303/default_post_uq5gxz.jpg",className:ie.a.Image,alt:"".concat(a,"'s cover art")})},de=a(119),je=a(43),ue=a.n(je);var be=function(e){return Object(w.jsxs)(de.a,{...e,size:"sm","aria-labelledby":"confirmation modal",centered:!0,children:[Object(w.jsx)(de.a.Header,{className:ue.a.Header,closeButton:!0,children:Object(w.jsx)(de.a.Title,{id:"confirmation modal",className:ue.a.Color,children:e.title})}),Object(w.jsx)(de.a.Body,{className:ue.a.Body,children:e.body}),Object(w.jsxs)(de.a.Footer,{className:ue.a.Footer,children:[Object(w.jsx)(E.a,{onClick:e.onHide,className:L.a.Button,children:"Close"}),Object(w.jsx)(E.a,{onClick:e.onConfirm,className:L.a.Button,children:"Confirm"})]})]})},he=a(80),xe=a.n(he);var me=function(e){var t;let{playlistData:a}=e;const c=N(),[n,r]=Object(s.useState)(!1),[o,i]=Object(s.useState)({}),[l,d]=Object(s.useState)(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(E.a,{onClick:()=>r(!0),className:xe.a.Button,children:Object(w.jsx)(h.a,{icon:m.h})}),l&&(null===o||void 0===o?void 0:o.message)&&Object(w.jsx)(T.a,{variant:"warning",onClose:()=>d(!1),dismissible:!0,children:o.message}),Object(w.jsx)(be,{show:n,onHide:()=>r(!1),onConfirm:async e=>{var t;e.preventDefault();const s={spotify_id:a.id,title:a.name,image:null===(t=a.images[0])||void 0===t?void 0:t.url,url:a.external_urls.spotify,iframe_uri:a.uri,owner:c.id};try{const e=await _.post("playlists/",s);console.log(e),r(!1)}catch(o){var n;i({message:(null===(n=o.response)||void 0===n?void 0:n.data)||"Something went wrong! Please try again."}),d(!0)}},title:'Add "'.concat(a.name,'" to your profile?'),body:Object(w.jsx)(le,{image:null===(t=a.images[0])||void 0===t?void 0:t.url,title:a.name})})]})},Oe=a(56),pe=a.n(Oe);var ge=()=>{const{handleAuthentication:e}=G(),t=Y(),a=N(),[c,n]=Object(s.useState)(),[r,o]=Object(s.useState)({}),[i,l]=Object(s.useState)(!1);Object(s.useEffect)((()=>{const e=localStorage.getItem("lastSearch");console.log(e),e&&(n(JSON.parse(e)),console.log(JSON.parse(e)))}),[]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ce,{userId:null===a||void 0===a?void 0:a.pk}),Object(w.jsxs)(b.a,{className:pe.a.Container,children:[Object(w.jsx)(re,{onSearch:async e=>{if(!e)return o({message:"Search field is empty"}),void l(!0);const t=new AbortController,a=t.signal;try{var s,c,r;const t=await fetch("https://api.spotify.com/v1/search?q=".concat(e,"&type=album%2Cplaylist%2Cartist&limit=50"),{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")},signal:a}),o=await t.json(),i=[...(null===(s=o.albums)||void 0===s?void 0:s.items)||[],...(null===(c=o.playlists)||void 0===c?void 0:c.items)||[],...(null===(r=o.artists)||void 0===r?void 0:r.items)||[]];n(i),console.log(i),localStorage.setItem("lastSearch",JSON.stringify(i))}catch(d){var i;o({message:(null===(i=d.response)||void 0===i?void 0:i.data)||"An error occurred in fetching"}),l(!0)}return()=>{t.abort()}}}),i&&(null===r||void 0===r?void 0:r.message)&&Object(w.jsx)(T.a,{variant:"warning",onClose:()=>l(!1),dismissible:!0,children:r.message}),Object(w.jsx)(E.a,{onClick:e,children:"Authenticate"}),Object(w.jsx)(b.a,{children:Object(w.jsx)(U.a,{children:null===c||void 0===c?void 0:c.map((e=>{var a;return Object(w.jsxs)(z.a,{className:pe.a.PaddingReset,xs:4,md:3,children:[Object(w.jsx)(E.a,{variant:"link",onClick:()=>{return a=e.uri,void t(a);var a},className:pe.a.PaddingReset,children:Object(w.jsx)(le,{image:null===(a=e.images[0])||void 0===a?void 0:a.url,title:e.name})}),Object(w.jsx)(U.a,{children:Object(w.jsxs)(z.a,{children:[Object(w.jsxs)("span",{children:[e.name," "]}),Object(w.jsx)("span",{children:Object(w.jsx)(me,{playlistData:e})})]})})]},e.id)}))})})]})]})},ve=a(39),_e=a.n(ve),fe=a(122),we=a(123);var ye=function(){const e=Object(s.useRef)(),t=Object(s.useContext)(K),[a,c]=Object(s.useState)(null);return Object(s.useEffect)((()=>{const a=document.createElement("script");a.src="https://open.spotify.com/embed/iframe-api/v1",a.async=!0,document.body.appendChild(a),window.onSpotifyIframeApiReady=a=>{const s={width:"100%",height:"352px",uri:t};a.createController(e.current,s,(e=>{c(e)}))}}),[t]),Object(s.useEffect)((()=>{a&&a.loadUri(t)}),[t,a]),Object(w.jsx)("div",{ref:e})};var Ce=function(){return Object(w.jsx)(fe.a,{className:_e.a.AccordionPosition,children:Object(w.jsxs)(we.a,{className:_e.a.Card,children:[Object(w.jsx)(we.a.Header,{className:_e.a.Header,children:Object(w.jsx)(fe.a.Toggle,{as:E.a,variant:"link",eventKey:"0",className:_e.a.PaddingReset,children:Object(w.jsx)(h.a,{icon:m.b})})}),Object(w.jsx)(fe.a.Collapse,{eventKey:"0",children:Object(w.jsx)(we.a.Body,{className:_e.a.PaddingReset,children:Object(w.jsx)(ye,{})})})]})})},Ne=a(81);var Se=a(44),Pe=a.n(Se);var ke=e=>{let{filter:t="",profileView:a=!1}=e;const[c,n]=Object(s.useState)([]),[r,o]=Object(s.useState)(!1),l=Object(f.f)();return Object(s.useEffect)((()=>{const e=g.a.CancelToken.source();return o(!1),(async()=>{try{const{data:a}=await v.get("playlists/?".concat(t),{cancelToken:e.token});n(a),console.log(a),o(!0)}catch(a){g.a.isCancel(a)?console.log("Request canceled",a.message):console.log(a)}})(),()=>{e.cancel("Request canceled")}}),[t]),r?Object(w.jsx)(b.a,{className:a?Pe.a.ProfileContainer:Pe.a.Container,children:Object(w.jsx)(Ne.a,{dataLength:c.results.length,loader:Object(w.jsx)($,{}),hasMore:!!c.next,next:()=>(async(e,t)=>{try{const{data:a}=await v.get(e.next);t((e=>({...e,next:a.next,results:a.results.reduce(((e,t)=>e.some((e=>e.id===t.id))?e:[...e,t]),e.results)})))}catch(a){console.log(a)}})(c,n),className:Pe.a.InfiniteScroll,children:Object(w.jsx)(U.a,{children:c.results.map((e=>Object(w.jsx)(z.a,{className:i.a.PaddingReset,xs:4,md:3,children:Object(w.jsx)(E.a,{variant:"link",onClick:()=>l.push("/playlist/".concat(e.id)),className:Pe.a.Button,children:Object(w.jsx)(le,{image:e.image,title:e.title})})},e.id)))})})}):Object(w.jsx)($,{className:se.a.Centered})};var Ie=()=>{const{userId:e}=Object(f.g)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ce,{userId:e}),Object(w.jsx)(ke,{filter:"owner__profile=".concat(e),profileView:!0})]})},Ae=a(62),Be=a.n(Ae);var Re=()=>{const{id:e}=Object(f.g)(),[t,a]=Object(s.useState)([]),[c,n]=Object(s.useState)([]),r=(Y(),Object(f.f)());Object(s.useEffect)((()=>{(async()=>{try{const[{data:t},{data:s}]=await Promise.all([v.get("playlists/".concat(e)),v.get("ratings/?playlist=".concat(e))]);a(t),n(s),console.log(t),console.log(s)}catch(t){console.log(t)}})()}),[e]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ce,{userId:t.owner_id}),Object(w.jsx)(b.a,{className:Be.a.Container,children:Object(w.jsxs)(U.a,{children:[Object(w.jsx)(z.a,{xs:4,children:Object(w.jsx)(E.a,{variant:"link",onClick:()=>r.goBack(),className:Be.a.Button,children:Object(w.jsx)(le,{image:t.image,title:t.title})})}),Object(w.jsxs)(z.a,{xs:8,children:[Object(w.jsx)(U.a,{children:Object(w.jsx)(z.a,{children:Object(w.jsx)("h5",{children:t.title})})}),Object(w.jsxs)(U.a,{children:[Object(w.jsxs)(z.a,{xs:6,children:[Object(w.jsx)("h6",{children:"Average Rating"}),Object(w.jsx)("p",{children:t.average_rating||"0"})]}),Object(w.jsxs)(z.a,{xs:6,children:[Object(w.jsx)("h6",{children:"# of Ratings"}),Object(w.jsx)("p",{children:t.ratings_count})]})]})]})]})})]})};var Fe=function(){const e=N(),t=(null===e||void 0===e?void 0:e.pk)||"";return Object(w.jsxs)("div",{className:i.a.App,children:[Object(w.jsx)(A,{}),Object(w.jsx)(Ce,{}),Object(w.jsxs)(f.c,{children:[Object(w.jsx)(f.a,{exact:!0,path:"/",render:()=>Object(w.jsx)("h1",{children:"Home Page"})}),Object(w.jsx)(f.a,{exact:!0,path:"/signin",render:()=>Object(w.jsx)(D,{})}),Object(w.jsx)(f.a,{exact:!0,path:"/signup",render:()=>Object(w.jsx)(W,{})}),Object(w.jsx)(f.a,{exact:!0,path:"/profile/:userId",render:()=>Object(w.jsx)(Ie,{})}),Object(w.jsx)(f.a,{exact:!0,path:"/popular",render:()=>Object(w.jsx)(ke,{filter:"ratings__owner__profile=".concat(t)})}),Object(w.jsx)(f.a,{exact:!0,path:"/playlist/:id",render:()=>Object(w.jsx)(Re,{})}),Object(w.jsx)(f.a,{exact:!0,path:"/feed",render:()=>Object(w.jsx)(ke,{filter:"owner__followed_by__owner__profile=".concat(t)})}),Object(w.jsx)(f.a,{exact:!0,path:"/spotify-search",render:()=>Object(w.jsx)(ge,{})}),Object(w.jsx)(f.a,{exact:!0,path:"/placeholder",render:()=>Object(w.jsx)("h1",{children:"Placeholder"})}),Object(w.jsx)(f.a,{render:()=>Object(w.jsx)("h1",{children:"Page Not Found!"})})]})]})};var Le=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,124)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:n,getTTFB:r}=t;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(S,{children:Object(w.jsx)(X,{children:Object(w.jsx)(O.a,{children:Object(w.jsx)(Fe,{})})})})}),document.getElementById("root")),Le()},16:function(e,t,a){e.exports={Row:"SignInUpForm_Row__3PbVy",Input:"SignInUpForm_Input__3xaLZ",Header:"SignInUpForm_Header__3joQJ",Link:"SignInUpForm_Link__1BeMm",SignUpCol:"SignInUpForm_SignUpCol__28o4y",SignInCol:"SignInUpForm_SignInCol__3ImPK"}},19:function(e,t,a){e.exports={CustomBackground:"NavBar_CustomBackground__3zgb5",NavLink:"NavBar_NavLink__34ons",Active:"NavBar_Active__3PBZb"}},21:function(e,t,a){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",PaddingReset:"Button_PaddingReset__3EaQQ"}},23:function(e,t,a){e.exports={App:"App_App__16ZpL",Content:"App_Content__ZaMNr",FillerImage:"App_FillerImage__2ob-g",PaddingReset:"App_PaddingReset__2Yixf"}},38:function(e,t,a){e.exports={ProfileContainer:"Profile_ProfileContainer__1MhJH",FontAwesomeIcon:"Profile_FontAwesomeIcon__1XfKb",StatsContainer:"Profile_StatsContainer__1jyTN"}},39:function(e,t,a){e.exports={AccordionPosition:"AccordionWindow_AccordionPosition__3Pg_2",Header:"AccordionWindow_Header__3EVT_",Card:"AccordionWindow_Card__RFCw5",PaddingReset:"AccordionWindow_PaddingReset__RMqnf"}},42:function(e,t,a){e.exports={Centered:"LoadingSpinner_Centered__2UoRO"}},43:function(e,t,a){e.exports={Header:"ModalWindow_Header__hiHjJ",Body:"ModalWindow_Body__13Mmm",Color:"ModalWindow_Color__9jnUe",Footer:"ModalWindow_Footer__3oRO7"}},44:function(e,t,a){e.exports={Container:"PlaylistsPage_Container__KgRlF",ProfileContainer:"PlaylistsPage_ProfileContainer__1ky5y",Button:"PlaylistsPage_Button__2jYpK",InfiniteScroll:"PlaylistsPage_InfiniteScroll__1cMqB"}},56:function(e,t,a){e.exports={Container:"SpotifySearchPage_Container__31uhH",PaddingReset:"SpotifySearchPage_PaddingReset__2gaVg"}},62:function(e,t,a){e.exports={Container:"PlaylistDetail_Container__37TnQ",Button:"PlaylistDetail_Button__3EF93"}},73:function(e,t,a){e.exports={Avatar:"Avatar_Avatar__196lW"}},78:function(e,t,a){e.exports={Image:"Playlist_Image__2QZQC"}},80:function(e,t,a){e.exports={Button:"AddPlaylistButton_Button__19nCc"}},86:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.65f885c9.chunk.js.map