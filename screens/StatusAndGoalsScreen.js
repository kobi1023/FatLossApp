import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import ABSI from '../calculators/absi';
import BMI from '../calculators/bmi';
import BMR from '../calculators/bmr';
import IdealWeight from '../calculators/idealWeight';
import firebase from '../plugins/firebase';

export default class StatusAndGoalsScreen extends React.Component {
    // static navigationOptions = {
    //     title: "",
    //     header: null
    // };

    constructor(props) {
        super(props);
        this.state = {
          status: "",
        };
      }

    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
            
            const userProfile = {"gender": snapshot.val().gender, 
                                 "age": 42, 
                                 "height": snapshot.val().measurements.height, 
                                 "weight": snapshot.val().measurements.weight, 
                                 "waist": snapshot.val().measurements.waistWC}
            const bodyShape = new BodyShape(userProfile);
            this.setState({status: bodyShape.description});

            //const weight = snapshot.val().measurements.weight;
            //const height = snapshot.val().measurements.height;
            //const age = 42;//snapshot.val().age;
            //const gender = snapshot.val().gender;
            //const waist = snapshot.val().measurements.waistWC;
            
            //const bmi = BMI.calculateBMI(weight, height);
            //const bmiDescription = BMI.description(bmi);

            //const absiz = ABSI.calculateABSIScore(bmi, height, waist, age, gender);
            //const absizDescription = ABSI.description(absiz);

            //const bmr = BMR.calculateBMR(weight, height, age, gender);
            //const bmrAndActivity = BMR.addBmrActivity(bmr, null);

            //const idealWeightDevine = IdealWeight.calculateDevineFormula(height, age, gender);
            //const idealWeightHamwi = IdealWeight.calculateHamwiFormula(height, age, gender);
            //const idealWeightMiller = IdealWeight.calculateMillerFormula(height, age, gender);

            //this.setState({bmi: bmi});
            //this.setState({bmiDescription: bmiDescription});
            //this.setState({absiz: absiz});
            //this.setState({absizDescription: absizDescription});
            //this.setState({bmr: bmr});
            //this.setState({bmrAndActivity: bmrAndActivity});
            //this.setState({idealWeightDevine: idealWeightDevine});
            //this.setState({idealWeightHamwi: idealWeightHamwi});
            //this.setState({idealWeightMiller: idealWeightMiller});
        });
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Status & Goals:</Text>
            <Text>bmi: {this.state.bmi}</Text>
            <Text>bmiDescription: {this.state.bmiDescription}</Text>
            <Text>absiz: {this.state.absiz}</Text>
            <Text>absizDescription: {this.state.absizDescription}</Text>
            <Text>bmr: {this.state.bmr}</Text>
            <Text>bmrAndActivity: {this.state.bmrAndActivity}</Text>
            <Text>idealWeightDevine: {this.state.idealWeightDevine}</Text>
            <Text>idealWeightHamwi: {this.state.idealWeightHamwi}</Text>
            <Text>idealWeightMiller: {this.state.idealWeightMiller}</Text>
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
