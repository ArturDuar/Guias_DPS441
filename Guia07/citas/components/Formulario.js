import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import shortid from "react-id-generator";
import colors from '../src/utils/colors';

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState(new Date());
    const [hora, guardarHora] = useState(new Date());
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    }

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }

    const confirmarFecha = date => {
        guardarFecha(date); // Guardamos el objeto Date en el estado
        hideDatePicker();
    }

    const showTimePicker = () => {
        setIsTimePickerVisible(true);
    }

    const hideTimePicker = () => {
        setIsTimePickerVisible(false);
    }

    const confirmarHora = hora => {
        guardarHora(hora); // Guardamos el objeto Date en el estado
        hideTimePicker();
    }

    const crearNuevaCita = () => {
        if(paciente.trim() === '' ||
            propietario.trim() === '' ||
            telefono.trim() === '' ||
            fecha === null ||
            hora === null ||
            sintomas.trim() === '') {
                mostrarAlerta();
                return;
        }
        const cita = {paciente, propietario, telefono, fecha, hora, sintomas};
        cita.id= shortid();

        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        guardarCitasStorage(JSON.stringify(citasNuevo));

        guardarMostrarForm(false);

        guardarSintomas('');
        guardarPropietario('');
        guardarPaciente('');
        guardarTelefono('');
        guardarFecha(new Date());
        guardarHora(new Date());
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK',
            }]
        )
    }

    return (
        <>
            <ScrollView style={StyleSheet.formulario}>
                <View>
                    <Text style={StyleSheet.label}>Paciente: </Text>
                    <TextInput 
                    style={StyleSheet.input} 
                    onChangeText={texto => guardarPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={StyleSheet.label}>Propietario: </Text>
                    <TextInput 
                    style={StyleSheet.input} 
                    onChangeText={texto => guardarPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={StyleSheet.label}>Telefono: </Text>
                    <TextInput 
                    style={StyleSheet.input} 
                    onChangeText={texto => guardarTelefono(texto)}
                    keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha: </Text>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                    <DateTimePicker
                        isVisible={isDatePickerVisible}
                        mode='date'
                        value={fecha}
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elige una fecha'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' })}</Text>
                </View>
                <View>
                        <Text style={styles.label}>Hora: </Text>
                        <Button title="Seleccionar hora" onPress={showTimePicker} />
                        <DateTimePicker
                            isVisible={isTimePickerVisible}
                            mode='time'
                            value={hora}
                            onConfirm={confirmarHora}
                            onCancel={hideTimePicker}
                            locale='es_ES'
                            headerTextIOS='Elige una hora'
                            cancelTextIOS='Cancelar'
                            confirmTextIOS='Confirmar'
                        />
                        <Text>{hora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })}</Text>      
                </View>
                <View>
                    <Text style={styles.label}>Síntomas: </Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor:colors.BUTTON_COLOR,
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
        export default Formulario;