import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native-web'

const TestScreen = ({navigation}) => {

    const items=[
    {title:"Home Screen",link:"home"},
    {title:"Login",link:"logon"},


    ]
  return (
   <>
   <ScrollView >
<View  style={styles.container}>
  {items.map((item, index)=>(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate('home')}>
<View key={index} style={styles.button} >
<Text style={styles.buttonText} >{item.title}</Text>

</View>
</TouchableOpacity>

 ))}
</View>
   </ScrollView>
   </>
  )
}


const styles = StyleSheet.create({
  container: {
   marginTop:100,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    display:"flex"
  
  },
  button:{
    backgroundColor:"blue",
    height:30,
    color:"white"
  

  },
  buttonText:{
    color:"white",
    fontWight:"bold",
    textAlign:"center",
    

  }
 
})

export default TestScreen