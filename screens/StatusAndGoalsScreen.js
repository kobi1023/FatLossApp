import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import ABSI from '../calculators/absi';
import BMI from '../calculators/bmi';
import BMR from '../calculators/bmr';

export default class StatusAndGoalsScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
    };

    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
            const weight = snapshot.val().measurements.weight;
            const height = napshot.val().measurements.height;
            const age = napshot.val().age;
            const gender = napshot.val().gender
            const waist = napshot.val().measurements.waistWC;
            
            const bmi = BMI.calculateBMI(.weight, height);
            const bmiDescription = BMI.description(bmi);
            const absiz = ABSI.calculateABSIScore(bmi, height, waist, age, gender);
            const absizDescription = ABSI.description(absiz);

            this.setState({bmiDescription: bmiDescription});
            this.setState({absizDescription: absizDescription});
    //     this.setState({email: snapshot.val().email});
    //     this.setState({gender: snapshot.val().gender});
    //     this.setState({birthday: snapshot.val().birthday});
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
