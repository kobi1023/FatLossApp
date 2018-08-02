import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Tile } from 'react-native-elements';
import firebase from '../plugins/firebase';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';
const ImageHeight = height * 0.55;

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
            <ScrollView>
              <ImageBackground style={styles.thumbnail} source={{uri: this.props.navigation.state.params.picture}} >
                <View >
                    <Text style={styles.text}>
                      {this.props.navigation.state.params.firstName}, {this.props.navigation.state.params.birthday}
                    </Text>
                    <Text style={styles.textdistance}>
                      11 miles
                    </Text>
                </View>
                </ImageBackground>
                <View style={styles.Biocontainer}>
                  <TouchableOpacity style={{alignItems:'center'}} >
                    <Image style={{width:75, height:75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/foobeeapp-52f36.appspot.com/o/cravings%2Fdrinks%2Fbeer.png?alt=media&token=d4f42eb7-713c-45f4-ae98-4329bdcc8b5d'}} />
                    <Text>42</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems:'center'}} >
                    <Image style={{width:75, height:75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/foobeeapp-52f36.appspot.com/o/cravings%2Ffoods%2Favocado.png?alt=media&token=96b7cf87-af67-4900-84a9-bc1aa9cf69b6'}} />
                    <Text>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{alignItems:'center'}} >
                    <Image style={{width:75, height:75,}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/foobeeapp-52f36.appspot.com/o/cravings%2Factivities%2FairBallooning.png?alt=media&token=11b4f35a-6288-4944-bbb8-67b0e60eed3c'}} />
                    <Text>Measurements</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.textView}>To finish setting up your profile, we need aditional body measurements, Ready?</Text>
                <Button title='START' />
            </ScrollView>
            
            //<Tile
            //  imageSrc = {{uri: this.props.navigation.state.params.picture}}
            //  title = {this.props.navigation.state.params.firstName}
              //featured  
            //  height = {700}
            //  caption = {this.props.navigation.state.params.email}
            //  contentContainerStyle = {{flex:1}}
            //>    
            //  <View style={styles.container}>
            //    <Text>Birthday: {this.props.navigation.state.params.birthday}</Text>
            //  </View>
            //</Tile>
            
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
      backgroundColor: 'white',
    },
    Biocontainer: {
      flex: 0.3,
      backgroundColor: 'white',
      flexDirection:'row',
      justifyContent: 'space-around',
      margin:10,
    },
    thumbnail: {
      // alignItems: 'center',
      width: width,
      height: ImageHeight,
      backgroundColor: 'white',
      flex:1,
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      shadowOffset: { width: 2, height: 2 },
      shadowColor: '#000',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      top:ImageHeight - 60,
      left: 15
    },
    textdistance:{
      fontSize: 15,
      color: 'white',
      top:ImageHeight - 50,
      left: 15
    },
    textView: {
      margin:15
     
    },    
  });
