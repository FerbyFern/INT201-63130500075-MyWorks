//const

//การประกาศตัวแปร const เหมือนกับ let เลยแต่ต่างที่ไม่สามารถ assign(update) ค่าซ้ำได้

//สรุปสั้นๆ สำหรับตัวแปรที่ประกาศแบบ const:
/*
    1.เป็น block scoped
    2.ไม่สามารถเข้าถึงได้ก่อนถูก assign ค่า
    3.ไม่สามารถประกาศซ้ำได้ใน scope เดียวกัน
    4.ไม่สามารถ assign ซ้ำได้
*/


//example
const game = 'final fantasy' 
//game = 'stardew valley' //<-- ถ้า assign ค่าใหม่ในตัวแปรเดิมที่ประกาศด้วย const จะ error ต่างจาก let ที่สามารถ assign ค่าได้

const movie = 'avengers'
//const movie = 'harry potters' //<-- แบบนี้ก็ error เหมือนกันกับ let เลยเพราะเป็นการประกาศ ตัวแปรซ้ำกัน

const hero = 'Peter'

function testConst(){
        const hero = 'Tony'
        
        if(true){
            const hero = 'Steve'
            console.log(hero)
        }else{
        console.log(hero) // ยึดค่า assign ตัวแรกถ้าลบ hero = 'Tony' ออกจะมีค่าเป็น 'Peter
        }
}


//console.log(game)
//console.log(movie)
//console.log(hero);
//testConst();

/*
ความเหมือนและแตกต่างระหว่าง let กับ Const
-- อยู่ใน Block Scope เหมือนกัน
-- ไม่สามารถประกาศตัวแปรซ้ำกันได้ใน Block Scope เดียวกัน
-- let สามารถแทนค่าใหม่ลงไปในตัวแปรที่เคยประกาศมาแล้วได้ใน Block Scope เดียวกัน
-- const ไม่สามารถประกาศหรือแทนค่าตัวแปรใหม่ได้เลยใน Block Scope เดียวกัน
*/