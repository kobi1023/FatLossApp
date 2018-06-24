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
                () => logIn(navigate)
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

async function logIn(navigate) {

  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('435042850302514', {
      permissions: ['public_profile', 'user_gender'], behavior: 'web'
  });

  if (type === 'success') {
    firebase.auth().signInAndRetrieveDataWithCredential(firebase.auth.FacebookAuthProvider.credential(token)).then(function(authData) {
        navigate("Welcome", {
          firstName: authData.additionalUserInfo.profile.first_name, 
          picture: authData.additionalUserInfo.profile.picture.data.url,
          email: authData.additionalUserInfo.profile.email,
          gender: authData.additionalUserInfo.profile.gender,
          birthday: authData.additionalUserInfo.profile.birthday
        });
        firebase.database().ref('users/' + authData.user.uid).set({
          firstName: authData.additionalUserInfo.profile.first_name, 
          picture: authData.additionalUserInfo.profile.picture.data.url,
          email: authData.additionalUserInfo.profile.email,
          gender: authData.additionalUserInfo.profile.gender,
          birthday: authData.additionalUserInfo.profile.birthday
          }
        ).catch((error) => {
          console.log("error: " + error);
        });
      }
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
