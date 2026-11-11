import React from 'react';
import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

export function Button({ title, onPress, variant = 'primary', style, disabled }) {
  const bg = variant === 'primary' ? colors.green : variant === 'gold' ? colors.gold : variant === 'danger' ? colors.danger : '#fff';
  const fg = variant === 'gold' ? colors.ink : variant === 'outline' ? colors.green : '#fff';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.btn, { backgroundColor: bg, opacity: disabled ? 0.5 : 1 }, variant === 'outline' && { borderWidth: 1.5, borderColor: colors.green }, style]}>
      <Text style={[styles.btnText, { color: fg }]}>{title}</Text>
    </Pressable>
  );
}

export function Field({ label, error, ...props }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholderTextColor="#9CA3AF" style={[styles.input, error && { borderColor: colors.danger }]} {...props} />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const statusColors = {
  pending: ['#FEF3C7', '#92400E'], reviewed: ['#DBEAFE', '#1E40AF'], shortlisted: ['#E0E7FF', '#3730A3'],
  accepted: ['#DCFCE7', '#166534'], rejected: ['#FEE2E2', '#991B1B'], withdrawn: ['#F3F4F6', '#4B5563'],
};
export function StatusPill({ status }) {
  const [bg, fg] = statusColors[status] || statusColors.pending;
  return (
    <View style={{ backgroundColor: bg, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 }}>
      <Text style={{ color: fg, fontSize: 12, fontWeight: '700', textTransform: 'capitalize' }}>{status}</Text>
    </View>
  );
}

export function Chip({ text, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && { backgroundColor: colors.green, borderColor: colors.green }]}>
      <Text style={{ color: active ? '#fff' : colors.ink, fontSize: 13, fontWeight: '600' }}>{text}</Text>
    </Pressable>
  );
}

export function Empty({ text }) {
  return (
    <View style={{ alignItems: 'center', padding: 40 }}>
      <Text style={{ color: colors.muted, textAlign: 'center' }}>{text}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  btn: { paddingVertical: 14, borderRadius: radius.md, alignItems: 'center' },
  btnText: { fontSize: 16, fontWeight: '700' },
  label: { fontSize: 13, fontWeight: '600', color: colors.ink, marginBottom: 6 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.ink },
  error: { color: colors.danger, fontSize: 12, marginTop: 4 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, borderWidth: 1, borderColor: colors.line, backgroundColor: '#fff', marginRight: 8 },
  screen: { flex: 1, backgroundColor: colors.bg },
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: 16, borderWidth: 1, borderColor: colors.line },
  h2: { fontSize: 18, fontWeight: '800', color: colors.forest, marginBottom: 8 },
});
