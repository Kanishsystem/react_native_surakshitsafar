//import liraries
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import {
  HOME_PAGE_ONE,
  HOME_PAGE_THREE,
  HOME_PAGE_TWO,
} from "../Service/imageservices";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ImageSlider = () => {
    const flatlistRef = useRef(null)
    const [slide,setSlide] = useState(1)
    const [previousDisable,setPreviousDisable]=useState(true)
    const [nextDisable,setNextDisable]=useState(false)
  const data = [
    { id: 1, image: HOME_PAGE_ONE },
    { id: 2, image: HOME_PAGE_TWO },
    { id: 3, image: HOME_PAGE_THREE },
    { id: 4, image: HOME_PAGE_ONE },
    { id: 5, image: HOME_PAGE_TWO },
    { id: 6, image: HOME_PAGE_THREE },
    { id: 7, image: HOME_PAGE_ONE },
    { id: 8, image: HOME_PAGE_TWO },
    { id: 9, image: HOME_PAGE_THREE },
  ];
  const onPrevious =()=>{
    console.log('onPrevious')
    if(slide === 1) return;
    if(flatlistRef.current){
        flatlistRef.current.scrollToIndex({index: slide -1})
    }
  }
  const onNext = ()=>{
    console.log('onNext')
    if(slide===data.length) return;
    if(flatlistRef.current){
        flatlistRef.current.scrollToIndex({index:slide +1})
        console.log("index,",data.length)
    }
  }
  return (
    <>
      <SafeAreaView>
        <View  style={styles.container}>
          <FlatList
             ref={flatlistRef}
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={SCREEN_WIDTH}
            snapToAlignment="center"
            decelerationRate={"fast"}
            pagingEnabled={true}
            scrollEventThrottle={0}
            onScroll={(data) => {
              const offset = data.nativeEvent.contentOffset.x / SCREEN_WIDTH;
              const hasDecimal = offset -Math.floor(offset)!==1;
              if(!hasDecimal){
                const newSlide=offset +1
                if(newSlide>=1 || newSlide <= data.length)setSlide(newSlide)
              }
            //   console.log("offset", offset);
            }}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={{ width: SCREEN_WIDTH }}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <Text>{item.id}</Text>
                  </View>
                </>
              );
            }}
          />
        </View>
        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
        <View style={styles.pageBar}>
          <Pressable onPress={()=>onPrevious()} >
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={50}
            />
          </Pressable  >
          </View>
          <Text>Slide Number {slide}</Text>
          <View style={styles.pageBar}>
          <Pressable onPress={()=>onNext()}>

<MaterialCommunityIcons
  name="arrow-right"
  color={"white"}
  size={50}
/>
</Pressable>
          </View>
          
        </View>
      </SafeAreaView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position:"relative"
    
  },
  image: {
    width: "100%",
    height: SCREEN_WIDTH - 10,
    resizeMode: "cover",
    borderRadius: 5,
  },
  pageBar:{
    backgroundColor:"#58D1FC",
    height:50,
    width:50,
    borderRadius:8,
   
    

  }
});

//make this component available to the app
export default ImageSlider;
