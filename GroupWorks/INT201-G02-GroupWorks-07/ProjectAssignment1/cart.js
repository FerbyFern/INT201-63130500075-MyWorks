import { products } from "./products.js";

let carts = [];

const buttonTrash = document.getElementById("button-trash");
const numCart = document.getElementById("numCart");
const lookProductInCart = document.getElementById("cart-icon");

//function เพิ่มสินค้า

export function addProduct(event) {
  let id = event.target.id; //ส่ง event ไปที่ id ของปุ่ม Add to cart
  let checkItem = carts.find((item) => item.product.productId === id); //ใช้ find ในการหาสินค้าในตะกร้า
  if (checkItem){ 
    checkItem.numberOfUnits++; //ถ้าหากว่าตะกร้ามีสินค้าชิ้นนั้นอยู่แล้วให้เพิ่มแค่จำนวนสินค้า
    console.log(carts);
  } else { 
    //ถ้าหากว่าไม่มีให้เพิ่มสินค้าชิ้นใหม่
    const product = products.find((product) => product.productId === id);
    carts.push({ product, numberOfUnits: 1 });
    alert(` " ${id} " added in your cart`);
    console.log(carts);
  }
  numCart.textContent = countInCart();
}

//function ลบสินค้าในตะกร้าทั้งหมด
export function emptyCart() {
  let cartEmpty = [];
  carts = cartEmpty;
  numCart.textContent = carts.length;
  alert("Your cart is empty!");
  console.log(carts);
}

buttonTrash.addEventListener("click", () => {
  emptyCart();
});


//function นับสินค้าในตะกร้า ใช้ reduce ในการรวมผลลัพธ์ในแต่ละครั้ง
function countInCart() {
  /*let count = 0;
  for (const i in carts) {
    count += carts[i].numberOfUnits;
  }
  return count;*/
  return carts.reduce((count, cartItem) => count + cartItem.numberOfUnits, 0);
}


//event สำหรับการกดปุ่มรูปตะกร้าจะแสดงรายการสินค้าที่เพิ่มเข้ามาได้
lookProductInCart.addEventListener("click",() => {
  showCart();
});

//function ในการแสดงรายการสินค้าให้ alert ขึ้นมา
function showCart(){
if(carts.length ===0){
  alert("Your cart is empty")
}else
  {
    let alertProduct ="";
   
   for(let readArr of carts){
     
    alertProduct+="  "+readArr.product.productId+"  "
    alertProduct+=readArr.product.name+"  ";
    alertProduct+="Unit: "+readArr.numberOfUnits+"\n";
     }
    
     alert("this is your product\n"+alertProduct);

    console.log(carts.length);
  }
}
