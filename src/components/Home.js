import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from '../ElementsCustomized/TextCustomized';
import Test from './Test';
import TabsCustomized from '../ElementsCustomized/TabsCustomized';


const data = [
    {
        _id : 1 ,
        label : "While"
    } ,
    {
        _id : 2 ,
        label : "alive"
    } ,
    {
        _id : 3 ,
        label : "eat"
    } ,
    {
        _id : 4 ,
        label : "code"
    } ,
    {
        _id : 5 ,
        label : "sleep"
    } ,
]
const Home = () => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);

    const  [currentLabel , setCurrentLabel] = useState(null);

    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            padding : 0
        } ,
    })
  return (
    <ScrollView style={styles.wrapper} >
        <View style={styles.container} >
            <TextCustomized text={"Home"} />
            <Test />
          
            <TabsCustomized 
                data={data}
                currentTabLabel={currentLabel}
                setCurrentTabLabel={setCurrentLabel}
                outline
            />

            {
                <TextCustomized text={currentLabel} />
            }
        </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})