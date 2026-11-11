import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, View, Alert } from 'react-native';
import { colors } from '../theme';
import { Button, Field, Chip, styles } from '../components/ui';
import { barangays } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function RegisterScreen({ navigation }) {
  const { setUser } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', barangay: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (v) => setForm({ ...form, [k]: v });

  const submit = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Enter a valid email address';
    if (!/^09\d{9}$/.test(form.phone)) e.phone = 'Use an 11-digit number starting with 09';
    if (form.password.length < 6) e.password = 'At least 6 characters';
    if (!form.barangay) e.barangay = 'Choose your barangay';
    setErrors(e);
    if (Object.keys(e).length) return;
    setUser({ ...form, name: form.name.trim() });
    Alert.alert('Account created', 'Welcome to Trabaho Tu Bunawan!', [
      { text: 'OK', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Main' }] }) },
    ]);
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
        <Text style={styles.h2}>Job Seeker Registration</Text>
        <Field label="Full name" value={form.name} onChangeText={set('name')} placeholder="Juan Dela Cruz" error={errors.name} />
        <Field label="Email" value={form.email} onChangeText={set('email')} keyboardType="email-address" autoCapitalize="none" error={errors.email} />
        <Field label="Mobile number" value={form.phone} onChangeText={set('phone')} keyboardType="numeric" maxLength={11} placeholder="09XXXXXXXXX" error={errors.phone} />
        <Field label="Password" value={form.password} onChangeText={set('password')} secureTextEntry error={errors.password} />
        <Text style={styles.label}>Barangay</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6 }}>
          {barangays.map((b) => (
            <View key={b} style={{ marginBottom: 8 }}><Chip text={b} active={form.barangay === b} onPress={() => setForm({ ...form, barangay: b })} /></View>
          ))}
        </View>
        {!!errors.barangay && <Text style={styles.error}>{errors.barangay}</Text>}
        <Button title="Create Account" onPress={submit} style={{ marginTop: 14 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
