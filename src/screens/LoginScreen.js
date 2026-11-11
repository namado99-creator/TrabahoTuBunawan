import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, Pressable } from 'react-native';
import { colors } from '../theme';
import { Button, Field, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function LoginScreen({ navigation }) {
  const { setUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const submit = () => {
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) e.email = 'Enter a valid email address';
    if (password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    if (Object.keys(e).length) return;
    setUser({ name: 'Juan Dela Cruz', email: email.trim(), phone: '09171234567', barangay: 'Bunawan Brook' });
    navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
        <Text style={styles.h2}>Welcome back</Text>
        <Field label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholder="you@email.com" error={errors.email} />
        <Field label="Password" value={password} onChangeText={setPassword} secureTextEntry placeholder="••••••" error={errors.password} />
        <Button title="Log In" onPress={submit} />
        <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 18 }}>
          <Text style={{ textAlign: 'center', color: colors.green, fontWeight: '600' }}>No account yet? Register</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
