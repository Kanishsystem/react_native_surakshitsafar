import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SmartSoftAccord } from "soft_digi_native";
import ComStyles from "../../../styles/ComStyles";

const AppFaq = () => {
  const Crop_body = () => {
    return (
      <>
        <Text>
          CROP is a reward program that unifies customer loyalty across multiple
          businesses and participating brands through a common point system.
          This effectively means increased flexibility for customers to utilise
          their loyalty points across our ecosystem and without having to worry
          about managing trade specific loyalty programs. The points earned
          through our program can be redeemed across all our participating
          brands irrespective of the source of earnings. We bring Australia’s
          favourite brands and partners together to offer you incredible
          benefits, all in one platform.
        </Text>
      </>
    );
  };
  const Benefits_body = () => {
    return (
      <>
        <Text>
          A key benefit of being a CROP member is the flexibility to earn and
          redeem loyalty points across a wide range of participating brands.
          Gone are the days when loyalty points earned from ‘A’ business could
          be redeemed for benefits with ‘A’ only. Our program aims to make
          customer loyalty, trade agnostic, where you are no longer limited to
          loyalty programs specific to trade. In other words, it’s a unification
          of customer loyalty across our ecosystem with a commonly driven
          program accepted by all participating brands. Loyalty points earned
          from ‘A’ business can be redeemed for benefits across ‘A to Z’
          businesses. Other benefits include:
          <ul>
            <li>Great deals and offers from our participating brands.</li>
            <li>
              Unlimited validity for points earned. Your points don’t expire.{" "}
            </li>
            <li>Progressive rewards for CROP loyalty.</li>
          </ul>
        </Text>
      </>
    );
  };

  const SignUp_body = () => {
    return (
      <>
        <Text>
          Our process of sign up is simple and extremely user friendly. You can
          sign up for the program either through our website or through our
          mobile app. You will require either an email ID or mobile number to
          sign up.{" "}
        </Text>
        <ul>
          <li>
            To sign up through our website, access
            <a> https://cropglobalservices.com/ </a>click on register option
            provided and follow the steps to sign up.{" "}
          </li>
          <li>
            To sign up through our mobile app, download the CROP app from your
            play store if you are using an android device or the app store if
            you are using an apple device, click on register option provided and
            follow the steps to sign up.{" "}
          </li>
        </ul>
        <Text>
          You will be asked to verify your details through an OTP (One-time
          password) sent on mobile if you registered using your mobile number or
          a verification code sent on email if you have registered using your
          email ID. Your registration process is complete upon successful
          verification.
        </Text>
      </>
    );
  };

  const Otp_body = () => {
    return (
      <>
        <Text>
          The OTP can take up to 30 seconds to arrive. If you haven't received
          the OTP from CROP beyond the stated time, then click the 'Resend OTP'
          link on the registration screen. If your verification OTP still hasn't
          arrived within 30 seconds of your second effort, then the mobile
          number you have entered may be incorrect. If it is, just begin the
          sign-up process again, entering the correct mobile number.
        </Text>
      </>
    );
  };

  const Email_body = () => {
    return (
      <>
        <Text>
          The verification email can take up to 10 minutes to arrive. If you
          haven't received an email from CROP with the verification code, then
          please check your spam or junk folders first. If it's not there, then
          click the 'Resend email' link on the registration screen. If your
          verification email still hasn't arrived within 10 minutes of your
          second effort, then the spelling of your email may be incorrect. If it
          is, just begin the sign-up process again, entering the correct email
          address.
        </Text>
      </>
    );
  };

  const Subscription_body = () => {
    return (
      <>
        <Text>
          There are no subscription charges for our program. Our service is
          totally free of cost and you are not required to pay anything either
          for sign up or for being an active CROP member.
        </Text>
      </>
    );
  };

  const Registered_body = () => {
    return (
      <>
        <Text>
          Well, the short answer is immediate. To elaborate, once you have
          registered on CROP you are ready to enjoy the benefits offered by us
          as well as our participating brands. In addition to deals and offers,
          the benefits include earning CROPs for purchase transactions and a
          wide range of redemption options.
        </Text>
      </>
    );
  };

  const AnotherPerson_body = () => {
    return (
      <>
        <Text>
          Only one person can be linked to each CROP account. Additional members
          can register separately to create their own account
        </Text>
      </>
    );
  };

  const LoginPin_body = () => {
    return (
      <>
        <Text>
          To reset your CROP Pin, please click on <a>Forgot Pin</a> link on the
          login page. You will be redirected to a new page where you are
          required to enter your email ID or mobile number. Enter your details
          here and click send code to receive an OTP on your email ID or mobile
          number. Upon entering the correct OTP and successfully verification,
          you would get redirected to the Pin reset page. Once your Pin is
          successfully reset, you would be able to login in once again using
          your new Pin.{" "}
        </Text>
      </>
    );
  };

  const Customer_body = () => {
    return (
      <>
        <Text>
          Easy! Our FAQs on our website mostly address commonly asked questions.
          If you still haven’t got what you are looking for, just connect with
          our customer support team via the<a> Help </a>tab available on our
          website and/or mobile app. Depending on your selection our support
          team would engage with you. We usually respond to all emails within 3
          business days (excluding weekends and public holidays).{" "}
        </Text>
      </>
    );
  };

  const Complaint_body = () => {
    return (
      <>
        <Text>
          We will provide you with a reference number for your request or
          complaint. Your ticket will then be addressed by a member of our
          customer support team. You will receive a notification from us once
          its resolved. We usually address all tickets within 3 business days
          (excluding weekends and public holidays).
        </Text>
      </>
    );
  };

  const Credited_body = () => {
    return (
      <>
        <Text>
          In case CROPs have not been credited to your account or you have
          missed claiming CROPs for past transactions, you can lodge a request
          with us. You will need to click on<a> Claim Missing CROPs </a>in the
          Support tab under the Help option and follow the steps to lodge your
          request. Please keep a copy of your invoice available since you would
          need to upload it in your claim request. All missed CROPs can be
          claimed only within 90 days of the transaction date.{" "}
        </Text>
      </>
    );
  };

  const Payment_body = () => {
    return (
      <>
        <Text>
          All credit cards (Amex, Mastercard and Visa) and debit cards are
          accepted payment methods. In addition, you can also use third party
          payment services such as Afterpay, and PayPal.
        </Text>
      </>
    );
  };

  const data = [
    {
      title: "What is CROP?",
      bodyFunction: Crop_body(),
    },
    {
      title: "What are the benefits of being a CROP member?",
      bodyFunction: Benefits_body(),
    },
    {
      title: "How can I sign up for the program?",
      bodyFunction: SignUp_body(),
    },
    {
      title: "‍What do I do if I haven't received the OTP?",
      bodyFunction: Otp_body(),
    },
    {
      title:
        "What do I do if I haven't received the verification code over email?",
      bodyFunction: Email_body(),
    },
    {
      title: "What are the subscription charges for the program?",
      bodyFunction: Subscription_body(),
    },
    {
      title:
        "Once I have registered for CROP how long would it take before I can start enjoying the benefits?",
      bodyFunction: Registered_body(),
    },
    {
      title: "Can I add another person to my membership?",
      bodyFunction: AnotherPerson_body(),
    },
    {
      title: "I forgot my CROP login Pin. How can I reset it?",
      bodyFunction: LoginPin_body(),
    },
    {
      title: "If I have got any questions, how can I contact customer support?",
      bodyFunction: Customer_body(),
    },
    {
      title: "What happens after I submit a complaint or request?",
      bodyFunction: Complaint_body(),
    },
    {
      title: "What should I do if CROPs have not been credited to my account?",
      bodyFunction: Credited_body(),
    },
    {
      title: "What payment methods are accepted?",
      bodyFunction: Payment_body(),
    },
  ];
  return (
    <>
      <SafeAreaView style={ComStyles.safeView}>
        <ScrollView>
          <View style={ComStyles.viewBlock}>
            <SmartSoftAccord data={data} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFaq;
