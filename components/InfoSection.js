import { StyleSheet, View } from "react-native";
import Info from "./Info";

export default function InfoSection() {
    const information=[{'title':'Age','content':'24'},{'title':'Residence','content':'EG'},{'title':'Freelancer','content':'Available'},{'title':'Address','content':'Mallawi, Minia'}]
    return <>
        <View style={styles.InfoSection}>
            {
            information.map((info,index)=>(<Info key={index} title={info.title} content={info.content} />))
            }
        </View>
    </>
}
const styles = StyleSheet.create({
    InfoSection: {
        alignSelf:'stretch',
        display: 'flex',
        }
})