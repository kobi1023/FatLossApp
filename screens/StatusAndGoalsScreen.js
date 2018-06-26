import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import BMI from '../calculators/bmi';

export default class StatusAndGoalsScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
    };

    componentDidMount() {
        const bmi = BMI.calculateBMI(60, 191);
        console.log("BMI: " + bmi);

        const bmiDscription = BMI.description(bmi);
        console.log("Dscription: " + bmiDscription)
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Status & Goals:</Text>
            <Text>Weight Status: Normal Weight</Text>
            <Text>Ideal Weight: 83.6</Text>
            <Text>First Goal Weight: 89</Text>
            <Avatar
                  size="xlarge"
                  rounded
                  title="GO"
                  activeOpacity={0.7}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
