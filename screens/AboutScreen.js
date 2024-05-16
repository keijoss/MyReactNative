import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Image} from 'react-native';

export default function AboutScreen() {
  return (
    <>
      <ScrollView>
        <SafeAreaView styles={styles.AndroidSafeArea}>
          <View style={styles.header}>
            <Image source={require('../assets/images/ncf-logo.png')} />
            <Text style={styles.pageTitle}>About Me</Text>
            <Text style={{fontSize: 12}}>Happy Anniversary!</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
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
    width: 100,
    height: 100,
  },
  pageTitle: {
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 30,
  },
});