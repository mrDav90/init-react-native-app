import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';


const BottomSheetCustomized = ({isBottomSheetVisible , setIsBottomSheetVisible , content , points}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => points  ? points : ['50%','75%','90%'], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      //console.log('handleSheetChanges', index);
      if (index === -1) {
            setIsBottomSheetVisible(false);
      }
    }, []);

    const styles = StyleSheet.create({
        wrapper : {
            position: "absolute",
            width:"100%",
            height : "100%",
            backgroundColor:"rgba(0,0,0,0.3)",
            top:0,
            left : 0
        } , 
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor : currentMode.principalBgColor
        },
           
    })

  return (

    isBottomSheetVisible === true &&
    <View style={styles.wrapper}>

        <Pressable         
            onPress={()=>{
                setIsBottomSheetVisible(false);
            }}
            style={{
                width:"100%",
                height:"100%",
                position:"absolute" ,
            }}
        >
        </Pressable>
        
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{zIndex:9999,}}
            enablePanDownToClose={true}
        >
            <View style={styles.container}>
                {
                    content 
                }
            </View>
        </BottomSheet>

    </View>
  )
}

export default BottomSheetCustomized

