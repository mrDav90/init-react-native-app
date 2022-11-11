import {StyleSheet, View , Modal , TouchableWithoutFeedback , Animated, Image, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from './TextCustomized';
import { colors } from '../utils/colors.utils';
import { Ionicons } from '@expo/vector-icons';


const AlertCustomized = ({isAlertCustomizedVisible , setIsAlertCustomizedVisible , type, alertText , onPress , cancelText , validText , questionText }) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const animatedValue = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        if (isAlertCustomizedVisible) {
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
                setIsAlertCustomizedVisible(false)
            });
        }
    },[])

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={isAlertCustomizedVisible}
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

                        <TouchableWithoutFeedback 
                            onPress={()=>{
                                
                                return type === "question" ? setIsAlertCustomizedVisible(true) :  setIsAlertCustomizedVisible(false)
                            }}
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

                        {
                            <Animated.View
                                style={{      
                                    position : "absolute",              
                                    width : "90%",
                                    height  : "auto" ,
                                    display :"flex",
                                    justifyContent:"center",
                                    alignContent:"center",            
                                    backgroundColor : currentMode.principalBgColor,
                                    borderRadius : "20px" ,
                                    paddingVertical : 30
                                }}
                            >
                                <View style={{width:"100%",display:'flex',justifyContent:"center",alignItems:"center"}} >
                                    {
                                        type === "success" &&
                                        <>
                                            <Ionicons name='checkmark-circle-outline' size={76} color={colors.successColor} style={{marginBottom : 10}}  />
                                            <TextCustomized text={"Succès"} fw="bold" mb={10} />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "error" &&
                                        <>
                                            <Ionicons name='close-circle-outline' size={76} color={colors.errorColor} style={{marginBottom : 10}}  />
                                            <TextCustomized text={"Echec"} fw="bold" mb={10}  />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "warning" &&
                                        <>
                                            <Ionicons name='alert-circle-outline' size={76} color={colors.warningColor} style={{marginBottom : 10}}  />
                                            <TextCustomized text={"Warning"} fw="bold" mb={10}  />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "question" &&
                                        <>
                                            <Ionicons name='help' size={76} color={colors.questionColor} style={{marginBottom : 10}}  />      
                                            <TextCustomized text={ questionText ? questionText : "Etes-vous sûr(e)?"} textSize={20} fw="bold" mb={10} /> 
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} /> 
                                            <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",marginVertical:15}} >
                                                <TouchableOpacity onPress={()=>{setIsAlertCustomizedVisible(false)}} style={{paddingVertical:12 , paddingHorizontal : 24,backgroundColor:"transparent",marginHorizontal:10 , borderRadius : 5 , borderWidth : 1 , borderColor : colors.appColor}} >
                                                    <Text style={{color: colors.appColor}} > {cancelText ? cancelText : "Non"} </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity  onPress={()=>{onPress();setIsAlertCustomizedVisible(false);}}  style={{paddingVertical:12, paddingHorizontal : 24 , backgroundColor:"#3498db",marginHorizontal:10 , borderRadius : 5 , borderWidth : 1 , borderColor : colors.appColor}}>
                                                    <Text style={{color:"white"}} > {validText ? validText : "Oui"} </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    }

{
                                        type === "unauthorized" &&
                                        <>
                                            <Ionicons name='lock' size={76} color={colors.appColor} style={{marginBottom : 5}}  />
                                            <TextCustomized text={"Connexion"} textSize={25} fw="bold" mb={10} />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                            <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",marginVertical:15}} >
                                                <TouchableOpacity onPress={onPress} style={{paddingVertical:15 , paddingHorizontal : 30,backgroundColor: colors.appColor ,marginHorizontal:10 , borderRadius : 50}} >
                                                    <Text style={{color:"#fff"}} > Je me connecte </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    }
                                  
  
                                </View>
                            </Animated.View>
                        }

                </View>

        </Modal>
    )
}

export default AlertCustomized

const styles = StyleSheet.create({})