import { View,StyleSheet } from "react-native"
export default function Divider(){
    return <View
    style={styles.hr}
  ></View>
}
const styles = StyleSheet.create({
    hr:{
    marginTop:70,
    marginBottom:70,
    backgroundColor: 'white',
    height: 1,
    alignSelf:'stretch',
}
});