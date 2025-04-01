import { TouchableHighlight } from "react-native";
import { View, Text, StyleSheet, Alert } from "react-native";
import Colors from "../src/utils/Colors";
import { useState } from "react";


export default function Reservacion({reserva, eliminarReserva}){
    const {id, nombre, fecha, hora, cantidadPersonas, tipoSeccion} = reserva;

    const dialogoEliminar = (id) => {
        Alert.alert(
            'Eliminar Reserva',
            '¿Estás seguro de eliminar esta reserva?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelar'),
                    style: 'cancel'
                },
                { text: 'Eliminar', onPress: () => eliminarReserva(id) },
            ]
        );
    }



    return (
        <View style={styles.reserva}>
            <Text style={styles.dato}>{nombre}</Text>
            <Text style={styles.dato}>Fecha: {fecha}</Text>
            <Text style={styles.dato}>Hora: {hora}</Text>
            <Text style={styles.dato}>Cantidad de personas: {cantidadPersonas}</Text>
            <Text style={styles.dato}>Tipo de sección: {tipoSeccion}</Text>
            <TouchableHighlight 
                onPress={() => dialogoEliminar(id)}
                style={styles.btnEliminar}
            >
                <Text style={styles.textoEliminar}>Eliminar</Text>
            </TouchableHighlight>
        </View>
    );

}

const styles = StyleSheet.create({
    reserva: {
        backgroundColor: Colors.COLOR_BACKGROUND,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: Colors.COLOR_SECUNDARIO,
        borderWidth: 1,
    },
    textoEliminar: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dato: {
        color: Colors.COLOR_SECUNDARIO,
        fontSize: 18,
    },
    btnEliminar: {
        backgroundColor: Colors.COLOR_PRIMARIO,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
});