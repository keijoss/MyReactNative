import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  return (
    <View style={styles.footBar}>
      <Pressable 
        style={[
          styles.footBarItem, 
          currentRoute === "Home" && styles.activeItem
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.icon} source={require("../assets/images/home.png")} />
        <Text style={[styles.label, currentRoute === "Home" && styles.activeLabel]}>Home</Text>
      </Pressable>
      
      <Pressable 
        style={[
          styles.footBarItem, 
          currentRoute === "About" && styles.activeItem
        ]}
        onPress={() => navigation.navigate("About")}
      >
        <Image style={styles.icon} source={require("../assets/images/about.png")} />
        <Text style={[styles.label, currentRoute === "About" && styles.activeLabel]}>About</Text>
      </Pressable>

      <Pressable 
        style={[
          styles.footBarItem, 
          currentRoute === "Education" && styles.activeItem
        ]}
        onPress={() => navigation.navigate("Education")}
      >
        <Image style={styles.icon} source={require("../assets/images/education.png")} />
        <Text style={[styles.label, currentRoute === "Education" && styles.activeLabel]}>Education</Text>
      </Pressable>

      <Pressable 
        style={[
          styles.footBarItem, 
          currentRoute === "Skills" && styles.activeItem
        ]}
        onPress={() => navigation.navigate("Skills")}
      >
        <Image style={styles.icon} source={require("../assets/images/skills.png")} />
        <Text style={[styles.label, currentRoute === "Skills" && styles.activeLabel]}>Skills</Text>
      </Pressable>

      <Pressable 
        style={[
          styles.footBarItem, 
          currentRoute === "Contact" && styles.activeItem
        ]}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image style={styles.icon} source={require("../assets/images/contacts.png")} />
        <Text style={[styles.label, currentRoute === "Contact" && styles.activeLabel]}>Contacts</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 12,
    color: 'black',
  },
  activeItem: {
    shadowColor: '#FF69B4', // Pink color
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 15, // For Android
  },
  activeLabel: {
    fontWeight: 'bold',
    color: '#EC5BDB',
  },
});
