import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainTabs from './MainTabs';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import ApplyScreen from '../screens/ApplyScreen';
import ApplicationDetailsScreen from '../screens/ApplicationDetailsScreen';
import EmployersScreen from '../screens/EmployersScreen';
import EmployerDetailsScreen from '../screens/EmployerDetailsScreen';
import SafetyScreen from '../screens/SafetyScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: colors.forest },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}>
      {/* Auth flow */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log In' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Create Account' }} />
      {/* Main app (bottom tabs) */}
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      {/* Detail screens pushed on top of the tabs: back button is automatic */}
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: 'Job Details' }} />
      <Stack.Screen name="Apply" component={ApplyScreen} options={{ title: 'Apply for Job' }} />
      <Stack.Screen name="ApplicationDetails" component={ApplicationDetailsScreen} options={{ title: 'Application' }} />
      <Stack.Screen name="Employers" component={EmployersScreen} options={{ title: 'Verified Employers' }} />
      <Stack.Screen name="EmployerDetails" component={EmployerDetailsScreen} options={{ title: 'Employer' }} />
      <Stack.Screen name="Safety" component={SafetyScreen} options={{ title: 'Safety Tips' }} />
    </Stack.Navigator>
  );
}
