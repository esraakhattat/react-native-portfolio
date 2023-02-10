import { StyleSheet, Text, View } from "react-native"
import ProgressBar from "./ProgressBar"
export default function LanguageSection() {
    const languages = [{ 'language': 'Arabic', 'level': 1 }, { 'language': 'English', 'level': 0.9 }, { 'language': 'French', 'level': 0.4 }, { 'language': 'korean', 'level': 0.2 }]
    return (
        <>
            <Text style={styles.languageTitle}>Languages</Text>
            {
                languages.map((language, index) => (
                    <View key={index} style={{ alignSelf:'stretch'}}>
                        <View style={styles.languageStyle}>
                            <Text style={styles.language}>{`${language.language} :`}</Text>
                            <Text style={styles.language}>{`${language.level * 100}%`}</Text>
                        </View>
                        <ProgressBar precentage={language.level} />
                    </View>
                ))
            }
        </>
    )
}
const styles = StyleSheet.create({
    language: {
        color: 'white',
        fontSize: 15,
    },
    languageStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    languageTitle: {
        alignSelf:'stretch',
        color: 'white',
        fontSize: 20,
        marginBottom:50
    }
})