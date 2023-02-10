import Icon from 'react-native-vector-icons/FontAwesome';
import {  Linking, StyleSheet,View } from "react-native"

export default function IconComponent(props){
    return <View style={styles.icon}>
        <Icon
        onPress={()=>{Linking.openURL(props.link)}}
        name={props.iconName}
        color='white'
        size={20} />
        </View>
}
const styles = StyleSheet.create({
    icon: {
        backgroundColor:'orange',
        padding:20,
        width:60,
        height:60,
        borderRadius:30,
        margin:7

    }
});