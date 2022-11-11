import { StyleSheet, Text, View , RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors.utils';

const RefreshControlCustomized = ({refreshing,setRefreshing}) => {
    //const [refreshing , setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
                setRefreshing(false);
        }, 2000);
    }, []);

    return (
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor = {colors.appColor}
            />
    )
}

export default RefreshControlCustomized

const styles = StyleSheet.create({})