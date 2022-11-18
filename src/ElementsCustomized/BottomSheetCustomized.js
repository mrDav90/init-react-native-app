import {StyleSheet, View } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux';
import BottomSheet from '@gorhom/bottom-sheet';
import { colors } from '../utils/colors.utils';


const BottomSheetCustomized = ({content, points}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);
    
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => points  ? points : ['50%','75%'], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      //console.log('handleSheetChanges', index);
    }, []);

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor : currentMode.principalBgColor
        },
           
    })

  return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{
                shadowColor : "gray" , 
                shadowOffset : {height : 1 , width : 1},
                shadowOpacity : 0.5 ,
                shadowRadius : 10 ,
                borderRadius : 20,
                backgroundColor:currentMode.principalBgColor
            }}
            handleIndicatorStyle={{backgroundColor:currentMode.principalColor}}
        >
            <View style={styles.container}>
                {
                    content 
                }
            </View>
        </BottomSheet>
  )
}

export default BottomSheetCustomized

