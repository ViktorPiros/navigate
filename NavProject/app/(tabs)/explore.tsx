// explore.tsx
import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

// Определяем интерфейс для языков программирования
interface Language {
    id: string;
    lang: string;
    experience: string; // Опыт работы с языком
    logoUrl: string; // URL логотипа языка
}

// Массив языков программирования с ссылками на изображения
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
        logoUrl: 'https://icons8.com/icons/set/sql'
    },
    { 
        id: '3', 
        lang: 'React', 
        experience: '2 месяца', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
    },
];

// Компонент для отображения отдельного языка программирования
const LanguageItem = ({ lang }: { lang: Language }) => {
    const handlePress = () => {
        // Открываем ссылку на Википедию (или другую страницу) при нажатии на изображение
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

// Основной компонент экрана
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

// Стили для компонентов
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