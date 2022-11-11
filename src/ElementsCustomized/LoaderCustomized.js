import {StyleSheet, View , Modal , TouchableWithoutFeedback , Animated , ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { colors } from '../utils/colors.utils';
import TextCustomized from './TextCustomized';

const LoaderCustomized = () => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const animatedValue = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(animatedValue , {
            toValue : 1 ,
            duration : 500 ,
            useNativeDriver : false
        }).start();
    },[])

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={true}
        >
                <View
                    style={{
                        backgroundColor : "rgba(0,0,0,0.5)",
                        position : "absolute",
                        top : 0 ,
                        left : 0 ,
                        right : 0 ,
                        bottom : 0 ,
                        width : "100%",
                        height : "100%" ,
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}
                >

                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    position : "absolute",
                                    top : 0 ,
                                    left : 0 ,
                                    right : 0 ,
                                    bottom : 0 ,
                                }}
                            />
                        </TouchableWithoutFeedback>

                        {
                            <Animated.View
                                style={{      
                                    position : "absolute",              
                                    width : 250 ,
                                    height  : 70 ,
                                    display :"flex",
                                    justifyContent:"center",
                                    alignContent:"center",  
                                    borderRadius : 5 ,          
                                    backgroundColor : currentMode.principalBgColor,
                                    
                                }}
                            >
                                <View 
                                    style={{
                                        width:"100%",
                                        display: 'flex',
                                        justifyContent:"center",
                                        alignItems:"center",
                                        flexDirection:"row"
                                    }}
                                >
                                    <TextCustomized text={"Loading"} color={colors.appColor} mr={10} />
                                    <ActivityIndicator color={colors.appColor} size="small" />
                                </View> 
                            </Animated.View>
                        }

                </View>

        </Modal>
    )
}

export default LoaderCustomized

