import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../srcloginn/login';
import sigin from '../srcloginn/sigin';
import password from '../srcloginn/password';
import forgetpassword from '../srcloginn/forgetpassword';
import forget from '../srcloginn/forget';
const Init = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="sigin" component={sigin} />
                <Stack.Screen name="password" component={password} />
                <Stack.Screen name="forgetpassword" component={forgetpassword} />
                <Stack.Screen name="forget" component={forget} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Init;