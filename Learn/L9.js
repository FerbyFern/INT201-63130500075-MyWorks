let VAT = 0.07 //global variable(let)

//priWithVat - global (outer) function
function priceWithVat(price) {
    //price is a local scope
    //header is a local scope
    let header = 'SIT, KMUTT'
    //console.log(staffName) can't ues

    //staff is a nested(inner) function
    function staff(name) {
        let staffName = 'Panalee'
        return header + price + staffName + VAT
    }
    return price * VAT + price
}
//console.log(header)
console.log(priceWithVat(100))

/*****************************************/
let VAT2 = 0.07 //global variable(let)
//non-pure function
function priceWithVat2(price) {
    return price * VAT + price
}
//pure function
function getPrice(price) {
    return price
}

console.log(priceWithVat2(100)) //107
VAT2 = 0.1
console.log(priceWithVat2(100)) //110
