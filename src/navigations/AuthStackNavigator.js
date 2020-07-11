import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { LandingPageScene, SignInScene } from "../scenes";

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
    <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
        <Stack.Screen
            name="LandingPage"
            component={LandingPageScene}
            options={() => ({
                title: 'Landing Page',
                animationTypeForReplace: 'pop'
            })}
        />
        <Stack.Screen 
            name="SignIn"
            component={SignInScene}
            options={() => ({
                title: 'Sign In',
                animationTypeForReplace: 'pop'
            })}
        />
    </Stack.Navigator>
)

export default AuthStackNavigator;