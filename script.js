function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var height = prompt("What is your height in meters?");
var weight = prompt("What is your weight in kilograms?");
height = parseFloat(height);
weight = parseFloat(weight);

var bmi = bmiCalculator(weight, height);

if (bmi < 18.5) {
    alert("Your BMI is " + bmi + ". You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Your BMI is " + bmi + ". You have a normal weight.");
} else if (bmi > 24.9) {
    alert("Your BMI is " + bmi + ". You are overweight.");
}
