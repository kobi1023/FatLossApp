export const StatusEnum = {"underweight":1, "normalWeight":2, "overweight":3, "obesity": 4};

function BMI (weight, height) {
    // Calculate BMI.
    const formatedHeight = (height / 100).toFixed(2);
    const bmi = (weight / Math.pow(formatedHeight,2)).toFixed(2);
    this.bmi;
    
    // Set Status & Description.
    if (bmi < 18.5) {
        this.status = statusEnum.underweight;
        this.description = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        this.status = statusEnum.normalWeight;
        this.description = "Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 29) {
        this.status = statusEnum.overweight;
        this.description = "Overweight";
    }
    else if (bmi >= 30) {
        this.status = statusEnum.obesity;
        this.description = "Obesity";
    }
}

BMI.prototype.status = function () {
	return this.status;
}

BMI.prototype.description = function () {
	return this.description
}
