/*แบบฝึกหัด 3 Body Mass Index (BMI) Calculator Program
•Write function to calculate BMI and use letand const in your program
•The Body Mass Index is the body mass in kilogram divided by the square of body height in meters. 
Show at least 3 test data.BMI = kg/m^2
Georgia’s weight is 36.5 pounds, and her height is 39 inches. 
What is Georgia’s BMI?*/

function BMI(name, weight, height) {
    const pounds = 0.453592;
    const inch = 0.0254;

    let processBMI = (weight * pounds) / Math.pow(height * inch, 2);
    let result = processBMI.toFixed(2);
    const bmiString = [
        { max: 18.5, str: "Below normal weight" },
        { min: 18.5, max: 25, str: "Normal weight" },
        { min: 25, max: 30, str: "Overweight" },
        { min: 30, str: "Obesity" },
    ];

    if (result < bmiString[0].max) {
        console.log(`${name} = ${result} ${bmiString[0].str}`);
    } else if (result < bmiString[1].max) {
        console.log(`${name} =  ${result} ${bmiString[1].str}`);
    } else if (result < bmiString[2].max) {
        console.log(`${name} = ${result} ${bmiString[2].str}`);
    } else {
        console.log(`${name} = ${result} ${bmiString[3].str}`);
    }
}
BMI("Georgia", 36.5, 39);
BMI("Mint", 112.44, 64.9);
BMI("Kim", 112.44, 68.5);
BMI("Paint", 143.3, 72.8);
BMI("Zim", 112.44, 65.3);
BMI("Pam", 110.23, 61.8);
/*
Georgia = 16.87 Below normal weight
Mint =  18.77 Normal weight
Kim = 16.85 Below normal weight
Paint =  19.01 Normal weight
Zim =  18.54 Normal weight
Pam =  20.29 Normal weight
*/

/***********************/
function BMI2(weight,height){
    const results = weight/(height*height);
    if(results<18.5){
      return 'Underweight'
    }else if(18.5<results&&results<24.9){
      return 'Healthy'
    }else if(25.0<results<29.9){
      return 'Overweight'
    }else if(30.00<results){
      return 'Obese'
    }
  }
  function pound_to_kg(pounds){
    const kg = pounds*0.453592;
    return kg;
  }
  function inches_to_meter(inches){
    const meter = inches*0.0254;
    return meter;
  }
  let Georgia = {weight: 36.5,height: 39}
  console.log(BMI2(pound_to_kg(Georgia.weight),inches_to_meter(Georgia.height)));
  //Underweight