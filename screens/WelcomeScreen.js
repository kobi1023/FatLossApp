import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import firebase from '../plugins/firebase';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
      };
      constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          picture: "https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png",
          email: "",
          gender: "",
          birthday: ""
        };
      }

    componentDidMount() {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        this.setState({firstName: snapshot.val().firstName});
        this.setState({picture: snapshot.val().picture});
        this.setState({email: snapshot.val().email});
        this.setState({gender: snapshot.val().gender});
        this.setState({birthday: snapshot.val().birthday});
      });
    }

    render() {
        var {navigate} = this.props.navigation;
        //var userInfo = this.props.navigation.state.params;

        if (this.state.firstName === "") {
          return (
            <View style={styles.container}>
              <Text>Loading...</Text>
            </View>
          ) 
        }

        return (
        <View style={styles.container}>
            <Avatar
              size="xlarge"
              rounded
              source={{uri: this.state.picture}}
              activeOpacity={0.7}
            />
            <Text>Name: {this.state.firstName}</Text>
            <Text>Email: {this.state.email}</Text>
            <Text>Birthday: {this.state.birthday}</Text>
            <Text>Gender: {this.state.gender}</Text>
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
