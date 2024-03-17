import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import TextStyles from "../../../styles/TextStyles";
import {
  CONTACTUS,
  CONTACTUSFOURTHLOGO,
  CONTACTUSLOGO,
  CONTACTUSSECONDLOGO,
  CONTACTUSTHIRDLOGO,
} from "../../../Service/imageservices";
import SmartColumns from "soft_digi_native/dist/general/SmartColumns";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import SmartMap from "soft_digi_native/dist/general/SmartMap";
import { SmartSoftMap } from "soft_digi_native";
import { ScrollView } from "react-native-web";

const ContactUs = () => {
  const data_contact = [
    {
      image: CONTACTUSLOGO,
      title: "Technical Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      image: CONTACTUSSECONDLOGO,
      title: "General Enquiries",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      image: CONTACTUSTHIRDLOGO,
      title: "Complaint FollowUp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      image: CONTACTUSFOURTHLOGO,
      title: "Business Enquiries",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  const displayFunctionNew = (item) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <SmartColumn width={3} key={"ContactUsFirstcolumn"}>
          <Image style={styles.contactUsLogo} source={item.image}></Image>
        </SmartColumn>
        <SmartColumn width={9} key={"ContactUsFirstcolumn"}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </SmartColumn>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ViewContainer}>
            <Text style={TextStyles.subTitle}>Contact us</Text>
            <Image style={styles.contactUsImage} source={CONTACTUS}></Image>
            <SmartSoftMap
              data={data_contact}
              mapFunction={displayFunctionNew}
              width={12}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  ViewContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contactUsImage: {
    height: 130,
    width: 200,
    margin: 20,
  },
  contactUsLogo: {
    height: 50,
    width: 70,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    display: "flex",
    flexWrap: "wrap",
    padding: 2,
    textAlign: "justify",
  },
});
export default ContactUs;
