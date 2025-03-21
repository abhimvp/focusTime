import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything Yet!!!</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have Focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    // padding:spacing.md,
    fontWeight: 'bold',
    // textAlign:'center'
  },
});
