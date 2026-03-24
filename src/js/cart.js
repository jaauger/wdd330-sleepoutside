import { getLocalStorage, setLocalStorage, updateCartCount } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (!cartItems || cartItems.length === 0) {
    console.log("Your Cart is Empty");
    document.querySelector(".product-list-cart").innerHTML = "Your Cart is Empty";
    renderCartTotal([]);
  } else {
    console.log("You have " + cartItems.length + " Items in Your Cart")
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list-cart").innerHTML = htmlItems.join("");
    addRemoveListeners();
    renderCartTotal(cartItems);
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <button class="cart-card__remove" type="button" data-id="${item.Id}" aria-label="Remove ${item.Name} from cart">X</button>
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + item.FinalPrice * (item.quantity || 1);
  }, 0);
}

function renderCartTotal(cartItems) {
  const footer = document.querySelector(".cart-footer");
  const totalElement = document.querySelector(".cart-totals");

  if (!cartItems || cartItems.length === 0) {
    footer.classList.add("hide");
    return;
  }

  const total = calculateCartTotal(cartItems);

  footer.classList.remove("hide");
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function addRemoveListeners() {
  document.querySelectorAll(".cart-card__remove").forEach((button) => {
    button.addEventListener("click", handleRemoveItem);
  });
}

function handleRemoveItem(event) {
  const id = event.currentTarget.dataset.id;
  if (!id) return;
  const cartItems = getLocalStorage("so-cart") || [];
  const updatedItems = cartItems.filter((item) => item.Id !== id);
  setLocalStorage("so-cart", updatedItems);
  renderCartContents();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartContents();
});
