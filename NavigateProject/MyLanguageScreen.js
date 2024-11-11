import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const langs = [
    { id: '1', lang: 'Jav   aScript', experience: '2 года', logo: require('./assets/images/javascript.png') },
    { id: '2', lang: 'SQL', experience: '3 месяца', logo: require('./assets/images/sql.png') },
];

const LanguageItem = ({ lang }) => {
    return (
      <View style={styles.item}>
        <Image source={lang.logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{lang.lang}</Text>
          <Text style={styles.experience}>{lang.experience}</Text>
        </View>
      </View>
    );
  }; 

const MyLanguageScreen = () => {
  return (
    <FlatList
      data={langs}
      renderItem={({ item }) => <LanguageItem lang={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    logo: {
      width: 140,
      height: 140,
      marginRight: 10,
    },
    textContainer: {
      flexDirection: 'column',
    },
    text: {
      fontSize: 45,
      fontWeight: 'bold',
    },
    experience: {
      fontSize: 30,
      color: '#666',
    },
  });
export default MyLanguageScreen;