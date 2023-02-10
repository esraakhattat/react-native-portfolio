import { StyleSheet, Text, View } from "react-native";

export default function Info(props) {
    const styles = StyleSheet.create({
        Info: {
            alignSelf:'stretch',
            flexDirection:'row',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom:30
    
        },
        title: {
            backgroundColor: 'orange',
            color: 'white',
            padding: 10,
            fontSize: 18
        },
        content:{
            color:props.title=='Freelancer'?'green':'white',
            fontSize: 18
        }
    })
    return (
        <>
            <View style={styles.Info}>
                <Text style={styles.title}>{`${props.title}:`}</Text>
                <Text style={styles.content}>{props.content}</Text>
            </View>

        </>
    )
}
