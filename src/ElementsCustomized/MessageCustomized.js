import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { colors } from '../utils/colors.utils';
import { Ionicons } from '@expo/vector-icons';

const MessageCustomized = ({type , message}) => {

    const fadeAnim  = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        container : {
            width: "90%" ,
            left : 0,
            right : 0,
            position:"absolute",
            zIndex : 9999,
            paddingVertical : 10 ,
            borderRadius : 10 ,
            height : "transparent" ,
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
        <Animated.View
                
            style={
                [
                    styles.container ,
                    {
                        transform : [
                            {translateY : 10},
                            {translateX : 15}
                        
                        ]
                    }, 
                    {
                        opacity : fadeAnim
                    }
                ]
            }
        >
    
                    <Ionicons 
                            
                            name={
                                    (type==="success" && "checkmark-circle-outline") ||
                                    (type==="error" && "close-circle-outline") ||
                                    (type==="warning" && "alert-circle-outline") 
                            }

                            size={24}
                            color="white"
                    />
                    <View style={{marginLeft : 5}} >
                            <Text style={styles.message} > {message} </Text>
                    </View>

        </Animated.View>
    )
}

export default MessageCustomized
