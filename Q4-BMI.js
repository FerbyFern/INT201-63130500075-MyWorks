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