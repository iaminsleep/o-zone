(()=>{"use strict";async function t(){const t=await fetch("https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/goods.json");return await t.json()}const e=t=>{const e=$(".goods");localStorage.setItem("goods",JSON.stringify(t)),e.html(""),$.each(t,(function(){e.append(`\n      <div class="col-12 col-md-6 col-lg-4 col-xl-3">\n        <div class="card" data-id="${this.id}">\n          ${this.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top" style=" background-image: url('${this.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${this.price}</div>\n            <h5 class="card-title">${this.title}</h5>\n            <button class="btn btn-primary">В корзину</button>\n          </div>\n        </div>\n      </div>\n    `)}))},a=t=>{const e=$(".cart-wrapper");e.html(""),0===t.length?e.append('\n      <div id="cart-empty">Ваша корзина пока пуста</div>\n    '):$.each(t,(function(){e.append(`\n        <div class="card" data-id="${this.id}">\n          ${this.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top" style=" background-image: url('${this.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${this.price}</div>\n            <h5 class="card-title">${this.title}</h5>\n            <button class="btn btn-primary">Удалить</button>\n          </div>\n        </div>\n    `)}))},c=$(".goods"),n=$(".cart-wrapper"),s=(t,e,a)=>t.filter((t=>""===e&&""===a?t:""!==e&&""!==a?t.price>=+e&&t.price<=+a:""!==e&&""===a?t.price>=+e:""===e&&""!==a?t.price<=+a:void 0)),o=(t,e)=>t.filter((t=>e?!0===t.sale:t)),i=()=>{document.querySelector(".search-wrapper_input").oninput=function(a){const c=a.target.value;t().then((t=>{e(((t,e)=>t.filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))))(t,c))}))}},r=()=>{const a=$(".catalog-button > button"),c=$(".catalog"),n=$(".catalog li");a.click((()=>{c.toggleClass("catalog-open")})),n.each((function(){$(this).click((()=>{t().then((t=>{var a,c;console.log($(this).text()),e((a=t,c=$(this).text(),a.filter((t=>t.category===c))))}))}))}));const i=document.querySelector("#min"),r=document.querySelector("#max"),l=$("#discount-checkbox"),d=$(".filter-check_checkmark");function p(a,c){t().then((t=>{e(s(o(t,d.hasClass("checked")),a,c))}))}i.value="",r.value="",i.oninput=()=>{p(i.value,r.value)},r.oninput=()=>{p(i.value,r.value)},l.change((function(){d.toggleClass("checked"),t().then((t=>{e(s(o(t,d.hasClass("checked")),i.value,r.value))}))}))};$(document).ready((function(){(function(){const t=$("#cart"),e=$(".cart"),s=$(".cart-close"),o=$(".cart-total > span"),i=$(".cart-confirm"),r=$("#cart > .counter"),l=()=>{if(e.toggleClass("cart-open"),e.hasClass("cart-open")){const t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];a(t),o.text(t.reduce(((t,e)=>t+e.price),0))}},d=(t,e)=>{if(t.hasClass("btn-primary")){const c=t.closest(".card").data("id"),n=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];if("add"===e){const t=JSON.parse(localStorage.getItem("goods")).find((t=>t.id===+c));n.push(t),r.text(+parseInt(r.text())+1)}else if("remove"===e){const t=n.findIndex((t=>t.id===+c));n.splice(t,1),o.text(n.reduce(((t,e)=>t+e.price),0)),a(n),r.text(+parseInt(r.text())-1)}localStorage.setItem("cart",JSON.stringify(n))}};t.click(l),s.click(l),c.click((function(t){d($(t.target),"add")})),n.click((function(t){d($(t.target),"remove")})),i.click((function(t){(async function(t){const e=await fetch("https://o-zone-fbe01-default-rtdb.europe-west1.firebasedatabase.app/userorder.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}});return await e.json()})(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]).then((()=>{localStorage.removeItem("cart"),a([]),o.text(0)}))}))})(),t().then((t=>{e(t)})),i(),i(),r()}))})();