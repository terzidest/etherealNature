import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from '../screens/AuthScreen';  // Update paths if needed
import HomeScreen from '../screens/HomeScreen';  // Update paths if needed
import { useAuth } from '../context/AuthContext';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { user } = useAuth();  // Access the user from AuthContext

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            {/* Other authenticated screens */}
          </>
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;