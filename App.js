// import { StatusBar } from 'expo-status-bar';
// import react from React;
import { StyleSheet, Text, View,ScrollView, Button } from 'react-native';
import HeroSection from './components/hero-section/HeroSection';
import React from 'react';
import InfoSection from './components/InfoSection';
import Divider from './components/Divider';
import LanguageSection from './components/LanguagesSection';
import SkillsSection from './components/SkillsSection';
import OtherSkillsSection from './components/OtherSkillsSection';
import Empty from './components/Empty';



export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <HeroSection/>
      <Divider/>
      <InfoSection/>
      <Divider/>
      <LanguageSection/>
      <Divider/>
      <SkillsSection/>
      <Divider/>
      <OtherSkillsSection/>
      <Divider/>
      <Empty/>
      <Button 
        title="Download my CV"
        color="orange"/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    padding:20,
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor:'#202020',
    color:'white'
  },
  btn:{
    width:800
  }
});
