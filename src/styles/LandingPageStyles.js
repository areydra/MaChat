import {StyleSheet} from "react-native";
import Colors from '../constant/Colors';

const LandingPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly', 
    },
    containerButton: {
        backgroundColor: Colors.primaryBlue, 
        borderRadius: 4, 
        marginHorizontal: 20
    },
    titleButton: { 
        textAlign: 'center', 
        fontSize: 16
    },
});

export default LandingPageStyles;