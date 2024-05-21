import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, Pressable, Animated, Dimensions } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';
// fonts
// import { useFonts } from 'expo-font';
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';
// components
import Navbar from '../components/Navbar';

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {

  let [fontsLoaded] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  });

  // const [fontsLoaded, fontError] = useFonts({
  //   'Outfit-Black': require('../assets/fonts/Outfit-Black.ttf'),
  //   'Satisfy': require('../assets/fonts/Satisfy/Satisfy-Regular.ttf'),
  //   'Fira' : require('../assets/fonts/FiraCode-Regular.ttf'),
  // });

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (hearts.length > 0) {
      hearts.forEach(heart => {
        Animated.timing(heart.anim, {
          toValue: height,
          duration: heart.duration,
          useNativeDriver: true,
        }).start(() => {
          setHearts(hearts => hearts.filter(h => h.id !== heart.id));
        });
      });
    }
  }, [hearts]);

  const createHearts = () => {
    const newHearts = Array.from({ length: 10 }, () => {
      return {
        id: Math.random().toString(),
        anim: new Animated.Value(0),
        left: Math.random() * width,
        duration: (Math.random() * 2 + 3) * 1000,
      };
    });
    setHearts([...hearts, ...newHearts]);
  };

  return (
    <>
    <ScrollView>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'column'}}>
            <View style={{padding: 20, paddingBottom: 5}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Fira'}}>Welcome there!</Text>
            </View>

            <View style={styles.Carousel}>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel4.jpg')} style={styles.CarouselImage} />
                <Pressable onPress={createHearts}>
                  <View style={{alignSelf: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 30}}>❤️</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel2.jpg')} style={styles.CarouselImage} />
                <Pressable onPress={createHearts}>
                  <View style={{alignSelf: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 30}}>❤️</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel3.jpg')} style={styles.CarouselImage} />
                <Pressable onPress={createHearts}>
                  <View style={{alignSelf: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 30}}>❤️</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.CarouselItems}>
                <Image source={require('../assets/images/carousel1.jpg')} style={styles.CarouselImage} />
                <Pressable onPress={createHearts}>
                  <View style={{alignSelf: 'center'}}>
                    <Text style={{fontSize: 30, marginTop: 10}}>❤️</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.titleBar}>
          <Text style={styles.pageTitle}>Mj Estepanie Palo</Text>
        </View>
        <View style={{marginTop: 0, alignItems: "center", paddingTop: 0, padding: 20}}>
          <Text style={styles.pageSubTitle}>Hello! You can call me Mj, an aspiring Full Stack Developer and Cybersecurity analyst.</Text>
          <Text style={styles.pageSubTitle}>This is my personal mobile application in compliance for the requirements in CSFE2 Node+React</Text>
        </View>
        <View style={styles.heartContainer}>
            {hearts.map(heart => (
              <Animated.Text
                key={heart.id}
                style={[
                  styles.heart,
                  {
                    left: heart.left,
                    transform: [{ translateY: heart.anim }]
                  }
                ]}
              >
                💗
              </Animated.Text>
            ))}
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
  },
  CarouselItems: {
    marginTop: 0,
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
    marginTop: 0,
    paddingTop: 0
  },
  pageTitle: {
    fontFamily: 'Outfit_400Regular',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pageSubTitle: {
    flex: 1,
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 16,
    fontStyle: 'normal',
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  heart: {
    position: 'absolute',
    fontSize: 24,
  },
});

export default HomeScreen;