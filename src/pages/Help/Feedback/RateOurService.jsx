import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  APPFEEDBACK,
  APP_FEEDBACK_LOGO_ONE,
  APP_FEEDBACK_RATE_LOGO,
} from "../../../Service/imageservices";
import TextStyles from "../../../styles/TextStyles";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import { SmartSoftButton } from "soft_digi_native";

const RateOurService = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.ViewContainer}>
          <Text style={TextStyles.subTitle}>Feedback</Text>
          <SmartColumn width={12} key={"RateOurServiceFirstcolumn"}>
            <Image
              style={styles.AppFeedBackImage}
              source={APP_FEEDBACK_LOGO_ONE}
            ></Image>
          </SmartColumn>

          <Text style={{ marginTop: 40 }}>How would you rate our service?</Text>

          <SmartColumn
            width={12}
            style={{ marginTop: 10 }}
            key={"RateOurServiceFirstcolumn"}
          >
            <Image
              style={styles.AppFeedBacklogo}
              source={APP_FEEDBACK_RATE_LOGO}
            ></Image>
          </SmartColumn>

          <SmartSoftButton
            label="Submit"
            type="contained"
            style={{ marginTop: 30 }}
            fullWidth={true}
          />
        </View>
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
  AppFeedBackImage: {
    height: 80,

    // margin:20
  },
  AppFeedBacklogo: {
    height: 54,
  },
});

export default RateOurService;
