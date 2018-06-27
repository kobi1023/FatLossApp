import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import IdealWeight from '../calculators/idealWeight';

export default class StatusAndGoalsScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
    };

    componentDidMount() {
        console.log("Hamwi: " + IdealWeight.calculateHamwiFormula(191, 42, "male"));
        console.log("Devine: " + IdealWeight.calculateDevineFormula(191, 42, "male"));
        console.log("Robinson: " + IdealWeight.calculateRobinsonFormula(191, 42, "male"));
        console.log("Miller: " + IdealWeight.calculateMillerFormula(191, 42, "male"));
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
