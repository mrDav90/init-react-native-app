import { Button , StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { colors } from '../utils/colors.utils';

function ButtonCustomized({text , loading , onPress ,w , h , mv , outline , content }) {

  const styles = StyleSheet.create({
      container : {
        width : w ? w : "100%" ,
        height : h ? h : 40 ,
        marginVertical : mv ? mv : 2 ,
        borderWidth : outline && 1 ,
        borderColor : outline && colors.appColor ,
        backgroundColor : outline ? "transparent": colors.appColor , 
        display :"flex" ,
        justifyContent:"center",
        alignItems : "center" ,
        borderRadius : 5
      }
  })
  return (
    <TouchableOpacity
      disabled={loading}  
      onPress={onPress} 
      style={styles.container}
    >
        {
            loading ? 
            <ActivityIndicator color={"white"} size={"small"} />
            : 
            <Text style={{color: outline ? colors.appColor : "white"}} > {text} </Text>
        }   
        {
          content && content
        }
    </TouchableOpacity>
  )
}
export default ButtonCustomized