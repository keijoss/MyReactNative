import React from 'react';
import { View, Text, Image } from 'react-native';

import Navbar from '../components/Navbar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/images/ncf-logo.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Name</Text>
      <Text style={{ fontSize: 16 }}>A short bio about yourself</Text>

      <Navbar />
    </View>
  );
};

export default HomeScreen;