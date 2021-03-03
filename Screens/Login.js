import React, {Component} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'


class LoginScreen extends Component{
  render(){
    const navigation = this.props.navigation;
    return(
    <View style={ styles.container }>

        <TouchableOpacity
          style={styles.EmailBox}>
          <Text>
            Email:
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.PasswordBox}>
          <Text>
            Password:
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.LoginBox}>
          <Text
            style={styles.LoginText}>
            Login
          </Text>
        </TouchableOpacity>

        <Text 
          style={styles.SignupText}>
            Don't have an account? <Text style={styles.SignupText2}
              onPress={() => navigation.navigate('Signup')}>
              Sign up 
            </Text>
        </Text>

        <TouchableOpacity
          style={styles.Skipbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style=
          {styles.SkipText}> Skip to Homepage 
          </Text>
        </TouchableOpacity>
          
        
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    paddingHorizontal: 10
  },
  EmailBox: {
    backgroundColor: "#dfdfdf",
    padding: 10,
    alignSelf: "center",
    width : "75%",
    borderRadius: 10,
  },
  PasswordBox: {
    backgroundColor: "#dfdfdf",
    padding: 10,
    alignSelf: "center",
    width: "75%",
    borderRadius: 10,
    top: 25,
  },
  LoginBox: {
    backgroundColor: "#f08200",
    padding: 10,
    alignSelf: "center",
    width : "75%",
    borderRadius: 10,
    top: 50,
    alignItems: "center",
  },
  LoginText: {
    color: "white",
    fontWeight: "bold",
  },
  SignupText: {
    alignSelf: "center",
    top: 160,
  },
  SignupText2: {
    //alignSelf: "center",
    //top: 160,
    fontWeight: "bold",
    color: "#f08200",
  },
  Skipbutton: {
    backgroundColor: "#f08200",
    //borderwidth : 1,
    height : 35,
    width : "45%",
    borderRadius: 20,
    paddingVertical: 4,
    //padding: 10
    alignSelf: "center",
    alignItems: "center",
    elevation: 8,
    top: 200
  },
  SkipText: {
    fontSize: 16,
    fontWeight: "bold",
    //alignSelf: "center",
    color: "white",
  }
});

export default LoginScreen;


//Add SafeAreaView?