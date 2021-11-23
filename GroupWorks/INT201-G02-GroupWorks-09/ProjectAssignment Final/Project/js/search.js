import { products } from './products.js';

//* แก้ Search ให้อยู่ในรูปแบบ property function
let Search = {
    showHideSearch: function(){
        const s = document.getElementById("search-bar");
        if (s.style.display === "none") {
          s.style.display = "flex";
        } else {
          s.style.display = "none";
        }
    },
    searchProduct: function(){
        const searchProduct = document.getElementById("search").value.toLowerCase(); //ช่อง search ที่เป็น input ให้ค่าเป็น .toLowerCase()
        const productElement = document.getElementById("products");
        const filterProductByName = products.filter((product) =>
          product.name.toLowerCase().includes(searchProduct)
        );
        //ใช้ filter ในการกรองเฉพาะชื่อสินค้าที่ต้องการโดยใช้ include เช็คค่าที่เราพิมพ์เข้าไป return เป็น true false

        const divProduct = productElement.children; //เรียก children ใน element ของ product ทั้งหมดเก็บไว้ใน divProduct เพื่อเข้าถึงสินค้าทั้งหมดและทำการเปลี่ยนค่า style
      
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
}


const buttonSearch = document.getElementById("button-search"); //ปุ่มแว่นขยาย
buttonSearch.addEventListener("click", () => {
  Search.showHideSearch();
});

const buttonSubmit = document.getElementById("button-submit"); //ปุ่ม submit
buttonSubmit.addEventListener("click", () => {
  Search.searchProduct();
});












/*
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
*/