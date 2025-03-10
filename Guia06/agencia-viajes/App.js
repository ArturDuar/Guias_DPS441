import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';

export default function App() {
  return (
    <View>
     <View style={{flexDirection: 'row'}}>
        <Image
        style={styles.banner}
        source ={require('./src/img/bg.jpg')}
        />
     </View>
     <View style={style.contenedor}>
      <Text style={styles.titulo}>Qué hacer en El Salvador</Text>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.ciudad}
            source={require('./src/img/actividad1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('./src/img/actividad2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('./src/img/actividad3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('./src/img/actividad4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('./src/img/actividad5.jpg')}
          />
        </View>
      </ScrollView>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner:{
    height: 250,
    flex: 1,
  }
});
