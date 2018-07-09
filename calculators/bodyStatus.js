import ABSI from '.absi';
import BMI from '.bmi';
import IdealWeight from '.idealWeight';

var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];

var BodyStatus = {
    calculateStatus: function(weight, height, waistCircum, age,  gender) {
        const bmi = BMI.calculateBMI(weight, height);
        const absiz = ABSI.calculateABSIScore(bmi, height, waist, age, gender);

        const idealWeightDevine = IdealWeight.calculateDevineFormula(height, age, gender);
        const idealWeightHamwi = IdealWeight.calculateHamwiFormula(height, age, gender);
        const idealWeightMiller = IdealWeight.calculateMillerFormula(height, age, gender);
            
        // Over Weight
        // Skinny
        // Skinny Fat
       
        let status = 0;
        if (isOverWeight(bmi, absiz))
          status = 1;
        else if (isSkinnyFat(bmi, absiz))
          status = 2;
        else if (isSkinny(bmi, absiz))
          status = 3;
        else if (isNormalWeight(bmi, absiz))

        this.status = status;
        return status;
    },
    
    description: function(status){
        let description = "";

        return description;
    }
}

function isOverWeight(bmi, absiz) {  
   
   // if (bmi >= overweight & absiz >= high)
    
   return true;
}

function isSkinnyFat(bmi, absiz) {  
   
   // if (bmi = Underweight & absiz >= high) 
    
   return true;
}

function isSkinny(bmi, absiz) {
    
   // if (bmi = Underweight & absiz = very low) 
    
   return true;
}

function isNormalWeight(bmi, absiz) {
    
   // if (bmi <= normal weight & absiz = average) 
    
   return true;
}

module.exports = BodyStatus;
