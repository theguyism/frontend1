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
import React, { Component } from 'react';



const RegisterScreen = ({ navigation }) => {
    return (

      <View style={styles.container}>

        <Text style={styles.header}>Welcome to Sainsbury's 
        {"\n  "}Reserve and Delivery
        </Text>

        <TextInput placeholder="Enter your full name" style={styles.firstinput} mode = "outlined"/>
        <TextInput placeholder="Enter your email address" style={styles.input} mode = "outlined"/>
        <TextInput placeholder="Enter password" secureTextEntry={true} style={styles.input} mode = "outlined"/>
        <TextInput placeholder="Confirm password" secureTextEntry={true} style={styles.input} mode = "outlined"/>

        
        <TouchableOpacity
          style={styles.loginScreenButton}
  
          onPress={() => navigation.navigate('Customer')}
  
          underlayColor="#C8263A"
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

        <Text style = {styles.Ask}>Already have an account? 
        
        <TouchableOpacity
        style = {styles.pressing}
        onPress={() => navigation.navigate('Customer')}
        >
            <Text style = {styles.pressing}> Sign in</Text>
        </TouchableOpacity>

        </Text>

        <Text style = {styles.White}> Or </Text>

        <Text style = {styles.Ask}>Logging in as a staff?

        <TouchableOpacity style = {styles.pressing} onPress={() => navigation.navigate('Staff')}>
            <Text style = {styles.pressing}> Log in</Text>
        </TouchableOpacity>
        </Text>
        
      </View>

    );
  };

  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FE7224",
      alignItems: "center",
      justifyContent: "center",
      marginBottom:5,
    },
    White:{
        color : "white",
        
    },
    pressing:{
        color : "#C8263A",
    },
    firstinput:{
        marginTop:60,
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor:"white",
    },

    header: {
      fontSize: 18,
      color: "white",
      fontWeight:"bold",
      
    },
    sub_header: {
      fontSize: 16,
      color: "#E3AEAE",
      marginTop: 10,
      fontWeight:"bold",
      
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
      marginTop: 50,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#C8263A",
      width:"70%",
      marginBottom:30,
      
    },
  
    loginText: {
      color: "white",
      textAlign:'center',

      
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
        marginBottom:20,
        color:"#E3AEAE",
      }
  });
  