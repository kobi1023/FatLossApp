import React from 'react';
import App from './App';
import BMI from './calculators/bmi';
import {BMIstatusEnum} from './calculators/bmi';
import ABSI from './calculators/absi';
import {ABSIstatusEnum} from './calculators/absi';
import BodyShape from './calculators/bodyShape';
import {BodyShapeStatusEnum} from './calculators/bodyShape';

import {expect} from 'chai';

// import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

//BMI.
describe('BMI Tests:', function () {
  it('should be -normalWeight- for: height=191 & weight=90', () => {
    const bmi = new BMI(191, 90);
    expect(bmi.status).to.equal(BMIstatusEnum.normalWeight);
  });

  it('should be value 24.7 for: height=191 & weight=90', () => {
    const bmi = new BMI(191, 90);
    expect(bmi.value).to.equal("24.67");
  });

});
         
//ABSI.
describe('ABSI Tests:', function () {
  it('should be -low- for: height=191, weight=90, age=42, gender=male, waist=93', () => {
    const bmi = new BMI(191, 90);
    const absi = new ABSI(bmi.value, 191, 93, 42,  "male");
    expect(absi.status).to.equal(ABSIstatusEnum.low);
  });
}); 

//Body Status.
describe('Body Shape Tests:', function () {
  it('should be -fit- for: gender=male, age=42, height=191, weight=90, waist=93', () => {
    const userProfile = {"gender": "male", "age": 42, "height": 191, "weight": 90, "waist": 93}
    const bodyShape = new BodyShape(userProfile);
    expect(bodyShape.status).to.equal(BodyShapeStatusEnum.fit);
  });
  
  it('should be -athletic- for: gender=female, age=40, height=174, weight=67, waist=67', () => {
    const userProfile = {"gender": "female", "age": 40, "height": 174, "weight": 67, "waist": 74}
    const bodyShape = new BodyShape(userProfile);
    expect(bodyShape.status).to.equal(BodyShapeStatusEnum.athletic);
  });
});      
