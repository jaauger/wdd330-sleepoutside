import{g as r,s,u as l}from"./ProductList-DD7C0efa.js";import"./main-DbrKXUYa.js";function c(){const t=r("so-cart");if(!t||t.length===0)console.log("Your Cart is Empty"),document.querySelector(".product-list-cart").innerHTML="Your Cart is Empty";else{console.log("You have "+t.length+" Items in Your Cart");const e=t.map(a=>d(a));document.querySelector(".product-list-cart").innerHTML=e.join(""),i()}}function d(t){return`<li class="cart-card divider">
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
</li>`}function i(){document.querySelectorAll(".cart-card__remove").forEach(t=>{t.addEventListener("click",m)})}function m(t){const e=t.currentTarget.dataset.id;if(!e)return;const o=(r("so-cart")||[]).filter(n=>n.Id!==e);s("so-cart",o),c(),l()}document.addEventListener("DOMContentLoaded",()=>{c()});
