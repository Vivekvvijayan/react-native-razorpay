import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const options = {
    description: ' BoAt Headphone',
    currency: 'INR',
    key: 'rzp_test_3N2zy3k2wOQd7h',
    amount: '100.0',

    prefill: {
      email: 'vivekaravikulathillam@gmail.com',
      contact: '+916282457650',
      name: 'Vivek V Vijayan',
    },
    theme: {
      color: '#00082',
    },
  };

  const handlePay = () => {
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Payment Success! Payment ID :${data.razorpay_payment_id}`);
      })
      .catch(err => {
        alert('Payment Failed Try again later!!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://pngimg.com/uploads/headphones/headphones_PNG7645.png',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.reactionContainer}>
          <Image
            source={{
              uri: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png',
            }}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.name}>BoAt Wireless Headphone </Text>
          <Text style={styles.rate}>$10.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'gray'}}>
            Free delivery
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.btnBuy}
        underlayColor="#DDDDD"
        activeOpacity={0.5}
        onPress={handlePay}>
        <Text style={styles.btnText}>Buy now</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000082',
  },
  cardContainer: {
    width: '90%',
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  image: {
    width: '100%',
    height: '55%',
  },
  description: {
    // marginTop: 30,
    width: '100%',
  },
  reactionContainer: {
    flexDirection: 'row',
    height: 50,

    marginTop: 20,
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  name: {
    fontSize: 23,
    color: 'gray',
  },
  rate: {
    fontSize: 30,
    marginTop: 15,
    color: '#000082',
  },
  btnBuy: {
    width: '90%',
    height: 55,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 19,
    color: '#000082',
    fontWeight: '700',
  },
});
