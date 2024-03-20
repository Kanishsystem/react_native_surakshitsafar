import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'

import { SmartSoftColumn, SmartSoftColumns } from 'soft_digi_native'
import ContainerStyles from '../Styles/ContainerStyles'


const DetailCard = ({title,description}) => {
  return (
  
    <SmartSoftColumns>
        <SmartSoftColumn width={6}>
         <Text style={styles.cardTitle}>{title}</Text>
        </SmartSoftColumn>      
        <SmartSoftColumn width={6}>
        <Text style={ styles.CurrentLocation}>{description}</Text>
        </SmartSoftColumn>
      </SmartSoftColumns>
  )
}
const styles = StyleSheet.create({
  cardTitle:{
    color:"green",
    fontSize:25
  },

  CurrentLocation: {
    borderWidth: 1,
    borderColor: "black",
    padding: 40,
    borderRadius:10,
    display:"flex",
    flexDirection:"column",
   alignItems:"flex-start",
   justifyContent:"center"
  }
   
});
export default DetailCard;