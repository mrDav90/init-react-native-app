import { ScrollView, StyleSheet, Text, View , Modal , TouchableWithoutFeedback , Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from './TextCustomized';
import { colors } from '../utils/colors.utils';
import { Ionicons } from '@expo/vector-icons';


const ModalCustomized = ({isModalCustomizedVisible , setIsModalCustomizedVisible , content , fullScreen }) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    //const [animatedValue , setAnimatedValue] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        if (isModalCustomizedVisible) {
            Animated.timing(animatedValue , {
                toValue : 1 ,
                duration : 500 ,
                useNativeDriver : false
            }).start();
        }
        else{
            Animated.timing(animatedValue , {
                toValue : 0 ,
                duration : 500 ,
                useNativeDriver : false
            }).start(()=>{
                setIsModalCustomizedVisible(false)
            });
        }
    },[])

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={isModalCustomizedVisible}
        >
                <View
                    style={{
                        backgroundColor : "rgba(0,0,0,0.2)",
                        position : "absolute",
                        top : 0 ,
                        left : 0 ,
                        right : 0 ,
                        bottom : 0 ,
                        width : "100%",
                        height : "100%",
                    }}
                >

                        <TouchableWithoutFeedback 
                            onPress={()=>{setIsModalCustomizedVisible(false)}}
                        >
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

                        <Animated.View
                            style={{
                                position : "absolute",
                                width : "100%",
                                height : fullScreen ? "100%" : "80%",
                                left : 0 ,
                                right : 0,
                                bottom : 0 ,             
                                backgroundColor : currentMode.principalBgColor,
                                borderTopRightRadius : fullScreen ? 0 : 20 ,
                                borderTopLeftRadius  : fullScreen ? 0 : 20,
                                shadowColor : "gray",
                                shadowRadius :  8,
                                shadowOpacity : 0.3 ,
                                shadowOffset : {
                                    height : 1 ,
                                    width : 1
                                }
                               
                            }}
                        >
                            <View style={{height: "10%",width:"100%",borderBottomColor:colors.dividerColor,borderBottomWidth:1,display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}} >
                                <TouchableOpacity onPress={()=>{setIsModalCustomizedVisible(false)}} style={{padding:15}} >
                                    <Ionicons name='close' size={24} color={currentMode.principalColor} />
                                </TouchableOpacity>
                            </View>
                            {content}
                        </Animated.View> 

                </View>

        </Modal>
    )
}

export default ModalCustomized

const styles = StyleSheet.create({})