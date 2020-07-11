import React from 'react';
import {TextInput, View, Alert, Image} from 'react-native';
import MaButton from '../../components/atoms/MaButton';

const SignInScene = () => (
    <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <View style={{ alignSelf: 'center'}}>
          <Image
            source={require('../../assets/images/icon_phone.png')}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <TextInput 
            placeholder="phone number"
            returnKeyType="done"
            keyboardType="number-pad"
            style={{ borderRadius: 4, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 12 }}
          />
          <MaButton 
            title="NEXT"
            onPress={() => Alert.alert('Login in with phone number ...')} 
            style={{backgroundColor: '#3466A2', padding: 20, borderRadius: 10, marginTop: 24, marginHorizontal: 64}} 
            styleTitle={{textAlign: 'center', color: 'white'}}
          />
        </View>
    </View>
);

export default SignInScene;
