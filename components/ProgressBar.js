import { LinearProgress } from "@rneui/base"
import { StyleSheet, View } from "react-native"
export default function ProgressBar(props) {
    return (
        <View style={styles.progress}>
            <LinearProgress
                style={{ marginVertical: 10 }}
                value={props.precentage}
                variant="determinate"
                color="orange"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    progress: {
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'black',
        paddingRight: 10,
        paddingLeft: 10,
        padding: 1,
        alignSelf:'stretch'
    }
})