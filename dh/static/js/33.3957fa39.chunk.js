(self.webpackChunkdrheranca=self.webpackChunkdrheranca||[]).push([[33],{7753:(e,r,s)=>{"use strict";s.d(r,{A:()=>l});var t=s(6446),i=s(9252),a=s(5865),n=s(4535),o=s(579);const d=(0,n.Ay)(t.A)((e=>{let{theme:r}=e;return"\n        border-radius: 0;\n        margin: ".concat(r.spacing(3)," 0;\n")}));function l(){return(0,o.jsx)(d,{children:(0,o.jsx)(i.A,{maxWidth:"lg",children:(0,o.jsx)(t.A,{py:3,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:(0,o.jsx)(t.A,{children:(0,o.jsx)(a.A,{variant:"subtitle1",children:"\xa9 2025 - Dr. Heran\xe7a - Sistema de C\xe1lculo de Invent\xe1rio"})})})})})}},4210:(e,r,s)=>{"use strict";s.d(r,{A:()=>a});var t=s(2167),i=s(579);const a=function(){return(0,i.jsx)(t.A,{title:"Dr. Heran\xe7a - Sistema de C\xe1lculo de Invent\xe1rio",arrow:!0,style:{paddingTop:"20px",paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px"},children:(0,i.jsx)("img",{alt:"Dr. Heran\xe7a Logo",width:"80%",src:"./static/images/logo/dr-heranca-logo.png"})})}},4500:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>k});var t=s(9490),i=s(8903),a=s(9252),n=s(7753),o=s(7784),d=s(2110),l=s(6446),u=s(6494),c=s(1906),p=s(4210);const h=s(3224)._.injectEndpoints({endpoints:e=>({testTokenApiLoginTestTokenPost:e.mutation({query:()=>({url:"/api/login/test-token",method:"POST"})}),createUserApiUsersPost:e.mutation({query:e=>({url:"/api/users/",method:"POST",body:e.userCreate})}),readUserMeApiUsersMeGet:e.query({query:()=>({url:"/api/users/me"})}),updateUserMeApiUsersMePut:e.mutation({query:e=>({url:"/api/users/me",method:"PUT",body:e.userUpdate})}),readGeocodesApiGeocodeGet:e.query({query:e=>({url:"/api/geocode/",params:{skip:e.skip,limit:e.limit}})})}),overrideExisting:!1}),{useTestTokenApiLoginTestTokenPostMutation:m,useCreateUserApiUsersPostMutation:x,useReadUserMeApiUsersMeGetQuery:g,useUpdateUserMeApiUsersMePutMutation:A,useReadGeocodesApiGeocodeGetQuery:j}=h;var y=s(5043),v=s(3216),f=s(77),S=s(2147),C=s(8096),b=s(579);const U=()=>{const[e,r]=(0,y.useState)(""),[s,t]=(0,y.useState)(""),[a,n]=(0,y.useState)(""),[,h]=(0,y.useState)(!1),[m]=x(),[g,A]=(0,y.useState)(""),j=(0,f.wA)(),U=(0,v.Zp)(),[k,w]=(0,y.useState)({isError:!1,message:void 0}),[M,T]=(0,y.useState)({isError:!1,message:void 0}),[P,q]=(0,y.useState)({isError:!1,message:void 0}),[E,G]=(0,y.useState)({isError:!1,message:void 0});return(0,b.jsx)(i.Ay,{children:(0,b.jsxs)(d.A,{children:[(0,b.jsx)(l.A,{display:"flex",justifyContent:"center",alignItems:"center",mt:2,children:(0,b.jsx)(p.A,{})}),(0,b.jsxs)(u.A,{children:[(0,b.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),C.oR.dismiss(),j((0,S.LA)({username:s,token:a})),C.oR.success("Bem vindo!"),U("/inventories/list")},children:[(0,b.jsx)(l.A,{sx:{"& .MuiTextField-root":{m:1,width:"98%"}},children:(0,b.jsx)(o.A,{error:null===k||void 0===k?void 0:k.isError,required:!0,id:"username",label:""===k.message?"Nome":k.message,placeholder:"Nome",value:e,onChange:e=>r(e.target.value)})}),(0,b.jsx)(l.A,{sx:{"& .MuiTextField-root":{m:1,width:"98%"}},children:(0,b.jsx)(o.A,{error:null===M||void 0===M?void 0:M.isError,required:!0,id:"email",label:""===M.message?"E-mail":M.message,placeholder:"E-mail",type:"email",value:s,onChange:e=>t(e.target.value)})}),(0,b.jsx)(l.A,{sx:{"& .MuiTextField-root":{m:1,width:"98%"}},children:(0,b.jsx)(o.A,{error:null===P||void 0===P?void 0:P.isError,required:!0,id:"password",label:""===P.message?"Senha":P.message,placeholder:"Senha",type:"password",value:a,onChange:e=>n(e.target.value)})}),(0,b.jsx)(l.A,{sx:{"& button":{m:1,width:"100%"},width:"98%"},children:(0,b.jsx)("div",{children:(0,b.jsx)(c.A,{size:"large",variant:"contained",type:"submit",children:"Cadastrar"})})})]}),(0,b.jsx)(l.A,{display:"flex",justifyContent:"center",alignItems:"center",children:(0,b.jsxs)("p",{children:["J\xe1 \xe9 cadastrado? ",(0,b.jsx)("a",{href:"#",onClick:e=>{U("/login"),e.stopPropagation()},children:"Clique aqui para fazer o login"})]})})]})]})})},k=()=>(0,b.jsxs)(i.Ay,{container:!0,direction:"column",justifyContent:"center",alignItems:"stretch",sx:{height:"100%"},children:[(0,b.jsx)(t.m,{children:(0,b.jsx)("title",{children:"Cadastro"})}),(0,b.jsxs)(a.A,{maxWidth:"sm",children:[(0,b.jsx)(i.Ay,{children:(0,b.jsx)(U,{})}),(0,b.jsx)(n.A,{})]})]})},3224:(e,r,s)=>{"use strict";s.d(r,{_:()=>u});var t=s(4657),i=s(8879),a=s(7761),n=s(4558),o=s(2908),d=s.n(o);const l=(0,t.cw)({baseUrl:n.$.DR_HERANCA_API,prepareHeaders:(e,r)=>{let{getState:s}=r;const t=s().auth.token;return t&&e.set("authorization","Bearer ".concat(t)),e},paramsSerializer:e=>d().stringify(e)}),u=(0,i.xP)({reducerPath:"emptySplitApi",baseQuery:async(e,r,s)=>{let t=await l(e,r,s);return t.error&&(0,a.z)(t.error),t},endpoints:()=>({})})},2634:()=>{}}]);
//# sourceMappingURL=33.3957fa39.chunk.js.map