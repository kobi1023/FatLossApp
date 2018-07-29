import React from 'react';
import { StyleSheet, Text, View, AlertIOS, Image  } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../plugins/firebase';
import Onboarding from 'react-native-onboarding-swiper';

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
        <Onboarding
          showSkip={false}
          showDone={false}
          bottomBarHighlight={false}
          bottomBarHeight={50}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('./images/circle.png')} />,
              title: 'Body Structure Identification.',
              subtitle: 'Each person has a different physique and therefore needs a unique diet plan, our innovative technology identify your body structure and behaviour and guide you to weight loss success.',
            },
            {
              backgroundColor: '#fe6e58',
              image: <Image source={require('./images/square.png')} />,
              title: 'AI-Powered Weight Goals.',
              subtitle: 'Weight goals are automatically defined by your body structure and it's unique weight changes behaviors.',
            },
            {
              backgroundColor: '#fe6e58',
              image: <Image source={require('./images/square.png')} />,
              title: 'Revolutionary Diet Tracker.',
              subtitle: 'Stop counting calories, Tracking your diet has never been so simple and effective.',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('./images/triangle.png')} />,
              title: 'Start Losing Weight Today!',
              subtitle: (
                <Button
                  onPress = {
                    () => logIn(navigate)
                  }
                  title="LOG IN WITH FACEBOOK"
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  buttonStyle={{backgroundColor: "rgba(59,89,152,1)", borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
                  containerStyle={{marginVertical: 10, height: 40, width: 200}}
                />
              ),
            },
          ]}
        />
        {/* <Button
              onPress = {
                () => logIn(navigate)
              }
              title="LOG IN WITH FACEBOOK"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              buttonStyle={{backgroundColor: "rgba(59,89,152,1)", borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
              containerStyle={{marginVertical: 10, height: 40, width: 200}}
        /> */}
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
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
