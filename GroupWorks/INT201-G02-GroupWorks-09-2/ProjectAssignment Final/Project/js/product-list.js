import { products } from "./products.js"; //import สินค้าทั้งจาก product
import { cart } from "./cart.js";

const productContainer = document.querySelector("#product-container"); //เข้าถึง product-container ใน html
const productElement = document.querySelector("#products"); //เข้าถึง products ใน html
productElement.setAttribute('class','d-flex flex-wrap justify-content-center') //เพิ่ม attribute class ในการกำหนด css โดยใช้ bootstrap
//<div id = "products" class = "d-flex flex-wrap justify-content-center"></div>
//ใช้ flex จัดเรียง element ต่างๆ ที่อยู่ใน container
//flex wrap คือการกำหนดให้ flex item มีการดันลงมาด้านล่างตามขนาดของ flex container โดยมีการจัดเรียง Flex Item จากบนลงล่าง
//justify-content-center จัดให้ข้อมูลอยู่ตรงกลาง

function listProduct(){
  for (const product of products) {
    const productList = document.createElement("div"); //สร้าง element div ใน products
    productList.setAttribute("id", product.productId); //เพิ่ม attribute id ในการกำหนด id แต่ละสินค้าใน div
    productList.setAttribute("class", "card mx-3 my-3 p-5" );  //เพิ่ม attribute class จัดรูปแบบเป็นแบบ card-product โดยใช้ boot-strap
    productList.setAttribute('style','width: 20rem;') //เพิ่ม attribute stlye ตกแต่ง css 
    //Create Image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.imgProduct);
    productImg.setAttribute("class", "card-img-top ");
    productImg.setAttribute(
      "style",
      "width: 100%; height: 15rem; margin-bottom: 50px; border-radius: 10px"
    );
    productList.appendChild(productImg);

    const detailProduct = document.createElement("div");
    detailProduct.setAttribute("id","detail-product");
    detailProduct.setAttribute("class","card-body d-flex flex-column");
    detailProduct.setAttribute("id","detail-product");

    const productId = document.createElement("p");
    productId.textContent = product.productId;
    detailProduct.appendChild(productId);

    const productName = document.createElement("p");
    productName.setAttribute("id", "product-name");
    productName.setAttribute("style", "font-weight : bold;");
    productName.textContent = product.name;
    detailProduct.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `฿ ${product.price} Baht`;
    detailProduct.appendChild(productPrice);

    const productStock = document.createElement("p");
    productStock.setAttribute("id", "product-stock");
    productStock.textContent = `Available : ${product.stock}`;
    detailProduct.appendChild(productStock);

    const divBuyButton = document.createElement("div");
    divBuyButton.setAttribute("id","buy-container");
    divBuyButton.setAttribute("class","mt-auto");
    
    //Create Button
    const buyButton = document.createElement("button");
    buyButton.setAttribute("id", product.productId);
    buyButton.setAttribute("type", "button");
    buyButton.setAttribute("class", "btn btn-primary btn-lg btn-block");
    buyButton.setAttribute("style", "border-radius: 10px");
    
    buyButton.addEventListener("click", cart.addProduct);
    buyButton.textContent = "Add to cart";

  divBuyButton.appendChild(buyButton);

  productList.appendChild(detailProduct);
  productList.appendChild(divBuyButton);

    productElement.appendChild(productList);
  }
}

listProduct();