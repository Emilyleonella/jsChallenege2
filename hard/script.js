let tom = {
  height: 9,
  mass: 8,
  //bmi: function () {
  // console.log(this.mass / (this.height * this.height));
  //},
};
//tom.bmi();

let jerry = {
  height: 10,
  mass: 45,
  //bmi: function () {
  //console.log(this.mass / (this.height * this.height));
  //},
};

//jerry.bmi();

function bmiCheck(mass, height) {
  let check = mass / (height * height);
  return check;
}

console.log(bmiCheck(jerry.mass, jerry.height));
console.log(bmiCheck(tom.mass, tom.height));

let tomBMI = bmiCheck(tom.mass, tom.height);
let jerryBMI = bmiCheck(jerry.mass, jerry.height);
let verdict = false;

if (tomBMI < jerryBMI) {
  console.log(`Is Tom's BMI higher than Jwrry's? ${verdict}`);
}
//console.log(`Is Tom's BMI higher than Jerry's? ${num}`);
//console.log(bmiCheck());
