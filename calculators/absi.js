export const ABSIstatusEnum = {"veryLow":1, "low":2, "average":3, "high": 4, "veryHigh": 5};

export default class ABSI {
    constructor(bmi, height, waistCircum, age,  gender){
        const formatedWaist = waistCircum / 100;
        const formatedHeight = height / 100;
        
    	// Calculate ABSI.
        this.absi = formatedWaist / (Math.pow(bmi, 2/3) * Math.pow(formatedHeight, 1/2)); 
	
	// Calculate ABSIz.
        const absiFactors = getAbsiMeanAndStandardDeviation(gender, age);
        this.absiz = (absi - absiFactors.ABSIMean) / absiFactors.ABSISD;
        this.absiz.toFixed(5);
	    
	// Set Status & Description.
    	if (absiz < -0.868){
	    this.status = ABSIstatusEnum.veryLow;	
            this.description = "Very Low";
	}
        else if (absiz >= -0.868 && absiz <= -0.272){
	    this.status = ABSIstatusEnum.low;	
            description = "Low";
	}
        else if (absiz >= -0.272 && absiz <= 0.229){
	    this.status = ABSIstatusEnum.average;	
            description = "Average";
	}
	else if (absiz >= 0.229 && absiz <= 0.798){
	    this.status = ABSIstatusEnum.high;	
            description = "High";
	}
        else if (absiz > 0.798){
	    this.status = ABSIstatusEnum.veryHigh;	
            description = "Very High";
	}
    }
    
    status(){
        return this.status;
    }

    description(){
        return this.description
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
