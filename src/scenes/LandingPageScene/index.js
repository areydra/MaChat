import React from 'react';
import { View } from 'react-native';
import MaLogo from '../../components/atoms/MaLogo';
import MaButton from '../../components/atoms/MaButton';

const LandingPageScene = ({navigation}) => (
  <View style={{ justifyContent: 'space-evenly', flex: 1 }}>      
      <MaLogo/>
      <MaButton
          onPress={() => navigation.push('SignIn')}
          title="login with phone number"
          style={{ backgroundColor: '#3466A2', borderRadius: 4, marginHorizontal: 20 }}
          styleTitle={{ textAlign: 'center', fontSize: 16 }}
      />
  </View>
);

export default LandingPageScene;
