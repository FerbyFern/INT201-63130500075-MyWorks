import {products} from './products.js'; //import สินค้าทั้งหมด จาก products 

 //เข้าถึง <div id='product-container'></div> ใน html
const productContainer = document.querySelector('#product-container'); 

 //set style ใน div กำหนด margin ระยะห่างของ box หัวข้อ
 //<div style="margin: 50px">product-container</div> 
productContainer.style.cssText = `margin : 50px;` 

productContainer.firstElementChild.style.cssText = `font-size : 42px;` //เข้าถึง child ตัวแรกของ #product-container คือ h2 ในการกำหนด font-size

//สร้าง function ในการแสดงผลรายการสินค้า
function listProduct(){ 
        const productElement = document.querySelector('#products'); //เข้าถึง <div id='products'></div> ใน html
        productElement.setAttribute('class','d-flex flex-wrap justify-content-center ') //เพิ่ม attribute class ในการกำหนด css โดยใช้ bootstrap
        //<div id = "products" class = "d-flex flex-wrap justify-content-center"></div>
        //ใช้ flex ในการจัดเรียง element ต่างๆที่อยู่ใน container
        //flex wrap คือการกำหนดให้ flex item มีการดันลงมาด้านล่างตามขนาดของ flex container โดยมีการจัดเรียง Flex Item จากบนลงล่าง
        //justify-content-center กำหนดให้ข้อมูลอยู่ตรงกลาง


        //ใช้ for-loop ในการดึงข้อมูลจาก products และสร้าง div ของแต่ละสินค้า
        for (const element in products) {

            //สร้าง element div ใน products
            const productList = document.createElement('div');
            productList.setAttribute('id', products[element].productId); //เพิ่ม attribute id ในการกำหนด id สินค้าในแต่ละ div
            productList.setAttribute('class', 'card card-product' ); //เพิ่ม attribute class จัดรูปแบบเป็นแบบ card-product โดยใช้ boot-strap
            productList.setAttribute('style', 'margin : 5px; padding : 50px; width : 30rem;'); //เพิ่ม attribute style ในการตกแต่ง css ระยะห่าง, ความกว้างของแต่ละ box
            
            //สร้าง element img เพื่อนำไปไว้ใน div ของแต่ละสินค้า
            let productImg = document.createElement('img');
            productImg.setAttribute('src', products[element].imgProduct); //นำรูปภาพจาก object ที่เก็บ products มาแสดงโดย for-in เข้าไปดึงข้อมูล
            productImg.setAttribute('style', 'width: 100%; height: 25rem; margin-bottom: 50px');
            productList.appendChild(productImg); //แทรก element ที่กำหนดไปใน productList โดยจะไปเป็นโหนดลูก (child-node) ของ element นั้น
            
            //ทำเหมือนกับการเรียกรูปภาพเพียงแค่ไปเรียก attribute อื่น productId, name, price ,stock ใน products
            let productId = document.createElement("p");
            productId.textContent = products[element].productId;
            productList.appendChild(productId);

            let productName = document.createElement("p");
            productName.textContent = products[element].name;
            productList.appendChild(productName);
       
            let productPrice = document.createElement("p");
            productPrice.textContent = '฿'+ products[element].price + ' Baht';
            productList.appendChild(productPrice);

            let productStock = document.createElement("p");
            productStock.textContent = 'Available : ' + products[element].stock;
            productList.appendChild(productStock);
         
             //ปุ่มกดเพิ่มสินค้า (Add to cart)
            let buyButton = document.createElement("button");
            buyButton.setAttribute('type','button');
            buyButton.setAttribute('class','btn btn-primary btn-lg');
            buyButton.textContent = 'Add to cart';
            productList.appendChild(buyButton);
            
            productElement.appendChild(productList);
          
        }
}

listProduct(); //เรียกใช้งาน listProduct() เพื่อแสดงผลสินค้า