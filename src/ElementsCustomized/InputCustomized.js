import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/colors.utils'
import { useSelector } from 'react-redux'

const InputCustomized = ({mt , mb , prefixIcon , value , placeholder , onChangeText , keyboardType , h ,w , borderColor , bgColor , iconWidth , iconHeight , br , bw , type }) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const [isHide , setIsHide] = useState(true);
    const styles = StyleSheet.create({
        container : {
            width : w ? w : "100%",
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center' , 
            flexDirection : "row" ,
            borderWidth : bw ? bw : 1 ,
            borderColor : borderColor ? borderColor : "rgba(102, 110, 110, 0.3)" ,
            borderRadius : br ? br : 5 ,
            height : h ? h : 42 ,
            backgroundColor : bgColor ? bgColor : "rgba(102, 110, 110, 0.06)" ,
            marginTop : mt ? mt  : 0 ,
            marginBottom : mb ? mb  : 0 ,
        } ,
        input :  {
            borderWidth : 0 ,
            paddingLeft : prefixIcon ? 30 : 10 ,
            width : type === "password" ?  "90%" : "100%",
            height : "100%" ,
            color : currentMode.principalColor ,
            position : "absolute",
            zIndex : 5555 ,
            marginRight : 10
        } ,

        suffixIconContainer : {
            width : "10%" ,
            position :"absolute",
            zIndex : 99999999 ,
            right : 0 ,
            display:'flex',
            justifyContent:"center",
            alignItems:"center"
        }

    })
    return (
        <View style={styles.container}  >
            {prefixIcon && prefixIcon }
            <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor={"gray"} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={type==="password" && isHide}
                keyboardType={keyboardType}
                
            />
            <View style={styles.suffixIconContainer} >
                {
                    type === "password" && (
                        isHide ? 
                        <Pressable onPress={()=>setIsHide(!isHide)} >
                            <Ionicons name='eye-off' size={24} color={currentMode.principalColor} />
                        </Pressable>                             
                        :
                        <Pressable onPress={()=>setIsHide(!isHide)}>
                            <Ionicons name='eye' size={24} color={currentMode.principalColor} />
                        </Pressable>   
                    )            
                }
            </View>
        </View>
    )
}

export default InputCustomized

