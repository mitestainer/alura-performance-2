function toggleSearch(e){body.classList.toggle("header-barraBusca-visivel"),navegacaoForm.classList.toggle("navegacao-form-active"),e.preventDefault()}function closeSearch(){body.classList.remove("header-barraBusca-visivel"),navegacaoForm.classList.remove("navegacao-form-active")}function cancelPropagation(e){e.stopPropagation()}function setupCloseSearch(){setTimeout(function(){document.documentElement.addEventListener("click",closeSearch),document.querySelector(".header-navegacao").addEventListener("click",cancelPropagation),document.querySelector(".header-barraBusca").addEventListener("click",cancelPropagation)},0),botaoBusca.removeEventListener("click",setupCloseSearch)}function suportaTransform(){var e=document.createElement("div");return void 0!==e.style.transform||void 0!==e.style.WebkitTransform}function cadastraNewsletter(){valida()&&chamaAPI(inputEmail.value,function(){location.href="cadastrado.html"})}function valida(){var e=!0;return e=validaEmail(inputEmail.value),e||(inputEmail.classList.add("form-erro"),newsletterButton.classList.add("form-erro")),e}function validaEmail(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}function chamaAPI(e,t){console.log("Email cadatrado com sucesso na newsletter",e),setTimeout(t,500)}var titulo=document.querySelector(".header-menu-titulo"),menu=document.querySelector(".header-menu");titulo&&(titulo.onclick=function(){menu.hasAttribute("data-ativo")?menu.removeAttribute("data-ativo"):menu.setAttribute("data-ativo","")});var botaoBusca=document.querySelector(".header-busca"),body=document.body,navegacaoForm=document.querySelector(".header-navegacao-form");botaoBusca&&"classList"in document.documentElement&&(botaoBusca.addEventListener("click",toggleSearch),botaoBusca.addEventListener("click",setupCloseSearch)),suportaTransform()||(document.documentElement.className+=" no-transform");var newsletterButton=document.querySelector(".footer-newsletter-button"),inputEmail=document.querySelector(".footer-newsletter-input");newsletterButton&&(newsletterButton.onclick=cadastraNewsletter),!function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t){if(t){var a=document.createDocumentFragment(),o=!e.getAttribute("viewBox")&&t.getAttribute("viewBox");o&&e.setAttribute("viewBox",o);for(var n=t.cloneNode(!0);n.childNodes.length;)a.appendChild(n.firstChild);e.appendChild(a)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var a=t._cachedDocument;a||(a=t._cachedDocument=document.implementation.createHTMLDocument(""),a.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(o){var n=t._cachedTarget[o.id];n||(n=t._cachedTarget[o.id]=a.getElementById(o.id)),e(o.svg,n)})}},t.onreadystatechange()}function a(a){function o(){for(var a=0;a<l.length;){var c=l[a],i=c.parentNode;if(i&&/svg/i.test(i.nodeName)){var s=c.getAttribute("xlink:href");if(n&&(!r.validate||r.validate(s,i,c))){i.removeChild(c);var m=s.split("#"),v=m.shift(),f=m.join("#");if(v.length){var g=u[v];g||(g=u[v]=new XMLHttpRequest,g.open("GET",v),g.send(),g._embeds=[]),g._embeds.push({svg:i,id:f}),t(g)}else e(i,document.getElementById(f))}}else++a}d(o,67)}var n,r=Object(a),c=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,s=/\bEdge\/12\.(\d+)\b/;n="polyfill"in r?r.polyfill:c.test(navigator.userAgent)||(navigator.userAgent.match(s)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537;var u={},d=window.requestAnimationFrame||setTimeout,l=document.getElementsByTagName("use");n&&o()}return a}),svg4everybody();