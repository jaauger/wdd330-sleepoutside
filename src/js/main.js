
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { updateCartCount } from "./utils.mjs";

const dataSource = new ExternalServices("tents");
const productListing = document.querySelector(".product-list");

if (productListing) {
  const myList = new ProductList("tents", dataSource, productListing);
  myList.init();
}

async function init() {
  await loadHeaderFooter();
  updateCartCount();
}

init();
