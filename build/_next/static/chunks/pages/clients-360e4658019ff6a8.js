(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{2957:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return n(2275)}])},9318:function(e,a,n){"use strict";var s=n(5893),r=n(1664);a.Z=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("nav",{className:"navbar fixed-top navPadTop navbar-expand-lg navbar-dark d-none d-lg-block",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(r.default,{className:"navbar-brand",href:"/",children:(0,s.jsx)("img",{src:"/logos/logoMenu.png",width:"158px",alt:"Lyndus - O incentivo que faz bem!"})}),(0,s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,s.jsx)("span",{className:"navbar-toggler-icon"})}),(0,s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarToggler",children:(0,s.jsxs)("ul",{className:"nav mx-auto",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"/",children:"HOME"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"/clients",children:"PARA EMPRESAS"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"/beautyspots",children:"PARA NEG\xd3CIOS DE BELEZA"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"/users",children:"PARA VOC\xca"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"/duvidas",children:"PERGUNTAS"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(r.default,{href:"#contato",children:"CONTATO"})})]})})]})}),(0,s.jsxs)("div",{className:"container-fluid navbar d-lg-none",children:[(0,s.jsx)(r.default,{className:"navbar-brand",href:"/",children:(0,s.jsx)("img",{src:"/logos/logoMenu.png",width:"158px",alt:"Lyndus - O incentivo que faz bem!"})}),(0,s.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false",children:"MENU"}),(0,s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenu",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/",children:"HOME"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/clients",children:"PARA EMPRESAS"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/beautyspots",children:"PARA NEG\xd3CIOS DE BELEZA"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/users",children:"PARA VOC\xca"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/duvidas",children:"PERGUNTAS"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"#contato",children:"CONTATO"})})]})]})]})}},2275:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var s=n(5893),r=n(9318),l=n(7294);function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,s=new Array(a);n<a;n++)s[n]=e[n];return s}function t(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,r,l=[],i=!0,t=!1;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(l.push(s.value),!a||l.length!==a);i=!0);}catch(o){t=!0,r=o}finally{try{i||null==n.return||n.return()}finally{if(t)throw r}}return l}}(e,a)||c(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,a){if(e){if("string"===typeof e)return i(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,a):void 0}}var d=function(){var e,a=t(l.useState("AC"),2),n=a[0],r=a[1],i=t(l.useState([]),2),c=i[0],d=i[1],u=t(l.useState(""),2),m=u[0],h=u[1],f=t(l.useState([]),2),x=f[0],j=f[1];l.useEffect((function(){!function(){var e="https://servicodados.ibge.gov.br/";fetch(e+="api/v1/localidades/estados").then((function(e){return e.json()})).then((function(e){e.sort((function(e,a){return e.nome.localeCompare(a.nome)})),d(o(e))}))}()}),[]),l.useEffect((function(){n&&function(e){var a="https://servicodados.ibge.gov.br/api/v1/";a+="localidades/estados/".concat(e,"/municipios"),fetch(a).then((function(e){return e.json()})).then((function(e){e.sort((function(e,a){return e.nome.localeCompare(a.nome)})),j(o(e))}))}(n)}),[n]);var p=null===(e=c.filter((function(e){return e.id==n?e.sigla:null}))[0])||void 0===e?void 0:e.sigla,v=t(l.useState(!1),2),b=v[0],g=v[1],N=function(){return g(!0)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"container-fluid backClients borderBottomRightRadius",children:(0,s.jsx)("div",{className:"container clients1",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Clients Lyndus"}),(0,s.jsx)("br",{}),"para empresas"]})})})})}),(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsx)("div",{className:"container clients2",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("b",{children:"Lyndus"})," traz de forma inovadora benef\xedcios que proporcionam bem-estar",(0,s.jsx)("br",{}),"e confian\xe7a aos colaboradores da sua empresa."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Por meio de um ",(0,s.jsx)("b",{children:"plano de benef\xedcios"}),", os colaboradores recebem incentivo",(0,s.jsx)("br",{}),"para servi\xe7os em sal\xf5es, barbearias, cl\xednicas de est\xe9tica, spas e centros de bem-estar."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["De forma simples, por meio do app ",(0,s.jsx)("b",{children:"Lyndus"}),", eles utilizam esses servi\xe7os sem preocupa\xe7\xe3o."]})]})})})}),(0,s.jsx)("div",{className:"container-fluid borderTopLeftRadius backColorLilac",children:(0,s.jsx)("div",{className:"container clients3",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)("p",{children:"E sua empresa tamb\xe9m se beneficia, conquistando:"}),(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Produtividade, com pessoas mais satisfeitas;"}),(0,s.jsx)("li",{children:"Controle e gest\xe3o do sistema;"}),(0,s.jsx)("li",{children:"Flexibilidade na forma de recompensa, podendo alterar o valor ou incentivar por meio de campanhas (sazonal);"}),(0,s.jsx)("li",{children:"Reconhecimento \xe0 gest\xe3o e ao RH;"}),(0,s.jsx)("li",{children:"Engajamento e motiva\xe7\xe3o;"}),(0,s.jsx)("li",{children:"Mais auto-estima, equil\xedbrio e bem-estar para todos;"}),(0,s.jsx)("li",{children:"Gente bonita, confiante e feliz."})]})]})})})}),(0,s.jsxs)("div",{className:"backColorPurple",children:[(0,s.jsx)("div",{className:"container-fluid backTotem borderBottomRightRadius d-none d-lg-block",children:(0,s.jsx)("div",{className:"container clients4",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col d-none d-lg-block"}),(0,s.jsxs)("div",{className:"col d-none d-lg-block",children:[(0,s.jsx)("p",{children:"Aumente o reconhecimento de sua empresa como um excelente lugar para trabalhar."}),(0,s.jsx)("span",{children:"#VenhaSerLyndus"})]})]})})}),(0,s.jsx)("div",{className:"container-fluid backTotemMobile borderBottomRightRadius d-lg-none"})]}),(0,s.jsx)("div",{className:"container-fluid backColorPurple",children:(0,s.jsx)("div",{id:"contato",className:"container clients5",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col",children:[(0,s.jsxs)("p",{children:["Quer saber mais sobre a ",(0,s.jsx)("b",{children:"Lyndus"}),"?"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Gostaria que a sua empresa tivesse um plano ",(0,s.jsx)("b",{children:"Lyndus"}),"? Diga onde trabalha e n\xf3s entraremos em contato com ela."]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{children:"Envie sua mensagem."})})]}),(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("form",{id:"form",className:"miniForm",children:[(0,s.jsx)("input",{type:"hidden",value:"Contato do site | CLIENTS",id:"assunto"}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"nome",placeholder:"Nome Completo",required:!0}),(0,s.jsx)("label",{htmlFor:"nome",children:"Seu Nome"})]}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"nome@email.com",required:!0}),(0,s.jsx)("label",{htmlFor:"email",children:"Seu Email"})]}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"empresa",placeholder:"Empresa",required:!0}),(0,s.jsx)("label",{htmlFor:"empresa",children:"Empresa que trabalha"})]}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsxs)("select",{className:"form-select",id:"estado","aria-label":"Floating label select",value:n,onChange:function(e){return r(e.target.value)},required:!0,children:[(0,s.jsx)("option",{value:"0",children:"Selecione"},"0"),c.map((function(e,a){return(0,s.jsxs)("option",{value:e.id,children:[e.sigla," - ",e.nome]},a)}))]}),(0,s.jsx)("label",{htmlFor:"estado",children:"Estado"})]}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsxs)("select",{className:"form-select",id:"cidade","aria-label":"Floating label select",value:m,onChange:function(e){return h(e.target.value)},required:!0,children:[(0,s.jsx)("option",{value:"0",children:"Selecione"},"0"),x.map((function(e,a){return(0,s.jsx)("option",{value:e.sigla,children:e.nome},a)}))]}),(0,s.jsx)("label",{htmlFor:"cidade",children:"Cidade"})]}),(0,s.jsxs)("div",{className:"form-floating",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"pergunta",placeholder:"Pergunta"}),(0,s.jsx)("label",{htmlFor:"empresa",children:"Escreva aqui sua pergunta ou sua sugest\xe3o"})]}),(0,s.jsx)("button",{onClick:function(){document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault(),N();var a=document.getElementById("assunto").value,n=document.getElementById("nome").value,s=document.getElementById("email").value,r=document.getElementById("empresa").value,l=document.getElementById("pergunta").value,i=document.getElementById("cidade").value,t=p;fetch("api/post/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({assunto:a,nome:n,email:s,empresa:r,cidade:i,estado:t,pergunta:l})})}))},className:"btn",children:"ENVIAR"}),(0,s.jsx)("div",{className:"form-floating",children:b?(0,s.jsx)("p",{id:"success",children:"Mensagem enviada, agora \xe9 s\xf3 aguardar o nosso contato."}):null})]})})]})})})]})},u=n(3193);var m=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(d,{}),(0,s.jsx)(u.Z,{})]})}}},function(e){e.O(0,[193,774,888,179],(function(){return a=2957,e(e.s=a);var a}));var a=e.O();_N_E=a}]);