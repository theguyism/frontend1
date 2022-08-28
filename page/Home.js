import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Keyboard,
  TextInput
} from "react-native";

import React, { Component } from 'react';




const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sainsbury's</Text>
      <Text style={styles.sub_header}>Reserve & Delivery</Text>
      <Image style={styles.main_img} source={require("../pic1.png")} />
      <TouchableOpacity
        style={styles.loginScreenButton}

        onPress={() => navigation.navigate('Register')}

        underlayColor="#C8263A"
      >
        <Text style={styles.loginText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FE7224",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    color: "white",
    marginTop:5,
   
  },
  sub_header: {
    fontSize: 16,
    color: "#E3AEAE",
    marginTop: 10,
    fontWeight:"bold",
    marginBottom:30,
  },
  main_img: {
    width: 153,
    height: 138,
    borderRadius: 57,
    marginTop: 30,
    marginBottom: 55,
  },

  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#C8263A",
    width:"65%"
  },

  loginText: {
    color: "white",
    textAlign:"center",
  },
});
