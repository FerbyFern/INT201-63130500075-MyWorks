import { showProduct } from "./script1.js";
import { productList } from "./product.js";


//function for showing search menu---------------------
const searchBtnMenu = document.querySelector('#searchMenu');
// searchBtnMenu.addEventListener('click',toggleSearchMenu);
let searchMenuShow = false; 
export function toggleSearchMenu(){
    if(searchMenuShow){//searchMenu แสดงผลอยู่ -> ถ้ากดก็จะซ่อน
        document.querySelector('#searchName').setAttribute('style','display:none');
        document.querySelector('#searchAvailable').setAttribute('style','display:none');
        document.querySelector('#searchButton').setAttribute('style','display:none');
        document.querySelector('#empty').setAttribute('class','col-xs-9');
    }
    else{ //searchMenu ซ่อนอยู่ -> ถ้ากดจะแสดง
        document.querySelector('#searchName').setAttribute('style','display:inline');
        document.querySelector('#searchAvailable').setAttribute('style','display:inline');
        document.querySelector('#searchButton').setAttribute('style','display:inline');
        document.querySelector('#empty').setAttribute('class','col-xs-3');
    }
    // console.log(searchMenuShow);
    searchMenuShow = !searchMenuShow;
}

// const searchBtn = document.querySelector('#search');
// const pName = document.getElementById("pName");
// const checkAvailable = document.getElementById('checkAvailable');
// searchBtn.addEventListener('click', queryProduct);
export function queryProduct(){
    const pName = document.getElementById("pName");
    const checkAvailable = document.getElementById('checkAvailable');
    const divProduct = document.getElementById("product")
    if(checkAvailable.checked==false & pName.value==''){ //เผื่อปัด cas นี้ทิ้ง ดักกรณีไว้ก่อน
        // checkAvailable.checked เพื่อดูว่าติ๊กอยู่รึเปล่า
        // ไม่มีเงื่อนไข แสดงผลทุกรายการ ต้องมีโค้ด 2 บรรทัดล่างเผื่อในกรณีที่มีการ query บางส่วน แล้วยกเลิก จะได้แสดงผลทั้งหมดออกมา
        divProduct.innerHTML = '';
        showProduct(productList)
    } 
    else{
        divProduct.innerHTML = ''; // ล้างข้อมูลใน div product
        let newProductList = [];
        for(let p of productList){
            if(p.name.toLowerCase().includes(pName.value.toLowerCase()) | pName.value==''){//เช็คว่า pName ไม่มีเงื่อนไข หรือ pName ตรงกับค่า product ของเรา
                if(checkAvailable.checked==true){//เช็คในส่วน checkAvailable ว่ามีการตรวจว่ามีของหรือไม่
                    if(p.stock>0) newProductList.push(p); // ถ้า stock = 0 ก็จะไม่แสดงผล
                }
                else{
                    newProductList.push(p); // ไม่มีเงื่อนไขเพิ่มเติมก็เอาข้อมูลนั้น push ลง array ได้เลย
                }
            }
        }
        
        showProduct(newProductList) // เรียก function การแสดงผล โดยส่ง parameter เป็น array ที่เราทำการกรอง เลือก ข้อมูลแล้ว
    }
    
}

