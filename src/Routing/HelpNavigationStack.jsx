import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import ContactUs from "../pages/Help/Support/ContactUs";
import ClaimMissingCrops from "../pages/Help/Support/ClaimMissingCrops";
import HelpIndex from "../pages/Help/HelpIndex";
import RequestAndComplaint from "../pages/Help/Support/RequestAndComplaint";
import RateOurService from "../pages/Help/Feedback/RateOurService";
import PrivacyAndDataRights from "../pages/Help/ImportantInformation/PrivacyAndDataRights";
import TermsAnsConditions from "../pages/Help/ImportantInformation/TermsAnsConditions";
import AppFaq from "../pages/Help/ImportantInformation/AppFaq";

const HelpNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="help-index" component={HelpIndex} options={{ headerShown: false }} />
      <Stack.Screen name="help-contact-us" component={ContactUs}  options={{ title: 'Contact Us' }} />
      <Stack.Screen name="help-missing-crops" component={ClaimMissingCrops} options={{ title: 'Claim Missing Crops' }} />
      <Stack.Screen name="help-request" component={RequestAndComplaint} options={{ title: 'Request & Complain' }} />
      <Stack.Screen name="help-rate-our-service" component={RateOurService} options={{ title: ' Rate Our Service' }} />

      <Stack.Screen name="help-privacy-data" component={PrivacyAndDataRights} options={{ title: 'Privacy & Rights' }} />
      <Stack.Screen
        name="help-terms-conditions"
        component={TermsAnsConditions}
        options={{ title: 'Terms & Conditions' }}
      />
      <Stack.Screen name="help-faq" component={AppFaq} options={{ title: 'FAQ' }} />
    </Stack.Navigator>
  );
};

export default HelpNavigationStack;
