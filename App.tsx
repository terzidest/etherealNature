import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';  // Import the navigation

const App: React.FC = () => (
  <AuthProvider>
    <AppNavigator />
  </AuthProvider>
);

export default App;