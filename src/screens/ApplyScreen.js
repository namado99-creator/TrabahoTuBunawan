import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, View, Alert } from 'react-native';
import { colors } from '../theme';
import { getJob, getEmployer } from '../data/mockData';
import { Button, Field, Empty, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function ApplyScreen({ navigation, route }) {
  const { jobId } = route.params;
  const job = getJob(jobId);
  const { user, addApplication } = useApp();
  const [form, setForm] = useState({ name: user?.name || '', phone: user?.phone || '', message: '' });
  const [errors, setErrors] = useState({});
  if (!job) return <Empty text="Job not found." />;

  const submit = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^09\d{9}$/.test(form.phone)) e.phone = 'Use an 11-digit number starting with 09';
    setErrors(e);
    if (Object.keys(e).length) return;
    const id = addApplication({ jobId, ...form, name: form.name.trim() });
    Alert.alert('Application sent', `Your application for ${job.title} was submitted.`, [
      // replace: Apply screen is removed so Back doesn't return to a finished form
      { text: 'View application', onPress: () => navigation.replace('ApplicationDetails', { applicationId: id }) },
    ]);
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
        <View style={[styles.card, { marginBottom: 16 }]}>
          <Text style={{ fontWeight: '800', fontSize: 17, color: colors.forest }}>{job.title}</Text>
          <Text style={{ color: colors.muted }}>{getEmployer(job.employerId).name} • {job.barangay}</Text>
        </View>
        <Field label="Full name" value={form.name} onChangeText={(t) => setForm({ ...form, name: t })} error={errors.name} />
        <Field label="Mobile number" value={form.phone} onChangeText={(t) => setForm({ ...form, phone: t })} keyboardType="numeric" maxLength={11} error={errors.phone} />
        <Field label="Message to employer (optional)" value={form.message} onChangeText={(t) => setForm({ ...form, message: t })} multiline numberOfLines={4} style={[styles.input, { height: 100, textAlignVertical: 'top' }]} />
        <Text style={{ color: colors.muted, fontSize: 12, marginBottom: 14 }}>Never pay any fee to get a job. Real employers do not ask for money.</Text>
        <Button title="Submit Application" onPress={submit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
