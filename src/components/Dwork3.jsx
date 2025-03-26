console.log(`Dwork3`);
//
function RandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
let chapNumber = RandomNumber(10, 5);
console.log(chapNumber);

//
function Circle(radius, xx, width, height) {
  this.radius = radius;
  this.location = {
    xx,
  };
  this.value = {
    width,
    height,
  };
}

const newCircle = new Circle(5, 10, 1, 5);
console.log(newCircle);
//
const obj1 = { value: 20, locate: { x: 14, y: 2 } };

let obj2 = JSON.parse(JSON.stringify(obj1)); //deep Copy
let obj3 = Object.assign({}, obj1); //shallow Copy

obj1.locate.x = 4800; //change value'sF

console.log(obj2);
console.log(obj3);

//
const user = {
  age: 10,
  addage(ageValue) {
    this.age = age + ageValue;
  },
};
const test = {
  item: 5,
  male: true,
  location: { x: 25, y: 35 },
  number: { 0: 110, 1: 120 },
};
const test2 = JSON.parse(JSON.stringify(test));
const test3 = Object.assign({}, test);

const person = {
  name: "FR",
  age: 31,
  OrginalAge: 31,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  addage: function () {
    this.age += 15;
  },
  resetAge: function () {
    this.age = this.OrginalAge;
  },
  halfAge: function () {
    return this.age / 2;
  },
  doubleAge: function () {
    return this.age * 2;
  },
  randAge: function () {
    return this.age + Math.round(Math.random() * 10);
  },
  lessAge: function () {
    return this.age - Math.round(Math.random() * 5);
  },
};
let lessAge = person.lessAge();
console.log(lessAge);
let randoms = person.randAge();
console.log(randoms);
console.log("Object MAN:", person);
//
const Dwork3 = (e) => {
  return (
    <div>
      <div>Dwork3</div>
    </div>
  );
};
export default Dwork3;
