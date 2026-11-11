import React from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { colors } from '../theme';
import { getJob, getEmployer } from '../data/mockData';
import { Button, StatusPill, Empty, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function ApplicationDetailsScreen({ navigation, route }) {
  const { applicationId } = route.params;   // PARAM: id only, data looked up from state
  const { applications, withdrawApplication } = useApp();
  const app = applications.find((a) => a.id === applicationId);
  if (!app) return <Empty text="Application not found." />;
  const job = getJob(app.jobId);
  const emp = getEmployer(job.employerId);

  const withdraw = () =>
    Alert.alert('Withdraw application?', 'You cannot undo this.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Withdraw', style: 'destructive', onPress: () => withdrawApplication(app.id) },
    ]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: '800', color: colors.forest, flex: 1 }}>{job.title}</Text>
          <StatusPill status={app.status} />
        </View>
        <Text style={{ color: colors.muted, marginTop: 4 }}>{emp.name} • {job.barangay}</Text>
      </View>
      <View style={[styles.card, { marginTop: 12 }]}>
        <Row k="Applicant" v={app.name} />
        <Row k="Mobile" v={app.phone} />
        <Row k="Applied on" v={app.appliedAt} />
        <Row k="Message" v={app.message || '—'} />
      </View>
      <Button title="View job posting" variant="outline" style={{ marginTop: 14 }} onPress={() => navigation.navigate('JobDetails', { jobId: job.id })} />
      {app.status !== 'withdrawn' && <Button title="Withdraw application" variant="danger" style={{ marginTop: 10 }} onPress={withdraw} />}
    </ScrollView>
  );
}
const Row = ({ k, v }) => (
  <View style={{ marginBottom: 10 }}>
    <Text style={{ fontSize: 12, color: colors.muted }}>{k}</Text>
    <Text style={{ fontSize: 15, color: colors.ink }}>{v}</Text>
  </View>
);
