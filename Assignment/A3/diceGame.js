/*
# Dice Game

## ข้อกำหนด

- เกมลูกเต๋ามีผู้เล่นครั้งละ 2 คน
- 1 เกม สามารถกำหนดจำนวนรอบสูงสุดได้ แต่ละรอบผู้เล่นแต่ละฝ่ายจะมีการโยนลูกเต๋า 1 ครั้งต่อฝ่ายผู้เล่น
- ผู้เล่นแต่ละคนมีการเก็บชื่อผู้เล่น ค่าเลขที่ได้จากการโยนลูกเต๋าในแต่ละรอบ และผลของเกมแต่ละรอบ

## วิธีการเล่นเกม

- ให้แต่ละฝ่ายโยนลูกเต๋า (ให้ random ค่าการโยนเลขบนลูกเต๋า 1-6)
- ให้บันทึกค่าเลขที่ได้จากการโยนลูกเต๋า
- ให้บันทึกผลในแต่ละรอบว่าฝ่ายใดได้ผลใด (Win, Lose, Draw) โดยพิจารณาจากค่าเลขลูกเต๋าที่มีค่ามากกว่าเป็นฝ่ายชนะ
- วนเล่นซ้ำจนครบจำนวนรอบที่ระบุในข้อ 1
- ส่งผลลัพธ์เป็นชื่อผู้เล่นที่ชนะ
- ให้สร้างลูกเต๋าและผู้เล่นเป็นโครงสร้าง Object
*/

function Dice() {
    this._faceValue = 0;
    this.roll = function () {
      return Math.floor(Math.random() * 6) + 1;
    };
  }
  
  function play(gameDice, player1, player2, rounds) {
    let p1Win = 0;
    let p2Win = 0;
    for (let i = 0; i < rounds; i++) {
      console.log(`round# ${i + 1}`);
      player1.faceValues[i] = gameDice.roll();
      player2.faceValues[i] = gameDice.roll();
      console.log(`player1 value: ${player1.faceValues[i]}`);
      console.log(`player2 value: ${player2.faceValues[i]}`);
      if (player1.faceValues[i] < player2.faceValues[i]) {
        player1.results[i] = 'Lose';
        player2.results[i] = 'Win';
        p2Win++;
      } else if (player1.faceValues[i] > player2.faceValues[i]) {
        player1.results[i] = 'Win';
        player2.results[i] = 'Lose';
        p1Win++;
      } else {
        player1.results[i] = 'draw';
        player2.results[i] = 'draw';
      }
  
      console.log(`player1 : ${player1.results[i]}`);
      console.log(`player2 : ${player2.results[i]}`);
    }
    return p1Win > p2Win
      ? player1.name
      : p2Win > p1Win
      ? player2.name
      : 'No Player';
  }
  
  let dice = new Dice();
  
  p1 = { name: 'Joe', faceValues: [], results: [] };
  p2 = { name: 'Ann', faceValues: [], results: [] };
  
  console.log(`${play(dice, p1, p2, 3)} Win!`);
  console.log(p1);
  console.log(p2);
  