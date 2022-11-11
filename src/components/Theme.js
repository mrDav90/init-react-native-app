import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Switch } from 'react-native'
import { colors } from '../utils/colors.utils'
import { darkMode , lightMode } from '../utils/theme.utils'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setTheme } from '../reducers/theme.reducers'
import { setChecked } from '../reducers/theme.reducers'
import TextCustomized from '../ElementsCustomized/TextCustomized'
import { Ionicons } from '@expo/vector-icons'

const Theme = () => {
    //const  [isChecked , setIsChecked] = useState(false);
    const isChecked = useSelector((state)=>state.themeRdx.isChecked)
    const currentMode = useSelector((state)=>state.themeRdx.currentMode)
    const dispatch = useDispatch();
    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            width : "100%" ,
            display : "flex",
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            padding : 15 ,
           // borderBottomWidth : 1 ,
            //borderBottomColor : colors.dividerColor
        }
    })

    const handleChecked = () => {
        return (!isChecked);
    }

    const handleTheme = () => {
        dispatch(setChecked(handleChecked()));
        if (isChecked) {
            return lightMode ;
        } else {
            return darkMode;
        }
    }

    useEffect(()=>{
        
    },[])
    return (
        <ScrollView style={styles.wrapper} >
            <View style={styles.container} >
                <View style={{display:'flex',alignItems:'center',flexDirection:'row'}} >
                    <Ionicons name='moon-outline' size={24} color={currentMode.principalColor} />
                    <TextCustomized ml={10} text={"Mode Sombre"} />          
                </View>
                <View style={{display:'flex',alignItems:'center',flexDirection:'row'}}>        
                    <TextCustomized mr={10} text={isChecked ? "On" : "Off"} />          
                    <Switch  onValueChange={()=>{dispatch(setTheme(handleTheme()))}} value={isChecked} style={{alignSelf:"flex-end"}} trackColor={{ true : colors.appColor}} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Theme
