/*
# Change Calculator

- ให้เขียน Function เพื่อทำการรับเงินค่าสินค้า และ จำนวนเงินที่ลูกค้าชำระ จากนั้นให้ทำการคืนผลลัพธ์เป็นเงินทอนที่ประกอบด้วย แบงค์ 500, แบงค์ 100, แบงค์ 50, แบงค์ 20, เหรียญ 10, เหรียญ 5, เหรียญ 2, และเหรียญ 1 บาท
- ให้สร้างแบงค์และเหรียญเงินทอนที่เป็นไปได้เป็นโครงสร้าง Object
*/

function changeCalculator(order, pay) {
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    changeResult.B500 = Math.floor(change / 500);
    changeResult.B100 = Math.floor((change % 500) / 100);
    changeResult.B50 = Math.floor(((change % 500) % 100) / 50);
    changeResult.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
    changeResult.B5 = Math.floor(((((change % 500) % 100) % 50) % 20) / 5);
    changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
    changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
    return changeResult;
  }
  console.log(changeCalculator(222, 1000));
//{ B500: 1, B100: 2, B50: 1, B20: 1, B5: 1, B2: 1, B1: 1 }  

/********************************************/
let money =  new Object();
function cal(price,paid){
    const change = paid-price;
    if(change>0){
        tonTang(change);
    }else{
        console.log("เงินของคุณไม่พอ");
    }
}
function tonTang(change){
    let value = change;
    let count = 0;
    if(value>=500){
        count = Math.floor(value/500);
        value = value-(count*500);
        money.bank500 = count;
    }
    if(value>=100){
        count = Math.floor(value/100);
        value = value-(count*100);
        money.bank100 = count;
    }
    if(value>=50){
        count = Math.floor(value/50);
        value = value-(count*50);
        money.bank50 = count;
    }
    if(value>=20){
        count = Math.floor(value/20);
        value = value-(count*20);
        money.bank20 = count;
    }
    if(value>=10){
        count = Math.floor(value/10);
        value = value-(count*10);
        money.coin10 = count;
    }
    if(value>=5){
        count = Math.floor(value/5);
        value = value-(count*5);
        money.coin5 = count;
    }
    if(value>=2){
        count = Math.floor(value/2);
        value = value-(count*2);
        money.coin2 = count;
    }
    if(value>=1){
        count = Math.floor(value/1);
        value = value-(count*1);
        money.coin1 = count;
    }
    console.log(money);
}

cal(15000,49999);
//{ bank500: 69, bank100: 4, bank50: 1, bank20: 2, coin5: 1, coin2: 2 }
