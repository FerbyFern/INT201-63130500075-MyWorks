//Object Questions
//สร้างชุดคำถาม 5 คำถาม โดยสร้าง Object ของ questions ทั้งหมด 5 Object โดยแต่ละ object แบ่งเป็น 3 property คือ question (คำถาม) , answer (ตัวเลือกในการตอบคำถาม) โดยจะมี property ย่อยคือ choice a, b, c , correctAnswer(ตัวเลือกของคำตอบที่ถูกต้อง)
const question1 = {
    question: "What is the answer of 2+1?",
    answer: {
      a: "5",
      b: "4",
      c: "3",
    },
    correctAnswer: "c",
  };

  const question2 = {
    question: "What do pandas eat?",
    answer: {
      a: "Bamboo",
      b: "Ant",
      c: "Rice",
    },
    correctAnswer: "a",
  };
  
  const question3 = {
    question: "What is the capital city of Thailand?",
    answer: {
      a: "Saraburi",
      b: "Bangkok",
      c: "Chonburi",
    },
    correctAnswer: "b",
  };

  const question4 = {
    question: "What  ____  you doing? Which word can be used in this sentence?",
    answer: {
      a: "is",
      b: "are",
      c: "do",
    },
    correctAnswer: "b",
  };
  
  const question5 = {
    question:
      "How much the energy value that give us by 1 glass of low fat milk?",
    answer: {
      a: "250 kj",
      b: "400 kj",
      c: "550 kj",
    },
    correctAnswer: "c",
  };
  //case1
  //Object Players
  //สร้าง object player1 โดยมี 4 property เก็บชื่อผู้เล่น คำถามที่ผู้เล่นเลือกและ คำตอบที่เลือกของคำถามนั้นไว้ และคะแนนสะสมทีได้
  const player1 = {
    name: "Steve",
    questionSelect: [question1, question4, question2], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
    answerSelect: ["a", "b", "c"], //เก็บคำตอบเป็น Array
    totalScore: function () {
      //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
      let score = 0; //กำหนด score = 0
      for (let i in player1.answerSelect) {
        if (player1.answerSelect[i] === player1.questionSelect[i].correctAnswer) score++;
      }
      return score;
    },
  };
  //case2
  const player2 = {
    name: "Peter",
    questionSelect: [question2, question1, question3, question5], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
    answerSelect: ["a", "c", "b", "c"], //เก็บคำตอบเป็น Array
    totalScore: function () {
      //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
      let score = 0; //กำหนด score = 0
      for (let i in player2.answerSelect) {
        if (player2.answerSelect[i] === player2.questionSelect[i].correctAnswer) score++;
      }
      return score;
    },
  };
  //case3
  const player3 = {
    name: "Tony",
    questionSelect: [question3, question2, question1], //กำหนดเป็น Array โดยอ้างถึง object question ที่เลือก
    answerSelect: ["b", "c", "c"], //เก็บคำตอบเป็น Array
    totalScore: function () {
      //สร้าง function ในการเทียบคำตอบที่ผู้เล่นเลือกกับคำตอบที่ถูกต้องและสรุปคะแนนที่ได้ออกมา
      let score = 0; //กำหนด score = 0
      for (let i in player3.answerSelect) {
        if (player3.answerSelect[i] === player3.questionSelect[i].correctAnswer) score++;
  
      }
      return score;
    },
  };
  
  //-------Player1--------
  //function แสดงผลคำถาม ตัวเลือกคำตอบ คำตอบของผู้เล่นและ จำนวนคะแนนสะสม
  function result() {
  
    console.log(`
  ----------Player1----------
  
  Name : ${player1.name}`);  //แสดงชื่อของ player
    for (let index = 0; index < player1.questionSelect.length; index++) { //ใช้ for-loop เพื่อให้ง่ายต่อการแสดงผล 
      console.log(`
          Question ${index + 1} : ${player1.questionSelect[index].question} 
          Choice :  a.) ${player1.questionSelect[index].answer.a}
                    b.) ${player1.questionSelect[index].answer.b}
                    c.) ${player1.questionSelect[index].answer.c}
          Answer : ${player1.answerSelect[index]} `);
    }
    console.log("");
    console.log(`Total Score : ${player1.totalScore()} `); //เรียก function ให้แสดงผลรวมคะแนนที่อยู่ในส่วนของ players1
  
    //-------Player2-------- ทำเหมือนกับ player1 แต่เปลี่ยนไปเรียก object ของ player คนที่ 2 แทน
    console.log(`
  ----------Player2----------
  
  Name : ${player2.name}`);
    for (let index = 0; index < player2.questionSelect.length; index++) {
      console.log(`
          Question ${index + 1} : ${player2.questionSelect[index].question} 
          Choice :  a.) ${player2.questionSelect[index].answer.a}
                    b.) ${player2.questionSelect[index].answer.b}
                    c.) ${player2.questionSelect[index].answer.c}
          Answer : ${player2.answerSelect[index]} `);
    }
    console.log("");
    console.log(`Total Score : ${player2.totalScore()} `);
  
    //-------Player3-------- ทำเหมือนกับ player1 แต่เปลี่ยนไปเรียก object ของ player คนที่ 3 แทน
    console.log(`
  ----------Player3----------
  
  Name : ${player3.name}`);
    for (let index = 0; index < player3.questionSelect.length; index++) {
      console.log(`
          Question ${index + 1} : ${player3.questionSelect[index].question} 
          Choice :  a.) ${player3.questionSelect[index].answer.a}
                    b.) ${player3.questionSelect[index].answer.b}
                    c.) ${player3.questionSelect[index].answer.c}
          Answer : ${player3.answerSelect[index]} `);
    }
    console.log("");
    console.log(`Total Score : ${player3.totalScore()} `);
  
  }
  
  result();