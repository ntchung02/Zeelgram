import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigtor/StackNavigation';
import Dashboard from './src/screen/auth/dashboard/Dashboard';
import { AuthContextProvider } from './src/contexts/AuthContext/AuthContext'

export default function App() {
  return (
    <View style={styles.container}>
      <AuthContextProvider>
     <StackNavigation/>
     </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:25,
    marginLeft:5,
  },
});
