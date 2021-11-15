import { products } from "./products.js";

export let cart = {
  items: [],
  addProduct: function (event) {
    let id = event.target.id; //ส่ง event ไปที่ id ของปุ่ม Add to cart
    let checkItem = cart.items.find((item) => item.product.productId === id); //ใช้ find ในการหาสินค้าในตะกร้า

    if (checkItem) {
      checkItem.numberOfUnits++; //ถ้าหากว่าตะกร้ามีสินค้าชิ้นนั้นอยู่แล้วให้เพิ่มแค่จำนวนสินค้า
      console.log(cart.items);
      cart.saveCart();
    } else {
      //ถ้าหากว่าไม่มีให้เพิ่มสินค้าชิ้นใหม่
      const product = products.find((product) => product.productId === id);
      cart.items.push({ product, numberOfUnits: 1 });
      alert(` " ${id} " added in your cart`);
      console.log(cart.items);
     cart.saveCart();
    }
    cart.countInCart();
     localStorage.setItem("InCarts", cart.countInCart());
  
  },
  emptyCart: function () {
    let cartEmpty = [];
    cart.items = cartEmpty;
    alert("Your cart is empty!");
    console.log(this.items);
    localStorage.clear();
    cart.saveCart();
  },
  countInCart: function () {
    return cart.items.reduce(
      (count, cartItem) => count + cartItem.numberOfUnits,
      0
    );
  },
  showCart: function () {
    if (cart.items.length === 0) {
      alert("Your cart is empty");
    } else {
      let alertProduct = "";

      for (let readArr of cart.items) {
        alertProduct += "  " + readArr.product.productId + "  ";
        alertProduct += readArr.product.name + "  ";
        alertProduct += "Unit : " + readArr.numberOfUnits + "\n";
      }

      alert("This is your products in cart.\n" + alertProduct);

      console.log(cart.items.length);
    }
  },
  saveCart: function () { //function ในการจดจำข้อมูลสินค้าที่เพิ่มเข้าไปโดยใช้ local storage
    localStorage.setItem("shoppingCart", JSON.stringify(cart.items));
  },
  loadCart: function () { //function ในการ load ตะกร้าสินค้าที่ผู้ใช้เคยเพิ่มไป เมื่อเปิดใหม่ข้อมูลจะยังคงอยู่
    let cartLoad = localStorage.getItem("shoppingCart");
    let Incart = localStorage.getItem("InCarts");
    cart.items = cartLoad ? JSON.parse(cartLoad) : [];
    numCart.textContent = Incart ? Incart : 0;
  },
};

let buttonTrash = document.getElementById("button-trash");
let numCart = document.getElementById("numCart");
let lookProductInCart = document.getElementById("cart-icon");

buttonTrash.addEventListener("click", () => {
  cart.emptyCart();
  numCart.textContent = cart.countInCart();
});

lookProductInCart.addEventListener("click", () => {
  cart.showCart();
});

document.addEventListener('DOMContentLoaded', () => {
  cart.loadCart();
})