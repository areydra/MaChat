import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';
import { View, Text } from 'react-native';

const RootStack = createStackNavigator();

const isUserHasAuthenticated = false;

const Home = () => (
    <View>
        <Text>Welcome Home</Text>
    </View>
)

const RootStackNavigator = () => {
    return(
        <RootStack.Navigator>
            {!isUserHasAuthenticated ? (
                <RootStack.Screen
                    name="Auth"
                    component={AuthStackNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            ):(
                <RootStack.Screen
                    name="Home"
                    component={Home}
                />
            )}
        </RootStack.Navigator>
    )
}

const Navigator = () => (
    <NavigationContainer>
        <RootStackNavigator/>
    </NavigationContainer>
)

export default Navigator;