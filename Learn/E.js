function getStudents(name, surname, educationLv, studentID, faculty, fieldOfStudy) {
    return students;
  }
let test = new Student('Panalee', 'Palasri'/*, '2', '075', 'School of Information Technology', 'Information Technology'*/);
console.log(test);

function students(name, surname, educationLv, studentID, faculty, fieldOfStudy) {
    let name = 'Panalee';
    const inch = 0.0254;

    let processBMI = (weight * pounds) / Math.pow(height * inch, 2);
    let result = processBMI.toFixed(2);
    const bmiString = [
        { max: 18.5, str: "Below normal weight" },
        { min: 18.5, max: 25, str: "Normal weight" },
        { min: 25, max: 30, str: "Overweight" },
        { min: 30, str: "Obesity" },
    ];
}


/**************************************************** */
//2.1 (3 คะแนน) สร้ำงโครงสร้ำงข้อมูลเพื่อเก็บประวัติและผลกำรเรียนของนักศึกษำที่ได้ออกแบบไว้ในข้อ 1 โดยให้มีข้อมูลตั้งต้นเป็นข้อมูลนักศึกษา วิชาที่ลงทะเบียน และผลการเรียน และผลการเรียนสะสม ในภาคการศึกษา 1/2563 ของตนเอง

//ข้อมูลนักสึกษา
let name = 'Panalee'
let surname = 'Palasri'
let educationLv = '2'
const studentID = '075'
const faculty = 'School of Information Technology'
const fieldOfStudy = 'Information Technology'
console.log(`name: ${name},` + ` surname: ${surname},` + ` educationLv: ${educationLv},` +
 ` studentID: ${studentID},` + ` faculty: ${faculty},` + ` fieldOfStudy: ${fieldOfStudy}`)

//เก็บชื่อวิชา
let subjectName = ['PHYSICAL EDUCATION',	
                    'LEARNING AND PROBLEM SOLVING SKILLS',
                    'INFORMATION TECHNOLOGY FUNDAMENTALS',	
                    'PROGRAMMING FUNDAMENTALS',	
                    'WEB TECHNOLOGY',	
                    'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY',	
                    'ACADEMIC ENGLISH']

let credits = ['1', '3', '3', '3', '1', '3', '3']

//ผลการเรียน
const gpa = ['A', 'A', 'B', 'C', 'B+', 'B+', 'B']

//ผลการเรียนสะสม
const gpax = 3.17



//

/*********************************************************** */
//2.2 (2 คะแนน) หน่วยกิตลงทะเบียน จำนวนหน่วยกิตที่นักศึกษำลงทะเบียนเรียนในแต่ละภำคกำรศึกษำและสะสมทุกภำคกำรศึกษำ
let credit = subjectName.reduce((tocredit, crd) => tocredit+crd.credit, 0) //คำนวณหน่วยกิตที่ลง
console.log(`tocredit:  ${credit}`);


//2.3 (2 คะแนน) หน่วยกิตที่คำนวณ จำนวนหน่วยกิตที่คำนวณที่มีผลกำรศึกษำ A, B+, B, C+, C, D+, D, F, Fa และ Fe และสะสมทุกภำคกำรศึกษำ

//คำนวณหน่วยกิต
function calCredits(num) {
    switch(num){
        case 0: console.log('A');
        break;
        case 1: console.log('B+');
        break;
        case 2: console.log('B');
        break;
        case 3: console.log('C+');
        break;
        case 4: console.log('C');
        break;
        case 5: console.log('D+');
        break;
        case 6: console.log('D');
        break;
        case 7: console.log('F');
        break;
        case 8: console.log('Fa');
        break;
        case 9: console.log('Fe');
        break;
    }
}
console.log(`${calCredits}`);

//2.7 (2 คะแนน) หน่วยกิตที่ได้ จำนวนหน่วยกิตที่ได้และสะสมทุกภำคกำรศึกษำ ของรำยวิชำที่มีผลกำรศึกษำ A, B+, B, C+, C, D+, D และ S







var str = ''
for (i in subjectName){
    str += subjectName[i] + ': '
    str += credits[i].join(', ')
    str += '\n'
}
console.log(str);

console.log(subjectName);
console.log(credits);



function credits(credit) {
    
}

function studyResult(credit, grade) {
    const cd = s
}

function pound_to_kg(pounds){
    const kg = pounds*0.453592;
    return kg;
  }
  function inches_to_meter(inches){
    const meter = inches*0.0254;
    return meter;
  }