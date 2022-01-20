let tom = {
  height: 9,
  mass: 8,
};

let jerry = {
  height: 10,
  mass: 45,
};

// Function to calculate Bmi
function bmiCheck(mass, height) {
  let check = mass / (height * height);
  return check;
}

// Tom & Jerry's Bmi as variable
let tomBMI = bmiCheck(tom.mass, tom.height);
let jerryBMI = bmiCheck(jerry.mass, jerry.height);

console.log("Toms BMI:", tomBMI);
console.log("Jerry's BMI:", jerryBMI);

let verdict = false;

if (tomBMI < jerryBMI) {
  console.log(`Is Tom's BMI higher than Jwrry's? ${verdict}`);
}
