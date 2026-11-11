import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native';
import { colors } from '../theme';
import { categories, jobs } from '../data/mockData';
import { Chip, Empty, styles } from '../components/ui';
import JobCard from '../components/JobCard';

export default function JobsScreen({ navigation, route }) {
  const [q, setQ] = useState('');
  const [categoryId, setCategoryId] = useState(null);

  // Params from Home: when a category is tapped, apply it as the filter
  useEffect(() => {
    if (route.params?.categoryId) setCategoryId(route.params.categoryId);
  }, [route.params?.categoryId]);

  const shown = jobs.filter(
    (j) =>
      (!categoryId || j.categoryId === categoryId) &&
      j.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <View style={styles.screen}>
      <View style={{ padding: 16, paddingBottom: 4 }}>
        <TextInput value={q} onChangeText={setQ} placeholder="Search jobs..." placeholderTextColor="#9CA3AF" style={styles.input} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
          <Chip text="All" active={!categoryId} onPress={() => setCategoryId(null)} />
          {categories.map((c) => (
            <Chip key={c.id} text={c.name} active={categoryId === c.id} onPress={() => setCategoryId(c.id)} />
          ))}
        </ScrollView>
        <Text style={{ color: colors.muted, marginTop: 10 }}>{shown.length} job(s) found</Text>
      </View>
      <FlatList
        data={shown}
        keyExtractor={(j) => String(j.id)}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Empty text="No jobs match your search." />}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { jobId: item.id })} />
        )}
      />
    </View>
  );
}
