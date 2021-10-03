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