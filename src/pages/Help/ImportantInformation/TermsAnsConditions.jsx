import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { SmartSoftAccord } from "soft_digi_native";
import ComStyles from "../../../styles/ComStyles";

const TermsAnsConditions = () => {
  const definations_body = () => {
    return (
      <>
        <Text>
          <ol>
            <li>
              <strong>‘Account’</strong> means a CROP membership account.
            </li>
            <li>
              <strong>‘us’, ‘we’ and ‘our’</strong> means CROP Services Pty Ltd
              (ABN 43 664 240 411).
            </li>
            <li>
              <strong>‘Member’</strong> means a person who has registered to use
              CROP and opened an Account, and <strong>‘Membership’</strong>{" "}
              means a CROP membership entitling the Member to the benefits
              extended to Members from time to time.
            </li>
            <li>
              <strong>‘CROP'</strong> means the CROP program made available by
              us including any Membership, Offers and Services extended by us.
            </li>
            <li>
              <strong>‘Participating Brands’</strong> means the businesses we
              have determined are participating in the CROP program and offering
              benefits to CROP members from time to time.
            </li>
            <li>
              <strong>‘T&Cs’</strong> means the terms and conditions set out or
              referenced above and below as amended or replaced from time to
              time.
            </li>
            <li>
              <strong>‘Website’</strong> means the Internet site at the domain
              cropglobalservices.com or any other website operated by us and
              includes our CROP App.
            </li>
            <li>
              <strong>‘You’, ‘you’, ‘your’ and ‘Your’</strong> mean the person
              using the CROP Membership (being the Member who has been through
              the registration process set out below and agreed to these T&Cs).
            </li>
          </ol>
        </Text>
      </>
    );
  };

  const eligibility_body = () => {
    return (
      <>
        <Text>To be eligible to join CROP you must:</Text>
        <ol>
          <li>Be at least 18 years old;</li>
          <li>Have a current Australian residential address;</li>
          <li>Complete the registration process including:</li>
          <ol type="i">
            <li>
              Providing personal information requested by us during the
              registration process (including name and contact details);
            </li>
            <li>Agreeing to these T&Cs; and</li>
          </ol>
          <li>
            Be permitted by us (in our complete discretion) to access and use
            CROP through us enabling access to your CROP account.
          </li>
        </ol>
        <Text>
          Upon completing this process, you will be a Member and will have
          opened a CROP Account on and subject to the T&Cs.
        </Text>
        <Text style={{ marginTop: 7 }}>
          We may refuse a membership at our sole discretion. Where we refuse a
          membership (at or within a reasonable time after the registration), we
          will share the reason for refusal over email.
        </Text>
      </>
    );
  };

  const cropBenefits_body = () => {
    return (
      <>
        <Text>
          <ol>
            <li>
              {" "}
              We reserve the right to modify or change the benefits available to
              CROP Members at any time. We will notify you of any changes
              including effective date of change in advance. If we materially
              reduce the benefits available to members, you may cancel your
              Membership prior to such changes taking place.
            </li>
            <li>
              {" "}
              Without limiting clause 3(1), we may, from time to time, make
              additional functionality, features or services available to
              Members and may charge you fees for such additional functionality,
              features or services if you opt to purchase them. Unless otherwise
              stated you must pay for the additional functionality, features or
              services referred to in this clause 3(2) prior to us making it
              available to you and in accordance with the payment terms notified
              to you.
            </li>
            <li>
              {" "}
              Participating Brands may have minimum spend requirements in order
              for a Member to obtain their services. Please refer to
              Participating Brands websites for more information.
            </li>
          </ol>
        </Text>
      </>
    );
  };

  const memberObligations_body = () => {
    return (
      <>
        <ol>
          <li> You agree to use CROP in accordance with these T&Cs.</li>
          <li>
            You must ensure the security and confidentiality of your Membership
            including any username and/or password, one time pin (OTP) assigned
            to, or created by you and not share those details with anyone else.
          </li>
          <li>
            You are wholly and solely responsible for all activities which occur
            through the use of your Membership with knowledge of your username
            password and/or one time pin (OTP). This includes any transactions
            made through the Website and any unauthorised use of credit cards or
            bank accounts. Without limiting this provision, if your negligence
            or breach of these T&Cs results in unauthorised access to your
            Account, then you will be responsible for the transactions conducted
            through your Account as a result of the unauthorised access.
          </li>
          <li>
            {" "}
            You must promptly notify us if you become aware of any unauthorised
            access to your Account or any unauthorised use of your Membership.
          </li>
          <li>
            {" "}
            You may not have more than one Membership at a time. CROP Membership
            is limited to a single Member Account and are not transferable. You
            must not allow your Membership to be used by any other person.
          </li>
          <li>
            You must inform us if any of your personal details change (name or
            contact details).
          </li>
          <li>
            In accessing the Website and/or App and using your Account you must
            not engage in any inappropriate conduct, or conduct that is unlawful
            or is prohibited by any laws including:
          </li>
          <ol type="i">
            <li>
              Any act that would constitute a breach of either the privacy
              (including uploading private or personal information without an
              individual’s consent) or any other legal rights of individuals;
            </li>
            <li>
              Attempting to undermine the security or integrity of our systems
              or networks or, where the Websites and/or App are hosted by a
              third party, that third party’s computing systems and networks;
            </li>
            <li>
              Using, or misusing, the Website and/or App in any way which may
              impair:
            </li>

            <ol type="A">
              <li>
                {" "}
                The functionality of the Website and/or App or other systems
                used to deliver CROP services
              </li>
              <li>
                {" "}
                The ability of other Members to use the Website and/or App and
              </li>
              <li>
                The functionality or systems of Participating Brands used to
                deliver the benefits of CROP
              </li>
            </ol>
            <li>
              Transmitting, or inputting into the Website and/or App, any files
              that may damage any other person’s computing devices or software,
              any content that may be offensive, or material or data in
              violation of any law (including data or other material protected
              by copyright or trade secrets which You do not have the right to
              use);
            </li>
            <li>
              Using any device or process to copy, adapt, disassemble,
              decompile, reverse engineer or in any way reproduce, modify or
              circumvent Website and/or App content, navigational structure,
              security or presentation of CROP or any computer programs used to
              deliver CROP or to operate the Website and/or App and
            </li>
            <li>
              Creating CROP Membership accounts fraudulently, under false
              pretences, or by automated means; and
            </li>
            <li>
              Using screen scraping, data mining or similar tools or attempt to
              copy any of the Website and/or App content or data available via
              the Website and/or App.
            </li>
          </ol>
        </ol>
      </>
    );
  };

  const cropPromotions_body = () => {
    return (
      <>
        <ol>
          <li>
            From time to time we may offer Membership rewards and conduct
            promotions, including issuance of promotional codes. When
            participating in a promotion or redeeming a promotional code you
            must comply with these T&Cs and the offer terms applicable to that
            promotion, including any eligibility criteria.
          </li>
          <li>
            Promotional codes issued by CROP are available for a limited time
            only, are non-transferable, cannot be redeemed for cash, and cannot
            be used in conjunction with other offers. Each promotional code
            applies only to the CROP Membership specified in the offer terms and
            can only be used once per person unless otherwise specified in the
            offer terms.
          </li>
          <li>
            If you register for the CROP Membership using a promotional code
            where the offer benefit is extended to an existing member, then the
            benefit of this promotion would be extended to the existing member
            and not to you, unless specified otherwise in the offer.
          </li>
          <li>
            We reserve the right to make changes to our CROP rewards programs
            and the way we conduct promotions from time to time in our
            discretion.
          </li>
          <li>
            Participating Brands may also conduct their own promotions or issue
            their own promotional codes, and in such circumstances the
            Participating Brand’s terms would apply.
          </li>
        </ol>
      </>
    );
  };
  const cancellation_body = () => {
    return (
      <>
        <ol>
          <li>
            Once registered, your Membership will continue until you cancel your
            Membership or until the termination of your Membership in accordance
            with these T&Cs.
          </li>
          <li>
            You can cancel your Membership at any time by logging into your
            Account and following the online instructions on how to cancel a
            Membership. If you need help to cancel your Membership you can
            contact our Customer Service centre anytime.
          </li>
          <li>
            We do not monetise any unused reward points, offers or promotions.
            Upon cancellation of a Membership leading to the termination of your
            CROP account any unused reward points, offers or promotions gets
            automatically forfeited and/or withdrawn.
          </li>
          <li>
            Your Membership cancellation will take effect once we have processed
            your request for cancellation.
          </li>
          <li>
            Cancellation of your Membership does not terminate your CROP
            account. You will still remain a CROP Member following cancellation
            of your Membership until we terminate your CROP Account in
            accordance with these T&Cs.
          </li>
          <li>
            Fair use policy and breach: Where you are in breach of these T&Cs
            including, for example, by sharing your Account with other people
            (regardless of whether they are CROP Member or not), we may cancel
            your Membership (and terminate your Account). Where we validly
            cancel, suspend or terminate a Membership for breach of these T&Cs,
            then any accrued benefit on the account including reward points,
            offers or promotions gets automatically forfeited and/or withdrawn.
          </li>
          <li>
            Without limiting any other provision of these T&Cs, we may suspend,
            or terminate your Membership in whole or in part in the following
            circumstances:
          </li>
          <ol type="i">
            <li>
              If we become aware, or reasonably believe, that you have provided
              false or inaccurate information in order to register for CROP;
            </li>
            <li>
              If you have failed to pay fees to us in relation to any service
              that is chargeable;
            </li>
            <li>
              If you notify us that your Account has been accessed without your
              authorisation;
            </li>
            <li>If you are in breach of the T&Cs</li>
            <li>
              If your use of the Website and/or App breaches the T&Cs or you
              have used the Website and/or App in a fraudulent or improper
              manner; or
            </li>
            <li>
              If you are abusive or offensive to our employees or contractors,
              or the Participating Brands’ employees or contractors (whether in
              relation to your Membership or otherwise).
            </li>
          </ol>
          <li>
            We have processes in place to assist us in detecting fraudulent and
            other illegal or improper transactions. This may result in
            Memberships or payments being delayed or cancelled. If a transaction
            is flagged for fraud detection, we will make enquiries into any
            potential fraud. If we are not satisfied a transaction is genuine,
            we may cancel your Membership. Participating Brands may have similar
            processes in place too. We shall use reasonable endeavours to notify
            you if we have terminated or suspended your Membership and your
            access to your CROP Account for any of the reasons set out in this
            clause 7.
          </li>
          <li>
            We also reserve the right to terminate your Membership at any time,
            without notice if we choose to stop providing the CROP program.{" "}
          </li>
        </ol>
      </>
    );
  };

  const warranties_body = () => {
    return (
      <>
        <ol>
          <li>
            If you use CROP as a consumer under the Australian Consumer Law
            then:
          </li>
          <ol type="i">
            <li>
              Our goods and services come with guarantees that cannot be
              excluded under the Australian Consumer Law;
            </li>
            <li>
              To the maximum extent permitted by law, our guarantees are limited
              to those available to you under the Australian Consumer Law, as is
              our liability to you;
            </li>
            <li>
              If we fail to comply with a guarantee and our failure is a minor
              failure, then we will resolve the failure within a reasonable
              time, which we will do by (at our discretion):
            </li>
            <ol type="A">
              <li>Where the failure relates to goods supplied by or for us:</li>
              <ol>
                <li>Replacing the goods or supplying equivalent goods;</li>
                <li>Repairing the goods;</li>
                <li>
                  Paying the cost of replacing the goods or of acquiring
                  equivalent goods; or
                </li>
                <li>Paying the cost of having the goods repaired.</li>
              </ol>
              <li>
                Where the failure relates to services provided by or for us:
              </li>
              <ol>
                <li>Resupplying the services;</li>
                <li>Having the services resupplied; or</li>
                <li>Paying the cost of having the services resupplied.</li>
              </ol>
            </ol>
            <li>
              If we fail to comply with a guarantee and our failure cannot be
              resolved or is a major failure, then you may have a right to
              reject the goods or terminate the contract (as applicable) or to,
              by Court action against us, recover compensation for any reduction
              in the value of the goods or services; and
            </li>
            <li>
              If we fail to comply with a guarantee you may also, by Court
              action against us, seek damages for any reasonably foreseeable
              loss or damage resulting from the failure.
            </li>
          </ol>
          <li>
            Without excluding, restricting or modifying the rights and remedies
            that you may be entitled to under the Australian Consumer Law
            consumer guarantees provisions, you acknowledge that:
          </li>
          <ol type="i">
            <li>
              The CROP program along with its Membership is provided “as is” and
              without any express warranties or implied warranties as to CROP
              suitability for any particular purpose;
            </li>
            <li>
              To the maximum extent permitted by law in no event shall we, or
              any of our officers, directors, employees, agents or
              representatives otherwise be liable to you or any third party for
              any direct, indirect, special, punitive or consequential damages
              or losses arising from or in connection with your CROP Membership,
              or any other costs, losses or damages or any kind related to these
              T&Cs.
            </li>
            <li>
              To the maximum extent permitted by law our liability to you
              (whether in contract or due to our negligence) in relation to your
              CROP Membership is limited to the charges paid by you for the
              specific good or service in question and that is being disputed.
            </li>
          </ol>
          <li>
            Our liability to you for loss or damage of any kind arising out of,
            or in connection with, your use of CROP or these T&Cs is reduced to
            the extent (if any) that you cause or contribute to the loss or
            damage. This reduction applies whether our liability is in contract,
            tort (including negligence), under any statute or otherwise.{" "}
          </li>
          <li>
            For the sake of clarity, we are not responsible for the goods or
            services purchased by you from Participating Brands even if you
            receive a benefit from those Participating Brands as a result of you
            being a CROP Member.
          </li>
        </ol>
      </>
    );
  };

  const website_body = () => {
    return (
      <>
        <ol>
          <li>
            <strong>Access:</strong> Without limiting any other provision of
            these T&Cs:
          </li>
          <ol type="i">
            <li>
              While we use reasonable endeavours to make the Website available
              to you, we do not guarantee, represent or warrant that your access
              to the Website will be uninterrupted, reliable, timely, secure or
              error free;
            </li>
            <li>
              Access to the Website may be suspended without notice in the case
              of telecommunications interruption or bottleneck, system failure,
              maintenance or repair or any reason beyond our control (including
              services provided by third parties becoming unavailable).
            </li>
          </ol>
          <li>
            <strong>Links:</strong>The Website may contain links to websites
            operated by third parties. Those links are provided for convenience
            and may not remain current or be maintained. Unless expressly stated
            otherwise, we do not endorse and are not responsible for the content
            on those linked websites and have no control over or rights in those
            linked websites.
          </li>
        </ol>
      </>
    );
  };

  const general_body = () => {
    return (
      <>
        <ol>
          <li>
            <strong>Jurisdiction:</strong> The T&Cs are governed by the law of
            Victoria and you submit to the non-exclusive jurisdiction of the
            courts exercising jurisdiction in Victoria in relation to any
            dispute relating to CROP and the T&Cs.
          </li>
          <li>
            <strong>Amendment:</strong> We may amend all or part of the T&Cs by
            publishing the amended T&Cs on the Website and notifying you in
            writing that a change has been made. We may change any of the
            benefits available to CROP Members at any time by notifying you in
            writing that a change has been made. Your subsequent or continued
            use of CROP after any such change to the benefits or T&Cs (as the
            case may be) will mean that you agree to the amended T&Cs and
            benefits. If you do not agree to an amendment, you may cancel your
            Membership or close your Account.
          </li>
          <li>
            <strong>Waiver:</strong> The failure or delay on the part of any
            party in exercising any power or right conferred on it under these
            T&Cs will not operate as a waiver of the power or right, nor will
            any single exercise of any power or right preclude any other or
            future exercise of it, or the exercise of any other power or right
            under these T&Cs. Any waiver by a party will only be binding and
            effective if it is given in writing.
          </li>
          <li>
            <strong>Severance:</strong> If the whole or any part of a provision
            of the T&Cs is invalid, illegal or unenforceable, then such
            provision will be severed from the T&Cs and neither that part or
            provision or its severance will affect the validity or
            enforceability of the remaining parts or provisions of the T&Cs.{" "}
          </li>
        </ol>
      </>
    );
  };

  const privacy_body = () => {
    return (
      <>
        <Text>
          Without limiting the content or application of our{" "}
          <a>Privacy Policy</a> (as updated from time to time), if you provide
          us with any personal information, our Privacy Policy governs how we
          will handle, use or disclose that information. Please review and
          understand our Privacy Policy for further information.
        </Text>
      </>
    );
  };

  const interpretation_body = () => {
    return (
      <>
        <ol>
          <li>
            Headings are for convenience only, and do not affect interpretation.
            The following rules also apply in interpreting these T&Cs, except
            where the context makes it clear that a rule is not intended to
            apply.  
          </li>
          <li>A reference to:</li>
          <ol type="i">
            <li>
              legislation is to that legislation as amended, re-enacted or
              replaced, and includes any subordinate legislation issued under
              it;
            </li>
            <li>“includes” means includes without limitation;</li>
            <li>
              a person includes any type of entity or body of persons, whether
              or not it is incorporated or has a separate legal identity, and
              any executor, administrator or successor in law of the person; and
            </li>
            <li>
              anything (including a right, obligation or concept) includes each
              part of it.
            </li>
          </ol>
          <li>A singular word includes the plural, and vice versa.</li>
          <li>A word which suggests one gender includes the other genders.</li>
          <li>
            If a word is defined, another part of speech has a corresponding
            meaning.
          </li>
          <li>
            Unless clearly indicated to the contrary words defined in the  New
            Tax System (Goods & Services Tax) Act  1999 (Cth) have the same
            meaning in these T&Cs.
          </li>
          <li>
            Charges for any goods or services supplied (or offered for supply)
            via us, are (unless otherwise stated) exclusive of GST.
          </li>
        </ol>
      </>
    );
  };

  const data = [
    {
      title: "1. Definitions",
      bodyFunction: definations_body(),
    },
    {
      title: "2. Eligibility,Registration and Membership",
      bodyFunction: eligibility_body(),
    },
    {
      title: "3. CROP Benefits and Exclusions",
      bodyFunction: cropBenefits_body(),
    },
    {
      title: "4. Member Obligations",
      bodyFunction: memberObligations_body(),
    },
    {
      title: "5. CROP Promotions",
      bodyFunction: cropPromotions_body(),
    },
    {
      title: "6. Cancellation, Suspension or Termination",
      bodyFunction: cancellation_body(),
    },
    {
      title: "7. Warranties and Liability",
      bodyFunction: warranties_body(),
    },
    {
      title: "8. Website",
      bodyFunction: website_body(),
    },
    {
      title: "9. General",
      bodyFunction: general_body(),
    },
    {
      title: "10. Privacy and personal information",
      bodyFunction: privacy_body(),
    },
    {
      title: "11. Interpretation",
      bodyFunction: interpretation_body(),
    },
  ];

  return (
    <SafeAreaView style={ComStyles.safeView}>
      <ScrollView>
        <View style={ComStyles.viewBlock}>
          <Text style={{ marginBottom: 20 }}>
            Heartiest greetings from CROP, a membership program offered by CROP
            Services Pty Ltd (ABN 43 664 240 411). The CROP Terms and Conditions
            (T&Cs) explain our obligations as a program provider and your
            obligations as a member. Please read them carefully. By registering
            and using CROP, you acknowledge that you have read, understood and
            agree to these T&Cs. The T&Cs apply for any use of the CROP program
            (including Membership and purchase of goods or services from us)
            through your Account and your use of CROP rewards or promotional
            codes issued by us. The T&Cs apply to you, from the time that you
            register for our services by opening an account and we provide you
            with access to a diversified range of CROP services.
          </Text>
          <SmartSoftAccord data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TermsAnsConditions;
