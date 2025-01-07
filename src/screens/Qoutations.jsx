import { StyleSheet, Text, View } from 'react-native';

export default function Qoutation() {
  return (
    <View style={styles.container}>
      <Text>Qoutations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
