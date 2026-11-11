import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import HomeScreen from '../screens/HomeScreen';
import JobsScreen from '../screens/JobsScreen';
import SavedJobsScreen from '../screens/SavedJobsScreen';
import ApplicationsScreen from '../screens/ApplicationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const icons = { Home: 'home', Jobs: 'search', Saved: 'bookmark', Applications: 'document-text', Profile: 'person' };

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.forest },
        headerTintColor: '#fff',
        tabBarActiveTintColor: colors.green,
        tabBarIcon: ({ color, size }) => <Ionicons name={icons[route.name]} size={size} color={color} />,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trabaho Tu Bunawan' }} />
      <Tab.Screen name="Jobs" component={JobsScreen} options={{ title: 'Find Jobs' }} />
      <Tab.Screen name="Saved" component={SavedJobsScreen} options={{ title: 'Saved Jobs' }} />
      <Tab.Screen name="Applications" component={ApplicationsScreen} options={{ title: 'My Applications' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
    </Tab.Navigator>
  );
}
