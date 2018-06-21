import React from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MeasurementsScreen from './screens/MeasurementsScreen';
import StatusAndGoalsScreen from './screens/StatusAndGoalsScreen';

const Navigation = createStackNavigator({
    Intro : {screen: IntroScreen},
    Welcome : {screen: WelcomeScreen},
    Measurements : {screen: MeasurementsScreen},
    StatusAndGoals : {screen: StatusAndGoalsScreen},
});
export default Navigation;
