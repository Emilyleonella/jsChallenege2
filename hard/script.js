let tom = {
  height: 9,
  mass: 8,
};
let jerry = {
  height: 10,
  mass: 45,
};

function bmiCheck(height, mass) {
  let bmi = (mass / height) * height;

  return bmi;
}
console.log(bmiCheck());
let num = false;

//console.log(`Is Tom's BMI higher than Jerry's? ${num}`);
