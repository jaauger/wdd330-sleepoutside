import{g as c,s as l,u as d}from"./ProductList-HNyLXOAk.js";function n(){const t=c("so-cart");if(!t||t.length===0)console.log("Your Cart is Empty"),document.querySelector(".product-list-cart").innerHTML="Your Cart is Empty",o([]);else{console.log("You have "+t.length+" Items in Your Cart");const e=t.map(a=>u(a));document.querySelector(".product-list-cart").innerHTML=e.join(""),m(),o(t)}}function u(t){return`<li class="cart-card divider">
  <button class="cart-card__remove" type="button" data-id="${t.Id}" aria-label="Remove ${t.Name} from cart">X</button>
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${t.quantity}</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`}function i(t){return t.reduce((e,a)=>e+a.FinalPrice*(a.quantity||1),0)}function o(t){const e=document.querySelector(".cart-footer"),a=document.querySelector(".cart-totals");if(!t||t.length===0){e.classList.add("hide");return}const r=i(t);e.classList.remove("hide"),a.textContent=`Total: $${r.toFixed(2)}`}function m(){document.querySelectorAll(".cart-card__remove").forEach(t=>{t.addEventListener("click",f)})}function f(t){const e=t.currentTarget.dataset.id;if(!e)return;const r=(c("so-cart")||[]).filter(s=>s.Id!==e);l("so-cart",r),n(),d()}document.addEventListener("DOMContentLoaded",()=>{n()});
