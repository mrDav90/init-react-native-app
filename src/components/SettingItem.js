import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import TextCustomized from '../ElementsCustomized/TextCustomized'
import { Ionicons } from '@expo/vector-icons'

const SettingItem = ({title , onPress , icon}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode)
    const styles = StyleSheet.create({
        wrapper : {
            width:"100%",
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            paddingVertical : 15
            // borderBottomColor : colors.dividerColor ,
            // borderBottomWidth : 1
        } ,
        container : {
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            flexDirection:'row',
        } ,
     
    })
    return (
        <Pressable style={styles.wrapper} onPress={onPress}  >          
            <View style={styles.container} >
            {
                icon && 
                icon
            }
            <TextCustomized  ml={16} text={title} />
            </View>
            <Ionicons  name='chevron-forward' size={24} color={currentMode.principalColor} />
        </Pressable>
    )
}

export default SettingItem

