import React from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import { colors } from '../theme';
import { getJob, getEmployer } from '../data/mockData';
import { Empty, Button, StatusPill, styles } from '../components/ui';
import { useApp } from '../context/AppContext';

export default function ApplicationsScreen({ navigation }) {
  const { applications } = useApp();
  return (
    <View style={styles.screen}>
      <FlatList
        data={applications}
        keyExtractor={(a) => String(a.id)}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <View>
            <Empty text="You haven't applied to any jobs yet." />
            <Button title="Find jobs" onPress={() => navigation.navigate('Jobs')} />
          </View>
        }
        renderItem={({ item }) => {
          const job = getJob(item.jobId);
          return (
            <Pressable style={[styles.card, { marginBottom: 12 }]} onPress={() => navigation.navigate('ApplicationDetails', { applicationId: item.id })}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontWeight: '800', fontSize: 16, color: colors.forest, flex: 1 }}>{job.title}</Text>
                <StatusPill status={item.status} />
              </View>
              <Text style={{ color: colors.muted, marginTop: 4 }}>{getEmployer(job.employerId).name} • Applied {item.appliedAt}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
