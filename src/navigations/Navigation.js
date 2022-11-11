import React from 'react'
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '../screens/TabBar';
import { colors } from '../utils/colors.utils';
import Signin from '../screens/Signin';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    
    const currentMode = useSelector((state)=>(state.themeRdx.currentMode));
    const stackScreen = (name , component , headerShown) => {
        return (
            <Stack.Screen 
                name={name} 
                component={component} 
                options={{
                    headerShown : headerShown ,
                    headerStyle : {
                        backgroundColor :  currentMode.principalBgColor ,              
                    }  ,
    
                    headerTitleStyle : {
                        color : currentMode.principalColor ,                        
                    },
                    headerBackTitleVisible : false ,
                    headerTintColor : currentMode.principalColor ,
                    
                }} 
            />
        )
    }

    const styles = StyleSheet.create({
    
    })
    
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    {stackScreen('Signin', Signin , false)}                    
                    {stackScreen('TabBar',TabBar , false)}                    
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Navigation

