import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

interface Language {
    id: string;
    lang: string;
    experience: string;
    logoUrl: string;
}

const langs: Language[] = [
    { 
        id: '1', 
        lang: 'JavaScript', 
        experience: '2 года', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
    },
    { 
        id: '2', 
        lang: 'SQL', 
        experience: '2 месяца', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'
    },
    { 
        id: '3', 
        lang: 'React', 
        experience: '2 месяца', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
    },
];

const LanguageItem = ({ lang }: { lang: Language }) => {
    const handlePress = () => {
        const url = `https://en.wikipedia.org/wiki/${lang.lang}`;
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.item}>
            <Image source={{ uri: lang.logoUrl }} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.langText}>{lang.lang}</Text>
                <Text style={styles.experienceText}>{lang.experience}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ExploreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={langs}
                renderItem={({ item }) => <LanguageItem lang={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    langText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experienceText: {
        fontSize: 14,
        color: '#666',
    },
});

export default ExploreScreen;