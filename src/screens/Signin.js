import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextCustomized from '../ElementsCustomized/TextCustomized';
import InputCustomized from '../ElementsCustomized/InputCustomized';
import { Ionicons } from '@expo/vector-icons';
import ButtonCustomized from '../ElementsCustomized/ButtonCustomized';
import { colors } from '../utils/colors.utils';

const Signin = ({navigation}) => {
    const currentMode = useSelector((state)=>state.themeRdx.currentMode);

    const  [email   , setEmail] = useState(null);
    const  [password   , setPassword] = useState(null);
    const [loading , setLoading] = useState(false);

    const styles = StyleSheet.create({
        wrapper : {
            backgroundColor : currentMode.principalBgColor
        } ,
        container : {
            padding : 10
        } ,
    })
  return (
    <ScrollView style={styles.wrapper} >
        <View style={styles.container} >
                <TextCustomized text={"Signin"} mb={20} textSize={30} fw="500" />
                
                <InputCustomized 
                    mt={10} 
                    mb={10} 
                    prefixIcon={<Ionicons name='mail-outline' color={"gray"} size={18} style={{marginLeft : 5}} />} 
                    placeholder="Email"
                    value={email} onChangeText={(value)=>{setEmail(value);}} 
                    secureTextEntry={false}
                    bgColor="transparent"
                />
                <InputCustomized 
                    mt={10} 
                    mb={10} 
                    prefixIcon={<Ionicons name='lock-closed-outline' color={"gray"} size={18} style={{marginLeft : 5}} />} 
                    placeholder="Mot de passe"
                    type={"password"}
                    value={password} onChangeText={(value)=>{setPassword(value);}} 
                    bgColor="transparent"
                
                />

                <Text style={{marginTop:10 , marginBottom: 10 ,color:`${colors.appColor}`, alignSelf:'flex-end' }}> Mot de passe oublié? </Text>   

                
                <ButtonCustomized text={"Se connecter"} loading={loading} onPress={()=>{navigation.navigate("TabBar")}} />

        </View>
    </ScrollView>
  )
}

export default Signin


