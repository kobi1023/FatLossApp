export const ABSIstatusEnum = {"veryLow":1, "low":2, "average":3, "high": 4, "veryHigh": 5};

export default class ABSI {
    constructor(bmi, height, waistCircum, age,  gender){
        const formatedWaist = waistCircum / 100;
        const formatedHeight = height / 100;
        
    	// Calculate ABSI.
        this.absi = formatedWaist / (Math.pow(bmi, 2/3) * Math.pow(formatedHeight, 1/2)); 
	
        // Calculate ABSIz.
        const absiFactors = getAbsiMeanAndStandardDeviation(gender, age);
        this.absiz = (this.absi - absiFactors.ABSIMean) / absiFactors.ABSISD;
        this.absiz.toFixed(5);
            
        // Set Status & Description.
        if (this.absiz < -0.868){
            this.status = ABSIstatusEnum.veryLow;	
            this.description = "Very Low";
        }
        else if (this.absiz >= -0.868 && this.absiz <= -0.272){
            this.status = ABSIstatusEnum.low;	
            this.description = "Low";
        }
        else if (this.absiz >= -0.272 && this.absiz <= 0.229){
            this.status = ABSIstatusEnum.average;	
            this.description = "Average";
        }
        else if (this.absiz >= 0.229 && this.absiz <= 0.798){
            this.status = ABSIstatusEnum.high;	
            this.description = "High";
        }
        else if (this.absiz > 0.798){
            this.status = ABSIstatusEnum.veryHigh;	
            this.description = "Very High";
        }   
    }
    
    status(){
        return this.status;
    }

    get description(){
        return this.description;
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
