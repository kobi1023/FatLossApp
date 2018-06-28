var ABSI = {
    calculateABSIScore: function(bmi, height, waistCircum, age,  gender) {
        const formatedWaist = waistCircum / 100;
        const formatedHeight = height / 100;
        
        const absi = formatedWaist / (Math.pow(bmi, 2/3) * Math.pow(formatedHeight, 1/2));    
        const absiFactors = getAbsiMeanAndStandardDeviation(gender, age);
        
        const absiz = (absi - absiFactors.ABSIMean) / absiFactors.ABSISD;
        
        return absiz.toFixed(5);
    },
    
    description: function(absiz){
        let description = "";

        return "description";
    }
}

function getAbsiMeanAndStandardDeviation(gender, age) {  
    if (gender == "male")
        var absiLookup = require('./absiMale.json'); 
    else
        var absiLookup = require('./absiFemale.json');
    
    const val = absiLookup.find(function (val) {
		return (age == val.age)
    })
    
	return {ABSIMean: val.ABSIMean , ABSISD: val.ABSISD};
}

module.exports = ABSI;
