import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from './TextCustomized';


const EmptyCustomized = ({text}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const styles = StyleSheet.create({
        container : {
            padding : 15 ,
            backgroundColor : currentMode.principalBgColor ,
            position:"relative",
            width:"100%",
            minHeight: 500,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }
    })
  return (
    <View style={styles.container}>
        <TextCustomized text={text ? text : "Vide"} mt={10} />
    </View>
  )
}

export default EmptyCustomized

const styles = StyleSheet.create({})