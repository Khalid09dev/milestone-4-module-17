var weight = 900;
var heightInFeet = 5.7;

var perFeetInMeter = 0.3048;
var heightInMeter = heightInFeet * perFeetInMeter;
// console.log(heightInMeter);
var unfixedBMI = weight / heightInMeter ** 2;
// console.log(BMI.toFixed(1));
var fixedBMI = unfixedBMI.toFixed(1);
var BMI = fixedBMI;
// console.log(BMI);

if(BMI < 18.5){
    console.log('you are under weight!');
}
    else if(BMI >= 18.5 && BMI <= 24.9){
        console.log('you are normal!')
    }
    else if(BMI >= 25 && BMI <= 29.9){
        console.log('you are overweight!');
    }
else{
    console.log('otherwise you are obese');
}

