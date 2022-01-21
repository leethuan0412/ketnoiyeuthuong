import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import display from '../srcuser/display';
import settingacc from '../srcuser/settingacc';
import information from '../srcuser/information';
import phone from '../srcuser/phone';
import otpinput from'../srcuser/otpinput';
import notifications from '../srcuser/notifications';
import email from '../srcuser/email';
import sendemail from'../srcuser/sendemail';
const Init = () => {
    const Stack = createStackNavigator();
    //screenOptions={{ headerShown: false }} 
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="display" component={display} />
                <Stack.Screen name="settingacc" component={settingacc} />
                <Stack.Screen name="information" component={information} />
                <Stack.Screen name="phone" component={phone} />
                <Stack.Screen name="otpinput" component={otpinput} />
                <Stack.Screen name="notifications" component={notifications} />
                <Stack.Screen name="email" component={email} />
                <Stack.Screen name="sendemail" component={sendemail} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Init;