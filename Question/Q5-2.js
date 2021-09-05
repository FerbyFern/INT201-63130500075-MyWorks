//Object Questions
const questions = [
    /*สร้าง object questions เป็น Arrays เพื่อเก็บคำถามทั้งหมด 5 คำถาม แต่ละช่องก็จะมี object ของชุดคำถาม แบ่งออกเป็น 5 ชุดคำถาม ในแต่ละชุดคำถามก็จะมีทั้งหมด 3 property ก็คือ question(คำถาม), answer(ตัวเลือกคำตอบ) ใน answer ก็จะมี value เป็น Object ย่อยเพื่อเก็บตัวเลือก choice a b c , correctAnswer (คำตอบที่ถูกต้องของคำถาม)  */
    {
      question: "What is the answer of 2+1?",
      answer: {
        a: "5",
        b: "4",
        c: "3",
      },
      correctAnswer: "c",
    },
    {
      question: "What do pandas eat?",
      answer: {
        a: "Bamboo",
        b: "Ant",
        c: "Rice",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the capital city of Thailand?",
      answer: {
        a: "Saraburi",
        b: "Bangkok",
        c: "Chonburi",
      },
      correctAnswer: "b",
    },
    {
      question: "What  ____  you doing? Which word can be used in this sentence?",
      answer: {
        a: "is",
        b: "are",
        c: "do",
      },
      correctAnswer: "b",
    },
    {
      question: "How much the energy value that give us by 1 glass of low fat milk?",
      answer: {
        a: "250 kj",
        b: "400 kj",
        c: "550 kj",
      },
      correctAnswer: "c",
    },
  ];
  
  //Object Players
  const players1 = {
    //่สร้าง object players1 เพื่อเก็บชื่อ คำถามที่เลือกตอบ คำตอบที่ตอบ และคะแนนที่ได้
    name: "Panalee",
    questionSelect: {
      question1: questions[0].question,
      question2: questions[2].question,
      question3: questions[1].question,
    },
  
    answerSelect: {
      answer1: "c",
      answer2: "a",
      answer3: "a",
    },
    tototalScore: function () {
    //สร้าง function tototalScore เพื่อเทียบคำตอบของเเต่ละคำถามและสรุปคะแนนสะสมออกมา
    let score = 0;
  
    if (players1.answerSelect.answer1 === questions[0].correctAnswer) score++; //ถ้าหากคำตอบที่ผู้เล่นเลือกตรงกับคำตอบที่ถูกต้องในชุดคำถามจะให้คะแนน +1
    if (players1.answerSelect.answer2 === questions[2].correctAnswer) score++;
    if (players1.answerSelect.answer3 === questions[1].correctAnswer) score++;
  
    return score;
    }
  };
  
  //แบบที่ 1
  console.log(`Name : ${players1.name}`); //แสดงชื่อของ player
  
  for ( index = 0; index < questions.length;index++ ) { //ทำการ loop เพื่อให้ง่ายต่อการแสดงผล 
  console.log(`
  Question ${index+1} :${players1["questionSelect"]["question"+(index+1)]} 
  Choice : a.) ${questions[index].answer.a}
           b.) ${questions[index].answer.b}
           c.) ${questions[index].answer.c}
  Answer :${players1["answerSelect"]["answer"+(index+1)]} `);
  }
  
  console.log("");
  console.log(`Total Score : ${players1.tototalScore()} `); //เรียก function ให้แสดงผลรวมคะแนนที่อยู่ในส่วนของ players1
  
  
  //แบบที่ 2 แสดงผลลัพธ์แบบแรก เรียกใช้จาก Object ของ player1 และ question มาแสดง
  /*
  console.log("--------------Player1------------------");
  console.log(`
  Name : ${players1.name}
  ---------------------------------------
  Question 1 : ${players1.questionSelect.question1}
  Choice : a.) ${questions[0].answer.a} 
           b.) ${questions[0].answer.b} 
           c.) ${questions[0].answer.c}
  Answer : ${players1.answerSelect.answer1} 
  
  Question 2 : ${players1.questionSelect.question2}
  Choice : a.) ${questions[2].answer.a} 
           b.) ${questions[2].answer.b} 
           c.) ${questions[2].answer.c}
  Answer : ${players1.answerSelect.answer2} 
  
  Question 3 : ${players1.questionSelect.question3}
  Choice : a.) ${questions[1].answer.a} 
           b.) ${questions[1].answer.b} 
           c.) ${questions[1].answer.c}
  Answer : ${players1.answerSelect.answer3} 
  
  Question 4 : ${players1.questionSelect.question4}
  Choice : a.) ${questions[3].answer.a} 
           b.) ${questions[3].answer.b} 
           c.) ${questions[3].answer.c}
  Answer : ${players1.answerSelect.answer4} 
  
  Question 5 : ${players1.questionSelect.question5}
  Choice : a.) ${questions[4].answer.a} 
           b.) ${questions[4].answer.b} 
           c.) ${questions[4].answer.c}
  Answer : ${players1.answerSelect.answer5} 
  
  Total Score : ${players1.tototalScore()}
  `);
  */
  