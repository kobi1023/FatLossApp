export const BMIstatusEnum = {"underweight":1, "normalWeight":2, "overweight":3, "obesity": 4};

export default class BMI {
    constructor(height, weight){
        // Calculate BMI.
        const formatedHeight = (height / 100).toFixed(2);
        const bmi = (weight / Math.pow(formatedHeight,2)).toFixed(2);
        this.bmi;

        // Set Status & Description.
        if (bmi < 18.5) {
            this.status = BMIstatusEnum.underweight;
            this.description = "Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            this.status = BMIstatusEnum.normalWeight;
            this.description = "Normal Weight";
        }
        else if (bmi >= 25 && bmi <= 29) {
            this.status = BMIstatusEnum.overweight;
            this.description = "Overweight";
        }
        else if (bmi >= 30) {
            this.status = BMIstatusEnum.obesity;
            this.description = "Obesity";
        }
    }
    
    status(){
        return this.status;
    }

    description(){
        return this.description
    }
}
