import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { colors } from '../theme';
import { styles } from '../components/ui';

const tips = [
  ['Never pay to get hired', 'Real employers do not ask for registration, training, or placement fees.'],
  ['Check the employer badge', 'Look for Verified Business or Verified Local on employer profiles.'],
  ['Meet in public places', 'Do interviews in the workplace or a public place, not a private house.'],
  ['Protect your documents', 'Do not send ID photos or bank details before you are hired.'],
  ['Report suspicious posts', 'Use “Report this job” on the job page so the admin can review it.'],
];
export default function SafetyScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      {tips.map(([t, d], i) => (
        <View key={i} style={[styles.card, { marginBottom: 12 }]}>
          <Text style={{ fontWeight: '800', color: colors.forest, fontSize: 16 }}>{i + 1}. {t}</Text>
          <Text style={{ marginTop: 4, lineHeight: 21 }}>{d}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
