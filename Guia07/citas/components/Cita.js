import React from 'react'
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Cita = ({item, eliminarPaciente}) =>{

    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        eliminarPaciente(id);
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 18
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20
    },
    textoEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
    },
    btnEliminar: {
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Cita;