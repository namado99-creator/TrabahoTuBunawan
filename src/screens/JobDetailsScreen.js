import React, { useEffect } from 'react';
import { ScrollView, View, Text, Alert, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { getJob, getEmployer, getCategory } from '../data/mockData';
import { Button, Empty, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function JobDetailsScreen({ navigation, route }) {
  const { jobId } = route.params;            // PARAM RECEIVED
  const job = getJob(jobId);
  const { savedIds, toggleSaved, hasApplied, user } = useApp();

  // useEffect: runs when the screen opens or the job changes -> set header title
  useEffect(() => {
    if (job) navigation.setOptions({ title: job.title });
  }, [jobId]);

  if (!job) return <Empty text="This job is no longer available." />;
  const emp = getEmployer(job.employerId);
  const saved = savedIds.includes(job.id);
  const applied = hasApplied(job.id);

  const onApply = () => {
    if (!user) {
      Alert.alert('Log in required', 'Please log in to apply.', [
        { text: 'Cancel' },
        { text: 'Log In', onPress: () => navigation.navigate('Login') },
      ]);
      return;
    }
    navigation.navigate('Apply', { jobId: job.id });   // PARAM SENT
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: colors.forest }}>{job.title}</Text>
        <Pressable onPress={() => navigation.navigate('EmployerDetails', { employerId: emp.id })}>
          <Text style={{ color: colors.green, fontWeight: '700', marginTop: 4 }}>{emp.name}  ›</Text>
        </Pressable>
        <Text style={{ marginTop: 10, color: colors.muted }}>
          {getCategory(job.categoryId).name} • {job.type} • {job.barangay}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: '800', color: colors.green }}>{job.salary}</Text>
        <Text style={{ marginTop: 6, color: colors.muted }}>
          {job.slots} slot(s) • Apply before {job.deadline}{job.studentFriendly ? ' • Student-friendly' : ''}
        </Text>
      </View>

      <Section title="About the job"><Text style={{ lineHeight: 22 }}>{job.description}</Text></Section>
      <Section title="Responsibilities">{job.responsibilities.map((r, i) => <Text key={i} style={{ lineHeight: 22 }}>• {r}</Text>)}</Section>
      <Section title="Qualifications">{job.qualifications.map((r, i) => <Text key={i} style={{ lineHeight: 22 }}>• {r}</Text>)}</Section>

      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Button title={saved ? 'Saved ✓' : 'Save'} variant="outline" style={{ flex: 1, marginRight: 8 }} onPress={() => toggleSaved(job.id)} />
        <Button title={applied ? 'Already applied' : 'Apply Now'} style={{ flex: 2 }} disabled={applied} onPress={onApply} />
      </View>
      <Pressable style={{ marginTop: 18, flexDirection: 'row', justifyContent: 'center' }} onPress={() => Alert.alert('Report sent', 'Thank you. Our admin team will review this job post.')}>
        <Ionicons name="flag-outline" size={16} color={colors.danger} />
        <Text style={{ color: colors.danger, marginLeft: 6 }}>Report this job</Text>
      </Pressable>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={[styles.card, { marginTop: 12 }]}>
      <Text style={styles.h2}>{title}</Text>
      {children}
    </View>
  );
}
