import { View, Text, Image, Button, StyleSheet} from 'react-native';
import ModalPlaneta from './Modal';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Planeta({ planeta}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.card}>
             <ModalPlaneta 
            planeta={planeta} 
            modalVisible={modalVisible} 
            cerrarModal={() => setModalVisible(false)}
            />
            <View style={styles.container}>
                <Image
                    source={planeta.image}
                    style={styles.image}
                />
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                />

                <View style={styles.informacion}>
                    <Text style={styles.nombre}>{planeta.nombre}</Text>
                    <Button color={'rgb(135, 32, 32)'}  title="Ver más" onPress={() => setModalVisible(true)} />
                </View>
            </View>
        </View>

        
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 20,
        borderRadius: 10,
        height: 'auto'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 300,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        borderRadius: 10,
        position: 'absolute',
        overflow: 'hidden',
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    informacion:{
        color: 'white',
        padding: 20,
        maxWidth: 400,
        gap: 10,
    },
    gradient:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
});