import { View } from "react-native";
import { SmartSoftButton } from "soft_digi_native";

const MoreIndex = ({ navigation }) => {
    const navs = [
        {title:"About Us",navIndex:"more-about-us"},
        {title:"Get A Mate",navIndex:"more-get-mate"}
    ]
    return (
       <View>
        {
            navs.map((item,index)=>{
                return   <SmartSoftButton key={index} label={item.title} onClick={()=>navigation.navigate(item.navIndex)} />
            })
        }
          
       </View>
    );
  };

  export default MoreIndex;