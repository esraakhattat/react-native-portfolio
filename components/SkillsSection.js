import { StyleSheet, Text, View } from "react-native"
import ProgressBar from "./ProgressBar"
export default function SkillsSection() {
    const skills = [{ 'skill': 'Html', 'level': 0.95 }, { 'skill': 'CSS', 'level': 0.9 }, { 'skill': 'JS', 'level': 0.8 }, { 'skill': 'Bootstrap', 'level': 0.85 }, { 'skill': 'React', 'level': 0.7 }]
    return (
        <>
            <Text style={styles.skillTitle}>Skills</Text>
            {
                skills.map((skill, index) => (
                    <View key={index} style={{ width: '100%'}}>
                        <View style={styles.skillStyle}>
                            <Text style={styles.skill}>{`${skill.skill} :`}</Text>
                            <Text style={styles.skill}>{`${skill.level * 100}%`}</Text>
                        </View>
                        <ProgressBar precentage={skill.level} />
                    </View>
                ))
            }
        </>
    )
}
const styles = StyleSheet.create({
    skill: {
        color: 'white',
        fontSize: 15,
    },
    skillStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    skillTitle: {
        alignSelf:'stretch',
        color: 'white',
        fontSize: 20,
        marginBottom:50
    }
})