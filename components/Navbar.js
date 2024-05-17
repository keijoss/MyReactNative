import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  const navigation = useNavigation();

    return (
          <View style={styles.footBar}>
              <Pressable 
              style={[styles.footBarItem]}
              onPress={() => navigation.navigate("Home")}>
                <Image style={{width: 30, height: 30}}
                contentFit="contain"
                source={require("../assets/images/home.png")}
                />
                <Text style={[styles.search, styles.searchTypo]}>Home</Text>
              </Pressable>
              
              <Pressable
              style={[styles.footBarItem]}
              onPress={() => navigation.navigate("About")}
              >
                <Image  style={{width: 30, height: 30}}
                  contentFit="cover"
                  source={require("../assets/images/about.png")}
                />
              <Text style={[styles.upload, styles.searchTypo]}>About</Text>
              </Pressable>

              <Pressable
              style={[styles.footBarItem]}
              onPress={() => navigation.navigate("Education")}
              >
                <Image  style={{width: 30, height: 30}}
                contentFit="cover"
                source={require("../assets/images/education.png")}
                />
                <Text style={[styles.browse1, styles.searchTypo]}>Education</Text>
              </Pressable>

              <Pressable
              style={[styles.footBarItem]}
              onPress={() => navigation.navigate("Skills")}
              >
                <Image  style={{width: 30, height: 30}}
                    contentFit="cover"
                    source={require("../assets/images/skills.png")}
                />
                <Text style={[styles.profile, styles.profilePosition]}>Skills</Text>
              </Pressable>

              <Pressable
              style={[styles.footBarItem]}
              onPress={() => navigation.navigate("Contact")}
              >
                <Image  style={{width: 30, height: 30}}
                    contentFit="cover"
                    source={require("../assets/images/contacts.png")}
                />
                <Text style={[styles.profile, styles.profilePosition]}>Contacts</Text>
              </Pressable>

          </View>
    )

}

const styles = StyleSheet.create({
  item:{
    flex:1
  },
  footBar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footBarItem: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  });
