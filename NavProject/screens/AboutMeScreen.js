// screens/AboutMeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi! My name is Viktor</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db', // Измените цвет по желанию
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
});

export default AboutMeScreen;