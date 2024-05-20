import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar} from 'react-native';

import Navbar from '../components/Navbar';

export default function SkillsScreen() {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/ncf-logo.png")}
              style={styles.headerImage}
            />
            <Text style={styles.pageTitle}>skills Screen</Text>
            <Text style={{ fontSize: 12 }}>wayo man me skill huhuh</Text>
          </View>
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
  header: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
    margin: 10,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  pageTitle: {
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 30,
  },
});