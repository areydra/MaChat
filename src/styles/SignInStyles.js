import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const SignInStyles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly', 
        flex: 1
    },
    containerIcon: {
        alignSelf: 'center'
    },
    iconPhone: {
        width: 300, 
        height: 300
    },
    containerContent: {
        marginHorizontal: 20
    },
    textInputPhoneNumber: {
        borderRadius: 4, 
        borderWidth: 1, 
        borderColor: 'gray', 
        paddingHorizontal: 12
    },
    buttonNext: {
        backgroundColor: Colors.primaryBlue,
        padding: 20, 
        borderRadius: 10, 
        marginTop: 24, 
        marginHorizontal: 64
    },
})

export default SignInStyles;