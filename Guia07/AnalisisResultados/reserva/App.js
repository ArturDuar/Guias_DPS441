import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Form from './components/Form';
import Colors from './src/utils/Colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reservacion from './components/Reservacion';

export default function App() {
  const [reservas, setReservas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  const guardarReservasStorage = (reservas) => {
    AsyncStorage.setItem('reservas', reservas);
  }

  useEffect(() => {
    const obtenerReservasStorage = async () => {
      try {
        const reservasStorage = await AsyncStorage.getItem('reservas');
        if(reservasStorage !== null) {
          setReservas(JSON.parse(reservasStorage));
        }
      } catch (error) {
        console.error(error);
      }
    }
    obtenerReservasStorage();
  }, []);

  const eliminarReserva = (id) => {
    const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
    setReservas(reservasFiltradas);
    guardarReservasStorage(JSON.stringify(reservasFiltradas));
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>RESERVAS RESTAURANTE</Text>
        </View>
        <View style={styles.formulario}>
          <TouchableHighlight onPress={() => setMostrarForm(true)} 
          style={[styles.btnForm, mostrarForm ? {display: 'none'} : {}]}>
            <Text style={styles.textoForm}>Crear nueva reservación</Text>
          </TouchableHighlight>
          {!mostrarForm ? (
            <>
            <View>
              {reservas < 0 && <Text style={styles.anuncioPrincipal}>No tiene reservas</Text>}
            </View>
            <FlatList 
            data={reservas}
            renderItem={({item}) => <Reservacion 
                                        reserva={item} 
                                        eliminarReserva={eliminarReserva}/>}
            keyExtractor={(item) => item.id}
            />
            </>
          ) : (
            <Form 
            reservas={reservas} 
            setReservas={setReservas} 
            guardarReservasStorage={guardarReservasStorage} 
            setMostrarForm={setMostrarForm} 
            />
          )}

        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_BACKGROUND,
  },
  titulo: {
    fontSize: 30,
    color: 'white',
  },
  header :{
    backgroundColor: Colors.COLOR_PRIMARIO,
    padding: 20,
  },
  btnForm:{
    backgroundColor: Colors.COLOR_BOTONES,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  textoForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',    
    fontSize: 20
  },
  formulario :{
    flex: 1,
    margin: 20,
  },
  anuncioPrincipal: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: Colors.COLOR_SECUNDARIO,
  },
});
