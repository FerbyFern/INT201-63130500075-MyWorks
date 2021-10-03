let person = {
	"name": "Jason Object",
	"age": 40,
	"married": true,
	"children": ["Jacob", "Jane", "Joan"],
	"website": null,
	"cars": {
		"sedan": "BMW Series 3",
		"suv": ["Honda CRV", "Toyota Fortuner"],
		"pickup": "Isuzu Dmax",
	}
}

console.log(person.name)
console.log(person['age'])
console.log(person.children[1])
console.log(person.cars.suv[0])


let circle = {
    "radius": 10,
    "color": "yellow",
    "price": null,
    "name": undefined,
    getArea() {
        return 3.14 * (this.radius ** 2)
    }
}

let circleJson = JSON.stringify(circle)
console.log(circleJson)