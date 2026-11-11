import React from 'react';
import { View, FlatList } from 'react-native';
import { jobs } from '../data/mockData';
import { Empty, Button, styles } from '../components/ui';
import JobCard from '../components/JobCard';
import { useApp } from '../context/AppContext';

export default function SavedJobsScreen({ navigation }) {
  const { savedIds } = useApp();
  const saved = jobs.filter((j) => savedIds.includes(j.id));
  return (
    <View style={styles.screen}>
      <FlatList
        data={saved}
        keyExtractor={(j) => String(j.id)}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <View>
            <Empty text="You have no saved jobs yet." />
            <Button title="Browse jobs" onPress={() => navigation.navigate('Jobs')} />
          </View>
        }
        renderItem={({ item }) => <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { jobId: item.id })} />}
      />
    </View>
  );
}
