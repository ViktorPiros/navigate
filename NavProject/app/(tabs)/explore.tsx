// screens/ProgrammingLanguagesScreen.tsx
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

// Определяем интерфейс для языков программирования
interface Language {
    id: string;
    lang: string;
    experience: string; // Опыт работы с языком
}

// Массив языков программирования без логотипов
const langs: Language[] = [
    { id: '1', lang: 'JavaScript', experience: '2 года' },
    { id: '2', lang: 'SQL', experience: '1 год' },
    { id: '3', lang: 'React', experience: '1.5 года' },
];

// Компонент для отображения отдельного языка программирования
const LanguageItem = ({ lang }: { lang: Language }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.langText}>{lang.lang}</Text>
            <Text style={styles.experienceText}>{lang.experience}</Text>
        </View>
    );
};

// Основной компонент экрана
const ProgrammingLanguagesScreen: React.FC = () => {
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
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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

export default ProgrammingLanguagesScreen;