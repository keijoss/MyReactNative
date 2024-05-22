import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar} from 'react-native';
import FlipCard from 'react-native-flip-card'; 
import Navbar from '../components/Navbar';
import { Ionicons } from '@expo/vector-icons';

export default function EducationScreen() {
  const [isFlipped, setIsFlipped] = useState(false); 

const toggleFlip = () => { 
    setIsFlipped(!isFlipped); 
}; 
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/ncf-logo.png")}
              style={styles.headerImage}
            />
            <Text style={styles.pageTitle}>Education</Text>
            <Text style={{ fontSize: 12, textAlign: "center", fontWeight: "600" }}>From the foundational years in Junior High school to the challenging academics of Senior High school and the diverse perspectives of college, I've grown academically, developed valuable skills, and discovered my passion for Computer studies.</Text>
            
          </View>
          <View style={styles.Carousel}>

            <FlipCard 
              style={[styles.CarouselItems, styles.shadow]} 
              friction={6} 
              perspective={500} 
              flipHorizontal={true} 
              flipVertical={false} 
              flip={isFlipped} 
              clickable={true} 
            > 
              {/* Front */} 
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/project-img1.png')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Naga College Foundation, Inc.</Text>
                <Text style={{ fontSize: 16, fontWeight: '400', alignSelf: 'left' }}>Course: Bachelor of science in computer science </Text>
              </View> 
            </FlipCard> 

            <FlipCard 
              style={[styles.CarouselItems, styles.shadow]} 
              friction={6} 
              perspective={500} 
              flipHorizontal={true} 
              flipVertical={false} 
              flip={isFlipped} 
              clickable={true} 
            > 
              {/* Front */} 
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/project-img2.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>HOMOBONO H. GONZALEZ NATIONAL HIGH SCHOOL</Text>
              <Text style={{ fontSize: 16, fontWeight: '400', alignSelf: 'left' }}>Course: Bachelor of science in computer science </Text>
              </View> 
            </FlipCard> 

            <FlipCard 
              style={[styles.CarouselItems, styles.shadow]} 
              friction={6} 
              perspective={500} 
              flipHorizontal={true} 
              flipVertical={false} 
              flip={isFlipped} 
              clickable={true} 
            > 
              {/* Front */} 
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/project-img3.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 12 }}>Happyy!</Text>
              </View> 
            </FlipCard> 
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
  pageTitle: {
    fontFamily: "Outfit_900Black",
    color: "black",
    fontSize: 30,
  },
  Carousel: {
    flexDirection: 'column',
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
    height: 300, 
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
  imageContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  card: { 
    width: 300, 
    height: 20, 
    borderRadius: 20, 
    // backgroundColor: 'trans', 
  
    // To prevent shadow from overflowing 
    overflow: 'hidden',  
  }, 
  image: { 
    width: 300, 
    height: 450, 
    borderRadius: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
});