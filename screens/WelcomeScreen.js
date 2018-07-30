import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Tile } from 'react-native-elements';
import firebase from '../plugins/firebase';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: "",
        header: null
      };
      constructor(props) {
        super(props);
        // this.state = {
        //   firstName: "",
        //   picture: "https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png",
        //   email: "",
        //   gender: "",
        //   birthday: ""
        // };
      }

    // componentDidMount() {
    //   var userId = firebase.auth().currentUser.uid;
    //   firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    //     this.setState({firstName: snapshot.val().firstName});
    //     this.setState({picture: snapshot.val().picture});
    //     this.setState({email: snapshot.val().email});
    //     this.setState({gender: snapshot.val().gender});
    //     this.setState({birthday: snapshot.val().birthday});
    //   });
    // }

    render() {
        var {navigate} = this.props.navigation;
        //var userInfo = this.props.navigation.state.params;

        // if (this.state.firstName === "") {
        //   return (
        //     <View style={styles.container}>
        //       <Text>Loading...</Text>
        //     </View>
        //   ) 
        // }

        return (
            <Tile
              imageSrc = {{uri: this.props.navigation.state.params.picture}}
              title = {this.props.navigation.state.params.firstName}
              //featured  
              height = {700}
              caption = {this.props.navigation.state.params.email}
              contentContainerStyle = {{flex:1}}
            >    
              <View style={styles.container}>
                <Text>Birthday: {this.props.navigation.state.params.birthday}</Text>
              </View>
            </Tile>
            //<View style={styles.container}>
            //    <Avatar
            //      size="xlarge"
            //      rounded
            //      source={{uri: this.props.navigation.state.params.picture}}
            //      activeOpacity={0.7}
            //    />
            //    <Text>Name: {this.props.navigation.state.params.firstName}</Text>
            //    <Text>Email: {this.props.navigation.state.params.email}</Text>
            //    <Text>Birthday: {this.props.navigation.state.params.birthday}</Text>
            //    <Text>Gender: {this.props.navigation.state.params.gender}</Text>
            //    <Button
            //      onPress = {() => navigate("Height", {})}
            //      title="GO TO HEIGHT"
            //      titleStyle={{fontWeight: 'bold', fontSize: 18}}
            //      //buttonStyle={{backgroundColor: "rgba(59,89,152,1)", borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
            //      containerStyle={{marginVertical: 10, height: 40, width: 200}}
            ///>
            //</View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
