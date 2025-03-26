// const circle = {
//   radius: 1,
//   draw() {
//     console.log("DRAW");
//   },
// };
// //
// let another2 = Object.assign(circle);
// console.log(another2);
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
// const another3 = {};
// const another4 = Object.assign({}, another);
// console.log(another4);
// function test(x, border) {
//   this.x = x;
//   this.border = border;
//   this.draw = function (border) {
//     console.log(border * 2);
//   };
// }
// function getRandomArbitray(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// let rand = getRandomArbitray(5, 10);
// console.log(rand);
// //found maxxxxxxxxxxxxxxxxxxxxxxxxxx
const number = [10, 24, 41, 23, 1, 5, 4, -5, 47, 99, 100, 89, 105, 108];
//

// const user = {
//   age: 10,
//   addAge1: () => {
//     // this = window!!!
//     this.age++;
//   },
//   addAge2: function () {
//     // this user object
//     this.age++;
//   },
// };
//primitive type
let num1 = 56;
let num2 = num1;
console.log(num1);
//refrence type
let obj1 = { value: 10 };
let obj2 = obj1;
let copyobj = Object.assign({}, obj1);
console.log(copyobj);
let copyobj2 = { ...obj1 };
obj1.value = 20;
console.log(obj1);
// console.log(this); // window
// user.addAge1();
// console.log(user.age); // 11

// const o1 = {
//   value: 10,
//   location: {
//     x: 10,
//     y: 10,
//   },
//   items: [{id: 1}],
//   add1: () => {
//     console.log(this) // what does it log?
//   }
//   add2: function () {
//     console.log(this) // what does it log?
//   }
// };
// const copyO1 = Object.assign({}, o1); // shallow copy, less cost
// const copyO2 = { ...o1 }; // shallow copy, less cost
// const copyO3 = JSON.parse(JSON.stringify(o1)); // deep copy, higher cost

// o1.location.x = 20;
// o1.items.push({ id: 5 });
// console.log(copyO1.location.x) ??? output?
// console.log(copyO1.location.x, copyO1.items);

// const obj = { value: 10, name: "something" };
// let lockObject = Object.freeze({ value: 10, name: "something" });
// obj.value++;
// obj.name = "feri";
// console.log(obj);
//
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(`draw`);
//   };
// }
// let circle2 = new Circle(5);
// let circle33 = new Circle(50);
// let circle4 = Circle(500);
// console.log(circle2);
// console.log(circle33);
// console.log(circle4);

//
function circleCreation(radius) {
  return {
    radius,
    draw() {
      console.log("Draw2");
    },
  };
}
let circle3 = circleCreation(55);
console.log(circle3);
//
const Dwork2 = () => {
  return (
    <div>
      <div>HEY JO</div>
    </div>
  );
};

export default Dwork2;
