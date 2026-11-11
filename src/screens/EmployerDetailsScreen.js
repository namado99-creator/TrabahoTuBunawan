import React, { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { colors } from '../theme';
import { getEmployer, jobs } from '../data/mockData';
import { Empty, styles } from '../components/ui';
import JobCard from '../components/JobCard';

export default function EmployerDetailsScreen({ navigation, route }) {
  const { employerId } = route.params;
  const emp = getEmployer(employerId);
  useEffect(() => { if (emp) navigation.setOptions({ title: emp.name }); }, [employerId]);
  if (!emp) return <Empty text="Employer not found." />;
  const theirJobs = jobs.filter((j) => j.employerId === emp.id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: colors.forest }}>{emp.name}</Text>
        <Text style={{ color: colors.green, fontWeight: '700', marginTop: 4 }}>✔ {emp.verified} • {emp.type}</Text>
        <Text style={{ marginTop: 10, lineHeight: 22 }}>{emp.about}</Text>
        <Text style={{ marginTop: 10, color: colors.muted }}>{emp.address}, {emp.barangay}</Text>
        <Text style={{ color: colors.muted }}>Landmark: {emp.landmark}</Text>
        <Text style={{ marginTop: 8 }}>Contact: {emp.contact} ({emp.position})</Text>
      </View>
      <Text style={[styles.h2, { marginTop: 18 }]}>Open positions</Text>
      {theirJobs.map((j) => (
        <JobCard key={j.id} job={j} onPress={() => navigation.push('JobDetails', { jobId: j.id })} />
      ))}
    </ScrollView>
  );
}
