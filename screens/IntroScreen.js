import React from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../plugins/firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: null };
  }
  static navigationOptions = {
    title: "",
    header: null
  };

  render() {
    var {navigate} = this.props.navigation;
  
    return (
      <View style={styles.container}>
        {/* <Text>By tapping Log In, you agree to our</Text> */}
        {/* <Text>Terms and Privacy Policy.</Text> */}
        <Button
              onPress = {
                () => logIn().then(function(userInfo){
                  // var user = firebase.auth().currentUser;
                  // console.log(user.uid);
                  // firebase.database().ref('users/' + user.uid).set({
                  //       firstName: "kobi",
                  //       blablaName: "blablabla"
                  //     }
                  //   )
                  navigate("Welcome", userInfo)
                })
              }
              title="LOG IN WITH FACEBOOK"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              buttonStyle={{backgroundColor: "rgba(59,89,152,1)", borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
              containerStyle={{marginVertical: 10, height: 40, width: 200}}
        />
        {/* <Text>We dont post anything to Facebook.</Text> */}
      </View>
    );
  }
}

async function logIn() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('435042850302514', {
      permissions: ['public_profile'], behavior: 'web'
  });

  if (type === 'success') {
    firebase.auth().signInAndRetrieveDataWithCredential(firebase.auth.FacebookAuthProvider.credential(token)).then(function(authData) {
        firebase.database().ref('users/' + authData.user.uid).set({
          firstName: authData.additionalUserInfo.profile.first_name, 
          picture: authData.additionalUserInfo.profile.picture.data.url,
          email: authData.additionalUserInfo.profile.email,
          gender: "male",
          birthday: authData.additionalUserInfo.profile.birthday
          }
        ).catch((error) => {
          console.log("error: " + error);
        });
        //console.log("result " + JSON.stringify(result));
        // const userInfo = { 
        //   name: result.additionalUserInfo.profile.first_name, 
        //   picture: result.additionalUserInfo.profile.picture.data.url,
        //   email: result.additionalUserInfo.profile.email,
        //   gender: "male",
        //   birthday: result.additionalUserInfo.profile.birthday
        // };
    });

    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,email,picture.type(large)`);
      const facebookInfo = await response.json();
      const userInfo = { 
        name: facebookInfo.first_name, 
        picture: facebookInfo.picture.data.url,
        email: facebookInfo.email,
        gender: "male",
        birthday: "08/22/1975"
      };
      return userInfo;
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
