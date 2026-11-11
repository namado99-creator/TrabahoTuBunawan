import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';
import { getEmployer } from '../data/mockData';
import { useApp } from '../context/AppContext';

// Reusable component. Props: job, onPress. Saved list lives in context (shared state).
export default function JobCard({ job, onPress }) {
  const { savedIds, toggleSaved } = useApp();
  const saved = savedIds.includes(job.id);
  const emp = getEmployer(job.employerId);
  return (
    <Pressable style={s.card} onPress={onPress}>
      <View style={{ flex: 1 }}>
        {job.featured && <Text style={s.featured}>★ FEATURED</Text>}
        <Text style={s.title}>{job.title}</Text>
        <Text style={s.emp}>{emp.name}</Text>
        <View style={s.row}>
          <Ionicons name="location-outline" size={14} color={colors.muted} />
          <Text style={s.meta}> {job.barangay}   </Text>
          <Ionicons name="time-outline" size={14} color={colors.muted} />
          <Text style={s.meta}> {job.type}</Text>
        </View>
        <Text style={s.salary}>{job.salary}</Text>
      </View>
      <Pressable hitSlop={10} onPress={() => toggleSaved(job.id)}>
        <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={24} color={saved ? colors.gold : colors.muted} />
      </Pressable>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: radius.lg, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: colors.line },
  featured: { color: colors.goldInk, fontSize: 11, fontWeight: '800', marginBottom: 4 },
  title: { fontSize: 17, fontWeight: '800', color: colors.forest },
  emp: { fontSize: 14, color: colors.ink, marginTop: 2 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  meta: { fontSize: 13, color: colors.muted },
  salary: { marginTop: 8, fontWeight: '700', color: colors.green },
});
