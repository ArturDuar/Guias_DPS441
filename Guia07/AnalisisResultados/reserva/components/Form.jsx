import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, Alert} from "react-native";
import Colors from "../src/utils/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";
import shortid from 'react-id-generator';

export default function Form({reservas, setReservas, guardarReservasStorage, setMostrarForm}){
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState(new Date());
    const [cantidadPersonas, setCantidadPersonas] = useState(0);
    const [tipoSeccion, setTipoSeccion] = useState();

    const data = [
        {key:'1', value:'Fumadores'},
        {key:'2', value:'No Fumadores'}
    ]
  

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    }

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }

    const confirmarFecha = (event, selectedDate) => {
        hideDatePicker();
        if (selectedDate) {
            setFecha(selectedDate);
        }
    }

    const confirmarHora = (event, selectedTime) => {
        hideTimePicker();
        if (selectedTime) {
            setHora(selectedTime);
        }
    }

    const showTimePicker = () => {
        setIsTimePickerVisible(true);
    }

    const hideTimePicker = () => {
        setIsTimePickerVisible(false);
    }

    const guardarReserva = () => {
        // Check if the inputs are valid
        if(nombre.trim() === '' ||
           !fecha ||
           !hora ||
           cantidadPersonas <= 0 ||
           !tipoSeccion) {
                mostrarAlerta();
                return;
        }

        // Check if the date is in the future
        const currentDate = new Date();
        if(fecha < currentDate && fecha.getDate() === currentDate.getDate()) {
            Alert.alert(
                'Error',
                'La fecha debe ser posterior a hoy',
                [{ text: 'OK' }]
            );
            return;
        }

        // Format the date and time as strings for storage
        const fechaFormateada = fecha.toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: '2-digit' 
        });
        
        const horaFormateada = hora.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        });

        // Create the reservation object with formatted strings
        const reserva = {
            id: shortid(),
            nombre, 
            fecha: fechaFormateada, 
            hora: horaFormateada, 
            cantidadPersonas, 
            tipoSeccion: data.find(item => item.key === tipoSeccion)?.value || tipoSeccion
        };

        const reservasNueva = [...reservas, reserva];
        setReservas(reservasNueva);

        guardarReservasStorage(JSON.stringify(reservasNueva));

        setMostrarForm(false);

        // Clear inputs
        setNombre('');
        setFecha(new Date());
        setHora(new Date());
        setCantidadPersonas("");
        setTipoSeccion("");
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
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulario para Reservar</Text>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            style={styles.inputTexto}
                            onChangeText={(text) => setNombre(text)}
                            value={nombre}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Fecha</Text>
                        <TouchableHighlight onPress={showDatePicker} style={styles.btn}>
                            <Text style={styles.btnText}>Elige una fecha</Text>
                        </TouchableHighlight>
                        {/* Solo mostrar DateTimePicker cuando isDatePickerVisible es true */}
                        {isDatePickerVisible && (
                            <DateTimePicker
                                value={fecha}
                                mode="date"
                                display='default'
                                onChange={confirmarFecha}
                                locale="es-ES"
                                onPointerCancel={hideDatePicker}
                                minimumDate={new Date()}
                            />
                        )}
                        
                        <Text style={styles.fechaSeleccionada}>
                            {fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' })}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Hora</Text>
                        <TouchableHighlight onPress={showTimePicker} style={styles.btn}>
                            <Text style={styles.btnText}>Elige una hora</Text>
                        </TouchableHighlight>
                        {/* Solo mostrar DateTimePicker cuando isDatePickerVisible es true */}
                        {isTimePickerVisible && (
                            <DateTimePicker
                                value={hora}
                                mode="time"
                                display='default'
                                onChange={confirmarHora}
                                locale="es-ES"
                                onPointerCancel={hideTimePicker}
                                minimumDate={new Date()}
                            />
                        )}
                        <Text style={styles.fechaSeleccionada}>
                            {hora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Cantidad de Personas</Text>
                        <TextInput
                            style={styles.inputTexto}
                            onChangeText={(text) => setCantidadPersonas(text)}
                            value={cantidadPersonas}
                            keyboardType="numeric"
                            maxLength={2}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Tipo de Sector</Text>
                        <SelectList
                            data={data}
                            setSelected={(item) => setTipoSeccion(item)}
                            value={tipoSeccion}
                            style={styles.inputTexto}
                        />
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => guardarReserva()} style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => setMostrarForm(false)} style={styles.btnSubmit}>
                            <Text style={styles.textoSubmit}>Cancelar</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        minWidth: '100%',
    },
    titulo : {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
        color: Colors.COLOR_SECUNDARIO
    },
    inputTexto: {
        minWidth: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    },
    label: {
        fontSize: 20,
        marginVertical: 5,
        paddingStart: 10,
    },
    btn:{
        backgroundColor: Colors.COLOR_SECUNDARIO,
        borderRadius: 10,
    },
    btnText:{
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 10,
    },
    fechaSeleccionada: {
        fontSize: 20,
        marginTop: 10,
        color: Colors.COLOR_PRIMARIO,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnSubmit:{        
        padding: 10,
        backgroundColor:Colors.COLOR_BOTONES,
        marginVertical: 10,
        borderRadius: 10,
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    scrollView: {
        marginVertical: 20,
        width: '100%',
        paddingVertical: 20,
    },     
});