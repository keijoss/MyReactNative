import React from 'react';
import { View, Text, Image } from 'react-native';

import Navbar from '../components/Navbar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/images/ncf-logo.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Mj Estepanie Palo</Text>
      <Text style={{ fontSize: 16 }}>Hello! I am Mj a 3rd year student of Naga College Foundation </Text>

      <Navbar />
    </View>
  );
};

export default HomeScreen;