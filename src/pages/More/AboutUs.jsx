import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import { ABOUTUS_LOGO } from "../../Service/imageservices";

const AboutUs = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ViewContainer} key={"AboutusFirstView"}>
            <SmartColumn width={12}>
              <Image style={styles.aboutUsImage} source={ABOUTUS_LOGO}></Image>
            </SmartColumn>

            <View style={styles.description} key={"AboutusSecondView"}>
              <Text style={{ marginTop: 10 }}>
                CROP Services Pty Ltd is an independent loyalty and rewards
                management company with an aim and objective of consolidating
                ‘Customer Loyalty Programs’ across businesses and trades.
                Headquartered in Melbourne, Australia the company aspires to
                extend a unified loyalty program to customers and trades alike.
              </Text>
              <Text style={{ marginTop: 13 }}>
                Customer loyalty in its current state and form is diversified
                and territorial in nature. Businesses currently offer loyalty
                benefits confined either to their sector or their associated
                affiliations and partnerships. This current positioning is
                age-old and well poised for market disruption. We intend to
                diminish the sectoral boundaries of customer loyalty through a
                ‘One Community One Approach’ model that is not only trade or
                sector agnostic but also extends progressive rewards for long
                term associations. Our offerings are simple,user-friendly and
                easily accessible through our website or mobile app.
              </Text>
              <Text style={{ marginTop: 13 }}>
                Our team comprises of a bunch of enthusiastic individuals that
                are passionate about innovation and customer experience. We're
                constantly thinking of new ways to deliver an experience that is
                unique, delightful and memorable. Its perhaps this inclination
                for innovation that curated the need for Customer Rewards
                Operating Program ‘CROP’ – A program that empowers you and
                rewards your daily spends. In our quest to unify loyalty, we
                will continue to develop the program from strength to strength
                and while we do this, be rest assured that our progress, in no
                way, affects the CROPs accrued by you and the balance in your
                account. The only other thing that we are passionate about is
                your privacy. So, if you have shared your contact information,
                your likes and dislikes, your preferences and interests or any
                other personal information that helps us customise personalised
                offers for you – then be rest assured that your data is safe and
                stays only with us. You can refer to our Privacy Policy for a
                deeper understanding of our data confidentiality practices as
                also Email us on privacy@cropglobalservices.com for any specific
                query.
              </Text>
              <Text style={{ marginTop: 13 }}>
                Whether you are a customer or a business owner you can register
                for our membership. To understand our offers or avail full
                benefits of our program register as a member today!!
              </Text>
            </View>
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
  aboutUsImage: {
    height: 100,
  },
  description: {
    fontSize: 12,
    padding: 2,
    textAlign: "justify",
  },
});

export default AboutUs;
