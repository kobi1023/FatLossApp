var BMR = {
    calculateBMR: function(weight, height, age,  gender) {
        let bmr = null;
        
        if (gender == "male")
          bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        else
          bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        
        return bmr.toFixed(2);
    },

    addBmrActivity: function(bmr, activity){
         //Multiply your BMR by the appropriate activity factor, as follows:
         //Sedentary (little or no exercise): BMR x 1.2
         //Lightly active (light exercise/sports 1-3 days/week): BMR x 1.375
         //Moderately active (moderate exercise/sports 3-5 days/week): BMR x 1.55
         //Very active (hard exercise/sports 6-7 days a week): BMR x 1.725
         //Extra active (very hard exercise/sports & physical job or 2x training): BMR x 1.9
         
         return (bmr * 1.375).toFixed(2);
    }
}

module.exports = BMR;
