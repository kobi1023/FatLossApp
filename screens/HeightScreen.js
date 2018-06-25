import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Button } from 'react-native-elements';

export default class HeightScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height: 175,
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
            <Text>Height: {this.state.height}</Text>
            <Slider
                style = {{width: 300}}
                value = {this.state.height}
                step = {1}
                minimumValue = {50}
                maximumValue = {210}
                onValueChange = {(value) => this.setState({height: value})} 
            />
            <Button
              onPress = {() => navigate("Weight", {})}
              title="GO TO WEIGHT"
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
