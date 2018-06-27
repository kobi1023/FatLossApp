var IdealWeight = {
    calculateDevineFormula: function(height, age,  gender) {
        let ideakWeight = null;
        const heightInInches = (height * 0.3937007874).toFixed(2);
        
        if (gender == "male")
          ideakWeight = 50 + 2.3 * (heightInInches - 60);
        else
          ideakWeight = 45 + 2.3 * (heightInInches - 60);
        
        return ideakWeight.toFixed(2);
    },

    calculateHamwiFormula: function(height, age,  gender){
        let ideakWeight = null;
        const heightInInches = (height * 0.3937007874).toFixed(2);
        
        if (gender == "male")
          ideakWeight = 48 + 2.7 * (heightInInches - 60);
        else
          ideakWeight = 45.5 + 2.2 * (heightInInches - 60);
        
        return ideakWeight.toFixed(2);
    },
    
    calculateRobinsonFormula: function(height, age,  gender){
        let ideakWeight = null;
        const heightInInches = (height * 0.3937007874).toFixed(2);
        
        if (gender == "male")
          ideakWeight = 52 + 1.9 * (heightInInches - 60);
        else
          ideakWeight = 49 + 1.7 * (heightInInches - 60);
        
        return ideakWeight.toFixed(2);
    },
    
    calculateMillerFormula: function(height, age,  gender){
        let ideakWeight = null;
        const heightInInches = (height * 0.3937007874).toFixed(2);
        
        if (gender == "male")
          ideakWeight = 56.2 + 1.41 * (heightInInches - 60);
        else
          ideakWeight = 53.1 + 1.36 * (heightInInches - 60);
        
        return ideakWeight.toFixed(2);
    },
}

module.exports = IdealWeight;
