import React from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MeasurementsScreen from './screens/MeasurementsScreen';
import StatusAndGoalsScreen from './screens/StatusAndGoalsScreen';
import HeightScreen from './screens/HeightScreen';
import WaistCircumferenceScreen from './screens/WaistCircumferenceScreen';
import WeightScreen from './screens/WeightScreen';

const Navigation = createStackNavigator({
    Intro : {screen: IntroScreen},
    Welcome : {screen: WelcomeScreen},
    Measurements : {screen: MeasurementsScreen},
    StatusAndGoals : {screen: StatusAndGoalsScreen},
    Height : {screen: HeightScreen},
    WaistCircumference : {screen: WaistCircumferenceScreen},
    Weight : {screen: WeightScreen},
});
export default Navigation;
