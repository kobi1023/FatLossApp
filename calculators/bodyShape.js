import ABSI from '.absi';
import {ABSIstatusEnum} from './calculators/absi';
import BMI from '.bmi';
import {BMIstatusEnum} from './calculators/bmi';

export const BodyShapeStatusEnum = {"axorexic":1, "skinny":2, "skinnyFat":3, "average": 4, "fit": 5, "athletic": 6, "built": 7, "chubby": 8, "fat": 9, "muscular": 10};

export default class BodyShape {
    constructor(userProfile){
        const bmi = new BMI(userProfile.weight, userProfile.height);
        const absiz = new ABSI(bmi, userProfile.height, userProfile.waist, userProfile.age, userProfile.gender);
        
        //Fit.
        if (bmi.status == BMIstatusEnum.normalWeight && absiz.status == ABSIstatusEnum.low) {
            this.status = BodyShapeStatusEnum.fit;
            this.description = "Fit";
        }
    }
    
    status(){
        return this.status;
    }

    get description(){
        return this.description;
    }
}
