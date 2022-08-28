import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Keyboard,
  } from "react-native";

  
  
const CustomerScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>

      <Text style={styles.header}>If you are a member,{"\n       "}please log-in</Text>
      <Image style={styles.main_img} source={require("../pic2.png")} />
      
      <TextInput placeholder="Id"  style={styles.input} mode = "outlined"/>
      <TextInput placeholder="Password" secureTextEntry={true} keyboardType="phone-pad" style={styles.input} mode = "outlined"/>

      

      <TouchableOpacity
        style={styles.loginScreenButton}

        onPress={() => navigation.navigate('Home')}

        underlayColor="#C8263A"
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
    );
  };
  
  export default CustomerScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FE7224",
      alignItems: "center",
      justifyContent: "center",
    },
    White:{
        color : "white",
        
    },

    header: {
      fontSize: 18,
      color: "white",
      
    },
    sub_header: {
      fontSize: 16,
      color: "#E3AEAE",
      marginTop: 10,
    },
    main_img: {
      width: 153,
      height: 138,
      borderRadius: 57,
      marginTop: 30,
      marginBottom: 45,
    },
  
    loginScreenButton: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#C8263A",
      borderWidth: 1,
    },
  
    loginText: {
      color: "white",
    },

    input: {
        marginTop:40,
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor:"white",
      },

    Ask:{
        marginTop:15,
        color:"Gray",
      }
  });
  