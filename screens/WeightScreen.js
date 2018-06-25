import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';

export default class WeightScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weight: 85,
        }
    }
    static navigationOptions = {
        title: "",
        header: null
    };
    render() {
        var {navigate} = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Weight: {this.state.weight}</Text>
            <Slider
                style = {{width: 300}}
                value = {this.state.weight}
                step = {1}
                minimumValue = {50}
                maximumValue = {210}
                onValueChange = {(value) => this.setState({weight: value})} 
            />
            <Button
              onPress = {() => navigate("WaistCircumference", {})}
              title="GO TO WAIST CIRCUMFERENCE"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              containerStyle={{marginVertical: 10, height: 40, width: 200}}
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
