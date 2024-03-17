import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { SmartSoftButton } from "soft_digi_native";

const HelpIndex = ({ navigation }) => {
    const helpsNavs = [
        {title:"Contact us",navIndex:"help-contact-us"},
        {title:"Claim Missing Crops",navIndex:"help-missing-crops"},
        {title:"Lodge request or Complaint",navIndex:"help-request"},
        {title:"Rate Our Service",navIndex:"help-rate-our-service"},
        {title:"Privacy and Data",navIndex:"help-privacy-data"},
        {title:"Frequently asked Questions",navIndex:"help-faq"},
        {title:"Terms and Conditions",navIndex:"help-terms-conditions"},
    ]
    return (
       <View>
        {
            helpsNavs.map((item,index)=>{
                return   <SmartSoftButton key={index} label={item.title} onClick={()=>navigation.navigate(item.navIndex)} />
            })
        }
          
       </View>
    );
  };

  export default HelpIndex;