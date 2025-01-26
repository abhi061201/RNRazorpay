import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentGateway = () => {
  function payment() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_ACWYdCyN71eQY3',
      amount: '5000',
      name: 'Riya Store',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'ag742757@gmail.com',
        contact: '9084970825',
        name: 'Riya Store',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        Alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        Alert(`Error: ${error.code} | ${error.description}`);
      });
  }
  return (
    <View style={styles.container}>
      <Text>PaymentGateway</Text>
      <Button title="Pay $10" onPress={payment} />
    </View>
  );
};

export default PaymentGateway;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
