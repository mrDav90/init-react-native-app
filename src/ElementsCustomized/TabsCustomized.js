import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../utils/colors.utils'
import { useSelector } from 'react-redux'


const TabsCustomized = ({data , outline , currentTabLabel ,setCurrentTabLabel , defaultCurrentTabKey}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    const [defaultSelectedKey , setDefaultSelectedKey] = useState( (defaultCurrentTabKey && data[defaultCurrentTabKey]._id) || data[0]._id );
    const styles = StyleSheet.create({
        wrapper : {
            borderBottomColor : outline ? colors.dividerColor : "transparent" , 
            borderBottomWidth : outline ? 1 : 0 ,
        } ,
        content : {
            display :"flex",
            flexDirection : "row",
            alignItems : "center",
        }
    })

    const  handlePress = (key) => {
        setDefaultSelectedKey(key);
    }

    useEffect(()=>{
        setCurrentTabLabel(data[defaultSelectedKey-1].label)       
    } , [defaultSelectedKey , currentTabLabel])


    return (
        <View style={styles.wrapper} >
            <ScrollView 
                showsHorizontalScrollIndicator={false}
                horizontal={true} 
                contentContainerStyle={{
                    paddingHorizontal:15 , 
                }} 
                >
                <View style={styles.content} >
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
                                        color : outline ? (defaultSelectedKey === item._id ? colors.appColor : currentMode.principalColor ) : (defaultSelectedKey === item._id ? "#fff" : currentMode.principalColor ),
                                        fontWeight : outline && "bold" ,
                                    }} 
                                > 
                                    {item.label} 
                                </Text>
                            </Pressable>
                        ))
                    }
                </View>         
            </ScrollView>
        </View>
    )
}

export default TabsCustomized

