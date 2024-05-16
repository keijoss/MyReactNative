import { View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Ionicons, Entypo } from '@expo/vector-icons';

const Navbar = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
        <View style={{flexDirection: 'row'}}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <View>
                    <Entypo name="home" size={24} color="black" />
                    <Text>Home</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("About")}>
                <View>
                    <Entypo name="home" size={24} color="black" />
                    <Text>About</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Education")}>
                <View>
                    <Entypo name="home" size={24} color="black" />
                    <Text>Education</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Skills")}>
                <View>
                    <Entypo name="home" size={24} color="black" />
                    <Text>Skills</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Contact")}>
                <View>
                    <Entypo name="home" size={24} color="black" />
                    <Text>Contacts</Text>
                </View>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        padding: 10,
        borderTopStartRadius: 30
    },
});

export default Navbar;