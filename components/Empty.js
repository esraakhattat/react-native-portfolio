import { StyleSheet, View } from "react-native";

export default function(){
    
    return <View style={styles.empty}>
    </View>
}
const styles=StyleSheet.create({
    empty:{
        alignSelf:'stretch',
        height:200
    }
})