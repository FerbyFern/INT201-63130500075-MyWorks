/*const quest1 = {id: 1, question: 'What is your name?'};
let quest2 = {id: 2, question: 'Where are you?'};

const MAX = 10;
MAX = 20; //assign value
quest2 = quest1; //assign value ->memory address
console.log('quest2 : ${quest2}')

quest1.id = 3;
quest1.question = 'What is it?';
console.log(quest1);*/

//Object literal
const quest1 = {
    id: 1,
    question: 'What is your name?'
  };
  delete quest1.question;
  console.log(quest1);
  quest1.questions = 'What is your name?';
  console.log(quest1);

//#1 independent variables, all are array
let ids = [1, 2];
let quests = ['What is your name?', 'Where are you?'];
let answers = ['Panalee', 'at home'];

//#2 array of objects, easy iterate all items under a single variable
let quest3 = [
  {id: 1, question: 'What is your name?', answer: 'Panalee'},
  {id: 2, question: 'Where are you?', answer: 'at home'}
];

//#3 one object, each property stores with array
let quest4 = {
  ids: [1, 2],
  quests: ['What is your name?', 'Where are you?'],
  answers: ['Panalee', 'at home']
};

//----------------------------------------------------------------
let quest ={}; //implicit class => let quest = new Object()
console.log(typeof quest);

class Question {
  constructor(id,question='unknown'){
    this._id=id;
    this._question=question;
  }
  get id(){
    return this._id;
  }
  set id(id){
    this._id = id;
  }
  get question(){
    console.log("This is getter question");
    if (question === '') {
      this._question = 'Unknown';
    }
  }
  set question(){
    console.log("This is getter question");
    return this._question;
  }
}
let quest1 = new Question(1);
let quest2 = new Question(2,"What is your name?");
let quest1 = new Question(3, "");
quest2.question = '';

console.log(quest2);
console.log(quest2.question);

//----------------------------------------
class Question2 {
  constructor(id, question) {
    this._id = id;
    if (question === undefined || question.length === 0)
      this._question = 'unknown';
    else this._question = question;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get question() {
    return this_question;
  }
  set question(question) {
    this._question = question;
  }
  displayQuestion() {
    return `id: ${this._id}, question: ${this._question} }`;
  }
}
let quest1 = new Question(1, 'Q1');
let quest2 = new Question(2, 'Q22');

Question.prototype.getQuestLength = function () {
  return this._question.length;
};

console.log(quest1.getQuestLength());
console.log(quest2.getQuestLength());