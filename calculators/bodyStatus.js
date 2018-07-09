import ABSI from '.absi';
import BMI from '.bmi';

var BodyStatus = {
    calculateStatus: function(weight, height, waistCircum, age,  gender) {
        const bmi = new BMI(weight, height);
        const absiz = new ABSI(bmi, height, waist, age, gender);
       
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
   
   // if (bmi.status >= bmi.statusEnum.overweight & absiz.status >= absiz.statusEnum.high)
    
   return true;
}

function isSkinnyFat(bmi, absiz) {  
   
   // if (bmi.status = bmi.statusEnum.underweight & absiz.status >= absiz.statusEnum.high) 
    
   return true;
}

function isSkinny(bmi, absiz) {
    
   // if (bmi.status = bmi.statusEnum.underweight & absiz.status = absiz.statusEnum.veryLow) 
    
   return true;
}

function isNormalWeight(bmi, absiz) {
    
   // if (bmi.status <= bmi.statusEnum.normalWeight & absiz.status = absiz.statusEnum.average) 
    
   return true;
}

module.exports = BodyStatus;
