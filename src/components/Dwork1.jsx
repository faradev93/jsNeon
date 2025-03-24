//Factory Function
function CreateCircle(radius) {
  return {
    x: 10,
    y: 100,
    draw() {
      console.log(`f Function`), radius;
    },
  };
}
const ff = CreateCircle(55);
console.log(ff);

//Constructor Function
function circle(radius) {
  this.draw = function () {
    console.log("test");
  };
  this.radius = radius;
}
const circle2 = new circle(12);
console.log(circle2);
//Primitive Type's:
let object = { number: 15 };
function inc(x) {
  x.number++;
  return x;
}
inc(object);
console.log(object);
//
let arr1 = [1, 2, 3];
function slicy(x) {
  return x.slice();
}
let arr2 = slicy(arr1);
arr2[0] = 1000;
console.log(arr1);
console.log("DWORK111111111");
//
const Dwork1 = (e) => {
  return (
    <div>
      <div>salam</div>
    </div>
  );
};
export default Dwork1;
