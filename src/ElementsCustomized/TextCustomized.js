import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TextCustomized = ({text , textSize , fw , mt ,mb ,ml ,mr ,m , color , textAlign}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const styles = StyleSheet.create({
        text : {
            color : color ? color :  currentMode.principalColor ,
            fontSize : textSize ? textSize : 15 ,
            fontWeight : fw ? fw : "normal" ,
            margin : m ? m : 0 ,
            marginTop : mt ? mt : 0 ,
            marginBottom : mb ? mb : 0 ,
            marginLeft : ml ? ml : 0 ,
            marginRight : mr ? mr : 0 ,
            textAlign : textAlign ? textAlign : "left",   
                     
        }
    })

    return (
        <Text style={styles.text} >
            {text}
        </Text>
    )
}

export default TextCustomized

