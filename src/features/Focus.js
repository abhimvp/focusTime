// import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { spacing, fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { useState } from 'react';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to Focus on Today?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.roundedButton}>
          <RoundedButton
            size={50}
            title="+"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  roundedButton: {
    justifyContent: 'center',
  },
});
