import { products } from "./products.js";
import { emptyCart, addProduct } from "./cart.js";
let carts = [];

const productContainer = document.querySelector("#product-container");

productContainer.style.cssText = `margin : 50px;`;

productContainer.firstElementChild.style.cssText = `font-size : 42px;`;

const productElement = document.querySelector("#products");
productElement.setAttribute(
  "class",
  "d-flex flex-wrap justify-content-center "
);

for (const product of products) {
  const productList = document.createElement("div");
  productList.setAttribute("id", product.productId);
  productList.setAttribute("class", "card card-product");
  productList.setAttribute(
    "style",
    "margin : 5px; padding : 50px; width : 30rem;"
  );

  let productImg = document.createElement("img");
  productImg.setAttribute("src", product.imgProduct);
  productImg.setAttribute(
    "style",
    "width: 100%; height: 25rem; margin-bottom: 50px"
  );
  productList.appendChild(productImg);

  let productId = document.createElement("p");
  productId.textContent = product.productId;
  productList.appendChild(productId);

  let productName = document.createElement("p");
  productName.setAttribute("id", "product-name");
  productName.setAttribute("style", "font-weight : bold;");
  productName.textContent = product.name;
  productList.appendChild(productName);

  let productPrice = document.createElement("p");
  productPrice.textContent = `฿ ${product.price} Baht`;
  productList.appendChild(productPrice);

  let productStock = document.createElement("p");
  productStock.setAttribute("id", "product-stock");
  productStock.textContent = `Available : ${product.stock}`;
  productList.appendChild(productStock);

  let buyButton = document.createElement("button");
  buyButton.setAttribute("id", product.productId);
  buyButton.setAttribute("type", "button");
  buyButton.setAttribute("class", "btn btn-primary btn-lg");
  buyButton.addEventListener("click", addProduct);

  buyButton.textContent = "Add to cart";

  productList.appendChild(buyButton);

  productElement.appendChild(productList);
}

const buttonSearch = document.getElementById("button-search");
buttonSearch.addEventListener("click", () => {
  showHideSearch();
});

//function แสดง/ซ่อน search-panel
function showHideSearch() {
  const s = document.getElementById("search-bar");
  if (s.style.display === "none") {
    s.style.display = "flex";
  } else {
    s.style.display = "none";
  }
}

//function ค้นหาสินค้า
function searchProduct() {
  let searchProduct = document.getElementById("search").value.toLowerCase(); //ช่อง search ที่เป็น input ให้ค่าเป็น .toLowerCase()
  let filterProductByName = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct)
  );
  //ใช้ filter ในการกรองเฉพาะชื่อสินค้าที่ต้องการโดยใช้ include เช็คค่าที่เราพิมพ์เข้าไป return เป็น true false

  let divProduct = productElement.children; //เรียก children ใน element ของ product ทั้งหมดเก็บไว้ใน divProduct เพื่อเข้าถึงสินค้าทั้งหมดและทำการเปลี่ยนค่า style

  if (filterProductByName.length == 0) {
    // ใช้ if-else ตรวจสอบ ค่าที่พิมพ์เข้าไปถ้าไม่ตรงกับสินค้าตัวไหนเลยให้แสดงเป็น style.display เป็น none
    for (const i of divProduct) {
      i.style.display = "none";
    }
  } else {
    //ถ้าค่าที่พิมพ์เข้าไปตรงกับสินค้า ใช้ for-loop ในการวนตรวจเช็คชื่อที่กรองและชื่อของ product ถ้าหากว่ามีอันที่ตรงตามเงื่อนไขให้แสดงขึ้นมา ถ้าไม่ตรงให้ซ่อนไว้
    for (const i of divProduct) {
      for (const j of filterProductByName) {
        if (i.id == j.productId) {
          i.style.display = "flex";
          break;
        } else {
          i.style.display = "none";
        }
      }
    }
  }
}

//ปุ่ม submit กดยืนยันการค้นหา
let buttonSubmit = document.getElementById("button-submit");
buttonSubmit.addEventListener("click", () => {
  searchProduct();
});
