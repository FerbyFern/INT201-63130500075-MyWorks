//Higher Order Function 
//function getPrice เป็น function สำหรับการรับราคาของสินค้า
function getPrice(array) {

  //สร้าง inner function ในการคำนวณราคาของสินค้าทั้งหมด 
  //totalPrice เป็น inner function (closure) เพื่อใช้ในการคำนวณราคาของสินค้าทั้งหมด
  function totalPrice() {
    //ใช้ reduce() เป็น arrow function ในการรับค่า price แต่ละตัว return ออกมาเป็น ราคาทั้งหมด
    return array.reduce((acc, item) => acc + item );
  }
  return totalPrice; //return ราคารวมของสินค้าทั้งหมดออกมา
}


//Higher Order Function 
//สร้าง function สำหรับการตรวจสอบ อายุว่ามากกว่าเท่าไหร่ รับ parameter เป็น array 
let checkAge = function (ages) {
  // morethan(x) เป็น inner function (closure) ในการตรวจสอบว่ามากกว่าเท่าไหร่ส่ง parameter x ในการตรวจสอบ
  function morethan(x) {
    return ages.filter((num) => num > x); //ใช้ filter ในการตรวจสอบ ages โดยเอา ages ที่มากกว่าค่า x ที่กำหนดไว้เท่านั้น
  }
  return morethan; // return array ของอายุที่มากกว่าเงื่อนไขที่กำหนด
};


//closure 
//Outer Function
function createProduct(){
  let products = []; //สร้าง Array ในการเก็บรายการสินค้าชื่อ products
  //Inner Function 
  //function addProduct ในการเพิ่มรายการสินค้า รับ parameter newId,newName,newPrice
  function addProduct(newId,newName,newPrice){  
      //สร้าง object ในการเก็บข้อมูลของ products แต่ละชิ้น โดยกำหนด property เป็น id,name,price
      let newProducts = {};
      newProducts.id = newId;
      newProducts.name = newName;
      newProducts.price = newPrice;

      //ตรวจสอบ id ของสินค้าว่าซ้ำหรือไม่ ถ้าหากว่าไม่ซ้ำก็สามารถใส่ข้อมูลเข้าไปได้
      let findProduct = products.find(({id}) => id === newId);
      if(findProduct === undefined){
        products.push(newProducts);  
      }
    
    return products;
  }
  return addProduct;
}


//Default parameter
//รับค่า parameter มาตามจำนวนค่าที่เราระบุ
function addPlayer(name,team = "Marid"){ //รับ parameter เป็น name, team กำหนดให้ team = Marid เป็น ค่า Default
  return `Name : ${name} Team : ${team}`;

}

//Rest parameter 
//function คิดค่าเฉลี่ย
//parameter สามารถรับกี่จำนวนก็ได้
function calAverage(...numbers){
  let sum = 0
  numbers.forEach(num => sum += num) //ใช้ for-each ในการวนรูปค่าส่ง parameter num วนลูปบวกแต่ละครั้งเก็บไว้ใน sum
  return sum / numbers.length; // return ค่าโดยให้ sum / ด้วยจำนวน numbers ทั้งหมดที่ถูกส่งเข้ามาเป็น parameter (สูตรหาค่าเฉลี่ย)
  
}

export { checkAge,getPrice,createProduct,addPlayer,calAverage}; //ทำการ export function เพื่อไปใช้งานในไฟล์อื่นๆ โดยการ import ไปใช้


