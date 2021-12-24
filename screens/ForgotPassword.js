import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";



function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () =>{
      if(email.length > 5){
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
      }    
  }


  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.backgrad}></View>
        <View style={styles.box}>
          <View style={styles.grad}>
            <View style={styles.imageBox}>
              <Image
                style={styles.images}
                source={require("../assets/login-1.png")}
              />
            </View>
            <Text style={styles.Headerfont}>Forgot Password</Text>
          </View>
          <View style={styles.flexing}>
            <Text style={styles.font}>Please Enter Email</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                onChangeText={(text)=> setEmail(text)}
                // textContentType="email"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  grad: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
    height: 180,
    backgroundColor: "#1f7882",
    borderTopRightRadius:18,
    borderTopLeftRadius:18
  },
  input: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    height: 40,
    marginBottom: 15,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    color: "black"
  },

  images: {
    marginTop: 20,
    height: 70,
    width: 70,
    alignSelf: "center"
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.56,
    shadowRadius: 13,
    height: 580,
    textAlign: "center",
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 20,
    backgroundColor: "#F9F7F7",
    borderColor:'#1f7882',
    borderWidth:1.5
  },
  flexing: {
    height: 320,
    justifyContent: "space-evenly"
  },
  container: {
    backgroundColor: "#F9F7F7",
    height: "100%",
    width: "100%"
  },
  Headerfont: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    elevation: 25,
    fontSize: 30,
    color: "#ffffff"
  },
  font: {
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.100000000)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    fontSize: 20,
    color: "#1f7882",
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 5,
    elevation: 25,
    height: 40,
    backgroundColor: "#1f7882",
    borderColor: "#7fffd4",
    // padding: 12,
    borderRadius: 16
  },
  buttonText: {
    color: "#ffff",
    fontSize: 15,
    marginTop: 7,
    alignSelf:'center',
    paddingTop:5
  }
});

export default ForgotPassword;