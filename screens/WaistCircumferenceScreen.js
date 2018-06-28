import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';
import firebase from '../plugins/firebase';

export default class WaistCircumferenceScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            waist: 95,
        }
    }
    // static navigationOptions = {
    //     title: "",
    //     header: null
    // };
    render() {
        var {navigate} = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Waist Circumference: {this.state.waist}</Text>
            <Slider
                style = {{width: 300}}
                value = {this.state.waist}
                step = {1}
                minimumValue = {50}
                maximumValue = {210}
                onValueChange = {(value) => this.setState({waist: value})} 
            />
            <Button
              onPress = {() => {
                  this.saveUserWaist(this.state.waist); 
                  navigate("StatusAndGoals", {})
              }}
              title="GO TO STATUS & GOALS"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              containerStyle={{marginVertical: 10, height: 40, width: 200}}
            />
        </View>
        );
    }
    
    saveUserWaist(userWaist){
        const userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/' + userId + "/measurements/").update({waistWC: userWaist}
        ).catch((error) => {
            console.log("error: " + error);
        });
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

