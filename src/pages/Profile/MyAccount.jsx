import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { SmartSoftButton, SmartSoftTable } from "soft_digi_native";
import SmartInput from "soft_digi_native/dist/forms/SmartInput";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";

const MyAccount = () => {
  const columns = [
    { title: "DATE", index: "date", type: "date", dateFormat: "DD-MM-YYYY" },
    { title: "OFFER TITLE", index: "offer_title" },
    { title: "ORDER NO", index: "order_number" },
    { title: "PAYOUT", index: "payout" },
    { title: "EARN CROPs", index: "earn_crops" },
    { title: "REDEEMED CROPs", index: "redeemed" },
  ];
  const data = [
    {
      date: "01-07-23",
      offer_title: "Family HSP",
      order_number: "0",
      payout: "$  30",
      earn_crops: "30",
      redeemed: "-",
    },
    {
      date: "04-07-23",
      offer_title: "Earphones-Samsung",
      order_number: "0",
      payout: "$  45",
      earn_crops: "45",
      redeemed: "-",
    },
    {
      date: "05-07-23",
      offer_title: "T-Shirt-Cottonwear",
      order_number: "0",
      payout: "$  20",
      earn_crops: "20",
      redeemed: "-",
    },
    {
      date: "06-07-23",
      offer_title: "Groceries – HR  Quality Foods",
      order_number: "0",
      payout: "$  25",
      earn_crops: "25",
      redeemed: "-",
    },
    {
      date: "06-07-23",
      offer_title: "Coffee – Coles  Express",
      order_number: "0",
      payout: "-",
      earn_crops: "-",
      redeemed: "15",
    },
    {
      date: "07-07-23",
      offer_title: "Chicken Hot and  Spicy Burger",
      order_number: "0",
      payout: "$  18",
      earn_crops: "18",
      redeemed: "-",
    },
    {
      date: "08-07-23",
      offer_title: "Rose Bouquet-Floral",
      order_number: "0",
      payout: "$  15",
      earn_crops: "15",
      redeemed: "-",
    },
    {
      date: "09-07-23",
      offer_title: "Running Shoes- Rebel",
      order_number: "0",
      payout: "$  150",
      earn_crops: "150",
      redeemed: "-",
    },
    {
      date: "09-07-23",
      offer_title: "Sipper– Sports  Apparel",
      order_number: "0",
      payout: "$  10",
      earn_crops: "10",
      redeemed: "-",
    },
    {
      date: "10-07-23",
      offer_title: "Dumplings- Yangs",
      order_number: "0",
      payout: "$  19",
      earn_crops: "19",
      redeemed: "-",
    },
  ];

  const statementForm = () => {
    return (
      <>
        <SmartInput type="Text_Box" label="Start Date" placeHolder="DD/MM/YY" />
        <SmartInput type="Text_Box" label="End Date" placeHolder="DD/MM/YY" />
        <SmartSoftButton
          label="Search"
          type="contained"
          style={{}}
          fullWidth={true}
        />
      </>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ViewContainer}>
            {statementForm()}
            <SmartColumn
              width={12}
              key={"MyAccountSecondcolumn"}
              style={{ marginTop: 10 }}
            >
              <SmartSoftTable columns={columns} data={data} />
            </SmartColumn>
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
});

export default MyAccount;
