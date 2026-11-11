import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';
import { categories, jobs } from '../data/mockData';
import { Button, styles } from '../components/ui';
import JobCard from '../components/JobCard';
import { useApp } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const { user, applications, savedIds } = useApp();
  const featured = jobs.filter((j) => j.featured);
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={s.hero}>
        <Text style={s.kicker}>{user ? `Hello, ${user.name.split(' ')[0]}` : 'Hello, guest'}</Text>
        <Text style={s.heroTitle}>Your next opportunity starts in Bunawan.</Text>
        <Button title="Find Jobs" variant="gold" style={{ marginTop: 14 }} onPress={() => navigation.navigate('Jobs')} />
      </View>

      <View style={s.stats}>
        <Stat n={jobs.length} label="Open jobs" onPress={() => navigation.navigate('Jobs')} />
        <Stat n={savedIds.length} label="Saved" onPress={() => navigation.navigate('Saved')} />
        <Stat n={applications.length} label="Applied" onPress={() => navigation.navigate('Applications')} />
      </View>

      <Text style={styles.h2}>Browse by category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 18 }}>
        {categories.map((c) => (
          // Params: send the category id to the Jobs tab
          <Pressable key={c.id} style={s.cat} onPress={() => navigation.navigate('Jobs', { categoryId: c.id })}>
            <Ionicons name={c.icon} size={26} color={colors.green} />
            <Text style={s.catText} numberOfLines={2}>{c.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.h2}>Featured jobs</Text>
      {featured.map((j) => (
        <JobCard key={j.id} job={j} onPress={() => navigation.navigate('JobDetails', { jobId: j.id })} />
      ))}

      <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Button title="Verified Employers" variant="outline" style={{ flex: 1, marginRight: 8 }} onPress={() => navigation.navigate('Employers')} />
        <Button title="Safety Tips" variant="outline" style={{ flex: 1, marginLeft: 8 }} onPress={() => navigation.navigate('Safety')} />
      </View>
    </ScrollView>
  );
}

function Stat({ n, label, onPress }) {
  return (
    <Pressable style={s.stat} onPress={onPress}>
      <Text style={s.statN}>{n}</Text>
      <Text style={s.statL}>{label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  hero: { backgroundColor: colors.forest, borderRadius: radius.lg, padding: 20, marginBottom: 14 },
  kicker: { color: colors.gold, fontWeight: '700' },
  heroTitle: { color: '#fff', fontSize: 22, fontWeight: '800', marginTop: 6 },
  stats: { flexDirection: 'row', marginBottom: 18 },
  stat: { flex: 1, backgroundColor: '#fff', borderRadius: radius.md, padding: 14, marginHorizontal: 4, alignItems: 'center', borderWidth: 1, borderColor: colors.line },
  statN: { fontSize: 22, fontWeight: '800', color: colors.green },
  statL: { fontSize: 12, color: colors.muted },
  cat: { width: 96, height: 92, backgroundColor: '#fff', borderRadius: radius.md, marginRight: 10, padding: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.line },
  catText: { fontSize: 11, textAlign: 'center', marginTop: 6, color: colors.ink, fontWeight: '600' },
});
