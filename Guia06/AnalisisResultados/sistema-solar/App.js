import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, SafeAreaView} from 'react-native';
import { planetas } from './assets/data/data';
import Planeta from './components/Planeta';

export default function App() {

  const renderItem = ({item}) => (
      <View style={styles.container}>
        <Planeta 
        planeta={item} 
        />
      </View>
  );

  return (
   
    <View style={styles.container}>
      <SafeAreaView>
          <StatusBar style="auto" />
          <Text style={styles.title}>Planetas del Sistema Solar</Text>
          <FlatList
            data={planetas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(61, 61, 61)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    minWidth: '100%',
    marginBottom: 20,
    maxWidth: '100%',
    backgroundColor: 'rgb(135, 32, 32)',
    color: 'white',
    paddingTop: 30,
  },
});
