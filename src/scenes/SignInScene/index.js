import React from 'react';
import {TextInput, View, Alert, Image} from 'react-native';
import MaButton from '../../components/atoms/MaButton';
import { SignInStyles } from '../../styles';

const SignInScene = () => (
    <View style={SignInStyles.container}>
        <View style={SignInStyles.containerIcon}>
          <Image
            source={require('../../assets/images/icon_phone.png')}
            style={SignInStyles.iconPhone}
            resizeMode="contain"
          />
        </View>
        <View style={SignInStyles.containerContent}>
          <TextInput 
            placeholder="phone number"
            returnKeyType="done"
            keyboardType="number-pad"
            style={SignInStyles.textInputPhoneNumber}
          />
          <MaButton 
            title="NEXT"
            onPress={() => Alert.alert('Login in with phone number ...')} 
            style={SignInStyles.buttonNext} 
            styleTitle={{textAlign: 'center', color: 'white'}}
          />
        </View>
    </View>
);

export default SignInScene;
