"use strict";(self.webpackChunkdrheranca=self.webpackChunkdrheranca||[]).push([[916],{7753:(e,i,a)=>{a.d(i,{A:()=>n});var l=a(6446),r=a(9252),o=a(5865),s=a(4535),t=a(579);const d=(0,s.Ay)(l.A)((e=>{let{theme:i}=e;return"\n        border-radius: 0;\n        margin: ".concat(i.spacing(3)," 0;\n")}));function n(){return(0,t.jsx)(d,{children:(0,t.jsx)(r.A,{maxWidth:"lg",children:(0,t.jsx)(l.A,{py:3,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:(0,t.jsx)(l.A,{children:(0,t.jsx)(o.A,{variant:"subtitle1",children:"\xa9 2025 - Dr. Heran\xe7a - Sistema de C\xe1lculo de Invent\xe1rio"})})})})})}},4146:(e,i,a)=>{a.d(i,{A:()=>d});var l=a(9252),r=a(4535),o=a(6446),s=a(579);const t=(0,r.Ay)(o.A)((e=>{let{theme:i}=e;return"\n        padding: ".concat(i.spacing(4,0),";\n")})),d=e=>{let{children:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t,{children:(0,s.jsx)(l.A,{maxWidth:"lg",children:i})})})}},2053:(e,i,a)=>{a.d(i,{A:()=>s});var l=a(4535),r=a(579);const o=(0,l.Ay)("span")((e=>{let{theme:i}=e;return"\n      \n      &.MuiText {\n\n        &-black {\n          color: ".concat(i.palette.common.black,"\n        }\n\n        &-primary {\n          color: ").concat(i.palette.primary.main,"\n        }\n        \n        &-secondary {\n          color: ").concat(i.palette.secondary.main,"\n        }\n        \n        &-success {\n          color: ").concat(i.palette.success.main,"\n        }\n        \n        &-warning {\n          color: ").concat(i.palette.warning.main,"\n        }\n              \n        &-error {\n          color: ").concat(i.palette.error.main,"\n        }\n        \n        &-info {\n          color: ").concat(i.palette.info.main,"\n        }\n      }\n")})),s=e=>{let{className:i="",color:a="secondary",children:l,...s}=e;return(0,r.jsx)(o,{className:"MuiText-"+a,...s,children:l})}},5997:(e,i,a)=>{a.d(i,{A:()=>y});var l=a(5043),r=a(1906),o=a(7784),s=a(5865),t=a(35),d=a(9347),n=a(5316),u=a(6600),p=a(6446),c=a(9336),b=a(4605),v=a(7843),m=a(3193),M=a(9190),f=a(3914),z=a(1449),_=a(8903),S=a(579);function y(e){if(!e)return(0,S.jsx)(S.Fragment,{});const i=e.title?e.title:"",a=e.jsonInfo.data?JSON.parse(e.jsonInfo.data):{},y=e.jsonInfo.model?JSON.parse(e.jsonInfo.model):{},D=e.jsonInfo.saveProperty?e.jsonInfo.saveProperty:"",g=!!e.jsonInfo.savePropertyIsArray&&e.jsonInfo.savePropertyIsArray,q=e.jsonInfo.saveId?e.jsonInfo.saveId:0,h=e.jsonInfo.replaces?JSON.parse(e.jsonInfo.replaces):{},j=e.jsonInfo.relationOptions?JSON.parse(e.jsonInfo.relationOptions):{},A=e.jsonInfo.relationProperties?JSON.parse(e.jsonInfo.relationProperties):{},[x,P]=(0,l.useState)(a);(0,l.useEffect)((()=>{P(a||{})}),[e.open]);const I=function(e,i){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;P((l=>{const r={...l};if(a)r[e]={...r[e],[a]:i};else if(e.includes("-")){const[a,l]=e.split("-");r[a]={...r[a],[l]:i}}else r[e]=i;return r}))},C=(e,i)=>{var a,r;const t=x[e.field]||"";switch(e.type){case"string":case"email":return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,type:"email"===e.type?"email":"text",value:t,onChange:i=>I(e.field,i.target.value),fullWidth:!0});case"longString":return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,type:"text",value:t,multiline:!0,onChange:i=>I(e.field,i.target.value),fullWidth:!0});case"number":case"percentage":return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,type:"number",value:t,onChange:i=>I(e.field,i.target.value),fullWidth:!0});case"money":return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,type:"text",value:t?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(t)):"",onChange:i=>{const a=i.target.value.replace(/[^0-9]/g,""),l=a?Number(parseInt(a)/100):null;I(e.field,l)},fullWidth:!0,inputProps:{inputMode:"numeric",placeholder:"R$ 0,00"}});case"boolean":return(0,S.jsx)(b.A,{control:(0,S.jsx)(v.A,{checked:Boolean(t),id:e.field,onChange:i=>I(e.field,i.target.checked)}),label:e.label});case"date":return(0,S.jsx)(o.A,{id:e.field,label:e.label,value:t,type:"date",onChange:i=>I(e.field,i.target.value),sx:{width:"100%"},InputLabelProps:{shrink:!0},inputProps:{max:"9999-12-31"}});case"options":return(0,S.jsxs)(m.A,{fullWidth:!0,required:e.required,children:[(0,S.jsx)(M.A,{id:"".concat(e.field,"-label"),children:e.label}),(0,S.jsx)(f.A,{labelId:"".concat(e.field,"-label"),id:e.field,value:t,label:e.label,onChange:i=>I(e.field,i.target.value),children:null===(a=e.options)||void 0===a?void 0:a.map((e=>{let i=e.label||e;return h&&"string"===typeof i&&Object.entries(h).forEach((e=>{let[a,l]=e;i=i.replace(a,l)})),(0,S.jsx)(z.A,{value:e.value||e,children:i},e.value||e)}))})]});case"origemDivida":return(0,S.jsxs)(m.A,{fullWidth:!0,required:e.required,children:[(0,S.jsx)(M.A,{id:"".concat(e.field,"-label"),children:e.label}),(0,S.jsx)(f.A,{labelId:"".concat(e.field,"-label"),id:e.field,value:t,label:e.label,onChange:i=>I(e.field,i.target.value),children:null===A||void 0===A?void 0:A.map((e=>{const i="".concat(e.tipo,":").concat(e.id);return(0,S.jsxs)(z.A,{value:i,children:[e.tipo," - ",e.nome]},i)}))})]});case"relation":const d=t||{};return(0,S.jsxs)(_.Ay,{container:!0,columnSpacing:2,marginBottom:0,children:[(0,S.jsx)(_.Ay,{item:!0,xs:10,md:5,children:(0,S.jsxs)(m.A,{fullWidth:!0,required:e.required,children:[(0,S.jsx)(M.A,{id:"".concat(e.field,"-tipo-label"),children:e.label}),(0,S.jsx)(f.A,{labelId:"".concat(e.field,"-tipo-label"),id:"".concat(e.field,"-tipo"),value:d.tipo||"",label:e.label,onChange:i=>I(e.field,{...d,tipo:i.target.value}),children:null===(r=e.options)||void 0===r?void 0:r.map((e=>(0,S.jsx)(z.A,{value:e,children:e},e)))})]})}),(0,S.jsx)(_.Ay,{item:!0,xs:4,md:1,marginTop:2,children:(0,S.jsx)(S.Fragment,{children:"De"})}),(0,S.jsx)(_.Ay,{item:!0,xs:10,md:5,children:(0,S.jsxs)(m.A,{fullWidth:!0,required:e.required,children:[(0,S.jsx)(M.A,{id:"".concat(e.field,"-id-label"),children:"Pessoa"}),(0,S.jsx)(f.A,{labelId:"".concat(e.field,"-id-label"),id:"".concat(e.field,"-id"),value:d.id||"",label:"Pessoa",onChange:i=>I(e.field,{...d,id:i.target.value}),children:i.map((e=>(0,S.jsx)(z.A,{value:e.id,children:e.nome},e.id)))})]})})]});case"list":return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,value:Array.isArray(t)?t.join(", "):"",onChange:i=>I(e.field,i.target.value.split(",").map((e=>e.trim()))),helperText:"Digite valores separado por v\xedrgula",fullWidth:!0});case"address":const n=t||{};return(0,S.jsxs)(_.Ay,{container:!0,columnSpacing:2,marginBottom:0,children:[(0,S.jsxs)(_.Ay,{item:!0,xs:12,md:6,children:[(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-rua"),label:"Rua",value:n.rua||"",onChange:i=>I(e.field,i.target.value,"rua"),fullWidth:!0}),(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-cidade"),label:"Cidade",value:n.cidade||"",onChange:i=>I(e.field,i.target.value,"cidade"),fullWidth:!0})]}),(0,S.jsxs)(_.Ay,{item:!0,xs:12,md:6,children:[(0,S.jsxs)(m.A,{fullWidth:!0,required:e.required,children:[(0,S.jsx)(M.A,{id:"".concat(e.field,"-estado-label"),children:"Estado"}),(0,S.jsxs)(f.A,{labelId:"".concat(e.field,"-estado-label"),id:"".concat(e.field,"-estado"),value:n.estado||"",label:"Estado",onChange:i=>I(e.field,i.target.value,"estado"),children:[(0,S.jsx)(z.A,{value:"AC",children:"Acre"}),(0,S.jsx)(z.A,{value:"AL",children:"Alagoas"}),(0,S.jsx)(z.A,{value:"AP",children:"Amap\xe1"}),(0,S.jsx)(z.A,{value:"AM",children:"Amazonas"}),(0,S.jsx)(z.A,{value:"BA",children:"Bahia"}),(0,S.jsx)(z.A,{value:"CE",children:"Cear\xe1"}),(0,S.jsx)(z.A,{value:"DF",children:"Distrito Federal"}),(0,S.jsx)(z.A,{value:"ES",children:"Esp\xedrito Santo"}),(0,S.jsx)(z.A,{value:"GO",children:"Goi\xe1s"}),(0,S.jsx)(z.A,{value:"MA",children:"Maranh\xe3o"}),(0,S.jsx)(z.A,{value:"MT",children:"Mato Grosso"}),(0,S.jsx)(z.A,{value:"MS",children:"Mato Grosso do Sul"}),(0,S.jsx)(z.A,{value:"MG",children:"Minas Gerais"}),(0,S.jsx)(z.A,{value:"PA",children:"Par\xe1"}),(0,S.jsx)(z.A,{value:"PB",children:"Para\xedba"}),(0,S.jsx)(z.A,{value:"PR",children:"Paran\xe1"}),(0,S.jsx)(z.A,{value:"PE",children:"Pernambuco"}),(0,S.jsx)(z.A,{value:"PI",children:"Piau\xed"}),(0,S.jsx)(z.A,{value:"RJ",children:"Rio de Janeiro"}),(0,S.jsx)(z.A,{value:"RN",children:"Rio Grande do Norte"}),(0,S.jsx)(z.A,{value:"RS",children:"Rio Grande do Sul"}),(0,S.jsx)(z.A,{value:"RO",children:"Rond\xf4nia"}),(0,S.jsx)(z.A,{value:"RR",children:"Roraima"}),(0,S.jsx)(z.A,{value:"SC",children:"Santa Catarina"}),(0,S.jsx)(z.A,{value:"SP",children:"S\xe3o Paulo"}),(0,S.jsx)(z.A,{value:"SE",children:"Sergipe"}),(0,S.jsx)(z.A,{value:"TO",children:"Tocantins"})]})]}),(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-pais"),label:"Pa\xeds",value:"Brasil",fullWidth:!0,disabled:!0,onChange:i=>I(e.field,i.target.value,"pais")})]})]});case"doacaoPessoaInventario":const u=Array.isArray(t)?t:[];return(0,S.jsx)(_.Ay,{container:!0,columnSpacing:2,marginBottom:0,children:i.filter((e=>-1!=e.id)).map((i=>{const a=u.find((e=>e.pessoa_inventario_id===i.id))||{};return(0,S.jsxs)(l.Fragment,{children:[(0,S.jsx)(_.Ay,{item:!0,xs:12,md:6,children:(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-pessoa-").concat(i.id),value:i.nome,label:"Quanto foi doado para:",type:"text",disabled:!0,fullWidth:!0})}),(0,S.jsx)(_.Ay,{item:!0,xs:12,md:6,children:(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-porcentagem-").concat(i.id),label:"Porcentagem da Doa\xe7\xe3o",type:"number",value:a.porcentagem_doacao||"",onChange:a=>{const l=u.filter((e=>e.pessoa_inventario_id!==i.id));l.push({pessoa_inventario_id:i.id,porcentagem_doacao:parseInt(a.target.value)}),I(e.field,l)},fullWidth:!0,inputProps:{min:0,max:100,step:.01}})})]},i.id)}))});case"internacionalAddress":const c=t||{};return(0,S.jsxs)(_.Ay,{container:!0,columnSpacing:2,marginBottom:0,children:[(0,S.jsxs)(_.Ay,{item:!0,xs:12,md:6,children:[(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-rua"),label:"Rua",value:c.rua||"",onChange:i=>I(e.field,i.target.value,"rua"),fullWidth:!0}),(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-cidade"),label:"Cidade",value:c.cidade||"",onChange:i=>I(e.field,i.target.value,"cidade"),fullWidth:!0})]}),(0,S.jsxs)(_.Ay,{item:!0,xs:12,md:6,children:[(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-estado"),label:"Estado",value:c.estado||"",onChange:i=>I(e.field,i.target.value,"estado"),fullWidth:!0}),(0,S.jsx)(o.A,{required:e.required,id:"".concat(e.field,"-pais"),label:"Pa\xeds",value:c.pais||"",onChange:i=>I(e.field,i.target.value,"pais"),fullWidth:!0})]})]});case"separator":return(0,S.jsxs)(p.A,{sx:{width:"100%",mt:2,mb:1},children:[(0,S.jsx)(s.A,{variant:"h5",gutterBottom:!0,children:e.label}),e.description&&(0,S.jsx)(s.A,{variant:"body2",color:"text.secondary",children:e.description})]});default:return(0,S.jsx)(o.A,{required:e.required,id:e.field,label:e.label,value:t,onChange:i=>I(e.field,i.target.value),fullWidth:!0})}},O=e=>{let i=!0;if("boolean"===typeof e.visible)i=e.visible;else if("string"===typeof e.visible){i=e.visible.split("||").map((e=>e.trim())).some((e=>e.split("&&").map((e=>e.trim())).every((e=>{if(e.includes("===")){const[i,a]=e.split("===").map((e=>e.trim()));return x[i]===a.replace(/["']/g,"")}if(e.includes("!==")){const[i,a]=e.split("!==").map((e=>e.trim()));return x[i]!==a.replace(/["']/g,"")}return!0}))))}return{display:i?"block":"none"}};return(0,S.jsx)(l.Fragment,{children:(0,S.jsxs)(t.A,{open:e.open,onClose:e.onClose,PaperProps:{component:"form",onSubmit:i=>{i.preventDefault();const a=[];a[D]=g?[x]:x;e.onSave(a,g,q,!1),e.onClose()}},maxWidth:"md",fullWidth:!0,children:[(0,S.jsx)(u.A,{sx:{mb:-1.5},children:(0,S.jsxs)("h3",{children:["Edi\xe7\xe3o de ",i]})}),(0,S.jsx)(c.A,{}),(0,S.jsx)(n.A,{children:(0,S.jsx)("form",{children:(0,S.jsx)(_.Ay,{container:!0,columnSpacing:2,children:y.map(((e,i)=>(0,S.jsx)(_.Ay,{item:!0,md:e.sizeMD,sm:e.sizeSM,xs:e.sizeSM,sx:{display:O(e).display},children:(0,S.jsx)(p.A,{sx:{"& > *":{mb:3},"& .MuiTextField-root":{width:"100%",mb:2},"& .MuiFormControl-root":{mb:2},"& .MuiFormControlLabel-root":{mb:2},pt:1,display:O(e).display},children:C(e,j)})},i)))})})}),(0,S.jsx)(c.A,{}),(0,S.jsxs)(d.A,{children:[(0,S.jsx)(r.A,{onClick:e.onClose,children:"Cancelar"}),(0,S.jsx)(r.A,{variant:"contained",type:"submit",children:"Salvar"})]})]})})}},2637:(e,i,a)=>{a.d(i,{Al:()=>o,No:()=>m,VZ:()=>f,Vp:()=>u,cz:()=>p,ei:()=>d,em:()=>t,iq:()=>c,kE:()=>r,ml:()=>s,pk:()=>b,vo:()=>n,ze:()=>v,zl:()=>M});var l=function(e){return e.Separator="separator",e.String="string",e.LongString="longString",e.Email="email",e.Number="number",e.Money="money",e.Percentage="percentage",e.List="list",e.Options="options",e.OrigemDivida="origemDivida",e.Relation="relation",e.Address="address",e.DoacaoPessoaInventario="doacaoPessoaInventario",e.InternationalAddress="internacionalAddress",e.Date="date",e.Boolean="boolean",e}(l||{});const r=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"id_plano",label:"Plano",type:l.Number,required:!0,visible:!1,sizeMD:6,sizeSM:12},{field:"nome",label:"Nome",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"email",label:"Email",type:l.Email,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"endereco",label:"Endere\xe7o",type:l.Address,required:!0,visible:!0,sizeMD:12,sizeSM:12},{field:"fone",label:"Telefone",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"senha",label:"Senha",type:l.String,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"funcao",label:"Fun\xe7\xe3o",type:l.String,required:!0,visible:!1,sizeMD:6,sizeSM:12}],o=(l.Number,l.Number,l.Money,l.Date,l.Date,l.Options,l.Number,l.String,l.Money,l.String,l.String,l.String,l.String,l.String,[{field:"id",label:"ID",type:l.Number,required:!1,visible:!1},{field:"nome",label:"Nome",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"data_nascimento",label:"Data de Nascimento",type:l.Date,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"email",label:"Email",type:l.Email,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"fone",label:"Telefone",type:l.String,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"endereco",label:"Endere\xe7o",type:l.Address,required:!1,visible:!0,sizeMD:12,sizeSM:12},{field:"cpf",label:"CPF",type:l.String,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"estado_civil",label:"Estado Civil",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:["Casado(a)","Divorciado(a)","Uni\xe3o est\xe1vel","Solteiro(a)","Vi\xfavo(a)"]},{field:"tipo_declaracao_ir",label:"Tipo de Declara\xe7\xe3o IR",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:["Simples","Completa"]}]),s=[{field:"id",label:"ID",type:l.Number,required:!1,visible:!1},{field:"nome",label:"Nome",type:l.String,required:!0,visible:!0,sizeMD:12,sizeSM:12},{field:"data_nascimento",label:"Data de Nascimento",type:l.Date,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"data_falecimento",label:"Data de Falecimento",type:l.Date,required:!1,visible:!0,sizeMD:6,sizeSM:12}],t=[{field:"id",label:"ID",type:l.Number,required:!1,visible:!1},{field:"nome",label:"Nome",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"data_nascimento",label:"Data de Nascimento",type:l.Date,required:!1,visible:!0,sizeMD:6,sizeSM:12},{field:"vinculo",label:"V\xednculo",type:l.Relation,required:!0,visible:!0,sizeMD:6,sizeSM:12,options:["Filho(a)","Pai / M\xe3e","Irm\xe3o / Irm\xe3","Sobrinho / Sobrinha","Tio / Tia","Parentes de 4\xaa Grau Vivos"]},{field:"esta_vivo",label:"Est\xe1 Vivo",type:l.Boolean,required:!1,visible:!0,sizeMD:3,sizeSM:6},{field:"eh_incapaz",label:"\xc9 Incapaz",type:l.Boolean,required:!1,visible:!0,sizeMD:3,sizeSM:6}],d=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"tipo_imovel",label:"Tipo do Im\xf3vel",type:l.Options,required:!0,visible:!0,sizeMD:6,sizeSM:12,options:["Urbano","Rural","Comercial","Outro"]},{field:"endereco",label:"Endere\xe7o",type:l.Address,required:!0,visible:!0,sizeMD:12,sizeSM:12},{label:"Propriedade e Doa\xe7\xe3o",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"status_propriedade",label:"Status da Propriedade",type:l.Options,required:!0,visible:!0,sizeMD:12,sizeSM:12,options:[{label:"{inventario.decujus.nome}",value:"de_cujus"},{label:"Doado sem usufruto",value:"doado_sem_usufruto"},{label:"Doado com usufruto",value:"doado_com_usufruto"}]},{field:"valor_mercado",label:"Valor de Mercado",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"valor_historico",label:"Valor Hist\xf3rico",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"data_aquisicao",label:"Data de Aquisi\xe7\xe3o",type:l.Date,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"percentual_participacao",label:"Percentual de Participa\xe7\xe3o",type:l.Percentage,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"tipo_restricao",label:"Tipo de Restri\xe7\xe3o",type:l.Options,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12,options:["N\xe3o possui","Penhora","Hipoteca","Aliena\xe7\xe3o fiduci\xe1ria","Gravame","Outras restri\xe7\xf5es"]},{field:"esta_financiado",label:"Est\xe1 Financiado",type:l.Boolean,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:2,sizeSM:12},{field:"saldo_devedor",label:"Saldo Devedor",type:l.Money,required:"esta_financiado === true",visible:"status_propriedade === 'de_cujus'",sizeMD:4,sizeSM:12},{field:"valor_doado",label:"Valor do Im\xf3vel Doado",type:l.Money,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:6,sizeSM:12},{field:"percentual_nua_propriedade",label:"Percentual da Nua-Propriedade",type:l.Percentage,required:!0,visible:"status_propriedade === 'doado_com_usufruto'",sizeMD:6,sizeSM:12},{label:"Lista de Doa\xe7\xf5es",description:"Peencher a porcentagem apenas para donat\xe1rio que n\xe3o seja herdeiro",type:l.Separator,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{field:"doacao_pessoas_inventario",label:"Doa\xe7\xe3o para Pessoas do Invent\xe1rio",type:l.DoacaoPessoaInventario,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],n=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"tipo_veiculo",label:"Tipo do ve\xedculo",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:["Aeronave","Barco/Lancha","Terreste (Carro/Moto/Caminh\xe3o)","Trator / Colheitadeira","Outro"]},{label:"Propriedade e Doa\xe7\xe3o",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"status_propriedade",label:"Status da Propriedade",type:l.Options,required:!0,visible:!0,sizeMD:12,sizeSM:12,options:[{label:"{inventario.decujus.nome}",value:"de_cujus"},{label:"Doado",value:"Doado"}]},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:12,sizeSM:12},{field:"tipo_restricao",label:"Tipo de Restri\xe7\xe3o",type:l.Options,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12,options:["N\xe3o possui","Penhora","Hipoteca","Aliena\xe7\xe3o fiduci\xe1ria","Gravame","Outras restri\xe7\xf5es"]},{field:"esta_financiado",label:"Est\xe1 Financiado",type:l.Boolean,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:3,sizeSM:12},{field:"seguro_prestamista",label:"Seguro Prestamista",type:l.Boolean,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:3,sizeSM:12},{field:"saldo_devedor",label:"Saldo Devedor",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"data_quitacao",label:"Data de Quita\xe7\xe3o",type:l.Date,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:6,sizeSM:12},{field:"valor_doado",label:"Valor do Ve\xedculo Doado",type:l.Money,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{label:"Lista de Doa\xe7\xf5es",description:"Peencher a porcentagem apenas para donat\xe1rio que n\xe3o seja herdeiro",type:l.Separator,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{field:"doacao_pessoas_inventario",label:"Doa\xe7\xe3o para Pessoas do Invent\xe1rio",type:l.DoacaoPessoaInventario,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],u=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:12,sizeSM:12},{label:"Propriedade e Doa\xe7\xe3o",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"status_propriedade",label:"Status da Propriedade",type:l.Options,required:!0,visible:!0,sizeMD:12,sizeSM:12,options:[{label:"{inventario.decujus.nome}",value:"de_cujus"},{label:"Doado",value:"doado"}]},{field:"valor_doado",label:"Valor",type:l.Money,required:!0,visible:"status_propriedade === 'doado'",sizeMD:12,sizeSM:12},{label:"Lista de Doa\xe7\xf5es",description:"Peencher a porcentagem apenas para donat\xe1rio que n\xe3o seja herdeiro",type:l.Separator,visible:"status_propriedade === 'doado'",sizeMD:12,sizeSM:12},{field:"doacao_pessoas_inventario",label:"Doa\xe7\xe3o para Pessoas do Invent\xe1rio",type:l.DoacaoPessoaInventario,required:!0,visible:"status_propriedade === 'doado'",sizeMD:12,sizeSM:12},{label:"Tipo do Ativo",description:"Selecione o tipo do ativo",type:l.Separator,visible:"status_propriedade === 'de_cujus'",sizeMD:12,sizeSM:12},{field:"tipo_ativo",label:"Tipo de Ativo",type:l.Options,required:!1,visible:"status_propriedade === 'de_cujus'",sizeMD:12,sizeSM:12,options:[{label:"A\xe7\xf5es",value:"acoes"},{label:"Ativos negociados em bolsa no Brasil (exceto a\xe7\xf5es)",value:"ativos_bolsa_brasil"},{label:"Cons\xf3rcio n\xe3o contemplado",value:"consorcio_nao_contemplado"},{label:"Conta Banc\xe1ria",value:"conta_bancaria"},{label:"Demais Fundos de \xcdndice de Mercado (ETFs)",value:"demais_fundos_indice_mercado"},{label:"Dinheiro",value:"dinheiro"},{label:"Fundos de Investimento Imobili\xe1rio (FII)",value:"fundos_investimento_imobiliario"},{label:"Fundos de Investimento em A\xe7\xf5es - Mercado de Acesso",value:"fundos_investimento_acoes_mercado_acesso"},{label:"Furdos de Investimento em A\xe7\xf5es e Fundos M\xfatuos de Privatiza\xe7So - FGTS",value:"fundos_investimento_acoes_fgts"},{label:"Fundos de Investimento em Direitos Credit\xf3rios (FIDC)",value:"fundos_investimento_direitos_creditorios"},{label:"Fundos de Investirnento em Participa\xe7\xf5es, Furdos de Investimento em Cotas de Fundos de Investimento em em Infraestrutura (FIP-IE)",value:"fundos_investimento_participacoes_fip_ie"},{label:"Fundos de Investimento nas Cadeias Produtivas Agroindustriais (Fiagro)",value:"fundos_fiagro"},{label:"Fundos de Investimento sem Tributa\xe7\xe3o Peri\xf3dica",value:"fundos_investimento_sem_tributacao_periodica"},{label:"Fundos de Investimentos Sujeitos \xe0 Tributa\xe7\xe3o Peri\xf3dica (come-cotas). Ex: Fundos de renda fixa, DI, Multimercado, Cambial, Renda Vari\xe1vel",value:"fundos_investimento_sujeitos_tributacao_periodica"},{label:"Fundos de Investimento de Curto Prazo",value:"fundos_investimento_curto_prazo"},{label:"Fundos de Investimento de Longo Prazo",value:"fundos_investimento_longo_prazo"},{label:"Fundos de \xcdndice de Renda Fixa - Lei 13.043/14",value:"fundos_indice_renda_fixa"},{label:"T\xedtulos de Renda Fixa (CDB. Tesouro Direto, LH, LC, etc)",value:"titulos_renda_fixa"},{label:"T\xedtulos de Renda Fixa Isentos (CRI, CRA LCI, LCA, etc): isentos de IR",value:"titulos_renda_fixa_isentos"},{label:"Outros Fundos",value:"outros_fundos"},{label:"Previd\xeancia Privada",value:"previdencia_privada"},{label:"Outros",value:"outros"}]},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:"tipo_ativo !== 'consorcio_nao_contemplado' && tipo_ativo !== 'conta_bancaria' && tipo_ativo !== 'previdencia_privada'",sizeMD:12,sizeSM:12},{field:"valor_pago_cotas",label:"Valor total pago pelas cotas",type:l.Money,required:!0,visible:"tipo_ativo === 'consorcio_nao_contemplado'",sizeMD:12,sizeSM:12},{field:"tipo_conta",label:"Tipo de Conta",type:l.Options,required:!1,visible:"tipo_ativo === 'conta_bancaria'",sizeMD:6,sizeSM:12,options:[{label:"Conta Corrente",value:"conta_corrente"},{label:"Conta Poupan\xe7a",value:"conta_poupanca"}]},{field:"banco",label:"Banco",type:l.String,required:!0,visible:"tipo_ativo === 'conta_bancaria'",sizeMD:6,sizeSM:12},{field:"conta_bancaria_saldo",label:"Saldo atual pertencente ao propriet\xe1rio",type:l.Money,required:!0,visible:"tipo_ativo === 'conta_bancaria'",sizeMD:12,sizeSM:12},{field:"tipo_previdencia",label:"Tipo de Previd\xeancia",type:l.Options,required:!1,visible:"tipo_ativo === 'previdencia_privada'",sizeMD:6,sizeSM:12,options:[{label:"VGBL",value:"vgbl"},{label:"PGBL",value:"pgbl"}]},{field:"previdencia_saldo",label:"Reserva acumulada / provis\xe3o matem\xe1tica / saldo atual",type:l.Money,required:!0,visible:"tipo_ativo === 'previdencia_privada'",sizeMD:6,sizeSM:12},{field:"isencao_itcmd",label:"Considerar isen\xe7\xe3o de ITCM sobre esta previd\xeancia?",type:l.Boolean,required:!0,visible:"tipo_ativo === 'previdencia_privada'",sizeMD:6,sizeSM:12},{field:"nomeados_beneficiarios",label:"Foram nomeados benefici\xe1rios na contrata\xe7\xe3o?",type:l.Boolean,required:!0,visible:"tipo_ativo === 'previdencia_privada'",sizeMD:6,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],p=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"empresa",label:"Empresa",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"cnpj",label:"CNPJ",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{label:"Propriedade e Doa\xe7\xe3o",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"status_propriedade",label:"Status da Propriedade",type:l.Options,required:!0,visible:!0,sizeMD:12,sizeSM:12,options:[{label:"{inventario.decujus.nome}",value:"de_cujus"},{label:"Doado sem usufruto",value:"doado_sem_usufruto"},{label:"Doado com usufruto",value:"doado_com_usufruto"}]},{field:"valor_patrimonial",label:"Valor Patrimonial",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:4,sizeSM:12},{field:"capital_social",label:"Capital Social",type:l.Money,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:4,sizeSM:12},{field:"percentual_participacao",label:"Percentual de Participa\xe7\xe3o",type:l.Percentage,required:!0,visible:"status_propriedade === 'de_cujus'",sizeMD:4,sizeSM:12},{field:"valor_doado",label:"Valor das Cotas Doadas",type:l.Money,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:6,sizeSM:12},{field:"percentual_nua_propriedade",label:"Percentual da Nua-Propriedade",type:l.Percentage,required:!0,visible:"status_propriedade === 'doado_com_usufruto'",sizeMD:6,sizeSM:12},{label:"Lista de Doa\xe7\xf5es",description:"Peencher a porcentagem apenas para donat\xe1rio que n\xe3o seja herdeiro",type:l.Separator,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{field:"doacao_pessoas_inventario",label:"Doa\xe7\xe3o para Pessoas do Invent\xe1rio",type:l.DoacaoPessoaInventario,required:!0,visible:"status_propriedade !== 'de_cujus'",sizeMD:12,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],c=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"observacao",label:"Observa\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:12,sizeSM:12}],b=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:4,sizeSM:12},{field:"tipo_cripto",label:"Tipo do bem",type:l.Options,required:!1,visible:!0,sizeMD:4,sizeSM:12,options:["Criptomoeda","NFT","Outro"]},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:!0,sizeMD:4,sizeSM:12},{field:"observacao",label:"Observa\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:12,sizeSM:12}],v=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"tipo_ativo",label:"Tipo de Ativo",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:[{label:"Direitos Autorais",value:"direitos_autorais"},{label:"J\xf3ia / Quadro / Objeto de Arte",value:"joia_quadro_arte"},{label:"Maquin\xe1rio e Equipamentos",value:"maquinario"},{label:"Semoventes",value:"semovente"},{label:"Outros",value:"outro"}]},{field:"categoria_semovente",label:"Categoria",type:l.Options,required:!1,visible:"tipo_ativo === 'semovente'",sizeMD:6,sizeSM:12,options:["Equino","Gado","Su\xedno","Outros"]},{field:"categoria_maquinario",label:"Categoria",type:l.Options,required:!1,visible:"tipo_ativo === 'maquinario'",sizeMD:6,sizeSM:12,options:["Colheitadeira","Maquin\xe1rio","Trator","Outros"]},{field:"tipo_restricao",label:"Tipo de Restri\xe7\xe3o",type:l.Options,required:!0,visible:"tipo_ativo === 'maquinario'",sizeMD:6,sizeSM:12,options:["N\xe3o possui","Penhora","Hipoteca","Aliena\xe7\xe3o fiduci\xe1ria","Gravame","Outras restri\xe7\xf5es"]},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],m=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:8,sizeSM:12},{field:"tem_beneficiarios",label:"Foram nomeados benefici\xe1rios durante a contrata\xe7\xe3o?",type:l.Boolean,required:!0,visible:!0,sizeMD:4,sizeSM:12},{field:"tipo_seguro",label:"Tipo de Seguro",type:l.Options,required:!0,visible:!0,sizeMD:12,sizeSM:12,options:[{label:"Comum",value:"comum"},{label:"Resgat\xe1vel",value:"resgatavel"},{label:"Tempor\xe1rio",value:"temporario"}]},{field:"valor_cobertura",label:"Cobertura do Seguro",type:l.Money,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"valor_premio_mensal",label:"Pr\xeamio Mensal",type:l.Money,required:!0,visible:"tipo_seguro === 'comum' || tipo_seguro === 'temporario'",sizeMD:6,sizeSM:12},{field:"valor_premio",label:"Valor do Pr\xeamio",type:l.Money,required:!0,visible:"tipo_seguro === 'resgatavel'",sizeMD:6,sizeSM:12},{field:"pagamento_premio",label:"Pagamento do Pr\xeamio",type:l.Money,required:!0,visible:"tipo_seguro === 'resgatavel'",sizeMD:6,sizeSM:12},{field:"valor_restate_liquido",label:"Valor de Resgate L\xedquido",type:l.Money,required:!0,visible:"tipo_seguro === 'resgatavel'",sizeMD:6,sizeSM:12},{field:"restage_apos_vencimento",label:"Resgate Ap\xf3s Vencimento",type:l.Boolean,required:!0,visible:"tipo_seguro === 'resgatavel'",sizeMD:6,sizeSM:12},{field:"data_vencimento",label:"Data de Vencimento do Seguro",type:l.Date,required:!0,visible:"tipo_seguro !== 'comum'",sizeMD:6,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}],M=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"tipo_bem",label:"Tipo do Bem",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:["Im\xf3vel","Participa\xe7\xe3o societ\xe1ria","Ve\xedculo","Outros"]},{field:"valor",label:"Valor",type:l.Money,required:!0,visible:!0,sizeMD:12,sizeSM:12},{field:"endereco",label:"Endere\xe7o",type:l.InternationalAddress,required:!0,visible:!0,sizeMD:12,sizeSM:12},{field:"observacao",label:"Observa\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:12,sizeSM:12}],f=[{field:"id",label:"ID",type:l.Number,required:!0,visible:!1},{field:"descricao",label:"Descri\xe7\xe3o",type:l.String,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"tipo_divida",label:"Tipo da D\xedvida",type:l.Options,required:!1,visible:!0,sizeMD:6,sizeSM:12,options:[{label:"Financiamento de Im\xf3veis",value:"financiamento_imoveis"},{label:"Financiamento de Ve\xedculos",value:"financiamento_veiculos"},{label:"Financiamento de Maquin\xe1rios",value:"financiamento_maquinarios"},{label:"Empr\xe9stimo",value:"emprestimo"},{label:"Outros",value:"outros"}]},{field:"saldo_devedor",label:"Saldo Devedor da D\xedvida",type:l.Money,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"data_quitacao",label:"Data de Quita\xe7\xe3o",type:l.Date,required:!0,visible:!0,sizeMD:6,sizeSM:12},{field:"origem_divida",label:"Origem da D\xedvida",type:l.OrigemDivida,required:!1,visible:"tipo_divida === 'emprestimo' || tipo_divida === 'outros'",sizeMD:6,sizeSM:12},{field:"seguro_prestamista",label:"Seguro Prestamista",type:l.Boolean,required:!0,visible:"tipo_divida === 'emprestimo' || tipo_divida === 'outros'",sizeMD:3,sizeSM:12},{label:"Observa\xe7\xf5es",description:"",type:l.Separator,sizeMD:12,sizeSM:12},{field:"observacao",label:"",type:l.LongString,required:!1,visible:!0,sizeMD:12,sizeSM:12}]}}]);
//# sourceMappingURL=916.dbb7b842.chunk.js.map