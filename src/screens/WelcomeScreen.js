import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { Button } from '../components/ui';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={s.wrap}>
      <View style={s.logo}><Ionicons name="briefcase" size={44} color={colors.forest} /></View>
      <Text style={s.title}>Trabaho Tu Bunawan</Text>
      <Text style={s.sub}>Find safe, verified work close to home in Bunawan, Agusan del Sur.</Text>
      <View style={{ width: '100%', marginTop: 36 }}>
        <Button title="Log In" variant="gold" onPress={() => navigation.navigate('Login')} />
        <Button title="Create Account" variant="outline" style={{ marginTop: 12 }} onPress={() => navigation.navigate('Register')} />
        <Button title="Browse jobs as guest" variant="outline" style={{ marginTop: 12 }} onPress={() => navigation.navigate('Main')} />
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.forest, alignItems: 'center', justifyContent: 'center', padding: 28 },
  logo: { width: 92, height: 92, borderRadius: 46, backgroundColor: colors.gold, alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 28, fontWeight: '800', marginTop: 20 },
  sub: { color: '#CFE8D9', textAlign: 'center', marginTop: 10, fontSize: 15, lineHeight: 22 },
});
