import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View , ScrollView, Image, Modal, Button, TouchableHighlight} from 'react-native';

export default function App() {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisibleplaya}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleplaya(!modalVisibleplaya)}></Button>
            </View>
          </View>
        </Modal>
      </View>
     <View style={{flexDirection: 'row'}}>
        <Image
        style={styles.banner}
        source ={require('./src/img/bg.jpg')}
        />
     </View>
     <View style={styles.contenedor}>
      <Text style={styles.titulo}>Qué hacer en El Salvador</Text>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight onPress={() => setModalVisibleplaya(!modalVisibleplaya)}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/actividad1.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={() => setModalVisibleplaya(!modalVisibleplaya)}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/actividad2.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={() => setModalVisibleplaya(!modalVisibleplaya)}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/actividad3.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={() => setModalVisibleplaya(!modalVisibleplaya)}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/actividad4.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={() => setModalVisibleplaya(!modalVisibleplaya)}>
            <Image
              style={styles.ciudad}
              source={require('./src/img/actividad5.jpg')}
            />
          </TouchableHighlight>   
        </View>
      </ScrollView>
      <Text style={styles.titulo}>Platillos salvadoreños</Text>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/mejores1.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/mejores2.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/mejores3.jpg')}
        />
      </View>
     </View>
     <Text style={styles.titulo}>Rutas turisticas</Text>
     <View style={styles.listado}>
      <View style={styles.listaItem}>
        <Image
          style={styles.mejores}
          source={require('./src/img/ruta1.jpg')}
        />
      </View>
      <View style={styles.listaItem}>
        <Image
          style={styles.mejores}
          source={require('./src/img/ruta2.jpg')}
        />
      </View>
      <View style={styles.listaItem}>
        <Image
          style={styles.mejores}
          source={require('./src/img/ruta3.jpg')}
        />
      </View>
      <View style={styles.listaItem}>
        <Image
          style={styles.mejores}
          source={require('./src/img/ruta4.jpg')}
        />
      </View>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner:{
    height: 250,
    flex: 1,
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contenedor:{
    marginHorizontal: 10,
  },
  ciudad:{
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores:{
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listaItem:{
    flexBasis: '49%',
  },
  vistaModal:{
    flex: 1,
    backgroundColor: '#000000aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Modal:{
    flex: 1, 
    width: 300,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    maxHeight: 200,
    margin: 100,
    borderRadius: 10,
    justifyContent: 'center',
    flexShrink: 1,
  },
  subtitulo:{
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
