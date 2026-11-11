import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { Button } from '../components/ui';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={s.wrap}>
      <View style={s.logoCard}>
        <Image
          source={require('../../assets/Logo.jpg')}
          style={s.logoImage}
          resizeMode="contain"
        />
      </View>

      <Text style={s.title}>Trabaho Tu Bunawan</Text>
      <Text style={s.sub}>Local Skills. Local Jobs. Better Futures</Text>

      <View style={s.buttons}>
        <Button title="Log In" variant="gold" onPress={() => navigation.navigate('Login')} />
        <Button title="Create Account" variant="outline" style={{ marginTop: 12 }} onPress={() => navigation.navigate('Register')} />
        <Button title="Browse jobs as guest" variant="outline" style={{ marginTop: 12 }} onPress={() => navigation.navigate('Main')} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.forest, alignItems: 'center', justifyContent: 'center', padding: 28 },
  logoCard: {
  width: 160,
  height: 160,
  borderRadius: 80,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
},
logoImage: { width: 130, height: 130 },
  title: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 20, textAlign: 'center' },
  sub: { color: '#CFE8D9', textAlign: 'center', marginTop: 8, fontSize: 15, lineHeight: 22 },
  buttons: { width: '100%', marginTop: 28 },
});
