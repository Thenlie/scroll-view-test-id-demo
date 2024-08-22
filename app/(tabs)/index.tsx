import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Minimal Reproducible Example
 * This is a minimal example to reproduce the testID bug in React native.
 * Both the scroll view and the view have a testID prop, but only the view's testID will display in Appium Inspector.
 */
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        horizontal
        testID='non-working-test-id'
      >
        <Text style={styles.text}>One</Text>
        <Text style={styles.text}>Two</Text>
        <Text style={styles.text}>Three</Text>
        <Text style={styles.text}>Four</Text>
        <Text style={styles.text}>Five</Text>
        <Text style={styles.text}>Six</Text>
        <Text style={styles.text}>Seven</Text>
        <Text style={styles.text}>Eight</Text>
      </ScrollView>
      <View testID='working-test-id' style={styles.view}>
        <Text style={styles.text}>One</Text>
        <Text style={styles.text}>Two</Text>
        <Text style={styles.text}>Three</Text>
        <Text style={styles.text}>Four</Text>
        <Text style={styles.text}>Five</Text>
        <Text style={styles.text}>Six</Text>
        <Text style={styles.text}>Seven</Text>
        <Text style={styles.text}>Eight</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 24,
  },
  scrollView: {
    margin: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  view: {
    margin: 1,
    borderWidth: 1,
    borderColor: 'green'
  }
});
