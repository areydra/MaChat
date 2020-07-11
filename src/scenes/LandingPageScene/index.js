import React from 'react';
import { View } from 'react-native';
import MaLogo from '../../components/atoms/MaLogo';
import MaButton from '../../components/atoms/MaButton';
import LandingPageStyles from '../../styles/LandingPageStyles';

const LandingPageScene = ({navigation}) => (
  <View style={LandingPageStyles.container}>      
      <MaLogo/>
      <MaButton
          onPress={() => navigation.push('SignIn')}
          title="login with phone number"
          style={LandingPageStyles.containerButton}
          styleTitle={LandingPageStyles.titleButton}
      />
  </View>
);

export default LandingPageScene;
