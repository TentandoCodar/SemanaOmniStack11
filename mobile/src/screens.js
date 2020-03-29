import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Incidents from './screens/Incidents';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Incidents}></Stack.Screen>
                <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;