export const BMIstatusEnum = {"underweight":1, "normalWeight":2, "overweight":3, "obesity": 4};

export default class BMI {
    constructor(height, weight){
        // Calculate BMI.
        const formatedHeight = (height / 100).toFixed(2);
        this.bmi = (weight / Math.pow(formatedHeight,2)).toFixed(2);

        // Set Status & Description.
        if (this.bmi < 18.5) {
            this.status = BMIstatusEnum.underweight;
            this.description = "Underweight";
        }
        else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
            this.status = BMIstatusEnum.normalWeight;
            this.description = "Normal Weight";
        }
        else if (this.bmi >= 25 && this.bmi <= 29) {
            this.status = BMIstatusEnum.overweight;
            this.description = "Overweight";
        }
        else if (this.bmi >= 30) {
            this.status = BMIstatusEnum.obesity;
            this.description = "Obesity";
        }
    }
    
    status(){
        return this.status;
    }

    get description(){
        return this.description;
    }

    get value(){
        return this.bmi;
    }
}
