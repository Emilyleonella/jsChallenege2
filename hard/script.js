let tom = {
  height: 9,
  mass: 8,
  bmi: function () {
    console.log(this.mass / (this.height * this.height));
  },
};
tom.bmi();

let jerry = {
  height: 10,
  mass: 45,
  bmi: function () {
    console.log(this.mass / (this.height * this.height));
  },
};

jerry.bmi();

let verdict = false;

if (tomBmi < jerryBmi) {
  console.log(`Is Tom's BMI higher than Jwrry's? ${verdict}`);
}

//function bmiCheck(height, mass) {
//return mass / (height * height);
//}
//console.log(`Is Tom's BMI higher than Jerry's? ${num}`);
//console.log(bmiCheck());
