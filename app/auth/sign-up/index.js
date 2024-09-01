import { View, Text, TextInput,StyleSheet,Pressable, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from '../../../configs/firebaseConfig'
import { useState } from 'react';
export default function index() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [full, setFull] = useState('')
    const navigation= useNavigation()
    const router= useRouter()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    const onCreatAccount = ()=>{
       // console.log("----inside createUserWithEmailAndPassword-----")
        if(email=='' || password=='' || full==''){
            ToastAndroid.show('All fields are required', ToastAndroid.SHORT)
            return
        }
       
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/Mytrip')
    //console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   // console.log(errorMessage)
    // ..
  });

    }
  return (
    <View style={{
        padding:25,
     //   marginTop:60,
        backgroundColor:'white',
        height:'100%',
        paddingTop:40
    }}>
    
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:20
      }}>Create New Account!</Text>
      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit'}}>Name:</Text>
        <TextInput onChangeText={(v)=>setFull(v)} style={styles.input} placeholder='enter name'/>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'outfit'}}>Email:</Text>
        <TextInput onChangeText={(v)=>setEmail(v)} style={styles.input} placeholder='enter email'/>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'outfit'}}>Password:</Text>
        <TextInput  onChangeText={(v)=>setPassword(v)} secureTextEntry={true} style={styles.input} placeholder='enter password'/>
      </View>
      <Pressable onPress={onCreatAccount} style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{ textAlign:'center', color:'white'}}> Create Account</Text>
      </Pressable>
      <Pressable onPress={()=>router.replace('auth/sign-in')} style={{
        padding:15,
      borderWidth:1,
      
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{ textAlign:'center', }}> Back to signin</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:'grey',
        fontFamily:'outfit',

    }
})