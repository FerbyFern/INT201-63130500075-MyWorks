import { products } from "./products.js";
import { CookieUtil } from "./cookie.js";

//*ปรับ cart object เป็นรูปแบบ property function เพื่อทำให้ฟังก์ชั่นสามารถใช้กับ cart object ได้เท่านั้น
export let cart = {
  items: [],
  addProduct: function (event) {
    let id = event.target.id; //ส่ง event ไปที่ id ของปุ่ม Add to cart
    let getUser = CookieUtil.getCookie("Username"); //เรียก cookie Username เพื่อตรวจสอบว่ามี การ login หรือไม่ ถ้าไม่จะไม่สามารถ add สินค้าได้
    const product = products.find((product) => product.productId === id);
    if (getUser) {
      let checkItem = cart.items.find((item) => item.productId === id); //ใช้ find ในการหาสินค้าในตะกร้า
      if (checkItem) {
        //checkItem.numberOfUnits++; //ถ้าหากว่าตะกร้ามีสินค้าชิ้นนั้นอยู่แล้วให้เพิ่มแค่จำนวนสินค้า
        console.log(cart.items);
        cart.saveCart();
        if (checkItem.numberOfUnits >= product.stock) {
          checkItem.numberOfUnits = checkItem.numberOfUnits;
          alert(
            "You cannot add the product more than the number in the stock."
          );
        } else {
          checkItem.numberOfUnits++;
          cart.saveCart();
        }
      } else {
        //ถ้าหากว่าไม่มีให้เพิ่มสินค้าชิ้นใหม่
        cart.items.push({
          productId: product.productId,
          price: product.price,
          numberOfUnits: 1,
        }); //*แก้ไขการเก็บ product เก็บแค่ property ที่สำคัญ productId
        alert(` " ${id} " added in your cart`);
        console.log(cart.items);
        cart.saveCart();
      }
     numCart.textContent = cart.countInCart();
    } else {
      alert("Login before buy something"); //ถ้าไม่มี username จะ alert ให้ login ก่อน
    }
  },

  totalPrice: function(){
    return cart.items.reduce(
      (count, cartItem) => count + cartItem.price * cartItem.numberOfUnits,
      0
    );
    
  },
  emptyCart: function () {
    cart.items = [];
    alert("Your cart is empty!");
    console.log(this.items);
    localStorage.removeItem("shoppingCart");
    numCart.textContent = cart.countInCart();
  },
  countInCart: function () {
    return cart.items.reduce(
      (count, cartItem) => count + cartItem.numberOfUnits,
      0
    );
  },
  showCart: function () {
    let total = 0;
    if (cart.items.length === 0) {
      alert("Your cart is empty");
    } else {
      let alertProduct = "";
      for (let item of cart.items) {
        alertProduct += "Product Id : " + item.productId + "  ";
        alertProduct += "Price each : " + item.price + "  ";
        alertProduct += "Unit : " + item.numberOfUnits + "\n";
        alertProduct += "Total : " + item.price * item.numberOfUnits + "\n";
      }
      alert(
        "This is your products in cart.\n" +
          alertProduct +
          "\n" +
          `Total price : ${cart.totalPrice()}`
      );
        console.log(total);
      console.log(cart.items.length);
    }
  },
  saveCart: function () {
    //function ในการจดจำข้อมูลสินค้าที่เพิ่มเข้าไปโดยใช้ local storage
    localStorage.setItem("shoppingCart", JSON.stringify(cart.items));
  },
  loadCart: function () {
    //function ในการ load ตะกร้าสินค้าที่ผู้ใช้เคยเพิ่มไป เมื่อเปิดใหม่ข้อมูลจะยังคงอยู่
    let cartLoad = localStorage.getItem("shoppingCart"); 
    cart.items = cartLoad ? JSON.parse(cartLoad) : [];
    numCart.textContent = cartLoad ? cart.countInCart() : 0;
  },
 
};

const buttonTrash = document.getElementById("button-trash");
const numCart = document.getElementById("numCart");
const lookProductInCart = document.getElementById("cart-icon");

buttonTrash.addEventListener("click", () => {
  cart.emptyCart();
});

lookProductInCart.addEventListener("click", () => {
  cart.showCart();
});

cart.loadCart();

