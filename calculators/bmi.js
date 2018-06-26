var BMI = {
    calculateBMI: function(weight, height) {
        const formatedHeight = (height / 100).toFixed(2);
        const bmi = (weight / Math.pow(formatedHeight,2)).toFixed(2);
        return bmi;
    },

    description: function(bmi){
        let description = "";

        if (bmi < 18.5)
            description = "Underweight";
        else if (bmi >= 18.5 && bmi <= 24.9)
            description = "Normal Weight";
        else if (bmi >= 25 && bmi <= 29)
            description = "Overweight";
        else if (bmi >= 30)
            description = "Obesity";

        return description;
    }
}

module.exports = BMI;