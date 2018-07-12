import ABSI from './absi';
import {ABSIstatusEnum} from './absi';
import BMI from './bmi';
import {BMIstatusEnum} from './bmi';

export const BodyShapeStatusEnum = {"undefine": 0, "axorexic":1, "skinny":2, "skinnyFat":3, "average": 4, "fit": 5, "athletic": 6, "built": 7, "chubby": 8, "fat": 9, "muscular": 10};

export default class BodyShape {
    constructor(userProfile){
        const bmi = new BMI(userProfile.height, userProfile.weight);
        const absiz = new ABSI(bmi.value, userProfile.height, userProfile.waist, userProfile.age, userProfile.gender);
        
        this.status = BodyShapeStatusEnum.undefine;

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