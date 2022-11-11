import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator , BottomTabBar } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import TextCustomized from '../ElementsCustomized/TextCustomized';
import { Ionicons } from '@expo/vector-icons';
import { setNavigation } from '../reducers/navigation.reducers';
import Home from '../components/Home';
import Settings from '../components/Settings';
import { colors } from '../utils/colors.utils';

const Tab = createBottomTabNavigator();

const TabBar = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentMode = useSelector((state)=>(state.themeRdx.currentMode));
    const screenOptions = {
        headerTitleAlign : "left",
        headerTitle : ()=> {
        return <TextCustomized text={"App"} fw="500" textSize={20} />
        } ,
        headerTitleStyle : {
        color :  currentMode.principalColor
        } ,
        headerStyle : {
        backgroundColor : currentMode.principalBgColor ,
        } ,
        tabBarShowLabel : true ,
        tabBarStyle : {
        backgroundColor :  currentMode.principalBgColor
        },
        tabBarActiveTintColor : currentMode.principalColor ,

    
        headerRight:()=>{
        return ( 
            <View style={{display:'flex',flexDirection:"row",alignItems:'center',width: 80 ,justifyContent: "space-between" ,marginRight:15}} >
                <Pressable>
                    <Ionicons name='search-outline' size={24} color={currentMode.principalColor}  />
                </Pressable>
                <Pressable onPress={()=>{navigation.navigate("Signin")}} >
                    <Ionicons name='log-in-outline' size={24} color={currentMode.principalColor}  />
                </Pressable>
            </View>
        )
        }
    } ;

    const customizeIcon = (focused , iconName1 , iconName2  ) => {
        return <Ionicons 
            name={ focused ? iconName1 : iconName2}
            size={24}
            color={focused ? colors.appColor :  currentMode.principalColor }
        />
    }

    const customizeLabel = (focused , labelText) => {
        return <TextCustomized text={labelText} textSize={10} color={focused?colors.appColor : currentMode.principalColor } />
    }

    const handleNavigation = () => {
        return  navigation ;
    }

    const styles = StyleSheet.create({})

    useEffect(()=>{
        dispatch(setNavigation(handleNavigation()))
    } , [])
    return (
        <Tab.Navigator
        screenOptions={screenOptions}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon : ({focused})=>{            
                        return customizeIcon(focused , "home" , "home-outline" )
                    } ,
                    tabBarLabelStyle : {
                        color : colors.appColor
                    } ,
                    tabBarLabelPosition :  "below-icon" ,
                    tabBarLabel : ({focused}) => {
                        return customizeLabel(focused , "Accueil")
                    }
                    
                }}
                
            /> 

            

            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon : ({focused})=>{            
                        return customizeIcon(focused , "settings" , "settings-outline"  )
                    },
                    tabBarLabel : ({focused}) => {
                    return customizeLabel(focused , "Paramètres")
                    }
                }}
            /> 

        

        </Tab.Navigator>
    )
}

export default TabBar

