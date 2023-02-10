import { Avatar, Badge } from '@rneui/themed';
import { Text, StyleSheet,View } from "react-native"

import React, { useContext } from 'react';
import IconComponent from '../IconCompnonent';
export default function HeroSection() {
    const icons = [{ 'iconName': 'facebook','link':'https://www.facebook.com/esraa.khattat/' }, { 'iconName': 'linkedin','link':'https://www.linkedin.com/in/esraa-yousri-9ab069154' }, { 'iconName': 'github','link':'https://github.com/esraakhattat' }, { 'iconName': 'twitter','link':'https://twitter.com/Esraa_Khattat' }, { 'iconName': 'instagram','link':'https://www.instagram.com/esraakhattat/' }]
    return (<>
        <Avatar
            source={require('../../assets/me.png')}
            size={200}
            rounded
            containerStyle={{ marginBottom: 40 }}
        >
            <Badge status="success" containerStyle={{ position: 'absolute', bottom: 5, left: 50 }} />
        </Avatar>
        <Text style={styles.textStyle}>Esraa Yousri</Text>
        <Text style={styles.textStyle}>Front end developer</Text>
        <View style={styles.iconsView}>
            {icons.map((icon, index) => (<IconComponent key={index} iconName={icon.iconName} link={icon.link} />))}</View>
    </>)
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        // fontWeight:'bold',
        color: 'white',
    },
    iconsView: {
        display: 'flex',
        flexDirection: 'row',
        gap:50,
        marginTop:20
    },
});

