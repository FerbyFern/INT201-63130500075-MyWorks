//1
function zodiac(year) {
    let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']
    let date = new Date;
    year = date.getFullYear() < year?year - 543:year;
    return zodiac[year%12];
}
console.log(zodiac(2001));
console.log(zodiac(2545));

/*************/

let year = 2002;
let zodiac2 = {
    0: 'monkey',
    1: 'rooster',
    2: 'dog',
    3: 'pig',
    4: 'rat',
    5: 'ox',
    6: 'tiger',
    7: 'rabit',
    8: 'dragon',
    9: 'snake',
    10: 'horse',
    11: 'sheep'
}
console.log(`your zodiac is : ${zodiac2[year % 12]}`);

/************/

function zodiac3(years){
    let num = years % 12
    switch(num){
        case 0 : console.log('monkey')
        break;
        case 1 : console.log('rooster')
        break;
        case 2 : console.log('dog')
        break;
        case 3 : console.log('pig')
        break;
        case 4 : console.log('rat')
        break;
        case 5 : console.log('ox')
        break;
        case 6 : console.log('tiger')
        break;
        case 7 : console.log('rabbit')
        break;
        case 8 : console.log('drason')
        break;
        case 9 : console.log('snake')
        break;
        case 10 : console.log('horse')
        break;
        case 11 : console.log('sheep')
        break;
    }
}
zodiac3(1900)
zodiac3(2002)

/**************/

const zodiac4 = [
    'monkey',
    'rooster',
    'dog',
    'pig',
    'rat',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horses',
    'sheep'
];
console.log(zodiac4[(1900 % 12).toFixed(0)]);