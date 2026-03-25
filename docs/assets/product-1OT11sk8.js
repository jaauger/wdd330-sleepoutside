import{g as n,s as a,u as i,a as s,E as u}from"./ProductList-CjEna-l-.js";import"./main-BD82fIO2.js";class p{constructor(e,o){this.productId=e,this.product={},this.dataSource=o}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addProductToCart.bind(this))}addProductToCart(){let e=n("so-cart")||[];const o=e.find(t=>t.Id===this.product.Id);if(o)o.quantity=(o.quantity||1)+1;else{const t={...this.product,quantity:1};e.push(t)}a("so-cart",e),i()}renderProductDetails(){document.querySelector("h2").textContent=this.product.Brand.Name,document.querySelector("h3").textContent=this.product.NameWithoutBrand;const e=document.getElementById("productImage");e.src=this.product.Images.PrimaryLarge,e.alt=this.product.NameWithoutBrand;const o=document.getElementById("productPrice"),t=this.product.SuggestedRetailPrice,r=this.product.FinalPrice;if(t&&t>r){const d=t-r,c=Math.round(d/t*100);o.innerHTML=`
        <div class="container_price">
          <span>$${r.toFixed(2)}</span>
          <span class="discount__price">${c}% OFF</span>
        </div>
        <div>
          <span style="text-decoration: line-through; color: #888;">
            $${t.toFixed(2)}
          </span>
          <span style="color: var(--tertiary-color); margin-left: 10px;">
            Save $${d.toFixed(2)}
          </span>
        </div>
      `}else o.textContent=`$${r.toFixed(2)}`;document.getElementById("productColor").textContent=this.product.Colors[0].ColorName,document.getElementById("productDesc").innerHTML=this.product.DescriptionHtmlSimple,document.getElementById("addToCart").dataset.id=this.product.Id}}const l=new u,m=s("product"),h=new p(m,l);h.init();
