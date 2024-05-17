import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar,} from 'react-native';

import Navbar from '../components/Navbar';
const HomeScreen = () => {



  return (
    <>
    <ScrollView>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <ScrollView horizontal={true}>


          <View style={{flexDirection: 'column'}}>
            <View style={{padding: 20, paddingBottom: 5}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome there!</Text>
            </View>

            <View style={styles.Carousel}>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel1.jpg')} style={styles.CarouselImage} />
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel2.jpg')} style={styles.CarouselImage} />
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel3.jpg')} style={styles.CarouselImage} />
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel4.jpg')} style={styles.CarouselImage} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.titleBar}>
          <Text style={styles.pageTitle}>Mj Estepanie Palo</Text>
        </View>
        <View style={{marginTop: 0, alignItems: "center", justifyContent: "space-between", padding: 3}}>
          <Text style={styles.pageSubTitle}>Hello! I am Mj a 3rd year student of Naga College Foundation </Text>
          <Text style={styles.pageSubTitle}>Hello! I am Mj a 3rd year student of Naga College Foundation </Text>
          </View>
      </SafeAreaView>
    </ScrollView>

    <Navbar />
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#FFECFF',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 1,
  },
  Carousel: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 0,
    marginTop: 0,
    justifyContent: "space-between",
  },
  CarouselItems: {
    margin: 20,
    marginLeft: 5,
  },
  CarouselImage: {
    width: 300, 
    height: 450, 
    borderRadius: 20,
  },
  titleBar: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    margin: 10,
  },
  pageTitle: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pageSubTitle: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default HomeScreen;