import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground
} from "react-native";
import FlipCard from "react-native-flip-card";
import Navbar from "../components/Navbar";
import { Ionicons } from "@expo/vector-icons";

export default function EducationScreen() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
    <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.header}>
            <Text style={styles.pageTitle}>Education</Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "justify",
                fontWeight: "400",
                marginTop: 15,
              }}
            >
              {"\t"}From the foundational years in Junior High school to the
              challenging academics of Senior High school and the diverse
              perspectives of college, I've grown academically, developed
              valuable skills, and discovered my passion for Computer studies.
            </Text>
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
                  source={require("../assets/images/project-img1.png")}
                  style={styles.CarouselImage}
                />
              </View>

              {/* Back */}
              <View style={styles.imageContainer}>
                <View style={styles.schoolBox}>
                  <Text style={styles.schoolName}>
                    Naga College Foundation, Inc.
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Course:
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                    }}
                  >
                    Bachelor of Science in Computer Science
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Awards:
                  </Text>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Dean's Lister, 2021-2022 (1st semester)
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Dean's Lister, 2021-2022 (2nd semester)
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Dean's Lister, 2022-2023 (1st semester)
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Dean's Lister, 2022-2023 (2nd semester)
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Dean's Lister, 2023-2024 (1st semester)
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    margin: 10,
                    color: "slategray",
                    alignSelf: "center",
                  }}
                >
                  [Click again to flip]
                </Text>
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
                  source={require("../assets/images/project-img3.jpg")}
                  style={styles.CarouselImage}
                />
              </View>

              {/* Back */}
              <View style={styles.imageContainer}>
                <View style={styles.schoolBox}>
                  <Text style={styles.schoolName}>
                    Asian Institute of Computer Studies
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Strand:
                  </Text>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      Computer System Servicing
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Award/s:
                  </Text>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      With Honor
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    margin: 10,
                    color: "slategray",
                    alignSelf: "center",
                  }}
                >
                  [Click again to flip]
                </Text>
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
                  source={require("../assets/images/project-img2.jpg")}
                  style={styles.CarouselImage}
                />
              </View>

              {/* Back */}
              <View style={styles.imageContainer}>
                <View style={styles.schoolBox}>
                  <Text style={styles.schoolName}>
                    Homobono Gonzales National High School
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Strand:
                  </Text>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      None
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      alignSelf: "left",
                      marginRight: 5,
                    }}
                  >
                    Award/s:
                  </Text>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        alignSelf: "left",
                      }}
                    >
                      With Honor
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    margin: 10,
                    color: "slategray",
                    alignSelf: "center",
                  }}
                >
                  [Click again to flip]
                </Text>
              </View>
            </FlipCard>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Navbar />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
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
    fontWeight: "bold",
  },
  Carousel: {
    flexDirection: "column",
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
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  pageSubTitle: {
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 16,
    fontStyle: "italic",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    height: 20,
    borderRadius: 20,
    // backgroundColor: 'trans',

    // To prevent shadow from overflowing
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 20,
  },
  schoolBox: {
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop: 0,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
