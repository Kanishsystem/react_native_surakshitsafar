import React from 'react'
import { View } from 'react-native'
import { SafeAreaView, Text } from 'react-native-web'
import { SmartSoftButton, SmartSoftColumn, SmartSoftColumns, SmartSoftMap } from 'soft_digi_native';
import ProductView from '../../Components/ProductView';
import ProductStyles from '../../styles/ProductStyles';

const Promos = () => {

  const data = [
    { index: 1 ,title:"DINE"},
    { index: 2 ,title:"SERVICE"},
    { index: 3 ,title:"SHOP"},
    { index: 4 ,title:"RETAIL"},

  ];


  const displayFunction = (item) => {
    return (
      <SmartSoftColumns>
          <SmartSoftColumn  width={12}>
      <ProductView />
          
           </SmartSoftColumn>
       
      </SmartSoftColumns>
     
    );
  };
  return (
<>
<SafeAreaView>
  <View style={ProductStyles.PromosContainer}>


  <View style={ProductStyles.EarnCropHeaderView} >
  
    <View  style={{display:"flex",flexDirection:"row"}} >
    <View style={ProductStyles.EarnCropLine}></View>
    <Text style={ProductStyles.EarnCropText}> 
     Promos      
    </Text>
    </View>
    <SmartSoftButton 
    label='All Promos'
    />
   
  
  </View>
  <View>
  <View >
          <SmartSoftMap data={data} mapFunction={displayFunction} width={6} />
        </View>
  </View>
  </View>
</SafeAreaView>

</>
  )
}

export default Promos