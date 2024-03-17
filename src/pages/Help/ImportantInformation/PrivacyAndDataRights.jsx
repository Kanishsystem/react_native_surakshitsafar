import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SmartSoftAccord } from "soft_digi_native";
import ComStyles from "../../../styles/ComStyles";

const PrivacyAndDataRights = () => {
  const Cropprivacy_body = () => {
    return (
      <>
        <Text>
          At CROP, your trust forms the basic ethos of our engagement, which is
          why we keep it transparent and simple. Depending on your interests,
          you can read Our Privacy Pledge, Synopsis or the Details.
        </Text>
      </>
    );
  };
  const OurPrivacyPledge_body = () => {
    return (
      <>
        <Text>
          Before we get into the Synopsis or the Details, we want to let you
          know about our Privacy Pledge:
          <ol>
            <li>
              <strong>Trust:</strong> Your trust is core to our business. We
              fully understand the elements of confidentiality and that you
              trust us with your data. We will do our best to maintain your
              trust.
            </li>
            <li>
              <strong>Transparency:</strong> We will keep our engagement
              transparent and simple. Its our way to drive confidence on how we
              handle your data and protect your privacy.
            </li>
            <li>
              <strong>Togetherness:</strong> We operate collectively to help
              protect your data in ways that makes sense. Your feedback and
              recommendations for improvement is inherent to our business.
            </li>
            <li>
              <strong>Technology:</strong> At CROP, we will use the latest
              technology and supplement it with the best tech hands to keep your
              experience outstanding and your data safe and secure.
            </li>
          </ol>
        </Text>
      </>
    );
  };
  const Synopsis_body = () => {
    return (
      <>
        <Text>
          While we strongly recommend that you read through the Details too,
          some salient points we want you to know are:
          <ul>
            <li>
              We work with a number of third parties that hold similar levels of
              integrity and sensitive to the aspect of data confidentiality.
              These include:
            </li>
            <ul type="-">
              <li>
                <strong>Participating Brands –</strong> Businesses, trades and
                merchants who are registered and participating in our CROP
                Program to offer benefits to CROP members.
              </li>
              <li>
                <strong>Partners –</strong> Other businesses that have a special
                arrangement with us to feature their products, services or
                offers on our CROP platform for the benefit of CROP members.
              </li>
              <li>
                <strong>Suppliers –</strong>Our third-party suppliers that help
                us to operate our CROP program and/or platform for technology
                support, payments, marketing and other ancillary services.
              </li>
            </ul>
            <li>
              We may collect personal information from Participating Brands and
              Partners to personalise your experience with CROP. This includes
              information relating to products, services and offers you’ve
              bought from them and your browsing on their websites and apps.
              This may also include historical information prior to them
              becoming Participating Brands and Partners or before you joined
              CROP.
            </li>
            <li>
              We will share personal information with Participating Brands and
              Partners to help them personalise your experience with CROP and to
              develop and market customised offers.
            </li>
            <li>
              You can unsubscribe from our direct marketing initiatives by
              changing the Marketing Notifications and/or Newsletter available
              under My Profile in your account.
            </li>
            <li>
              You can raise a privacy query or make a complaint by contacting us
              at the coordinates reflected in our Privacy Policy.
            </li>
          </ul>
        </Text>
      </>
    );
  };
  const Details_body = () => {
    return (
      <>
        <Text style={{ marginTop: 5 }}>
          In this Privacy Policy, 'us' 'we' or 'our' means CROP Services Pty Ltd
          (ABN 43 664 240 411) and operating with brand name CROP. Our Privacy
          Policy sets outs out how we collect, use, store and disclose your
          personal information.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Our most recent and updated Privacy Policy will always be displayed on
          our website (cropglobalservices.com). As and when we change this
          Privacy Policy, we will update it there and also on our apps. If we
          make any changes to this Privacy Policy that we think are necessary,
          we will notify members through our website, app or email.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>What is ‘Personal Information’</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          When we refer to ‘Personal information’ we follow the meaning as
          defined in the Australian Privacy Act. It essentially means
          information, or an opinion, about an individual who is reasonably
          identifiable, whether the information or opinion is true or not.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Personal information you share with us.</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We will ask you to, or you may choose to provide us with some
          information from time to time. If you are, or are applying to become a
          CROP member, we will need to collect:
        </Text>
        <ul>
          <li>Your name, email address and mobile phone number. </li>
          <li>Your credit card or debit card for payment information.</li>
          <li>Your gender, age, address and interests. </li>
          <li>Your subscription to other loyalty programs.</li>
        </ul>
        <Text style={{ marginTop: 7 }}>
          We may also collect additional data from you when you engage and
          interact with us, including:
        </Text>
        <ul>
          <li>Your communication with us through email and social media. </li>
          <li>
            Your device ID, device type (i.e. smartphone, computer or tablet).
          </li>
          <li>
            Record of engagement to and from our website and apps, IP address,
            location and cookie information.
          </li>
          <li>
            Any other information you provide to us through our website or apps,
            such as location information to help you find nearby participants.
          </li>
          <li>
            Details of the services we provide to you including information to
            help us deliver those services.
          </li>
          <li>
            Information that you have shared through feedback and/or surveys.
          </li>
          <li>
            Interaction history and information you provide when you engage with
            our support team.
          </li>
          <li>
            Other personal information that we ask you to provide to ease your
            dealings with us.
          </li>
        </ul>
        <Text>
          Our collection of personal information directly from you include the
          following instances:
        </Text>
        <ul>
          <li>When you register for CROP membership. </li>
          <li>
            When you opt for any of our communications such as emails or social
            media promotion.
          </li>
          <li>
            When you complete our surveys or participate in our promotions.
          </li>
          <li>
            When you communicate with us through our website, app or customer
            support teams.
          </li>
        </ul>
        <Text>
          If you apply for a job with us, we may collect additional information
          related to your employment history, professional and personal
          references in addition to your personal information. We may collect
          such information from a recruitment consultant, your previous
          employers and others to enable us to decide on your candidature and
          employment.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Sometimes you may be able to deal with us anonymously or by using a
          pseudo identity. If you do so, or if you limit the information you
          provide to us, we may not be able to provide you with the complete
          range of services.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Other personal information we collect. </strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          In addition to the personal information, you share with us we also
          collect personal information about you from others sources with your
          consent or where it is otherwise in accordance with law.
        </Text>
        <Text>
          We also collect personal information about CROP members from the
          following sources:
        </Text>
        <ul>
          <li>
            Our Participating Brands, Partners and other trusted third parties
            listed in this privacy policy.
          </li>
          <li>
            Social media and online platforms such as Meta (Facebook and
            Instagram), LinkedIn and Google.
          </li>
        </ul>
        <Text>
          The additional information that we collect about you though not
          limited to, may include:
        </Text>
        <ul>
          <li>
            Information about your purchases, spend patterns and interests from
            Participating Brands and Partners.
          </li>
          <li>
            Interaction with Participating Brands and Partners, including your
            activity on their websites and apps and engagement on social media.
          </li>
          <li>Your memberships with our Participating Brands and Partners.</li>
          <li>
            Information from publicly available sources, social media and online
            platforms, such as Meta (Facebook and Instagram), LinkedIn and
            Google.
          </li>
          <li>
            Your use of gift cards, vouchers, offers or other benefits that may
            be issued as part of your CROP membership.
          </li>
        </ul>
        <Text>
          This may also include historical information prior to you becoming a
          CROP member or before Participating Brands and Partners were part of
          CROP program as well as more recent interactions.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Why we collect and use your personal information. </strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We, along with our Participating Brands and Partners use your personal
          information to meet the listed objectives. The key objectives for
          collecting, storing, managing, using, analysing and disclosing
          personal information from or about you includes:
        </Text>
        <ul>
          <li>
            Verification of your identity and processing your CROP membership.
          </li>
          <li>
            Driving operational benefits for improved experience of your
            membership.
          </li>
          <li>
            Extending benefits from CROP, our Participating Brands or Partners
            that is customised to your requirements.
          </li>
          <li>
            Performing data analytics to help us better understand what you like
            and want from CROP, our Participating Brands and Partners.
          </li>
          <li>
            Enabling us to notify you with offers, experiences and direct
            marketing that interest you.
          </li>
          <li>
            Enabling our Participating Brands and Partners to provide you with
            offers, experiences and direct marketing that interest you.
          </li>
          <li>
            Communicating for service, support, and administrative needs as also
            identify and fix issues and incidents.
          </li>
          <li>
            Seeking surveys and reviews of CROP, our Participating Brands and
            Partners or any of their products, services or offers.
          </li>
          <li>
            Developing intelligent insights about our members as a whole, or
            groups.
          </li>
          <li>
            Improving our business, including recording interactions for
            training purposes and where we have your consent or otherwise comply
            with applicable law.
          </li>
          <li>
            Responding to queries and complaints, and driving corrective action
            related to experience or data security.
          </li>
          <li>
            Evaluating and managing corporate business transfers, including any
            related business transition activities.
          </li>
          <li>
            Enabling us to meet our legal and regulatory requirements, resolving
            disputes, or protecting and defending our rights.
          </li>
          <li>
            Any other purposes where you have provided us with due consent.
          </li>
        </ul>
        <Text>
          We may analyse the personal information we receive from you with
          personal information we receive about you from Participating Brands
          and Partners to create intelligent insights for mutual benefit.
        </Text>
        <Text style={{ marginTop: 7 }}>
          We, along with our Participating Brands and Partners may also analyse
          your personal information and draw comparatives with the personal
          information of other individuals for a range of purposes including
          performance monitoring of CROP, understanding interests and habits of
          our members to drive efficiency and improvements.
        </Text>
        <Text style={{ marginTop: 7 }}>
          We, along with our Participating Brands and Partners may retain
          personal information about you after you have stopped being a CROP
          Member or after they have stopped being a Participating Brand or
          Partner unless this is prohibited by law. Our Participating Brands and
          Partners have their own privacy policies, which are available on their
          websites, and which explain more about how they handle personal
          information.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Personal information that we share. </strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We may share your personal information for the objectives set out in
          this Privacy Policy with:
        </Text>
        <ul>
          <li>
            Participating Brands and Partners so you can receive the full
            benefits of CROP and to improve marketing.
          </li>
          <li>
            Suppliers and other providers for them to help us operate the CROP
            program and amplify benefits. These include:
          </li>
          <ul type="-">
            <li>
              Payment operators (such as merchants receiving card payments or
              payment processors such as Stripe).
            </li>
            <li>
              Service providers for application and product development,
              technical support and processing, storing, hosting, and analytics.
            </li>
            <li>
              Social media and online platforms, such as Meta (Facebook and
              Instagram), Google, TikTok, Pinterest, LinkedIn, YouTube and
              Twitter for social media management, digital marketing and member
              engagement.
            </li>
            <li>
              Our professional advisers, product development and market research
              teams including those that assist with communicating our offers
              and promotion.
            </li>
            <li>
              Our lawyers or accountants for professional advice where required.
            </li>
          </ul>
        </ul>
        <Text>
          Other third parties we share personal information with may include:
        </Text>
        <ul>
          <li>Your representatives.</li>
          <li>
            Government agencies, regulatory bodies and law enforcement agencies,
            or as required or permitted by law.
          </li>
          <li>
            Other corporate representatives involved in business transfer
            transactions.
          </li>
        </ul>
        <Text>
          <strong>Sharing information overseas</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          Some of our Participating Brands, Partners and Suppliers may transmit
          or store information (including your personal information) that we
          provide to them overseas. This may include disclosures to entities
          located in Canada, United States of America, India, EU Member States
          (including Belgium, Denmark, Finland, Germany, Netherlands), Singapore
          and the United Kingdom.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>
            Direct marketing and personalisation of your CROP experience
          </strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          Once you join CROP and in view of the relationship between us, we will
          send direct marketing offers to you (unless you opt out of it or we
          are limited by law). The direct marketing offers may be sent by email,
          push notification, telephone, SMS, and other permitted means.
        </Text>
        <Text style={{ marginTop: 7 }}>
          You can stop receiving such notifications through any of the following
          means:
        </Text>
        <ul>
          <li>
            Using the unsubscribe link in a direct marketing offer communication
            from us.
          </li>
          <li>
            Unsubscribe from our direct marketing initiatives by changing the
            Marketing Notifications and/or Newsletter available under My Profile
            in your account.
          </li>
          <li>
            Contacting our support team member on the details provided below.
          </li>
        </ul>
        <Text>We also use, subject to compliance with applicable law:</Text>
        <ul>
          <li>
            The personal information we collect from, or about you, to
            personalise and customise the appearance of our website and apps
            specific to you.
          </li>
          <li>
            Online advertising as a way of promoting CROP including customer
            testimonials. The advertisements may include you and may be based on
            personal information we have collected about you, your use of CROP
            or your involvement with Participating Brands and Partners. You may
            be able to limit the personalisation of these advertisements by:
          </li>
          <ul type="-">
            <li>Blocking the use of cookies (see below).</li>
            <li>Using opt-out functionality provided by industry bodies.</li>
            <li>Opting out of Google Ads www.google.com/settings/ads.</li>
            <li>Using features provided by your device.</li>
          </ul>
        </ul>
        <Text>
          <strong>Cookies</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We may collect personal information about you when you use or access
          our website or apps. Like other website and app operators we use
          cookies to help us collect data, which may include personal
          information. We also use tags and pixels or other similar technologies
          on our website and app that help us:
        </Text>
        <ul>
          <li>To authenticate you.</li>
          <li>To maintain your browsing session and your preferences.</li>
          <li>To monitor usage of our websites and apps. </li>
          <li>To provide you with offers and products that interest you.</li>
          <li>To protect the security of our website, apps and members. </li>
          <li>To allow you to interact with social media platforms. </li>
        </ul>
        <Text>
          We use ‘session’ cookies as well as ‘persistent’ cookies to collect
          data that may include your personal information. We then manage this
          data in ways that have been set out in this Privacy Policy.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Some of the cookies, tags, and pixels used on our website and apps are
          created or set for third parties who provide content or services to
          us. These third parties include social media and online platforms such
          as Meta (Facebook and Instagram), Google, Yahoo, Amazon, Snapchat,
          Bing, TikTok, Pinterest, LinkedIn, YouTube and Twitter. The third
          parties may also include digital marketing service providers,
          advertising networks, analytics providers and content providers. See
          below for further description of how we work with Google.
        </Text>
        <Text style={{ marginTop: 7 }}>
          You may change your cookies settings on your web browser to block some
          cookies however if you do so our website or app may not work to its
          full potential. See www.allaboutcookies.org for more information on
          how to change your cookie settings for many common browsers, and to
          learn more about cookies generally.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>
            Working with Google to improve your online experience.
          </strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We use a range of Google services that help us monitor and more
          effectively display our advertising so that we can provide you with a
          customised and delightful experience. If you are signed into your
          Google account when you use CROP, then Google may also combine data
          from your Google account with data of CROP, to help identify you and
          display relevant CROP advertising online, across your devices and
          across the internet. For example, you may see advertising for CROP,
          Participating Brands and Partners on other websites you visit, based
          on intelligence derived from your browsing history.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Google Analytics helps website owners measure how users interact with
          website content. For more information and relevant services from
          Google visit:
        </Text>
        <ul>
          <li>Google Cookies: www.google.com/policies/technologies/types/</li>
          <li>Google’s Privacy Policy: www.google.com/policies/privacy/</li>
          <li>
            Google Technologies: www.google.com/policies/privacy/partners/
          </li>
          <li>Google Analytics: https://tools.google.com/dlpage/gaoptout/</li>
        </ul>
        <Text>
          <strong>Security</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          We strive to keep your personal and confidential information safe and
          secure. This includes building our systems with your privacy and
          security in mind and implementing a range of security measures
          including:
        </Text>
        <ul>
          <li>Maintaining an ongoing cyber security program and team.</li>
          <li>
            Protecting access to personal information through identity
            management systems.
          </li>
          <li>
            Implementing information security, privacy and confidentiality
            related policies and processes.
          </li>
          <li>
            Regularly reviewing our security program and controls to protect
            your personal information appropriately.
          </li>
          <li>
            Future proofing our systems regularly to protect your personal
            information against possible cyber threats.
          </li>
        </ul>
        <Text>
          <strong>Accessing or correcting your personal information</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          You must keep your personal information accurate and relevant at all
          times. Please select ‘My Profile and follow the steps to update any
          changes. For select changes in personal information we may need to
          verify your identity.
        </Text>
        <Text style={{ marginTop: 7 }}>
          You can also contact us using the email address set out in the
          “Contact us” section below.
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Complaints</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          If you wish to make a complaint about how we have handled your
          personal information, you can contact us by selecting the ‘Support’
          tab under the ‘Help’ option. You can also contact us using the email
          address set out in the “Contact us” section below. You will need to
          include your name, contact details and details of your complaint.
        </Text>
        <Text style={{ marginTop: 7 }}>
          We will respond to your complaint in a reasonable period of time. If
          you disagree with our response, we will provide you with information
          about what action you can take, including making a complaint to the
          Office of the Australian Information Commissioner (whose details are
          set out below).
        </Text>
        <Text style={{ marginTop: 7 }}>
          <strong>Contact Us</strong>
        </Text>
        <Text style={{ marginTop: 2 }}>
          Our objective is to be transparent and clear in our Privacy Policy,
          but if you have any questions about it please contact us on the
          details below:
        </Text>
        <Text style={{ marginTop: 2 }}>
          CROP Privacy Officer<br></br>CROP Services Pty Ltd<br></br>19,
          Manhattan Close,<br></br>Point Cook, VIC 3030<br></br>
          privacy@cropglobalservices.com
        </Text>
        <Text style={{ marginTop: 5 }}>
          <strong>OAIC</strong>
          <br></br>‍Office of the Australian Information Commissioner<br></br>
          Website: www.oaic.gov.au<br></br>Phone: 1300 363 992 Mon to Thu - 10AM
          to 4PM (AEST/AEDT)
        </Text>
      </>
    );
  };

  const data = [
    {
      title: "1. CROP Privacy Policy",
      bodyFunction: Cropprivacy_body(),
    },
    {
      title: "2. Our Privacy Pledge",
      bodyFunction: OurPrivacyPledge_body(),
    },
    {
      title: "3. Synopsis",
      bodyFunction: Synopsis_body(),
    },
    {
      title: "‍4. Details",
      bodyFunction: Details_body(),
    },
  ];
  return (
    <>
      <SafeAreaView style={ComStyles.safeView}>
        <ScrollView>
          <View style={ComStyles.viewBlock}>
            <Text style={{ marginBottom: 20 }}>
              At CROP, your trust forms the basic ethos of our engagement, which
              is why we keep it transparent and simple. Depending on your
              interests, you can read Our Privacy Pledge, Synopsis or the
              Details.
            </Text>
            <SmartSoftAccord data={data} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default PrivacyAndDataRights;
