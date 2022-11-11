import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from '../ElementsCustomized/TextCustomized';
import Test from './Test';

const Home = () => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            padding : 0
        } ,
    })
  return (
    <ScrollView style={styles.wrapper} >
        <View style={styles.container} >
            <TextCustomized text={"Home"} />
            <Test />
        </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})