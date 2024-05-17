import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar} from 'react-native';

import Navbar from '../components/Navbar';

export default function EducationScreen() {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <Text>Education Screen</Text>
        </SafeAreaView>
      </ScrollView>
      <Navbar/>
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#FFECFF',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 1,
  },
});