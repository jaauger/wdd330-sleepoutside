import CheckoutProcess from "./checkoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();

  const checkout = new CheckoutProcess("so-cart", ".order__summary");

  checkout.init();
  checkout.calculateOrderTotal();

  document.forms["checkout"].addEventListener("submit", function (e) {
    e.preventDefault();
    checkout.checkout();
  });
}

init();