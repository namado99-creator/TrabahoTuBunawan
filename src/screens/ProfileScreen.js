import React from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { Button, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function ProfileScreen({ navigation }) {
  const { user, setUser } = useApp();

  const logout = () => {
    setUser(null);
    navigation.getParent()?.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  if (!user) {
    return (
      <View style={[styles.screen, { padding: 24, justifyContent: 'center' }]}>
        <Text style={{ textAlign: 'center', color: colors.muted, marginBottom: 16 }}>You are browsing as a guest.</Text>
        <Button title="Log In" onPress={() => navigation.navigate('Login')} />
        <Button title="Create Account" variant="outline" style={{ marginTop: 10 }} onPress={() => navigation.navigate('Register')} />
      </View>
    );
  }
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={[styles.card, { alignItems: 'center' }]}>
        <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: colors.mint, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="person" size={36} color={colors.green} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '800', color: colors.forest, marginTop: 10 }}>{user.name}</Text>
        <Text style={{ color: colors.muted }}>{user.email}</Text>
        <Text style={{ color: colors.muted }}>{user.phone} • {user.barangay}</Text>
      </View>
      <Button title="Verified Employers" variant="outline" style={{ marginTop: 16 }} onPress={() => navigation.navigate('Employers')} />
      <Button title="Safety Tips" variant="outline" style={{ marginTop: 10 }} onPress={() => navigation.navigate('Safety')} />
      <Button title="Log Out" variant="danger" style={{ marginTop: 10 }} onPress={() => Alert.alert('Log out?', '', [{ text: 'Cancel', style: 'cancel' }, { text: 'Log out', onPress: logout }])} />
    </ScrollView>
  );
}
