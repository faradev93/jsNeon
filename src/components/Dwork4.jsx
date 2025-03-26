console.log(`Dwork44444444444444444444444444`);
("use strict ");
//
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "",
  showDetails: function () {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
  },
  ageOfCar: function () {
    return 2025 - this.year;
  },
  changeColor: function () {
    return (this.color = "Black");
  },
};

let ageCar = car.changeColor();
console.log(car);
console.log(Math.max(1, 5, 6, 7, 9, 10));
let numb = [1, 6, 8, 55, 69, 20, 109, 78, 0, 45];

//

let maximum = -Infinity;
for (let i = 0; i <= numb.length; i++) {
  if (numb[i] > maximum) {
    maximum = numb[i];
  }
}
console.log(`Your Max Number: ${maximum}`);
//
let ran = function getrandomNumb(max, min, res) {
  return Math.round(Math.random() * (max - min) * res);
};

console.log(`random Number:${ran(21, 1, 2)}`);
//
function gety() {
  return {
    value: 10,
    locate: { arz: 50, tool: 60 },
    changeLoc: function (x) {
      return (this.locate.arz = x);
    },
  };
}
let addArz = gety();

addArz.changeLoc(5505);

console.log(addArz);
//

const AnotherMsg = new String("Fara");
const message = "       FarAmarz-1          ";

let trim = (x) => {
  return x.trim().toupperCase();
};
console.log(trim(message));
//
const Dwork4 = (event) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Dwork4;
