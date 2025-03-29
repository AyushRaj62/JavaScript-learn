// console.log(a);
// var a = 132;


name = 'ayush'
sirname = 'raj'

console.log(name);
console.log([name, sirname])  //tabular form me hojata h

console.log(`welcome back ${name}`)

const str = '   rrg  ';
console.log(str.trim())

const jsUser = {
    namee : "ayush",
    age:23
}

console.log(typeof jsUser.namee)
console.log(typeof jsUser.age)

const arr = [1,2,3,4];

for(const i of arr){
    console.log(i);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Ayush", 23);
console.log(person1); // Person { name: 'Ayush', age: 23 }
