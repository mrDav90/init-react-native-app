import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../utils/colors.utils'
import { useSelector } from 'react-redux'


const TabsCustomized = ({data , outline , action}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const [defaultSelectedKey , setDefaultSelectedKey] = useState(data[0]._id || 1);
    const styles = StyleSheet.create({
        container : {
            display :"flex",
            flexDirection : "row",
            alignItems : "center",
            marginVertical : 0 ,
        } ,
    })

    const  handlePress = (key) => {
        //console.log(key);
        setDefaultSelectedKey(key);
        //action();
    }

    useEffect(()=>{
      
    } , [defaultSelectedKey])


    return (
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal={true} 
            contentContainerStyle={{
                paddingHorizontal:15 , 
                borderBottomColor : outline ? colors.dividerColor : "transparent" , 
                borderBottomWidth : outline ? 1 : 0}} 
            >
            <View style={styles.container} >
                {
                    data.length !== 0 &&
                    data.map((item)=>(
                        <Pressable 
                            key={item._id}  
                            onPress={()=>{
                                handlePress(item._id);
                            }} 
                            style={{
                                paddingVertical : 10 ,
                                paddingHorizontal  : 20 ,
                                borderRadius : outline ? 0 : 5 ,
                                backgroundColor : outline ?  currentMode.principalBgColor :( defaultSelectedKey === item._id ? colors.appColor : colors.dividerColor) ,
                                marginRight : 15 ,
                                borderBottomWidth : outline ? (defaultSelectedKey === item?._id ? 2 : 2 ) : 0 ,
                                borderBottomColor : outline ? (defaultSelectedKey === item?._id ? colors.appColor : "transparent" ) : "transparent"
                            }} 
                        >
                            <Text 
                                style={{
                                    color : outline ? (defaultSelectedKey === item._id ? colors.appColor : "black" ) : (defaultSelectedKey === item._id ? "#fff" : currentMode.principalColor ),
                                    fontSize : 14 ,
                                    fontWeight : outline ? "500" : "300" ,

                                }} 
                            > 
                                {item.name} 
                            </Text>
                        </Pressable>
                    ))
                }
            </View>         
        </ScrollView>
    )
}

export default TabsCustomized

