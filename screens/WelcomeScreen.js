import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import firebase from '../plugins/firebase';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
      };
    render() {
        var {navigate} = this.props.navigation;
        var userInfo = this.props.navigation.state.params;

        var user = firebase.auth().currentUser;
        console.log("firstName: " + user.firstName);

        return (
        <View style={styles.container}>
            <Avatar
              size="xlarge"
              rounded
              source={{uri: userInfo.picture}}
              activeOpacity={0.7}
            />
            <Text>Name: {userInfo.name}</Text>
            <Text>Email: {userInfo.email}</Text>
            <Text>Birthday: {userInfo.birthday}</Text>
            <Text>Gender: {userInfo.gender}</Text>
            <Button
              onPress = {() => navigate("Measurements", {})}
              title="GO TO MEWASUREMENTS"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              //buttonStyle={{backgroundColor: "rgba(59,89,152,1)", borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
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
