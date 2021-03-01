import React, {Component} from 'react'
import {View, Text} from 'react-native'

class SignupScreen extends Component{
  render(){
    const navigation = this.props.navigation;
    return(
    <View style={ styles.container }>
        <Text 
          //style={styles.Login}
          onPress={() => navigation.navigate('Login')}>
            Back to Login
        </Text>
    </View>)
  }
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      //alignItems: "center",
      paddingHorizontal: 10
    }
});