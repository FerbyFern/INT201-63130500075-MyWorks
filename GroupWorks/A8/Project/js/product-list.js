import { products } from "./products.js";
import { cart } from "./cart.js";

const productContainer = document.querySelector("#product-container");

productContainer.style.cssText = `margin : 30px;`;

productContainer.firstElementChild.style.cssText = `font-size : 36px;`;

const productElement = document.querySelector("#products");
productElement.setAttribute(
  "class", "d-flex flex-wrap justify-content-center"
);

function listProduct(){
for (const product of products) {
  const productList = document.createElement("div");
  productList.setAttribute("id", product.productId);
  productList.setAttribute("class", "card shadow-sm mb-4");
  productList.setAttribute(
    "style",
    "margin : 5px; padding : 50px; width : 20rem;"
  );

  let productImg = document.createElement("img");
  productImg.setAttribute("src", product.imgProduct);
  productImg.setAttribute("class", "card-img-top");
  productImg.setAttribute(
    "style",
    "width: 100%; height: 15rem; margin-bottom: 50px"
  );
  productList.appendChild(productImg);

  let detailProduct = document.createElement("div");
  detailProduct.setAttribute("id","detail-product");
  detailProduct.setAttribute("class","card-body d-flex flex-column");
  detailProduct.setAttribute("id","detail-product");



  let productId = document.createElement("p");
  productId.textContent = product.productId;
  detailProduct.appendChild(productId);

  let productName = document.createElement("p");
  productName.setAttribute("id", "product-name");
  productName.setAttribute("style", "font-weight : bold;");
  productName.textContent = product.name;
  detailProduct.appendChild(productName);

  let productPrice = document.createElement("p");
  productPrice.textContent = `฿ ${product.price} Baht`;
  detailProduct.appendChild(productPrice);

  let productStock = document.createElement("p");
  productStock.setAttribute("id", "product-stock");
  productStock.textContent = `Available : ${product.stock}`;
  detailProduct.appendChild(productStock);


  let divBuyButton = document.createElement("div");
  divBuyButton.setAttribute("id","buy-container");
  divBuyButton.setAttribute("class","mt-auto");


  let buyButton = document.createElement("button");
  buyButton.setAttribute("id", product.productId);
  buyButton.setAttribute("type", "button");
  buyButton.setAttribute("class", "btn btn-primary btn-lg btn-block");
  buyButton.addEventListener("click", cart.addProduct);
  buyButton.addEventListener("click", () => {
    cart.countInCart();
    numCart.textContent = cart.countInCart();
  });

  buyButton.textContent = "Add to cart";

divBuyButton.appendChild(buyButton);

productList.appendChild(detailProduct);
productList.appendChild(divBuyButton);

  productElement.appendChild(productList);
}
}

listProduct();

