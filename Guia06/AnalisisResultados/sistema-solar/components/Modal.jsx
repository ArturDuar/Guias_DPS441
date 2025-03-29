import { Modal , View, Text, Image, Button, StyleSheet} from "react-native";


export default function ModalPlaneta({ planeta, modalVisible, cerrarModal }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={cerrarModal}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Image
                        source={planeta.image}
                        style={styles.image}
                    />
                    <View style={styles.informacion}>
                        <Text style={styles.nombre}>{planeta.nombre.toUpperCase()}</Text>
                        <Text style={styles.subtitles}>Masa</Text>
                        <Text style={styles.dato}>{planeta.masa}</Text>
                        <Text style={styles.subtitles}>Gravedad</Text>
                        <Text style={styles.dato}>{planeta.gravedad}</Text>
                        <Text style={styles.subtitles}>Duración de un año</Text>
                        <Text style={styles.dato}>{planeta.duracion_año}</Text>
                        <Text style={styles.subtitles}>Cantidad de lunas</Text>
                        <Text style={styles.dato}>{planeta.lunas}</Text>
                    </View>
                    <Button  color={'rgb(135, 32, 32)'} title="Cerrar" onPress={cerrarModal} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'rgb(87, 87, 87)',
        margin: 20,
        borderRadius: 10,
        maxWidth: '75%',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },
    subtitles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 0,
    },
    nombre: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        maxWidth: '100%',
        maxHeight: 200,
    },
    informacion:{
        color: 'white',
        padding: 20,
        maxWidth: 400,
        gap: 10,    
    },
    dato: {
        color: 'white',
    }
});