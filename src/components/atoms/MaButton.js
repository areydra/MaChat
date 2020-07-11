import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const MaButton = ({title, style, styleTitle, onPress, children}) => (
    <TouchableOpacity style={{padding: 20, ...style}} onPress={onPress}>
        <Text style={{ color: 'white', ...styleTitle }}>{title}</Text>
        {children}
    </TouchableOpacity>
)

export default MaButton;