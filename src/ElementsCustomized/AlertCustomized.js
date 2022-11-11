import {StyleSheet, View , Modal , TouchableWithoutFeedback , Animated, Image, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from './TextCustomized';
import { colors, icons } from '../actions/utils';
import { colors } from '../utils/colors.utils';
import { Ionicons } from '@expo/vector-icons';


const AlertCustomized = ({isAlertCustomizedVisible , setIsAlertCustomizedVisible , type, alertText , onPress , cancelText , validText , questionText }) => {
    const currentMode = useSelector((state)=>state.ar.currentMode);
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
                                            <Image source={icons.successIcon}  style={{width: 64,height: 64,tintColor : colors.successColor, marginBottom: 10 }} />
                                            <TextCustomized text={"Succès"} fw="bold" mb={10} />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "error" &&
                                        <>
                                            <Image source={icons.errorIcon}  style={{width: 64,height: 64,tintColor : colors.errorColor , marginBottom: 10 }} />
                                            <TextCustomized text={"Echec"} fw="bold" mb={10}  />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "warning" &&
                                        <>
                                            <Image source={icons.warningIcon}  style={{width: 64,height: 64,tintColor : colors.warningColor, marginBottom: 10 }} />
                                            <TextCustomized text={"Warning"} fw="bold" mb={10}  />
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} />  
                                        </>
                                    }

                                    {
                                        type === "question" &&
                                        <>
                                            <Image source={icons.questionIcon}  style={{width: 64,height: 64,tintColor : colors.questionColor , marginBottom: 10 }} />       
                                            <TextCustomized text={ questionText ? questionText : "Etes-vous sûr(e)?"} textSize={22} fw="bold" mb={10} /> 
                                            <TextCustomized text={alertText} textAlign="center" mr={10} ml={10} /> 
                                            <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",marginVertical:15}} >
                                                <TouchableOpacity onPress={()=>{setIsAlertCustomizedVisible(false)}} style={{paddingVertical:15 , paddingHorizontal : 30,backgroundColor:"red",marginHorizontal:10 , borderRadius : 5}} >
                                                    <Text style={{color:"white",fontSize : 18}} > {cancelText ? cancelText : "Non"} </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity  onPress={()=>{onPress();setIsAlertCustomizedVisible(false);}}  style={{paddingVertical:15, paddingHorizontal : 30 , backgroundColor:"#3498db",marginHorizontal:10 , borderRadius : 5}}>
                                                    <Text style={{color:"white",fontSize : 18}} > {validText ? validText : "Oui"} </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    }

{
                                        type === "unauthorized" &&
                                        <>
                                            <Image source={icons.passwordIcon}  style={{width: 64,height: 64,tintColor : colors.appColor , marginBottom: 10 }} />
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