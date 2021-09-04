/*const questionQuiz = [
  {
    question: "What is 2+1",
    answer: {
      a: "5",
      b: "4",
      c: "3",
    },
    correctAnswer: "c",
  },
  {
    question: "What food panda eat",
    answer: {
      a: "bamboo",
      b: "ant",
      c: "rice",
    },
    correctAnswer: "a",
  },
];

console.log(questionQuiz[0]);*/

/************ */

class Question{
  constructor(num,question,choice,correctChoice){
      this._num = num;//store question's no.
      this._question = question.toString();//store question
      this._choice = choice;//store answer
      this._correctChoice = correctChoice;//store the correct Choice(A,B,C,D)
  }
  showQuestion(){
      return `Question No. ${this._num} ${this._question}
      A: ${this._choice._a}
      B: ${this._choice._b}
      C: ${this._choice._c}
      D: ${this._choice._d}`;
  }
}
class Choice{
  constructor(a,b,c,d){
      this._a = a;
      this._b = b;
      this._c = c;
      this._d = d;
  }
}

class Person{
  constructor(name){
      this._name = name;
      this._score = 0;
      this._answerResult;
  }
  giveAnswer(question,answer){
      let question_result = question._name;
      let answer_result = answer.toString();
      console.log(question_result);
      console.log(question._name);
      this._answerResult += {};
      if(question._correctChoice==answer.toUpperCase()){
          this._score++;
          return "Your answer is correct! +1 point";
      }
      return "Your answer is wrong!";
  }

}

//All 5 question
let q1 = new Question(1,
                  "What is the answer of 1+1", 
                  new Choice(1,2,3,4),
                  "B");

let q2 = new Question(2,
                  "Which grammar is correct?",
                  new Choice("The banana were eat",
                          "The banana was ate", 
                          "The banana was eaten",
                          "The banana is eating by monkey",
                  "C"));

let q3 = new Question(3,
                  "Which one of these syntax is not Primitive data",
                  new Choice("Integer",
                          "Float",
                          "Boolean",
                          "Map"),
                  "D");

let q4 = new Question(4,
                  "Which one is not synonym to the word 'beautiful'",
                  new Choice("Naughty",
                          "Pretty",
                          "Gorgeous",
                          "Beauty"),
                  "A");

let q5 = new Question(5,
                  "Which one is not appropriate program/application for drawing",
                  new Choice("Adobe Illustrator",
                          "Visual Studio Code",
                          "Clip Studio Paint",
                          "Medibang"),
                  "B");
//

let p1 = new Person("Ann");