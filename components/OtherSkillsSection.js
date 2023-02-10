import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OtherSkillsSection() {
    const skills = [{ 'skill': 'Saas, Less' }, { 'skill': 'Gulp, Webpack' }, { 'skill': 'Git Knowledge' }, { 'skill': 'Angular' }]
    return (
        <>
            <Text style={styles.skillTitle}>Extra Skills</Text>
            {
                skills.map((skill, index) => (
                    <View key={index} style={{ alignSelf:'stretch'}}>
                        <View style={styles.skillStyle}>
                            <Icon
                                name='certificate'
                                color='orange'
                                size={25} />
                            <Text style={styles.skill}>{`  ${skill.skill}`}</Text>
                        </View>
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
        padding: 20
    },
    skillTitle: {
        alignSelf:'stretch',
        color: 'white',
        fontSize: 20,
        marginBottom:50
    }
})