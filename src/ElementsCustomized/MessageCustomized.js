import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { icons } from '../actions/utils';
import { colors } from '../utils/colors.utils';

const MessageCustomized = ({type , message}) => {

    const fadeAnim  = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        wrapper : {
            position : "absolute",
            width : "100%",
            height : "100%",
            top : 0,
        } ,
        container : {
            width: "90%" ,
            zIndex : 9999,
            paddingVertical : 15 ,
            borderRadius : 10 ,
            display  : "flex",
            flexDirection : "row",
            justifyContent:"center",
            alignItems : "center",
            alignSelf : "center",
            shadowColor : "black",
            shadowOpacity : 0.3 ,
            shadowRadius  : 10 ,
            shadowOffset : {
                width : 5 ,
                height : 5
            },
            backgroundColor : (type==="success" && colors.successColor) || (type==="error"  && colors.errorColor) || (type==="warning" && colors.warningColor)
        } ,
        icon : {
            width : 20 ,
            height : 20 ,
            resizeMode: "cover",
            tintColor : "white"
        } ,
        message : {
            color : "white",
            fontSize : 14
        }
    })
    
    useEffect(()=>{
        Animated.timing(fadeAnim , {
            toValue : 1 ,
            duration : 500 , 
            useNativeDriver : true
        }).start();

        setTimeout(() => {
            Animated.timing(fadeAnim , {
                toValue : 0 ,
                duration : 500 , 
                useNativeDriver : true
            }).start();
        }, 3000);

       
    },[])
    return (
        <View style={styles.wrapper} >

            <Animated.View
                
                style={
                    [
                        styles.container ,
                        {
                            transform : [{
                                translateY : 10 ,
                                translateX : 15
                            }]
                        },
                        
                        {
                            opacity : fadeAnim
                        }
                    ]
                }
            >
                    
                    <Image
                        source={
                            (type === "success" && icons.successIcon) ||
                            (type === "error" && icons.errorIcon) ||
                            (type === "warning" && icons.warningIcon) 
                        }
                        style={styles.icon}
                    />
                    <View style={{marginLeft : 10}} >
                            <Text style={styles.message} > {message} </Text>
                    </View>

            </Animated.View>
        </View>
    )
}

export default MessageCustomized
