import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import ABSI from '../calculators/absi';
import BMI from '../calculators/bmi';
import BMR from '../calculators/bmr';
import firebase from '../plugins/firebase';

export default class StatusAndGoalsScreen extends React.Component {
    // static navigationOptions = {
    //     title: "",
    //     header: null
    // };

    constructor(props) {
        super(props);
        this.state = {
          bmiDescription: "",
          absizDescription: "",
        };
      }

    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
            const weight = snapshot.val().measurements.weight;
            const height = snapshot.val().measurements.height;
            const age = 42;//snapshot.val().age;
            const gender = snapshot.val().gender;
            const waist = snapshot.val().measurements.waistWC;
            
            const bmi = BMI.calculateBMI(weight, height);
            const bmiDescription = BMI.description(bmi);
            const absiz = ABSI.calculateABSIScore(bmi, height, waist, age, gender);
            const absizDescription = ABSI.description(absiz);

            console.log("absiz: " + absiz);

            this.setState({bmiDescription: bmiDescription});
            this.setState({absizDescription: absizDescription});
        });
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Status & Goals:</Text>
            <Text>bmiDescription: {this.state.bmiDescription}</Text>
            <Text>absizDescription: {this.state.absizDescription}</Text>
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
