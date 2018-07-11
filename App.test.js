import React from 'react';
import App from './App';
import BMI from './calculators/bmi';
import {BMIstatusEnum} from './calculators/bmi';
import ABSI from './calculators/absi';
import {ABSIstatusEnum} from './calculators/absi';
import {expect} from 'chai';

// import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

//BMI.
describe('BMI Tests', function () {
  it('should be normalWeight for: height=191 & weight=90', () => {
    const bmi = new BMI(191, 90);
    expect(bmi.status).to.equal(BMIstatusEnum.normalWeight);
  });
}
         
//ABSI.
describe('ABSI Tests', function () {
  it('should be low for : height=191, weight=90, age=42, gender=male, waist=93', () => {
    const bmi = new BMI(191, 90);
    const absi = new ABSI(bmi.status, 191, 93, 42,  "male");
    expect(absi.status).to.equal(ABSIstatusEnum.low);
  });
}      
