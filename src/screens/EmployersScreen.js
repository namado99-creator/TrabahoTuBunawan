import React from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import { colors } from '../theme';
import { employers, jobs } from '../data/mockData';
import { styles } from '../components/ui';

export default function EmployersScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={employers}
        keyExtractor={(e) => String(e.id)}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Pressable style={[styles.card, { marginBottom: 12 }]} onPress={() => navigation.navigate('EmployerDetails', { employerId: item.id })}>
            <Text style={{ fontWeight: '800', fontSize: 17, color: colors.forest }}>{item.name}</Text>
            <Text style={{ color: colors.green, fontWeight: '600', marginTop: 2 }}>✔ {item.verified}</Text>
            <Text style={{ color: colors.muted, marginTop: 4 }}>{item.barangay} • {jobs.filter((j) => j.employerId === item.id).length} open job(s)</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
