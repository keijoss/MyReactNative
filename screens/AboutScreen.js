import React, { useState } from "react";
import {


View,
Text,
SafeAreaView,
Platform,
StatusBar,
ScrollView,
Image,
StyleSheet,
TouchableOpacity,
} from "react-native";
import FlipCard from 'react-native-flip-card'; 
import Navbar from "../components/Navbar";

export default function AboutScreen() {
 
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
          <Text style={styles.pageTitle}>About Me</Text>
          <Text style={{ fontSize: 12 }}>Happy Anniversary!</Text>
        </View>
        <ScrollView horizontal={true}>
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
                  source={require('../assets/images/carousel4.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 12 }}>Happy Anniversary!</Text>
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
                  source={require('../assets/images/carousel2.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 12 }}>Happy Anniversary!</Text>
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
                  source={require('../assets/images/carousel3.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 12 }}>Happy Anniversary!</Text>
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
                  source={require('../assets/images/carousel1.jpg')}
                  style={styles.CarouselImage}
                />
              </View> 

              {/* Back */} 
              <View style={styles.imageContainer}>
                <Text style={{ fontSize: 12 }}>Happy Anniversary!</Text>
              </View> 
            </FlipCard> 
          </View>
        </ScrollView>
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
});
