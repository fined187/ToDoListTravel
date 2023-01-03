import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, TouchableHighlight} from 'react-native';
import { theme } from './color';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 44,
    fontWeight: "600",
  }
});
