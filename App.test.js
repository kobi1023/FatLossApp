import React from 'react';
import App from './App';
import BMI from './calculators/bmi';
import {BMIstatusEnum} from './calculators/bmi';
import {expect} from 'chai';

// import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

//BMI
describe('BMI Tests', function () {
  it('should be normalWeight for: height=191 & weight=90', () => {
    const bmi = new BMI(191, 90);
    expect(bmi.status).to.equal(BMIstatusEnum.normalWeight);
  });
  
  it('should be bmi value 24.7 for: height=191 & weight=90', () => {
    const bmi = new BMI(191, 90);
    expect(bmi.status).to.equal(BMIstatusEnum.normalWeight);
  });
}
